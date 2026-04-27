import { world, system } from "@minecraft/server";
import { handleWildSpawn, handleSpawnTestCats } from "../logics/breed";
import { handleConception, handleGiveBirth } from "../logics/pregnancy";
import { handleRequestShoulderMount, handleAnchorDetached, handleDropOffCat } from "../logics/shoulderAnchor";

import { restoreIdentity } from "../logics/states";

export function registerSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;

        
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (id === "clingycats:catspawn") { 
            world.sendMessage(`§b[ClingyCats] event received: ${id}`);
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
            world.sendMessage(`§b[ClingyCats] event received: ${id}`);
            handleConception(sourceEntity);
            world.sendMessage(`§e[ClingyCats] conception event received from: ${sourceEntity.typeId}`);
            return;
        }

        if (id === "clingycats:givebirth") {
            world.sendMessage(`§b[ClingyCats] event received: ${id}`);
            handleGiveBirth(sourceEntity);
            world.sendMessage(`§c[ClingyCats] give birth event received from: ${sourceEntity.typeId}`);
            return;
        }

        if (id === "clingycats:interact") {
            return;
        }

        if (id === "clingycats:restore_identity") {
            restoreIdentity(sourceEntity);
            return;
        }
        
        if (id === "clingycats:request_shoulder_mount") { 
             handleRequestShoulderMount(sourceEntity);
            return;
        }

        if (id === "clingycats:anchor_detached") {
            handleAnchorDetached(sourceEntity);
            return;
        } 

        if (id === "clingycats:drop_off_cat") {
            handleDropOffCat(sourceEntity);
            return;
        }

    });
     world.sendMessage("§a[ClingyCats] subscriber registered");
}