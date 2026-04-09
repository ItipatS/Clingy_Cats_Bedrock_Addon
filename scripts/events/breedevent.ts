import { system } from "@minecraft/server";
import {
    assignRandomAppearance,
    assignRandomEyesAndWhiskers,
    handleConception,
    handleGiveBirth,
    randomFrom,
    applyTextureData,
} from "../logics/breed";
import { BREED_TEXTURES } from "../configs/catsbreed";

export function registerCatSpawnSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (id === "clingycats:catspawn") {
            if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
                sourceEntity.removeTag("clingy_cats:not_wild_spawn");
                return;
            }
            if (sourceEntity.typeId === "clingy_cats:test") {
                const breeds = Object.keys(BREED_TEXTURES).filter(b => b !== "clingy_cats:test");
                const catalog = BREED_TEXTURES[randomFrom(breeds)];
                const idx = Math.floor(Math.random() * Object.keys(catalog).length);
                applyTextureData(sourceEntity, idx, catalog[idx]);
                assignRandomEyesAndWhiskers(sourceEntity);
                return;
            }
            assignRandomAppearance(sourceEntity);
            assignRandomEyesAndWhiskers(sourceEntity);
            return;
        }

        if (id === "clingycats:conception") {
            handleConception(sourceEntity);
            return;
        }

        if (id === "clingycats:givebirth") {
            handleGiveBirth(sourceEntity);
            return;
        }
    });
}