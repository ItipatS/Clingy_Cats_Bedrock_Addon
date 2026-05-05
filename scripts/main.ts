// main.ts
import { world, system } from "@minecraft/server";
import { registerCatsEvents } from "./events/eventRegister";
import {  registerDebugRaycast } from "./debug/catdebug";
system.run(() => {
    registerCatsEvents();
    registerDebugRaycast();
    world.sendMessage("ClingyCats script loaded!");
});