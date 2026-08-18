import { Entity, world } from "@minecraft/server";

// Throw-feed tracing. Off by default — toggle in-game with:
//     /scriptevent clingycats:debug_feed
// so you can watch a feed happen without rebuilding. Ships false; the toggle is
// runtime-only and resets on world reload.

let enabled = false;

export function isFeedDebugOn(): boolean {
    return enabled;
}

export function toggleFeedDebug(): void {
    enabled = !enabled;
    world.sendMessage(`§e[feed] debug ${enabled ? "§aON" : "§cOFF"}`);
    if (enabled) {
        world.sendMessage("§8  expect: §bmark§8 when a cat nears dropped food, §7poke§8 every 10t while watched, §aFED§8 when it lands");
    }
}

/** Short id so lines stay readable in chat. */
export function tag(entity: Entity): string {
    const kind = entity.typeId.replace("clingy_cats:", "").replace("minecraft:", "");
    return `${kind}#${entity.id.slice(-4)}`;
}

export function feedLog(msg: string): void {
    if (!enabled) return;
    world.sendMessage(`§8[feed]§r ${msg}`);
}
