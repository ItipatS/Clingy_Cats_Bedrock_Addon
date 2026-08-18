// Material colour codes (added 1.19.80, safe on 1.26.x).
//
// Why these instead of §e/§6/§a/§b: the classic codes ARE the DOS/ANSI 16-colour
// set. They are saturated and read as "terminal". The material codes are
// desaturated, sampled from Minecraft's own ore/metal palette, and read as "game".
//
// Bedrock-specific traps:
//   - §m is material_redstone and §n is material_copper. They are NOT
//     strikethrough/underline — that is Java. Bedrock has neither.
//   - Formatting codes PERSIST across colour changes here (§l§i stays bold).
//     Java resets on colour. So reset with §r deliberately.

export const C = {
    paper:    "§h", // material_quartz   #E3D4D1 — warm off-white, body text
    muted:    "§i", // material_iron     #CECACA — secondary / field labels
    gold:     "§p", // material_gold     #DEB12D — headers (softer than §6)
    copper:   "§n", // material_copper   #B4684D — warm accent
    amethyst: "§u", // material_amethyst #9A5CC6 — personality
    diamond:  "§s", // material_diamond  #2CBAA8 — trust / cool stats
    dim:      "§8", // dark_gray         #555555 — de-emphasis, denominators
    reset:    "§r",
    bold:     "§l",
    italic:   "§o",
} as const;
