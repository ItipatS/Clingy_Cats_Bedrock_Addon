import { world, Entity } from '@minecraft/server';
import { TRAIT_POOL, PERSONALITY_POOL, FAVORITE_FOOD_POOL, FAVORITE_BLOCK_POOL } from '../configs/catsbreed';
import { weightedRandom } from './utils';

export function assignRandomPersonality(cat: Entity): void {
    const trait       = weightedRandom(TRAIT_POOL);
    const personality = weightedRandom(PERSONALITY_POOL);
    const food        = weightedRandom(FAVORITE_FOOD_POOL);
    const block       = weightedRandom(FAVORITE_BLOCK_POOL);

    world.sendMessage([
        `§7state:§f${cat.getProperty("clingy_cats:state")}`,
        `§7trait:§f${trait.trait}`,
        `§7personality:§f${personality.personality}`,
        `§7food:§f${food.food}`,
        `§7block:§f${block.block}`,
    ].join("\n"));

    cat.setProperty("clingy_cats:behavior_trait", trait.trait);
    cat.setProperty("clingy_cats:personality",    personality.personality);
    cat.setProperty("clingy_cats:favorite_food",  food.food);
    cat.setProperty("clingy_cats:favorite_block", block.block);

    cat.triggerEvent(`clingy_cats:set_trait_${trait.trait}`);
    cat.triggerEvent(`clingy_cats:set_personality_${personality.personality}`);

    if (block.block !== "owner" || cat.hasComponent("minecraft:is_tamed")) {
        cat.triggerEvent(`clingy_cats:set_block_${block.block}`);
    }
}
