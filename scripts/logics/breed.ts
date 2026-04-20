import { Entity } from '@minecraft/server';
import { BREED_TEXTURES, BREED_OFFSETS } from '../configs/catsbreed';
import { randomFrom } from './utils';
import { applyTextureData, assignRandomAppearance, assignRandomEyesAndWhiskers } from './appearance';
import { assignRandomPersonality } from './personality';

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
    cat.triggerEvent("clingy_cats:visible");
}

/** Wild spawn — full random appearance + eyes + whiskers + personality. */
export function handleWildSpawn(cat: Entity): void {
    assignRandomAppearance(cat);
    assignRandomEyesAndWhiskers(cat);
    assignRandomPersonality(cat);
    cat.triggerEvent("clingy_cats:visible");
}
