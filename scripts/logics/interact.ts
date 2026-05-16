import { Entity, MolangVariableMap, world } from "@minecraft/server";
import { Personality } from "../configs/catsbreed";
import { distanceSq } from "./utils";
import { behaviorTick } from '../logics/states';

const TAME_RATES: Record<Personality, { favorite: number; neutral: number }> = {
    anxious:      { favorite: 0.20, neutral: 0.05 },
    aloof:        { favorite: 0.25, neutral: 0.08 },
    playful:      { favorite: 0.35, neutral: 0.15 },
    calm:         { favorite: 0.40, neutral: 0.15 },
    confident:    { favorite: 0.45, neutral: 0.20 },
    affectionate: { favorite: 0.50, neutral: 0.20 },
};
const DEFAULT_RATES = { favorite: 0.45, neutral: 0.20 };

export function handleGiveItem(cat: Entity): void {
    if (!cat.isValid) return;

    const equipment    = cat.getProperty("clingy_cats:equipment") as string;
    const favoriteFood = cat.getProperty("clingy_cats:favorite_food") as string;
    const personality  = cat.getProperty("clingy_cats:personality")   as Personality;

    const isFavorite = equipment === favoriteFood;
    const rates      = TAME_RATES[personality] ?? DEFAULT_RATES;
    const chance     = isFavorite ? rates.favorite : rates.neutral;
    const success    = Math.random() < chance;

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
