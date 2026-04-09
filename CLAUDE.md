Clingy Cats — Full Design Reference
Updated April 2026 — captures all decisions from architecture session

Project Identity

Developer: Itipat — Unity/C++ → Bedrock addon dev, targeting Overtales (Thai Mojang Marketplace studio)
Project: Clingy Cats — breed-specific cat behavior addon
Format version: 1.26.10
Key feedback from head dev: BP/RP JSON first, Script only when BP genuinely cannot express it


Architecture Fundamentals
One entity per breed — no god entity
clingy_cats:british, clingy_cats:siamese, clingy_cats:tabby,
clingy_cats:persian, clingy_cats:ragdoll, clingy_cats:all_black,
clingy_cats:black, clingy_cats:calico, clingy_cats:jellie,
clingy_cats:red, clingy_cats:ocelot, clingy_cats:white
Each breed has its own BP entity file, own spawn rules file. Shared RP (one render controller per breed, shared animation file copied into project RP — never reference vanilla directly).
Script Boundary
Only use Script for:

sub_variant int assignment on spawn (BP can't pick from 100+ range cleanly)
Appearance inheritance from mother on breed (needs to read parent entity properties)
Tame probability calculation (personality × favorite_food interaction)
Relative height check for favorite_block_high
Custom item effects if complex

Everything else is pure BP.

Property System (complete — all client_sync: true)
json"clingy_cats:sub_variant":    { "type": "int",  "range": [0, 126], "default": 0 }
"clingy_cats:pattern":        { "type": "enum",  "values": ["solid","tabby","tuxedo","bicolor","calico","tortoiseshell","pointed","sphinx"] }
"clingy_cats:color":          { "type": "enum",  "values": ["black","white","gray","brown","orange","chocolate","cream"] }
"clingy_cats:hairs":          { "type": "enum",  "values": ["short","fluffy","none"] }
"clingy_cats:tail":           { "type": "enum",  "values": ["normal","bobtail"] }
"clingy_cats:snout":          { "type": "enum",  "values": ["normal","short"] }
"clingy_cats:head":           { "type": "enum",  "values": ["round","flat"] }
"clingy_cats:whiskers":       { "type": "enum",  "values": ["short","medium","long"] }
"clingy_cats:eye_shape":      { "type": "enum",  "values": ["narrow","round","almond"] }
"clingy_cats:eye_color":      { "type": "enum",  "values": ["green","yellow","blue","brown","orange","teal","gray","heterochromia"] }
"clingy_cats:behavior_trait": { "type": "enum",  "values": ["lazy","active","curious","shy","friendly","independent"] }
"clingy_cats:personality":    { "type": "enum",  "values": ["affectionate","aloof","playful","calm","anxious","confident"] }
"clingy_cats:state":          { "type": "enum",  "values": ["idle","sitting","purring","hissing","meowing","stretching","jumping","climbing","swimming","sleeping","playing","hunting","grooming","begging"] }
"clingy_cats:emotion":        { "type": "enum",  "values": ["happy","sad","angry","scared","curious","playful"] }
"clingy_cats:sound_variant":  { "type": "enum",  "values": ["default","royal"] }
RP reads all via q.property('clingy_cats:X')
Enums return their index as int in RP — array order in BP = array index in RP render controller

Texture Catalog System
What the artist did
All body traits are baked into texture UV — pattern + color + hairs + tail + snout + head are painted into each texture file. They are NOT independent geometry pieces (except whiskers and eyes which are separate models).
Vocabulary (locked)
pattern:  solid, tabby, tuxedo, bicolor, calico, tortoiseshell, pointed, sphinx
color:    black, white, gray, brown, orange, chocolate, cream
hairs:    short, fluffy, none
tail:     normal, bobtail
snout:    normal, short
head:     round, flat
sub_variant int
Each breed has a catalog Record<number, TextureData> where the index = RP array position = texture file. The int property sub_variant selects which texture to display.
tstype TextureData = {
    pattern: string; color: string; hairs: string;
    tail: string;    snout: string; head: string;
};
RP render controller pattern
json"Array.body[q.property('clingy_cats:sub_variant')]"
"Array.whiskers[q.property('clingy_cats:whiskers')]"
"Array.eye_shape[q.property('clingy_cats:eye_shape')]"
"Array.eye_color[q.property('clingy_cats:eye_color')]"
Whiskers and eye_shape/eye_color are separate overlay models, not baked — fully independent from sub_variant.

Breed Catalogs (complete from artist spreadsheet)
Texture counts per breed
all_black: 24  |  black: 20    |  british: 27  |  calico: 16
jellie: 24     |  ocelot: 1    |  persian: 8   |  ragdoll: 5
red: 28        |  siamese: 6   |  tabby: 22    |  white: 4
Breed trait locks (what artist painted — these are breed constraints)
ragdoll:  always pointed+fluffy+normal tail+normal snout+round head — only color drifts
siamese:  always pointed+cream+normal tail+normal snout+round head — only hairs drifts
persian:  always fluffy+short snout+round head — pattern and color vary
british:  always short snout+round head+normal tail — pattern and color vary
white:    always sphinx+none hairs+flat head — only color drifts
red:      always tabby+orange — only hairs and tail vary

Spawn & Inheritance Script
File: scripts/catInheritance.ts
Two BP events trigger Script:

clingy_cats:needs_wild_variant — fired at end of entity_spawned, sets full random appearance
clingy_cats:needs_variant_inheritance — fired at end of entity_born, finds nearest adult same-type (= mother), applies drift

Drift logic:

sub_variant int: ±10 drift, 85% inherit near mother, 15% full random
pattern: 85% inherit, 15% random from breed's valid patterns
color: 85% inherit, 15% random from breed's valid colors
hairs: 80% inherit, 20% random (drift ±1 step in ordered array)
tail: 95% inherit (strong breed marker)
snout: 95% inherit (strong breed marker)
head: 95% inherit (strong breed marker)
eye_color: 90% exact inherit, 9% random non-heterochromia, 1% heterochromia
whiskers: 90% inherit, drift ±1 ordered step

pickTexture() function — selects sub_variant index matching target traits, relaxes constraints if artist didn't paint that exact combo (drops color first, then hairs, keeps structural traits).
applyTextureData() — sets sub_variant + all 6 baked traits as properties simultaneously so BP and RP stay in sync.

Behavior Architecture
Component Group Layers
SPAWN-ASSIGNED (set once on entity_spawned, never swap):
  trait:      lazy / active / curious / shy / friendly / independent
  personality: affectionate / aloof / playful / calm / anxious / confident
  favorite_food: cod / salmon / tropical / puffer / rabbit / chicken /
                 treat_fish / treat_meat / treat_fancy
  favorite_block: bed / soft / warm / high / owner / sun

LIFE STAGE (swap once on grow_up):
  baby / adult

TAME STATE (swap once on tame):
  wild / tamed

BEHAVIOR STATES (swap frequently via timers/sensors):
  state_idle / state_sitting / state_sleeping / state_grooming /
  state_playing / state_hunting / state_begging

RIDING STATE (parrot sensor pattern):
  not_riding_player / riding_player

HEALTH TIER:
  health_wild  → 10hp
  health_tamed → 20hp, slow regen near owner
Trait × Behavior
lazy        → sits more, moves less, longer timer between roams
active      → roams far, plays more, hunts more
curious     → approaches players/mobs, investigates blocks
shy         → large avoid_mob_type range on players, flees fast
friendly    → small avoid range, approaches player sooner
independent → loose follow when tamed, does own thing
Personality × Interaction
affectionate → tames faster, follows tighter when tamed
aloof        → tames slower, loose follow, sits alone often
playful      → triggered by held toys/items, play behavior more frequent
calm         → rarely hisses, doesn't flee as fast
anxious      → hisses often, flees fast, needs calm approach
confident    → doesn't flee at all, approaches player boldly
Favorite Food Pool
cooked_cod          → common, baseline tame chance
cooked_salmon       → common, baseline tame chance
tropical_fish       → uncommon, good tame chance
pufferfish          → rare, high tame boost when it works
rabbit              → uncommon, preferred by active/hunting trait
chicken             → uncommon
clingy_cats:treat_fish  → custom item, works well on most cats
clingy_cats:treat_meat  → custom item, works well on hunting trait cats
clingy_cats:treat_fancy → rare custom, works on any cat regardless of favorite
Tame Probability — Script-driven
minecraft:interact fires event → Script reads personality + favorite_food properties → calculates probability → calls tame or flee event back via entity.triggerEvent().
Probability matrix concept:
                    favorite food   neutral food   wrong food
anxious             0.20            0.05           flee+hiss
calm                0.40            0.15           0.02
affectionate        0.50            0.20           0.05
confident           0.45            0.20           0.05
aloof               0.25            0.08           0.02
playful             0.35            0.15           0.05
Favorite Block Behavior (tamed, move_to_block)
favorite_bed    → targets bed block types, on_stay_completed → state:sleeping
favorite_soft   → targets wool/carpet/moss, on_stay_completed → state:sitting
favorite_warm   → targets furnace/campfire proximity, on_stay_completed → state:purring
favorite_high   → Script height check, move to highest reachable nearby block
favorite_owner  → tighter follow params, no block seeking
favorite_sun    → grass/sand + environment_sensor daytime → state:sitting
Wild State Behavior
idle_timer → randomize: sit / groom / roam / investigate
player_nearby sensor:
  shy/anxious     → flee (large radius)
  curious         → approach
  confident       → approach boldly, no flee
  friendly        → tempt-ready
player holds item:
  wrong food      → hiss event (state:hissing)
  neutral food    → low tame chance
  favorite food   → personality-weighted tame chance (Script)
on tame:
  remove: wild + health_wild
  add: tamed + health_tamed
  trigger: randomize_tamed_behaviors
Shoulder Riding (parrot sensor pattern — pure BP)
json"clingy_cats:not_riding_player": {
    "minecraft:entity_sensor": {
        "subsensors": [{
            "event_filters": { "all_of": [
                { "test": "is_riding", "subject": "self", "value": true }
            ]},
            "event": "clingy_cats:on_riding_player"
        }]
    },
    "minecraft:behavior.find_mount": { "priority": 1, "within_radius": 2.0 }
},
"clingy_cats:riding_player": {
    "minecraft:entity_sensor": {
        "subsensors": [{
            "event_filters": {
                "test": "is_riding", "subject": "self", "value": false
            },
            "event": "clingy_cats:on_not_riding_player"
        }]
    }
}
Guardian Trait (tamed only)
minecraft:behavior.owner_hurt_by_target  → retaliates when owner hit
minecraft:behavior.owner_hurt_target     → attacks what owner attacks
minecraft:behavior.nearest_prioritized_attackable_target → hostiles near home

Spawn Event Chain
json"minecraft:entity_spawned": {
    "sequence": [
        { "add": { "component_groups": ["clingy_cats:adult", "clingy_cats:wild", "clingy_cats:health_wild"] } },
        { "trigger": "clingy_cats:randomize_behavior_trait" },
        { "trigger": "clingy_cats:randomize_personality" },
        { "trigger": "clingy_cats:randomize_favorite_food" },
        { "trigger": "clingy_cats:randomize_favorite_block" },
        { "trigger": "clingy_cats:randomize_sound_variant" },
        { "trigger": "clingy_cats:randomize_eye_color" },
        { "trigger": "clingy_cats:randomize_eye_shape" },
        { "trigger": "clingy_cats:randomize_whiskers" },
        { "trigger": "clingy_cats:needs_wild_variant" }
    ]
},
"minecraft:entity_born": {
    "sequence": [
        { "add": { "component_groups": ["clingy_cats:baby", "clingy_cats:wild", "clingy_cats:health_wild"] } },
        { "trigger": "clingy_cats:randomize_behavior_trait" },
        { "trigger": "clingy_cats:randomize_personality" },
        { "trigger": "clingy_cats:randomize_favorite_food" },
        { "trigger": "clingy_cats:randomize_favorite_block" },
        { "trigger": "clingy_cats:randomize_sound_variant" },
        { "trigger": "clingy_cats:randomize_eye_color" },
        { "trigger": "clingy_cats:randomize_eye_shape" },
        { "trigger": "clingy_cats:randomize_whiskers" },
        { "trigger": "clingy_cats:needs_variant_inheritance" }
    ]
}

Vanilla Reference Patterns Used
PatternSourceUsed forTrait randomize chainWolfbehavior_trait / personality assignmentSound variantWolf/Catsound_variant propertyShoulder riding sensor loopParrotriding groupsmove_to_block + on_stay_completedBeefavorite_block seekingentity_born + mutation_factorAxolotlreference only — not used, replaced by Script driftdataDrivenEntityTriggerEventScript APIinheritance + tame probability

Build Order (remaining work)
1. Fix base.json properties (pattern/color values, add sub_variant int, add head)
2. Shared components block (movement, physics, navigation, family, sensors)
3. Wild group (health, avoid, tempt — parameterized per trait)
4. Trait groups × 6
5. Personality groups × 6
6. Favorite food interact groups × 9
7. Favorite block groups × 6
8. Tamed group (follow, leash, health regen)
9. Behavior state groups (idle/sit/sleep/groom/play/hunt cycling)
10. Riding groups (parrot pattern)
11. entity_spawned / entity_born event chains
12. Script: tame probability handler (extend catInheritance.ts)
13. Per-breed entity files (inherit base, override breed-specific params)
14. Spawn rules per breed
15. RP render controllers per breed

also fetch from these site or revelence
https://bedrock.dev/docs/stable/Entities#Components

#Behaviors
https://bedrock.dev/docs/stable/Entities#AI%20Goals

#Events and Conditioning filters
https://bedrock.dev/docs/stable/Entity%20Events
https://bedrock.dev/docs/stable/Entities#Filters 
https://wiki.bedrock.dev/entities/entity-events
