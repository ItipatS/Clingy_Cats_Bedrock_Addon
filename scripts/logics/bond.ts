import { Entity, EntityTameableComponent, system, world } from "@minecraft/server";

const AFF = "clingy_cats:affection_level";
const TRU = "clingy_cats:trust_level";
const AFF_MAX = 1000;
const TRU_MAX = 1000;
const TRU_REST = 500;

export function getAffection(cat: Entity): number {
    return (cat.getProperty(AFF) as number) ?? 0;
}
export function setAffection(cat: Entity, v: number): void {
    cat.setProperty(AFF, Math.max(0, Math.min(AFF_MAX, Math.round(v))));
}
export function addAffection(cat: Entity, d: number): void {
    setAffection(cat, getAffection(cat) + d);
}

export function getTrust(cat: Entity): number {
    return (cat.getProperty(TRU) as number) ?? TRU_REST;
}
export function setTrust(cat: Entity, v: number): void {
    cat.setProperty(TRU, Math.max(0, Math.min(TRU_MAX, Math.round(v))));
}
export function addTrust(cat: Entity, d: number): void {
    setTrust(cat, getTrust(cat) + d);
}

export function registerBondLoop(): void {
    system.runInterval(() => {
        for (const player of world.getAllPlayers()) {
            const cats = player.dimension.getEntities({
                location: player.location,
                maxDistance: 64,
                families: ["clingy_cats"],
            });
            for (const cat of cats) {
                if (!cat.isValid) continue;

                // trust drifts toward rest whenever the cat is loaded near any player
                const t = getTrust(cat);
                if (t !== TRU_REST) setTrust(cat, t + (t < TRU_REST ? 1 : -1));

                // affection only bumps for owner within 16 blocks
                const tame = cat.getComponent("minecraft:tameable") as EntityTameableComponent | undefined;
                if (!tame?.isTamed) continue;
                if (tame.tamedToPlayerId !== player.id) continue;
                const dx = cat.location.x - player.location.x;
                const dy = cat.location.y - player.location.y;
                const dz = cat.location.z - player.location.z;
                if (dx * dx + dy * dy + dz * dz > 256) continue; // 16²
                addAffection(cat, 1);
            }
        }
    }, 20);
}

export function handlePet(cat: Entity): void {
    if (!cat.isValid) return;
    addAffection(cat, 5);
    addTrust(cat, 2);
    cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 0.8, pitch: 1.2 });
}

export function handleCatHurt(cat: Entity): void {
    if (!cat.isValid) return;
    addTrust(cat, -15);
}

const SLEEP_GATE = "clingy_cats:last_sleep_bump";
export function handleOwnerSleeping(cat: Entity): void {
    if (!cat.isValid) return;
    // entity_sensor fires every tick while condition holds; gate to one bump per 10s
    const now = system.currentTick;
    const last = (cat.getDynamicProperty(SLEEP_GATE) as number) ?? -9999;
    if (now - last < 200) return;
    cat.setDynamicProperty(SLEEP_GATE, now);
    addAffection(cat, 3);
}
