import { world, system } from "@minecraft/server";
import {
    handleWildSpawn,
    handleSpawnTestCats,
    handleConception,
    handleGiveBirth,
} from "../logics/breed";

import {} from "../logics/breed"

export function registerCatSpawnSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;

        world.sendMessage(`§b[ClingyCats] event received: ${id}`);
        
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (id === "clingycats:catspawn") { 
            system.runTimeout(() => {
                if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
                    sourceEntity.removeTag("clingy_cats:not_wild_spawn");
                    world.sendMessage(`§a[ClingyCats] Non-wild spawn event received on: ${sourceEntity.typeId}`);
                    return;
                }
                if (sourceEntity.typeId === "clingy_cats:test") {
                    handleSpawnTestCats(sourceEntity);
                    world.sendMessage(`§d[ClingyCats] catspawn on: ${sourceEntity.typeId}`);
                    return;
                }
                handleWildSpawn(sourceEntity);
            }, 1)
            return;
        }

        if (id === "clingycats:conception") {
            handleConception(sourceEntity);
            world.sendMessage(`§e[ClingyCats] conception event received from: ${sourceEntity.typeId}`);
            return;
        }

        if (id === "clingycats:givebirth") {
            handleGiveBirth(sourceEntity);
            world.sendMessage(`§c[ClingyCats] give birth event received from: ${sourceEntity.typeId}`);
            return;
        }

        if (id === "clingycats:interact") {
            return;
        }

    });
     world.sendMessage("§a[ClingyCats] subscriber registered");
}