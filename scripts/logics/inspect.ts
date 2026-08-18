import { Entity, EquipmentSlot, GameMode, Player, system, ItemComponentUseEvent } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { showGuide } from "./guideBook";
import { C } from "../ui/palette";
import { SYM, starBar, pretty } from "../ui/symbols";

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

// Every breed already ships a spawn-egg texture, so the portrait costs no new art.
// Custom pack textures need the ".png" suffix on form button icons; only vanilla
// texture paths may omit it.
function breedIconPath(cat: Entity): string {
    const id = cat.typeId.replace("clingy_cats:", "");
    const file = id === "test" ? "base_spawn_egg" : `${id}_spawn_egg`;
    return `textures/items/spawn_eggs/${file}.png`;
}

function showCatForm(player: Player, cat: Entity): void {
    const breed      = pretty(cat.typeId.replace("clingy_cats:", ""));
    const isBaby     = cat.hasComponent("minecraft:is_baby");
    const isTamed    = cat.hasComponent("minecraft:is_tamed");
    const isImmortal = cat.getProperty("clingy_cats:immortal") as boolean;

    const p  = (key: string) => pretty(String(cat.getProperty(`clingy_cats:${key}`) ?? "?"));
    const pi = (key: string) => (cat.getProperty(`clingy_cats:${key}`) as number) ?? 0;

    const stage = isBaby  ? "Kitten" : "Adult";
    const bond  = isTamed ? `${SYM.heart} Yours` : "Wild";

    const affection = pi("affection_level");
    const trust     = pi("trust_level");

    // No space-padded columns anywhere below: Bedrock's UI font is proportional,
    // so padded columns can never line up. One fact per line instead.
    const form = new ActionFormData()
        .title(`${C.gold}${C.bold}Meownifier`)
        .body(`${C.muted}${C.italic}A pocket telescope for the things a cat won't say.`)

        // Portrait row. A button is the only element that can carry an image, so
        // this doubles as the name card — clicking it just re-reads the cat.
        .button(`${C.paper}${breed}\n${C.muted}${stage} ${C.dim}${SYM.dot} ${C.paper}${bond}`,
                breedIconPath(cat))

        .divider()
        .header(`${C.gold}Bond`)
        .label(`${C.muted}Affection  ${C.copper}${starBar(affection, 1000)}  ${C.dim}${affection}/1000`)
        .label(`${C.muted}Trust      ${C.diamond}${starBar(trust, 1000)}  ${C.dim}${trust}/1000`)

        .divider()
        .header(`${C.gold}Temperament`)
        .label(`${C.muted}Personality  ${C.amethyst}${p("personality")}`)
        .label(`${C.muted}Trait        ${C.diamond}${p("behavior_trait")}`)
        .label(`${C.muted}Right now    ${C.paper}${p("state")}`)

        .divider()
        .header(`${C.gold}Habits`)
        .label(`${C.muted}Favourite  ${C.copper}${p("favorite_food")}`)
        .label(`${C.muted}Naps on    ${C.copper}${p("favorite_block")}`)

        .divider()
        .header(`${C.gold}Markings`)
        .label(`${C.muted}Size  ${C.paper}${p("size")}`)
        .label(`${C.muted}Eyes  ${C.paper}${p("eye_shape")}, ${p("eye_color")}`)
        .label(`${C.muted}Coat  ${C.paper}${p("pattern")} ${p("color")}, ${p("hairs")} hair`)
        .label(`${C.muted}Build ${C.paper}${p("tail")} tail, ${p("snout")} snout, ${p("head")} head`);

    if (isImmortal) {
        form.divider()
            .header(`${C.copper}${SYM.spark} Warded`)
            .label(`${C.muted}Carries a golden ward. Death passes it by.`);
    }

    form.button(`${C.muted}Close`)
        .show(player)
        .then((res) => {
            if (res.canceled) return;
            if (res.selection === 0) showCatForm(player, cat); // portrait = re-read
        })
        .catch(() => { /* player left or closed the client */ });
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
