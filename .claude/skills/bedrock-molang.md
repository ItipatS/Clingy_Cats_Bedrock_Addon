What Is Molang? ​
Molang is a math-based expression language used throughout Minecraft Bedrock Edition. It is used in animations, particles, render controllers, and behavior logic.

Expressions ​
Molang expressions are like little math problems the game solves constantly.

q.health < 5 ? 1 : 0
This returns 1.0 if health is less than 5, otherwise 0.0.

Accessing Game Data ​
1. Queries (query. or q.) ​
Read-only values provided by the game.

Queries can either return a value directly, or accept arguments to return context-specific results.

Examples without arguments:

query.is_sneaking
query.time_of_day
query.health
Examples with arguments:

query.position(0)
query.is_item_name_any('slot.weapon.offhand', 'minecraft:dirt')
query.in_range(5, 0, 10)
2. Variables (variable. or v.) ​
Read-write values stored per-entity.

Examples:

variable.buff_timer
variable.has_effect
v.buff_timer = (v.buff_timer ?? 0) + q.delta_time;
Default Variables ​
Variable	Description
variable.animation_frames_128x128	Controls animation frame index for 128x128 textures (persona)
variable.animation_frames_32x32	Controls animation frame index for 32x32 textures
variable.animation_frames_face	Controls face animation frames (used in facial expressions)
variable.attack_time	Progress of an attack animation (0.0 to 0.7)
variable.bob_animation	Oscillation used for idle/movement bobbing
variable.charge_amount	Amount of charge built up (used in attachables)
variable.damage_nearby_mobs	true if nearby mobs are being damaged
variable.gliding_speed_value	Speed value while gliding
variable.has_target	Whether the entity currently has a target
variable.is_brandishing_spear	Whether the entity is holding up a trident
variable.is_holding_left	Whether the left hand is holding something
variable.is_holding_right	Whether the right hand is holding something
variable.is_holding_spyglass	Whether the player is holding a spyglass
variable.is_horizontal_splitscreen	true if horizontal splitscreen is active
variable.is_paperdoll	Whether the paperdoll is currently visible
variable.is_sneaking	Whether the player is sneaking
variable.is_tooting_goat_horn	Whether the player is tooting a goat horn
variable.is_using_brush	Whether the player is using a brush
variable.is_using_vr	Whether the player is using a VR headset
variable.is_vertical_splitscreen	true if vertical splitscreen is active
variable.last_blink_time	Time since last blink event (persona)
variable.left_arm_swim_amount	Amount of swimming animation applied to left arm
variable.map_face_icon	true if there is a map face icon display
variable.player_arm_height	Height offset of arms (usually adjusted in first-person view)
variable.player_x_rotation	X-axis rotation of the player’s view
variable.right_arm_swim_amount	Amount of swimming animation applied to right arm
variable.short_arm_offset_left	Adjusts arm length for left arm (used in VR/paperdoll)
variable.short_arm_offset_right	Adjusts arm length for right arm
variable.swim_amount	General swimming animation progress
variable.use_blinking_animation	Enables/disables blinking animation logic
variable.use_item_interval_progress	Tracks middle portion of item use timeline
variable.use_item_startup_progress	Tracks startup phase of item use animation
variable.is_first_person	Whether the player is in first-person
3. Temporary Variables (temp. or t.) ​
Read-write values stored per-pack.

t.temp_speed = q.ground_speed * 1.2;
Temporary variables are pack-scoped and ephemeral. They only exist for the duration of the current Molang expression or loop. They are shared globally across a pack and are cleared automatically after each expression completes. They do not support structs (no .x, .y, .z).

TIP

They are also incredibly useful for passing intermediate results between expressions, especially in contexts that do not support passing in variables or queries directly, such as particles.

4. Context Variables (context. or c.) ​
Read-only values from the base game in specific situations.

Common Context Variables ​
Context Variable	Contexts	Description
context.count	Recipes	Count of something in the current context
context.is_first_person	Animations, Entities, Render Controllers	true if the entity is rendered in first person
context.item_slot	Models	Slot index of the current item
context.other	Items	The "other" item (for repair targets)
context.owning_entity	Attachables	Entity that owns this context (used for getting queries)
context.player_offhand_arm_height	Models	Arm offset used when rendering offhand
Example:

context.other->query.remaining_durability
Logic and Conditions ​
Comparison Operators ​
Operator	Description
==	Equal
!=	Not equal
<, >	Less/greater than
<=, >=	Less/greater than or equal
q.health <= 10
Boolean Logic ​
Operator	Meaning
&&	AND
||	OR
q.is_sneaking && q.is_using_item
Conditional Operators ​
Use ? and : like if-else:

Binary: condition ? result
Ternary: condition ? true : false
q.is_jumping ? 3 : 0
You can also use the null coalescing operator (??) to provide a fallback when a variable might not be initialized:

fallback = value ?? default
v.timer = (v.timer ?? 0) + q.delta_time
This avoids content log errors if v.timer has not been defined yet.

Math Functions ​
Molang supports a wide range of math functions, using degrees (not radians) for trigonometry. These are useful for animation timing, oscillation, directional math, clamping, and more.

Function	Description
math.abs(x)	Absolute value of x
math.acos(x)	Arccosine (inverse cosine) of x
math.asin(x)	Arcsine (inverse sine) of x
math.atan(x)	Arctangent (inverse tangent) of x
math.atan2(y, x)	Arctangent of y / x — returns angle in degrees
math.ceil(x)	Round x up to the nearest integer
math.clamp(x, min, max)	Constrain x between min and max
math.cos(x)	Cosine of x degrees
math.die_roll(n, low, high)	Roll n floats between low and high and sum them
math.die_roll_integer(n, low, high)	Same as above but rolls integers
math.exp(x)	Exponential (e^x)
math.floor(x)	Round x down to the nearest integer
math.hermite_blend(t)	Smooth curve: 3t^2 - 2t^3, good for eased interpolation
math.lerp(a, b, t)	Linearly interpolate between a and b by t
math.lerprotate(a, b, t)	Rotational interpolation, shortest path around a circle
math.ln(x)	Natural logarithm of x
math.max(a, b)	Larger of a or b
math.min(a, b)	Smaller of a or b
math.min_angle(x)	Clamp angle x to the range -180° to 180°
math.mod(a, b)	Remainder of a / b
math.pi	Constant for π (approximately 3.14159)
math.pow(base, exponent)	Raise base to the exponent power
math.random(low, high)	Random float between low and high
math.random_integer(low, high)	Random integer between low and high
math.round(x)	Round x to the nearest integer
math.sin(x)	Sine of x degrees
math.sqrt(x)	Square root of x
math.trunc(x)	Remove fractional part of x (round toward zero)
Structs ​
Structs in Molang are values that contain multiple related fields, like .x, .y, .z.

You can create your own structs using variable. and assign values to their fields directly:

v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
These values can then be reused or passed to other expressions:

v.target = v.other_mob->v.location;
WARNING

temp. variables do not support structs. Use variable. for anything involving .x, .y, .z, etc.

Loops and Flow Control ​
You can run expressions multiple times using loop.

v.a = 1;
v.b = 1;

loop(10, {
    t.next = v.a + v.b;
    v.a = v.b;
    v.b = t.next;
});
break and continue ​
break; exits the current loop early
continue; skips to the next iteration
loop(10, {
    (v.a > 5) ? break;
    v.a += 1;
});
Simple vs Complex Expressions ​
Simple: a single expression that returns a value
math.sin(q.anim_time * 10)
Complex: multiple statements with ; and an explicit return
t.a = math.sin(q.anim_time * 10);
t.b = t.a * t.a;
return t.b + 1;