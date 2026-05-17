// main.ts
import { world, system } from "@minecraft/server";
import { registerCatsEvents } from "./events/eventRegister";
import { registerDebugRaycast } from "./debug/catdebug";
import { registerItemComponents } from "./logics/inspect";
import { registerBondLoop } from "./logics/bond";

registerItemComponents();

system.run(() => {
    registerCatsEvents();
    registerDebugRaycast();
    registerBondLoop();
});