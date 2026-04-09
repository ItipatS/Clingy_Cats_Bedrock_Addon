import { system } from "@minecraft/server";
import {
    assignRandomAppearance,
    assignInheritedAppearance,
    assignRandomEyesAndWhiskers,
    assignInheritedEyesAndWhiskers,
    findBothParents
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
            const parents = findBothParents(sourceEntity);
            if (parents.length === 0) {
                assignRandomAppearance(sourceEntity);
                assignRandomEyesAndWhiskers(sourceEntity);
                return;
            }
            const [parentA, parentB] = parents;
            assignInheritedAppearance(sourceEntity, parentA, parentB);
            assignInheritedEyesAndWhiskers(sourceEntity, parentA, parentB);
            return;
        }
    });
}