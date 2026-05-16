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
        .title("§6§l◆ Clingy Cats — Field Notes ◆§r")
        .body(
            `§fNotes on finding, befriending, and\n` +
            `§fliving with Clingy Cats.\n\n` +
            `§7Pick a topic to read.`
        )
        .button("§eTaming Cats")
        .button("§dPersonalities")
        .button("§bTraits")
        .button("§aBreeds")
        .button("§6Breeding & Genetics")
        .button("§3The Meownifier")
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
        `§fThese cats aren't village strays. They're`,
        `§fwild, rarer, and they won't just walk up`,
        `§fto you. Each breed has its own biome —`,
        `§fsee §aBreeds§f for where to look.`,
        ``,
        `§7How to tame§r`,
        `§fCrouch, hold food, and right-click to offer.`,
        `§fEvery cat has a §efavorite food§f — offer`,
        `§fthat and you get a §a45%§f chance per try.`,
        `§fOther foods still work, just at §a20%.§f`,
        `§fIt might take a few attempts. That's normal.`,
        ``,
        `§7Foods they'll accept§r`,
        `§fcod · salmon · tropical fish · rabbit`,
        `§fchicken · beef · porkchop`,
        `§fcarrot · spider eye`,
        ``,
        `§7Tips§r`,
        `§fSome personalities flee from non-sneaking`,
        `§fplayers — always crouch when approaching`,
        `§fa wild cat just to be safe.`,
        `§fUse the §3Meownifier§f to check a cat's`,
        `§ffavorite food before burning your supplies.`,
    ].join("\n"));
}

function pagePersonalities(player: Player): void {
    subPage(player, "§d§lPersonalities§r", [
        `§fPersonality is set at birth and affects`,
        `§fhow a cat behaves — not taming odds.`,
        ``,
        `§d§lAffectionate§r`,
        `§fWatches you a lot. Seeks you out at`,
        `§fbedtime to sleep nearby. Very attached.`,
        ``,
        `§d§lAloof§r`,
        `§fRarely looks your way. Sits with its`,
        `§fback to you sometimes. It's just how`,
        `§fthey are — don't take it personally.`,
        ``,
        `§d§lPlayful§r`,
        `§fAlways paying attention. Approaches`,
        `§fplayers often just to look at them.`,
        ``,
        `§d§lCalm§r`,
        `§fHardly panics. Only lava and lightning`,
        `§freally bother it. Easy to be around.`,
        ``,
        `§d§lAnxious§r`,
        `§fFlees anyone who isn't sneaking, isn't`,
        `§fthe owner, and isn't another cat.`,
        `§fAlways sneak when approaching these.`,
        ``,
        `§d§lConfident§r`,
        `§fDoesn't flee from anything. Will stare`,
        `§fat you from across the room. Bold cat.`,
    ].join("\n"));
}

function pageTraits(player: Player): void {
    subPage(player, "§b§lBehavior Traits§r", [
        `§fTraits govern day-to-day habits —`,
        `§fdifferent from personality.`,
        ``,
        `§b§lLazy§r`,
        `§fSits a lot, roams rarely. Long gaps`,
        `§fbetween activity. Great homebody.`,
        ``,
        `§b§lActive§r`,
        `§fRoams far, hunts often. Needs space`,
        `§fand something to do.`,
        ``,
        `§b§lCurious§r`,
        `§fApproaches players and mobs to`,
        `§finvestigate. Gets into things.`,
        ``,
        `§b§lShy§r`,
        `§fBig personal-space bubble, flees fast.`,
        `§fAlways crouch when getting close.`,
        ``,
        `§b§lFriendly§r`,
        `§fRelaxed around players. Small flee`,
        `§fradius. Usually easy to approach.`,
        ``,
        `§b§lIndependent§r`,
        `§fFollows when tamed, but loosely.`,
        `§fDoes its own thing. Respect that.`,
    ].join("\n"));
}

function pageBreeds(player: Player): void {
    subPage(player, "§a§lBreeds§r", [
        `§fTwelve breeds, each with its own home`,
        `§fbiome. Coat colors shift by region too —`,
        `§fthe same breed can look quite different`,
        `§fdepending on where you find it.`,
        ``,
        `§a§lTabby§r §7· Plains · Forest · Village`,
        `§fClassic tabby orange, hair and tail vary.`,
        `§fMost common breed.`,
        ``,
        `§a§lBlack§r §7· Plains · Forest · Taiga · Village`,
        `§fTuxedo and bicolor patterns.`,
        ``,
        `§a§lSiamese§r §7· Village · Desert · Savanna`,
        `§fAlways pointed cream. Very recognizable.`,
        ``,
        `§a§lRed§r §7· Savanna · Badlands · Desert`,
        `§fTabby orange, lots of texture variety.`,
        ``,
        `§a§lBritish§r §7· Taiga · Cold biomes`,
        `§fStocky, round head. Tends toward big.`,
        ``,
        `§a§lAll Black§r §7· Dark Oak Forest · Swamp`,
        `§fSolid coat, bobtail common.`,
        ``,
        `§a§lCalico§r §7· Cherry Grove · Sunflower Plains · Meadow`,
        `§fEvery one looks different. Rare.`,
        ``,
        `§a§lRagdoll§r §7· Mountain Peaks`,
        `§fLargest breed. Fluffy, pointed coat.`,
        `§fFound on snowy slopes and high ridges.`,
        ``,
        `§a§lPersian§r §7· Mountain Peaks`,
        `§fFlat face, round head. Prefers altitude.`,
        `§fFound on snowy slopes and frozen peaks.`,
        ``,
        `§a§lWhite§r §7· Snowy · Pale Garden §8(rare, spawns alone)`,
        `§fSphinx pattern, no hair. Unusual look.`,
        ``,
        `§a§lJellie§r §7· Swamp · Mushroom Island §8(rare)`,
        `§fSpecial patterned textures. Worth finding.`,
        ``,
        `§a§lOcelot§r §7· Jungle only §8(rare)`,
        `§fSmallest breed. Only one texture. Elusive.`,
    ].join("\n"));
}

function pageBreeding(player: Player): void {
    subPage(player, "§6§lBreeding & Genetics§r", [
        `§fTwo tamed cats fed their favorite food`,
        `§fnear each other will have a kitten.`,
        `§fBreed doesn't need to match.`,
        ``,
        `§7Baby breed§r`,
        `§a45%§f mother's breed`,
        `§a45%§f father's breed`,
        `§a10%§f neither — a §emutation§f breed`,
        ``,
        `§7Inherited traits§r`,
        `§fKittens take after both parents with`,
        `§fa little drift. Not identical copies.`,
        ``,
        `§6Pattern & Color   §a85% §7inherit`,
        `§6Tail · Snout · Head   §a95% §7inherit`,
        `§6Eye Color   §a90% §7inherit`,
        `§6Eye Shape   §a85% §7inherit ±1 step`,
        `§6Size   §a85% §7inherit ±1 tier`,
        ``,
        `§fAlso a §a1%§f chance of §bheterochromia§f —`,
        `§fone eye a different color. Very rare.`,
        ``,
        `§7Growth§r`,
        `§fKittens grow into their size tier over time.`,
        `§fA huge cat starts small and fills out slowly.`,
    ].join("\n"));
}

function pageMeownifier(player: Player): void {
    subPage(player, "§3§lThe Meownifier§r", [
        `§fA tool for reading everything about a cat`,
        `§fthat you can't see with the naked eye.`,
        `§fAim at any cat within §e20 blocks§f and use it.`,
        `§fWon't disturb them.`,
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
        `§f64 uses. Repair with §bamethyst§f or §egold§f`,
        `§fon an anvil. Enchant with §aMending§f`,
        `§fto make it last forever.`,
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
