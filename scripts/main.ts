// main.ts
import { world, system } from "@minecraft/server";
import { registerSubscriber } from "./events/eventRegister";
import {  registerDebugRaycast } from "./debug/catdebug";
system.run(() => {
    registerSubscriber();
    registerDebugRaycast();
    world.sendMessage("ClingyCats script loaded!");
});