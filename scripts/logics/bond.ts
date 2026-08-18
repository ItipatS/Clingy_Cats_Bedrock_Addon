import { Entity, EntityTameableComponent, Player, system, world } from "@minecraft/server";
import { Personality } from "../configs/catsbreed";
import { distanceSq } from "./utils";
import { behaviorTick } from "./states";
import { feedLog, tag } from "../debug/feedDebug";

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

// ── Taming: marble bag ──────────────────────────────────────────────────────
//
// Replaces the old affection threshold, which was a pure counter — an anxious cat
// needed 80 neutral feeds, with zero variance and no sign you were getting close.
//
// Each cat carries a bag holding ONE tame marble among N. Every deliberate
// interaction draws WITHOUT replacement, so the odds visibly improve as the bag
// empties and the last draw is a certainty. Best case one interaction, worst case N.
//
// Only the count is stored: with one tame marble among `remaining`, drawing is
// exactly `random() < 1 / remaining`. At remaining = 1 that is always true, which
// is the guarantee. No array to serialise.
//
// Affection is untouched by this and keeps accruing on every path — it still drives
// behaviorTick through applyBondMultipliers, which is the whole point of the stat.
const TAME_BAG = "clingy_cats:tame_bag";

/** Throttle for the sustained-proximity path — see the bond loop. */
const PROX_DRAW = "clingy_cats:last_prox_draw";
const PROX_DRAW_INTERVAL = 100;

export const TAME_BAG_SIZE: Record<Personality, number> = {
    affectionate: 2,
    playful:      3,
    confident:    3,
    calm:         4,
    aloof:        5,
    anxious:      6,
};

/** Draw once. Returns true if the tame marble came out. */
function drawTameMarble(cat: Entity, personality: Personality): boolean {
    const stored = cat.getDynamicProperty(TAME_BAG) as number | undefined;
    const remaining = stored && stored > 0 ? stored : TAME_BAG_SIZE[personality];

    if (Math.random() < 1 / remaining) {
        cat.setDynamicProperty(TAME_BAG, 0);
        return true;
    }
    cat.setDynamicProperty(TAME_BAG, remaining - 1);
    return false;
}

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

// minecraft:tameable lives ONLY in the clingy_cats:wild group, and clingy_cats:on_tame
// removes that group — which is correct, since tameable is what *enables* taming and a
// tamed cat has nothing left to tame. The consequence is that getComponent("minecraft:tameable")
// is undefined on a tamed cat, so it can never be used to ask "is this tamed?".
// minecraft:is_tamed is the component that actually persists. Always test with this.
export function isTamed(cat: Entity): boolean {
    return cat.hasComponent("minecraft:is_tamed");
}

// tameable.tamedToPlayerId goes away with the component, so the owner is mirrored here
// at the moment of taming.
const OWNER = "clingy_cats:owner_id";

export function getOwnerId(cat: Entity): string {
    return (cat.getDynamicProperty(OWNER) as string) ?? "";
}

/** Record the owner on any path that tames a cat, so proximity/feed checks can resolve it. */
export function markOwner(cat: Entity, player: Player): void {
    cat.setDynamicProperty(OWNER, player.id);
}

/**
 * Draw from the cat's tame bag. Returns true if it got tamed on this call.
 * @param draws how many marbles this interaction is worth — favourite food draws twice.
 */
export function checkAutoTame(cat: Entity, player: Player, draws = 1): boolean {
    if (!cat.isValid) return false;
    if (isTamed(cat)) return false;
    const tame = cat.getComponent("minecraft:tameable") as EntityTameableComponent | undefined;
    if (!tame) return false;

    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
    if (!personality) return false;

    let hit = false;
    for (let i = 0; i < draws && !hit; i++) hit = drawTameMarble(cat, personality);
    if (!hit) {
        const left = (cat.getDynamicProperty(TAME_BAG) as number) ?? TAME_BAG_SIZE[personality];
        feedLog(`§8draw§r ${tag(cat)} no — ${left} marble${left === 1 ? "" : "s"} left (next is ${left === 1 ? "certain" : "1 in " + left})`);
        return false;
    }

    feedLog(`§aTAMED§r ${tag(cat)} (${personality})`);
    tame.tame(player);
    markOwner(cat, player);
    cat.setDynamicProperty(BONDER, ""); // owner id takes over from the bonder lock
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

                const dx = cat.location.x - player.location.x;
                const dy = cat.location.y - player.location.y;
                const dz = cat.location.z - player.location.z;
                const d2 = dx * dx + dy * dy + dz * dz;

                if (isTamed(cat)) {
                    // owner within 16 blocks → +1 aff
                    if (getOwnerId(cat) !== player.id) continue;
                    if (d2 > 256) continue;
                    addAffection(cat, 1);
                } else {
                    // wild proximity tame: trait=curious OR personality=affectionate,
                    // player sneaking within 8 blocks, bonder lock honored
                    if (isHissing(cat)) continue;
                    if (!player.isSneaking) continue;
                    if (d2 > 64) continue;
                    const trait = cat.getProperty("clingy_cats:behavior_trait") as string | undefined;
                    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
                    if (trait !== "curious" && personality !== "affectionate") continue;
                    if (!canBond(cat, player)) continue;
                    claimBond(cat, player);
                    addAffection(cat, 1);

                    // This loop runs every 20 ticks, so drawing here unthrottled would
                    // empty a 2-marble bag in two seconds. Sustained proximity earns a
                    // draw every 5s — patience is a real path, but a slow one.
                    const last = (cat.getDynamicProperty(PROX_DRAW) as number) ?? -9999;
                    if (system.currentTick - last < PROX_DRAW_INTERVAL) continue;
                    cat.setDynamicProperty(PROX_DRAW, system.currentTick);
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
    if (isHissing(cat)) return;
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

    // PET_BUMPS[anxious] is 0 by design — an anxious cat cannot be petted into
    // taming at all, food is its only route. Keep that: no bump, no draw.
    if (PET_BUMPS[personality] <= 0) return;
    checkAutoTame(cat, player);
}

export function handleCatHurt(cat: Entity): void {
    if (!cat.isValid) return;
    addTrust(cat, -15);
}

// Wrong-food rejection. Trust drops by personality; if post-drop trust < 300
// the cat enters a 3s state-hissing lockout (state=fleeing, emotion=angry,
// extra particles, all interact handlers early-return).
const WRONG_TRUST_DROPS: Record<Personality, number> = {
    anxious:      -40,
    affectionate: -25,
    aloof:        -20,
    playful:      -15,
    confident:    -10,
    calm:         -10,
};
const HISS_VOLUMES: Record<Personality, number> = {
    anxious:      1.0,
    affectionate: 0.8,
    aloof:        0.8,
    playful:      0.8,
    confident:    0.8,
    calm:         0.6,
};
const HISSING_UNTIL = "clingy_cats:hissing_until";
const HISS_LOCKOUT_TICKS = 60;
const STATE_HISS_TRUST_FLOOR = 300;

export function isHissing(cat: Entity): boolean {
    const until = (cat.getDynamicProperty(HISSING_UNTIL) as number) ?? 0;
    return system.currentTick < until;
}

export function handleWrongFood(cat: Entity): void {
    if (!cat.isValid) return;
    if (isHissing(cat)) return; // already mid-hiss; ignore further provocation

    const personality = cat.getProperty("clingy_cats:personality") as Personality | undefined;
    if (!personality) return;

    const drop   = WRONG_TRUST_DROPS[personality];
    const volume = HISS_VOLUMES[personality];

    addTrust(cat, drop);
    cat.setProperty("clingy_cats:emotion", "angry");
    cat.dimension.playSound("mob.cat.hiss", cat.location, { volume, pitch: 1.0 });
    cat.dimension.spawnParticle("minecraft:villager_angry", {
        x: cat.location.x, y: cat.location.y + 0.6, z: cat.location.z,
    });

    if (getTrust(cat) >= STATE_HISS_TRUST_FLOOR) return;

    // Escalation: brief lockout state. Other handlers honor isHissing().
    // 'hissing' (not 'fleeing') — the RP animation controller keys the angry pose on it,
    // and clingy_cats:on_flee also writes 'fleeing' from three avoid_mob_type escapes per
    // breed, so reusing it would play the angry pose on every ordinary mob flee.
    cat.setProperty("clingy_cats:state", "hissing");
    cat.setDynamicProperty(HISSING_UNTIL, system.currentTick + HISS_LOCKOUT_TICKS);

    // extra angry puffs over the lockout window
    system.runTimeout(() => {
        if (!cat.isValid) return;
        cat.dimension.spawnParticle("minecraft:villager_angry", {
            x: cat.location.x, y: cat.location.y + 0.6, z: cat.location.z,
        });
    }, 20);
    system.runTimeout(() => {
        if (!cat.isValid) return;
        cat.dimension.spawnParticle("minecraft:villager_angry", {
            x: cat.location.x, y: cat.location.y + 0.6, z: cat.location.z,
        });
    }, 40);

    // clear lockout by re-rolling behavior (also picks a new state)
    system.runTimeout(() => {
        if (!cat.isValid) return;
        behaviorTick(cat);
    }, HISS_LOCKOUT_TICKS);
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
