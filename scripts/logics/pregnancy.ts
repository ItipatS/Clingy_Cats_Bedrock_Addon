import { Entity } from '@minecraft/server';
import { distanceSq } from './utils';
import { ParentGeneData, ConceptionRecord, determineBabyBreed } from './genetics';
import { assignInheritedAppearanceFromGenes, assignInheritedEyesAndWhiskersFromGenes } from './appearance';
import { assignRandomPersonality } from './personality';

// ============================================================
// GENE CAPTURE
// ============================================================

function getParentTraits(parent: Entity) {
    return {
        pattern: parent.getProperty("clingy_cats:pattern") as string,
        color:   parent.getProperty("clingy_cats:color")   as string,
        hairs:   parent.getProperty("clingy_cats:hairs")   as string,
        tail:    parent.getProperty("clingy_cats:tail")    as string,
        snout:   parent.getProperty("clingy_cats:snout")   as string,
        head:    parent.getProperty("clingy_cats:head")    as string,
    };
}

function captureGenes(entity: Entity): ParentGeneData {
    return {
        typeId:   entity.typeId,
        traits:   getParentTraits(entity),
        eyeColor: entity.getProperty("clingy_cats:eye_color") as string,
        eyeShape: entity.getProperty("clingy_cats:eye_shape") as string,
        whiskers: entity.getProperty("clingy_cats:whiskers")  as string,
    };
}

function findFather(mother: Entity): Entity | undefined {
    return mother.dimension
        .getEntities({ location: mother.location, maxDistance: 6, families: ["cat"] })
        .filter(e => e.id !== mother.id && !e.hasComponent("minecraft:is_baby"))
        .sort((a, b) => distanceSq(a, mother) - distanceSq(b, mother))[0];
}

// ============================================================
// PREGNANCY STATE
// ============================================================

/** Keyed by mother entity ID, cleared after givebirth fires. */
const pregnancyMap = new Map<string, ConceptionRecord>();

// ============================================================
// EVENT HANDLERS
// ============================================================

// Weighted litter sizes: 1-2 most common, 5-6 rare
const LITTER_WEIGHTS = [40, 30, 15, 8, 5, 2]; // index+1 = baby count

function rollLitterSize(): number {
    const total = LITTER_WEIGHTS.reduce((s, w) => s + w, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < LITTER_WEIGHTS.length; i++) {
        roll -= LITTER_WEIGHTS[i];
        if (roll <= 0) return i + 1;
    }
    return 1;
}

export function handleConception(mother: Entity): void {
    const fatherEntity = findFather(mother);
    const record: ConceptionRecord = {
        mother:    captureGenes(mother),
        father:    fatherEntity ? captureGenes(fatherEntity) : undefined,
        babyCount: rollLitterSize(),
    };
    pregnancyMap.set(mother.id, record);
    mother.setDynamicProperty("clingy_cats:conception_data", JSON.stringify(record));
}

export function handleGiveBirth(mother: Entity): void {
    const record: ConceptionRecord | undefined =
        pregnancyMap.get(mother.id) ??
        (() => {
            const raw = mother.getDynamicProperty("clingy_cats:conception_data") as string | undefined;
            return raw ? JSON.parse(raw) as ConceptionRecord : undefined;
        })();

    pregnancyMap.delete(mother.id);
    mother.setDynamicProperty("clingy_cats:conception_data", undefined);

    const { mother: momGenes, father: dadGenes, babyCount = 1 } = record ?? { mother: captureGenes(mother), father: undefined, babyCount: 1 };

    for (let i = 0; i < babyCount; i++) {
        const babyBreed = determineBabyBreed(momGenes, dadGenes);
        const baby = mother.dimension.spawnEntity(babyBreed, mother.location);

        // Tag before clingycats:catspawn fires next tick so that handler skips random appearance
        baby.addTag("clingy_cats:not_wild_spawn");
        baby.triggerEvent("clingy_cats:born");

        assignInheritedAppearanceFromGenes(baby, momGenes, dadGenes);
        assignInheritedEyesAndWhiskersFromGenes(baby, momGenes, dadGenes);
        assignRandomPersonality(baby);
        baby.triggerEvent("clingy_cats:visible");
    }
}
