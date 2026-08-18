import { EntityInitializationCause, world, system } from "@minecraft/server";
import type { Dimension, Vector3 } from "@minecraft/server";
import { randomFrom } from "./utils";

// Villages (and witch huts) spawn minecraft:cat through the village population
// system, which never consults spawn_rules "conditions". Emptying the spawn rule
// kills biome spawning but NOT structure spawning, so vanilla cats kept appearing
// alongside the breeds — a second cat species with no clingy_cats properties,
// invisible to the Meownifier, unable to bond or breed with ours.
//
// We deliberately do NOT override BP/entities/cat.json to fix this. Overriding a
// native entity means inheriting Mojang's file forever and re-merging it every
// update. Swapping the entity from script leaves vanilla untouched.
//
// BP/spawn_rules/cat.json is still ours and still has empty conditions — that is
// what suppresses *biome* spawning. This handles what's left.

const VANILLA_CAT = "minecraft:cat";

// Mirrors the territories in BP/spawn_rules/clingy_cats.*.json so a swapped cat
// matches what would naturally live there. Village biomes (plains, desert,
// savanna, taiga, snowy_plains, meadow, sunflower_plains) all resolve, and swamp
// resolves for witch huts.
const BIOME_BREED: Readonly<Record<string, string>> = {
    // plains — villages
    "minecraft:plains":            "clingy_cats:black",
    "minecraft:sunflower_plains":  "clingy_cats:black",
    // desert / badlands — villages
    "minecraft:desert":            "clingy_cats:red",
    "minecraft:badlands":          "clingy_cats:red",
    "minecraft:eroded_badlands":   "clingy_cats:red",
    "minecraft:wooded_badlands":   "clingy_cats:red",
    // savanna — villages
    "minecraft:savanna":           "clingy_cats:siamese",
    "minecraft:savanna_plateau":   "clingy_cats:siamese",
    "minecraft:windswept_savanna": "clingy_cats:siamese",
    // taiga — villages
    "minecraft:taiga":             "clingy_cats:british",
    "minecraft:snowy_taiga":       "clingy_cats:british",
    // snowy — villages
    "minecraft:snowy_plains":      "clingy_cats:ragdoll",
    "minecraft:snowy_slopes":      "clingy_cats:ragdoll",
    "minecraft:grove":             "clingy_cats:ragdoll",
    // meadow / flowered
    "minecraft:meadow":            "clingy_cats:calico",
    "minecraft:cherry_grove":      "clingy_cats:calico",
    "minecraft:flower_forest":     "clingy_cats:calico",
    // forest
    "minecraft:forest":            "clingy_cats:tabby",
    "minecraft:birch_forest":      "clingy_cats:tabby",
    "minecraft:old_growth_birch_forest": "clingy_cats:tabby",
    // dark woods / swamp — witch huts spawn cats in swamps
    "minecraft:dark_forest":       "clingy_cats:all_black",
    "minecraft:swamp":             "clingy_cats:all_black",
    // wetlands
    "minecraft:mangrove_swamp":    "clingy_cats:jellie",
    "minecraft:mushroom_fields":   "clingy_cats:jellie",
    // jungle
    "minecraft:jungle":            "clingy_cats:ocelot",
    "minecraft:bamboo_jungle":     "clingy_cats:ocelot",
    // peaks
    "minecraft:jagged_peaks":      "clingy_cats:persian",
    "minecraft:frozen_peaks":      "clingy_cats:persian",
    // rare
    "minecraft:pale_garden":       "clingy_cats:white",
    "minecraft:ice_spikes":        "clingy_cats:white",
};

// Used when getBiome returns an id we don't map — a new vanilla biome, a modded
// one, or anywhere a village generates that isn't in the table above.
const FALLBACK_BREEDS = [
    "clingy_cats:tabby",
    "clingy_cats:black",
    "clingy_cats:british",
    "clingy_cats:calico",
];

function pickBreed(dimension: Dimension, location: Vector3): string {
    try {
        const mapped = BIOME_BREED[dimension.getBiome(location).id];
        if (mapped) return mapped;
    } catch {
        // getBiome throws if the location is in an unloaded chunk
    }
    return randomFrom(FALLBACK_BREEDS);
}

export function registerVanillaCatSwap(): void {
    world.afterEvents.entitySpawn.subscribe((ev) => {
        if (ev.entity?.typeId !== VANILLA_CAT) return;

        // Spawned covers village + witch hut + spawn egg. Born covers two vanilla
        // cats breeding before either got swapped.
        //
        // Loaded is deliberately excluded: it fires for entities already saved in
        // the world, so acting on it would delete cats players tamed before
        // installing the addon. Legacy wild vanilla cats therefore survive — they
        // only get replaced if they breed.
        if (ev.cause !== EntityInitializationCause.Spawned &&
            ev.cause !== EntityInitializationCause.Born) return;

        const cat = ev.entity;

        // Defer one tick: removing an entity inside its own spawn event is asking
        // for trouble, and the replacement needs a clean tick to run its own
        // entity_spawned -> clingycats:catspawn chain.
        system.run(() => {
            if (!cat.isValid) return;
            // Never destroy a pet, whatever the cause.
            if (cat.hasComponent("minecraft:is_tamed")) return;

            const dimension = cat.dimension;
            const location = cat.location;
            const breed = pickBreed(dimension, location);

            cat.remove();
            try {
                dimension.spawnEntity(breed, location);
            } catch {
                // chunk unloaded between removal and respawn; nothing to recover
            }
        });
    });
}
