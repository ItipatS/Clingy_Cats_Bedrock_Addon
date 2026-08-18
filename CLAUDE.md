# Clingy Cats — Project Reference

Last updated: 2026-08-13. Reflects `feature/hiss-wrongfood`, which is 3 commits ahead of `main` (`b9a56a2` expressive tame paths, `5db9d19` guidebook rewrite, `4f539ca` wrong-food + hiss) and **not yet merged**. `main` is still at `9f51ffe`, where the bond system described below does not exist.

**There is also a large body of uncommitted work in the tree** — the UI rebuild, the vanilla-cat swap, throw-feeding, and the body-language animation. See `TODO.md` for what is finished, what is half-rolled-out, and what is next.

## Project Identity

- **Developer:** Itipat — Unity/C++ → Bedrock addon dev, targeting Overtales (Thai Mojang Marketplace studio).
- **Project:** Clingy Cats — breed-specific cat behavior addon.
- **Build chain:** authored via Bridge v2.7.54 + Dash 0.11.7; BP/RP under `BP/` and `RP/`. Compiled JS lands in `dist/scripts/main.js` (sourcemap in `dist/debug/`).
- **Engine versions seen in files:**
  - `BP/manifest.json` → `min_engine_version: [1,26,10]`.
  - Breed BP entities use `"format_version": "1.26.20"` (`shoulder_anchor.json` is `1.26.10`). Items use `1.26.10`, recipes `1.17.41`, spawn_rules `1.8.0`, render_controllers `1.10.0`. The old-looking numbers on spawn_rules / render_controllers / animations are the canonical frozen values vanilla itself ships — leave them alone.
- **Head dev guidance:** BP/RP JSON first, Script only when BP genuinely cannot express it. Still the rule.

## Repo Layout

```
BP/
  manifest.json
  entities/
    cats/
      <breed>.json                   # per-breed entity (12 breeds + test_BP)
      shoulder_anchor.json           # invisible mount entity for shoulder riding
  spawn_rules/
    cat.json                         # vanilla cat spawn override — empty conditions, kills biome spawning
    clingy_cats.<breed>.json         # per-breed spawn rules (no spawn rule for `test`)
  items/
    meownifier.json                  # custom inspect item
    guide_book.json                  # custom guide item
  recipes/<item>.json
  loot_tables/
    empty.json
    entities/clingy_cat_gift.json    # cat-gift pool (string/feather/etc., emerald @ weight 1)
  functions/tick.json                # empty placeholder
  texts/languages.json

RP/
  entity/<breed>_RP.json             # client_entity per breed (12 breeds + test)
  models/entity/clingy_cat.geo.json  # 114-bone shared geometry (all breeds + all variants)
  animations/clingy_cats.animation.json
  animation_controllers/clingy_cats_cat.animation_contollers.json   # note: filename typo is load-bearing, leave it
  (render controllers, textures elsewhere in RP/)

scripts/                             # TypeScript source (compiled by Bridge/Dash → dist/scripts/main.js)
  main.ts
  configs/catsbreed.ts               # texture catalogs, pools, breed maps, types
  events/eventRegister.ts            # scriptevent → handler dispatch
  logics/
    appearance.ts                    # applyTextureData/eyes/whiskers, size assignment, full-moon overrides
    breed.ts                         # handleWildSpawn / handleSpawnTestCats (biome bias)
    genetics.ts                      # inheritTrait/inheritPattern/pickTexture/findMutationBreed
    vanillaCat.ts                    # swaps village/witch-hut minecraft:cat spawns to a breed
    throwFeed.ts                     # poll fallback for throw-feeding — DISABLED in main.ts
    bond.ts                          # affection/trust getters+setters, bonder lock, tame thresholds,
                                     #   bond loop (20-tick), pet/hurt/sleep/wrong-food handlers, hiss lockout
    interact.ts                      # handleGiveItem — feed path (bonder lock + affection bump + feed gate)
    inspect.ts                       # registerItemComponents (meownifier + guide_book), showCatForm
    pregnancy.ts                     # handleConception / handleGiveBirth
    personality.ts                   # assignRandomPersonality / assignBreedPersonality
    riding.ts                        # shoulder anchor management
    states.ts                        # behaviorTick (state machine) + bond reweighting + mood particles + restoreIdentity
    guideBook.ts                     # multi-page ActionFormData
    utils.ts                         # randomFrom, weightedRandom, findBothParents, distanceSq
  ui/
    palette.ts                       # material colour codes (§g–§v), NOT the ANSI-16 set
    symbols.ts                       # BMP star bars, SYM icons, pretty()
  debug/
    catdebug.ts                      # debug HUD on stick (DEBUG=false — do not ship it true)
    feedDebug.ts                     # throw-feed tracing, /scriptevent clingycats:debug_feed
```

## Breeds & Per-Breed Files

12 breeds: `all_black`, `black`, `british`, `calico`, `jellie`, `ocelot`, `persian`, `ragdoll`, `red`, `siamese`, `tabby`, `white`. Plus `test` (summon-only, no spawn rule). Texture counts: all_black 24, black 20, british 27, calico 16, jellie 24, ocelot 1, persian 8, ragdoll 5, red 28, siamese 6, tabby 22, white 4. Total ~185 textures.

**Each breed has its own ~2089-line BP file.** They share a common skeleton but **diverge intentionally per breed**: identifier, per-tier `minecraft:scale`/`scale_by_age` values, trait timer ranges, anchor timers, target lists, and behavior numbers are tuned per breed (e.g. ocelot is the smallest with shorter random_stroll intervals; ragdoll runs larger with longer rest timers; jellie/persian have their own pacing). When making cross-cutting changes, you must update every breed file but **never blindly homogenize them** — the numeric differences are design intent, not duplication.

**Test entity** uses `BREED_OFFSETS` to flatten every breed's catalog into one 0..~185 index space so a single entity can sample all textures.

## Property Set (current, per-breed entity)

All `client_sync: true` except where noted. ~24 properties used → ~8 slots left of the 32-property entity budget.

```
clingy_cats:sub_variant        int  [0,300]          # texture index (or flat index for test)
clingy_cats:sound_variant      enum default|royal
clingy_cats:state              enum idle|sitting|purring|sleeping|playing|hunting|grooming|fleeing|rubbing
clingy_cats:sub_state          int  [0,5]            # picks sleep/groom variants
clingy_cats:emotion            enum happy|sad|angry|scared|curious|playful
clingy_cats:behavior_trait     enum lazy|active|curious|shy|friendly|independent
clingy_cats:personality        enum affectionate|aloof|playful|calm|anxious|confident
clingy_cats:hairs              enum short|fluffy|none
clingy_cats:tail               enum normal|bobtail
clingy_cats:snout              enum normal|short
clingy_cats:head               enum round|flat
clingy_cats:whiskers           enum short_white|short_black|medium_white|medium_black|long_white|long_black
clingy_cats:eye_shape          enum almond|narrow|round
clingy_cats:eye_color          enum emerald|green|yellow|orange|teal|blue|gray|brown|heterochromia1|heterochromia2|heterochromia3
clingy_cats:color              enum black|white|gray|brown|orange|chocolate|cream
clingy_cats:pattern            enum solid|tabby|tuxedo|bicolor|calico|tortoiseshell|pointed|sphinx
clingy_cats:favorite_food      enum porkchop|beef|spider_eye|carrot|cod|salmon|tropical_fish|rabbit|chicken|treat_fish|treat_meat|treat_fancy   (client_sync: false)
clingy_cats:favorite_block     enum bed|soft|warm|high|owner|sun                                                                                (client_sync: false)
clingy_cats:whisker_index      int  [0,5]
clingy_cats:eye_index          int  [0,33]           # shape_idx * len(eye_color) + color_idx
clingy_cats:affection_level    int  [0,1000]   # LIVE — see Bond System                                                                         (client_sync: false)
clingy_cats:trust_level        int  [0,1000]   # LIVE — rests at 500                                                                            (client_sync: false)
clingy_cats:frequency          int  [0,100]   default 50   # still a stub, nothing reads it                                                      (client_sync: false)
clingy_cats:equipment          enum (mirrors favorite_food, plus "none")                                                                        (client_sync: false)
clingy_cats:size               enum tiny|small|normal|large|huge                                                                                (client_sync: false)
clingy_cats:immortal           bool                                                                                                             (client_sync: false)
```

Enum values map to indices in render controllers — **array order in BP = array index in RP**. Don't reorder.

### Dynamic properties (script-side, not in the 32-property budget)

| Property | Owner | Purpose |
|---|---|---|
| `clingy_cats:last_temp_group` | cat | last `temp_*` group, removed on next `behaviorTick` |
| `clingy_cats:conception_data` | world | JSON `ConceptionRecord` crash-safety mirror |
| `clingy_cats:anchor_ids` | player | JSON list of live shoulder anchors (cap 2) |
| `clingy_cats:bonder_id` | cat | player id that claimed a wild cat; `""` once tamed |
| `clingy_cats:owner_id` | cat | owner mirrored at tame time — `tamedToPlayerId` is unreachable once the `wild` group goes |
| `clingy_cats:tame_bag` | cat | marbles left in the tame bag; `0` = drawn/tamed |
| `clingy_cats:hissing_until` | cat | tick the hiss lockout expires |
| `clingy_cats:last_sleep_bump` | cat | throttles the owner-sleeping affection bump to 1 per 10s |
| `clingy_cats:last_prox_draw` | cat | throttles the proximity tame draw to 1 per 5s |
| `clingy_cats:last_feed_tick` | cat | 10-tick re-entry gate on `handleGiveItem` |
| `clingy_cats:last_pickup_poke` | cat | throw-feed cooldown, matched to `delay_before_eating` |

## Texture / Appearance System

**TextureData**: `{ pattern, color, hairs, tail, snout, head }` — all six baked into the texture UV by the artist. Whiskers, eyes shape, eyes color are separate overlay models read via independent properties.

`scripts/configs/catsbreed.ts` holds:
- `BREED_TEXTURES` — `Record<breedTypeId, Record<localIdx, TextureData>>`
- `BREED_OFFSETS` — flat-index offsets used only by the `test` entity
- `TEST_TEXTURES` — derived flat catalog, registered as `BREED_TEXTURES["clingy_cats:test"]`
- `PATTERN_DRIFT` — per-pattern mutation pools, biased toward genetic plausibility (solid↔bicolor↔tuxedo, tabby↔tortoiseshell↔calico, pointed/sphinx stable)
- `BIOME_COLOR_BIAS` — biome-id → preferred color list (snowy → white/gray/cream, badlands → orange/brown, etc.)
- `BREED_SPAWN_POOLS` — per-breed weighted pools for `trait` / `personality` / `block` / `size`
- `EYE_COLORS` / `EYE_SHAPES` / `WHISKERS` — index-stable arrays (`eye_index = shapeIdx * EYE_COLORS.length + colorIdx`)

`scripts/logics/appearance.ts` provides `applyTextureData`, `applyEyesData`, `applyWhiskerData`. These set the integer index property **and** all the trait properties simultaneously so BP filters and RP render controllers agree.

## Genetics

`scripts/logics/genetics.ts`:
- `inheritTrait(a, b, rate, valid)` — 50/50 parent pick, then `rate` chance to keep, else random.
- `inheritPattern(...)` — uses `PATTERN_DRIFT` + a color gate (calico requires white base, tortoiseshell requires non-white) + fallback chain.
- `pickTexture(catalog, target)` — finds index matching target traits; relaxes color first, then hairs, then keeps only structural traits (pattern/tail/snout/head).
- `findMutationBreed(mom, dad)` — picks a third breed whose catalog shares at least one (pattern, color) pair with parents.
- `determineBabyBreed(mom, dad)` — **45% mom / 45% dad / 10% mutation breed**.

Drift rates (in `appearance.ts:assignInheritedAppearanceFromGenes`):
- color 0.85, pattern 0.85, hairs 0.80, tail 0.95, snout 0.95, head 0.95
- eye_color 0.90 exact, 0.09 random non-hetero, 0.01 heterochromia
- eye_shape 0.85 inherit ±1 step
- whiskers 0.90 inherit ±1 step
- size 0.85 inherit ±1 tier

## Size System

Five tiers: `tiny / small / normal / large / huge`. Each breed BP has its own absolute scale values for each tier and for the `baby_size_*` (`scale_by_age`) variants — e.g. ocelot huge ≈ 0.94, british huge = 1.13, ragdoll likely larger.

Pipeline:
- `assignRandomSize(cat)` uses `BREED_SPAWN_POOLS[breed].size` (weighted).
- `assignInheritedSize(baby, mom, dad)` 50/50 parent pick, ±1 tier 85%, full random 15%. **Always emits the baby variant** on birth.
- `applyAdultSize(cat)` is fired by the `clingycats:grow_up` scriptevent (queued from `clingy_cats:ageable_grow_up` BP event) and swaps to the adult `clingy_cats:size_<tier>` group.

Full moon override (`world.getMoonPhase() === 0`): 80% chance to swap to a pale (white/cream) sub_variant from the breed's catalog, force heterochromia eye color, force `size_huge`. Triggers from `handleWildSpawn`.

## Spawn & Birth Flow

### Wild spawn
1. BP `minecraft:entity_spawned` (per-breed):
   - 3:1 randomize adult/baby + add `clingy_cats:wild`.
   - Add `clingy_cats:on_weather_clear` + `clingy_cats:not_riding_player`.
   - Trigger `clingy_cats:randomize_sound_variant`.
   - `queue_command: scriptevent clingycats:catspawn`.
2. Script `clingycats:catspawn` → `handleWildSpawn(cat)`:
   - If `clingy_cats:not_wild_spawn` tag set (used by birth path) → strip tag and skip.
   - If `typeId === clingy_cats:test` → `handleSpawnTestCats` (random breed catalog × flat index).
   - Else → `assignRandomAppearance` (biome-biased), `assignRandomEyesAndWhiskers`, full-moon check or random size, `assignBreedPersonality` (sets behavior_trait, personality, favorite_food, favorite_block + fires `set_trait_*` and `set_personality_*` BP events to add the matching component group).
   - Then `behaviorTick(cat)` chooses first state.

### Birth flow (Script-driven litter)
1. BP `minecraft:behavior.breed` triggers `clingy_cats:become_pregnant` on partner contact.
2. `clingy_cats:become_pregnant` event:
   - Add `clingy_cats:pregnant` component group (`is_pregnant` + `lay_egg` behavior targeting beds/wool/carpets/etc.).
   - `scriptevent clingycats:conception` → `handleConception(mother)`:
     - Capture both parents' genes (nearest non-baby family member ≠ self).
     - Store as `ConceptionRecord` in both an in-memory `Map<motherId, record>` and a `dynamic_property("clingy_cats:conception_data")` (JSON) for crash safety.
     - Roll `babyCount` from `LITTER_WEIGHTS = [40,30,15,8,5,2]` (1–6 babies, most often 1–2).
3. `lay_egg` fires → BP `clingy_cats:give_birth` → `scriptevent clingycats:givebirth` → `handleGiveBirth(mother)`:
   - Load record from map or dynamic property.
   - Spawn `determineBabyBreed(...)` baby × **5 (hardcoded loop), not `babyCount` — see Known Issues**.
   - Tag baby `clingy_cats:not_wild_spawn` so the `entity_spawned` script handler skips random appearance.
   - Apply inherited appearance / eyes / whiskers / size, then `assignBreedPersonality`.
   - If a player is within 10 blocks, `tameable.tame(player)`.
   - Trigger `clingy_cats:born` BP event (swaps to baby + visible_baby + sleep state + correct wild/tamed group).

## Tame Flow

Wild cats have `tameable.probability = 0.0` and empty `tame_items` — **taming is entirely script-driven**.

### Marble bag (current model)

Taming is a **bounded draw, not a threshold and not a free dice roll**.

Each wild cat carries a bag holding **one tame marble among N**. Every deliberate interaction draws **without replacement**, so the odds visibly improve as the bag empties and the final draw is a certainty. Best case one interaction, worst case N.

Only the count is stored (`clingy_cats:tame_bag`). With one marble among `remaining`, the draw is exactly `random() < 1 / remaining`; at `remaining == 1` that is always true, which *is* the guarantee. No array to serialise.

| Personality | Bag size (worst case) | Avg interactions | With favourite food |
|---|---|---|---|
| affectionate | 2 | 1.5 | always 1 |
| playful | 3 | 2.0 | worst 2 |
| confident | 3 | 2.0 | worst 2 |
| calm | 4 | 2.5 | worst 2 |
| aloof | 5 | 3.0 | worst 3 |
| anxious | 6 | 3.5 | worst 3 |

**Favourite food draws twice.** This replaced a pure affection threshold (150–400) where an anxious cat needed ~80 neutral feeds — no variance, no sense of progress. Do not reintroduce a threshold, and do not replace this with an unbounded per-interaction chance: the point is that bad luck is *capped*.

### The three paths (all in `bond.ts` / `interact.ts`)

| Path | Trigger | Effect |
|---|---|---|
| **Feed** | sneak + food + interact → `on_give` chain → `clingycats:on_give_food` | `FEED_BUMPS[personality]` affection + **1 draw** (2 if favourite) |
| **Pet** | sneak + empty hand + interact on a **wild** cat → `clingycats:wild_pet` | `PET_BUMPS[personality]` + 2 trust + **1 draw** |
| **Proximity** | player sneaking within 8 blocks, cat is `behavior_trait=curious` OR `personality=affectionate` | +1 aff per 20-tick loop, **1 draw per 5s** (throttled — the loop is 20 ticks, so an unthrottled draw would empty a 2-marble bag in two seconds) |

| Personality | Pet aff | Feed aff (fav / neutral) |
|---|---|---|
| affectionate | +20 | +30 / +12 |
| playful | +12 | +25 / +10 |
| confident | +5 | +30 / +12 |
| calm | +3 | +25 / +10 |
| aloof | +1 | +20 / +8 |
| anxious | +0 | +15 / +5 |

**Anxious cats cannot be petted into taming at all.** `PET_BUMPS[anxious]` is 0, and `handleWildPet` skips the draw entirely when the bump is 0 — food is their only route. That asymmetry is design intent.

Affection is **not** what tames any more, but it still accrues on every path because it drives `behaviorTick` through `applyBondMultipliers`. Don't remove the bumps.

### Bonder lock

A wild cat stores the id of the first player whose interaction accrued affection in `clingy_cats:bonder_id`. Other players' pet/feed/proximity bumps are refused (the cat hisses quietly at them) until the lock clears. `checkAutoTame` clears it on success, and `clingy_cats:owner_id` takes over from there.

### On success

`checkAutoTame(cat, player, draws)` calls `tame.tame(player)`, writes the owner to `clingy_cats:owner_id`, resets affection to **100** (small head start so a fresh-tamed cat reads as slightly attentive, not clingy) and trust to 500, and plays a meow. BP `clingy_cats:on_tame` swaps `wild`→`tamed` and queues `clingycats:restore_identity` to re-apply the `set_trait_*` / `set_personality_*` groups, which the wild group didn't carry.

### Detecting a tamed cat — read this before touching bond code

`minecraft:tameable` lives **only** in the `clingy_cats:wild` group, and `on_tame` removes that group. That is correct: `tameable` is what *enables* taming, and a tamed cat has nothing left to tame. **Never add `minecraft:tameable` to the `tamed` group.**

The consequence is that `getComponent("minecraft:tameable")` is `undefined` on a tamed cat, so it can never answer "is this tamed?". Use `isTamed(cat)` in `bond.ts`, which tests `minecraft:is_tamed`. `tamedToPlayerId` is likewise unreachable — that's why the owner is mirrored into `clingy_cats:owner_id` at tame time, and `pregnancy.ts` records it for kittens too.

Wild HP = 20, Tamed HP = 40. (Both higher than vanilla cat's 10/20 — this is intentional.)

## Bond System (affection / trust)

`scripts/logics/bond.ts`. Both stats are entity properties clamped to [0,1000]; trust rests at **500**. The Meownifier renders both as bars (`inspect.ts:71-72`) but the bars are diagnostic — **the behavior shift is the point**, see Behavior Tick below.

`registerBondLoop()` (`main.ts`) runs every 20 ticks, scanning `clingy_cats` family entities within 64 blocks of each player:
- Trust drifts ±1 toward 500 for every loaded cat.
- Tamed + owner within 16 blocks → +1 affection.
- Wild → the proximity tame path above (skipped entirely while hissing).

Earn / lose table:

| Event | Effect | Wiring |
|---|---|---|
| pet a **tamed** cat (empty hand, not sneaking, owner) | +5 aff, +2 trust | BP `on_pet` → also fires `enter_rub_state` |
| pet a **wild** cat (sneak, empty hand) | `PET_BUMPS`, +2 trust | BP `on_wild_pet` |
| favorite food, already tamed | +20 aff, +5 trust | `handleGiveItem` |
| owner sleeps within 8 blocks | +3 aff, throttled to 1 per 10s | `entity_sensor` subsensor → `owner_sleeping_nearby` |
| tamed cat takes damage | −15 trust | `damage_sensor` → `on_tamed_hurt` |
| wrong food | −10 … −40 trust by personality | see below |

There is **no affection decay** implemented — the once-planned −1/day never landed. Trust self-heals via the drift; affection only goes up.

## Wrong Food & Hissing

Universal list, same for every cat, hard-coded in the BP interact filter (not in script): `apple, sweet_berries, beetroot, bread, melon_slice, red_mushroom, brown_mushroom, rotten_flesh, golden_apple, pumpkin_pie`. All plant-based or otherwise wrong for a cat. Spider eye is deliberately **not** on the list — it stays a valid `favorite_food` because some cats loving it is a quirk worth keeping.

The interact slot has **no `take_item`** — the cat sniffs and refuses, the item stays in the player's hand. The player learns the lesson without losing the item.

`handleWrongFood(cat)`:
1. Early-return if already hissing.
2. Drop trust by `WRONG_TRUST_DROPS[personality]` — anxious −40, affectionate −25, aloof −20, playful −15, confident/calm −10.
3. Set `emotion = angry`, play `mob.cat.hiss` at a personality-tuned volume (anxious 1.0, calm 0.6, rest 0.8), spawn `villager_angry`.
4. **Escalation only if post-drop trust < 300**: set `state = fleeing`, write `hissing_until = currentTick + 60`, puff two more angry particles at 20 and 40 ticks, and `runTimeout(60)` → `behaviorTick(cat)` to clear the state naturally.

The lockout is **interaction-level, not movement-level** — the cat doesn't physically back away. `handleWildPet`, `handleGiveItem` and the wild branch of the bond loop all call `isHissing(cat)` and return early. Adding real BP-driven flee movement was deliberately deferred.

Tamed cats are unaffected: the interact slot lives only in the `clingy_cats:wild` component group, so once bonded, mistakes don't bite back.

## Behavior Tick State Machine

`scripts/logics/states.ts:behaviorTick(cat, state?)`:
- Removes the previous `temp_*` component group (tracked via `dynamic_property clingy_cats:last_temp_group`).
- Merges three weighted pools by behavior key:
  - `TRAIT_POOLS[trait]` — e.g. `lazy` favors sleep/sit/move_to_soft.
  - `PERSONALITY_POOLS[personality]` — e.g. `affectionate` favors `temp_follow_close`.
  - `BLOCK_POOLS[favorite_block]` — e.g. `bed` favors `temp_move_to_bed`.
- **`applyBondMultipliers(cat, pool)`** then scales the merged pool by affection *before* the roll — this is where the bond stats actually cash out:
  - `temp_follow_close` × `1 + aff/500` (up to 3× at max affection)
  - `enter_sleep_state` × `1 + aff/800`
  - `enter_sit_state` × `1 + aff/1000`
  No new pool entries and no new states — existing weights are just bent. A fresh-tamed cat (aff 100) is near baseline; a maxed cat is visibly clingy.
- Picks one. If `enter_*_state` (still state), fires the matching trigger and clears `last_temp_group`. If `temp_*`, fires `clingy_cats:add_<x>` and records it for cleanup next tick.

### Mood particles

`spawnMoodReaction(cat, behavior)` runs on every tick with a **40% chance** to emit one particle and set `clingy_cats:emotion`. Cats have no facial expressions, so the particle is the only readable mood signal — hence the high rate. Priority order (first match wins):

| Condition | emotion | particle |
|---|---|---|
| trust < 300 | scared | `mobspell_ambient` |
| aff > 600 + cozy behavior (sleep/sit/follow_close) | happy | `heart_particle` |
| playful + play/follow_loose | playful | `villager_happy` |
| anxious | scared | `sneeze` |
| affectionate + follow_close | happy | `heart_particle` |
| curious trait + follow_loose/groom | curious | `glow_particle` |
| aloof | happy | none 70% of the time |
| sleep + aff > 300 | happy | `sculk_soul_particle` |
| catch-all | happy | `villager_happy` |

The low-trust branch sits first on purpose: a shaken cat overrides its personality. Note this is the only thing that ever writes `clingy_cats:emotion` outside `handleWrongFood` — RP doesn't read it yet.

Cycle is driven by BP `minecraft:timer` (looping, random interval) **inside each trait component group** — each `trait_*` group has its own pace (`trait_lazy` 70–130s, `trait_active` 20–50s, etc.) that fires `clingy_cats:behavior_tick` → `scriptevent clingycats:behavior_tick`.

Still-state groups (`state_sitting`, `state_sleeping`, `state_grooming`, `state_rubbing`) each use `minecraft:behavior.timer_flag_1` with `on_start` → `on_<state>` (sets `state` property) and `on_end` → `on_idle` (sets idle + re-queues `behavior_tick`).

`restoreIdentity(cat)` re-applies `set_trait_*` and `set_personality_*` after group transitions (`on_tame`, `off_riding_player`) that drop those groups.

## RP Animation & Body Language

**Bedrock has no animation priority.** Two animations touching the same bone fight, unpredictably. The body-language layer sidesteps this entirely by **layering on bone hierarchy instead**.

All 11 state animations (`idle`, `walk`, `sit`, `sleep`×3, `angry`, `hunting`, `rub`, `lick_stand`×2) claim the same bones: `ear2`/`ear3`/`ear6`/`ear7` and `tail1`/`tailbase2`/`tailtip2`. The geometry has unclaimed **parents** above them:

```
body → tail1 → [tail] → tailbase2 → tips
head → [baseears] → ear2, ear3
head → [bigears]  → ear6, ear7
head → [bentears] → ear4, ear5        (no state animation touches these at all)
head → [lowermuzzle] → lowermuzz, lowermuzz2
```

`animation.clingy_cats.body_language` drives **only the bracketed parents**, plus the entirely-unclaimed `eyes`, `whiskers`, `cheekfluff`. Parent→child composition means a rotation on `tail` offsets the whole tail while `sit`/`sleep`/`angry` keep their own sway on the children. **Zero conflict, no priority needed.**

**A bone being unclaimed is not enough — check its pivot is on its geometry.** `baseears`/`bigears`/`bentears` originally pivoted at `[0, 0, 1]`, roughly 15 units below the ears, because they are grouping nodes (`cubes: 0`) whose pivots were never meant to be used. Rotating them swung the ears across the head. They now pivot at each variant's ear base. Same class of bug made the old eyelid look like it was sliding. Verify pivot-vs-geometry offset before driving any bone.

Ear channels are **X only**. The parents pivot on the head centreline, so a Z rotation seesaws the pair — one ear up, one down. Ear droop would need `ear2`/`ear3` individually, which are claimed by the state animations. Ear angles are also deliberately small (angry −18, not −42) because `animation.clingy_cats.angry` already flattens `ear2`/`ear6` to about −45 and the two **stack**.

> After ANY animation edit, re-check that no bone driven by `body_language` appears in another animation's bone list. That invariant is the whole design.

- Maths lives in `scripts.pre_animation` on the RP client entity; channels only read `v.bl_*`.
- `scripts.initialize` seeds `v.bl_*` plus a per-cat `v.bl_phase = math.random(0, 6)` so cats don't blink in unison. All values `math.lerp`-smoothed.
- **Molang can only read `client_sync: true` properties** — so `emotion` and `state` drive this. `affection_level`/`trust_level`/`size` are `client_sync: false` and invisible to RP. `emotion` already encodes high affection as `happy`, which is what the slow blink keys on.

Model facts:

- **Blinking scales the `eyes` bone itself — there is no eyelid.** Cats don't have visible lids, and an overlay plate read as uncanny. `eyes` is the parent of all three variants (`grumpyeyes`/`bigeyes`/`baseeyes`, 18 cubes) with a centred pivot, so scaling Y closes symmetrically from top and bottom. **Y scale 1 = open, 0 = fully closed** — `v.bl_eye = 1 - max(blink, squint)`.
- **Animation `scale` is a multiplier on the bone's base scale, not an absolute.** Leaving it at 1 means "unchanged". This is why the old eyelid used ×10 for closed while `eyes` uses 0.
- `lowermuzzle` rotate X **−30 = open mouth** (one bone covers every snout variant).
- Sign conventions from existing animations: negative X on tail = lifted, negative X on ears = flattened back.

Wired on all 13 `RP/entity/*.json`. The `pre_animation` block is duplicated across them, so tuning any number (the ear angles, tail sway, blink timing) is a 13-file sweep — scriptable, but budget for it.

## Throw Feeding

Player drops/throws food; the cat picks it up and it counts as a feed.

### Two BP event routes were tried and both are dead — do not re-attempt either

1. **`minecraft:behavior.pickup_items` → `on_pickup_item_end` never fires for a stack of exactly 1.** It's keyed to the dropped item entity, which a full pickup destroys before the trigger resolves. Stacks of 2+ fire normally. Engine bug, confirmed by repeated testing.
2. **`minecraft:on_equipment_changed` only reports real equipment slots being equipped** (armor, saddle). It does not see a mob scooping an item off the ground. Confirmed in-game — it produced zero events. It was rolled out to all 13 BPs, then removed again.

### The working model: track items, not cats

`scripts/logics/throwFeed.ts`, polling every 10 ticks:

```
each pass: record which cats stand within 6 blocks of each dropped is_food item
when an item entity DISAPPEARS from the world → someone took it
  → poke those cats once with clingy_cats:on_pick_up
  → BP filter [self has_equipment_tag is_food] decides
  → clingy_cats:on_give → scriptevent clingycats:on_give_food → handleGiveItem
```

**Why item-tracking and not "poke cats near food":** `minecraft:behavior.eat_carried_item` has `delay_before_eating: 100`. A cat carries its food for five seconds, during which the BP filter answers "yes, holding food" *every* poll. Poking on that condition turns one pickup into a feed every 10 ticks and drags the cat toward taming just for having something in its mouth. One vanished item = at most one feed.

Guards: `POKE_COOLDOWN` 100 ticks (matched to `delay_before_eating`, so one feed per mouthful), `STALE_TICKS` 40 (an item that vanished long after we last saw it probably despawned rather than being eaten).

`handleGiveItem` also has a 10-tick re-entry gate (`clingy_cats:last_feed_tick`) covering the sneak-feed path.

Trace it in-game with `/scriptevent clingycats:debug_feed`.

**Architectural rule this taught:** script cannot read what an entity is holding; BP filters can (`has_equipment`, `subject: self`). So **script pokes, BP answers** — but poke on an *edge* (an item vanishing), never on a *state* (a cat holding food).

## Vanilla Cat Handling

`BP/entities/cat.json` was **deleted**. Never override a native `minecraft:` entity — it means inheriting Mojang's file forever. (Overriding vanilla *spawn_rules* is fine and still in use.)

`BP/spawn_rules/cat.json` keeps empty `conditions`, which kills biome spawning — but villages and witch huts spawn `minecraft:cat` through the village population system, which never consults that array. So `scripts/logics/vanillaCat.ts` subscribes to `world.afterEvents.entitySpawn`, catches `minecraft:cat`, and swaps it for a biome-appropriate breed; the replacement's own spawn event then runs `handleWildSpawn` normally.

Guards: only `Spawned` and `Born` causes (**not `Loaded`** — that would delete cats players tamed before installing), and never a tamed cat.

## Shoulder Riding

**Not the parrot sensor pattern from previous design notes** — replaced with a dedicated invisible entity.

`BP/entities/cats/shoulder_anchor.json` (`clingy_cats:shoulder_anchor`):
- Scale 0.001, invisible, `is_summonable: true`.
- `rideable` family_types `["clingy_cats"]`, `pull_in_entities: true`.
- Six per-trait timer component groups (`anchor_timer_<trait>`) that fire `clingy_cats:anchor_expire` after some seconds (lazy 40–60s, active 10–20s, …, independent 8–12s).

Flow:
- Owner sneak-empty-hand-interacts a tamed cat → BP `clingy_cats:want_to_ride` adds `clingy_cats:can_mount` (behavior.find_mount) and `scriptevent clingycats:request_shoulder_mount`.
- `riding.ts:handleRequestShoulderMount(cat)` spawns a `shoulder_anchor` at the player's location, fires `clingy_cats:anchor_timer_<trait>`, stores anchor id in the player's `dynamic_property clingy_cats:anchor_ids` (JSON list, cap 2 anchors).
- When the cat reaches the anchor, BP entity_sensor in `not_riding_player` triggers `clingy_cats:on_riding_player` → swap to `riding_player` + `riding_tick`.
- When the anchor's timer expires, `scriptevent clingycats:anchor_expire` removes anchor id from the player's list and removes the anchor.

## Items

### `clingy_cats:meownifier`
- Custom `clingy_cats_component:meownifier` registered in `inspect.ts`.
- Raycast 20 blocks, hit first entity in `clingy_cats:` family, open ActionFormData with: breed, life stage, tame status, personality/trait/fav. food/fav. block, size + state, affection/trust bars, eyes/coat/tail/snout/head.
- Durability 32, repairable with amethyst_shard or gold_ingot. Enchantable in `fishing_rod` slot (so Mending works). 0.5s cooldown.
- Crafting (`recipes/meownifier.json`):
  ```
  . G .
  G E G   E = ender_eye, G = gold_ingot, A = amethyst_shard
  . A .
  ```

### `clingy_cats:guide_book`
- Given automatically on first player spawn (60-tick delay) via `playerSpawn` listener + `clingy_cats:welcomed` tag.
- `clingy_cats_component:guide_book` opens a multi-page ActionFormData styled as an in-world field journal (`◆ Field Notes ◆`), using `header()` / `divider()` / `label()` from `@minecraft/server-ui` v2: On Taming · Kinds I've Met · How They Live · Where I Found Them · On Kittens · The Meownifier · Signs They Leave · Loose Pages · Close. Buttons carry breed-texture icons.
- Form UI ceiling: `header`/`divider`/`label` and button icons are real, § colour codes work in title/body/header/label, but **no form type has any transition or animation API** — every page is a hard cut. That's the platform, not a gap to fix.
- Recipe defined in `recipes/guide_book.json`.

## Script ↔ BP Event Protocol

BP fires `{ "queue_command": { "command": "scriptevent clingycats:<id>" } }`. `eventRegister.ts` dispatches by id. Current ids and their handlers:

| scriptevent id                             | Handler                            | Purpose                                                                    |
|--------------------------------------------|------------------------------------|----------------------------------------------------------------------------|
| `clingycats:catspawn`                      | `handleWildSpawn` / `handleSpawnTestCats` | first appearance assignment                                                |
| `clingycats:conception`                    | `handleConception`                 | capture both parents' genes                                                |
| `clingycats:givebirth`                     | `handleGiveBirth`                  | spawn babies, apply inherited traits                                       |
| `clingycats:restore_identity`              | `restoreIdentity`                  | re-apply trait + personality groups after tame / dismount                  |
| `clingycats:behavior_tick`                 | `behaviorTick`                     | choose next behavior                                                       |
| `clingycats:enter_still_state_event`       | `behaviorTick(cat, "enter_still_state")` | force still-state choice                                                   |
| `clingycats:on_give_food`                  | `handleGiveItem`                   | feed path — affection bump + auto-tame check                               |
| `clingycats:on_pick_up_event` / `_start_event` | no-op (commented log)         | reserved                                                                   |
| `clingycats:request_shoulder_mount`        | `handleRequestShoulderMount`       | spawn anchor + start timer                                                 |
| `clingycats:anchor_expire`                 | `handleAnchorExpire`               | clean up anchor                                                            |
| `clingycats:grow_up`                       | `applyAdultSize`                   | swap baby→adult scale group                                                |
| `clingycats:pet`                           | `handlePet`                        | tamed pet → +5 aff / +2 trust                                              |
| `clingycats:wild_pet`                      | `handleWildPet`                    | wild pet → bonder lock + `PET_BUMPS` + auto-tame check                     |
| `clingycats:wrong_food`                    | `handleWrongFood`                  | trust drop + hiss, escalates below trust 300                               |
| `clingycats:cat_hurt`                      | `handleCatHurt`                    | −15 trust                                                                  |
| `clingycats:owner_sleeping`                | `handleOwnerSleeping`              | +3 aff, throttled 1 per 10s                                                |
| `clingycats:debug_feed`                    | `toggleFeedDebug`                  | dev-only: toggle throw-feed tracing in chat                                |

The five bond/hiss events above are wired in **all 13 breed BPs** (12 breeds + `test_BP`). Their BP-side definitions live at the end of each file's `events` block:

| BP event | Component group it lives in | Component |
|---|---|---|
| `clingy_cats:on_pet` | `tamed` | `interact` — empty hand, **not** sneaking, owner; also fires `enter_rub_state` |
| `clingy_cats:on_tamed_hurt` | `tamed` | `damage_sensor` (`cause: all`, `deals_damage: yes`) |
| `clingy_cats:owner_sleeping_nearby` | `tamed` | `entity_sensor` subsensor, range 8, `is_sleeping` + `is_owner` |
| `clingy_cats:on_wild_pet` | `wild` | `interact` — sneak held, both hands empty, cooldown 4 |
| `clingy_cats:on_wrong_food` | `wild` | `interact` — `is_food` tag + `any_of` the 10 wrong items, cooldown 1, no `take_item` |
| `clingy_cats:on_pick_up` | base components | `interact`-less event, poked from script by `throwFeed.ts`; filters `is_food` on self, triggers `on_give` |

## BP Knowledge References (keep)

- Molang expressions only work in Molang-typed fields (e.g. `experience_reward`). Decimal/Integer/Bool fields are literals.
- `is_sneaking` (BP filter) ≠ `is_sneak_held` (key currently held).
- `follow_mob` + `filters` + `preferred_actor_type` does baby-follows-mother pure BP.
- `parent` filter subject doesn't work for custom entities (no component sets the parent relationship).
- `bool_property` / `enum_property` / `float_property` / `int_property` are valid filter tests with operators.
- `random_chance` is a real filter (probabilistic gate, no Script needed).

### Filter subjects
`self`, `other`, `player`, `damager`, `target`, `parent` (unusable for custom), `block`.

### Components with event hooks
- Interaction: `minecraft:interact (on_interact)`, `damage_sensor (on_damage)`, `trusting (trust_event)`, `tameable (tame_event)`, `ageable (grow_up)`, `healable (on_heal)`.
- Movement/Goal: `behavior.avoid_mob_type (on_escape_event)`, `avoid_block (on_escape_event)`, `move_to_block (on_reach / on_stay_completed / on_failed)`, `go_home (on_home / on_failed)`, `drop_item_for (on_drop_attempt)`, `tempt` (no hook).
- Detection: `environment_sensor (triggers[])`, `entity_sensor (subsensors[])`, `block_sensor (on_break)`, `target_nearby_sensor (on_inside_range / on_outside_range / on_vision_lost_inside_range)`, `timer (time_down_event)`, `behavior.timer_flag_1..3 (on_start / on_end)`.
- Misc: `transformation` (event via identifier), `on_target_acquired`, `on_wake_with_owner`.
- Avoid: both `behavior.avoid_mob_type` (entities) and `behavior.avoid_block` (blocks) accept `on_escape_event`. Movement params (`max_dist`, `sprint_speed_multiplier`, etc.) live inside each `entity_types` entry, not at component root.

### Vanilla patterns adopted
Wolf-style trait randomize chain · Cat sound_variant · Parrot-style sensor loop (superseded by anchor entity here) · Bee-style `move_to_block` + `on_reach`/`on_stay_completed` · Axolotl `entity_born` (no longer used; full Script drift instead).

### Reference docs
- https://bedrock.dev/docs/stable/Entities#Components
- https://bedrock.dev/docs/stable/Entities#AI%20Goals
- https://bedrock.dev/docs/stable/Entity%20Events
- https://bedrock.dev/docs/stable/Entities#Filters
- https://wiki.bedrock.dev/entities/entity-events

### Example complex sequence/filter (reference)
```json
"wiki:on_hit": {
  "randomize": [
    { "weight": 60 },
    { "weight": 40,
      "sequence": [
        { "trigger": "attack_event" },
        { "filters": { "test": "has_component", "operator": "!=", "value": "minecraft:is_sheared" },
          "sequence": [
            { "filters": { "test": "distance_to_nearest_player", "operator": "<=", "value": 5.0 },
              "randomize": [
                { "weight": 10, "add": { "component_groups": ["explode"] } },
                { "weight": 60, "add": { "component_groups": ["attack"] } },
                { "weight": 20, "add": { "component_groups": ["range_attack"] } },
                { "weight": 10 }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Known Issues / Future Work

1. **`format_version` vs `min_engine_version`** — breed entities are at `1.26.20` while manifest `min_engine_version` is `[1,26,10]`. This is **not** a problem: they are different axes, and no documented rule requires the manifest to be ≥ the highest format_version (vanilla ships one pack spanning 1.8.0→1.26.10). Breaking changes gate on the *file's own* declared format_version, so staying at 1.26.20 is a supported, indefinite position. Microsoft's currency table explicitly marks entity files **exempt**.
2. **`treat_*` planned-but-unimplemented** — `clingy_cats:favorite_food` and `clingy_cats:equipment` enums include `treat_fish` / `treat_meat` / `treat_fancy`, but: (a) no item is defined for them under `BP/items/`, (b) the `on_give` BP filter chain has no entry that matches them, (c) they were removed from `FAVORITE_FOOD_POOL` so they can't be assigned as a favorite. The enum slots are reserved for the planned items; nothing will actually use them until the items are added and on_give entries are written.
3. **No spawn rule for `clingy_cats:test`** — by design (summon-only); just noting.
4. **Wild HP 20 / Tamed HP 40** — much higher than vanilla cat's 10/20. Confirmed by the dev as intentional design.
5. **Bond/hiss numbers are unplaytested first guesses** — every table in Tame Flow, Bond System and Wrong Food is shape-first. The shapes (anxious can't be petted, calm shrugs off mistakes, affectionate bonds fastest) are design intent; the integers are placeholders. Retune from play, not from theory.
6. **`clingy_cats:emotion` is write-only** — `spawnMoodReaction` and `handleWrongFood` set it, but no render controller or animation reads it. Wiring RP to it is the obvious next payoff for the mood layer.
7. **No affection decay** — affection is monotonically increasing once earned. The planned −1/day was dropped. If cats end up feeling permanently maxed, this is the lever.
8. **Hiss lockout has no visible flee** — the cat stops *responding* for 3s but doesn't move away, so the escalation can read as "nothing happened" in-game. BP-driven flee movement was deferred on purpose; revisit if playtest shows the escalation isn't legible.
9. **`clingy_cats:frequency`** — still declared on all 13 BPs and read by nothing. Kept as a stub deliberately: deleting it would force enum + render-controller index touches across every breed for zero gain.

## Working With This Codebase (notes for future Claude)

- Prefer BP/RP JSON over Script when adding behavior. Script is for: appearance assignment (random + inheritance), gene capture, bond stats + tame thresholds, anchor lifecycle, custom items, guide UI.
- **Bond stats must drive behavior, not just a bar.** Anything new that touches affection/trust routes through `applyBondMultipliers` in `states.ts`. The Meownifier bars are diagnostics. Never express affection as loot drops or gift items — that's a standing design line.
- When adding a property: also bump the breed BP enum value list AND update `RP/entity/<breed>_RP.json` materials/textures/render controllers AND check the render controller's `Array.<name>[q.property(...)]` index expectations — order matters.
- When adding a new `temp_*` or `state_*` group: also add the matching `clingy_cats:add_<x>` and `clingy_cats:remove_<x>` (or `clingy_cats:enter_<x>_state` / `clingy_cats:on_<x>`) events, **in every breed BP**.
- When adding a scriptevent: declare it in `eventRegister.ts` AND `queue_command` it from the relevant BP event.
- When adding a UI form: use `header`/`label`/`divider`, never ASCII rules or space-padded columns — **Bedrock's UI font is proportional, so padded columns can never align.** Colours come from `scripts/ui/palette.ts` (material codes), symbols from `scripts/ui/symbols.ts`. Custom pack texture button icons **require the `.png` suffix**; vanilla paths may omit it.
- When touching RP animation: preserve the bone-hierarchy invariant (see *RP Animation & Body Language*) — `body_language` must never share a bone with a state animation.
- For one-off tests, summon `clingy_cats:test` to see catalog variants quickly.
- **Verify with `npm run local-deploy`**, not `npm run build` — deploy already builds, and only deploy puts the pack where Minecraft can load it. Fully exit and re-enter the world afterwards; packs are cached on load.

### Things confirmed NOT to be problems (don't re-raise)

- `"wool"`, `"carpet"`, `"lit_furnace"` in `target_blocks` are **legacy internal identifiers that work correctly**. They look like broken pre-flattening ids; they aren't.
- `spawn_rules` 1.8.0, `render_controllers` 1.10.0, `animations` 1.8.0 are canonical frozen values vanilla still ships.
- Entity `format_version` 1.26.20 vs manifest `min_engine_version` `[1,26,10]` is fine — different axes, and entity files are explicitly exempt from Microsoft's currency table.
- Modding-platform releases ship unencrypted and anyone can unzip the pack. That's accepted, not a problem to solve.
- Bedrock Molang has **no sound-playing query** — there is no way to detect "this cat is vocalising" from RP. Driving a jaw off sound requires setting a `client_sync` property from script at the moment `playSound` is called.
