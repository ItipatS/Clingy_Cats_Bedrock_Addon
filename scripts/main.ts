// main.ts
import { world, system } from "@minecraft/server";
import { registerCatSpawnSubscriber } from "./events/eventRegister";
import {  registerDebugRaycast } from "./debug/catdebug";
system.run(() => {
    registerCatSpawnSubscriber();
    registerDebugRaycast();
    world.sendMessage("ClingyCats script loaded!");
});