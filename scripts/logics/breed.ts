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

export function findNearestAdult(baby: Entity, maxDistance = 6): Entity | undefined {
    return baby.dimension
        .getEntities({ location: baby.location, maxDistance, type: baby.typeId })
        .filter(e => e.id !== baby.id && !e.hasComponent("minecraft:is_baby"))
        .sort((a, b) => distanceSq(a, baby) - distanceSq(b, baby))[0];
}

export function randomFrom<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function uniqueValues(catalog: Record<number, TextureData>, key: keyof TextureData): string[] {
    return [...new Set(Object.values(catalog).map(d => d[key]))];
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

export function assignInheritedAppearance(baby: Entity, mother: Entity): void {
    const catalog = BREED_TEXTURES[baby.typeId];
    const motherIdx = mother.getProperty("clingy_cats:sub_variant") as number ?? 0;
    const motherData = catalog[motherIdx];

    // Each trait: inherit mother's value or mutate to another valid value in this breed
    const targetPattern = Math.random() < 0.85 ? motherData.pattern : randomFrom(uniqueValues(catalog, "pattern"));
    const targetColor   = Math.random() < 0.85 ? motherData.color   : randomFrom(uniqueValues(catalog, "color"));
    const targetHairs   = Math.random() < 0.80 ? motherData.hairs   : randomFrom(uniqueValues(catalog, "hairs"));
    const targetTail    = Math.random() < 0.95 ? motherData.tail    : randomFrom(uniqueValues(catalog, "tail"));
    const targetSnout   = Math.random() < 0.95 ? motherData.snout   : randomFrom(uniqueValues(catalog, "snout"));
    const targetHead    = Math.random() < 0.95 ? motherData.head    : randomFrom(uniqueValues(catalog, "head"));

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

export function assignInheritedEyesAndWhiskers(baby: Entity, mother: Entity): void {
    // Eye color — unordered, pure inherit or mutate
    const motherColor = mother.getProperty("clingy_cats:eye_color") as string;
    const colorRoll = Math.random();
    if (colorRoll < 0.90)      baby.setProperty("clingy_cats:eye_color", motherColor);
    else if (colorRoll < 0.99) baby.setProperty("clingy_cats:eye_color", randomFrom(EYE_COLORS.filter(c => c !== "heterochromia")));
    else                       baby.setProperty("clingy_cats:eye_color", "heterochromia");

    // Eye shape — ordered, drift ±1
    const motherShapeIdx = EYE_SHAPES.indexOf(mother.getProperty("clingy_cats:eye_shape") as typeof EYE_SHAPES[number]);
    const shapeDrift = Math.random() < 0.85
        ? Math.max(0, Math.min(EYE_SHAPES.length - 1, motherShapeIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * EYE_SHAPES.length);
    baby.setProperty("clingy_cats:eye_shape", EYE_SHAPES[shapeDrift]);

    // Whiskers — ordered, drift ±1
    const motherWhiskerIdx = WHISKERS.indexOf(mother.getProperty("clingy_cats:whiskers") as typeof WHISKERS[number]);
    const whiskerDrift = Math.random() < 0.90
        ? Math.max(0, Math.min(WHISKERS.length - 1, motherWhiskerIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * WHISKERS.length);
    baby.setProperty("clingy_cats:whiskers", WHISKERS[whiskerDrift]);
}