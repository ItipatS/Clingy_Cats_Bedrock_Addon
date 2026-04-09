actor_health
Tests the health of the subject.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "actor_health", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "actor_health", "value": "0" }


all_slots_empty
Returns true when the designated equipment location for the subject entity is completely empty.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String	any	(Optional) The equipment location to test
Options	Description
any	
armor	
body	
feet	
hand	
head	
inventory	
leg	
main_hand	
torso	
Examples
Full..

{ "test": "all_slots_empty", "subject": "self", "operator": "equals", "value": "any" }

Short (using Defaults)..

{ "test": "all_slots_empty" }


any_slot_empty
Returns true when the designated equipment location for the subject entity has any empty slot.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String	any	(Optional) The equipment location to test
Options	Description
any	
armor	
body	
feet	
hand	
head	
inventory	
leg	
main_hand	
torso	
Examples
Full..

{ "test": "any_slot_empty", "subject": "self", "operator": "equals", "value": "any" }

Short (using Defaults)..

{ "test": "any_slot_empty" }


bool_property
Returns true when the bool actor property matches the value provided.

Name	Type	Default	Description
domain	String		(Required) The property name to look for
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "bool_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "bool_property", "domain": "minecraft:can_climb" }


clock_time
Compares the current time with a float value in the range (0.0, 1.0). 0.0= Noon 0.25= Sunset 0.5= Midnight 0.75= Sunrise

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "clock_time", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "clock_time", "value": "0.00" }


distance_to_nearest_player
Compares the distance to the nearest Player with a float value.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "distance_to_nearest_player", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "distance_to_nearest_player", "value": "0.00" }


enum_property
Returns true when the enum actor property matches the value provided.

Name	Type	Default	Description
domain	String		(Required) The property name to look for
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) A string value.
Examples
Full..

{ "test": "enum_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "" }

Short (using Defaults)..

{ "test": "enum_property", "domain": "minecraft:can_climb", "value": "" }


float_property
Returns true when the float actor property matches the value provided.

Name	Type	Default	Description
domain	String		(Required) The property name to look for
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "float_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "float_property", "domain": "minecraft:can_climb", "value": "0.00" }


has_ability
Returns true when the subject entity has the named ability.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Ability type to test
Options	Description
flySpeed	
flying	
instabuild	
invulnerable	
lightning	
mayfly	
mute	
noclip	
verticalFlySpeed	
walkSpeed	
worldbuilder	
Examples
Full..

{ "test": "has_ability", "subject": "self", "operator": "equals", "value": "instabuild" }

Short (using Defaults)..

{ "test": "has_ability", "value": "instabuild" }


has_biome_tag
Tests whether the biome the subject is in has the specified tag.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The tag to look for
Examples
Full..

{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }

Short (using Defaults)..

{ "test": "has_biome_tag", "value": " " }


has_component
Returns true when the subject entity contains the named component.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The component name to look for
Examples
Full..

{ "test": "has_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }

Short (using Defaults)..

{ "test": "has_component", "value": "minecraft:explode" }


has_container_open
Returns true when the subject Player entity has opened a container.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_container_open", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_container_open" }


has_damage
Returns true when the subject entity receives the named damage type.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Damage type to test
Options	Description
anvil	
attack	
block_explosion	
contact	
drowning	
entity_explosion	
fall	
falling_block	
fatal	Any damage which kills the subject
fire	
fire_tick	
fly_into_wall	
lava	
magic	
none	
override	
piston	
projectile	
self_destruct	
sonic_boom	
stalactite	
stalagmite	
starve	
suffocation	
thorns	
void	
wither	
Examples
Full..

{ "test": "has_damage", "subject": "self", "operator": "equals", "value": "fatal" }

Short (using Defaults)..

{ "test": "has_damage", "value": "fatal" }


has_damaged_equipment
Tests for the presence of a damaged named item in the designated slot of the subject entity.

Name	Type	Default	Description
domain	String	any	(Optional) The equipment location to test
Options	Description
any	
armor	
body	
feet	
hand	
head	
inventory	
leg	
main_hand	
torso	
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The item name to look for
Examples
Full..

{ "test": "has_damaged_equipment", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }

Short (using Defaults)..

{ "test": "has_damaged_equipment", "value": "dirt" }


has_equipment
Tests for the presence of a named item in the designated slot of the subject entity.

Name	Type	Default	Description
domain	String	any	(Optional) The equipment location to test
Options	Description
any	
armor	
body	
feet	
hand	
head	
inventory	
leg	
main_hand	
torso	
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The item name to look for
Examples
Full..

{ "test": "has_equipment", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }

Short (using Defaults)..

{ "test": "has_equipment", "value": "dirt" }


has_equipment_tag
Tests for the presence of an item with the named tag in the designated slot of the subject entity.

Name	Type	Default	Description
domain	String	any	(Optional) The equipment location to test
Options	Description
any	
armor	
body	
feet	
hand	
head	
inventory	
leg	
main_hand	
torso	
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The item name to look for
Examples
Full..

{ "test": "has_equipment_tag", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }

Short (using Defaults)..

{ "test": "has_equipment_tag", "value": "dirt" }


has_item_with_component
Returns true when the subject entity is holding a item with the specified component.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The component name to look for
Examples
Full..

{ "test": "has_item_with_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }

Short (using Defaults)..

{ "test": "has_item_with_component", "value": "minecraft:explode" }


has_mob_effect
Tests whether the Subject has the specified mob effect.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Optional) A string value.
Examples
Full..

{ "test": "has_mob_effect", "subject": "self", "operator": "equals", "value": "" }

Short (using Defaults)..

{ "test": "has_mob_effect" }


has_nametag
Tests if the subject has been given a custom name.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_nametag", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_nametag" }


has_property
Tests for the presence of a property of the subject entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The property name to look for
Examples
Full..

{ "test": "has_property", "subject": "self", "operator": "equals", "value": "minecraft:can_climb" }

Short (using Defaults)..

{ "test": "has_property", "value": "minecraft:can_climb" }


has_ranged_weapon
Returns true when the subject entity is holding a ranged weapon like a bow or crossbow.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_ranged_weapon", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_ranged_weapon" }


has_silk_touch
Tests if the subject is holding an item with silk touch.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_silk_touch", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_silk_touch" }


has_tag
Returns true if the subject entity has the tag provided.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Optional) A string value.
Examples
Full..

{ "test": "has_tag", "subject": "self", "operator": "equals", "value": "" }

Short (using Defaults)..

{ "test": "has_tag" }


has_target
Returns true if the subject entity has a valid target.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_target", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_target" }


has_trade_supply
Tests whether the target has any trade supply left. Will return false if the target cannot be traded with.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "has_trade_supply", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "has_trade_supply" }


home_distance
Tests the distance between the subject and its home. Returns false if the subject has no home or if their home is in a different dimension.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "home_distance", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "home_distance", "value": "0.00" }


hourly_clock_time
Compares the current 24 hour time with an int value in the range[0, 24000]

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "hourly_clock_time", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "hourly_clock_time", "value": "0" }


in_block
Returns true when the subject entity is inside a specified Block type.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Optional) A string value.
Examples
Full..

{ "test": "in_block", "subject": "self", "operator": "equals", "value": "" }

Short (using Defaults)..

{ "test": "in_block" }


in_caravan
Returns true if the subject entity is in a caravan.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_caravan", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_caravan" }


in_clouds
Returns true when the subject entity is in the clouds.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_clouds", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_clouds" }


in_contact_with_water
Returns true when the subject entity in contact with any water: water, rain, splash water bottle.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_contact_with_water", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_contact_with_water" }


in_lava
Returns true when the subject entity is in lava.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_lava", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_lava" }


in_nether
Returns true when the subject entity is in Nether.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_nether", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_nether" }


in_overworld
Returns true when the subject entity is in Overworld.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_overworld", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_overworld" }


in_water
Returns true when the subject entity is in water.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_water", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_water" }


in_water_or_rain
Returns true when the subject entity is in water or rain.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "in_water_or_rain", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "in_water_or_rain" }


inactivity_timer
Tests if the specified duration in seconds of inactivity for despawning has been reached.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "inactivity_timer", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "inactivity_timer", "value": "0" }


int_property
Returns true when the int actor property matches the value provided.

Name	Type	Default	Description
domain	String		(Required) The property name to look for
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "int_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "int_property", "domain": "minecraft:can_climb", "value": "0" }


is_altitude
Tests the current altitude against a provided value. 0= bedrock elevation.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) The altitude value to compare with
Examples
Full..

{ "test": "is_altitude", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "is_altitude", "value": "0" }


is_avoiding_mobs
Returns true if the subject entity is fleeing from other mobs.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_avoiding_mobs", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_avoiding_mobs" }


is_baby
Returns true when the subject entity is a baby.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_baby", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_baby" }


is_biome
Tests whether the Subject is currently in the named biome.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Biome type to test
Options	Description
beach	
desert	
extreme_hills	
flat	
forest	
ice	
jungle	
mesa	
mushroom_island	
ocean	
plain	
river	
savanna	
stone_beach	
swamp	
taiga	
the_end	
the_nether	
Examples
Full..

{ "test": "is_biome", "subject": "self", "operator": "equals", "value": "beach" }

Short (using Defaults)..

{ "test": "is_biome", "value": "beach" }


is_block
Returns true when the block has the given name.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "is_block", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "is_block", "value": "player" }


is_bound_to_creaking_heart
Tests that the Creaking Heart that spawned the subject Creaking still exists.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_bound_to_creaking_heart", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_bound_to_creaking_heart" }


is_brightness
Tests the current brightness against a provided value in the range (0.0f, 1.0f).

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) The brightness value to compare with.
Examples
Full..

{ "test": "is_brightness", "subject": "self", "operator": "equals", "value": "0.50" }

Short (using Defaults)..

{ "test": "is_brightness", "value": "0.50" }


is_climbing
Returns true if the subject entity is climbing.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_climbing", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_climbing" }


is_color
Returns true if the subject entity is the named color.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Palette Color to test
Options	Description
black	
blue	
brown	
cyan	
gray	
green	
light_blue	
light_green	
magenta	
orange	
pink	
purple	
red	
silver	
white	
yellow	
Examples
Full..

{ "test": "is_color", "subject": "self", "operator": "equals", "value": "white" }

Short (using Defaults)..

{ "test": "is_color", "value": "white" }


is_controlling_passenger_family
Returns true when the subject entity's controlling passenger is a member of the named family.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "is_controlling_passenger_family", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "is_controlling_passenger_family", "value": "player" }


is_daytime
Returns true during the daylight hours.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_daytime", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_daytime" }


is_difficulty
Tests the current difficulty level of the game.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The game's difficulty level to test
Options	Description
easy	
hard	
normal	
peaceful	
Examples
Full..

{ "test": "is_difficulty", "subject": "self", "operator": "equals", "value": "normal" }

Short (using Defaults)..

{ "test": "is_difficulty", "value": "normal" }


is_family
Returns true when the subject entity is a member of the named family.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "is_family", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "is_family", "value": "player" }


is_game_rule
Tests whether a named game rule is active.

Name	Type	Default	Description
domain	String		(Required) The Game Rule to test.
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_game_rule", "subject": "self", "domain": "domobspawning", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_game_rule", "domain": "domobspawning" }


is_humid
Tests whether the Subject is in an area with humidity

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_humid", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_humid" }


is_immobile
Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_immobile", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_immobile" }


is_in_same_vehicle
Returns whether the subject entity is in the same vehicle as the calling entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean		(Required) true or false.
Examples
Full..

{ "test": "is_in_same_vehicle", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_in_same_vehicle", "value": "true" }


is_in_village
Tests whether the Subject is inside the bounds of a village.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_in_village", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_in_village" }


is_leashed
Returns true if the subject entity is leashed.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_leashed", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_leashed" }


is_leashed_to
Returns true if the subject entity leashed to the calling entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_leashed_to", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_leashed_to" }


is_mark_variant
Returns true if the subject entity is the mark variant number provided.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "is_mark_variant", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "is_mark_variant", "value": "0" }


is_missing_health
Tests if the subject is not at full health.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_missing_health", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_missing_health" }


is_moving
Returns true if the subject entity is moving.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_moving", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_moving" }


is_navigating
Tests if the subject is currently pathfinding. Requires a "minecraft:navigation" component.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_navigating", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_navigating" }


is_owner
Returns true if the subject entity is the owner of the calling entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_owner", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_owner" }


is_panicking
Tests if the subject is panicking.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_panicking", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_panicking" }


is_persistent
Tests if the subject's persistence matches the bool value passed in.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_persistent", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_persistent" }


is_raider
Tests if the subject is a raider.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_raider", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_raider" }


is_riding
Returns true if the subject entity is riding on another entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_riding", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_riding" }


is_riding_self
Returns true if the subject entity is riding the calling entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_riding_self", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_riding_self" }


is_sitting
Tests if the subject is sitting.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_sitting", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_sitting" }


is_skin_id
Returns true if the subject entity is the skin id number provided.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "is_skin_id", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "is_skin_id", "value": "0" }


is_sleeping
Tests whether the Subject is sleeping.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_sleeping", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_sleeping" }


is_sneak_held
Returns true if the subject entity has the sneak input held.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_sneak_held", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_sneak_held" }


is_sneaking
Returns true if the subject entity is sneaking.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_sneaking", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_sneaking" }


is_snow_covered
Tests whether the Subject is in an area with snow cover

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_snow_covered", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_snow_covered" }


is_sprinting
Tests if the subject is sprinting.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_sprinting", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_sprinting" }


is_tamed
Tests whether the Subject is tamed.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_tamed", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_tamed" }
is_target
Returns true if the subject entity is the target of the calling entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_target", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_target" }


is_temperature_type
Tests whether the current temperature is a given type.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Biome temperature catagory to test
Options	Description
cold	
mild	
ocean	
warm	
Examples
Full..

{ "test": "is_temperature_type", "subject": "self", "operator": "equals", "value": "cold" }

Short (using Defaults)..

{ "test": "is_temperature_type", "value": "cold" }


is_temperature_value
Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) The Biome temperature value to compare with.
Examples
Full..

{ "test": "is_temperature_value", "subject": "self", "operator": "equals", "value": "0.50" }

Short (using Defaults)..

{ "test": "is_temperature_value", "value": "0.50" }


is_underground
Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_underground", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_underground" }


is_underwater
Returns true when the subject entity is under water. An entity is considered underwater if it is completely submerged in water blocks.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_underwater", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_underwater" }


is_variant
Returns true if the subject entity is the variant number provided.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "is_variant", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "is_variant", "value": "0" }


is_vehicle_family
Returns true when the subject entity's vehicle is a member of the named family.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "is_vehicle_family", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "is_vehicle_family", "value": "player" }


is_visible
Returns true if the subject entity is visible.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "is_visible", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_visible" }


is_waterlogged
Tests if the subject block is submerged in water.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean		(Required) true or false.
Examples
Full..

{ "test": "is_waterlogged", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "is_waterlogged", "value": "true" }


is_weather
DEPRECATED

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "is_weather", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "is_weather", "value": "player" }


light_level
Tests is the mob is outside of the specified light level range (0, 16).

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "light_level", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "light_level", "value": "0" }


moon_intensity
Compares the current moon intensity with a float value in the range (0.0, 1.0)

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "moon_intensity", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "moon_intensity", "value": "0.00" }


moon_phase
Compares the current moon phase with an integer value in the range (0, 7).

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "moon_phase", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "moon_phase", "value": "0" }


on_fire
Tests if the subject is on fire.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "on_fire", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "on_fire" }


on_ground
Returns true when the subject entity is on ground.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "on_ground", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "on_ground" }


on_hot_block
Tests if the subject is on a hot block.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "on_hot_block", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "on_hot_block" }


on_ladder
Returns true when the subject entity is on a ladder.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "on_ladder", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "on_ladder" }


owner_distance
Tests the distance between the subject and its owner. Returns false if there is no owner.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "owner_distance", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "owner_distance", "value": "0.00" }


random_chance
Returns true if the random chance rolls 0 out of a specified max range.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "random_chance", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "random_chance", "value": "0" }


rider_count
Returns the number of riders on this entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Integer		(Required) An integer value.
Examples
Full..

{ "test": "rider_count", "subject": "self", "operator": "equals", "value": "0" }

Short (using Defaults)..

{ "test": "rider_count", "value": "0" }


surface_mob
Tests if the subject is a surface mob.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "surface_mob", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "surface_mob" }


taking_fire_damage
Tests if the subject is taking fire damage. Requires the damage_sensor component

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "taking_fire_damage", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "taking_fire_damage" }


target_distance
Tests the distance between the calling entity and its target.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "target_distance", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "target_distance", "value": "0.00" }


trusts
Returns true if the subject is trusted by entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "trusts", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "trusts" }


was_last_hurt_by
Tests if the subject is the last player who attacked the entity in the last 400 seconds, or the last mob to do so in the last 60 seconds.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Boolean	true	(Optional) true or false.
Examples
Full..

{ "test": "was_last_hurt_by", "subject": "self", "operator": "equals", "value": "true" }

Short (using Defaults)..

{ "test": "was_last_hurt_by" }


weather
Tests the current weather in the dimension against a provided weather value.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "weather", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "weather", "value": "player" }


weather_at_position
Tests the current weather, at the actor's position, against a provided weather value.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	String		(Required) The Family name to look for
Examples
Full..

{ "test": "weather_at_position", "subject": "self", "operator": "equals", "value": "player" }

Short (using Defaults)..

{ "test": "weather_at_position", "value": "player" }


y_rotation
Returns the Y rotation of this entity.

Name	Type	Default	Description
operator	String	equals	(Optional) The comparison to apply with 'value'.
Options	Description
!=	Test for inequality.
<	Test for less-than the value.
<=	Test for less-than or equal to the value.
<>	Test for inequality.
=	Test for equality.
==	Test for equality.
>	Test for greater-than the value.
>=	Test for greater-than or equal to the value.
equals	Test for equality.
not	Test for inequality.
subject	String	self	(Optional) The subject of this filter test.
Options	Description
block	The block involved with the interaction.
damager	The damaging actor involved with the interaction.
other	The other member of an interaction, not the caller.
parent	The caller's current parent.
player	The player involved with the interaction.
self	The entity or object calling the test
target	The caller's current target.
value	Decimal		(Required) A floating point value.
Examples
Full..

{ "test": "y_rotation", "subject": "self", "operator": "equals", "value": "0.00" }

Short (using Defaults)..

{ "test": "y_rotation", "value": "0.00" }


Example:
This filter group will pass only when the moon_intensity is greater than 0.5 AND the caller's target entity is standing in water.

"all_of" : [

:   { "test" : "moon_intensity", "subject" : "self", "operator" : "greater", "value" : "0.5" }, 

:   { "test" : "in_water", "subject" : "target", "operator" : "equal", "value" : "true" } 

: ]