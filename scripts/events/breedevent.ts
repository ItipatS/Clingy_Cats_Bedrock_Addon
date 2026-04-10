import { system } from "@minecraft/server";
import {
    handleWildSpawn,
    handleSpawnTestCats,
    handleConception,
    handleGiveBirth,
} from "../logics/breed";


export function registerCatSpawnSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (id === "clingycats:catspawn") {
            if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
                sourceEntity.removeTag("clingy_cats:not_wild_spawn");
                return;
            }
            system.runTimeout(() => {
                if (sourceEntity.typeId === "clingy_cats:test") {
                    handleSpawnTestCats(sourceEntity);
                    return;
                }
                handleWildSpawn(sourceEntity);
            }, 3)
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