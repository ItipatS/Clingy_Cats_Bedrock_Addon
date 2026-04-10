import { world, system, EquipmentSlot } from "@minecraft/server";

const DEBUG = true;

export function registerDebugRaycast(): void {
    if (!DEBUG) return;

    system.runInterval(() => {
        for (const player of world.getAllPlayers()) {
            const held = player.getComponent("equippable")
                ?.getEquipment(EquipmentSlot.Mainhand);
            if (held?.typeId !== "minecraft:stick") continue;

            const hit = player.getEntitiesFromViewDirection({
                maxDistance: 10,
                ignoreBlockCollision: false,
            })[0];

            if (!hit?.entity) continue;
            const cat = hit.entity;
            if (!cat.typeId.startsWith("clingy_cats:")) continue;

            const lines = [
                `§e${cat.typeId.replace("clingy_cats:", "")} §7[${cat.id.slice(-6)}]`,
                `§7sub:§f${cat.getProperty("clingy_cats:sub_variant")} §7pattern:§f${cat.getProperty("clingy_cats:pattern")} §7color:§f${cat.getProperty("clingy_cats:color")}`,
                `§7hairs:§f${cat.getProperty("clingy_cats:hairs")} §7tail:§f${cat.getProperty("clingy_cats:tail")} §7snout:§f${cat.getProperty("clingy_cats:snout")} §7head:§f${cat.getProperty("clingy_cats:head")}`,
                `§7eye_shape:§f${cat.getProperty("clingy_cats:eye_shape")} §7eye_color:§f${cat.getProperty("clingy_cats:eye_color")} §7eye_idx:§f${cat.getProperty("clingy_cats:eye_index")} §7whisker_idx:§f${cat.getProperty("clingy_cats:whisker_index")}`,
                `§7trait:§f${cat.getProperty("clingy_cats:behavior_trait")} §7personality:§f${cat.getProperty("clingy_cats:personality")} §7sound:§f${cat.getProperty("clingy_cats:sound_variant")}`,
                `§7food:§f${cat.getProperty("clingy_cats:favorite_food")} §7block:§f${cat.getProperty("clingy_cats:favorite_block")}`,
                `§7baby:§f${cat.hasComponent("minecraft:is_baby")} §7tamed:§f${cat.hasComponent("minecraft:is_tamed")} §7tags:§f${cat.getTags().join(",")||"none"}`,
            ].join("\n");

            player.onScreenDisplay.setActionBar(lines);
        }
    }, 10); // update every 10 ticks
}