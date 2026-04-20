import { Entity } from '@minecraft/server';
import { TextureData, EyesData, WhiskerData, BREED_TEXTURES, EYE_COLORS, EYE_SHAPES, WHISKERS } from '../configs/catsbreed';
import { randomFrom, uniqueValues } from './utils';
import { ParentGeneData, inheritTrait, inheritPattern, pickTexture } from './genetics';

// ============================================================
// APPLY TO ENTITY
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

export function applyEyesData(cat: Entity, idx: number, data: EyesData): void {
    cat.setProperty("clingy_cats:eye_shape", data.shape);
    cat.setProperty("clingy_cats:eye_color", data.color);
    cat.setProperty("clingy_cats:eye_index", idx);
}

export function applyWhiskerData(cat: Entity, idx: number, data: WhiskerData): void {
    cat.setProperty("clingy_cats:whiskers",      data.length);
    cat.setProperty("clingy_cats:whisker_index", idx);
}

// ============================================================
// RANDOM ASSIGNMENT
// ============================================================

export function assignRandomAppearance(cat: Entity): void {
    const catalog = BREED_TEXTURES[cat.typeId];
    const maxIdx = Object.keys(catalog).length - 1;
    const idx = Math.floor(Math.random() * (maxIdx + 1));
    applyTextureData(cat, idx, catalog[idx]);
}

export function assignRandomEyesAndWhiskers(cat: Entity): void {
    const shape     = randomFrom(EYE_SHAPES);
    const color     = randomFrom(EYE_COLORS);
    const whisker   = randomFrom(WHISKERS);
    const shapeIdx  = EYE_SHAPES.indexOf(shape);
    const colorIdx  = EYE_COLORS.indexOf(color);
    const whiskerIdx = WHISKERS.indexOf(whisker);

    applyEyesData(cat, shapeIdx * EYE_COLORS.length + colorIdx, { shape, color });
    applyWhiskerData(cat, whiskerIdx, { length: whisker });
}

// ============================================================
// INHERITED ASSIGNMENT
// ============================================================

export function assignInheritedAppearanceFromGenes(
    baby: Entity,
    momGenes: ParentGeneData,
    dadGenes: ParentGeneData | undefined
): void {
    const catalog = BREED_TEXTURES[baby.typeId];
    const traitsA = momGenes.traits;
    const traitsB = dadGenes?.traits ?? traitsA;

    const targetColor   = inheritTrait(traitsA.color,   traitsB.color,   0.85, uniqueValues(catalog, "color"));
    const targetPattern = inheritPattern(traitsA.pattern, traitsB.pattern, targetColor, 0.85, uniqueValues(catalog, "pattern"));
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

export function assignInheritedEyesAndWhiskersFromGenes(
    baby: Entity,
    momGenes: ParentGeneData,
    dadGenes: ParentGeneData | undefined
): void {
    // Eye color — 90% inherit, 9% random non-heterochromia, 1% heterochromia
    const sourceColor    = (dadGenes && Math.random() < 0.5) ? dadGenes : momGenes;
    const inheritedColor = sourceColor.eyeColor as typeof EYE_COLORS[number];
    const colorRoll      = Math.random();
    let finalColor: typeof EYE_COLORS[number];
    if      (colorRoll < 0.90) finalColor = inheritedColor;
    else if (colorRoll < 0.99) finalColor = randomFrom(EYE_COLORS.filter(c => !c.startsWith("heterochromia")));
    else                       finalColor = randomFrom(["heterochromia1", "heterochromia2", "heterochromia3"] as const);

    // Eye shape — drift ±1 step with 85% inherit rate
    const sourceShape        = (dadGenes && Math.random() < 0.5) ? dadGenes : momGenes;
    const inheritedShapeIdx  = EYE_SHAPES.indexOf(sourceShape.eyeShape as typeof EYE_SHAPES[number]);
    const shapeDrift         = Math.random() < 0.85
        ? Math.max(0, Math.min(EYE_SHAPES.length - 1, inheritedShapeIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * EYE_SHAPES.length);

    applyEyesData(baby, shapeDrift * EYE_COLORS.length + EYE_COLORS.indexOf(finalColor), {
        shape: EYE_SHAPES[shapeDrift],
        color: finalColor,
    });

    // Whiskers — drift ±1 step with 90% inherit rate
    const sourceWhisker       = (dadGenes && Math.random() < 0.5) ? dadGenes : momGenes;
    const inheritedWhiskerIdx = WHISKERS.indexOf(sourceWhisker.whiskers as typeof WHISKERS[number]);
    const whiskerDrift        = Math.random() < 0.90
        ? Math.max(0, Math.min(WHISKERS.length - 1, inheritedWhiskerIdx + Math.floor(Math.random() * 3) - 1))
        : Math.floor(Math.random() * WHISKERS.length);

    applyWhiskerData(baby, whiskerDrift, { length: WHISKERS[whiskerDrift] });
}
