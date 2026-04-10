// main.ts
import { world, system } from "@minecraft/server";
import { registerCatSpawnSubscriber } from "./events/breedevent";

system.run(() => {
    registerCatSpawnSubscriber();
    world.sendMessage("ClingyCats script loaded!");
});