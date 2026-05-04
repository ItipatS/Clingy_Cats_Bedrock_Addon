import { world, system } from "@minecraft/server";
import { handleWildSpawn, handleSpawnTestCats } from "../logics/breed";
import { handleConception, handleGiveBirth } from "../logics/pregnancy";
import { restoreIdentity, behaviorTick } from "../logics/states";

export function registerCatSpawnSubscriber(): void {
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
                }else 
                {
                   handleWildSpawn(sourceEntity); 
                }
                behaviorTick(sourceEntity);
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

        if (id === "clingycats:behavior_tick") {
            behaviorTick(sourceEntity);
            return;
        }

        if (id === "clingycats:enter_still_state_event") {
            behaviorTick(sourceEntity, "enter_still_state");
            return;
        }

        if (id == "clingycats:try_sitting") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7try sitting`
            ].join("\n"));
        }

        if (id == "clingycats:try_sleeping") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7try sleeping`
            ].join("\n"));
        }

        if (id == "clingycats:try_grooming") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7try grooming`
            ].join("\n"));
        }
        if (id == "clingycats:sit_confirm") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7sit confirm §7state:§f${sourceEntity.getProperty("clingy_cats:state")}`
            ].join("\n"));
        }
        if (id == "clingycats:sleep_confirm") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7sleep confirm §7state:§f${sourceEntity.getProperty("clingy_cats:state")}`
            ].join("\n"));
        }
        if (id == "clingycats:groom_confirm") {
            world.sendMessage([
                `§7pattern:§f${sourceEntity.getProperty("clingy_cats:pattern")} §7color:§f${sourceEntity.getProperty("clingy_cats:color")}`,
                `§7grooming confirm §7state:§f${sourceEntity.getProperty("clingy_cats:state")}`
            ].join("\n"));
        }

    });
     world.sendMessage("§a[ClingyCats] subscriber registered");
}