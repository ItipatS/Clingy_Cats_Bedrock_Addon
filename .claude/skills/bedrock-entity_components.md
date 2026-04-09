Components


minecraft:addrider
Adds a rider to the entity. Requires minecraft:rideable.

Name	Type	Default Value	Description
entity_type	String		The entity type that will be riding this entity.
spawn_event	String		The spawn event that will be used when the riding entity is created.

minecraft:admire_item
Causes the mob to ignore attackable targets for a given duration.

Name	Type	Default Value	Description
cooldown_after_being_attacked	Integer	0	Duration, in seconds, for which mob won't admire items if it was hurt
duration	Integer	10	Duration, in seconds, that the mob is pacified.

minecraft:ageable
Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

Name	Type	Default Value	Description
drop_items	List		List of items that the entity drops when it grows up.
duration	Decimal	1200.0	Amount of time before the entity grows up, -1 for always a baby.
feed_items	List		List of items that can be fed to the entity. Includes 'item' for the item name, 'growth' to define how much time it grows up by, and 'result_item' that defines what item the feed item will transform to upon successful interaction (Format: itemName:auxValue).
grow_up	String		Event to run when this entity grows up.
interact_filters	Minecraft Filter		List of conditions to meet so that the entity can be fed.
pause_growth_items	List		List of items that can be fed to the entity to pause growth for baby entities.
reset_growth_items	List		List of items that can be used to reset growth for baby entities.

minecraft:anger_level
Allows this entity to track anger towards a set of nuisances

Name	Type	Default Value	Description
anger_decrement_interval	Decimal	1.00	Anger level will decay over time. Defines how often anger towards all nuisances will be decreased by one
angry_boost	Positive Integer	20	Anger boost applied to angry threshold when mob gets angry
angry_threshold	Positive Integer	80	Threshold that define when the mob is considered angry at a nuisance
default_annoyingness	String	0	The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation
max_anger	Positive Integer	100	The maximum anger level that can be reached. Applies to any nuisance
nuisance_filter	Minecraft Filter		Filter that is applied to determine if a mob can be a nuisance
on_increase_sounds	Array		Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins
condition
A Molang expression describing under which conditions to play this sound, given that the entity was provoked

sound
The sound to play

remove_targets_below_angry_threshold	Boolean	true	Defines if the mob should remove target if it falls below 'angry' threshold

minecraft:angry
Defines the entity's 'angry' state using a timer.

Name	Type	Default Value	Description
angry_sound	String		The sound event to play when the mob is angry
broadcast_anger	Boolean	false	If true, other entities of the same entity definition within the broadcastRange will also become angry
broadcast_anger_on_attack	Boolean	false	If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks
broadcast_anger_on_being_attacked	Boolean	false	If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked
broadcast_anger_when_dying	Boolean	true	If false, when this mob is killed it does not spread its anger to other entities of the same entity definition within the broadcastRange
broadcast_filters	Minecraft Filter		Conditions that make this entry in the list valid
broadcast_range	Integer	20	Distance in blocks within which other entities of the same entity definition will become angry
broadcast_targets	List		A list of entity families to broadcast anger to
calm_event	String		Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry')
duration	Integer	25	The amount of time in seconds that the entity will be angry
duration_delta	Integer	0	Variance in seconds added to the duration [-delta, delta]
filters	Minecraft Filter		Filter out mob types that it should not attack while angry (other Piglins)
sound_interval	Range [a, b]	0	The range of time in seconds to randomly wait before playing the sound again

minecraft:annotation.break_door
Allows the actor to break doors assuming that that flags set up for the component to use in navigation

Name	Type	Default Value	Description
break_time	Decimal	12.0	The time in seconds required to break through doors.
min_difficulty	String	hard	The minimum difficulty that the world must be on for this entity to break doors.

minecraft:annotation.open_door
Allows the actor to open doors assuming that that flags set up for the component to use in navigation


minecraft:area_attack
A component that does damage to entities that get within range.

Name	Type	Default Value	Description
cause	String		The type of damage that is applied to entities that enter the damage range.
damage_cooldown	Decimal	0	Attack cooldown (in seconds) for how often this entity can attack a target.
damage_per_tick	Integer	2	How much damage per tick is applied to entities that enter the damage range.
damage_range	Decimal	0.2	How close a hostile entity must be to have the damage applied.
entity_filter	Minecraft Filter		The set of entities that are valid to apply the damage to when within range.
play_attack_sound	Boolean	true	If the entity should play their attack sound when attacking a target.

minecraft:attack_cooldown
Adds a cooldown to a mob. The intention of this cooldown is to be used to prevent the mob from attempting to aquire new attack targets.

Name	Type	Default Value	Description
attack_cooldown_complete_event	Trigger		Event to be run when the cooldown is complete.
attack_cooldown_time	Range [a, b]	[0.00, 1.00]	Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max).

minecraft:barter
Enables the component to drop an item as a barter exchange.

Name	Type	Default Value	Description
barter_table	String		Loot table that's used to drop a random item.
cooldown_after_being_attacked	Integer	0	Duration, in seconds, for which mob won't barter items if it was hurt

minecraft:block_climber
Allows the player to detect and maneuver on the scaffolding block.


minecraft:block_sensor
Fires off a specified event when a block in the block list is broken within the sensor range.

Name	Type	Default Value	Description
on_break	List		List of blocks to watch for being broken to fire off a specified event. If a block is in multiple lists, multiple events will fire.
sensor_radius	Decimal	16.00	The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0.
sources	List		List of sources that break the block to listen for. If none are specified, all block breaks will be detected.

minecraft:boostable
Defines the conditions and behavior of a rideable entity's boost.

Name	Type	Default Value	Description
boost_items	List		List of items that can be used to boost while riding this entity. Each item has the following properties:
Name	Type	Default Value	Description
damage	Integer	1	This is the damage that the item will take each time it is used.
item	String		Name of the item that can be used to boost.
replace_item	String		The item used to boost will become this item once it is used up.
duration	Decimal	3.00	Time in seconds for the boost.
speed_multiplier	Decimal	1.35	Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast. Requires "format_version" of 1.20 or more, otherwise the value 1.35 will be used.

minecraft:boss
The current state of the boss for updating the boss HUD.

Name	Type	Default Value	Description
hud_range	Integer	55	The max distance from the boss at which the boss's health bar is present on the players screen.
name	String		The name that will be displayed above the boss's health bar.
should_darken_sky	Boolean	false	Whether the sky should darken in the presence of the boss.

minecraft:break_blocks
Specifies the blocks that this entity can break as it moves around.

Name	Type	Default Value	Description
breakable_blocks	List		A list of the blocks that can be broken as this entity moves around

minecraft:breathable
Defines what blocks this entity can breathe in and gives them the ability to suffocate.

Name	Type	Default Value	Description
breathe_blocks	List		List of blocks this entity can breathe in, in addition to the other "breathes" parameters.
breathes_air	Boolean	true	If true, this entity can breathe in air.
breathes_lava	Boolean	true	If true, this entity can breathe in lava.
breathes_solids	Boolean	false	If true, this entity can breathe in solid blocks.
breathes_water	Boolean	false	If true, this entity can breathe in water.
generates_bubbles	Boolean	true	If true, this entity will have visible bubbles while in water.
inhale_time	Decimal	0	Time in seconds to recover breath to maximum.
non_breathe_blocks	List		List of blocks this entity can't breathe in, in addition to the other "breathes" parameters.
suffocate_time	Integer	-20	Time in seconds between suffocation damage.
total_supply	Integer	15	Time in seconds the entity can hold its breath.

minecraft:breedable
Defines the way an entity can get into the 'love' state. The entity should also have the "minecraft:offspring" component to define how the offspring is created if not using "causes_pregnancy". Runs the "minecraft:entity_born" event on the created offspring.

Name	Type	Default Value	Description
allow_sitting	Boolean	false	If true, entities can breed while sitting
breed_cooldown	Decimal	60	Time in seconds before the Entity can breed again.
breed_items	List		The list of items that can be used to get the entity into the 'love' state. Includes 'item' for the item name, and 'result_item' that defines what item the breed item will transform to upon successful interaction (Format: itemName:auxValue).
breeds_with	List		The map of entity definitions this entity can breed with to breeding events that fire on breeding.
causes_pregnancy	Boolean	false	If true, the entity will become pregnant instead of spawning a baby.
environment_requirements	List		The list of nearby block requirements to get the entity into the 'love' state.
blocks
The block types required nearby for the entity to breed.

count
The number of the required block types nearby for the entity to breed.

radius
How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.

extra_baby_chance	Decimal	0	Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%.
love_filters	Minecraft Filter		The filters to run when attempting to fall in love.
require_full_health	Boolean	false	If true, the entity needs to be at full health before it can breed.
require_tame	Boolean	true	If true, the entities need to be tamed first before they can breed.

minecraft:bribeable
Defines the way an entity can get into the 'bribed' state.

Name	Type	Default Value	Description
bribe_cooldown	Decimal	2.0	Time in seconds before the Entity can be bribed again.
bribe_items	List		The list of items that can be used to bribe the entity.

minecraft:buoyant
Enables an entity to float on the specified liquid blocks.

Name	Type	Default Value	Description
apply_gravity	Boolean	true	Applies gravity each tick. Causes "movement_type" to be more impactful, but also gravity to be applied more intensely outside liquids.
base_buoyancy	Decimal	1.0	Base buoyancy used to calculate how much will a entity float.
big_wave_probability	Decimal	0.03	Probability for a big wave hitting the entity. Only used if "movement_type" is "waves".
big_wave_speed	Decimal	10.0	Multiplier for the speed to make a big wave. Triggered depending on "big_wave_probability".
can_auto_step_from_liquid	Boolean	false	Whether the entity can move out of a liquid block to a neighboring solid block if pushed against it.
drag_down_on_buoyancy_removed	Decimal	0.0	How much an entity will be dragged down when the component is removed.
liquid_blocks	List		List of blocks this entity can float on. Must be a liquid block.
movement_type	String	waves	Type of vertical movement applied to the entity:
"waves", simulates wave movement based on the entity speed.
"bobbing", simulates waves going through.
"none", simulates waves going through.

minecraft:burns_in_daylight
.


minecraft:can_join_raid
Determines that this entity can join an existing raid.


minecraft:celebrate_hunt
Specifies hunt celebration behaviour.

Name	Type	Default Value	Description
broadcast	Boolean	true	If true, celebration will be broadcasted to other entities in the radius.
celeberation_targets	Minecraft Filter		The list of conditions that target of hunt must satisfy to initiate celebration.
celebrate_sound	String		The sound event to play when the mob is celebrating
duration	Integer	4	Duration, in seconds, of celebration
radius	Decimal	16	If broadcast is enabled, specifies the radius in which it will notify other entities for celebration.
sound_interval	Range [a, b]	0	The range of time in seconds to randomly wait before playing the sound again

minecraft:collision_box
Sets the width and height of the Entity's collision box.

Name	Type	Default Value	Description
height	Decimal	1.0	Height of the collision box in blocks. A negative value will be assumed to be 0. Min value is -100000000.000000 Max value is 100000000.000000
width	Decimal	1.0	Width of the collision box in blocks. A negative value will be assumed to be 0. Min value is -100000000.000000 Max value is 100000000.000000

minecraft:combat_regeneration
Gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target.

Name	Type	Default Value	Description
apply_to_family	Boolean	false	Determines if the mob will grant mobs of the same type combat buffs if they kill the target.
apply_to_self	Boolean	false	Determines if the mob will grant itself the combat buffs if it kills the target.
regeneration_duration	Integer	5	The duration in seconds of Regeneration I added to the mob. Can also be set to "infinite"

minecraft:conditional_bandwidth_optimization
Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.

Name	Type	Default Value	Description
conditional_values	List		The object containing the conditional bandwidth optimization values.
conditional_values
Conditions that must be met for these optimization values to be used.

max_dropped_ticks
In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.

max_optimized_distance
The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.

use_motion_prediction_hints
When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.

default_values	JSON Object		The object containing the default bandwidth optimization values.
max_dropped_ticks
In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.

max_optimized_distance
The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.

use_motion_prediction_hints
When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.


minecraft:custom_hit_test
List of hitboxes for melee and ranged hits against the entity.

Name	Type	Default Value	Description
hitboxes	Array		Comma seperated list of hitboxes.

minecraft:damage_over_time
Applies defined amount of damage to the entity at specified intervals.

Name	Type	Default Value	Description
damage_per_hurt	Integer	1	Amount of damage caused each hurt.
time_between_hurt	Decimal	0.0	Time in seconds between damage.

minecraft:damage_sensor
"Defines what events to call when this entity is damaged by specific entities or items.

Name	Type	Default Value	Description
triggers	List		List of triggers with the events to call when taking specific kinds of damage."
Name	Type	Default Value	Description
cause	String	none	Type of damage that triggers the events.
damage_modifier	Decimal	0.00	A modifier that adds/removes to the base damage received from the specified damage cause. It does not reduce damage to less than 0.
damage_multiplier	Decimal	1.00	A multiplier that modifies the base damage received from the specified damage cause. If "deals_damage" is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
deals_damage	Boolean	yes	Defines how received damage affects the entity:
\n- "yes", received damage is applied to the entity.
\n- "no", received damage is not applied to the entity.
\n- "no_but_side_effects_apply", received damage is not applied to the entity, but the side effects of the attack are. This means that the attacker's weapon loses durability, enchantment side effects are applied, and so on.
on_damage	JSON Object		Defines which entities the trigger applies to, and which, if any, event to emit when damaged.
on_damage_sound_event	String		Defines what sound to play, if any, when the "on_damage" filters are met.

minecraft:dash_action
Ability for a rideable entity to dash.

Name	Type	Default Value	Description
can_dash_underwater	Boolean	false	Whether the entity can dash underwater. Default value is false.
cooldown_time	Decimal	1.00	The dash cooldown in seconds. Default value is 1.000000.
direction	String	entity	Should the momentum be applied in the direction of the 'entity' or 'passenger'. When 'entity' is used the momentum is applied horizontally according to the direction the entity is looking, using only the entity's yaw. When 'passenger' is used the momentum will be applied in the direction the controlling passenger is looking, using the passenger's pitch and yaw.
horizontal_momentum	Decimal	1.00	Horizontal momentum of the dash.
vertical_momentum	Decimal	1.00	Vertical momentum of the dash.

minecraft:despawn
Despawns the Actor when the despawn rules or optional filters evaluate to true.

Name	Type	Default Value	Description
despawn_from_chance	Boolean	true	Determines if "min_range_random_chance" is used in the standard despawn rules
despawn_from_distance	JSON Object		Specifies if the "min_distance" and "max_distance" are used in the standard despawn rules.
Name	Type	Default Value	Description
max_distance	Integer	128	maximum distance for standard despawn rules to instantly despawn the mob.
min_distance	Integer	32	minimum distance for standard despawn rules to try to despawn the mob.
despawn_from_inactivity	Boolean	true	Determines if the "min_range_inactivity_timer" is used in the standard despawn rules.
despawn_from_simulation_edge	Boolean	true	Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules.
filters	Minecraft Filter		The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored.
min_range_inactivity_timer	Integer	30	The amount of time in seconds that the mob must be inactive.
min_range_random_chance	Integer	800	A random chance between 1 and the given value.
remove_child_entities	Boolean	false	If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.

minecraft:dimension_bound
Prevents the entity from changing dimension through portals.


minecraft:drying_out_timer
Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event'

Name	Type	Default Value	Description
dried_out_event	String		Event to fire when the drying out time runs out.
recover_after_dried_out_event	String		Event to fire when entity was already dried out but received increase in water supply.
stopped_drying_out_event	String		Event to fire when entity stopped drying out, for example got into water or under rain.
total_time	Decimal	0.0	Amount of time in seconds to dry out fully.
water_bottle_refill_time	Decimal	0.0	Optional amount of additional time in seconds given by using splash water bottle on entity.

minecraft:economy_trade_table
Defines this entity's ability to trade with players.

Name	Type	Default Value	Description
convert_trades_economy	Boolean	false	Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
cured_discount	Range [a, b]	[-25, -20]	How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.)
display_name	String		Name to be displayed while trading with this entity
hero_demand_discount	Integer	-4	Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect
max_cured_discount	Range [a, b]	[-25, -20]	The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.)
max_nearby_cured_discount	Integer	-200	The max the discount can be modified by when the player has cured a nearby Zombie Villager. Only used when use_legacy_price_formula is true, otherwise max_cured_discount (low) is used.
nearby_cured_discount	Integer	-20	How much should the discount be modified by when the player has cured a nearby Zombie Villager
new_screen	Boolean	false	Used to determine if trading with entity opens the new trade screen
persist_trades	Boolean	false	Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
show_trade_screen	Boolean	true	Show an in game trade screen when interacting with the mob.
table	String		File path relative to the resource pack root for this entity's trades
use_legacy_price_formula	Boolean	false	Determines whether the legacy formula is used to determines the trade prices.

minecraft:entity_armor_equipment_slot_mapping
It defines to which armor slot an item equipped to 'minecraft:equippable''s second slot should be equipped to. It is automatically applied to all entities for worlds with a version greater than or equal to 1.21.10. For older worlds, 'slot.armor.torso' will be used. It is strongly advised not to explicitly use this component, as no backwards compatibility for it will be provided.

Name	Type	Default Value	Description
armor_slot	String		The armor slot an item equipped to 'minecraft:equippable''s second slot should be equipped to. It defaults to 'slot.armor.torso' for entities with a format version prior to 1.21.10, and to 'slot.armor.body' otherwise.

minecraft:entity_sensor
A component that owns multiple subsensors, each one firing an event when a set of conditions are met by other entities within the defined range.

Name	Type	Default Value	Description
find_players_only	Boolean	false	Limits the search to Players only for all subsensors.
relative_range	Boolean	true	If true the subsensors' range is additive on top of the entity's size.
subsensors	List		The list of subsensors which sense for entities and emit events when all their conditions are met.
Name	Type	Default Value	Description
cooldown	Decimal	-1	How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used.
event	String		Event to fire when the conditions are met.
event_filters	Minecraft Filter		The set of conditions that must be satisfied to fire the event.
maximum_count	Integer	-1	The maximum number of entities that must pass the filter conditions for the event to send.
minimum_count	Integer	1	The minimum number of entities that must pass the filter conditions for the event to send.
range	Vector [a, b]	[10, 10]	The maximum horizontal and vertical distance another entity can be from this and have the filters checked against it.
require_all	Boolean	false	If true requires all nearby entities to pass the filter conditions for the events to send.
y_offset	Decimal	0	Vertical offset applied to the entity's position when computing the distance from other entities.

minecraft:environment_sensor
Creates a trigger based on environment conditions.

Name	Type	Default Value	Description
triggers	List		The list of triggers that fire when the environment conditions match the given filter criteria.

minecraft:equip_item
The entity puts on the desired equipment.

Name	Type	Default Value	Description
excluded_items	List		List of items that the entity should not equip.

minecraft:equippable
Defines an entity's behavior for having items equipped to it.

Name	Type	Default Value	Description
slots	List		List of slots and the item that can be equipped.
Name	Type	Default Value	Description
accepted_items	List		The list of items that can go in this slot.
interact_text	String		Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
item	String		Identifier of the item that can be equipped for this slot.
on_equip	String		Event to trigger when this entity is equipped with this item.
on_unequip	String		Event to trigger when this item is removed from this entity.
slot	Integer	0	The slot number of this slot.

minecraft:exhaustion_values
Defines how much exhaustion each player action should take.

Name	Type	Default Value	Description
attack	Decimal	0.1	Amount of exhaustion applied when attacking.
damage	Decimal	0.1	Amount of exhaustion applied when taking damage.
heal	Decimal	6	Amount of exhaustion applied when healed through food regeneration.
jump	Decimal	0.05	Amount of exhaustion applied when jumping.
lunge	Decimal	4	Amount of exhaustion applied when triggering the lunge enchantment, multiplied by the enchantment level.
mine	Decimal	0.005	Amount of exhaustion applied when mining.
sprint	Decimal	0.01	Amount of exhaustion applied when sprinting.
sprint_jump	Decimal	0.2	Amount of exhaustion applied when sprint jumping.
swim	Decimal	0.01	Amount of exhaustion applied when swimming.
walk	Decimal	0	Amount of exhaustion applied when walking.

minecraft:experience_reward
.

Name	Type	Default Value	Description
on_bred	Molang	0	A Molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total.
on_death	Molang	0	A Molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total.

minecraft:explode
Defines how the entity explodes.

Name	Type	Default Value	Description
allow_underwater	Boolean	false	If true, the explosion will affect blocks and entities under water.
breaks_blocks	Boolean	true	If true, the explosion will destroy blocks in the explosion radius.
causes_fire	Boolean	false	If true, blocks in the explosion radius will be set on fire.
damage_scaling	Decimal	1.000000	A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead.
destroy_affected_by_griefing	Boolean	false	If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
fire_affected_by_griefing	Boolean	false	If true, whether the explosion causes fire is affected by the mob griefing game rule.
fuse_length	Range [a, b]	[0.0, 0.0]	The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
fuse_lit	Boolean	false	If true, the fuse is already lit when this component is added to the entity.
knockback_scaling	Decimal	1.000000	A scale factor applied to the knockback force caused by the explosion.
max_resistance	Decimal	3.40282e+38	A blocks explosion resistance will be capped at this value when an explosion occurs.
negates_fall_damage	Boolean	false	Defines whether the explosion should apply fall damage negation to Players above the point of collision.
particle_effect	String	explosion	The name of the particle effect to use. The accepted strings are 'explosion', 'wind_burst', or 'breeze_wind_burst'.
power	Decimal	3	The radius of the explosion in blocks and the amount of damage the explosion deals.
sound_effect	String	explode	The name of the sound effect played when the explosion triggers.
toggles_blocks	Boolean	false	If true, the explosion will toggle blocks in the explosion radius.

minecraft:flocking
Allows entities to flock in groups in water or not.

Name	Type	Default Value	Description
block_distance	Decimal	0	The amount of blocks away the entity will look at to push away from.
block_weight	Decimal	0	The weight of the push back away from blocks.
breach_influence	Decimal	0	The amount of push back given to a flocker that breaches out of the water.
cohesion_threshold	Decimal	1	The threshold in which to start applying cohesion.
cohesion_weight	Decimal	1	The weight applied for the cohesion steering of the flock.
goal_weight	Decimal	0	The weight on which to apply on the goal output.
high_flock_limit	Integer	0	Determines the high bound amount of entities that can be allowed in the flock.
in_water	Boolean	false	Tells the Flocking Component if the entity exists in water.
influence_radius	Decimal	0	The area around the entity that allows others to be added to the flock.
innner_cohesion_threshold	Decimal	0	The distance in which the flocker will stop applying cohesion.
loner_chance	Decimal	0	The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points.
low_flock_limit	Integer	0	Determines the low bound amount of entities that can be allowed in the flock.
match_variants	Boolean	false	Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers.
max_height	Decimal	0	The max height allowable in the air or water.
min_height	Decimal	0	The min height allowable in the air or water.
separation_threshold	Decimal	2	The distance that is determined to be to close to another flocking and to start applying separation.
separation_weight	Decimal	1	The weight applied to the separation of the flock.
use_center_of_mass	Boolean	false	Tells the flockers that they will follow flocks based on the center of mass.

minecraft:free_camera_controlled
When configured as a rideable entity, the entity will be controlled using WASD controls and mouse to move in three dimensions.

Name	Type	Default Value	Description
backwards_movement_modifier	Decimal	0.5	Modifies speed going backwards.
strafe_speed_modifier	Decimal	0.4	Modifies the strafe speed.

minecraft:game_event_movement_tracking
Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.

Name	Type	Default Value	Description
emit_flap	Boolean	false	If true, the `flap` game event will be emitted when the entity moves through air.
emit_move	Boolean	true	If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid.
emit_swim	Boolean	true	If true, the `swim` game event will be emitted when the entity moves through a liquid.

minecraft:genetics
Defines the way a mob's genes and alleles are passed on to its offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.

Name	Type	Default Value	Description
genes	List		The list of genes that this entity has and will cross with a partner during breeding.
Name	Type	Default Value	Description
allele_range	Integer		The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them.
Name	Type	Default Value	Description
range_max	Integer	0	Upper bound of the allele values for this gene.
range_min	Integer	0	Lower bound of the allele values for this gene.
genetic_variants	List		The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
Name	Type	Default Value	Description
birth_event	String		Event to run when this mob is created and matches the allele conditions.
both_allele	Integer	-1	If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers.
either_allele	Integer	-1	If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers.
hidden_allele	Integer	-1	If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers.
main_allele	Integer	-1	If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers.
mutation_rate	Decimal	-1	If this value is non-negative, overrides the chance for this gene that an allele will be replaced with a random one instead of the parent's allele during birth. Non-negative values greater than `1` will be the same as the value `1`.
name	String		The name of the gene.
mutation_rate	Decimal	0.03125	Chance that an allele will be replaced with a random one instead of the parent's allele during birth.

minecraft:giveable
Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.

Name	Type	Default Value	Description
cooldown	Decimal	0.0	An optional cool down in seconds to prevent spamming interactions.
items	List		The list of items that can be given to the entity to place in their inventory.
on_give	String		Event to fire when the correct item is given.

minecraft:group_size
Keeps track of entity group size in the given radius.

Name	Type	Default Value	Description
filters	Minecraft Filter		The list of conditions that must be satisfied for other entities to be counted towards group size.
radius	Decimal	16	Radius from center of entity.

minecraft:grows_crop
Could increase crop growth when entity walks over crop

Name	Type	Default Value	Description
chance	Decimal	0	Value between 0-1. Chance of success per tick.
charges	Integer	10	Number of charges

minecraft:healable
Defines the interactions with this entity for healing it.

Name	Type	Default Value	Description
filters	Minecraft Filter		The filter group that defines the conditions for using this item to heal the entity.
force_use	Boolean	false	Determines if item can be used regardless of entity being at full health.
items	Array		The array of items that can be used to heal this entity.
Name	Type	Default Value	Description
heal_amount	Integer	1	The amount of health this entity gains when fed this item.
item	String		Item identifier that can be used to heal this entity.

minecraft:heartbeat
Defines the entity's heartbeat.

Name	Type	Default Value	Description
interval	Molang	1.00	A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat.
sound_event	String	heartbeat	Level sound event to be played as the heartbeat sound.

minecraft:home
Saves a home position for when the the entity is spawned.

Name	Type	Default Value	Description
home_block_list	List		Optional list of blocks that can be considered a valid home. If no such block longer exists at that position,
the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1.
restriction_radius	Integer	0	Optional radius that the entity will be restricted to in relation to its home.
restriction_type	String	none	Defines how the the entity will be restricted to its home position. The possible values are:
\n- "none", which poses no restriction.
\n- "random_movement", which restricts randomized movement to be around the home position.
\n- "all_movement", which restricts any kind of movement to be around the home position.
However, entities that somehow got too far away from their home will always be able to move closer to it, if prompted to do so.

minecraft:hurt_on_condition
Defines a set of conditions under which an entity should take damage.

Name	Type	Default Value	Description
damage_conditions	Array		List of damage conditions that when met can cause damage to the entity.
cause
The kind of damage that is caused to the entity. Various armors and spells use this to determine if the entity is immune.

Valid damage causes. An invalid value will result in the default cause of "none" being selected.
override
contact
entity_attack
projectile
suffocation
fall
fire
fire_tick
lava
drowning
block_explosion
entity_explosion
void
SelfDestruct
magic
wither
starve
anvil
thorns
falling_block
piston
magma
fireworks
charging
temperature
all
none



damage_per_tick
The amount of damage done each tick that the conditions are met.

filters
The set of conditions that must be satisfied before the entity takes the defined damage.


minecraft:inside_block_notifier
Verifies whether the entity is inside any of the listed blocks.

Name	Type	Default Value	Description
block_list	List		List of blocks, with certain block states, that we are monitoring to see if the entity is inside.

minecraft:insomnia
Adds a timer since last rested to see if phantoms should spawn.

Name	Type	Default Value	Description
days_until_insomnia	Decimal	3.0	Number of days the mob has to stay up until the insomnia effect begins.

minecraft:instant_despawn
Despawns the Actor immediately.

Name	Type	Default Value	Description
remove_child_entities	Boolean	false	If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.

minecraft:interact
Defines interactions with this entity.

Name	Type	Default Value	Description
add_items	JSON Object		Loot table with items to add to the player's inventory upon successful interaction.
Name	Type	Default Value	Description
table	String		File path, relative to the Behavior Pack's path, to the loot table file.
cooldown	Decimal	0	Time in seconds before this entity can be interacted with again.
cooldown_after_being_attacked	Decimal	0	Time in seconds before this entity can be interacted with after being attacked.
drop_item_slot	String		The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.
drop_item_y_offset	Decimal	0	Will offset the item drop position this amount in the y direction. Requires "drop_item_slot" to be specified.
equip_item_slot	String		The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.
health_amount	Integer	0	The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity.
hurt_item	Integer	0	The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability.
interact_text	String		Text to show when the player is able to interact in this way with this entity when playing with touch-screen controls.
on_interact	String		Event to fire when the interaction occurs.
particle_on_start	JSON Object		Particle effect that will be triggered at the start of the interaction.
particle_offset_towards_interactor
Whether or not the particle will appear closer to who performed the interaction.

particle_type
The type of particle that will be spawned.

particle_y_offset
Will offset the particle this amount in the y direction.

play_sounds	String		List of sounds to play when the interaction occurs.
repair_entity_item	JSON Object		Allows to repair one of the entity's items.
Name	Type	Default Value	Description
amount	Integer		How much of the item durability should be restored upon interaction.
slot	Integer		The entity's slot containing the item to be repaired. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.
spawn_entities	String		List of entities to spawn when the interaction occurs.
spawn_items	JSON Object		Loot table with items to drop on the ground upon successful interaction.
Name	Type	Default Value	Description
table	String		File path, relative to the Behavior Pack's path, to the loot table file.
y_offset	Decimal	1	Will offset the items spawn position this amount in the y direction.
swing	Boolean	true	If true, the player will do the 'swing' animation when interacting with this entity.
transform_to_item	String		The item used will transform to this item upon successful interaction. Format: itemName:auxValue
use_item	Boolean	false	If true, the interaction will use an item.
vibration	String	entity_interact	Vibration to emit when the interaction occurs. Admitted values are none (no vibration emitted), shear, entity_die, entity_act, entity_interact.

minecraft:inventory
Defines this entity's inventory properties.

Name	Type	Default Value	Description
additional_slots_per_strength	Integer	0	Number of slots that this entity can gain per extra strength
can_be_siphoned_from	Boolean	false	If true, the contents of this inventory can be removed by a hopper
container_type	String	none	Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper
inventory_size	Integer	5	Number of slots the container has
private	Boolean	false	If true, the entity will not drop its inventory on death
restrict_to_owner	Boolean	false	If true, the entity's inventory can only be accessed by its owner or itself

minecraft:item_hopper
Determines that this entity is an item hopper.


minecraft:jump.dynamic
Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob. Requires `minecraft:movement.skip` to be used.

Name	Type	Default Value	Description
fast_skip_data			The jump data used for the fast skip.
animation_duration
Duration of the jump animation.

distance_scale
The multiplier applied to horizontal velocity when jumping.

height
The force applied vertically when jumping.

jump_delay
Amount of ticks between sequential jumps.

regular_skip_data			The jump data used for the regular skip.
animation_duration
Duration of the jump animation.

distance_scale
The multiplier applied to horizontal velocity when jumping.

height
The force applied vertically when jumping.

jump_delay
Amount of ticks between sequential jumps.


minecraft:jump.static
Gives the entity the ability to jump.

Name	Type	Default Value	Description
jump_power	Decimal	0.42	The initial vertical velocity for the jump.

minecraft:leashable
Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.

Name	Type	Default Value	Description
can_be_cut	Boolean	true	If true, players can cut both incoming and outgoing leashes by using shears on the entity.
can_be_stolen	Boolean	true	If true, players can leash this entity even if it is already leashed to another entity.
on_leash	String		Event to call when this entity is leashed.
on_unleash	String		Event to call when this entity is unleashed.
on_unleash_interact_only	Boolean	false	When set to true, "on_unleash" does not trigger when the entity gets unleashed for reasons other than the player directly interacting with it.
presets	List		Defines how this entity behaves when leashed to another entity. The first preset which "filter" conditions are met will be applied; if none match, a default configuration is used instead.
Name	Type	Default Value	Description
filter	Minecraft Filter		Conditions that must be met for this preset to be applied.
hard_distance	Decimal	7	Distance (in blocks) over which the entity starts being pulled towards the leash holder with a spring-like force. Entities can enter and stay in vehicles if the leash is stretched under this distance, but will dismount once it exceeds it.
max_distance	Decimal	12	Distance in blocks at which the leash breaks.
rotation_adjustment	Decimal	0	Adjusts the rotation at which the entity reaches equilibrium, when "spring_type" is set to "dampened" or "quad_dampened".
soft_distance	Decimal	4	Distance (in blocks) over which the entity starts pathfinding toward the leash holder, if able.
spring_type	Enumerator	dampened	Defines the type of spring-like force that pulls the entity towards its leash holder:
- "bouncy": Simulates a highly elastic spring that never reaches an equilibrium if the leashed entity is suspended mid-air.
- "dampened": Simulates a dampened spring attached to the front of the leashed entity's collision. It reaches an equilibrium if the entity is suspended mid-air and aligns with the movement direction.
- "quad_dampened": Simulates four dampened springs connected to the center of each side of the entities' collisions. It reaches an equilibrium if the entity is suspended mid-air and gradually aligns with the leash holder over time.

minecraft:leashable_to
Allows players to leash entities to this entity, retrieve entities already leashed to it, or free them using shears. For the last interaction to work, the leashed entities must have "can_be_cut" set to true in their "minecraft:leashable" component.

Name	Type	Default Value	Description
can_retrieve_from	Boolean	false	Allows players to retrieve entities that are leashed to this entity.

minecraft:looked_at
Defines the behavior when another entity looks at the owner entity.

Name	Type	Default Value	Description
field_of_view	Decimal	26	Defines, in degrees, the width of the field of view for entities looking at the owner entity. If "scale_fov_by_distance" is set to true, this value corresponds to the field of view at a distance of one block between the entities.
filters	Minecraft Filter		Defines which entities are considered when searching for entities looking at the owner entity.
find_players_only	Boolean	false	Limits the search to only the nearest Player that meets the specified "filters" rather than all nearby entities.
line_of_sight_obstruction_type	String	collision	Defines the type of block shape used to check for line of sight obstructions. Valid values: "outline", "collision", "collision_for_camera".
look_at_locations	List		A list of locations on the owner entity towards which line of sight checks are performed. At least one location must be unobstructed for the entity to be considered as looked at.
looked_at_cooldown	Range [a, b]	[0, 0]	Specifies the range for the random number of seconds that must pass before the owner entity can check again for entities looking at it, after detecting an entity looking at it.
looked_at_event	String		Defines the event to trigger when an entity is detected looking at the owner entity.
min_looked_at_duration	Decimal	0	Defines the minimum, continuous time the owner entity has to be looked at before being considered as such. Defaults to 0 if not explicitly specified.
not_looked_at_event	String		Defines the event to trigger when no entity is found looking at the owner entity.
scale_fov_by_distance	Boolean	true	When true, the field of view narrows as the distance between the owner entity and the entity looking at it increases. This ensures that the width of the view cone remains somewhat constant towards the owner entity position, regardless of distance.
search_radius	Decimal	10	Maximum distance the owner entity will search for entities looking at it.
set_target	Boolean	once_and_stop_scanning	Defines if and how the owner entity will set entities that are looking at it as its combat targets. Valid values:
\n- "never", looking entities are never set as targets, but events are emitted.
\n- "once_and_stop_scanning", the first detected looking entity is set as target. Scanning and event emission is suspended if and until the owner entity has a target.
\n- "once_and_keep_scanning", the first detected looking entity is set as target. Scanning and event emission continues.s

minecraft:managed_wandering_trader
This component is used to implement part of the Wandering Trader behavior


minecraft:mob_effect
A component that applies a mob effect to entities that get within range.

Name	Type	Default Value	Description
ambient	Boolean	false	If the effect is considered an ambient effect (like the ones applied by Beacons or Conduits).
cooldown_time	Integer	0	Time in seconds to wait between each application of the effect.
effect_range	Decimal	0.2	How close a hostile entity must be to have the mob effect applied.
effect_time	Integer	10	How long the applied mob effect lasts in seconds. Can also be set to "infinite"
entity_filter	Minecraft Filter		The set of entities that are valid to apply the mob effect to.
mob_effect	String		The mob effect that is applied to entities that enter this entities effect range.

minecraft:mob_effect_immunity
Entities with this component will have an immunity to the provided mob effects.

Name	Type	Default Value	Description
mob_effects	Array		List of names of effects the entity is immune to.

minecraft:movement.amphibious
This move control allows the mob to swim in water and walk on land.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.basic
This component accents the movement of an entity.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.fly
This move control causes the mob to fly.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.generic
This move control allows a mob to fly, swim, climb, etc.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.hover
This move control causes the mob to hover.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.jump
Move control that causes the mob to jump as it moves with a specified delay between jumps.

Name	Type	Default Value	Description
jump_delay	Range [a, b]	[0.0, 0.0]	Delay after landing when using the slime move control.
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.skip
This move control causes the mob to hop as it moves.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.

minecraft:movement.sway
This move control causes the mob to sway side to side giving the impression it is swimming.

Name	Type	Default Value	Description
max_turn	Decimal	30.0	The maximum number in degrees the mob can turn per tick.
sway_amplitude	Decimal	0.05	Strength of the sway movement.
sway_frequency	Decimal	0.5	Multiplier for the frequency of the sway movement.

minecraft:nameable
Allows this entity to be named (e.g. using a name tag).

Name	Type	Default Value	Description
allow_name_tag_renaming	Boolean	true	If true, this entity can be renamed with name tags
always_show	Boolean	false	If true, the name will always be shown
default_trigger	String		Trigger to run when the entity gets named
name_actions	JSON Object		Describes the special names for this entity and the events to call when the entity acquires those names
Name	Type	Default Value	Description
name_filter	String		List of special names that will cause the events defined in 'on_named' to fire
on_named	String		Event to be called when this entity acquires the name specified in 'name_filter'

minecraft:navigation.climb
Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.float
Allows this entity to generate paths by flying around the air like the regular Ghast.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.fly
Allows this entity to generate paths in the air like the vanilla Parrots do.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.generic
Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.hover
Allows this entity to generate paths in the air like the vanilla Bees do. Keeps them from falling out of the skies and doing predictive movement.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.swim
Allows this entity to generate paths that include water.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:navigation.walk
Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.

Name	Type	Default Value	Description
avoid_damage_blocks	Boolean	false	Tells the pathfinder to avoid blocks that cause damage when finding a path
avoid_portals	Boolean	false	Tells the pathfinder to avoid portals (like nether portals) when finding a path
avoid_sun	Boolean	false	Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths
avoid_water	Boolean	false	Tells the pathfinder to avoid water when creating a path
blocks_to_avoid	List		Tells the pathfinder which blocks to avoid when creating a path
can_breach	Boolean	false	Tells the pathfinder whether or not it can jump out of water (like a dolphin)
can_break_doors	Boolean	false	Tells the pathfinder that it can path through a closed door and break it
can_jump	Boolean	true	Tells the pathfinder whether or not it can jump up blocks
can_open_doors	Boolean	false	Tells the pathfinder that it can path through a closed door assuming the AI will open the door
can_open_iron_doors	Boolean	false	Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door
can_pass_doors	Boolean	true	Whether a path can be created through a door
can_path_from_air	Boolean	false	Tells the pathfinder that it can start pathing when in the air
can_path_over_lava	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the lava
can_path_over_water	Boolean	false	Tells the pathfinder whether or not it can travel on the surface of the water
can_sink	Boolean	true	Tells the pathfinder whether or not it will be pulled down by gravity while in water
can_swim	Boolean	false	Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path
can_walk	Boolean	true	Tells the pathfinder whether or not it can walk on the ground outside water
can_walk_in_lava	Boolean	false	Tells the pathfinder whether or not it can travel in lava like walking on ground
is_amphibious	Boolean	false	Tells the pathfinder whether or not it can walk on the ground underwater

minecraft:out_of_control
Defines the entity's 'out of control' state.


minecraft:peek
Defines the entity's 'peek' behavior, defining the events that should be called during it.

Name	Type	Default Value	Description
on_close	String		Event to call when the entity is done peeking.
on_open	String		Event to call when the entity starts peeking.
on_target_open	String		Event to call when the entity's target entity starts peeking.

minecraft:persistent
Defines whether an entity should be persistent in the game world.


minecraft:physics
Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.

Name	Type	Default Value	Description
has_collision	Boolean	true	Whether or not the entity collides with things.
has_gravity	Boolean	true	Whether or not the entity is affected by gravity.
push_towards_closest_space	Boolean	false	Whether or not the entity should be pushed towards the nearest open area when stuck inside a block.

minecraft:preferred_path
Specifies costing information for mobs that prefer to walk on preferred paths.

Name	Type	Default Value	Description
default_block_cost	Decimal	0	Cost for non-preferred blocks
jump_cost	Integer	0	Added cost for jumping up a node
max_fall_blocks	Integer	3	Distance mob can fall without taking damage
preferred_path_blocks	List		A list of blocks with their associated cost

minecraft:projectile
Allows the entity to be a thrown entity.

Name	Type	Default Value	Description
angle_offset	Decimal	0	Determines the angle at which the projectile is thrown
catch_fire	Boolean	false	If true, the entity hit will be set on fire
crit_particle_on_hurt	Boolean	false	If true, the projectile will produce additional particles when a critical hit happens
destroy_on_hurt	Boolean	false	If true, this entity will be destroyed when hit
filter	String		Entity Definitions defined here can't be hurt by the projectile
fire_affected_by_griefing	Boolean	false	If true, whether the projectile causes fire is affected by the mob griefing game rule
gravity	Decimal	0.05	The gravity applied to this entity when thrown. The higher the value, the faster the entity falls
hit_nearest_passenger	Boolean	false	If true, when hitting a vehicle, and there's at least one passenger in the vehicle, the damage will be dealt to the passenger closest to the projectile impact point. If there are no passengers, this setting does nothing.
hit_sound	String		The sound that plays when the projectile hits something
homing	Boolean	false	If true, the projectile homes in to the nearest entity
ignored_entities	Array		[EXPERIMENTAL] An array of strings defining the types of entities that this entity does not collide with.
inertia	Decimal	0.99	The fraction of the projectile's speed maintained every frame while traveling in air
is_dangerous	Boolean	false	If true, the projectile will be treated as dangerous to the players
knockback	Boolean	true	If true, the projectile will knock back the entity it hits
lightning	Boolean	false	If true, the entity hit will be struck by lightning
liquid_inertia	Decimal	0.6	The fraction of the projectile's speed maintained every frame while traveling in water
multiple_targets	Boolean	true	If true, the projectile can hit multiple entities per flight
offset	Vector [a, b, c]	[0, 0, 0]	The offset from the entity's anchor where the projectile will spawn
on_fire_time	Decimal	5	Time in seconds that the entity hit will be on fire for
particle	String	iconcrack	Particle to use upon collision
potion_effect	Integer	-1	Defines the effect the arrow will apply to the entity it hits
power	Decimal	1.3	Determines the velocity of the projectile
reflect_immunity	Decimal	0	During the specified time, in seconds, the projectile cannot be reflected by hitting it
reflect_on_hurt	Boolean	false	If true, this entity will be reflected back when hit
semi_random_diff_damage	Boolean	false	If true, damage will be randomized based on damage and speed
shoot_sound	String		The sound that plays when the projectile is shot
shoot_target	Boolean	true	If true, the projectile will be shot towards the target of the entity firing it
should_bounce	Boolean	false	If true, the projectile will bounce upon hit
splash_potion	Boolean	false	If true, the projectile will be treated like a splash potion
splash_range	Decimal	4	Radius in blocks of the 'splash' effect
uncertainty_base	Decimal	0	The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier
uncertainty_multiplier	Decimal	0	Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier

minecraft:pushable_by_block
Allows the entity to be pushed by certain blocks, like Shulker Boxes and Pistons.


minecraft:pushable_by_entity
Allows an entity to be pushed by other entities.


minecraft:raid_trigger
Attempts to trigger a raid at the entity's location.

Name	Type	Default Value	Description
triggered_event	String		Event to run when a raid is triggered on the village.

minecraft:rail_movement
Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.

Name	Type	Default Value	Description
max_speed	Decimal	0.4	Maximum speed that this entity will move at when on the rail.

minecraft:rail_sensor
Name	Type	Default Value	Description
check_block_types	Boolean	false	If true, on tick this entity will trigger its on_deactivate behavior
eject_on_activate	Boolean	true	If true, this entity will eject all of its riders when it passes over an activated rail
eject_on_deactivate	Boolean	false	If true, this entity will eject all of its riders when it passes over a deactivated rail
on_activate	String		Event to call when the rail is activated
on_deactivate	String		Event to call when the rail is deactivated
tick_command_block_on_activate	Boolean	true	If true, command blocks will start ticking when passing over an activated rail
tick_command_block_on_deactivate	Boolean	false	If false, command blocks will stop ticking when passing over a deactivated rail

minecraft:ravager_blocked
Defines the ravager's response to their melee attack being blocked.

Name	Type	Default Value	Description
knockback_strength	Decimal	3.0	The strength with which blocking entities should be knocked back
reaction_choices	List	[ ]	A list of weighted responses to the melee attack being blocked

minecraft:reflect_projectiles
[EXPERIMENTAL] Allows an entity to reflect projectiles.

Name	Type	Default Value	Description
azimuth_angle	Molang	0	[EXPERIMENTAL] A Molang expression defining the angle in degrees to add to the projectile's y axis rotation.
elevation_angle	Molang	0	[EXPERIMENTAL] A Molang expression defining the angle in degrees to add to the projectile's x axis rotation.
reflected_projectiles	Array		[EXPERIMENTAL] An array of strings defining the types of projectiles that are reflected when they hit the entity.
reflection_scale	Molang	1	[EXPERIMENTAL] A Molang expression defining the velocity scaling of the reflected projectile. Values below 1 decrease the projectile's velocity, and values above 1 increase it.
reflection_sound	String	reflect	[EXPERIMENTAL] A string defining the name of the sound event to be played when a projectile is reflected. "reflect" unless specified.

minecraft:rideable
Determines whether this entity can be ridden. Allows specifying the different seat positions and amount.

Name	Type	Default Value	Description
controlling_seat	Integer	0	The seat that designates the driver of the entity. Entities with the "minecraft:behavior.controlled_by_player" goal ignore this field and give control to any player in any seat.
crouching_skip_interact	Boolean	true	If true, this entity can't be interacted with if the entity interacting with it is crouching.
dismount_mode	Enumerator	default	Defines where riders are placed when dismounting this entity:
- "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found.
- "on_top_center", riders are placed at the center of the top of the entity's collision box.
family_types	List		List of entities that can ride this entity.
interact_text	String		The text to display when the player can interact with the entity when playing with touch-screen controls.
on_rider_enter_event	String		Event to execute on the owner entity when an entity starts riding it.
on_rider_exit_event	String		Event to execute on the owner entity when an entity stops riding it.
passenger_max_width	Decimal	0.00	The max width a mob can have to be a rider. A value of 0 ignores this parameter.
priority	Integer	N/A	This field may exist in old data but isn't used by "minecraft:rideable".
pull_in_entities	Boolean	false	If true, this entity will pull entities matching the specified "family_types" into any available seats. Entities that are leashed will only be pulled in if their distance to their leash holder is less than the "hard_distance" defined in their own "minecraft:leashable" component.
rider_can_interact	Boolean	false	If true, this entity will be picked when looked at by the rider.
seat_count	Integer	1	The number of entities that can ride this entity at the same time.
seats	List		The list of positions and number of riders for each position for entities riding this entity.
Name	Type	Default Value	Description
lock_rider_rotation	Decimal	181	Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit.
max_rider_count	Integer	0	Defines the maximum number of riders that can be riding this entity for this seat to be valid.
min_rider_count	Integer	0	Defines the minimum number of riders that need to be riding this entity before this seat can be used.
position	Vector [a, b, c]	[0, 0, 0]	Position of this seat relative to this entity's position.
rotate_rider_by	Molang	0	Offset to rotate riders by.

minecraft:scale_by_age
Defines the entity's size interpolation based on the entity's age.

Name	Type	Default Value	Description
end_scale	Decimal	1	Ending scale of the entity when it's fully grown.
start_scale	Decimal	1	Initial scale of the newborn entity.

minecraft:scheduler
Fires off scheduled mob events at time of day events.

Name	Type	Default Value	Description
scheduled_events	List		The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked.

minecraft:shareables
Defines a list of items the mob wants to share. Each item must have the following parameters:

Name	Type	Default Value	Description
all_items	Boolean	false	A bucket for all other items in the game. Note this category is always least priority items.
all_items_max_amount	Integer	-1	Maximum number of this item the mob will hold.
all_items_surplus_amount	Integer	-1	Number of this item considered extra that the entity wants to share.
all_items_want_amount	Integer	-1	Number of this item this entity wants to share.
items	List		List of items or item tags that the entity wants to share. Items in-game will match to this list from top to bottom, meaning that the first occurance of a match, be it name or tag, will shadow those coming after.
admire
Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal.

barter
Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal.

consume_item
Determines whether the mob will consume the item or not.

craft_into
Defines the item this entity wants to craft with the item defined by "item". Should be an item name.

item
The name of the item. Aux value can be specified, for instance 'minecraft:skull:1'. Alternatively, a tag can be specified to match all items with that tag.

max_amount
Maximum number of this item the mob will hold.

pickup_limit
Maximum number items the mob will pick up during a single goal tick.

pickup_only
Determines whether the mob can only pickup the item and not drop it.

priority
Prioritizes which items the entity prefers. 0 is the highest priority.

stored_in_inventory
Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.

surplus_amount
Number of this item considered extra that the entity wants to share.

want_amount
Number of this item this entity wants to share.

singular_pickup	Boolean	false	Boolean value that controls if the mob is able to pick up more of the same item if it is already holding that item

minecraft:shooter
Defines the entity's ranged attack behavior. The "minecraft:behavior.ranged_attack" goal uses this component to determine which projectiles to shoot.

Name	Type	Default Value	Description
aux_val	Integer	-1	ID of the Potion effect for the default projectile to be applied on hit.
def	String		Actor definition to use as the default projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile.
magic	Boolean	false	Sets whether the projectiles being used are flagged as magic. If set, the ranged attack goal will not be used at the same time as other magic goals, such as minecraft:behavior.drink_potion
power	Decimal	0.00	Velocity in which the projectiles will be shot at. A power of 0 will be overwritten by the default projectile throw power.
projectiles	List		List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; After a projectile is chosen, the rest of the list is ignored.
sound	String		Sound that is played when the shooter shoots a projectile.

minecraft:sittable
Defines the entity's 'sit' state.

Name	Type	Default Value	Description
sit_event	String		Event to run when the entity enters the 'sit' state
stand_event	String		Event to run when the entity exits the 'sit' state

minecraft:spawn_egg_interaction
Enables interacting with this entity using its own spawn egg to spawn a born child. Runs the "minecraft:entity_born" event on the created entity as well as the defined "on_spawn" event.


minecraft:spawn_entity
Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).

Name	Type	Default Value	Description
filters	Minecraft Filter		If present, the specified entity will only spawn if the filter evaluates to true.
max_wait_time	Integer	600	Maximum amount of time to randomly wait in seconds before another entity is spawned.
min_wait_time	Integer	300	Minimum amount of time to randomly wait in seconds before another entity is spawned.
num_to_spawn	Integer	1	The number of entities of this type to spawn each time that this triggers.
should_leash	Boolean	false	If true, this the spawned entity will be leashed to the parent.
single_use	Boolean	false	If true, this component will only ever spawn the specified entity once.
spawn_entity	String		Identifier of the entity to spawn, leave empty to spawn the item defined by "spawn_item" instead.
spawn_event	String	minecraft:entity_born	Event to call on the spawned entity when it spawns.
spawn_item	String	egg	Item identifier of the item to spawn.
spawn_item_event	Trigger		Event to call on this entity when the item is spawned.
spawn_method	String	born	Method to use to spawn the entity.
spawn_sound	String	plop	Identifier of the sound effect to play when the entity is spawned.

minecraft:suspect_tracking
Allows this entity to remember suspicious locations


minecraft:tameable
Defines the rules for a mob to be tamed by the player.

Name	Type	Default Value	Description
probability	Decimal	1	The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
tame_event	String		Event to run when this entity becomes tamed
tame_items	List		The list of items that can be used to tame this entity

minecraft:tamemount
Allows the Entity to be tamed by mounting it.

Name	Type	Default Value	Description
attempt_temper_mod	Integer	5	The amount the entity's temper will increase when mounted.
autoRejectItems	JSON Object		The list of items that, if carried while interacting with the entity, will anger it.
Name	Type	Default Value	Description
item	String		Name of the item this entity dislikes and will cause it to get angry if used while untamed.
feed_items	JSON Object		The list of items that can be used to increase the entity's temper and speed up the taming process.
Name	Type	Default Value	Description
item	String		Name of the item this entity likes and can be used to increase this entity's temper.
temper_mod	Integer	0	The amount of temper this entity gains when fed this item.
feed_text	String		The text that shows in the feeding interact button.
max_temper	Integer	100	The maximum value for the entity's random starting temper.
min_temper	Integer	0	The minimum value for the entity's random starting temper.
ride_text	String		The text that shows in the riding interact button.
tame_event	String		Event that triggers when the entity becomes tamed.

minecraft:target_nearby_sensor
Defines the entity's range within which it can see or sense other entities to target them.

Name	Type	Default Value	Description
inside_range	Decimal	1	Maximum distance in blocks that another entity will be considered in the 'inside' range
must_see	Boolean	false	Whether the other entity needs to be visible to trigger 'inside' events
on_inside_range	String		Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event
on_outside_range	String		Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event
on_vision_lost_inside_range	String		Event to call when an entity exits visual range. Can specify 'event' for the name of the event and 'target' for the target of the event
outside_range	Decimal	5	Maximum distance in blocks that another entity will be considered in the 'outside' range

minecraft:teleport
Defines an entity's teleporting behavior.

Name	Type	Default Value	Description
dark_teleport_chance	Decimal	0.01	Modifies the chance that the entity will teleport if the entity is in darkness
light_teleport_chance	Decimal	0.01	Modifies the chance that the entity will teleport if the entity is in daylight
max_random_teleport_time	Decimal	20	Maximum amount of time in seconds between random teleports
min_random_teleport_time	Decimal	0	Minimum amount of time in seconds between random teleports
random_teleport_cube	Vector [a, b, c]	[32, 16, 32]	Entity will teleport to a random position within the area defined by this cube
random_teleports	Boolean	true	If true, the entity will teleport randomly
target_distance	Decimal	16	Maximum distance the entity will teleport when chasing a target
target_teleport_chance	Decimal	1	The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%

minecraft:timer
Adds a timer after which an event will fire.

Name	Type	Default Value	Description
looping	Boolean	true	If true, the timer will restart every time after it fires.
randomInterval	Boolean	true	If true, the amount of time on the timer will be random between the min and max values specified in time.
random_time_choices	List	[ ]	This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
time	Range [a, b]	[0.0, 0.0]	Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices.
time_down_event	String		Event to fire when the time on the timer runs out.

minecraft:trade_table
Defines this entity's ability to trade with players.

Name	Type	Default Value	Description
convert_trades_economy	Boolean	false	Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
display_name	String		Name to be displayed while trading with this entity.
new_screen	Boolean	false	Used to determine if trading with entity opens the new trade screen.
persist_trades	Boolean	false	Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
table	String		File path relative to the behavior pack root for this entity's trades.

minecraft:trail
Causes an entity to leave a trail of blocks as it moves about the world.

Name	Type	Default Value	Description
block_type	String	air	The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0).
spawn_filter	Minecraft Filter		One or more conditions that must be met in order to cause the chosen block type to spawn.
spawn_offset	Vector [a, b, c]	[0, 0, 0]	The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+).

minecraft:transformation
Defines an entity's transformation from the current definition into another

Name	Type	Default Value	Description
add	JSON Object		List of components to add to the entity after the transformation
Name	Type	Default Value	Description
component_groups	List		Names of component groups to add
begin_transform_sound	String		Sound to play when the transformation starts
delay	JSON Object		Defines the properties of the delay for the transformation
Name	Type	Default Value	Description
block_assist_chance	Decimal	0	Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0
block_chance	Decimal	0	Chance that, once a block is found, will help speed up the transformation
block_max	Integer	0	Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius
block_radius	Integer	0	Distance in Blocks that the entity will search for blocks that can help the transformation
block_types	List		List of blocks that can help the transformation of this entity
range_max	Decimal	0	Time in seconds to be added to value to have the maximum random time range value until the entity transforms (if non-zero then the time in seconds before the entity transforms will be random between value+range_min and value+range_max)
range_min	Decimal	0	Time in seconds to be added to value to have the minimum random time range value until the entity transforms (if non-zero then the time in seconds before the entity transforms will be random between value+range_min and value+range_max)
value	Decimal	0	Time in seconds before the entity transforms
drop_equipment	Boolean	false	Cause the entity to drop all equipment upon transformation
drop_inventory	Boolean	false	Cause the entity to drop all items in inventory upon transformation
into	String		Entity Definition that this entity will transform into
keep_level	Boolean	false	If this entity has trades and has leveled up, it should maintain that level after transformation.
keep_owner	Boolean	false	If this entity is owned by another entity, it should remain owned after transformation.
preserve_equipment	Boolean	false	Cause the entity to keep equipment after going through transformation
transformation_sound	String		Sound to play when the entity is done transforming

minecraft:transient
An entity with this component will NEVER persist, and forever disappear when unloaded.


minecraft:trusting
Defines the rules for a mob to trust players.

Name	Type	Default Value	Description
probability	Decimal	1.00	The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%.
trust_event	String		Event to run when this entity becomes trusting.
trust_items	List		The list of items that can be used to get the entity to trust players.

minecraft:underwater_mount_breathing
Pauses this entity's breathing under water.


minecraft:variable_max_auto_step
Entities with this component will have a maximum auto step height that is different depending on whether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".

Name	Type	Default Value	Description
base_value	Decimal	0.5625	The maximum auto step height when on any other block.
controlled_value	Decimal	0.5625	The maximum auto step height when on any other block and controlled by the player.
jump_prevented_value	Decimal	0.5625	The maximum auto step height when on a block that prevents jumping.

minecraft:vertical_movement_action
When configured as a rideable entity, the entity will move upwards or downwards when the player uses the jump action.

Name	Type	Default Value	Description
vertical_velocity	Decimal	0.5	Vertical velocity to apply when jump action is issued.

minecraft:vibration_damper
Vibrations emitted by this entity will be ignored.


minecraft:water_movement
Name	Type	Default Value	Description
drag_factor	Decimal	0.8	Drag factor to determine movement speed when in water.