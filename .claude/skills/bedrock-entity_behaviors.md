AI Goals
minecraft:behavior.admire_item
Enables the mob to admire items that have been configured as admirable. Must be used in combination with the admire_item component

Name	Type	Default Value	Description
admire_item_sound	String		The sound event to play when admiring the item
sound_interval	Range [a, b]	0	The range of time in seconds to randomly wait before playing the sound again.

minecraft:behavior.avoid_block (See JSON Schema since 1.21.120)
Allows this entity to avoid certain blocks.

Name	Type	Default Value	Description
avoid_block_sound	String		The sound event to play when the mob is avoiding a block.
on_escape	Array		Escape trigger.
search_height	Integer	0	Maximum distance to look for a block in y.
search_range	Integer	0	Maximum distance to look for a block in xz.
sound_interval	Range [a, b]	[3, 8]	The range of time in seconds to randomly wait before playing the sound again.
sprint_speed_modifier	Decimal	1.0	Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
target_blocks	Array		List of block types this mob avoids.
target_selection_method	String	nearest	Block search method.
tick_interval	Integer	1	Should start tick interval.
walk_speed_modifier	Decimal	1.0	Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.

minecraft:behavior.avoid_mob_type (See JSON Schema since 1.21.120)
Allows the entity to run away from other entities that meet the criteria specified.

Name	Type	Default Value	Description
avoid_mob_sound	String		The sound event to play when the mob is avoiding another mob.
avoid_target_xz	Integer	16	The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance.
avoid_target_y	Integer	7	The next target position the entity chooses to avoid another entity will be chosen within this Y Distance.
entity_types	Minecraft Filter		The list of conditions another entity must meet to be a valid target to avoid.
ignore_visibility	Boolean	false	Whether or not to ignore direct line of sight while this entity is running away from other specified entities.
max_dist	Decimal	3.0	Maximum distance to look for an avoid target for the entity.
max_flee	Decimal	10.0	How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target.
on_escape_event	Trigger		Event that is triggered when escaping from a mob.
probability_per_strength	Decimal	1.0	Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%.
remove_target	Boolean	false	Determine if we should remove target when fleeing or not.
sound_interval	Range [a, b]	[3, 8]	The range of time in seconds to randomly wait before playing the sound again.
sprint_distance	Decimal	7.0	How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target.
sprint_speed_multiplier	Decimal	1.0	Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
walk_speed_multiplier	Decimal	1.0	Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.

minecraft:behavior.barter
Enables the mob to barter for items that have been configured as barter currency. Must be used in combination with the barter component


minecraft:behavior.beg
Allows this mob to look at and follow the player that holds food they like.

Name	Type	Default Value	Description
items	List		List of items that this mob likes
look_distance	Decimal	8.0	Distance in blocks the mob will beg from
look_time	Range [a, b]	[2, 4]	The range of time in seconds this mob will stare at the player holding a food they like, begging for it

minecraft:behavior.break_door
Allows this mob to break doors.


minecraft:behavior.breed
Allows this mob to breed with other mobs.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.celebrate (See JSON Schema since 1.26.10)
Allows this entity to celebrate surviving a raid by making celebration sounds and jumping.

Name	Type	Default Value	Description
celebration_sound	String		The sound event to trigger during the celebration.
duration	Decimal	30.000000	The duration in seconds that the celebration lasts for.
jump_interval	Range [a, b]	[1, 3.5]	Minimum and maximum time between jumping (positive, in seconds).
on_celebration_end_event	Trigger		The event to trigger when the goal's duration expires.
sound_interval	Range [a, b]	[2, 7]	Minimum and maximum time between sound events (positive, in seconds).

minecraft:behavior.celebrate_survive (See JSON Schema since 1.26.10)
Allows this entity to celebrate surviving a raid by shooting fireworks.

Name	Type	Default Value	Description
duration	Decimal	30.000000	The duration in seconds that the celebration lasts for.
fireworks_interval	Range [a, b]	[10, 20]	Minimum and maximum time between firework (positive, in seconds).
on_celebration_end_event	Trigger		The event to trigger when the goal's duration expires.

minecraft:behavior.charge_attack (See JSON Schema since 1.21.100)
Allows this entity to damage a target by using a running attack.

Name	Type	Default Value	Description
max_distance	Decimal	3	A charge attack cannot start if the entity is farther than this distance to the target.
min_distance	Decimal	2	A charge attack cannot start if the entity is closer than this distance to the target.
speed_multiplier	Decimal	1	Modifies the entity's speed when charging toward the target.
success_rate	Decimal	0.1428	Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%)

minecraft:behavior.charge_held_item
Allows an entity to charge and use their held item.

Name	Type	Default Value	Description
items	Array	NA	The list of items that can be used to charge the held item. This list is required and must have at least one item in it.

minecraft:behavior.circle_around_anchor (See JSON Schema since 1.21.100)
Causes an entity to circle around an anchor point placed near a point or target.

Name	Type	Default Value	Description
angle_change	Decimal	15.0	Number of degrees to change this entity's facing by, when the entity selects its next anchor point.
goal_radius	Decimal	0.5	Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot.
height_above_target_range	Range [a, b]	[0, 0]	The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target.
height_adjustment_chance	Decimal	0.002857	Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. "height_change_chance" is deprecated and has been replaced with "height_adjustment_chance".
height_offset_range	Range [a, b]	[0, 0]	Vertical distance from the anchor point this entity must stay within, upon a successful height adjustment.
radius_adjustment_chance	Decimal	0.004	Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. "radius_change_chance" is deprecated and has been replaced with "radius_adjustment_chance".
radius_change	Decimal	1.0	The number of blocks to increase the current movement radius by, upon successful "radius_adjustment_chance". If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement..
radius_range	Range [a, b]	[5, 15]	Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment.
speed_multiplier	Decimal	1.0	Multiplies the speed at which this entity travels to its next desired position.

minecraft:behavior.controlled_by_player (See JSON Schema since 1.21.100)
Allows the entity to be controlled by the player using an item in the item_controllable property (required). Also requires the minecraft:movement property, and the minecraft:rideable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.

Name	Type	Default Value	Description
fractional_rotation	Decimal	0.5	The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing.
fractional_rotation_limit	Decimal	5.0	Limits the total degrees the entity can rotate to face where the player is facing on each tick.
mount_speed_multiplier	Decimal	1.0	Speed multiplier of mount when controlled by player.

minecraft:behavior.croak
Allows the entity to croak at a random time interval with configurable conditions.

Name	Type	Default Value	Description
duration	Range [a, b]	[4.5, 4.5]	Random range in seconds after which the croaking stops. Can also be a constant.
filters	Minecraft Filter		Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters.
interval	Range [a, b]	[10, 20]	Random range in seconds between runs of this behavior. Can also be a constant.

minecraft:behavior.defend_trusted_target
Allows the mob to target another mob that hurts an entity it trusts.

Name	Type	Default Value	Description
aggro_sound	String		Sound to occasionally play while defending.
attack_interval	Integer	0	Time in seconds between attacks
entity_types	JSON Object		List of entity types that this mob considers valid targets
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
must_see	Boolean	false	If true, only entities in this mob's viewing range can be selected as targets
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
within_radius	Decimal	0.0	Distance in blocks that the target can be within to launch an attack

minecraft:behavior.defend_village_target (See JSON Schema since 1.26.0)
Allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village this goal will cause the entity to attack the player regardless of filter conditions.

Name	Type	Default Value	Description
attack_chance	Decimal	0.05	The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%.
attack_owner	Boolean	false	If true, this entity can attack its owner.
entity_types	Minecraft Filter		Filters which types of targets are valid for this entity.
must_reach	Boolean	false	If true, this entity requires a path to the target.
must_see	Boolean	false	Determines if target-validity requires this entity to be in range only, or both in range and in sight.
must_see_forget_duration	Decimal	3.0	Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true.
persist_time	Decimal	0.0	Time (in seconds) this entity can continue attacking the target after the target is no longer valid.
within_radius	Decimal	0.0	Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range".

minecraft:behavior.delayed_attack (See JSON Schema since 1.26.0)
Allows an entity to attack, while also delaying the damage-dealt until a specific time in the attack animation.

Name	Type	Default Value	Description
attack_duration	Decimal	0.75	The entity's attack animation will play out over this duration (in seconds). Also controls attack cooldown.
attack_once	Boolean	false	Allows the entity to use this attack behavior, only once EVER.
attack_types	String	N/A	Defines the entity types this entity will attack.
can_spread_on_fire	Boolean	false	If the entity is on fire, this allows the entity's target to catch on fire after being hit.
hit_delay_pct	Decimal	0.5	The percentage into the attack animation to apply the damage of the attack (1.0 = 100%).
inner_boundary_time_increase	Decimal	0.25	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
max_path_time	Decimal	0.55	Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
melee_fov	Decimal	90	Field of view (in degrees) when using the sensing component to detect an attack target.
min_path_time	Decimal	0.2	Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
on_attack	Trigger	N/A	Defines the event to trigger when this entity successfully attacks.
on_kill	Trigger	N/A	Defines the event to trigger when this entity kills the target.
outer_boundary_time_increase	Decimal	0.5	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
path_fail_time_increase	Decimal	0.75	Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
path_inner_boundary	Decimal	16	Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
path_outer_boundary	Decimal	32	Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
random_stop_interval	Integer	0	This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
reach_multiplier	Decimal	1.5	Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
require_complete_path	Boolean	false	Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
speed_multiplier	Decimal	1	This multiplier modifies the attacking entity's speed when moving toward the target.
track_target	Boolean	true	Allows the entity to track the attack target, even if the entity has no sensing.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.dig (See JSON Schema since 1.21.120)
Allows this entity to dig into the ground before despawning.

Name	Type	Default Value	Description
allow_dig_when_named	Boolean	false	If true, this behavior can run when this entity is named. Otherwise not.
digs_in_daylight	Boolean	false	Indicates that the actor should start digging when it sees daylight
duration	Decimal	0.0	Goal duration in seconds
idle_time	Decimal	0.0	The minimum idle time in seconds between the last detected disturbance to the start of digging.
on_start	Trigger		Event(s) to run when the goal starts.
suspicion_is_disturbance	Boolean	false	If true, finding new suspicious locations count as disturbances that may delay the start of this goal.
vibration_is_disturbance	Boolean	false	If true, vibrations count as disturbances that may delay the start of this goal.

minecraft:behavior.door_interact
Allows the mob to open and close doors.


minecraft:behavior.dragonchargeplayer (See JSON Schema since 1.26.0)
Allows this entity to attack a player by charging at them. The player is chosen by the "minecraft:behavior.dragonscanning". Can only be used by the Ender Dragon.

Name	Type	Default Value	Description
active_speed	Decimal	3	The speed this entity moves when this behavior has started or while it's active.
continue_charge_threshold_time	Decimal	0.5	If the dragon is outside the "target_zone" for longer than "continue_charge_threshold_time" seconds, the charge is canceled.
flight_speed	Decimal	0.6	The speed this entity moves while this behavior is not active.
target_zone	Range [a, b]	[10, 150]	Minimum and maximum distance, from the target, this entity can use this behavior.
turn_speed	Decimal	0.7	The speed at which this entity turns while using this behavior.

minecraft:behavior.dragondeath
Allows the dragon to go out with glory. This controls the Ender Dragon's death animation and can't be used by other mobs.


minecraft:behavior.dragonflaming (See JSON Schema since 1.21.100)
Allows this entity to use a flame-breath attack. Can only be used by the Ender Dragon.

Name	Type	Default Value	Description
cooldown_time	Decimal	10	Time (in seconds) between each start of the cycle to roar, then breath flame.
flame_time	Decimal	0.5	Time (in seconds), after roar, to breath flame.
ground_flame_count	Integer	4	Number of ground flame-breath attacks to use before flight-takeoff.
roar_time	Decimal	2	Time (in seconds) to roar, before breathing flame.

minecraft:behavior.dragonholdingpattern
Allows the Dragon to fly around in a circle around the center podium. Can only be used by the Ender Dragon.


minecraft:behavior.dragonlanding
Allows the Dragon to stop flying and transition into perching mode. Can only be used by the Ender Dragon.


minecraft:behavior.dragonscanning
Allows the dragon to look around for a player to attack while in perch mode. Can only be used by the Ender Dragon.


minecraft:behavior.dragonstrafeplayer (See JSON Schema since 1.26.0)
Allows this entity to fly around looking for a player to shoot fireballs at. Can only be used by the Ender Dragon.

Name	Type	Default Value	Description
active_speed	Decimal	0.6	The speed this entity moves when this behavior has started or while it's active.
fireball_range	Decimal	64	Maximum distance of this entity's fireball attack while strafing.
flight_speed	Decimal	0.6	The speed this entity moves while this behavior is not active.
switch_direction_probability	Decimal	0.125	Percent chance to to switch this entity's strafe direction between clockwise and counterclockwise. Switch direction chance occurs each time a new target is chosen (1.0 = 100%).
target_in_range_and_in_view_time	Decimal	0.25	Time (in seconds) the target must be in fireball range, and in view [ie, no solid terrain in-between the target and this entity], before a fireball can be shot.
target_zone	Range [a, b]	[10, 150]	Minimum and maximum distance, from the target, this entity can use this behavior.
turn_speed	Decimal	0.7	The speed at which this entity turns while using this behavior.
view_angle	Decimal	10	The target must be within "view_angle" degrees of the dragon's current rotation before a fireball can be shot.

minecraft:behavior.dragontakeoff
Allows the dragon to leave perch mode and go back to flying around. Can only be used by the Ender Dragon.


minecraft:behavior.drink_milk (See JSON Schema since 1.21.120)
Allows the mob to drink milk based on specified environment conditions.

Name	Type	Default Value	Description
cooldown_seconds	Decimal	5.00	Time (in seconds) that the goal is on cooldown before it can be used again.
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.

minecraft:behavior.drink_potion
Allows the mob to drink potions based on specified environment conditions.

Name	Type	Default Value	Description
potions	List		A list of potions that this entity can drink. Each potion entry has the following parameters:
Name	Type	Default Value	Description
chance	Decimal	1.0	The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use.
filters	Minecraft Filter		The filters to use when determining if this potion can be selected.
id	Integer	-1	The registry ID of the potion to use
speed_modifier	Decimal	0.0	The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed.

minecraft:behavior.drop_item_for (See JSON Schema since 1.26.10)
Allows the entity to move toward a target, and drop an item near the target. This goal requires a "minecraft:navigation" to execute.

Name	Type	Default Value	Description
cooldown	Decimal	0.2	Total time that the goal is on cooldown before it can be used again.
drop_item_chance	Decimal	1.0	The percent chance the entity will drop an item when using this goal.
entity_types	Minecraft Filter		The list of conditions another entity must meet to be a valid target to drop an item for.
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
loot_table	String		The loot table that contains the possible loot the entity can drop with this goal.
max_head_look_at_height	Decimal	10.0	The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target.
minimum_teleport_distance	Decimal	2.0	If the target position is farther away than this distance on any tick, the entity will teleport to the target position.
offering_distance	Decimal	1.0	The preferred distance the entity tries to be from the target it is dropping an item for.
on_drop_attempt	Trigger		The event to trigger when the entity attempts to drop an item.
search_count	Integer	0	The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
search_height	Integer	1	The height in blocks the entity will search within to find a valid target position.
search_range	Integer	0	The distance in blocks the entity will search within to find a valid target position.
seconds_before_pickup	Decimal	0.0	The numbers of seconds that will pass before the dropped entity can be picked up from the ground.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this goal.
target_range	Vector [a, b, c]	[1, 1, 1]	The range in blocks within which the entity searches to find a target to drop an item for.
teleport_offset	Vector [a, b, c]	[0, 1, 0]	When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate.
time_of_day_range	Range [a, b]	[0, 1]	The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0.

minecraft:behavior.eat_block
Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.

Name	Type	Default Value	Description
eat_and_replace_block_pairs	Array	N/A	A collection of pairs of blocks; the first ("eat_block")is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block.
on_eat	Trigger	N/A	The event to trigger when the block eating animation has completed.
success_chance	Molang	0.02	A molang expression defining the success chance the entity has to consume a block.
time_until_eat	Decimal	1.8	The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt.

minecraft:behavior.eat_carried_item
If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.

Name	Type	Default Value	Description
delay_before_eating	Decimal		Time in seconds the mob should wait before eating the item.

minecraft:behavior.eat_mob (See JSON Schema since 1.21.100)
Allows the entity to eat a specified Mob.

Name	Type	Default Value	Description
eat_animation_time	Decimal	1.000000	Sets the time in seconds the eat animation should play for.
eat_mob_sound	String		Sets the sound that should play when eating a mob.
loot_table	String		The loot table for loot to be dropped when eating a mob.
pull_in_force	Decimal	1.000000	Sets the force which the mob-to-be-eaten is pulled towards the eating mob.
reach_mob_distance	Decimal	1.000000	Sets the desired distance to be reached before eating the mob.
run_speed	Decimal	1.000000	Sets the entity's speed when running toward the target.

minecraft:behavior.emerge
Allows this entity to emerge from the ground

Name	Type	Default Value	Description
cooldown_time	Decimal	0.50	Time in seconds the mob has to wait before using the goal again
duration	Decimal	5.00	Goal duration in seconds
on_done	Trigger		Trigger to be executed when the goal execution is about to end

minecraft:behavior.enderman_leave_block
Allows the enderman to drop a block they are carrying. Can only be used by Endermen.


minecraft:behavior.enderman_take_block
Allows the enderman to take a block and carry it around. Can only be used by Endermen.


minecraft:behavior.equip_item
The entity puts on the desired equipment.


minecraft:behavior.explore_outskirts (See JSON Schema since 1.21.130)
Allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance. This goal requires "minecraft:dweller" and "minecraft:navigation" to execute.

Name	Type	Default Value	Description
dist_from_boundary	Vector [a, b, c]	[5, 0, 5]	The distance from the boundary the villager must be within in to explore the outskirts.
explore_dist	Decimal	5.00	Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point.
max_travel_time	Decimal	60.0	This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits.
max_wait_time	Decimal	0.0	The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops.
min_dist_from_target	Decimal	2.2	The entity must be within this distance for it to consider it has successfully reached its target.
min_perimeter	Decimal	1.0	The minimum perimeter of the village required to run this goal.
min_wait_time	Decimal	3.0	The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time.
next_xz	Integer	5	A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed.
next_y	Integer	3	A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed.
speed_multiplier	Decimal	1.0	The multiplier for speed while using this goal. 1.0 maintains the speed.
timer_ratio	Decimal	2.0	Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs.

minecraft:behavior.fertilize_farm_block (See JSON Schema since 1.26.10)
Allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.

Name	Type	Default Value	Description
goal_radius	Decimal	1.5	Distance in blocks within the mob considers it has reached it's target position.
max_fertilizer_usage	Integer	1	The maximum number of times the mob will use fertilzer on the target block.
search_cooldown_max_seconds	Decimal	8.0	The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number.
search_count	Integer	9	The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
search_height	Integer	1	The height in blocks the mob will search within to find a valid target position.
search_range	Integer	1	The distance in blocks the mob will search within to find a valid target position.
speed_multiplier	Decimal	0.5	Movement speed multiplier of the mob when using this goal.

minecraft:behavior.find_cover
Allows the mob to seek shade.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.find_mount
Allows the mob to look around for another mob to ride atop it.

Name	Type	Default Value	Description
avoid_water	Boolean	false	If true, the mob will not go into water blocks when going towards a mount
mount_distance	Decimal	-1.0	This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance
start_delay	Integer	0	Time the mob will wait before starting to move towards the mount
target_needed	Boolean	false	If true, the mob will only look for a mount if it has a target
within_radius	Decimal	0.0	Distance in blocks within which the mob will look for a mount

minecraft:behavior.find_underwater_treasure
Allows the mob to move towards the nearest underwater ruin or shipwreck.

Name	Type	Default Value	Description
search_range	Integer	0	The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
stop_distance	Decimal	2	The distance the mob will move before stopping.

minecraft:behavior.fire_at_target
Allows an entity to attack by firing a shot with a delay. Anchor and offset parameters of this component overrides the anchor and offset from projectile component.

Name	Type	Default Value	Description
attack_cooldown	Decimal	0.500000	The cooldown time in seconds before this goal can be used again.
attack_range	Range [a, b]	[2.000000, 16.000000]	Target needs to be within this range for the attack to happen.
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
max_head_rotation_x	Decimal	30.000000	Maximum head rotation (in degrees), on the X-axis, that this entity can apply while trying to look at the target.
max_head_rotation_y	Decimal	30.000000	Maximum head rotation (in degrees), on the Y-axis, that this entity can apply while trying to look at the target.
owner_anchor	Integer	2	Entity anchor for the projectile spawn location.
owner_offset	Vector [a, b, c]	[0.000, 0.000, 0.000]	Offset vector from the owner_anchor.
post_shoot_delay	Decimal	0.200000	Time in seconds between firing the projectile and ending the goal.
pre_shoot_delay	Decimal	0.750000	Time in seconds before firing the projectile.
projectile_def	String		Actor definition to use as projectile for the ranged attack. The actor must be a projectile. This field is required for the goal to be usable.
ranged_fov	Decimal	90.000000	Field of view (in degrees) when using sensing to detect a target for attack.
target_anchor	Integer	2	Entity anchor for projectile target.
target_offset	Vector [a, b, c]	[0.000, 0.000, 0.000]	Offset vector from the target_anchor.

minecraft:behavior.flee_sun
Allows the mob to run away from direct sunlight and seek shade.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.float
Allows the mob to stay afloat while swimming. Passengers will be kicked out the moment the mob's head goes underwater, which may not happen for tall mobs.

Name	Type	Default Value	Description
chance_per_tick_to_float	Decimal	0.8	The chance per tick to cause an upward impulse.
sink_with_passengers	Boolean	false	If true, the mob will keep sinking as long as it has passengers.
time_under_water_to_dismount_passengers	Decimal	0.0	Time in seconds that a floating vehicles head can be underwater before it causes its passengers to dismount.

minecraft:behavior.float_tempt
Allows a mob to be tempted by a player holding a specific item. Uses point-to-point movement. Designed for mobs that are floating (e.g. use the "minecraft:navigation.float" component).

Name	Type	Default Value	Description
can_get_scared	Boolean	false	If true, the mob can stop being tempted if the player moves too fast while close to this mob.
can_tempt_vertically	Boolean	false	If true, vertical distance to the player will be considered when tempting.
can_tempt_while_ridden	Boolean	false	If true, the mob can be tempted even if it has a passenger (i.e. if being ridden).
items	Array	[]	List of items that can tempt the mob.
sound_interval	Range [a, b]	[0.0, 0.0]	Range of random ticks to wait between tempt sounds.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
stop_distance	Decimal	1.5	The distance at which the mob will stop following the player.
tempt_sound	String		Sound to play while the mob is being tempted.
within_radius	Decimal	0.0	Distance in blocks this mob can get tempted by a player holding an item they like.

minecraft:behavior.float_wander
Allows the mob to float around like the Ghast.

Name	Type	Default Value	Description
additional_collision_buffer	Boolean	false	If true, the mob will have an additional buffer zone around it to avoid collisions with blocks when picking a position to wander to.
allow_navigating_through_liquids	Boolean	false	If true allows the mob to navigate through liquids on its way to the target position.
float_duration	Range [a, b]	[0.0, 0.0]	Range of time in seconds the mob will float around before landing and choosing to do something else
float_wander_has_move_control	Boolean	true	If true, the MoveControl flag will be added to the behavior which means that it can no longer be active at the same time as other behaviors with MoveControl.
must_reach	Boolean	false	If true, the point has to be reachable to be a valid target
navigate_around_surface	Boolean	false	If true, will prioritize finding random positions in the vicinity of surfaces, i.e. blocks that are not Air or Liquid.
random_reselect	Boolean	false	If true, the mob will randomly pick a new point while moving to the previously selected one
surface_xz_dist	Integer	0	The horizontal distance in blocks that the goal will check for a surface from a candidate position. Only valid when `navigate_around_surface` is true.
surface_y_dist	Integer	0	The vertical distance in blocks that the goal will check for a surface from a candidate position. Only valid when `navigate_around_surface` is true.
use_home_position_restriction	Boolean	true	If true, the mob will respect home position restrictions when choosing new target positions. If false, it will choose target position without considering home restrictions
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
y_offset	Decimal	0.0	Height in blocks to add to the selected target position

minecraft:behavior.follow_caravan
Allows the mob to follow mobs that are in a caravan.

Name	Type	Default Value	Description
entity_count	Integer	1	Number of entities that can be in the caravan
entity_types	JSON Object		List of entity types that this mob can follow in a caravan
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.follow_mob
Allows the mob to follow other mobs.

Name	Type	Default Value	Description
filters	Minecraft Filter		If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal.
preferred_actor_type	String		The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen.
search_range	Integer	0	The distance in blocks it will look for a mob to follow
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
stop_distance	Decimal	2	The distance in blocks this mob stops from the mob it is following
use_home_position_restriction	Boolean	true	If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions.

minecraft:behavior.follow_owner
Allows a mob to follow the player that owns it.

Name	Type	Default Value	Description
can_teleport	Boolean	true	Defines if the mob will teleport to its owner when too far away.
ignore_vibration	Boolean	true	Defines if the mob should disregard following its owner after detecting a recent vibration.
max_distance	Decimal	60.0	The maximum distance the mob can be from its owner to start following it. Applicable only when "can_teleport" is set to false.
post_teleport_distance	Boolean	"stop_distance" + 1	Defines how far (in blocks) the entity will be from its owner after teleporting. If not specified, it defaults to "stop_distance" + 1, allowing the entity to seamlessly resume navigation.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
start_distance	Decimal	10.0	The minimum distance the mob must be from its owner to start following it.
stop_distance	Decimal	2	The distance at which the mob will stop following its owner.

minecraft:behavior.follow_parent
Allows the mob to follow their parent around.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.follow_target_captain
Allows mob to move towards its current target captain.

Name	Type	Default Value	Description
follow_distance	Decimal	0.0	Defines the distance in blocks the mob will stay from its target while following.
within_radius	Decimal	0.0	Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it.

minecraft:behavior.go_and_give_items_to_noteblock
The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.

Name	Type	Default Value	Description
listen_time	Integer	30	Sets the time an entity should continue delivering items to a noteblock after hearing it.
on_item_throw	Array		Event(s) to run when this mob throws items.
reach_block_distance	Decimal	3.000000	Sets the desired distance to be reached before throwing the items towards the block.
run_speed	Decimal	1.000000	Sets the entity's speed when running toward the block.
throw_force	Decimal	0.200000	Sets the throw force.
throw_sound	String		Sound to play when this mob throws an item.
vertical_throw_mul	Decimal	1.500000	Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction.

minecraft:behavior.go_and_give_items_to_owner
The entity will attempt to toss the items from its inventory to its owner.

Name	Type	Default Value	Description
on_item_throw	Array		Event(s) to run when this mob throws items.
reach_mob_distance	Decimal	3.000000	Sets the desired distance to be reached before giving items to owner.
run_speed	Decimal	1.000000	Sets the entity's speed when running toward the owner.
throw_force	Decimal	0.200000	Sets the throw force.
throw_sound	String	item_thrown	Sound to play when this mob throws an item.
vertical_throw_mul	Decimal	1.500000	Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction.

minecraft:behavior.go_home
Allows the mob to move back to the position they were spawned.

Name	Type	Default Value	Description
calculate_new_path_radius	Decimal	2.00	Distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home.
goal_radius	Decimal	0.50	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
on_failed	Array		Event(s) to run when this goal fails.
on_home	Array		Event(s) to run when this mob gets home.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal.

minecraft:behavior.guardian_attack (See JSON Schema since 1.26.0)
Allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.

Name	Type	Default Value	Description
elder_extra_magic_damage	Integer	2	Amount of additional damage dealt from an elder guardian's magic attack.
hard_mode_extra_magic_damage	Integer	2	In hard difficulty, amount of additional damage dealt from a guardian's magic attack.
magic_damage	Integer	1	Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage.
min_distance	Decimal	3	Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders).
sound_delay_time	Decimal	0.5	Time (in seconds) to wait after starting an attack before playing the guardian attack sound.
x_max_rotation	Decimal	90	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	90	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.harvest_farm_block (See JSON Schema since 1.26.10)
Allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires "minecraft:inventory" and "minecraft:navigation" to execute. This goal will not execute if the entity does not have an item in its inventory.

Name	Type	Default Value	Description
goal_radius	Decimal	1.5	Distance in blocks within the entity considers it has reached it's target position.
max_seconds_before_search	Decimal	1.0	The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number.
search_cooldown_max_seconds	Decimal	8.0	The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number.
search_count	Integer	0	The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
search_height	Integer	1	The height in blocks the entity will search within to find a valid target position.
search_range	Integer	16	The distance in blocks the entity will search within to find a valid target position.
seconds_until_new_task	Decimal	0.5	The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again.
speed_multiplier	Decimal	0.5	Movement speed multiplier of the mob when using this goal.

minecraft:behavior.hide
Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.

Name	Type	Default Value	Description
duration	Decimal	1.0	Amount of time in seconds that the mob reacts.
poi_type	String		Defines what POI type to hide at.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
timeout_cooldown	Decimal	8.0	The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.

minecraft:behavior.hold_ground
The mob freezes and looks at the mob they are targeting.

Name	Type	Default Value	Description
broadcast	Boolean	false	Whether to broadcast out the mob's target to other mobs of the same type.
broadcast_range	Decimal	0.0f	Range in blocks for how far to broadcast.
min_radius	Decimal	10.0f	Minimum distance the target must be for the mob to run this goal.
within_radius_event	String		Event to run when target is within the radius. This event is broadcasted if broadcast is true.

minecraft:behavior.hurt_by_target
Allows the mob to target another mob that hurts them.

Name	Type	Default Value	Description
alert_same_type	Boolean	false	If true, nearby mobs of the same type will be alerted about the damage
entity_types	JSON Object		List of entity types that this mob can target when hurt by them
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
hurt_owner	Boolean	false	If true, the mob will hurt its owner and other mobs with the same owner as itself

minecraft:behavior.inspect_bookshelf
Allows the mob to inspect bookshelves.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_count	Integer	10	The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
search_height	Integer	1	The height that the mob will search for bookshelves
search_range	Integer	0	Distance in blocks the mob will look for books to inspect
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.investigate_suspicious_location (See JSON Schema since 1.21.130)
Allows this entity to move towards a "suspicious" position based on data gathered in minecraft:suspect_tracking

Name	Type	Default Value	Description
goal_radius	Decimal	1.5	Distance in blocks within the entity considers it has reached it's target position.
speed_multiplier	Decimal	1	Movement speed multiplier

minecraft:behavior.jump_around_target
Allows an entity to jump around a target.

Name	Type	Default Value	Description
check_collision	Boolean	false	Enables collision checks when calculating the jump. Setting check_collision to true may affect performance and should be used with care.
entity_bounding_box_scale	Decimal	0.700000	Scaling temporarily applied to the entity's AABB bounds when jumping. A smaller bounding box reduces the risk of collisions during the jump. When check_collision is true it also increases the chance of being able to jump when close to obstacles.
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
jump_angles	Array	[ 40.0, 55.0, 60.0, 75.0, 80.0 ]	The jump angles in float degrees that are allowed when performing the jump. The order in which the angles are chosen is randomized.
jump_cooldown_duration	Decimal	0.500000	The time in seconds to spend in cooldown before this goal can be used again.
jump_cooldown_when_hurt_duration	Decimal	0.100000	The time in seconds to spend in cooldown after being hurt before this goal can be used again.
landing_distance_from_target	Range [a, b]	[4.000000, 8.000000]	The range deciding how close to and how far away from the target the landing position can be when jumping.
landing_position_spread_degrees	Integer	90	This angle (in degrees) is used for controlling the spread when picking a landing position behind the target. A zero spread angle means the landing position will be straight behind the target with no variance. A 90 degree spread angle means the landing position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.
last_hurt_duration	Decimal	2.000000	If the entity was hurt within these last seconds, the jump_cooldown_when_hurt_duration will be used instead of jump_cooldown_duration.
line_of_sight_obstruction_height_ignore	Integer	4	If the entity's line of sight towards its target is obstructed by an obstacle with a height below this number, the obstacle will be ignored, and the goal will try to find a valid landing position.
max_jump_velocity	Decimal	1.400000	Maximum velocity a jump can be performed at.
prepare_jump_duration	Decimal	0.500000	The time in seconds to spend preparing for the jump.
required_vertical_space	Integer	4	The number of blocks above the entity's head that has to be air for this goal to be usable.
snap_to_surface_block_range	Integer	10	The number of blocks above and below from the jump target position that will be checked to find a surface to land on.
valid_distance_to_target	Range [a, b]	[4.000000, 20.000000]	Target needs to be within this range for the jump to happen.

minecraft:behavior.jump_to_block
Allows an entity to jump to another random block.

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[10, 20]	Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump.
forbidden_blocks	Array		Blocks that the mob can't jump to.
max_velocity	Decimal	1.500000	The maximum velocity with which the mob can jump.
minimum_distance	Integer	2	The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it.
minimum_path_length	Integer	5	The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it.
preferred_blocks	Array		Blocks that the mob prefers jumping to.
preferred_blocks_chance	Decimal	1.000000	Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined.
scale_factor	Decimal	0.700000	The scalefactor of the bounding box of the mob while it is jumping.
search_height	Integer	10	The height (in blocks, in range [2, 15]) of the search box, centered around the mob.
search_width	Integer	8	The width (in blocks, in range [2, 15]) of the search box, centered around the mob.

minecraft:behavior.knockback_roar
Allows the mob to perform a damaging knockback that affects all nearby entities.

Name	Type	Default Value	Description
attack_time	Decimal	0.5	The delay after which the knockback occurs (in seconds).
cooldown_time	Decimal	0.10	Time (in seconds) the mob has to wait before using the goal again.
damage_filters	Minecraft Filter		The list of conditions another entity must meet to be a valid target to apply damage to.
duration	Decimal	1.0	The max duration of the roar (in seconds).
knockback_damage	Integer	6	The damage dealt by the knockback roar.
knockback_filters	Minecraft Filter		The list of conditions another entity must meet to be a valid target to apply knockback to.
knockback_height_cap	Decimal	0.40	The maximum height for vertical knockback.
knockback_horizontal_strength	Integer	4	The strength of the horizontal knockback.
knockback_range	Integer	4	The radius (in blocks) of the knockback effect.
knockback_vertical_strength	Integer	4	The strength of the vertical knockback.
on_roar_end	Trigger		Event that is triggered when the roar ends.

minecraft:behavior.lay_down
Allows mobs to lay down at times

Name	Type	Default Value	Description
interval	Integer	120	A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal
random_stop_interval	Integer	120	a random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound

minecraft:behavior.lay_egg
Allows the mob to lay an egg block on certain types of blocks if the mob is pregnant.

Name	Type	Default Value	Description
allow_laying_from_below	Boolean	false	Allows the mob to lay its eggs from below the target if it can't get there. This is useful if the target block is water with air above, since mobs may not be able to get to the air block above water.
egg_type	String	minecraft:turtle_egg	Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set.
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
lay_egg_sound	String	lay_egg	Name of the sound event played when laying the egg. Defaults to lay_egg, which is used for Turtles.
lay_seconds	Decimal	10.0f	Duration of the laying egg process in seconds.
on_lay	Trigger		Event to run when this mob lays the egg.
search_height	Integer	1	Height in blocks the mob will look for a target block to move towards
search_range	Integer	0	The distance in blocks it will look for a target block to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
target_blocks	Array	[ minecraft:sand ]	Blocks that the mob can lay its eggs on top of.
target_materials_above_block	Array	[ Air ]	Types of materials that can exist above the target block. Valid types are Air, Water, and Lava.
use_default_animation	Boolean	true	Specifies if the default lay-egg animation should be played when the egg is placed or not.

minecraft:behavior.leap_at_target
Allows monsters to jump at and attack their target. Can only be used by hostile mobs.

Name	Type	Default Value	Description
must_be_on_ground	Boolean	true	If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
yd	Decimal	0.0	The height in blocks the mob jumps when leaping at its target

minecraft:behavior.make_love
Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers.


minecraft:behavior.melee_attack (See JSON Schema since 1.26.0)
Allows an entity to deal damage through a melee attack.

Name	Type	Default Value	Description
attack_once	Boolean	false	Allows the entity to use this attack behavior, only once EVER.
attack_types	String	N/A	Defines the entity types this entity will attack.
can_spread_on_fire	Boolean	false	If the entity is on fire, this allows the entity's target to catch on fire after being hit.
cooldown_time	Decimal	1	Cooldown time (in seconds) between attacks.
inner_boundary_time_increase	Decimal	0.25	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
max_path_time	Decimal	0.55	Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
melee_fov	Decimal	90	Field of view (in degrees) when using the sensing component to detect an attack target.
min_path_time	Decimal	0.2	Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
on_attack	Trigger	N/A	Defines the event to trigger when this entity successfully attacks.
on_kill	Trigger	N/A	Defines the event to trigger when this entity kills the target.
outer_boundary_time_increase	Decimal	0.5	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
path_fail_time_increase	Decimal	0.75	Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
path_inner_boundary	Decimal	16	Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
path_outer_boundary	Decimal	32	Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
random_stop_interval	Integer	0	This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
reach_multiplier	Decimal	2	Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
require_complete_path	Boolean	false	Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
speed_multiplier	Decimal	1	This multiplier modifies the attacking entity's speed when moving toward the target.
track_target	Boolean	false	Allows the entity to track the attack target, even if the entity has no sensing.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.melee_box_attack (See JSON Schema since 1.26.0)
Allows an entity to deal damage through a melee attack with reach calculations based on bounding boxes.

Name	Type	Default Value	Description
attack_once	Boolean	false	Allows the entity to use this attack behavior, only once EVER.
attack_types	String	N/A	Defines the entity types this entity will attack.
can_spread_on_fire	Boolean	false	If the entity is on fire, this allows the entity's target to catch on fire after being hit.
cooldown_time	Decimal	1	Cooldown time (in seconds) between attacks.
horizontal_reach	Decimal	0.8	The attack reach of the mob will be a box with the size of the mobs bounds increased by this value in all horizontal directions.
inner_boundary_time_increase	Decimal	0.25	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
max_path_time	Decimal	0.55	Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
melee_fov	Decimal	90	Field of view (in degrees) when using the sensing component to detect an attack target.
min_path_time	Decimal	0.2	Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
on_attack	Trigger	N/A	Defines the event to trigger when this entity successfully attacks.
on_kill	Trigger	N/A	Defines the event to trigger when this entity kills the target.
outer_boundary_time_increase	Decimal	0.5	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
path_fail_time_increase	Decimal	0.75	Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
path_inner_boundary	Decimal	16	Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
path_outer_boundary	Decimal	32	Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
random_stop_interval	Integer	0	This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
require_complete_path	Boolean	false	Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
speed_multiplier	Decimal	1	This multiplier modifies the attacking entity's speed when moving toward the target.
track_target	Boolean	false	Allows the entity to track the attack target, even if the entity has no sensing.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.mingle
Allows an entity to go to the village bell and mingle with other entities

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
duration	Decimal	1.0	Amount of time in seconds that the entity will chat with another entity
mingle_distance	Decimal	2.0f	The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities.
mingle_partner_type	List	empty	The entity type that this entity is allowed to mingle with
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.mount_pathing
Allows the mob to move around on its own while mounted seeking a target to attack.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
target_dist	Decimal	0.0	The distance at which this mob wants to be away from its target
track_target	Boolean	false	If true, this mob will chase after the target as long as it's a valid target

minecraft:behavior.move_around_target
Allows an entity to move around a target. If the entity is too close (i.e. closer than destination range min and height difference limit) it will try to move away from its target. If the entity is too far away from its target it will try to move closer to a random position within the destination range. A randomized amount of those positions will be behind the target, and the spread can be tweaked with 'destination_pos_spread_degrees'.

Name	Type	Default Value	Description
destination_pos_spread_degrees	Decimal	90.000000	This angle (in degrees) is used for controlling the spread when picking a destination position behind the target. A zero spread angle means the destination position will be straight behind the target with no variance. A 90 degree spread angle means the destination position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction..
destination_position_range	Range [a, b]	[4.000000, 8.000000]	The range of distances from the target entity within which the goal should look for a position to move the owner entity to.
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
height_difference_limit	Decimal	10.000000	Distance in height (in blocks) between the owner entity and the target has to be less than this value when owner checks if it is too close and should move away from the target. This value needs to be bigger than zero for the move away logic to trigger.
horizontal_search_distance	Integer	5	Horizontal search distance (in blocks) when searching for a position to move away from target.
movement_speed	Decimal	0.600000	The speed with which the entity should move to its target position.
vertical_search_distance	Integer	5	Vertical search distance (in blocks) when searching for a position to move away from target.

minecraft:behavior.move_indoors
Allows this entity to move indoors.

Name	Type	Default Value	Description
speed_multiplier	Decimal	0.800000	The movement speed modifier to apply to the entity while it is moving indoors.
timeout_cooldown	Decimal	8.000000	The cooldown time in seconds before the goal can be reused after pathfinding fails

minecraft:behavior.move_outdoors
Allows this entity to move outdoors.

Name	Type	Default Value	Description
goal_radius	Decimal	0.500000	The radius away from the target block to count as reaching the goal.
search_count	Integer	10	The amount of times to try finding a random outdoors position before failing.
search_height	Integer	5	The y range to search for an outdoors position for.
search_range	Integer	15	The x and z range to search for an outdoors position for.
speed_multiplier	Decimal	0.500000	The movement speed modifier to apply to the entity while it is moving outdoors.
timeout_cooldown	Decimal	8.000000	The cooldown time in seconds before the goal can be reused after pathfinding fails

minecraft:behavior.move_through_village
Can only be used by Villagers. Allows the villagers to create paths around the village.

Name	Type	Default Value	Description
only_at_night	Boolean	false	If true, the mob will only move through the village during night time
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_block
Allows mob to move towards a block.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
on_reach	Trigger		Event to run on block reached.
on_stay_completed	Trigger		Event to run on completing a stay of stay_duration at the block.
search_height	Integer	1	The height in blocks that the mob will look for the block.
search_range	Integer	0	The distance in blocks that the mob will look for the block.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
start_chance	Decimal	1.0	Chance to start the behavior (applied after each random tick_interval).
stay_duration	Decimal	0.0	Number of ticks needed to complete a stay at the block.
target_blocks	List		Block types to move to.
target_offset	Vector [a, b, c]	[0, 0, 0]	Offset to add to the selected target position.
target_selection_method	String	nearest	Kind of block to find fitting the specification. Valid values are "random" and "nearest".
tick_interval	Integer	20	Average interval in ticks to try to run this behavior.

minecraft:behavior.move_to_land
Allows the mob to move back onto land when in water.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_count	Integer	10	The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
search_height	Integer	1	Height in blocks the mob will look for land to move towards
search_range	Integer	0	The distance in blocks it will look for land to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_lava
Allows the mob to move back into lava when on land.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_count	Integer	10	The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
search_height	Integer	1	Height in blocks the mob will look for lava to move towards
search_range	Integer	0	The distance in blocks it will look for lava to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_liquid
Allows the mob to move into a liquid when on land.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
material_type	String	Any	The material type of the liquid block to find. Valid values are "Any", "Water", and "Lava".
search_count	Integer	10	The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
search_height	Integer	1	Height in blocks the mob will look for the liquid block to move towards
search_range	Integer	0	The distance in blocks it will look for the liquid block to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_poi
Allows the mob to move to a POI if able to

Name	Type	Default Value	Description
poi_type	String		Tells the goal what POI type it should be looking for
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_random_block
Allows mob to move towards a random block.

Name	Type	Default Value	Description
block_distance	Decimal	16.0	Defines the distance from the mob, in blocks, that the block to move to will be chosen.
within_radius	Decimal	0.0	Defines the distance in blocks the mob has to be from the block for the movement to be finished.

minecraft:behavior.move_to_village
Allows the mob to move into a random location within a village.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_range	Integer	0	The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_to_water
Allows the mob to move back into water when on land.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_count	Integer	10	The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick
search_height	Integer	1	Height in blocks the mob will look for water to move towards
search_range	Integer	0	The distance in blocks it will look for water to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.move_towards_dwelling_restriction (See JSON Schema since 1.26.0)
Allows entities with the "minecraft:dweller" component to move toward their Village area that the entity should be restricted to.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	This multiplier modifies the entity's speed when moving towards its restriction.

minecraft:behavior.move_towards_home_restriction (See JSON Schema since 1.26.0)

Allows entities with a "minecraft:home" component to move towards their home position.
If "restriction_radius" is set, entities will be able to run this behavior only if outside of it.


Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	This multiplier modifies the entity's speed when moving towards its restriction.

minecraft:behavior.move_towards_target
Allows mob to move towards its current target.

Name	Type	Default Value	Description
within_radius	Decimal	0.0	Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target

minecraft:behavior.nap
Allows mobs to occassionally stop and take a nap under certain conditions.

Name	Type	Default Value	Description
cooldown_max	Decimal	0.0	Maximum time in seconds the mob has to wait before using the goal again
cooldown_min	Decimal	0.0	Minimum time in seconds the mob has to wait before using the goal again
mob_detect_dist	Decimal	6.0	The block distance in x and z that will be checked for mobs that this mob detects
mob_detect_height	Decimal	6.0	The block distance in y that will be checked for mobs that this mob detects

minecraft:behavior.nearest_attackable_target (See JSON Schema since 1.26.0)
Allows an entity to attack the closest target within a given subset of specific target types.

Name	Type	Default Value	Description
attack_interval	Range [a, b]	[0, 0]	Time range (in seconds) between searching for an attack target, range is in (0, "attack_interval"]. Only used if "attack_interval" is greater than 0, otherwise "scan_interval" is used.
attack_owner	Boolean	false	If true, this entity can attack its owner.
entity_types	Minecraft Filter		Filters which types of targets are valid for this entity.
must_reach	Boolean	false	If true, this entity requires a path to the target.
must_see	Boolean	false	Determines if target-validity requires this entity to be in range only, or both in range and in sight.
must_see_forget_duration	Decimal	3.0	Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true.
persist_time	Decimal	0.0	Time (in seconds) this entity can continue attacking the target after the target is no longer valid.
reselect_targets	Boolean	false	Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each "scan_interval" or "attack_interval".
scan_interval	Integer	10	If "attack_interval" is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to "scan_interval", minimum value is 1. Values under 10 can affect performance.
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
target_acquisition_probability	Decimal	1.00	Probability (0.0 to 1.0) that this entity will accept a found target. Checked each time a valid target is found during scanning.
target_invisible_multiplier	Decimal	0.70	Multiplied with the target's armor coverage percentage to modify "max_dist" when detecting an invisible target.
target_search_height	Decimal	-1.00	Maximum vertical target-search distance, if it's greater than the target type's "max_dist". A negative value defaults to "entity_types" greatest "max_dist".
target_sneak_visibility_multiplier	Decimal	0.80	Multiplied with the target type's "max_dist" when trying to detect a sneaking target.
within_radius	Decimal	0.0	Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range".

minecraft:behavior.nearest_prioritized_attackable_target
Allows the mob to check for and pursue the nearest valid target.

Name	Type	Default Value	Description
attack_interval	Integer	0	Time in seconds before selecting a target
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
entity_types	JSON Object		List of entity types that this mob considers valid targets
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
must_reach	Boolean	false	If true, only entities that this mob can path to can be selected as targets
must_see	Boolean	false	If true, only entities in this mob's viewing range can be selected as targets
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
persist_time	Decimal	0.0f	Time in seconds for a valid target to stay targeted when it becomes and invalid target.
priority	Integer	0	Specifies the priority in which filtered enemy types should be attacked. Lower number means higher priority.
reselect_targets	Boolean	false	If true, the target will change to the current closest entity whenever a different entity is closer
scan_interval	Integer	10	How many ticks to wait between scanning for a target.
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
target_search_height	Decimal	-1.0f	Height in blocks to search for a target mob. -1.0f means the height does not matter.
within_radius	Decimal	0.0	Distance in blocks that the target can be within to launch an attack

minecraft:behavior.ocelot_sit_on_block
Allows to mob to be able to sit in place like the ocelot.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.ocelotattack (See JSON Schema since 1.26.10)
Allows an entity to attack by sneaking and pouncing.

Name	Type	Default Value	Description
cooldown_time	Decimal	1	Time (in seconds) between attacks.
max_distance	Decimal	15	Max distance from the target, this entity will use this attack behavior.
max_sneak_range	Decimal	15	Max distance from the target, this entity starts sneaking.
max_sprint_range	Decimal	4	Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking).
reach_multiplier	Decimal	2	Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
sneak_speed_multiplier	Decimal	0.6	Modifies the attacking entity's movement speed while sneaking.
sprint_speed_multiplier	Decimal	1.33	Modifies the attacking entity's movement speed while sprinting.
walk_speed_multiplier	Decimal	0.8	Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.offer_flower (See JSON Schema since 1.26.10)
Allows the mob to offer a flower to another mob with the minecraft:take_flower behavior.

Name	Type	Default Value	Description
chance_to_start	Decimal	0.00	Percent chance that the mob will start this goal from 0.0 to 1.0 (where 1.0 = 100%).
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
max_head_rotation_y	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
max_offer_flower_duration	Decimal	20.00	The max amount of time (in seconds) that the mob will offer the flower for before exiting the Goal.
max_rotation_x	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
search_area	Vector [a, b, c]	[6, 2, 6]	The dimensions of the AABB used to search for a potential mob to offer flower to.

minecraft:behavior.open_door
Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.

Name	Type	Default Value	Description
close_door_after	Boolean	true	If true, the mob will close the door after opening it and going through it

minecraft:behavior.owner_hurt_by_target
Allows the mob to target another mob that hurts their owner.

Name	Type	Default Value	Description
entity_types	JSON Object		List of entity types that this mob can target if they hurt their owner
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged

minecraft:behavior.owner_hurt_target
Allows the mob to target a mob that is hurt by their owner.

Name	Type	Default Value	Description
entity_types	JSON Object		List of entity types that this entity can target if the potential target is hurt by this mob's owner
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged

minecraft:behavior.panic
Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.

Name	Type	Default Value	Description
damage_sources	List	[campfire, fire, fire_tick, freezing, lava, lightning, magma, soul_campfire, temperature, entity_attack, entity_explosion, fireworks, magic, projectile, ram_attack, sonic_boom, wither, mace_smash]	The list of Entity Damage Sources that will cause this mob to panic
force	Boolean	false	If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it
ignore_mob_damage	Boolean	false	If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in "damage_sources"
prefer_water	Boolean	false	If true, the mob will prefer water over land
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.pet_sleep_with_owner
Allows the pet mob to move onto a bed with its owner while sleeping.

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_height	Integer	1	Height in blocks from the owner the pet can be to sleep with owner.
search_range	Integer	0	The distance in blocks from the owner the pet can be to sleep with owner.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.pickup_items
Allows the mob to pick up items on the ground.

Name	Type	Default Value	Description
can_pickup_any_item	Boolean	false	If true, the mob can pickup any item
can_pickup_to_hand_or_equipment	Boolean	true	If true, the mob can pickup items to its hand or armor slots
excluded_items	List		List of items this mob will not pick up
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
max_dist	Decimal	0.0	Maximum distance this mob will look for items to pick up
pickup_based_on_chance	Boolean	false	If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
track_target	Boolean	false	If true, this mob will chase after the target as long as it's a valid target

minecraft:behavior.place_block
Name	Type	Default Value	Description
affected_by_griefing_rule	Boolean		If true, whether the goal is affected by the mob griefing game rule.
can_place	Minecraft Filter		Filters for if the entity should try to place its block. Self and Target are set.
chance	Decimal		Chance each tick for the entity to try and place a block.
on_place	Trigger		Trigger ran if the entity does place its block. Self, Target, and Block are set.
placeable_carried_blocks	Array		Block descriptors for which blocks are valid to be placed from the entity's carried item, if empty all blocks are valid.
randomly_placeable_blocks	Array		Weighted block descriptors for which blocks should be randomly placed, if empty the entity will try to place its carried block from placeable_carried_blocks.
xz_range	Range [a, b]		XZ range from which the entity will try and place blocks in.
y_range	Range [a, b]		Y range from which the entity will try and place blocks in.

minecraft:behavior.play (See JSON Schema since 1.26.10)
Allows the mob to play with other mobs by chasing each other and moving around randomly.

Name	Type	Default Value	Description
chance_to_start	Decimal	0.00	Percent chance that the mob will start this goal, from 0 to 1.
follow_distance	Integer	2	The distance (in blocks) that the mob tries to be in range of the friend it's following.
friend_search_area	Vector [a, b, c]	[6, 3, 6]	The dimensions of the AABB used to search for a potential friend to play with.
friend_types	Minecraft Filter		The entity type(s) to consider when searching for a potential friend to play with.
max_play_duration_seconds	Decimal	50.00	The max amount of seconds that the mob will play for before exiting the Goal.
random_pos_search_height	Integer	3	The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1.
random_pos_search_range	Integer	16	The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1.
speed_multiplier	Decimal	1.00	Movement speed multiplier of the mob when using this AI Goal.

minecraft:behavior.play_dead (See JSON Schema since 1.26.10)
Allows this entity to pretend to be dead to avoid being targeted by attackers.

Name	Type	Default Value	Description
apply_regeneration	Boolean	false	Whether the mob will receive the regeneration effect while playing dead.
damage_sources	Enumerator	all	The list of Entity Damage Sources that will cause this mob to play dead.
duration	Decimal	1.000000	The amount of time the mob will remain playing dead (in seconds).
filters	Minecraft Filter		The list of other triggers that are required for the mob to activate play dead
force_below_health	Integer	0	The amount of health at which damage will cause the mob to play dead.
random_damage_range	Range [a, b]	[0, 0]	The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start.
random_start_chance	Decimal	1.000000	The likelihood of this goal starting upon taking damage.

minecraft:behavior.player_ride_tamed
Allows the mob to be ridden by the player after being tamed.


minecraft:behavior.raid_garden
Allows the mob to eat/raid crops out of farms until they are full.

Name	Type	Default Value	Description
blocks	List		Blocks that the mob is looking for to eat/raid
eat_delay	Integer	2	Time in seconds between each time it eats/raids
full_delay	Integer	100	Amount of time in seconds before this mob wants to eat/raid again after eating its maximum
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
initial_eat_delay	Integer	0	Time in seconds before starting to eat/raid once it arrives at it
max_to_eat	Integer	6	Maximum number of crops this entity wants to eat/raid. If set to zero or less then it doesn't have a maximum
search_range	Integer	0	Distance in blocks the mob will look for crops to eat
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.ram_attack (See JSON Schema since 1.26.10)
Allows this entity to damage a target by using a running attack.

Name	Type	Default Value	Description
baby_knockback_modifier	Decimal	0.333333	The modifier to knockback that babies have.
cooldown_range	Range [a, b]	[10, 20]	Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack.
knockback_force	Decimal	5.000000	The force of the knockback of the ram attack.
knockback_height	Decimal	0.100000	The height of the knockback of the ram attack.
min_ram_distance	Integer	4	The minimum distance at which the mob can start a ram attack.
on_start	Array		The event to trigger when attacking
pre_ram_sound	String		The sound to play when an entity is about to perform a ram attack.
ram_distance	Integer	7	The distance at which the mob start to run with ram speed.
ram_impact_sound	String		The sound to play when an entity is impacting on a ram attack.
ram_speed	Decimal	2.000000	Sets the entity's speed when charging toward the target.
run_speed	Decimal	1.000000	Sets the entity's speed when running toward the target.

minecraft:behavior.random_breach
Allows the mob to randomly break surface of the water.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1

minecraft:behavior.random_fly
Allows a mob to randomly fly around.

Name	Type	Default Value	Description
can_land_on_trees	Boolean	true	If true, the mob can stop flying and land on a tree instead of the ground
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1

minecraft:behavior.random_hover
Allows the mob to hover around randomly, close to the surface

Name	Type	Default Value	Description
hover_height	Range [a, b]		The height above the surface which the mob will try to maintain
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1
y_offset	Decimal	0.0	Height in blocks to add to the selected target position

minecraft:behavior.random_look_around
Allows the mob to randomly look around.

Name	Type	Default Value	Description
look_time	Range [a, b]	[2, 4]	The range of time in seconds the mob will stay looking in a random direction before looking elsewhere
max_angle_of_view_horizontal	Integer	30	The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
min_angle_of_view_horizontal	Integer	-30	The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.

minecraft:behavior.random_look_around_and_sit
Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.

Name	Type	Default Value	Description
continue_if_leashed	Boolean	false	If the goal should continue to be used as long as the mob is leashed.
continue_sitting_on_reload	Boolean	false	The mob will stay sitting on reload.
max_angle_of_view_horizontal	Decimal	30.0	The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
max_look_count	Integer	2	The max amount of unique looks a mob will have while looking around.
max_look_time	Integer	40	The max amount of time (in ticks) a mob will stay looking at a direction while looking around.
min_angle_of_view_horizontal	Decimal	-30.0	The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
min_look_count	Integer	1	The min amount of unique looks a mob will have while looking around.
min_look_time	Integer	20	The min amount of time (in ticks) a mob will stay looking at a direction while looking around.
probability	Decimal	0.02	The probability of randomly looking around/sitting.
random_look_around_cooldown	Integer	0	The cooldown in seconds before the goal can be used again.

minecraft:behavior.random_search_and_dig (See JSON Schema since 1.26.10)
Allows this entity to locate a random target block that it can path find to. Once found, the entity will move towards it and dig up an item. [Default target block types: Dirt, Grass, Podzol, DirtWithRoots, MossBlock, Mud, MuddyMangroveRoots].

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[0.000000, 0.000000]	Goal cooldown range in seconds.
digging_duration_range	Range [a, b]	[8.000000, 10.000000]	Digging duration in seconds.
find_valid_position_retries	Integer	5	Amount of retries to find a valid target position within search range.
goal_radius	Decimal	1.500000	Distance in blocks within the entity to considers it has reached it's target position.
item_table	String		File path relative to the resource pack root for items to spawn list (loot table format).
on_digging_start	Trigger		Event to run when the goal ends searching has begins digging.
on_fail_during_digging	Trigger		Event to run when the goal failed while in digging state.
on_fail_during_searching	Trigger		Event to run when the goal failed while in searching state.
on_item_found	Trigger		Event to run when the goal find a item.
on_searching_start	Trigger		Event to run when the goal starts searching.
on_success	Trigger		Event to run when searching and digging has ended.
search_range_xz	Integer	10	Width and length of the volume around the entity used to find a valid target position
search_range_y	Integer	7	Height of the volume around the entity used to find a valid target position
spawn_item_after_seconds	Decimal	0.000000	Digging duration before spawning item in seconds.
spawn_item_pos_offset	Decimal	0.000000	Distance to offset the item's spawn location in the direction the mob is facing.
speed_multiplier	Decimal	1.000000	Searching movement speed multiplier.
target_blocks	Array		List of target block types the goal will look to dig on. Overrides the default list.
target_dig_position_offset	Decimal	2.250000	Dig target position offset from the feet position of the mob in their facing direction.

minecraft:behavior.random_sitting
Allows the mob to randomly sit for a duration.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
min_sit_time	Decimal	10	The minimum amount of time in seconds before the mob can stand back up
start_chance	Decimal	0.1	This is the chance that the mob will start this goal, from 0 to 1
stop_chance	Decimal	0.3	This is the chance that the mob will stop this goal, from 0 to 1

minecraft:behavior.random_stroll
Allows a mob to randomly stroll around.

Name	Type	Default Value	Description
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1

minecraft:behavior.random_swim
Allows an entity to randomly move through water

Name	Type	Default Value	Description
avoid_surface	Boolean	true	If true, the mob will avoid surface water blocks by swimming below them
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
xz_dist	Integer	10	Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1
y_dist	Integer	7	Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1

minecraft:behavior.ranged_attack
Allows an entity to attack by using ranged shots. "charge_shoot_trigger" must be greater than 0 to enable charged up burst-shot attacks. Requires minecraft:shooter to define projectile behaviour.

Name	Type	Default Value	Description
attack_interval	Decimal	0	Alternative to "attack_interval_min" & "attack_interval_max". Consistent reload-time (in seconds), when not using a charged shot. Does not scale with target-distance.
attack_interval_max	Decimal	0	Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
attack_interval_min	Decimal	0	Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
attack_radius	Decimal	0	Minimum distance to target before this entity will attempt to shoot.
attack_radius_min	Decimal	0	Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing
burst_interval	Decimal	0	Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack.
burst_shots	Integer	1	Number of shots fired every time the attacking entity uses a charged up attack.
charge_charged_trigger	Decimal	0	Time (in seconds, then add "charge_shoot_trigger"), before a charged up attack is done charging. Charge-time decays while target is not in sight.
charge_shoot_trigger	Decimal	0	Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight.
ranged_fov	Decimal	90	Field of view (in degrees) when using sensing to detect a target for attack.
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
speed_multiplier	Decimal	1	During attack behavior, this multiplier modifies the entity's speed when moving toward the target.
swing	Boolean	false	If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack.
target_in_sight_time	Decimal	1	Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.receive_love
Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.


minecraft:behavior.restrict_open_door
Allows the mob to stay indoors during night time.


minecraft:behavior.restrict_sun
Allows the mob to automatically start avoiding the sun when its a clear day out.


minecraft:behavior.rise_to_liquid_level
Allows the mob to stay at a certain level when in liquid.

Name	Type	Default Value	Description
liquid_y_offset	Decimal	0.0	Target distance down from the liquid surface. i.e. Positive values move the target Y down.
rise_delta	Decimal	0.0	Movement up in Y per tick when below the liquid surface.
sink_delta	Decimal	0.0	Movement down in Y per tick when above the liquid surface.

minecraft:behavior.roar (See JSON Schema since 1.21.110)
Allows this entity to roar at another entity based on data in minecraft:anger_level. Once the anger threshold specified in minecraft:anger_level has been reached, this entity will roar for the specified amount of time, look at the other entity, apply anger boost towards it, and finally target it.

Name	Type	Default Value	Description
duration	Decimal	0.0	The amount of time to roar for.

minecraft:behavior.roll
This allows the mob to roll forward.

Name	Type	Default Value	Description
probability	Decimal	[1.0]	The probability that the mob will use the goal.

minecraft:behavior.run_around_like_crazy
Allows the mob to run around aimlessly.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.scared
Allows the a mob to become scared when the weather outside is thundering

Name	Type	Default Value	Description
sound_interval	Integer	0	The interval in which a sound will play when active in a 1/delay chance to kick off

minecraft:behavior.send_event
Allows the mob to send an event to another mob.

Name	Type	Default Value	Description
cast_duration	Decimal	Total delay of the steps	Time in seconds for the entire event sending process
look_at_target	Boolean	true	If true, the mob will face the entity it sends an event to
sequence	List		List of events to send
Name	Type	Default Value	Description
base_delay	Decimal	0.0	Amount of time in seconds before starting this step
event	String		The event to send to the entity
sound_event	String		The sound event to play when this step happens

minecraft:behavior.share_items
Allows the mob to give items it has to others.

Name	Type	Default Value	Description
entity_types	JSON Object		List of entities this mob will share items with
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
max_dist	Decimal	0.0	Maximum distance in blocks this mob will look for entities to share items with
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.silverfish_merge_with_stone
Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish.


minecraft:behavior.silverfish_wake_up_friends
Allows the mob to alert mobs in nearby blocks to come out. Currently it can only be used by Silverfish.


minecraft:behavior.skeleton_horse_trap
Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.

Name	Type	Default Value	Description
duration	Decimal	1.0	Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated
within_radius	Decimal	0.0	Distance in blocks that the player has to be within to trigger the horse trap

minecraft:behavior.sleep
Allows mobs that own a bed to in a village to move to and sleep in it.

Name	Type	Default Value	Description
can_sleep_while_riding	Boolean	false	If true, the mob will be able to use the sleep goal if riding something
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
sleep_collider_height	Decimal	1.0	The height of the mob's collider while sleeping
sleep_collider_width	Decimal	1.0	The width of the mob's collider while sleeping
sleep_y_offset	Decimal	1.0	The y offset of the mob's collider while sleeping
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
timeout_cooldown	Decimal	8.0	The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition

minecraft:behavior.slime_attack (See JSON Schema since 1.21.110)
Causes the entity to grow tired every once in a while, while attacking.

Name	Type	Default Value	Description
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
speed_multiplier	Decimal	1	During attack behavior, this multiplier modifies the entity's speed when moving toward the target.
x_max_rotation	Decimal	10	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_rotation	Decimal	10	Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target.

minecraft:behavior.slime_float (See JSON Schema since 1.21.110)
Allow slimes to float in water / lava. Can only be used by Slime and Magma Cubes.

Name	Type	Default Value	Description
jump_chance_percentage	Decimal	0.8	Percent chance a slime or magma cube has to jump while in water / lava.
speed_multiplier	Decimal	1.2	Determines the multiplier the entity's speed is modified by when moving through water / lava.

minecraft:behavior.slime_keep_on_jumping (See JSON Schema since 1.21.110)
Allows the entity to continuously jump around like a slime.

Name	Type	Default Value	Description
speed_multiplier	Decimal	1	Determines the multiplier this entity's speed is modified by when jumping around.

minecraft:behavior.slime_random_direction (See JSON Schema since 1.21.110)
Allows the entity to move in random directions like a slime.

Name	Type	Default Value	Description
add_random_time_range	Integer	3	Additional time (in whole seconds), chosen randomly in the range of [0, "add_random_time_range"], to add to "min_change_direction_time".
min_change_direction_time	Decimal	2	Constant minimum time (in seconds) to wait before choosing a new direction.
turn_range	Integer	360	Maximum rotation angle range (in degrees) when randomly choosing a new direction.

minecraft:behavior.snacking
Allows the mob to take a load off and snack on food that it found nearby.

Name	Type	Default Value	Description
items	List		Items that we are interested in snacking on
snacking_cooldown	Decimal	7.5	The cooldown time in seconds before the mob is able to snack again
snacking_cooldown_min	Decimal	0.5f	The minimum time in seconds before the mob is able to snack again
snacking_stop_chance	Decimal	0.0017	This is the chance that the mob will stop snacking, from 0 to 1

minecraft:behavior.sneeze
Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
drop_item_chance	Decimal	1.0	The probability that the mob will drop an item when it sneezes.
entity_types	JSON Object		List of entity types this mob will startle (cause to jump) when it sneezes.
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged
loot_table	String		Loot table to select dropped items from.
prepare_sound	String		Sound to play when the sneeze is about to happen.
prepare_time	Decimal	1.0	The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing).
probability	Decimal	0.02	The probability of sneezing. A value of 1.00 is 100%
sound	String		Sound to play when the sneeze occurs.
within_radius	Decimal	0.0	Distance in blocks that mobs will be startled.

minecraft:behavior.sniff (See JSON Schema since 1.21.110)
Allows this entity to detect the nearest player within "sniffing_radius" and update its "minecraft:suspect_tracking" component state

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[3, 10]	Cooldown range between sniffs in seconds
duration	Decimal	1.0	Sniffing duration in seconds
sniffing_radius	Decimal	5.0	Mob detection radius
suspicion_radius_horizontal	Decimal	3.0	Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased
suspicion_radius_vertical	Decimal	3.0	Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased

minecraft:behavior.sonic_boom (See JSON Schema since 1.21.110)
Allows this entity to perform a 'sonic boom' ranged attack

Name	Type	Default Value	Description
attack_cooldown	Decimal	5.00	Cooldown in seconds required after using this attack until the entity can use sonic boom again.
attack_damage	Decimal	30.00	Attack damage of the sonic boom.
attack_range_horizontal	Decimal	15.00	Horizontal range (in blocks) at which the sonic boom can damage the target.
attack_range_vertical	Decimal	20.00	Vertical range (in blocks) at which the sonic boom can damage the target.
attack_sound	String		Sound event for the attack.
charge_sound	String		Sound event for the charge up.
duration	Decimal	0.00	Goal duration in seconds
duration_until_attack_sound	Decimal	1.70	Duration in seconds until the attack sound is played.
knockback_height_cap	Decimal	0.00	Height cap of the attack knockback's vertical delta.
knockback_horizontal_strength	Decimal	0.00	Horizontal strength of the attack's knockback applied to the attack target.
knockback_vertical_strength	Decimal	0.00	Vertical strength of the attack's knockback applied to the attack target.
speed_multiplier	Decimal	1.00	This multiplier modifies the attacking entity's speed when moving toward the target.

minecraft:behavior.squid_dive
Allows the squid to dive down in water. Can only be used by the Squid.


minecraft:behavior.squid_flee
Allows the squid to swim away. Can only be used by the Squid.


minecraft:behavior.squid_idle
Allows the squid to swim in place idly. Can only be used by the Squid.


minecraft:behavior.squid_move_away_from_ground
Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid.


minecraft:behavior.squid_out_of_water
Allows the squid to stick to the ground when outside water. Can only be used by the Squid.


minecraft:behavior.stalk_and_pounce_on_target
Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component. On failure, the mob will risk getting stuck

Name	Type	Default Value	Description
interest_time	Decimal	2.0	The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing
leap_distance	Decimal	0.8	The distance in blocks the mob jumps in the direction of its target
leap_height	Decimal	0.9	The height in blocks the mob jumps when leaping at its target
max_stalk_dist	Decimal	10.0	The maximum distance away a target can be before the mob gives up on stalking
pounce_max_dist	Decimal	5.0	The maximum distance away from the target in blocks to begin pouncing at the target
set_persistent	Boolean	false	Allows the actor to be set to persist upon targeting a player
stalk_speed	Decimal	1.2	The movement speed in which you stalk your target
strike_dist	Decimal	2.0	The max distance away from the target when landing from the pounce that will still result in damaging the target
stuck_time	Decimal	2.0	The amount of time the mob will be stuck if they fail and land on a block they can be stuck on

minecraft:behavior.stay_near_noteblock (See JSON Schema since 1.21.110)
The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.

Name	Type	Default Value	Description
listen_time	Integer	30	Sets the time an entity should stay near a noteblock after hearing it.
speed	Decimal	1.000000	Sets the entity's speed when moving toward the block.
start_distance	Decimal	10.000000	Sets the distance the entity needs to be away from the block to attempt to start the goal.
stop_distance	Decimal	2.000000	Sets the distance from the block the entity will attempt to reach.

minecraft:behavior.stay_while_sitting
Allows the mob to stay put while it is in a sitting state instead of doing something else.


minecraft:behavior.stomp_attack (See JSON Schema since 1.26.0)
Allows an entity to attack using stomp AoE damage behavior.

Name	Type	Default Value	Description
attack_once	Boolean	false	Allows the entity to use this attack behavior, only once EVER.
attack_types	String	N/A	Defines the entity types this entity will attack.
can_spread_on_fire	Boolean	false	If the entity is on fire, this allows the entity's target to catch on fire after being hit.
cooldown_time	Decimal	1	Cooldown time (in seconds) between attacks.
inner_boundary_time_increase	Decimal	0.25	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary".
max_path_time	Decimal	0.55	Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
min_path_time	Decimal	0.2	Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
no_damage_range_multiplier	Decimal	2	Multiplied with the final AoE damage range to determine a no damage range. The stomp attack will go on cooldown if target is in this no damage range.
on_attack	Trigger	N/A	Defines the event to trigger when this entity successfully attacks.
on_kill	Trigger	N/A	Defines the event to trigger when this entity kills the target.
outer_boundary_time_increase	Decimal	0.5	Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary".
path_fail_time_increase	Decimal	0.75	Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
path_inner_boundary	Decimal	16	Distance at which to increase attack path recalculation by "inner_boundary_tick_increase".
path_outer_boundary	Decimal	32	Distance at which to increase attack path recalculation by "outer_boundary_tick_increase".
random_stop_interval	Integer	0	This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval".
reach_multiplier	Decimal	2	Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
require_complete_path	Boolean	false	Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
speed_multiplier	Decimal	1	This multiplier modifies the attacking entity's speed when moving toward the target.
stomp_range_multiplier	Decimal	2	Multiplied with the base size of the entity to determine stomp AoE damage range.
track_target	Boolean	false	Allows the entity to track the attack target, even if the entity has no sensing.
x_max_rotation	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
y_max_head_rotation	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.

minecraft:behavior.stomp_turtle_egg
Allows this mob to stomp turtle eggs

Name	Type	Default Value	Description
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
interval	Integer	120	A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal
search_height	Integer	1	Height in blocks the mob will look for turtle eggs to move towards
search_range	Integer	0	The distance in blocks it will look for turtle eggs to move towards
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal

minecraft:behavior.stroll_towards_village
Allows the mob to move into a random location within a village within the search range.

Name	Type	Default Value	Description
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the goal again
goal_radius	Decimal	0.5	Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot
search_range	Integer	0	The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
start_chance	Decimal	0.1	This is the chance that the mob will start this goal, from 0 to 1

minecraft:behavior.summon_entity
Allows the mob to attack the player by summoning other entities.

Name	Type	Default Value	Description
summon_choices	List		List of spells for the mob to use to summon entities. Each spell has the following parameters:
Name	Type	Default Value	Description
cast_duration	Decimal	Total delay of the steps	Time in seconds the spell casting will take
cooldown_time	Decimal	0.0	Time in seconds the mob has to wait before using the spell again
do_casting	Boolean	true	If true, the mob will do the casting animations and render spell particles
filters	Minecraft Filter		
max_activation_range	Decimal	32.0	Upper bound of the activation distance in blocks for this spell, must not be negative.
min_activation_range	Decimal	1.0	Lower bound of the activation distance in blocks for this spell, must not be negative.
particle_color	Integer	0	The color of the particles for this spell
sequence	List		List of steps for the spell. Each step has the following parameters:
Name	Type	Default Value	Description
base_delay	Decimal	0.0	Amount of time in seconds to wait before this step starts
delay_per_summon	Decimal	0.0	Amount of time in seconds before each entity is summoned in this step
entity_lifespan	Decimal	-1.0	Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can
entity_type	String		The entity type of the entities we will spawn in this step
num_entities_spawned	Integer	1	Number of entities that will be spawned in this step
shape	String	line	The base shape of this step. Valid values are circle and line
size	Decimal	1.0	The base size of the entity
sound_event	String		The sound event to play for this step
summon_cap	Integer	0	Maximum number of summoned entities at any given time
summon_cap_radius	Decimal	0.0	
summon_event	String		Event to invoke on each summoned entity on spawn
target	String	self	The target of the spell. This is where the spell will start (line will start here, circle will be centered here)
start_sound_event	String		The sound event to play when using this spell
weight	Decimal	0.0	The weight of this spell. Controls how likely the mob is to choose this spell when casting one

minecraft:behavior.swell
Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.

Name	Type	Default Value	Description
start_distance	Decimal	10.0	This mob starts swelling when a target is at least this many blocks away
stop_distance	Decimal	2	This mob stops swelling when a target has moved away at least this many blocks

minecraft:behavior.swim_idle (See JSON Schema since 1.21.110)
Allows the entity go idle, if swimming. Entity must be in water.

Name	Type	Default Value	Description
idle_time	Decimal	5	Amount of time (in seconds) to stay idle.
success_rate	Decimal	0.1	Percent chance this entity will go idle, 1.0 = 100%.

minecraft:behavior.swim_up_for_breath (See JSON Schema since 1.21.110)
Allows the mob to try to move to air once it is close to running out of its total breathable supply. Requires "minecraft:breathable".

Name	Type	Default Value	Description
material_type	String	water	The material the mob is traveling in. An air block will only be considered valid to move to with a block of this material below it. Options are: "water", "lava", or "any".
search_height	Integer	16	The height (in blocks) above the mob's current position that it will search for a valid air block to move to. If a valid block cannot be found, the mob will move to the position this many blocks above it.
search_radius	Integer	4	The radius (in blocks) around the mob's current position that it will search for a valid air block to move to.
speed_mod	Decimal	1.40	Movement speed multiplier of the mob when using this Goal.

minecraft:behavior.swim_wander (See JSON Schema since 1.21.110)
Allows the entity to wander around while swimming, when not path-finding.

Name	Type	Default Value	Description
interval	Decimal	0.00833	Percent chance to start wandering, when not path-finding. 1 = 100%
look_ahead	Decimal	5	Distance to look ahead for obstacle avoidance, while wandering.
speed_multiplier	Decimal	1	This multiplier modifies the entity's speed when wandering.
wander_time	Decimal	5	Amount of time (in seconds) to wander after wandering behavior was successfully started.

minecraft:behavior.swim_with_entity (See JSON Schema since 1.26.10)
Allows the entity follow another entity. Both entities must be swimming [ie, in water].

Name	Type	Default Value	Description
catch_up_multiplier	Decimal	2.5	The multiplier this entity's speed is modified by when matching another entity's direction.
catch_up_threshold	Decimal	12	Distance, from the entity being followed, at which this entity will speed up to reach that entity.
chance_to_stop	Decimal	0.0333	Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100%
entity_types	Array		Filters which types of entities are valid to follow.
match_direction_threshold	Decimal	2	Distance, from the entity being followed, at which this entity will try to match that entity's direction
search_range	Decimal	20	Radius around this entity to search for another entity to follow.
speed_multiplier	Decimal	1.5	The multiplier this entity's speed is modified by when trying to catch up to the entity being followed.
state_check_interval	Decimal	0.5	Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed.
stop_distance	Decimal	5	Distance, from the entity being followed, at which this entity will stop following that entity.
success_rate	Decimal	0.1	Percent chance to start following another entity, if not already doing so. 1.0 = 100%

minecraft:behavior.swoop_attack (See JSON Schema since 1.21.110)
Allows an entity to attack using swoop attack behavior; Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.

Name	Type	Default Value	Description
damage_reach	Decimal	0.2	Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage.
delay_range	Range [a, b]	[10, 20]	Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack.
speed_multiplier	Decimal	1	During swoop attack behavior, this determines the multiplier the entity's speed is modified by when moving toward the target.

minecraft:behavior.take_block
Name	Type	Default Value	Description
affected_by_griefing_rule	Boolean		If true, whether the goal is affected by the mob griefing game rule.
blocks	Array		Block descriptors for which blocks are valid to be taken by the entity, if empty all blocks are valid.
can_take	Minecraft Filter		Filters for if the entity should try to take a block. Self and Target are set.
chance	Decimal		Chance each tick for the entity to try and take a block.
on_take	Trigger		Trigger ran if the entity does take a block. Self, Target, and Block are set.
requires_line_of_sight	Boolean		If true, whether the entity needs line of sight to the block they are trying to take.
xz_range	Range [a, b]		XZ range from which the entity will try and take blocks from.
y_range	Range [a, b]		Y range from which the entity will try and take blocks from.

minecraft:behavior.take_flower (See JSON Schema since 1.26.10)
Allows the mob to accept flowers from another mob with the minecraft:offer_flower behavior.

Name	Type	Default Value	Description
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
max_head_rotation_y	Decimal	30	Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
max_rotation_x	Decimal	30	Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
max_wait_time	Decimal	20.00	The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
min_distance_to_target	Decimal	2.00	Minimum distance (in blocks) for the entity to be considered having reached its target.
min_wait_time	Decimal	4.00	The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
on_take_flower	Trigger		Event triggered when the entity takes a flower from another entity.
search_area	Vector [a, b, c]	[6, 2, 6]	The dimensions of the AABB used to search for a potential mob to take a flower from.
speed_multiplier	Decimal	0.50	Movement speed multiplier of the mob when using this AI Goal.

minecraft:behavior.teleport_to_owner (See JSON Schema since 1.26.10)
Allows an entity to teleport to its owner.

Name	Type	Default Value	Description
cooldown	Decimal	1.00	The time in seconds that must pass for the entity to be able to try to teleport again.
filters	Minecraft Filter		Conditions to be satisfied for the entity to teleport to its owner.

minecraft:behavior.tempt
Allows a mob to be tempted by a player holding a specific item. Uses pathfinding for movement.

Name	Type	Default Value	Description
can_get_scared	Boolean	false	If true, the mob can stop being tempted if the player moves too fast while close to this mob.
can_tempt_vertically	Boolean	false	If true, vertical distance to the player will be considered when tempting.
can_tempt_while_ridden	Boolean	false	If true, the mob can be tempted even if it has a passenger (i.e. if being ridden).
items	Array	[]	List of items that can tempt the mob.
sound_interval	Range [a, b]	[0.0, 0.0]	Range of random ticks to wait between tempt sounds.
speed_multiplier	Decimal	1.0	Movement speed multiplier of the mob when using this AI Goal
stop_distance	Decimal	1.5	The distance at which the mob will stop following the player.
tempt_sound	String		Sound to play while the mob is being tempted.
within_radius	Decimal	0.0	Distance in blocks this mob can get tempted by a player holding an item they like.

minecraft:behavior.timer_flag_1 (See JSON Schema since 1.26.0)
Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_1 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[0, 0]	Goal cooldown range in seconds. If specified, the cooldown will have to elapse even before the goal can be selected for the first time.
duration_range	Range [a, b]	[0, 0]	Goal duration range in seconds.
on_end	Trigger		Event(s) to run when the goal ends.
on_start	Trigger		Event(s) to run when the goal starts.

minecraft:behavior.timer_flag_2 (See JSON Schema since 1.26.0)
Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_2 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[0, 0]	Goal cooldown range in seconds. If specified, the cooldown will have to elapse even before the goal can be selected for the first time.
duration_range	Range [a, b]	[0, 0]	Goal duration range in seconds.
on_end	Trigger		Event(s) to run when the goal ends.
on_start	Trigger		Event(s) to run when the goal starts.

minecraft:behavior.timer_flag_3 (See JSON Schema since 1.26.0)
Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_3 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.

Name	Type	Default Value	Description
cooldown_range	Range [a, b]	[0, 0]	Goal cooldown range in seconds. If specified, the cooldown will have to elapse even before the goal can be selected for the first time.
duration_range	Range [a, b]	[0, 0]	Goal duration range in seconds.
on_end	Trigger		Event(s) to run when the goal ends.
on_start	Trigger		Event(s) to run when the goal starts.

minecraft:behavior.trade_interest
Allows the mob to look at a player that is holding a tradable item.

Name	Type	Default Value	Description
carried_item_switch_time	Decimal	2.0	The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade
cooldown	Decimal	2.0	The time in seconds before the trader can use this goal again
interest_time	Decimal	45.0	The max time in seconds that the trader will be interested with showing its trade items
remove_item_time	Decimal	1.0	The max time in seconds that the trader will wait when you no longer have items to trade
within_radius	Decimal	0.0	Distance in blocks this mob can be interested by a player holding an item they like

minecraft:behavior.trade_with_player (See JSON Schema since 1.26.10)
Allows the player to trade with this mob. When the goal starts, it will stop the mob's navigation.

Name	Type	Default Value	Description
filters	Minecraft Filter		Conditions that need to be met for the behavior to start.
max_distance_from_player	Decimal	8.00	The max distance that the mob can be from the player before exiting the goal.

minecraft:behavior.vex_copy_owner_target
Allows the mob to target the same entity its owner is targeting.

Name	Type	Default Value	Description
entity_types	JSON Object		List of entities this mob can copy the owner from
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged

minecraft:behavior.vex_random_move
Allows the mob to move around randomly like the Vex.


minecraft:behavior.wither_random_attack_pos_goal
Allows the wither to launch random attacks. Can only be used by the Wither Boss.


minecraft:behavior.wither_target_highest_damage
Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.

Name	Type	Default Value	Description
entity_types	JSON Object		List of entity types the wither takes into account to find who dealt the most damage to it
Name	Type	Default Value	Description
cooldown	Decimal	0.0	The amount of time in seconds that the mob has to wait before selecting a target of the same type again
filters	Minecraft Filter		Conditions that make this entry in the list valid
max_dist	Decimal	16	Maximum distance this mob can be away to be a valid choice
must_see	Boolean	false	If true, the mob has to be visible to be a valid choice
must_see_forget_duration	Decimal	3.0	Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more
reevaluate_description	Boolean	false	If true, the mob will stop being targeted if it stops meeting any conditions.
sprint_speed_multiplier	Decimal	1.0	Multiplier for the running speed. A value of 1.0 means the speed is unchanged
walk_speed_multiplier	Decimal	1.0	Multiplier for the walking speed. A value of 1.0 means the speed is unchanged

minecraft:behavior.work (See JSON Schema since 1.26.10)
Allows the NPC to use the POI

Name	Type	Default Value	Description
active_time	Integer	0	The amount of ticks the NPC will stay in their the work location
can_work_in_rain	Boolean	false	If true, this entity can work when their jobsite POI is being rained on.
goal_cooldown	Integer	0	The amount of ticks the goal will be on cooldown before it can be used again
on_arrival	Trigger		Event to run when the mob reaches their jobsite.
sound_delay_max	Integer	0	The max interval in which a sound will play.
sound_delay_min	Integer	0	The min interval in which a sound will play.
speed_multiplier	Decimal	0.50	Movement speed multiplier of the mob when using this AI Goal
work_in_rain_tolerance	Integer	-1	If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal

minecraft:behavior.work_composter (See JSON Schema since 1.26.10)
Allows the NPC to use the composter POI to convert excess seeds into bone meal.

Name	Type	Default Value	Description
active_time	Integer	0	The amount of ticks the NPC will stay in their the work location
block_interaction_max	Integer	1	The maximum number of times the mob will interact with the composter.
can_empty_composter	Boolean	true	Determines whether the mob can empty a full composter.
can_fill_composter	Boolean	true	Determines whether the mob can add items to a composter given that it is not full.
can_work_in_rain	Boolean	false	If true, this entity can work when their jobsite POI is being rained on.
goal_cooldown	Integer	0	The amount of ticks the goal will be on cooldown before it can be used again
items_per_use_max	Integer	20	The maximum number of items which can be added to the composter per block interaction.
min_item_count	Integer	10	Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible
on_arrival	Trigger		Event to run when the mob reaches their jobsite.
speed_multiplier	Decimal	0.50	Movement speed multiplier of the mob when using this AI Goal
use_block_max	Integer	200	The maximum interval in which the mob will interact with the composter.
use_block_min	Integer	100	The minimum interval in which the mob will interact with the composter.
work_in_rain_tolerance	Integer	-1	If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goa