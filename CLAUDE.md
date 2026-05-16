# Clingy Cats — Project Reference

Last updated: 2026-05-16. Reflects the current state of code on `main`.

## Project Identity

- **Developer:** Itipat — Unity/C++ → Bedrock addon dev, targeting Overtales (Thai Mojang Marketplace studio).
- **Project:** Clingy Cats — breed-specific cat behavior addon.
- **Build chain:** authored via Bridge v2.7.54 + Dash 0.11.7; BP/RP under `BP/` and `RP/`. Compiled JS lands in `dist/scripts/main.js` (sourcemap in `dist/debug/`).
- **Engine versions seen in files:**
  - `BP/manifest.json` → `min_engine_version: [1,26,10]`.
  - Breed BP entities → `"format_version": "1.26.10"` for `cat.json`, but cloned breed files use `"1.26.20"`. Items + recipes use `1.26.10`. The mix is intentional-ish but should be confirmed against the version actually targeted.
- **Head dev guidance:** BP/RP JSON first, Script only when BP genuinely cannot express it. Still the rule.

## Repo Layout

```
BP/
  manifest.json
  entities/
    cat.json                         # vanilla cat override (sound_variant + base behaviors)
    cats/
      <breed>.json                   # per-breed entity (12 breeds + test_BP)
      shoulder_anchor.json           # invisible mount entity for shoulder riding
  spawn_rules/
    cat.json                         # vanilla cat spawn override
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
  (render controllers, animations, textures, models elsewhere in RP/)

scripts/                             # TypeScript source (compiled by Bridge/Dash → dist/scripts/main.js)
  main.ts
  configs/catsbreed.ts               # texture catalogs, pools, breed maps, types
  events/eventRegister.ts            # scriptevent → handler dispatch
  logics/
    appearance.ts                    # applyTextureData/eyes/whiskers, size assignment, full-moon overrides
    breed.ts                         # handleWildSpawn / handleSpawnTestCats (biome bias)
    genetics.ts                      # inheritTrait/inheritPattern/pickTexture/findMutationBreed
    interact.ts                      # tame on food (handleGiveItem)
    inspect.ts                       # registerItemComponents (meownifier + guide_book), showCatForm
    pregnancy.ts                     # handleConception / handleGiveBirth
    personality.ts                   # assignRandomPersonality / assignBreedPersonality
    riding.ts                        # shoulder anchor management
    states.ts                        # behaviorTick (state machine) + restoreIdentity
    guideBook.ts                     # multi-page ActionFormData
    utils.ts                         # randomFrom, weightedRandom, findBothParents, distanceSq
  debug/catdebug.ts                  # debug HUD on stick (DEBUG=true currently!)
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
clingy_cats:affection_level    int  [0,1000]                                                                                                    (client_sync: false)
clingy_cats:trust_level        int  [0,1000]                                                                                                    (client_sync: false)
clingy_cats:frequency          int  [0,100]   default 50                                                                                        (client_sync: false)
clingy_cats:equipment          enum (mirrors favorite_food, plus "none")                                                                        (client_sync: false)
clingy_cats:size               enum tiny|small|normal|large|huge                                                                                (client_sync: false)
clingy_cats:immortal           bool                                                                                                             (client_sync: false)
```

Enum values map to indices in render controllers — **array order in BP = array index in RP**. Don't reorder.

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

1. Player crouches + holds food + interacts. BP `clingy_cats:wild` has a `minecraft:interact` that, when filters pass (`is_food` tag in player main hand, cat's own hand empty), fires `clingy_cats:on_give`.
2. `on_give` is a per-item filter chain that sets `clingy_cats:equipment` to whichever food the cat now holds, then `scriptevent clingycats:on_give_food` → `handleGiveItem`.
3. `handleGiveItem`:
   - Read `clingy_cats:equipment` + `clingy_cats:favorite_food`.
   - **0.45 if equipment === favorite_food, 0.20 otherwise.** (CLAUDE.md previously described a personality matrix — that's not implemented; only food-match matters today.)
   - Particle + sound on success/failure.
   - If not tamed, `behaviorTick(cat, "temp_follow_close")` to make it follow.
   - On success, `tameable.tame(nearestPlayer)` which fires BP `clingy_cats:on_tame` → swap `wild`→`tamed` + `scriptevent clingycats:restore_identity` (re-applies set_trait + set_personality groups since they were not in the wild group).

Wild HP = 20, Tamed HP = 40. (Both higher than vanilla cat's 10/20 — this is intentional.)

## Behavior Tick State Machine

`scripts/logics/states.ts:behaviorTick(cat, state?)`:
- Removes the previous `temp_*` component group (tracked via `dynamic_property clingy_cats:last_temp_group`).
- Merges three weighted pools by behavior key:
  - `TRAIT_POOLS[trait]` — e.g. `lazy` favors sleep/sit/move_to_soft.
  - `PERSONALITY_POOLS[personality]` — e.g. `affectionate` favors `temp_follow_close`.
  - `BLOCK_POOLS[favorite_block]` — e.g. `bed` favors `temp_move_to_bed`.
- Picks one. If `enter_*_state` (still state), fires the matching trigger and clears `last_temp_group`. If `temp_*`, fires `clingy_cats:add_<x>` and records it for cleanup next tick.

Cycle is driven by BP `minecraft:timer` (looping, random interval) **inside each trait component group** — each `trait_*` group has its own pace (`trait_lazy` 70–130s, `trait_active` 20–50s, etc.) that fires `clingy_cats:behavior_tick` → `scriptevent clingycats:behavior_tick`.

Still-state groups (`state_sitting`, `state_sleeping`, `state_grooming`, `state_rubbing`) each use `minecraft:behavior.timer_flag_1` with `on_start` → `on_<state>` (sets `state` property) and `on_end` → `on_idle` (sets idle + re-queues `behavior_tick`).

`restoreIdentity(cat)` re-applies `set_trait_*` and `set_personality_*` after group transitions (`on_tame`, `off_riding_player`) that drop those groups.

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
- `clingy_cats_component:guide_book` opens a multi-page ActionFormData: Taming · Personalities · Traits · Breeds · Breeding & Genetics · The Meownifier · Secrets · Close.
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
| `clingycats:on_give_food`                  | `handleGiveItem`                   | tame chance roll                                                           |
| `clingycats:on_pick_up_event` / `_start_event` | no-op (commented log)         | reserved                                                                   |
| `clingycats:request_shoulder_mount`        | `handleRequestShoulderMount`       | spawn anchor + start timer                                                 |
| `clingycats:anchor_expire`                 | `handleAnchorExpire`               | clean up anchor                                                            |
| `clingycats:grow_up`                       | `applyAdultSize`                   | swap baby→adult scale group                                                |
| `clingycats:interact`                      | placeholder                        | not wired                                                                  |

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

1. **`format_version` mismatch** — breed entities are at `1.26.20` but manifest `min_engine_version` is `1.26.10`. Items and the vanilla `cat.json` use `1.26.10`. Hasn't broken anything yet but worth confirming the engine you're actually targeting and aligning all files.
2. **`treat_*` planned-but-unimplemented** — `clingy_cats:favorite_food` and `clingy_cats:equipment` enums include `treat_fish` / `treat_meat` / `treat_fancy`, but: (a) no item is defined for them under `BP/items/`, (b) the `on_give` BP filter chain has no entry that matches them, (c) they were removed from `FAVORITE_FOOD_POOL` so they can't be assigned as a favorite. The enum slots are reserved for the planned items; nothing will actually use them until the items are added and on_give entries are written.
3. **No spawn rule for `clingy_cats:test`** — by design (summon-only); just noting.
4. **Wild HP 20 / Tamed HP 40** — much higher than vanilla cat's 10/20. Confirmed by the dev as intentional design.

## Working With This Codebase (notes for future Claude)

- Prefer BP/RP JSON over Script when adding behavior. Script is for: appearance assignment (random + inheritance), gene capture, tame-roll, anchor lifecycle, custom items, guide UI.
- When adding a property: also bump the breed BP enum value list AND update `RP/entity/<breed>_RP.json` materials/textures/render controllers AND check the render controller's `Array.<name>[q.property(...)]` index expectations — order matters.
- When adding a new `temp_*` or `state_*` group: also add the matching `clingy_cats:add_<x>` and `clingy_cats:remove_<x>` (or `clingy_cats:enter_<x>_state` / `clingy_cats:on_<x>`) events, **in every breed BP**.
- When adding a scriptevent: declare it in `eventRegister.ts` AND `queue_command` it from the relevant BP event.
- For one-off tests, summon `clingy_cats:test` to see catalog variants quickly.
