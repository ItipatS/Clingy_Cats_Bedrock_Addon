import { Entity, EntityTameableComponent, Player, system, world } from "@minecraft/server";
import { Personality } from "../configs/catsbreed";
import { distanceSq } from "./utils";

const AFF = "clingy_cats:affection_level";
const TRU = "clingy_cats:trust_level";
const AFF_MAX = 1000;
const TRU_MAX = 1000;
const TRU_REST = 500;

// Bonder lock: first player to accrue affection on a wild cat claims it.
// Other players' pet/feed/proximity bumps are ignored until tame, after which
// tamedToPlayerId takes over and BONDER is cleared.
const BONDER = "clingy_cats:bonder_id";

export function getBonderId(cat: Entity): string {
    return (cat.getDynamicProperty(BONDER) as string) ?? "";
}

export function canBond(cat: Entity, player: Player): boolean {
    const id = getBonderId(cat);
    return id === "" || id === player.id;
}

export function claimBond(cat: Entity, player: Player): void {
    if (getBonderId(cat) === "") cat.setDynamicProperty(BONDER, player.id);
}

// Personality-gated tame paths. Pet/feed bumps stack toward TAME_THRESHOLDS;
// crossing the threshold auto-tames the cat to the bonder.
export const TAME_THRESHOLDS: Record<Personality, number> = {
    affectionate: 150,
    playful:      250,
    confident:    250,
    calm:         300,
    aloof:        350,
    anxious:      400,
};

export const PET_BUMPS: Record<Personality, number> = {
    affectionate: 20,
    playful:      12,
    confident:     5,
    calm:          3,
    aloof:         1,
    anxious:       0,
};

export const FEED_BUMPS: Record<Personality, { favorite: number; neutral: number }> = {
    affectionate: { favorite: 30, neutral: 12 },
    playful:      { favorite: 25, neutral: 10 },
    confident:    { favorite: 30, neutral: 12 },
    calm:         { favorite: 25, neutral: 10 },
    aloof:        { favorite: 20, neutral:  8 },
    anxious:      { favorite: 15, neutral:  5 },
};

// Returns true if the cat crossed its threshold and got tamed on this call.
export function checkAutoTame(cat: Entity, player: Player): boolean {
    if (!cat.isValid) return false;
    const tame = cat.getComponent("minecraft:tameable") as EntityTameableComponent | undefined;
    if (!tame || tame.isTamed) return false;

    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
    if (!personality) return false;

    const threshold = TAME_THRESHOLDS[personality];
    if (getAffection(cat) < threshold) return false;

    tame.tame(player);
    cat.setDynamicProperty(BONDER, ""); // tamedToPlayerId takes over
    cat.setProperty(AFF, 100);
    cat.setProperty(TRU, TRU_REST);
    cat.dimension.playSound("mob.cat.meow", cat.location, { volume: 1.0, pitch: 1.2 });
    return true;
}

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

                const tame = cat.getComponent("minecraft:tameable") as EntityTameableComponent | undefined;
                const dx = cat.location.x - player.location.x;
                const dy = cat.location.y - player.location.y;
                const dz = cat.location.z - player.location.z;
                const d2 = dx * dx + dy * dy + dz * dz;

                if (tame?.isTamed) {
                    // owner within 16 blocks → +1 aff
                    if (tame.tamedToPlayerId !== player.id) continue;
                    if (d2 > 256) continue;
                    addAffection(cat, 1);
                } else {
                    // wild proximity tame: trait=curious OR personality=affectionate,
                    // player sneaking within 8 blocks, bonder lock honored
                    if (!player.isSneaking) continue;
                    if (d2 > 64) continue;
                    const trait = cat.getProperty("clingy_cats:behavior_trait") as string | undefined;
                    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
                    if (trait !== "curious" && personality !== "affectionate") continue;
                    if (!canBond(cat, player)) continue;
                    claimBond(cat, player);
                    addAffection(cat, 1);
                    checkAutoTame(cat, player);
                }
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

// Wild-cat pet path. Picks nearest player within 3 blocks, applies the bonder
// lock, applies personality-tuned PET_BUMPS, then rolls the threshold check.
export function handleWildPet(cat: Entity): void {
    if (!cat.isValid) return;
    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
    if (!personality) return;

    const player = cat.dimension
        .getPlayers({ location: cat.location, maxDistance: 3 })
        .sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];
    if (!player) return;

    if (!canBond(cat, player)) {
        cat.dimension.playSound("mob.cat.hiss", cat.location, { volume: 0.5, pitch: 1.0 });
        return;
    }
    claimBond(cat, player);

    addAffection(cat, PET_BUMPS[personality]);
    addTrust(cat, 2);
    cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 0.8, pitch: 1.2 });

    checkAutoTame(cat, player);
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
