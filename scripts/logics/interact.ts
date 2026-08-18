import { Entity, MolangVariableMap, system, world } from "@minecraft/server";
import { Personality } from "../configs/catsbreed";
import { distanceSq } from "./utils";
import { behaviorTick } from '../logics/states';
import {
    addAffection,
    addTrust,
    canBond,
    claimBond,
    checkAutoTame,
    FEED_BUMPS,
    isHissing,
    isTamed,
} from "./bond";
import { feedLog, tag } from "../debug/feedDebug";

// Two BP paths now reach the feed chain: the sneak-feed interact (take_item: true)
// and minecraft:on_equipment_changed, which fires when a thrown item is picked up
// into the mainhand. The interact path trips BOTH — it hands the cat the food, so
// the equipment hook fires right after. Without this gate a sneak-feed pays twice.
const FEED_GATE = "clingy_cats:last_feed_tick";
const FEED_GATE_TICKS = 10;

export function handleGiveItem(cat: Entity): void {
    if (!cat.isValid) return;

    const now = system.currentTick;
    const last = (cat.getDynamicProperty(FEED_GATE) as number) ?? -9999;
    if (now - last < FEED_GATE_TICKS) {
        feedLog(`§8gated§r ${tag(cat)} (${now - last}t since last)`);
        return;
    }
    cat.setDynamicProperty(FEED_GATE, now);

    if (isHissing(cat)) {
        cat.setProperty("clingy_cats:equipment", "none");
        return;
    }

    const equipment    = cat.getProperty("clingy_cats:equipment") as string;
    const favoriteFood = cat.getProperty("clingy_cats:favorite_food") as string;
    const personality  = cat.getProperty("clingy_cats:personality")   as Personality;

    cat.setProperty("clingy_cats:equipment", "none");

    const isFavorite = equipment === favoriteFood;
    feedLog(`§aFED§r ${tag(cat)} ate §e${equipment}§r (fav=${favoriteFood}${isFavorite ? " §a✓" : ""}§r)`);

    if (isFavorite) {
        const molang = new MolangVariableMap();
        molang.setVector3("variable.direction", { x: 0, y: 1, z: 0 });
        molang.setColorRGB("variable.color", { red: 1.0, green: 0.85, blue: 0.2 }); // warm golden
        const loc = { ...cat.location, y: cat.location.y + 1 };
        cat.dimension.spawnParticle("minecraft:wax_particle", loc, molang);
        cat.dimension.spawnParticle("minecraft:wax_particle", { ...loc, x: loc.x + 0.3 }, molang);
        cat.dimension.spawnParticle("minecraft:wax_particle", { ...loc, x: loc.x - 0.3 }, molang);
        cat.dimension.playSound("mob.cat.purreow", cat.location, { volume: 1.0, pitch: 1.0 });
    } else {
        const molang = new MolangVariableMap();
        molang.setColorRGB("variable.note_color", { red: 0.5, green: 0.7, blue: 1.0 }); // cool blue-gray
        cat.dimension.spawnParticle("minecraft:note_particle", { ...cat.location, y: cat.location.y + 0.5 }, molang);
        cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 1.0, pitch: 1.0 });
    }

    // Already tamed: favorite food reinforces bond.
    // isTamed() tests minecraft:is_tamed — minecraft:tameable is gone once the wild
    // component group is swapped out on tame, so it cannot answer this question.
    if (isTamed(cat)) {
        if (isFavorite) {
            addAffection(cat, 20);
            addTrust(cat, 5);
        }
        return;
    }

    // Wild: bonder lock, personality-tuned feed bump, threshold check.
    const player = cat.dimension
        .getPlayers({ location: cat.location, maxDistance: 10 })
        .sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];
    if (!player) return;

    if (!canBond(cat, player)) {
        cat.dimension.playSound("mob.cat.hiss", cat.location, { volume: 0.5, pitch: 1.0 });
        return;
    }
    claimBond(cat, player);

    const bump = FEED_BUMPS[personality];
    if (bump) addAffection(cat, isFavorite ? bump.favorite : bump.neutral);

    behaviorTick(cat, "temp_follow_close");
    // Favourite food is worth two marbles — an affectionate cat (bag of 2) can be
    // won over with a single correct meal.
    checkAutoTame(cat, player, isFavorite ? 2 : 1);
}
