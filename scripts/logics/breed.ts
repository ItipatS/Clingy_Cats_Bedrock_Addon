import { Entity } from "@minecraft/server";
import { TextureData, BREED_TEXTURES, EYE_COLORS, EYE_SHAPES, WHISKERS } from "../configs/catsbreed";



// ============================================================
// HELPERS
// ============================================================
export function distanceSq(a: Entity, b: Entity): number {
    const dx = a.location.x - b.location.x;
    const dy = a.location.y - b.location.y;
    const dz = a.location.z - b.location.z;
    return dx*dx + dy*dy + dz*dz;
}

/** Returns [mother, father] — the two closest adults of the same breed near the baby. */
export function findBothParents(baby: Entity, maxDistance = 6): [Entity, Entity] | [Entity] | [] {
    const adults = baby.dimension
        .getEntities({ location: baby.location, maxDistance, type: baby.typeId })
        .filter(e => e.id !== baby.id && !e.hasComponent("minecraft:is_baby"))
        .sort((a, b) => distanceSq(a, baby) - distanceSq(b, baby));
    if (adults.length >= 2) return [adults[0], adults[1]];
    if (adults.length === 1) return [adults[0]];
    return [];
}

export function randomFrom<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function uniqueValues(catalog: Record<number, TextureData>, key: keyof TextureData): string[] {
    return [...new Set(Object.values(catalog).map(d => d[key]))];
}

/** Read baked traits directly from a parent entity's properties. */
function getParentTraits(parent: Entity): TextureData {
    return {
        pattern: parent.getProperty("clingy_cats:pattern") as string,
        color:   parent.getProperty("clingy_cats:color")   as string,
        hairs:   parent.getProperty("clingy_cats:hairs")   as string,
        tail:    parent.getProperty("clingy_cats:tail")    as string,
        snout:   parent.getProperty("clingy_cats:snout")   as string,
        head:    parent.getProperty("clingy_cats:head")    as string,
    };
}

/**
 * Pick one trait value using two-parent genetics.
 * - 50/50 coin flip which parent to inherit from
 * - inheritRate chance to keep that parent's value, otherwise pick random valid value
 */
function inheritTrait(
    traitA: string,
    traitB: string,
    inheritRate: number,
    validValues: string[]
): string {
    const source = Math.random() < 0.5 ? traitA : traitB;
    return Math.random() < inheritRate ? source : randomFrom(validValues);
}

// Pick a texture index matching target traits, relaxing constraints if no exact match
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

    // Total fallback — anything in breed
    return randomFrom(entries).idx;
}

// ============================================================
// ASSIGN APPEARANCE
// ============================================================
export function applyTextureData(cat: Entity, idx: number, data: TextureData): void {
    cat.setProperty("clingy_cats:sub_variant", idx);
    cat.setProperty("clingy_cats:hairs",   data.hairs);
    cat.setProperty("clingy_cats:tail",    data.tail);
    cat.setProperty("clingy_cats:snout",   data.snout);
    cat.setProperty("clingy_cats:head",    data.head);
    cat.setProperty("clingy_cats:pattern", data.pattern);
    cat.setProperty("clingy_cats:color",   data.color);
}

export function assignRandomAppearance(cat: Entity): void {
    const catalog = BREED_TEXTURES[cat.typeId];
    const maxIdx = Object.keys(catalog).length - 1;
    const idx = Math.floor(Math.random() * (maxIdx + 1));
    applyTextureData(cat, idx, catalog[idx]);
}

export function assignInheritedAppearance(baby: Entity, parentA: Entity, parentB?: Entity): void {
    const catalog = BREED_TEXTURES[baby.typeId];
    const traitsA = getParentTraits(parentA);
    const traitsB = parentB ? getParentTraits(parentB) : traitsA; // single parent: same source for both sides

    const targetPattern = inheritTrait(traitsA.pattern, traitsB.pattern, 0.85, uniqueValues(catalog, "pattern"));
    const targetColor   = inheritTrait(traitsA.color,   traitsB.color,   0.85, uniqueValues(catalog, "color"));
    const targetHairs   = inheritTrait(traitsA.hairs,   traitsB.hairs,   0.80, uniqueValues(catalog, "hairs"));
    const targetTail    = inheritTrait(traitsA.tail,    traitsB.tail,    0.95, uniqueValues(catalog, "tail"));
    const targetSnout   = inheritTrait(traitsA.snout,   traitsB.snout,   0.95, uniqueValues(catalog, "snout"));
    const targetHead    = inheritTrait(traitsA.head,    traitsB.head,    0.95, uniqueValues(catalog, "head"));

    const idx = pickTexture(catalog, {
        pattern: targetPattern,
        color:   targetColor,
        hairs:   targetHairs,
        tail:    targetTail,
        snout:   targetSnout,
        head:    targetHead,
    });

    applyTextureData(baby, idx, catalog[idx]);
}

export function assignRandomEyesAndWhiskers(cat: Entity): void {
    cat.setProperty("clingy_cats:eye_color",  randomFrom(EYE_COLORS.filter(c => c !== "heterochromia")));
    cat.setProperty("clingy_cats:eye_shape",  randomFrom(EYE_SHAPES));
    cat.setProperty("clingy_cats:whiskers",   randomFrom(WHISKERS));
}

export function assignInheritedEyesAndWhiskers(baby: Entity, parentA: Entity, parentB?: Entity): void {
    // Eye color — 50/50 which parent, then 90% exact inherit, 9% random non-hetero, 1% heterochromia
    const sourceEyeColor = (parentB && Math.random() < 0.5) ? parentB : parentA;
    const inheritedColor = sourceEyeColor.getProperty("clingy_cats:eye_color") as string;
    const colorRoll = Math.random();
    if (colorRoll < 0.90)      baby.setProperty("clingy_cats:eye_color", inheritedColor);
    else if (colorRoll < 0.99) baby.setProperty("clingy_cats:eye_color", randomFrom(EYE_COLORS.filter(c => c !== "heterochromia")));
    else                       baby.setProperty("clingy_cats:eye_color", "heterochromia");

    // Eye shape — 50/50 which parent, then drift ±1 from that parent's shape
    const sourceEyeShape = (parentB && Math.random() < 0.5) ? parentB : parentA;
    const inheritedShapeIdx = EYE_SHAPES.indexOf(sourceEyeShape.getProperty("clingy_cats:eye_shape") as typeof EYE_SHAPES[number]);
    const shapeDrift = Math.random() < 0.85
        ? Math.max(0, Math.min(EYE_SHAPES.length - 1, inheritedShapeIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * EYE_SHAPES.length);
    baby.setProperty("clingy_cats:eye_shape", EYE_SHAPES[shapeDrift]);

    // Whiskers — 50/50 which parent, then drift ±1 from that parent's whiskers
    const sourceWhiskers = (parentB && Math.random() < 0.5) ? parentB : parentA;
    const inheritedWhiskerIdx = WHISKERS.indexOf(sourceWhiskers.getProperty("clingy_cats:whiskers") as typeof WHISKERS[number]);
    const whiskerDrift = Math.random() < 0.90
        ? Math.max(0, Math.min(WHISKERS.length - 1, inheritedWhiskerIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * WHISKERS.length);
    baby.setProperty("clingy_cats:whiskers", WHISKERS[whiskerDrift]);
}