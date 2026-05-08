import { Entity } from "@minecraft/server";
import { distanceSq } from "./utils";

const FAVORITE_TAME_CHANCE = 0.30;
const NORMAL_TAME_CHANCE   = 0.10;

// equipment property uses full item names; favorite_food uses shorthands for these two
const EQUIPMENT_TO_FOOD: Record<string, string> = {
    "tropical_fish": "tropical",
    "pufferfish":    "puffer"
};

export function handleGiveItem(cat: Entity): void {
    if (!cat.isValid) return;

    const equipment    = cat.getProperty("clingy_cats:equipment") as string;
    const favoriteFood = cat.getProperty("clingy_cats:favorite_food") as string;

    console.warn(`[DEBUG:on_give_food] entity=${cat.typeId} id=${cat.id}`);
    console.warn(`[DEBUG:on_give_food] equipment=${equipment} favoriteFood=${favoriteFood}`);

    if (equipment === "none") {
        console.warn(`[DEBUG:on_give_food] equipment is none — has_equipment filters missed or item not in slot yet`);
        return;
    }

    const mappedEquip = EQUIPMENT_TO_FOOD[equipment] ?? equipment;
    const isFavorite  = mappedEquip === favoriteFood;

    console.warn(`[DEBUG:on_give_food] mappedEquip=${mappedEquip} isFavorite=${isFavorite}`);

    const chance  = isFavorite ? FAVORITE_TAME_CHANCE : NORMAL_TAME_CHANCE;
    const success = Math.random() < chance;

    console.warn(`[DEBUG:on_give_food] chance=${chance} success=${success}`);

    cat.setProperty("clingy_cats:equipment", "none");

    if (isFavorite) {
        cat.dimension.spawnParticle("minecraft:heart_particle", cat.location);
        cat.dimension.playSound("mob.cat.purreow", cat.location, { volume: 1.0, pitch: 1.0 });
    } else {
        cat.dimension.spawnParticle("minecraft:villager_happy", cat.location);
        cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 1.0, pitch: 1.0 });
    }

    if (!success) return;

    const player = cat.dimension
        .getPlayers({ location: cat.location, maxDistance: 10 })
        .sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];

    console.warn(`[DEBUG:on_give_food] taming player=${player?.name ?? "NOT FOUND"}`);

    if (!player) return;

    const tameable = cat.getComponent("minecraft:tameable");
    tameable?.tame(player);
    cat.dimension.playSound("mob.cat.meow", cat.location, { volume: 1.0, pitch: 1.2 });
}
