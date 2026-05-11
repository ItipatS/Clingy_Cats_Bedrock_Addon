import { Entity, MolangVariableMap, world } from "@minecraft/server";
import { distanceSq } from "./utils";
import { behaviorTick } from '../logics/states';

const FAVORITE_TAME_CHANCE = 0.45;
const NORMAL_TAME_CHANCE   = 0.2;

export function handleGiveItem(cat: Entity): void {
    if (!cat.isValid) return;

    const equipment    = cat.getProperty("clingy_cats:equipment") as string;
    const favoriteFood = cat.getProperty("clingy_cats:favorite_food") as string;

    const mappedEquip =  equipment;
    const isFavorite  = mappedEquip === favoriteFood;

    const chance  = isFavorite ? FAVORITE_TAME_CHANCE : NORMAL_TAME_CHANCE;
    const success = Math.random() < chance;

    cat.setProperty("clingy_cats:equipment", "none");

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

    const tameable = cat.getComponent("minecraft:tameable");

    if (!tameable?.isTamed) {
        behaviorTick(cat, "temp_follow_close")
    }
    //world.sendMessage(`§e${cat.typeId.replace("clingy_cats:", "")} §7[${favoriteFood}] 7[${chance}] 7success? [${success}] `);
    if (!success) return;

    const player = cat.dimension
        .getPlayers({ location: cat.location, maxDistance: 10 })
        .sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];

    if (!player) return;

    tameable?.tame(player);
    cat.dimension.playSound("mob.cat.meow", cat.location, { volume: 1.0, pitch: 1.2 });
}
