import { Entity, Player, world } from "@minecraft/server";

const ANCHOR_IDS_KEY = "clingy_cats:anchor_ids";
const MAX_ANCHORS = 2;

// ============================================================
// ANCHOR TRACKING
// ============================================================

function getStoredAnchorIds(player: Player): string[] {
    return JSON.parse(
        (player.getDynamicProperty(ANCHOR_IDS_KEY) as string) ?? "[]"
    ) as string[];
}

function setStoredAnchorIds(player: Player, ids: string[]): void {
    player.setDynamicProperty(ANCHOR_IDS_KEY, JSON.stringify(ids));
}

function getActiveAnchors(player: Player): Entity[] {
    const storedIds = getStoredAnchorIds(player);
    return player.dimension
        .getEntities({ location: player.location, maxDistance: 6, families: ["clingy_cats_anchor"] })
        .filter(e => storedIds.includes(e.id));
}

function findOwnerPlayer(anchor: Entity): Player | undefined {
    return anchor.dimension
        .getPlayers({ location: anchor.location, maxDistance: 6 })
        .find(p => {
            const ids = getStoredAnchorIds(p);
            return ids.includes(anchor.id);
        });
}

// ============================================================
// MOUNT
// ============================================================

export function handleRequestShoulderMount(cat: Entity): void {
    if (!cat.isValid) return;

    const player = cat.dimension
        .getPlayers({ location: cat.location, maxDistance: 5 })[0];
    if (!player) return;

    const active = getActiveAnchors(player);
    if (active.length >= MAX_ANCHORS) return;

    const anchor = cat.dimension.spawnEntity(
        "clingy_cats:shoulder_anchor",
        player.location
    );

    const trait = cat.getProperty("clingy_cats:behavior_trait") as string;
    anchor.triggerEvent(`clingy_cats:anchor_timer_${trait}`);

    const ids = getStoredAnchorIds(player);
    ids.push(anchor.id);
    setStoredAnchorIds(player, ids);

    world.sendMessage(`§b[ClingyCats] anchor spawned for ${player.name} trait:${trait}`);
}

// ============================================================
// DISMOUNT
// ============================================================

export function handleAnchorExpire(anchor: Entity): void {
    if (!anchor.isValid) return;

    const player = findOwnerPlayer(anchor);
    if (player) {
        const ids = getStoredAnchorIds(player);
        setStoredAnchorIds(player, ids.filter(id => id !== anchor.id));
        world.sendMessage(`§c[ClingyCats] anchor expired for ${player.name}`);
    }
    anchor.remove();
}