# Clingy Cats

A Minecraft **Bedrock Edition** add-on that replaces vanilla cats with twelve breeds that actually behave like cats.

Every cat has a personality, remembers who fed it, and shows how it feels — ears, tail, eyes and all. Taming is not a dice roll you grind; it is a short courtship that depends on which cat you found.

---

## What it does

**Twelve breeds, each with its own territory.** Tabby in forests, black on plains, British in taiga, red in deserts and badlands, all-black in dark woods and swamps, Siamese on savanna, ocelot deep in jungles, calico in cherry groves and meadows, Persian on high peaks, ragdoll on snowy slopes, jellie in mangroves, white in pale gardens and ice spikes. Villages and witch huts get breeds too, matched to where they generate.

**Cats have personalities.** Affectionate, aloof, playful, calm, anxious, confident — plus a separate behaviour trait (lazy, active, curious, shy, friendly, independent) that decides how they spend their day. An affectionate cat warms to you in a couple of interactions. An anxious one will not let you pet it at all; food is your only way in.

**Taming rewards attention, not repetition.** Each cat carries a hidden bag with a single "yes" in it. Every genuine interaction draws from that bag, so the odds visibly improve as you keep trying, and the last draw is a certainty. Feeding a cat its actual favourite food counts double.

**Bonding continues after taming.** Affection and trust are real numbers that shift how the cat behaves — a strongly bonded cat follows you, settles near you, and sleeps more. Hurt one and its trust drops; feed it the wrong thing and it hisses and backs off. Trust recovers on its own if you leave it alone.

**Body language.** Cats have no facial expressions in Minecraft, so this adds them: ears tilt forward when curious and flatten when angry, tails lift when content and lash when annoyed, eyes blink — and slow-blink at you when a cat is happy and settled, which is what real cats do.

**Genetics.** Breed two cats and the kitten inherits coat pattern, colour, fur length, tail, ear and face shape, eye colour and size from both parents, with occasional mutations and rare heterochromia. Roughly 185 hand-made coat textures across the twelve breeds.

**Two items.**
- **Meownifier** — point it at any cat to read its personality, favourite food, favourite napping spot, bond level and full appearance.
- **Field Notes** — an in-world journal, given to you the first time you join, written as the observations of someone who has been watching these cats for a while.

Plus shoulder riding, full-moon oddities, and cats that will sit on the warm block you were about to use.

---

## Installing

Download the `.mcaddon` and open it — Minecraft imports both packs. Enable **Clingy Cats BP** and **Clingy Cats RP** on your world.

Requires Minecraft Bedrock **1.26.10** or newer. No experimental toggles needed.

---

## Building from source

```bash
npm install
npm run local-deploy
```

`local-deploy` compiles the TypeScript, bundles it, and copies both packs into your local `com.mojang` development folders. Fully exit and re-enter the world afterwards — Minecraft caches packs on load.

```bash
npm run mcaddon      # package a release into dist/packages/
npm run lint
```

Repository layout, architecture notes and the reasoning behind the odd bits live in [`CLAUDE.md`](CLAUDE.md). Open work is tracked in [`TODO.md`](TODO.md).

---

## Status

In development. The core loop — find, tame, feed, pet, breed, bond — works. Numbers throughout are tuned by play rather than theory, so expect them to move.

Bug reports welcome, especially anything about a cat behaving in a way a cat would not.
