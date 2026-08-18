import { ItemStack, Player, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { C } from "../ui/palette";

const GUIDE_TAG = "clingy_cats:welcomed";

// Custom pack textures require the ".png" suffix on form button icons — only
// vanilla texture paths may omit it. These previously had no suffix, which is
// why the icons never appeared.
const ICON_GUIDE   = "textures/items/guidebook.png";
const ICON_MEOW    = "textures/items/meownifier.png";
const ICON_TABBY   = "textures/items/spawn_eggs/tabby_spawn_egg.png";
const ICON_PERSIAN = "textures/items/spawn_eggs/persian_spawn_egg.png";
const ICON_OCELOT  = "textures/items/spawn_eggs/ocelot_spawn_egg.png";
const ICON_CALICO  = "textures/items/spawn_eggs/calico_spawn_egg.png";
const ICON_RAGDOLL = "textures/items/spawn_eggs/ragdoll_spawn_egg.png";

// Per-page accent, so each page keeps its own identity. Material codes only —
// the classic §e/§a/§b set reads as terminal colour.
const A_TAME    = C.gold;
const A_KINDS   = C.amethyst;
const A_LIVE    = C.diamond;
const A_FOUND   = "§q"; // material_emerald — dark, headers only, never body text
const A_KITTEN  = C.copper;
const A_LENS    = C.muted;
const A_SIGNS   = "§m"; // material_redstone (NOT strikethrough — that is Java)
const A_LOOSE   = C.dim;

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
        .title(`${C.gold}${C.bold}Field Notes`)
        .body(`${C.muted}${C.italic}These are notes I've kept while learning the cats.`)
        .button(`${A_TAME}${C.bold}On Taming`, ICON_TABBY)
        .button(`${A_KINDS}${C.bold}Kinds I've Met`, ICON_CALICO)
        .button(`${A_LIVE}${C.bold}How They Live`, ICON_OCELOT)
        .button(`${A_FOUND}${C.bold}Where I Found Them`, ICON_RAGDOLL)
        .button(`${A_KITTEN}${C.bold}On Kittens`, ICON_PERSIAN)
        .button(`${A_LENS}${C.bold}The Meownifier`, ICON_MEOW)
        .button(`${A_SIGNS}${C.bold}Signs They Leave`, ICON_GUIDE)
        .button(`${A_LOOSE}${C.bold}... Loose Pages ...`)
        .button(`${C.muted}Close the book`)
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
        })
        .catch(() => { /* player left or closed the client */ });
}

// ─── helpers ────────────────────────────────────────────────────────────────

interface Block {
    kind: "header" | "label" | "divider";
    text?: string;
}
function H(text: string): Block { return { kind: "header", text }; }
function L(text: string): Block { return { kind: "label", text }; }
function D(): Block             { return { kind: "divider" }; }

// Labels wrap on their own. Never hand-break a line: a break that looks right
// on one screen width is wrong on every other one.
function buildPage(player: Player, title: string, intro: string, blocks: Block[]): void {
    const form = new ActionFormData().title(title).body(intro);
    for (const b of blocks) {
        if (b.kind === "header") form.header(b.text!);
        else if (b.kind === "label") form.label(b.text!);
        else form.divider();
    }
    form.button(`${C.muted}< Back`).button(`${C.dim}Close`)
        .show(player)
        .then((res) => {
            if (!res.canceled && res.selection === 0) showGuide(player);
        })
        .catch(() => { /* player left or closed the client */ });
}

// ─── pages ──────────────────────────────────────────────────────────────────

function pageTaming(player: Player): void {
    buildPage(player, `${A_TAME}${C.bold}On Taming`,
        `${C.paper}It took me a while to learn that not every cat wants the same thing. Some run off if you crowd them. Some won't even glance at food.`,
        [
            H(`${A_TAME}Things I've tried that worked`),
            L(`${C.muted}Crouching nearby and just waiting.`),
            L(`${C.muted}Holding out their favorite — you can see which one by their face.`),
            L(`${C.muted}Reaching slowly with an empty hand.`),
            D(),
            H(`${A_TAME}What I had to unlearn`),
            L(`${C.muted}It's never a coin flip. Each cat keeps its own quiet count.`),
            L(`${C.muted}Some I tried for weeks. Petting did nothing — they only wanted food.`),
            L(`${C.muted}Others followed me home after one slow afternoon.`),
            D(),
            H(`${A_TAME}Heads-up`),
            L(`${C.muted}If a cat warms up to you, it's yours. Friends who try to feed it get hissed at.`),
        ]);
}

function pagePersonalities(player: Player): void {
    buildPage(player, `${A_KINDS}${C.bold}Kinds I've Met`,
        `${C.paper}Every cat is its own creature, but I've started to notice kinds.`,
        [
            H(`${A_KINDS}Affectionate`),
            L(`${C.muted}Watches you. Will leave a warm spot to sleep next to a cold one, if you're in it.`),
            D(),
            H(`${A_KINDS}Aloof`),
            L(`${C.muted}Sits with its back to you. It's not personal — they're like that with everyone.`),
            D(),
            H(`${A_KINDS}Playful`),
            L(`${C.muted}Comes close just to look. Pounces on string like it owes them money.`),
            D(),
            H(`${A_KINDS}Calm`),
            L(`${C.muted}Doesn't startle. Lightning, water, dogs barking — nothing fazes them.`),
            D(),
            H(`${A_KINDS}Anxious`),
            L(`${C.muted}Flees anything that isn't sneaking. Make yourself small.`),
            D(),
            H(`${A_KINDS}Confident`),
            L(`${C.muted}Stares from across the room. Owns the place. Easy if you feed them right.`),
        ]);
}

function pageTraits(player: Player): void {
    buildPage(player, `${A_LIVE}${C.bold}How They Live`,
        `${C.paper}Personality is who they are. Traits are how they spend their days. Different thing.`,
        [
            H(`${A_LIVE}The homebodies`),
            L(`${C.muted}Some cats sit for hours. Long naps, slow stretches. Nothing much pulls them out.`),
            D(),
            H(`${A_LIVE}The wanderers`),
            L(`${C.muted}Others can't sit still. Always pacing, always somewhere just past the door.`),
            D(),
            H(`${A_LIVE}The nosy ones`),
            L(`${C.muted}Some come up to investigate everything. Sit quietly near one and they notice you.`),
            D(),
            H(`${A_LIVE}The skittish ones`),
            L(`${C.muted}Big personal-space bubble. Sneak or they're gone.`),
            D(),
            H(`${A_LIVE}The loose followers`),
            L(`${C.muted}Tame, but on their own schedule. They'll come back. Eventually.`),
        ]);
}

function pageBreeds(player: Player): void {
    buildPage(player, `${A_FOUND}${C.bold}Where I Found Them`,
        `${C.paper}Twelve coats, twelve homes. I've found them all eventually. The same breed can look different depending where you stand.`,
        [
            H(`${A_FOUND}The common ones`),
            L(`${C.muted}Tabby — forest, birch forest`),
            L(`${C.muted}Black — plains, sunflower plains`),
            L(`${C.muted}Siamese — savanna`),
            L(`${C.muted}Red — desert, badlands`),
            L(`${C.muted}British — taiga (not mega)`),
            L(`${C.muted}All Black — dark oak, swamp`),
            L(`${C.muted}Calico — cherry, meadow, flower forest`),
            D(),
            H(`${C.copper}Harder to find`),
            L(`${C.muted}Ragdoll — snowy slopes, grove`),
            L(`${C.muted}Persian — high peaks only`),
            L(`${C.muted}Jellie — mangrove, mushroom island`),
            L(`${C.muted}Ocelot — deep jungle, not the edges`),
            D(),
            H(`${C.amethyst}The strange one`),
            L(`${C.muted}White — pale garden, ice spikes. Sphinx pattern, no hair. Spawns alone in the strangest places.`),
        ]);
}

function pageBreeding(player: Player): void {
    buildPage(player, `${A_KITTEN}${C.bold}On Kittens`,
        `${C.paper}Two of mine, both content, both fed what they love — there will be a kitten. Doesn't matter if they match.`,
        [
            H(`${A_KITTEN}Whose kitten is it`),
            L(`${C.muted}Mostly it looks like one of them. Now and then, neither. Something older pulls through.`),
            D(),
            H(`${A_KITTEN}What they keep`),
            L(`${C.muted}Coat patterns and colors usually carry.`),
            L(`${C.muted}Tail, ear shape, face — almost always.`),
            L(`${C.muted}Eye color, almost always. Shape drifts.`),
            L(`${C.muted}Size mostly carries. Sometimes a runt or a giant turns up.`),
            D(),
            H(`${A_KITTEN}Rare`),
            L(`${C.muted}Now and then a kitten has mismatched eyes. They tell me that's lucky.`),
            D(),
            H(`${A_KITTEN}Growing up`),
            L(`${C.muted}A huge cat starts small. Fills out slowly.`),
        ]);
}

function pageMeownifier(player: Player): void {
    buildPage(player, `${A_LENS}${C.bold}The Meownifier`,
        `${C.paper}A pocket telescope for the things a cat won't say. Aim at any cat within a few houses' distance and click. They don't notice.`,
        [
            H(`${A_LENS}How to build one`),
            L(`${C.muted}An eye of ender at the centre.`),
            L(`${C.muted}Gold above it and to either side.`),
            L(`${C.muted}One amethyst shard below.`),
            D(),
            H(`${A_LENS}What it tells me`),
            L(`${C.muted}Breed. Who they love best. What they like to eat, where they sit.`),
            L(`${C.muted}Their state, their feelings, the numbers.`),
            D(),
            H(`${A_LENS}Keeping it sharp`),
            L(`${C.muted}Sixty-some uses before it dulls.`),
            L(`${C.muted}Amethyst or gold sharpens it on an anvil. Mending keeps it forever.`),
        ]);
}

function pageMoodSignals(player: Player): void {
    buildPage(player, `${A_SIGNS}${C.bold}Signs They Leave`,
        `${C.paper}Cats don't make faces. They make signs. I've started to notice them in the air around them.`,
        [
            H(`${A_SIGNS}What I've seen`),
            L(`${C.copper}Hearts ${C.muted}— they love it here. Usually me.`),
            L(`${C.paper}Green sparkles ${C.muted}— content. The most common.`),
            L(`${C.paper}White puff ${C.muted}— startled. I crowded them.`),
            L(`${C.diamond}Soft glow ${C.muted}— curious. They're watching.`),
            L(`${C.amethyst}Dark wisp ${C.muted}— deep peace. Always sleeping.`),
            L(`${C.diamond}Blue mist ${C.muted}— they don't trust me. Something hurt them.`),
            D(),
            H(`${A_SIGNS}What I haven't figured out`),
            L(`${C.muted}Some cats show nothing at all. Aloof ones, mostly. That seems to be its own kind of mood.`),
            L(`${C.muted}The signs come when they decide what to do next. Not all the time.`),
        ]);
}

function pageSecrets(player: Player): void {
    buildPage(player, `${A_LOOSE}${C.bold}... Loose Pages ...`,
        `${C.dim}Some things I've written down only once.`,
        [
            H(`${A_LOOSE}On the moon`),
            L(`${C.dim}Watch the sky. The moon keeps old promises. Pale coats and mismatched eyes walk at night when the world is brightest dark.`),
            D(),
            H(`${A_LOOSE}On death`),
            L(`${C.dim}A cat that has witnessed death and carries a golden ward... may never witness it again.`),
            D(),
            H(`${A_LOOSE}On the telescope`),
            L(`${C.dim}It reveals what the eye cannot see. Look closely at the numbers.`),
            D(),
            L(`${C.dim}${C.italic}— that is all that will be said here.`),
        ]);
}
