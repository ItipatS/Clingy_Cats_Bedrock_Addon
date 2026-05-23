import { world, system} from "@minecraft/server";
import { handleWildSpawn, handleSpawnTestCats } from "../logics/breed";
import { applyAdultSize } from "../logics/appearance";
import { handleConception, handleGiveBirth } from "../logics/pregnancy";
import { restoreIdentity, behaviorTick } from '../logics/states';
import { handleGiveItem } from "../logics/interact";
import { handleRequestShoulderMount, handleAnchorExpire } from "../logics/riding";
import { registerGuideBookEvents } from "../logics/guideBook";
import { handlePet, handleCatHurt, handleOwnerSleeping, handleWildPet } from "../logics/bond";

export function registerCatsEvents(): void {
    registerGuideBookEvents();
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

        if (id == "clingycats:on_give_food") {
            handleGiveItem(sourceEntity)
        }
        
        if (id == "clingycats:on_pick_up_event") {
            const cat = sourceEntity
            //world.sendMessage(`§e${cat.typeId.replace("clingy_cats:", "")} §7[${cat.id.slice(-6)}] pickup succesful`);
        }

        if (id == "clingycats:on_pick_up_start_event") {
            const cat = sourceEntity
            //world.sendMessage(`§e${cat.typeId.replace("clingy_cats:", "")} §7[${cat.id.slice(-6)}] start to pick up`);
        }

        if (id === "clingycats:request_shoulder_mount") {
            handleRequestShoulderMount(sourceEntity)
        }

        if (id === "clingycats:anchor_expire") {
            handleAnchorExpire(sourceEntity)
        }

        if (id === "clingycats:grow_up") {
            applyAdultSize(sourceEntity);
        }

        if (id === "clingycats:pet") {
            handlePet(sourceEntity);
            return;
        }

        if (id === "clingycats:wild_pet") {
            handleWildPet(sourceEntity);
            return;
        }

        if (id === "clingycats:cat_hurt") {
            handleCatHurt(sourceEntity);
            return;
        }

        if (id === "clingycats:owner_sleeping") {
            handleOwnerSleeping(sourceEntity);
            return;
        }

    });
}