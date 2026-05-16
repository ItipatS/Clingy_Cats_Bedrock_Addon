import { Entity, world } from '@minecraft/server';
import { BREED_TEXTURES, BREED_OFFSETS, BIOME_COLOR_BIAS } from '../configs/catsbreed';
import { randomFrom } from './utils';
import { applyTextureData, assignRandomAppearance, assignRandomEyesAndWhiskers, assignRandomSize, applyFullMoonOverrides } from './appearance';
import { assignRandomPersonality, assignBreedPersonality } from './personality';

function getBiomeColors(cat: Entity): string[] | undefined {
    try {
        const biome = cat.dimension.getBiome(cat.location);
        return BIOME_COLOR_BIAS[biome.id];
    } catch {
        return undefined;
    }
}

/** Test entity spawn — picks a random breed catalog and applies a random flat-indexed texture. */
export function handleSpawnTestCats(cat: Entity): void {
    const breedIds   = Object.keys(BREED_OFFSETS);
    const chosenBreed = randomFrom(breedIds);
    const catalog    = BREED_TEXTURES[chosenBreed];
    const localIdx   = Number(randomFrom(Object.keys(catalog)));
    const flatIdx    = BREED_OFFSETS[chosenBreed] + localIdx;
    applyTextureData(cat, flatIdx, catalog[localIdx]);
    assignRandomEyesAndWhiskers(cat);
    assignRandomPersonality(cat);
    cat.triggerEvent("clingy_cats:visible_event");
}

/** Wild spawn — full random appearance + eyes + whiskers + breed-weighted personality + size. */
export function handleWildSpawn(cat: Entity): void {
    assignRandomAppearance(cat, getBiomeColors(cat));
    assignRandomEyesAndWhiskers(cat);
    if (world.getMoonPhase() === 0) {
        applyFullMoonOverrides(cat);
    } else {
        assignRandomSize(cat);
    }
    assignBreedPersonality(cat);
}
