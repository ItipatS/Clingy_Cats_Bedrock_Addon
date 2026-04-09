import { system } from "@minecraft/server";
import {
    assignRandomAppearance,
    assignRandomEyesAndWhiskers,
    handleConception,
    handleGiveBirth,
} from "../logics/breed";

export function registerCatSpawnSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (id === "clingycats:catspawn" && message === "wild") {
            // Script-spawned babies (from givebirth) set this tag to skip random appearance
            if (sourceEntity.hasTag("clingy_cats:script_born")) {
                sourceEntity.removeTag("clingy_cats:script_born");
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