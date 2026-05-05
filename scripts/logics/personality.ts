import { Entity, world } from '@minecraft/server';
import {
    TRAIT_POOL, PERSONALITY_POOL, FAVORITE_FOOD_POOL, FAVORITE_BLOCK_POOL,
    BREED_SPAWN_POOLS, WeightedEntry
} from '../configs/catsbreed';
import { weightedRandom } from './utils';

function weightedPick<T extends string>(pool: readonly WeightedEntry<T>[]): T {
    return weightedRandom(pool).value;
}

export function assignRandomPersonality(cat: Entity): void {
    const trait       = weightedRandom(TRAIT_POOL).trait;
    const personality = weightedRandom(PERSONALITY_POOL).personality;
    const food        = weightedRandom(FAVORITE_FOOD_POOL).food;
    const block       = weightedRandom(FAVORITE_BLOCK_POOL).block;

    world.sendMessage([
        `§7trait:§f${trait}`,
        `§7personality:§f${personality}`,
        `§7food:§f${food}`,
        `§7block:§f${block}`,
    ].join("\n"));

    cat.setProperty("clingy_cats:behavior_trait", trait);
    cat.setProperty("clingy_cats:personality",    personality);
    cat.setProperty("clingy_cats:favorite_food",  food);
    cat.setProperty("clingy_cats:favorite_block", block);

    cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
    cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}

export function assignBreedPersonality(cat: Entity): void {
    const breedKey = cat.typeId.replace("clingy_cats:", "");
    const pool = BREED_SPAWN_POOLS[breedKey];

    if (!pool) {
        assignRandomPersonality(cat);
        return;
    }

    const trait       = weightedPick(pool.trait);
    const personality = weightedPick(pool.personality);
    const block       = weightedPick(pool.block);
    const food        = weightedRandom(FAVORITE_FOOD_POOL).food;

    cat.setProperty("clingy_cats:behavior_trait", trait);
    cat.setProperty("clingy_cats:personality",    personality);
    cat.setProperty("clingy_cats:favorite_block", block);
    cat.setProperty("clingy_cats:favorite_food",  food);

    cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
    cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}
