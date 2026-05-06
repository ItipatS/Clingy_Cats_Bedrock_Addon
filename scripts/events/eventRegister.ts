import { world, system } from "@minecraft/server";
import { handleWildSpawn, handleSpawnTestCats } from "../logics/breed";
import { handleConception, handleGiveBirth } from "../logics/pregnancy";
import { restoreIdentity, behaviorTick } from '../logics/states';

import { handleRequestShoulderMount, handleAnchorExpire } from "../logics/riding";

export function registerCatsEvents(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;

        if (!sourceEntity || !sourceEntity.isValid) return;

        //world.sendMessage(`§b[ClingyCats] event received: ${id}`);
        if (id === "clingycats:catspawn") { 
            
                if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
                    sourceEntity.removeTag("clingy_cats:not_wild_spawn");
                    return;
                }
                if (sourceEntity.typeId === "clingy_cats:test" && !sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
                    handleSpawnTestCats(sourceEntity);
                    return;
                }else 
                {
                   handleWildSpawn(sourceEntity); 
                }
                behaviorTick(sourceEntity);
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

        if (id === "clingycats:interact") {
            return;
        }

        if (id === "clingycats:restore_identity") {
            restoreIdentity(sourceEntity);
            return;
        }

        if (id === "clingycats:behavior_tick") {
            behaviorTick(sourceEntity);
            return;
        }

        if (id === "clingycats:enter_still_state_event") {
            behaviorTick(sourceEntity, "enter_still_state");
            return;
        }

        if (id == "clingycats:follow_given_player") {
            behaviorTick(sourceEntity, "temp_follow_close")
        }

        if (id === "clingycats:request_shoulder_mount") {
            handleRequestShoulderMount(sourceEntity)
        }

        if (id === "clingycats:anchor_expire") {
            handleAnchorExpire(sourceEntity)
        }

    });
}