import { Entity } from '@minecraft/server';
import { TextureData } from '../configs/catsbreed';

export function distanceSq(a: Entity, b: Entity): number {
    const dx = a.location.x - b.location.x;
    const dy = a.location.y - b.location.y;
    const dz = a.location.z - b.location.z;
    return dx*dx + dy*dy + dz*dz;
}

/** Returns [mother, father] — the two closest adults of the same breed near the baby. */
export function findBothParents(baby: Entity, maxDistance = 6): [Entity, Entity] | [Entity] | [] {
    const adults = baby.dimension
        .getEntities({ location: baby.location, maxDistance, type: baby.typeId })
        .filter(e => e.id !== baby.id && !e.hasComponent("minecraft:is_baby"))
        .sort((a, b) => distanceSq(a, baby) - distanceSq(b, baby));
    if (adults.length >= 2) return [adults[0], adults[1]];
    if (adults.length === 1) return [adults[0]];
    return [];
}

export function randomFrom<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function uniqueValues(catalog: Record<number, TextureData>, key: keyof TextureData): string[] {
    return [...new Set(Object.values(catalog).map(d => d[key]))];
}

export function weightedRandom<T extends { weight: number }>(pool: readonly T[]): T {
    const total = pool.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * total;
    for (const entry of pool) {
        roll -= entry.weight;
        if (roll <= 0) return entry;
    }
    return pool[pool.length - 1];
}
