// main.ts
import { world, system } from "@minecraft/server";
import { registerCatsEvents } from "./events/eventRegister";
import { registerDebugRaycast } from "./debug/catdebug";
import { registerItemComponents } from "./logics/inspect";
import { registerBondLoop } from "./logics/bond";
import { registerVanillaCatSwap } from "./logics/vanillaCat";
import { registerThrowFeedWatch } from "./logics/throwFeed";

registerItemComponents();

system.run(() => {
    registerCatsEvents();
    registerDebugRaycast();
    registerBondLoop();
    registerVanillaCatSwap();

    // Throw-feeding runs on this poll, not on a BP event.
    //
    // Two BP event routes were tried and both are dead ends:
    //   - behavior.pickup_items -> on_pickup_item_end never fires for a stack of 1
    //     (engine bug: keyed to the item entity, which a full pickup destroys)
    //   - minecraft:on_equipment_changed only reports real equipment slots being
    //     equipped (armor/saddle), not an item a mob picks up into its hand
    //
    // So script pokes clingy_cats:on_pick_up at cats seen near dropped food, and the
    // BP filter on that event decides whether a feed actually happens.
    registerThrowFeedWatch();
});