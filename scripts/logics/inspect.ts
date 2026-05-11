import { Entity, EquipmentSlot, GameMode, Player, system, ItemComponentUseEvent } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { showGuide } from "./guideBook";

export function registerItemComponents(): void {
    system.beforeEvents.startup.subscribe((ev) => {
        ev.itemComponentRegistry.registerCustomComponent("clingy_cats_component:guide_book", {
            onUse(event: ItemComponentUseEvent) {
                const player = event.source;
                if (!player) return;
                showGuide(player);
            }
        });

        ev.itemComponentRegistry.registerCustomComponent("clingy_cats_component:meownifier", {
            onUse(event: ItemComponentUseEvent) {
                const player = event.source;
                if (!player) return;

                const hits = player.dimension.getEntitiesFromRay(
                    player.getHeadLocation(),
                    player.getViewDirection(),
                    { maxDistance: 20, excludeTypes: ["minecraft:item", "minecraft:xp_orb"] }
                );

                const hit = hits.find(h => h.entity.typeId.startsWith("clingy_cats:") && h.entity !== player);
                if (!hit) return;

                const catSounds = ["mob.cat.meow", "mob.cat.purreow"];
                const sound = catSounds[Math.floor(Math.random() * catSounds.length)];
                player.dimension.playSound(sound, player.location, { volume: 1.0, pitch: 1.8 });
                showCatForm(player, hit.entity);
                reduceDurability(player);
            }
        });
    });
}

export function registerMeownifierEvents(): void {
    // routing now handled by clingy_cats:meownifier_use custom component
}

function statBar(val: number, max: number, len = 10): string {
    const filled = Math.round((val / max) * len);
    return "§2" + "█".repeat(filled) + "§8" + "░".repeat(len - filled) + `§7 ${val}§8/${max}`;
}

function showCatForm(player: Player, cat: Entity): void {
    const breed      = cat.typeId.replace("clingy_cats:", "").replace(/_/g, " ");
    const isBaby     = cat.hasComponent("minecraft:is_baby");
    const isTamed    = cat.hasComponent("minecraft:is_tamed");
    const isImmortal = cat.getProperty("clingy_cats:immortal") as boolean;

    const p  = (key: string) => String(cat.getProperty(`clingy_cats:${key}`) ?? "?").replace(/_/g, " ");
    const pi = (key: string) => (cat.getProperty(`clingy_cats:${key}`) as number) ?? 0;

    const stageTag   = isBaby  ? "§b★ Baby"    : "§a★ Adult";
    const tameTag    = isTamed ? "§d♥ Tamed"   : "§7  Wild";
    const immortalLine = isImmortal
        ? `\n§8-=-=-=-=-=-════════§r\n§c§l  ✦ IMMORTAL  §r§7  protected by totem`
        : "";

    const body = [
        `§e§l${breed.toUpperCase()}§r`,
        `§8  ${stageTag}§8  |  ${tameTag}`,
        `§8- - - - - - - - - - - - - - -`,
        `§6§lIDENTITY`,
        `§7  Personality  §d${p("personality")}`,
        `§7  Trait        §b${p("behavior_trait")}`,
        `§7  Fav. Food    §e${p("favorite_food")}`,
        `§7  Fav. Block   §3${p("favorite_block")}`,
        `§8- - - - - - - - - - - - - - -`,
        `§6§lVITALS`,
        `§7  Size   §f${p("size")}§7   State  §f${p("state")}`,
        `§d  Affection  ${statBar(pi("affection_level"), 1000)}`,
        `§a  Trust      ${statBar(pi("trust_level"),     1000)}`,
        `§8- - - - - - - - - - - - - - -`,
        `§6§lAPPEARANCE`,
        `§7  Eyes  §f${p("eye_shape")} §8/ §f${p("eye_color")}`,
        `§7  Coat  §f${p("pattern")} §8+ §f${p("color")} §8+ §f${p("hairs")} hair`,
        `§7  Tail  §f${p("tail")}  §7Snout  §f${p("snout")}  §7Head  §f${p("head")}`,
        immortalLine,
    ].join("\n");

    new ActionFormData()
        .title("§6§l[ Meownifier ]§r")
        .body(body)
        .button("§7Close")
        .show(player);
}

function reduceDurability(player: Player): void {
    if (player.getGameMode() === GameMode.Creative) return;
    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;
    const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    const item = slot.getItem();
    if (!item) return;
    const dur = item.getComponent("minecraft:durability");
    if (!dur) return;
    const next = dur.damage + 1;
    if (next >= dur.maxDurability) {
        slot.setItem(undefined);
        player.dimension.playSound("random.break", player.location);
    } else {
        dur.damage = next;
        slot.setItem(item);
    }
}
