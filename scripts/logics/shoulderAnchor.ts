// logics/shoulderAnchor.ts
import { world, system, Player, Entity } from "@minecraft/server";

const ANCHOR_TYPE = "clingy_cats:shoulder_anchor";

// Config — tune without touching BP
const MOUNT_CHANCE = 0.6;

type AnchorSlot = "left" | "right";

const SLOT_DP: Record<AnchorSlot, string> = {
    left:  "clingy_cats:anchor_left",
    right: "clingy_cats:anchor_right",
};

function getOwnerNearCat(cat: Entity): Player | undefined {
    return cat.dimension.getPlayers({
        location: cat.location,
        maxDistance: 8
    }).find(player => player.isSneaking);
}

function getAnchorById(player: Player, anchorId?: string): Entity | undefined {
    if (!anchorId) return undefined;
    return player.dimension
        .getEntities({ type: ANCHOR_TYPE })
        .find(e => e.id === anchorId && e.isValid);
}

function ensureAnchor(player: Player, slot: AnchorSlot): Entity {
    const dpKey = SLOT_DP[slot];
    const storedId = player.getDynamicProperty(dpKey) as string | undefined;
    const existing = getAnchorById(player, storedId);
    if (existing) return existing;

    const anchor = player.dimension.spawnEntity(ANCHOR_TYPE, player.location);
    anchor.setDynamicProperty("clingy_cats:owner_id", player.id);
    anchor.setDynamicProperty("clingy_cats:slot", slot);
    player.setDynamicProperty(dpKey, anchor.id);

    world.sendMessage(`§8[ClingyCats] spawned ${slot} anchor for ${player.name}`);
    return anchor;
}

function getFreeAnchorSlot(player: Player): AnchorSlot | undefined {
    for (const slot of ["left", "right"] as AnchorSlot[]) {
        const storedId = player.getDynamicProperty(SLOT_DP[slot]) as string | undefined;
        const anchor = getAnchorById(player, storedId);
        if (!anchor) return slot;
        const occupiedBy = anchor.getDynamicProperty("clingy_cats:occupied_by") as string | undefined;
        if (!occupiedBy) return slot;
    }
    return undefined;
}

export function handleRequestShoulderMount(cat: Entity): void {
    if (Math.random() > MOUNT_CHANCE) {
        world.sendMessage(`§8[ClingyCats] mount chance failed`);
        return;
    }

    const player = getOwnerNearCat(cat);
    if (!player) {
        world.sendMessage("§8[ClingyCats] no nearby sneaking owner found");
        return;
    }

    const freeSlot = getFreeAnchorSlot(player);
    if (!freeSlot) {
        world.sendMessage(`§8[ClingyCats] no free anchor slot for ${player.name}`);
        return;
    }

    const anchor = ensureAnchor(player, freeSlot);
    if (!anchor.isValid) return;

    anchor.setDynamicProperty("clingy_cats:occupied_by", cat.id);
    cat.setDynamicProperty("clingy_cats:anchor_slot", freeSlot);
    cat.setDynamicProperty("clingy_cats:anchor_id", anchor.id);

    // Give anchor a tick to register before cat seeks it
    system.runTimeout(() => {
        if (!cat.isValid || !anchor.isValid) return;
        cat.triggerEvent("clingy_cats:add_can_mount");
    }, 2);

    world.sendMessage(`§b[ClingyCats] ${cat.typeId} assigned to ${freeSlot} anchor`);
}

export function handleDropOffCat(cat: Entity): void {
    const anchorId = cat.getDynamicProperty("clingy_cats:anchor_id") as string | undefined;
    if (!anchorId) return;

    const anchor = cat.dimension
        .getEntities({ location: cat.location, maxDistance: 16, type: ANCHOR_TYPE })
        .find(e => e.id === anchorId);

    if (anchor?.isValid) {
        // Clear owner slot DP
        const ownerId = anchor.getDynamicProperty("clingy_cats:owner_id") as string | undefined;
        const slot = anchor.getDynamicProperty("clingy_cats:slot") as AnchorSlot | undefined;
        if (ownerId && slot) {
            cat.dimension.getPlayers({ location: cat.location, maxDistance: 32 })
                .find(p => p.id === ownerId)
                ?.setDynamicProperty(SLOT_DP[slot], undefined);
        }
        anchor.setDynamicProperty("clingy_cats:occupied_by", undefined);
        system.runTimeout(() => { if (anchor.isValid) anchor.remove(); }, 1);
    }

    cat.setDynamicProperty("clingy_cats:anchor_slot", undefined);
    cat.setDynamicProperty("clingy_cats:anchor_id", undefined);

    world.sendMessage("§8[ClingyCats] cat dropped off shoulder");
}

export function handleAnchorDetached(anchor: Entity): void {
    // Fired when anchor loses its player ride externally (player died, etc.)
    if (!anchor.isValid) return;

    const occupiedBy = anchor.getDynamicProperty("clingy_cats:occupied_by") as string | undefined;
    if (occupiedBy) {
        anchor.dimension
            .getEntities({ location: anchor.location, maxDistance: 32 })
            .find(e => e.id === occupiedBy)
            ?.setDynamicProperty("clingy_cats:anchor_slot", undefined);
        // cat's own entity_sensor detects is_riding false → off_riding_player → restore_identity
    }

    anchor.setDynamicProperty("clingy_cats:occupied_by", undefined);
    system.runTimeout(() => { if (anchor.isValid) anchor.remove(); }, 1);

    world.sendMessage("§8[ClingyCats] anchor detached externally");
}