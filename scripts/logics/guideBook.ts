import { ItemStack, Player, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

const GUIDE_TAG = "clingy_cats:welcomed";

const ICON_GUIDE   = "textures/items/guidebook";
const ICON_MEOW    = "textures/items/meownifier";
const ICON_TABBY   = "textures/items/spawn_eggs/tabby_spawn_egg";
const ICON_PERSIAN = "textures/items/spawn_eggs/persian_spawn_egg";
const ICON_OCELOT  = "textures/items/spawn_eggs/ocelot_spawn_egg";
const ICON_CALICO  = "textures/items/spawn_eggs/calico_spawn_egg";
const ICON_RAGDOLL = "textures/items/spawn_eggs/ragdoll_spawn_egg";

export function registerGuideBookEvents(): void {
    world.afterEvents.playerSpawn.subscribe((ev) => {
        if (!ev.initialSpawn) return;
        const player = ev.player;
        if (player.hasTag(GUIDE_TAG)) return;
        player.addTag(GUIDE_TAG);
        system.runTimeout(() => {
            const inv = player.getComponent("minecraft:inventory");
            inv?.container?.addItem(new ItemStack("clingy_cats:guide_book", 1));
        }, 60);
    });
}

export function showGuide(player: Player): void {
    new ActionFormData()
        .title("§6§l◆ Field Notes ◆§r")
        .body("§7These are notes I've kept\n§7while learning the cats.")
        .button("§e§lOn Taming", ICON_TABBY)
        .button("§d§lKinds I've Met", ICON_CALICO)
        .button("§b§lHow They Live", ICON_OCELOT)
        .button("§a§lWhere I Found Them", ICON_RAGDOLL)
        .button("§6§lOn Kittens", ICON_PERSIAN)
        .button("§3§lThe Meownifier", ICON_MEOW)
        .button("§9§lSigns They Leave", ICON_GUIDE)
        .button("§8§l... Loose Pages ...")
        .button("§7Close the book")
        .show(player)
        .then((res) => {
            if (res.canceled || res.selection === 8) return;
            const pages = [
                pageTaming,
                pagePersonalities,
                pageTraits,
                pageBreeds,
                pageBreeding,
                pageMeownifier,
                pageMoodSignals,
                pageSecrets,
            ];
            pages[res.selection!]?.(player);
        });
}

// ─── helpers ────────────────────────────────────────────────────────────────

interface Block {
    kind: "header" | "label" | "divider";
    text?: string;
}
function H(text: string): Block { return { kind: "header", text }; }
function L(text: string): Block { return { kind: "label", text }; }
function D(): Block             { return { kind: "divider" }; }

function buildPage(player: Player, title: string, intro: string, blocks: Block[]): void {
    const form = new ActionFormData().title(title).body(intro);
    for (const b of blocks) {
        if (b.kind === "header") form.header(b.text!);
        else if (b.kind === "label") form.label(b.text!);
        else form.divider();
    }
    form.button("§7< Back").button("§8Close")
        .show(player)
        .then((res) => {
            if (!res.canceled && res.selection === 0) showGuide(player);
        });
}

// ─── pages ──────────────────────────────────────────────────────────────────

function pageTaming(player: Player): void {
    buildPage(player, "§e§lOn Taming§r",
        "§fIt took me a while to learn that not every cat wants the same thing. Some run off if you crowd them. Some won't even glance at food.",
        [
            H("§eThings I've tried that worked§r"),
            L("§7Crouching nearby and just waiting."),
            L("§7Holding out their favorite — you can"),
            L("§7see which one by their face."),
            L("§7Reaching slowly with an empty hand."),
            D(),
            H("§eWhat I had to unlearn§r"),
            L("§7It's never a coin flip. Each cat"),
            L("§7keeps its own quiet count."),
            L("§7Some I tried for weeks. Petting did"),
            L("§7nothing — they only wanted food."),
            L("§7Others followed me home after one"),
            L("§7slow afternoon."),
            D(),
            H("§eHeads-up§r"),
            L("§7If a cat warms up to you, it's yours."),
            L("§7Friends who try to feed it get hissed at."),
        ]);
}

function pagePersonalities(player: Player): void {
    buildPage(player, "§d§lKinds I've Met§r",
        "§fEvery cat is its own creature, but I've started to notice kinds.",
        [
            H("§dAffectionate§r"),
            L("§7Watches you. Will leave a warm spot"),
            L("§7to sleep next to a cold one, if you're in it."),
            D(),
            H("§dAloof§r"),
            L("§7Sits with its back to you. It's not"),
            L("§7personal — they're like that with everyone."),
            D(),
            H("§dPlayful§r"),
            L("§7Comes close just to look. Pounces"),
            L("§7on string like it owes them money."),
            D(),
            H("§dCalm§r"),
            L("§7Doesn't startle. Lightning, water,"),
            L("§7dogs barking — nothing fazes them."),
            D(),
            H("§dAnxious§r"),
            L("§7Flees anything that isn't sneaking."),
            L("§7Make yourself small."),
            D(),
            H("§dConfident§r"),
            L("§7Stares from across the room. Owns"),
            L("§7the place. Easy if you feed them right."),
        ]);
}

function pageTraits(player: Player): void {
    buildPage(player, "§b§lHow They Live§r",
        "§fPersonality is who they are. Traits are how they spend their days. Different thing.",
        [
            H("§bThe homebodies§r"),
            L("§7Some cats sit for hours. Long naps,"),
            L("§7slow stretches. Nothing much pulls them out."),
            D(),
            H("§bThe wanderers§r"),
            L("§7Others can't sit still. Always pacing,"),
            L("§7always somewhere just past the door."),
            D(),
            H("§bThe nosy ones§r"),
            L("§7Some come up to investigate everything."),
            L("§7Sit quietly near one and they notice you."),
            D(),
            H("§bThe skittish ones§r"),
            L("§7Big personal-space bubble. Sneak"),
            L("§7or they're gone."),
            D(),
            H("§bThe loose followers§r"),
            L("§7Tame, but on their own schedule."),
            L("§7They'll come back. Eventually."),
        ]);
}

function pageBreeds(player: Player): void {
    buildPage(player, "§a§lWhere I Found Them§r",
        "§fTwelve coats, twelve homes. I've found them all eventually. The same breed can look different depending where you stand.",
        [
            H("§aThe common ones§r"),
            L("§7Tabby — forest, birch forest"),
            L("§7Black — plains, sunflower plains"),
            L("§7Siamese — savanna"),
            L("§7Red — desert, badlands"),
            L("§7British — taiga (not mega)"),
            L("§7All Black — dark oak, swamp"),
            L("§7Calico — cherry, meadow, flower forest"),
            D(),
            H("§6Harder to find§r"),
            L("§7Ragdoll — snowy slopes, grove"),
            L("§7Persian — high peaks only"),
            L("§7Jellie — mangrove, mushroom island"),
            L("§7Ocelot — deep jungle, not the edges"),
            D(),
            H("§5The strange one§r"),
            L("§7White — pale garden, ice spikes."),
            L("§7Sphinx pattern, no hair. Spawns"),
            L("§7alone in the strangest places."),
        ]);
}

function pageBreeding(player: Player): void {
    buildPage(player, "§6§lOn Kittens§r",
        "§fTwo of mine, both content, both fed what they love — there will be a kitten. Doesn't matter if they match.",
        [
            H("§6Whose kitten is it§r"),
            L("§7Mostly it looks like one of them."),
            L("§7Now and then, neither. Something"),
            L("§7older pulls through."),
            D(),
            H("§6What they keep§r"),
            L("§7Coat patterns and colors usually carry."),
            L("§7Tail, ear shape, face — almost always."),
            L("§7Eye color, almost always. Shape drifts."),
            L("§7Size mostly carries. Sometimes a runt"),
            L("§7or a giant turns up."),
            D(),
            H("§6Rare§r"),
            L("§7Now and then a kitten has mismatched"),
            L("§7eyes. They tell me that's lucky."),
            D(),
            H("§6Growing up§r"),
            L("§7A huge cat starts small. Fills out slowly."),
        ]);
}

function pageMeownifier(player: Player): void {
    buildPage(player, "§3§lThe Meownifier§r",
        "§fA pocket telescope for the things a cat won't say. Aim at any cat within a few houses' distance and click. They don't notice.",
        [
            H("§3How to build one§r"),
            L("§f  §7. §eG §7."),
            L("§f  §eG §cE §eG     §eG§f Gold · §cE§f Eye of Ender"),
            L("§f  §7. §bA §7.     §bA§f Amethyst"),
            D(),
            H("§3What it tells me§r"),
            L("§7Breed. Who they love best."),
            L("§7What they like to eat, where they sit."),
            L("§7Their state, their feelings, the numbers."),
            D(),
            H("§3Keeping it sharp§r"),
            L("§7Sixty-some uses before it dulls."),
            L("§7Amethyst or gold sharpens it on an anvil."),
            L("§7Mending keeps it forever."),
        ]);
}

function pageMoodSignals(player: Player): void {
    buildPage(player, "§9§lSigns They Leave§r",
        "§fCats don't make faces. They make signs. I've started to notice them in the air around them.",
        [
            H("§9What I've seen§r"),
            L("§c♥§7 hearts — they love it here. Usually me."),
            L("§agreen sparkles§7 — content. The most common."),
            L("§ewhite puff§7 — startled. I crowded them."),
            L("§bsoft glow§7 — curious. They're watching."),
            L("§5dark wisp§7 — deep peace. Always sleeping."),
            L("§9blue mist§7 — they don't trust me. Something hurt them."),
            D(),
            H("§9What I haven't figured out§r"),
            L("§7Some cats show nothing at all."),
            L("§7Aloof ones, mostly. That seems to be"),
            L("§7its own kind of mood."),
            L("§7The signs come when they decide"),
            L("§7what to do next. Not all the time."),
        ]);
}

function pageSecrets(player: Player): void {
    buildPage(player, "§8§l... Loose Pages ...§r",
        "§8Some things I've written down only once.",
        [
            H("§8On the moon§r"),
            L("§8Watch the sky. The moon keeps old promises."),
            L("§8Pale coats and mismatched eyes walk at night"),
            L("§8when the world is brightest dark."),
            D(),
            H("§8On death§r"),
            L("§8A cat that has witnessed death"),
            L("§8and carries a golden ward..."),
            L("§8may never witness it again."),
            D(),
            H("§8On the telescope§r"),
            L("§8It reveals what the eye cannot see."),
            L("§8Look closely at the numbers."),
            D(),
            L("§8§o— that is all that will be said here."),
        ]);
}
