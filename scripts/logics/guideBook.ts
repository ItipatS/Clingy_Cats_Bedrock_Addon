import { ItemStack, Player, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

const GUIDE_TAG = "clingy_cats:welcomed";

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
        .title("§6§l◆ Clingy Cats Guide ◆§r")
        .body(
            `§fA complete guide to living with Clingy Cats.\n` +
            `§7Choose a topic below.`
        )
        .button("§eTaming Cats")
        .button("§dPersonalities")
        .button("§bTraits")
        .button("§aBreeds")
        .button("§6Breeding & Genetics")
        .button("§3Meownifier")
        .button("§8Secrets...")
        .button("§7Close")
        .show(player)
        .then((res) => {
            if (res.canceled || res.selection === 7) return;
            const pages = [pageTaming, pagePersonalities, pageTraits, pageBreeds, pageBreeding, pageMeownifier, pageSecrets];
            pages[res.selection!]?.(player);
        });
}

function subPage(player: Player, title: string, body: string): void {
    new ActionFormData()
        .title(title)
        .body(body)
        .button("§7< Back")
        .button("§8Close")
        .show(player)
        .then((res) => {
            if (!res.canceled && res.selection === 0) showGuide(player);
        });
}

function pageTaming(player: Player): void {
    subPage(player, "§e§lTaming Cats§r", [
        `§7Where to find them§r`,
        `§fCats spawn in plains, forests, taiga,`,
        `§fand savannas. They no longer live in villages.`,
        `§fRarer than vanilla — explore patiently.`,
        ``,
        `§7How to tame§r`,
        `§fHold any food and right-click to offer it.`,
        `§fEach cat has a §efavorite food§f — offering it`,
        `§fgives §a30%§f tame chance per attempt.`,
        `§fAny other food still works at §a10%§f chance.`,
        `§fIt may take several tries. Keep trying.`,
        ``,
        `§7Foods cats accept§r`,
        `§fcod · salmon · tropical fish · rabbit`,
        `§fchicken · beef · porkchop`,
        `§fcarrot · spider eye`,
        ``,
        `§7Tips§r`,
        `§fSneak while approaching — §eshy§f and §danxious§f`,
        `§fpersonalities flee from non-sneaking players.`,
        `§fUse the §3Meownifier§f to check favorite food`,
        `§fbefore spending your stock.`,
    ].join("\n"));
}

function pagePersonalities(player: Player): void {
    subPage(player, "§d§lPersonalities§r", [
        `§fPersonality shapes how a cat behaves —`,
        `§fhow it moves, rests, and reacts to you.`,
        `§fIt does §enot§f change taming chance.`,
        ``,
        `§d§lAffectionate§r`,
        `§fFollows owner closely. Looks at player often.`,
        `§fWill sleep near owner. Very attached.`,
        ``,
        `§d§lAloof§r`,
        `§fRarely looks at players. Stays to itself.`,
        `§fSits and sleeps a lot. Independent feel.`,
        ``,
        `§d§lPlayful§r`,
        `§fLooks at players frequently. Plays with`,
        `§fnearby cats often. Active and expressive.`,
        ``,
        `§d§lCalm§r`,
        `§fPanics less — only flees extreme threats.`,
        `§fSteady and unbothered. Easy to be around.`,
        ``,
        `§d§lAnxious§r`,
        `§fFlees non-sneaking non-owners on sight.`,
        `§fPanics from almost anything. Sneak always.`,
        ``,
        `§d§lConfident§r`,
        `§fNever flees from players or mobs.`,
        `§fApproaches boldly. Looks at players often.`,
    ].join("\n"));
}

function pageTraits(player: Player): void {
    subPage(player, "§b§lBehavior Traits§r", [
        `§fTraits control day-to-day behavior —`,
        `§fdifferent from personality which affects taming.`,
        ``,
        `§b§lLazy§r`,
        `§fSits more, roams less. Long idle timers.`,
        `§fPerfect lap cat.`,
        ``,
        `§b§lActive§r`,
        `§fRoams far, plays often, hunts more.`,
        `§fNeeds space and stimulation.`,
        ``,
        `§b§lCurious§r`,
        `§fApproaches players and mobs to investigate.`,
        `§fExplores new blocks and areas.`,
        ``,
        `§b§lShy§r`,
        `§fLarge flee radius around players.`,
        `§fFlees fast — sneak approach recommended.`,
        ``,
        `§b§lFriendly§r`,
        `§fSmall flee radius. Approaches players sooner.`,
        `§fEasier to find in the open.`,
        ``,
        `§b§lIndependent§r`,
        `§fLoose follower when tamed. Does its own thing.`,
        `§fNot ideal for tight companion roles.`,
    ].join("\n"));
}

function pageBreeds(player: Player): void {
    subPage(player, "§a§lBreeds§r", [
        `§a§lRagdoll§r §7— Largest breed. Fluffy pointed coat.`,
        `§fGentle giants. Spawns large to huge.`,
        ``,
        `§a§lSiamese§r §7— Always pointed + cream. Slender`,
        `§fbuild. Elegant and recognizable.`,
        ``,
        `§a§lPersian§r §7— Fluffy, flat face, round head.`,
        `§fTends toward larger sizes. Regal look.`,
        ``,
        `§a§lBritish§r §7— Stocky with round head, short snout.`,
        `§fFavors larger builds. Dense coat variety.`,
        ``,
        `§a§lWhite§r §7— Unique sphinx pattern, no hair.`,
        `§fSmall build. Striking and unusual.`,
        ``,
        `§a§lOcelot§r §7— Smallest breed. Wild-looking spots.`,
        `§fOnly 1 texture. Rare and elusive.`,
        ``,
        `§a§lTabby§r §7— Classic tabby orange. Medium build.`,
        `§fHair and tail vary. Common and friendly.`,
        ``,
        `§a§lAll Black§r §7— Solid coat, gray and brown variants.`,
        `§fBobtail common. Mysterious look.`,
        ``,
        `§a§lBlack§r §7— Tuxedo and bicolor patterns.`,
        `§fBlack and white contrast. Very charming.`,
        ``,
        `§a§lCalico§r §7— Multi-color patches. Each one unique.`,
        `§fWide visual variety.`,
        ``,
        `§a§lJellie§r §7— Special patterned textures.`,
        `§fDistinctive and collectible.`,
        ``,
        `§a§lRed§r §7— Always tabby orange. Hair and tail vary.`,
        `§fMany texture options. Vibrant and warm.`,
    ].join("\n"));
}

function pageBreeding(player: Player): void {
    subPage(player, "§6§lBreeding & Genetics§r", [
        `§fTwo §dtamed§f cats of §eany breed§f can breed`,
        `§fwhen fed their favorite food near each other.`,
        `§fBreed does not need to match.`,
        ``,
        `§7Baby breed§r`,
        `§a45%§f chance: mother's breed`,
        `§a45%§f chance: father's breed`,
        `§a10%§f chance: surprise — a §emutation§f breed`,
        `§7that shares traits with both parents.`,
        ``,
        `§7Inheritance§r`,
        `§fKittens inherit appearance from both parents`,
        `§fwith drift — they won't be identical copies.`,
        ``,
        `§6Pattern & Color    §a85% §7inherit · 15% random`,
        `§6Hair & Tail        §a80–95% §7inherit`,
        `§6Eye Color          §a90% §7inherit`,
        `§6Eye Shape          §a85% §7inherit ±1 step`,
        `§6Size               §a85% §7inherit ±1 tier`,
        ``,
        `§7Special chances§r`,
        `§a1%§f chance of §bheterochromia§f eyes`,
        `§7(mismatched colors) on any born kitten.`,
        ``,
        `§7Baby growth§r`,
        `§fKittens grow into adults over time.`,
        `§fSize tier is inherited — babies show a`,
        `§fsmaller version that scales up as they grow.`,
    ].join("\n"));
}

function pageMeownifier(player: Player): void {
    subPage(player, "§3§lMeownifier§r", [
        `§fThe Meownifier is your cat inspection tool.`,
        `§fAim at any cat within §e20 blocks§f and use it`,
        `§fto reveal everything about them.`,
        ``,
        `§7Crafting§r`,
        `§f  §7. §eG §7.`,
        `§f  §eG §cE §eG     §eG§f = Gold Ingot`,
        `§f  §7. §bA §7.     §cE§f = Eye of Ender`,
        `§f               §bA§f = Amethyst Shard`,
        ``,
        `§7What it shows§r`,
        `§fBreed · Life stage · Tame status`,
        `§fPersonality · Trait · Favorite food`,
        `§fFavorite block · Size · Current state`,
        `§fAffection & trust levels`,
        `§fEyes · Coat · Tail · Snout · Head`,
        ``,
        `§7Durability§r`,
        `§f64 uses. Repair with §bamethyst shards§f`,
        `§for §egold ingots§f on an anvil.`,
        `§fEnchant with §aMending§f to keep it forever.`,
    ].join("\n"));
}

function pageSecrets(player: Player): void {
    subPage(player, "§8§l... Secrets ...§r", [
        `§8Some things are not written in any guide.`,
        ``,
        `§8Watch the sky. The moon keeps old promises.`,
        `§8Pale coats and mismatched eyes walk at night`,
        `§8when the world is brightest dark.`,
        ``,
        `§8A cat that has witnessed death`,
        `§8and carries a golden ward§8...`,
        `§8may never witness it again.`,
        ``,
        `§8The Meownifier reveals what the eye cannot see.`,
        `§8Look closely at the numbers.`,
        ``,
        `§8§o— that is all that will be said here.`,
    ].join("\n"));
}
