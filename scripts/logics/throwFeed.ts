import { Entity, system, world } from "@minecraft/server";
import { feedLog, tag } from "../debug/feedDebug";

// Throw-feeding: player drops/throws food, cat picks it up, that counts as a feed.
//
// Two BP event routes were tried and both are dead ends:
//   - behavior.pickup_items -> on_pickup_item_end never fires for a stack of exactly 1.
//     The event is keyed to the dropped item entity, which a full pickup destroys
//     before the trigger resolves. Stacks of 2+ fire normally. Engine bug.
//   - minecraft:on_equipment_changed only reports real equipment slots being equipped
//     (armor, saddle). It does not see a mob scooping an item off the ground.
//
// Script also cannot read what an entity is holding. But BP filters can:
// clingy_cats:on_pick_up already tests `has_equipment_tag: minecraft:is_food` on self
// and chains into clingy_cats:on_give. So SCRIPT POKES, BP ANSWERS.
//
// WHAT WE TRACK, AND WHY IT IS THE ITEM AND NOT THE CAT:
// The obvious version — "poke every cat standing near food" — is wrong, because
// minecraft:behavior.eat_carried_item has delay_before_eating: 100. A cat holds its
// food for five whole seconds, during which the BP filter answers "yes, holding food"
// every single time. That turns one pickup into a feed every poll and drags the cat
// toward taming just for having something in its mouth.
//
// So we track dropped food ITEMS instead. Each pass records which cats are standing
// near each food item. When an item entity disappears from the world, someone took it:
// we poke the cats that were beside it exactly once, then forget the item. One
// vanished item = at most one feed.

/** Last tick this cat was poked by the item-vanished path. */
const LAST_POKE = "clingy_cats:last_pickup_poke";

/** Cats a food item was standing next to, keyed by the item entity id. */
interface Watched {
    cats: string[];
    tick: number;
}
const watched = new Map<string, Watched>();

const POLL_INTERVAL = 10;

/** How close a cat must be to a dropped item to be a candidate taker. */
const NEAR_ITEM = 6;

/** Matches delay_before_eating (100t) so a cat cannot be fed twice for one mouthful,
 *  even if a second item happens to vanish nearby while it is still chewing. */
const POKE_COOLDOWN = 100;

/** Beyond this, a vanished item is too stale to attribute to anyone — it probably
 *  despawned or the chunk unloaded rather than being picked up. */
const STALE_TICKS = 40;

export function registerThrowFeedWatch(): void {
    system.runInterval(() => {
        const now = system.currentTick;
        const alive = new Set<string>();

        for (const player of world.getAllPlayers()) {
            const items = player.dimension.getEntities({
                location: player.location,
                maxDistance: 32,
                type: "minecraft:item",
            });
            for (const item of items) {
                if (!item.isValid) continue;
                const stack = item.getComponent("minecraft:item")?.itemStack;
                if (!stack?.hasTag("minecraft:is_food")) continue;

                alive.add(item.id);
                const near = item.dimension
                    .getEntities({
                        location: item.location,
                        maxDistance: NEAR_ITEM,
                        families: ["clingy_cats"],
                    })
                    .filter(c => c.isValid)
                    .map(c => c.id);
                if (near.length) watched.set(item.id, { cats: near, tick: now });
            }
        }

        // Anything tracked but no longer in the world was taken by someone.
        for (const [itemId, rec] of watched) {
            if (alive.has(itemId)) continue;
            watched.delete(itemId);
            if (now - rec.tick > STALE_TICKS) continue;

            for (const catId of rec.cats) {
                const cat = world.getEntity(catId);
                if (!cat?.isValid) continue;

                const last = (cat.getDynamicProperty(LAST_POKE) as number) ?? -9999;
                if (now - last < POKE_COOLDOWN) {
                    feedLog(`§8skip§r ${tag(cat)} still on cooldown`);
                    continue;
                }
                cat.setDynamicProperty(LAST_POKE, now);

                feedLog(`§7poke§r ${tag(cat)} — food vanished beside it`);
                cat.triggerEvent("clingy_cats:on_pick_up");
            }
        }
    }, POLL_INTERVAL);
}
