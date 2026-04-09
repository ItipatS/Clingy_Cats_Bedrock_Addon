import { system } from "@minecraft/server";
import {
    assignRandomAppearance,
    assignInheritedAppearance,
    assignRandomEyesAndWhiskers,
    assignInheritedEyesAndWhiskers,
    findNearestAdult
} from "../logics/breed";

export function registerCatSpawnSubscriber(): void {
    system.afterEvents.scriptEventReceive.subscribe((ev) => {
        const { id, message, sourceEntity } = ev;

        if (id !== "clingycats:catspawn") return;
        if (!sourceEntity || !sourceEntity.isValid) return;

        if (message === "wild") {
            assignRandomAppearance(sourceEntity);
            assignRandomEyesAndWhiskers(sourceEntity);
            return;
        }

        if (message === "born") {
            const mother = findNearestAdult(sourceEntity);
            if (!mother) {
                assignRandomAppearance(sourceEntity);
                assignRandomEyesAndWhiskers(sourceEntity);
                return;
            }
            assignInheritedAppearance(sourceEntity, mother);
            assignInheritedEyesAndWhiskers(sourceEntity, mother);
            return;
        }
    });
}