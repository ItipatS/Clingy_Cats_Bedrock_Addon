import { Entity, EquipmentSlot, world } from "@minecraft/server";
import { distanceSq } from "./utils";

const FAVORITE_TAME_CHANCE = 0.30;
const NORMAL_TAME_CHANCE   = 0.10;

export function handleGiveItem(cat: Entity): void {

    if (!cat.isValid) return;

    const equippable   = cat.getComponent("minecraft:equippable");
    const mainhand     = equippable?.getEquipmentSlot(EquipmentSlot.Mainhand);
    const favoriteFood = cat.getProperty("clingy_cats:favorite_food") as string;

    console.warn(`[DEBUG:on_give_food] entity=${cat.typeId} id=${cat.id}`);
    console.warn(`[DEBUG:on_give_food] equippable=${equippable ? "OK" : "MISSING"}`);
    console.warn(`[DEBUG:on_give_food] mainhand item=${mainhand?.typeId ?? "empty"}`);
    console.warn(`[DEBUG:on_give_food] favoriteFood=${favoriteFood}`);

    if (!mainhand) return;

    const itemName   = mainhand.typeId.replace("minecraft:", "");
    const isFavorite = itemName === favoriteFood;

    console.warn(`[DEBUG:on_give_food] itemName=${itemName} isFavorite=${isFavorite}`);

    const chance  = isFavorite ? FAVORITE_TAME_CHANCE : NORMAL_TAME_CHANCE;
    const success = Math.random() < chance;

    console.warn(`[DEBUG:on_give_food] chance=${chance} success=${success}`);

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