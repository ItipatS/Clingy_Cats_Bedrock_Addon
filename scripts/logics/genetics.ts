import { TextureData, BREED_TEXTURES, PATTERN_DRIFT } from '../configs/catsbreed';
import { randomFrom, uniqueValues } from './utils';

// ============================================================
// TYPES
// ============================================================

export interface ParentGeneData {
    typeId:     string;
    traits:     TextureData;
    eyeColor:   string;
    eyeShape:   string;
    whiskers:   string;
}

export interface ConceptionRecord {
    mother:     ParentGeneData;
    father:     ParentGeneData | undefined;
    babyCount:  number;
}

// ============================================================
// TRAIT INHERITANCE
// ============================================================

/**
 * Pick one trait value using two-parent genetics.
 * 50/50 coin flip which parent to inherit from, then inheritRate
 * chance to keep that value, otherwise pick random from validValues.
 */
export function inheritTrait(
    traitA: string,
    traitB: string,
    inheritRate: number,
    validValues: string[]
): string {
    const source = Math.random() < 0.5 ? traitA : traitB;
    return Math.random() < inheritRate ? source : randomFrom(validValues);
}

export function inheritPattern(
    patternA: string,
    patternB: string,
    colorResult: string,
    inheritRate: number,
    validValues: string[]
): string {
    const source = Math.random() < 0.5 ? patternA : patternB;

    const applyColorGate = (pool: string[]): string[] => {
        if (source === "sphinx") return pool;
        // calico needs white base; tortoiseshell needs non-white
        return colorResult === "white"
            ? pool.filter(p => p !== "tortoiseshell")
            : pool.filter(p => p !== "calico");
    };

    const fallback = (pool: string[]) =>
        pool.length > 0 ? pool : (["bicolor", "solid", "tabby"].filter(p => validValues.includes(p)).length > 0
            ? ["bicolor", "solid", "tabby"].filter(p => validValues.includes(p))
            : validValues);

    if (Math.random() < inheritRate) {
        const driftPool = fallback(
            applyColorGate((PATTERN_DRIFT[source] ?? [source]).filter(p => validValues.includes(p)))
        );
        return randomFrom(driftPool);
    }

    // Mutation — fully random but still color-gated
    return randomFrom(fallback(applyColorGate(validValues)));
}

// ============================================================
// TEXTURE SELECTION
// ============================================================

/** Pick a texture index matching target traits, relaxing constraints if no exact match. */
export function pickTexture(
    catalog: Record<number, TextureData>,
    target: Partial<TextureData>
): number {
    const entries = Object.entries(catalog).map(([i, d]) => ({ idx: Number(i), data: d }));

    // Exact match on all target fields
    const exact = entries.filter(e =>
        Object.entries(target).every(([k, v]) => e.data[k as keyof TextureData] === v)
    );
    if (exact.length > 0) return randomFrom(exact).idx;

    // Relax: drop color first (most flexible trait)
    const { color: _c, ...noColor } = target;
    const relaxed = entries.filter(e =>
        Object.entries(noColor).every(([k, v]) => e.data[k as keyof TextureData] === v)
    );
    if (relaxed.length > 0) return randomFrom(relaxed).idx;

    // Relax further: keep only pattern + tail + snout + head
    const { hairs: _h, ...structural } = noColor;
    const minimal = entries.filter(e =>
        Object.entries(structural).every(([k, v]) => e.data[k as keyof TextureData] === v)
    );
    if (minimal.length > 0) return randomFrom(minimal).idx;

    return randomFrom(entries).idx;
}

// ============================================================
// CROSS-BREED DETERMINATION
// ============================================================

/**
 * Find a third breed whose catalog shares at least one pattern AND color from either parent.
 * Falls back to one of the two parent breeds if no compatible third breed exists.
 */
export function findMutationBreed(motherTypeId: string, fatherTypeId: string): string {
    const parentBreeds = new Set([motherTypeId, fatherTypeId]);
    const motherCatalog = BREED_TEXTURES[motherTypeId];
    const fatherCatalog = BREED_TEXTURES[fatherTypeId] ?? motherCatalog;

    const validPatterns = new Set([
        ...uniqueValues(motherCatalog, "pattern"),
        ...uniqueValues(fatherCatalog, "pattern"),
    ]);
    const validColors = new Set([
        ...uniqueValues(motherCatalog, "color"),
        ...uniqueValues(fatherCatalog, "color"),
    ]);

    const candidates: string[] = [];
    for (const [breedId, catalog] of Object.entries(BREED_TEXTURES)) {
        if (parentBreeds.has(breedId)) continue;
        const hasMatch = Object.values(catalog).some(
            e => validPatterns.has(e.pattern) && validColors.has(e.color)
        );
        if (hasMatch) candidates.push(breedId);
    }

    return candidates.length > 0
        ? randomFrom(candidates)
        : randomFrom([motherTypeId, fatherTypeId]);
}

/**
 * 45% mother breed, 45% father breed, 10% mutation to a genetically compatible third breed.
 * Falls back to mother breed if no father data.
 */
export function determineBabyBreed(mother: ParentGeneData, father: ParentGeneData | undefined): string {
    if (!father || father.typeId === mother.typeId) return mother.typeId;
    const roll = Math.random();
    if (roll < 0.45) return mother.typeId;
    if (roll < 0.90) return father.typeId;
    return findMutationBreed(mother.typeId, father.typeId);
}
