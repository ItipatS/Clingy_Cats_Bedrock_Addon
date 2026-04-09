Built-in Events
Name	Description
minecraft:entity_born	Event called on an entity that is spawned through two entities breeding.
minecraft:entity_spawned	Event called on an entity that is placed in the level.
minecraft:entity_transformed	Event called on an entity that transforms into another entity.
minecraft:on_prime	Event called on an entity whose fuse is lit and is ready to explode.

Attributes
minecraft:attack
Defines an entity's melee attack and any additional effects on it.

Name	Type	Default Value	Description
damage	Range [a, b]		Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it
effect_duration	Decimal	0.0	Duration in seconds of the status ailment applied to the damaged entity. Can also be "infinite"
effect_name	String		Identifier of the status ailment to apply to an entity attacked by this entity's melee attack

minecraft:spell_effects
Defines what mob effects to add and remove to the entity when adding this component.

Name	Type	Default Value	Description
add_effects	List		List of effects to add to this entity after adding this component
Name	Type	Default Value	Description
effect	String		Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if it is to be considered an ambient effect, and 'visible' if the effect should be visible
remove_effects	String		List of identifiers of effects to be removed from this entity after adding this component


Properties
minecraft:ambient_sound_interval
Sets the entity's delay between playing its ambient sound.

Name	Type	Default Value	Description
event_name	String	ambient	Level sound event to be played as the ambient sound.
event_names	Array		List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.
condition
The condition that must be satisfied to select the given ambient sound

event_name
Level sound event to be played as the ambient sound

range	Decimal	16.000000	Maximum time in seconds to randomly add to the ambient sound delay time.
value	Decimal	8.000000	Minimum time in seconds before the entity plays its ambient sound again.

minecraft:body_rotation_always_follows_head
Causes the entity's body rotation to match the one of their head.
Does not override the "minecraft:body_rotation_blocked" component.


minecraft:body_rotation_blocked
When set, the entity will no longer visually rotate their body to match their facing direction.


minecraft:can_climb
Allows this entity to climb up ladders.


minecraft:can_fly
Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.


minecraft:can_power_jump
Allows the entity to power jump like the Horse does in Vanilla.


minecraft:cannot_be_attacked
When set, blocks entities from attacking the owner entity unless they have the "minecraft:ignore_cannot_be_attacked" component.


minecraft:color
Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).

Name	Type	Default Value	Description
value	Integer	0	The Palette Color value of the entity.

minecraft:color2
Defines the entity's second texture color. Only works on vanilla entities that have a second predefined color values (tropical fish).

Name	Type	Default Value	Description
value	Integer	0	The second Palette Color value of the entity.

minecraft:default_look_angle
Sets this entity's default head rotation angle.

Name	Type	Default Value	Description
value	Decimal	0.0f	Angle in degrees.

minecraft:equipment
Sets the Equipment table to use for this Entity.

Name	Type	Default Value	Description
slot_drop_chance	List		A list of slots with the chance to drop an equipped item from that slot.
table	String		The file path to the equipment table, relative to the behavior pack's root.

minecraft:fire_immune
Sets that this entity doesn't take damage from fire.


minecraft:floats_in_liquid
Sets that this entity can float in liquid blocks.


minecraft:flying_speed
Speed in Blocks that this entity flies at.

Name	Type	Default Value	Description
value	Decimal	0.02	Flying speed in blocks per tick.

minecraft:friction_modifier
Defines how much friction affects this entity.

Name	Type	Default Value	Description
value	Decimal	1.0	The higher the number, the more friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much.

minecraft:ground_offset
Sets the offset from the ground that the entity is actually at.

Name	Type	Default Value	Description
value	Decimal	0.0	The value of the entity's offset from the terrain, in blocks.

minecraft:ignore_cannot_be_attacked
When set, blocks entities from attacking the owner entity unless they have the "minecraft:ignore_cannot_be_attacked" component.

Name	Type	Default Value	Description
filters	Minecraft Filter		Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject "other". If this is not specified then all attacks by the owner are allowed.

minecraft:input_ground_controlled
When configured as a rideable entity, the entity will be controlled using WASD controls. Beginning with 1.19.50 the default auto step height for rideable entities is half a block. Consider adding the "minecraft:variable_max_auto_step" component to increase it.


minecraft:is_baby
Sets that this entity is a baby.


minecraft:is_charged
Sets that this entity is charged.


minecraft:is_chested
Sets that this entity is currently carrying a chest.


minecraft:is_collidable
Allows other mobs to have vertical and horizontal collisions with this mob. For a collision to occur, both mobs must have a "minecraft:collision_box" component. This component can only be used on mobs and enables collisions exclusively between mobs.
Please note that this type of collision is unreliable for moving collidable mobs. It is recommended to use this component only in scenarios where the collidable mob remains stationary.
Collidable behavior is closely related to stackable behavior. While the "minecraft:is_collidable" component governs how other mobs interact with the component's owner, the "minecraft:is_stackable" component describes how an entity interacts with others of its own kind.


minecraft:is_dyeable
Allows dyes to be used on this entity to change its color.

Name	Type	Default Value	Description
interact_text	String		The text that will display when interacting with this entity with a dye when playing with Touch-screen controls.

minecraft:is_hidden_when_invisible
Sets that this entity can hide from hostile mobs while invisible.


minecraft:is_ignited
Sets that this entity is currently on fire.


minecraft:is_illager_captain
Sets that this entity is an Illager Captain.


minecraft:is_pregnant
Sets that this entity is currently pregnant.


minecraft:is_saddled
Sets that this entity is currently saddled.


minecraft:is_shaking
Sets that this entity is currently shaking.


minecraft:is_sheared
Sets that this entity is currently sheared.


minecraft:is_stackable
Allows instances of this entity to have vertical and horizontal collisions with each other. For a collision to occur, both instances must have a "minecraft:collision_box" component.
Stackable behavior is closely related to collidable behavior. While the "minecraft:is_stackable" component describes how an entity interacts with others of its own kind, the "minecraft:is_collidable" component governs how other mobs interact with the component's owner.


minecraft:is_stunned
Sets that this entity is currently stunned.


minecraft:is_tamed
Sets that this entity is currently tamed.


minecraft:item_controllable
Defines what items can be used to control this entity while ridden.

Name	Type	Default Value	Description
control_items	List		List of items that can be used to control this entity.

minecraft:loot
Sets the loot table for what items this entity drops upon death.

Name	Type	Default Value	Description
table	String		The path to the loot table, relative to the Behavior Pack's root.

minecraft:mark_variant
Additional variant value. Can be used to further differentiate variants.

Name	Type	Default Value	Description
value	Integer	0	The ID of the variant. By convention, 0 is the ID of the base entity.

minecraft:movement_sound_distance_offset
Sets the offset used to determine the next step distance for playing a movement sound.

Name	Type	Default Value	Description
value	Decimal	1.0	The higher the number, the less often the movement sound will be played.

minecraft:offspring
Defines the way an entity can create a born offspring.

Name	Type	Default Value	Description
blend_attributes	Boolean	true	If true, the entities will blend their attributes in the offspring after they breed.
deny_parents_variant	JSON Object		Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.
Name	Type	Default Value	Description
chance	Decimal	0	The percentage chance of denying the parents' variant.
max_variant	Integer	0	The inclusive maximum of the variant range.
min_variant	Integer	0	The inclusive minimum of the variant range.
inherit_tamed	Boolean	true	If true, the babies will be automatically tamed if its parents are
mutation_factor	JSON Object		Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.
Name	Type	Default Value	Description
color	Decimal	0	The percentage chance of the offspring getting its color as if spawned rather than inheriting color from its parents.
extra_variant	Decimal	0	The percentage chance of a mutation on the entity's extra variant type.
variant	Decimal	0	The percentage chance of a mutation on the entity's variant type.
offspring_pairs	List		The map of entity to offspring definitions that this entity can make offspring with.
parent_centric_attribute_blending	List		List of attributes that should benefit from parent centric attribute blending. For example, horses blend their health, movement, and jump_strength in their offspring.
property_inheritance	List		List of Entity Properties that should be inherited from the parent entities and potentially mutated.
random_extra_variant_mutation_interval	Range [a, b]	0	Range used to determine random extra variant.
random_variant_mutation_interval	Range [a, b]	0	Range used to determine random variant.

minecraft:push_through
Sets the distance through which the entity can push through.

Name	Type	Default Value	Description
value	Decimal	0.0	The value of the entity's push-through, in blocks.

minecraft:renders_when_invisible
When set, the entity will render even when invisible. Appropriate rendering behavior can then be specified in the corresponding "minecraft:client_entity".


minecraft:rotation_axis_aligned
Causes the entity to automatically rotate to align with the nearest cardinal direction based on its current facing direction.
Combining this with the "minecraft:body_rotation_blocked" component will cause the entity's body to align with the nearest cardinal direction and remain fixed in that orientation, regardless of changes in its facing direction.


minecraft:rotation_locked_to_vehicle
Causes the entity's rotation to match their vehicle's facing direction.


minecraft:scale
Sets the entity's visual size.

Name	Type	Default Value	Description
value	Decimal	1.0	The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger.

minecraft:skin_id
Skin ID value. Can be used to differentiate skins, such as base skins for villagers.

Name	Type	Default Value	Description
value	Integer	0	The ID of the skin. By convention, 0 is the ID of the base skin.

minecraft:sound_volume
Sets the entity's base volume for sound effects.

Name	Type	Default Value	Description
value	Decimal	1.0	The value of the volume the entity uses for sound effects.

minecraft:type_family
Defines the families this entity belongs to.

Name	Type	Default Value	Description
family	List		List of family names.

minecraft:variant
Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager)

Name	Type	Default Value	Description
value	Integer	0	The ID of the variant. By convention, 0 is the ID of the base entity.

minecraft:walk_animation_speed
Sets the speed multiplier for this entity's walk animation speed.

Name	Type	Default Value	Description
value	Decimal	1.0	The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast.

minecraft:wants_jockey
Sets that this entity wants to become a jockey.