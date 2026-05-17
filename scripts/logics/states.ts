import { Entity, world } from "@minecraft/server";
import { BehaviorTrait, Personality, FavoriteBlock } from "../configs/catsbreed";
import { getAffection } from "./bond";

export type TempBehavior =
    | "temp_follow_close"
    | "temp_follow_loose"
    | "temp_move_to_bed"
    | "temp_move_to_soft"
    | "temp_move_to_warm"
    | "temp_move_to_sun"
    | "temp_play"
    | "enter_sit_state"
    | "enter_sleep_state"
    | "enter_groom_state";

const LAST_TEMP = "clingy_cats:last_temp_group";

// ============================================================
// BEHAVIOR POOLS
// ============================================================

interface BehaviorEntry {
    behavior: TempBehavior | "enter_still_state" | null;
    weight: number;
}

const TRAIT_POOLS: Record<BehaviorTrait, BehaviorEntry[]> = {
    lazy: [
        { behavior: "enter_sleep_state", weight: 4 },
        { behavior: "enter_sit_state",   weight: 2 },
        { behavior: "temp_move_to_soft", weight: 2 },
        { behavior: "temp_move_to_warm", weight: 1 },
    ],
    active: [
        { behavior: "temp_follow_loose", weight: 2 },
        { behavior: "enter_sit_state",   weight: 1 },
    ],
    curious: [
        { behavior: "temp_follow_loose", weight: 2 },
        { behavior: "enter_groom_state", weight: 2 },
        { behavior: "enter_sit_state",   weight: 1 },
    ],
    shy: [
        { behavior: "enter_sleep_state", weight: 3 },
        { behavior: "enter_sit_state",   weight: 2 },
        { behavior: "temp_move_to_soft", weight: 1 },
    ],
    friendly: [
        { behavior: "temp_follow_close", weight: 2 },
        { behavior: "temp_play",         weight: 2 },
        { behavior: "enter_groom_state", weight: 1 },
        { behavior: "enter_sit_state",   weight: 1 },
    ],
    independent: [
        { behavior: "enter_sleep_state", weight: 2 },
        { behavior: "enter_sit_state",   weight: 2 },
        { behavior: "temp_move_to_sun",  weight: 2 },
    ],
};

const PERSONALITY_POOLS: Record<Personality, BehaviorEntry[]> = {
    affectionate: [
        { behavior: "temp_follow_close",  weight: 4 },
        { behavior: "enter_sit_state",    weight: 2 },
        { behavior: "enter_groom_state",  weight: 1 },
    ],
    aloof: [
        { behavior: "temp_follow_loose",  weight: 1 },
        { behavior: "enter_sit_state",    weight: 3 },
        { behavior: "enter_sleep_state",  weight: 2 },
    ],
    playful: [
        { behavior: "temp_play",          weight: 3 },
        { behavior: "temp_follow_loose",  weight: 2 },
        { behavior: "enter_sit_state",    weight: 1 },
    ],
    calm: [
        { behavior: "temp_follow_loose",  weight: 2 },
        { behavior: "enter_sleep_state",  weight: 3 },
        { behavior: "enter_sit_state",    weight: 2 },
    ],
    anxious: [
        { behavior: "temp_follow_close",  weight: 3 },
        { behavior: "enter_sit_state",    weight: 2 },
        { behavior: "enter_groom_state",  weight: 2 },
    ],
    confident: [
        { behavior: "temp_follow_loose",  weight: 2 },
        { behavior: "enter_sit_state",    weight: 1 },
        { behavior: "temp_move_to_sun",   weight: 1 },
    ],
};

const BLOCK_POOLS: Record<FavoriteBlock, BehaviorEntry[]> = {
    bed: [
        { behavior: "temp_move_to_bed",   weight: 4 },
        { behavior: "enter_sleep_state",  weight: 3 },
    ],
    soft: [
        { behavior: "temp_move_to_soft",  weight: 3 },
        { behavior: "enter_sit_state",    weight: 2 },
        { behavior: "enter_groom_state",  weight: 1 },
    ],
    warm: [
        { behavior: "temp_move_to_warm",  weight: 3 },
        { behavior: "enter_sit_state",    weight: 2 },
        { behavior: "enter_sleep_state",  weight: 1 },
    ],
    high: [
        { behavior: "enter_sit_state",    weight: 3 },
        { behavior: "enter_sleep_state",  weight: 1 },
    ],
    owner: [
        { behavior: "temp_follow_close",  weight: 4 },
        { behavior: "enter_sit_state",    weight: 1 },
    ],
    sun: [
        { behavior: "temp_move_to_sun",   weight: 3 },
        { behavior: "enter_sit_state",    weight: 2 },
        { behavior: "enter_sleep_state",  weight: 1 },
    ],
};
// ============================================================
// WEIGHTED RANDOM
// ============================================================

// Bond drives behavior: bonded cats follow the owner, settle near them, and sleep more often.
// Tamed-but-cold (aff=100) cats are roughly baseline; high-aff (aff=1000) cats are visibly clingy.
function applyBondMultipliers(cat: Entity, pool: BehaviorEntry[]): void {
    const aff = getAffection(cat);
    if (aff <= 0) return;
    for (const e of pool) {
        if (e.behavior === "temp_follow_close")  e.weight *= 1 + aff / 500;
        else if (e.behavior === "enter_sleep_state") e.weight *= 1 + aff / 800;
        else if (e.behavior === "enter_sit_state")   e.weight *= 1 + aff / 1000;
    }
}

function weightedRandom(pool: BehaviorEntry[]): BehaviorEntry["behavior"] {
    const total = pool.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * total;
    for (const entry of pool) {
        roll -= entry.weight;
        if (roll <= 0) return entry.behavior;
    }
    return pool[pool.length - 1].behavior;
}

function mergePools(...pools: BehaviorEntry[][]): BehaviorEntry[] {
    const merged: Map<string, BehaviorEntry> = new Map();
    for (const pool of pools) {
        for (const entry of pool) {
            const key = entry.behavior ?? "__null__";
            const existing = merged.get(key);
            if (existing) {
                existing.weight += entry.weight;
            } else {
                merged.set(key, { ...entry });
            }
        }
    }
    return Array.from(merged.values());
}

// ============================================================
// BEHAVIOR TICK
// ============================================================

export function behaviorTick(cat: Entity, state?: string): void {
    if (!cat.isValid) return;

    // clean up previous temp
    const last = cat.getDynamicProperty(LAST_TEMP) as string | undefined;
    if (last) {
        cat.triggerEvent(`clingy_cats:remove_${last}`);
        cat.setDynamicProperty(LAST_TEMP, "");
    }

    const trait       = cat.getProperty("clingy_cats:behavior_trait") as BehaviorTrait;
    const personality = cat.getProperty("clingy_cats:personality")    as Personality;
    const block       = cat.getProperty("clingy_cats:favorite_block") as FavoriteBlock;

    if (!trait || !personality || !block) return;

    const pool   = mergePools(
        TRAIT_POOLS[trait]       ?? [],
        PERSONALITY_POOLS[personality] ?? [],
        BLOCK_POOLS[block]       ?? [],
    );
    applyBondMultipliers(cat, pool);
    const chosen = state || weightedRandom(pool);

    if (chosen === "enter_still_state" || chosen === "enter_sit_state" || chosen === "enter_sleep_state" || chosen === "enter_groom_state") {
        cat.triggerEvent(`clingy_cats:${chosen}`);
        cat.setDynamicProperty(LAST_TEMP, ""); // nothing to remove later. on_idle fire next behvior when timer_flag end
        return;
    }

    if (chosen === null) {
        cat.setDynamicProperty(LAST_TEMP, "");
        return;
    }

    cat.triggerEvent(`clingy_cats:add_${chosen}`);
    cat.setDynamicProperty(LAST_TEMP, chosen);
}

// ============================================================
// RESTORE IDENTITY
// ============================================================

export function restoreIdentity(cat: Entity): void {
    if (!cat.isValid) return;

    const trait = cat.getProperty("clingy_cats:behavior_trait") as BehaviorTrait;
    if (!trait) return;

    const personality = cat.getProperty("clingy_cats:personality") as Personality;
    if (!personality) return;

    // clean up any stuck temp
    const last = cat.getDynamicProperty(LAST_TEMP) as string | undefined;
    if (last) {
        cat.triggerEvent(`clingy_cats:remove_${last}`);
        cat.setDynamicProperty(LAST_TEMP, "");
    }

    cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
    cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}