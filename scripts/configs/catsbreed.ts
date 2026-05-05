
// ============================================================
// TYPES
// ============================================================
export type TextureData = {
    pattern:  string;
    color:    string;
    hairs:    string;
    tail:     string;
    snout:    string;
    head:     string;
};

export type Breed = "all_black" | "black" | "british_shorthair" | "calico" | "jellie" | "ocelot" | "persian";

// ============================================================
// TEXTURE CATALOGS — index matches RP array order exactly
// ============================================================
export const ALL_BLACK_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "solid", color: "black",  hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // all_black
    1:  { pattern: "solid", color: "black",  hairs: "short",  tail: "normal",  snout: "normal", head: "flat"  }, // all_black2
    2:  { pattern: "solid", color: "black",  hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // all_black3
    3:  { pattern: "solid", color: "brown",  hairs: "short",  tail: "normal",  snout: "normal", head: "flat"  }, // all_black4
    4:  { pattern: "solid", color: "brown",  hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // all_black5
    5:  { pattern: "solid", color: "brown",  hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // all_black6
    6:  { pattern: "solid", color: "black",  hairs: "short",  tail: "normal",  snout: "short",  head: "round" }, // all_black7
    7:  { pattern: "solid", color: "white",  hairs: "short",  tail: "normal",  snout: "short",  head: "round" }, // all_black8
    8:  { pattern: "solid", color: "white",  hairs: "short",  tail: "normal",  snout: "normal", head: "flat"  }, // all_black9
    9:  { pattern: "solid", color: "white",  hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // all_black10
    10: { pattern: "solid", color: "gray",   hairs: "short",  tail: "normal",  snout: "normal", head: "flat"  }, // all_black11
    11: { pattern: "solid", color: "gray",   hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // all_black12
    12: { pattern: "solid", color: "black",  hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // all_black13
    13: { pattern: "solid", color: "black",  hairs: "short",  tail: "bobtail", snout: "normal", head: "flat"  }, // all_black14
    14: { pattern: "solid", color: "black",  hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // all_black15
    15: { pattern: "solid", color: "brown",  hairs: "short",  tail: "bobtail", snout: "normal", head: "flat"  }, // all_black16
    16: { pattern: "solid", color: "brown",  hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // all_black17
    17: { pattern: "solid", color: "brown",  hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // all_black18
    18: { pattern: "solid", color: "black",  hairs: "short",  tail: "bobtail", snout: "short",  head: "round" }, // all_black19
    19: { pattern: "solid", color: "gray",   hairs: "short",  tail: "bobtail", snout: "normal", head: "flat"  }, // all_black20
    20: { pattern: "solid", color: "gray",   hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // all_black21
    21: { pattern: "solid", color: "white",  hairs: "short",  tail: "bobtail", snout: "short",  head: "round" }, // all_black22
    22: { pattern: "solid", color: "white",  hairs: "short",  tail: "bobtail", snout: "normal", head: "flat"  }, // all_black23
    23: { pattern: "solid", color: "white",  hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // all_black24
};

export const BLACK_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "tuxedo",   color: "black", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // black
    1:  { pattern: "bicolor",  color: "black", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // black2
    2:  { pattern: "bicolor",  color: "white", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // black3
    3:  { pattern: "tuxedo",   color: "black", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // black4
    4:  { pattern: "bicolor",  color: "white", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // black5
    5:  { pattern: "bicolor",  color: "black", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // black6
    6:  { pattern: "tuxedo",   color: "black", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // black7
    7:  { pattern: "bicolor",  color: "black", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // black8
    8:  { pattern: "bicolor",  color: "white", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // black9
    9:  { pattern: "bicolor",  color: "white", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // black10
    10: { pattern: "tuxedo",   color: "black", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // black11
    11: { pattern: "bicolor",  color: "black", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // black12
    12: { pattern: "bicolor",  color: "white", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // black13
    13: { pattern: "tuxedo",   color: "black", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // black14
    14: { pattern: "bicolor",  color: "white", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // black15
    15: { pattern: "bicolor",  color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // black16
    16: { pattern: "tuxedo",   color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // black17
    17: { pattern: "bicolor",  color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // black18
    18: { pattern: "bicolor",  color: "white", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // black19
    19: { pattern: "bicolor",  color: "white", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // black20
};

export const BRITISH_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "solid",         color: "gray",   hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair
    1:  { pattern: "solid",         color: "black",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair2
    2:  { pattern: "solid",         color: "black",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair3
    3:  { pattern: "solid",         color: "white",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair4
    4:  { pattern: "tabby",         color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair5
    5:  { pattern: "tabby",         color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair6
    6:  { pattern: "tabby",         color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair7
    7:  { pattern: "tabby",         color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair8
    8:  { pattern: "tabby",         color: "orange", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair9
    9:  { pattern: "tabby",         color: "orange", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair10
    10: { pattern: "tabby",         color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair11
    11: { pattern: "tabby",         color: "brown",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair12
    12: { pattern: "tabby",         color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair13
    13: { pattern: "tabby",         color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair14
    14: { pattern: "tabby",         color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair15
    15: { pattern: "tabby",         color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair16
    16: { pattern: "tabby",         color: "brown",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair17
    17: { pattern: "tabby",         color: "brown",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair18
    18: { pattern: "tabby",         color: "brown",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair19
    19: { pattern: "tabby",         color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair20
    20: { pattern: "bicolor",       color: "orange", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair21
    21: { pattern: "tuxedo",        color: "black",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair22
    22: { pattern: "bicolor",       color: "black",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair23
    23: { pattern: "calico",        color: "white",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair24
    24: { pattern: "calico",        color: "white",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair25
    25: { pattern: "tortoiseshell", color: "brown",  hairs: "short",  tail: "normal", snout: "short", head: "round" }, // british_shorthair26
    26: { pattern: "tortoiseshell", color: "brown",  hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // british_shorthair27
};

export const CALICO_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "calico",        color: "white", hairs: "fluffy", tail: "normal",  snout: "short", head: "round" }, // calico
    1:  { pattern: "calico",        color: "white", hairs: "short",  tail: "normal",  snout: "short", head: "round" }, // calico2
    2:  { pattern: "calico",        color: "white", hairs: "fluffy", tail: "normal",  snout: "short", head: "round" }, // calico3
    3:  { pattern: "calico",        color: "white", hairs: "short",  tail: "normal",  snout: "short", head: "round" }, // calico4
    4:  { pattern: "bicolor",       color: "white", hairs: "short",  tail: "normal",  snout: "short", head: "round" }, // calico5
    5:  { pattern: "bicolor",       color: "white", hairs: "fluffy", tail: "normal",  snout: "short", head: "round" }, // calico6
    6:  { pattern: "tortoiseshell", color: "brown", hairs: "short",  tail: "normal",  snout: "short", head: "round" }, // calico7
    7:  { pattern: "tortoiseshell", color: "brown", hairs: "fluffy", tail: "normal",  snout: "short", head: "round" }, // calico8
    8:  { pattern: "calico",        color: "white", hairs: "short",  tail: "bobtail", snout: "short", head: "round" }, // calico9
    9:  { pattern: "calico",        color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" }, // calico10
    10: { pattern: "calico",        color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" }, // calico11
    11: { pattern: "calico",        color: "white", hairs: "short",  tail: "bobtail", snout: "short", head: "round" }, // calico12
    12: { pattern: "bicolor",       color: "white", hairs: "short",  tail: "bobtail", snout: "short", head: "round" }, // calico13
    13: { pattern: "bicolor",       color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" }, // calico14
    14: { pattern: "tortoiseshell", color: "brown", hairs: "short",  tail: "bobtail", snout: "short", head: "round" }, // calico15
    15: { pattern: "tortoiseshell", color: "brown", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" }, // calico16
};

export const JELLIE_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie
    1:  { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie2
    2:  { pattern: "tabby",         color: "orange",    hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie3
    3:  { pattern: "tabby",         color: "orange",    hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie4
    4:  { pattern: "tabby",         color: "orange",    hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie5
    5:  { pattern: "tabby",         color: "orange",    hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie6
    6:  { pattern: "tabby",         color: "orange",    hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie7
    7:  { pattern: "tabby",         color: "orange",    hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie8
    8:  { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie9
    9:  { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie10
    10: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie11
    11: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie12
    12: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie13
    13: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie14
    14: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie15
    15: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie16
    16: { pattern: "tabby",         color: "orange",    hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie17
    17: { pattern: "tabby",         color: "orange",    hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie18
    18: { pattern: "tuxedo",        color: "black",     hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie19
    19: { pattern: "tuxedo",        color: "black",     hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie20
    20: { pattern: "calico",        color: "white",     hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie21
    21: { pattern: "calico",        color: "white",     hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie22
    22: { pattern: "tortoiseshell", color: "chocolate", hairs: "short",  tail: "normal", snout: "short", head: "round" }, // jellie23
    23: { pattern: "tortoiseshell", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // jellie24
};

export const OCELOT_TEXTURES: Record<number, TextureData> = {
    0: { pattern: "tortoiseshell", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "flat" }, // ocelot
};

export const PERSIAN_TEXTURES: Record<number, TextureData> = {
    0: { pattern: "solid",   color: "orange",    hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persian
    1: { pattern: "solid",   color: "black",     hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain2
    2: { pattern: "solid",   color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain3
    3: { pattern: "solid",   color: "white",     hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain4
    4: { pattern: "pointed", color: "white",     hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain5
    5: { pattern: "solid",   color: "gray",      hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain6
    6: { pattern: "bicolor", color: "gray",      hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain7
    7: { pattern: "tuxedo",  color: "black",     hairs: "fluffy", tail: "normal", snout: "short", head: "round" }, // persain8
};

export const RAGDOLL_TEXTURES: Record<number, TextureData> = {
    0: { pattern: "pointed", color: "white",     hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // ragdoll
    1: { pattern: "pointed", color: "orange",    hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // ragdoll2
    2: { pattern: "pointed", color: "cream",     hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // ragdoll3
    3: { pattern: "pointed", color: "gray",      hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // ragdoll4
    4: { pattern: "pointed", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // ragdoll5
};

export const RED_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red
    1:  { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red2
    2:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red3
    3:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red4
    4:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red5
    5:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red6
    6:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red7
    7:  { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red8
    8:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red9
    9:  { pattern: "tabby", color: "orange", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // red10
    10: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red11
    11: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red12
    12: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red13
    13: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // red14
    14: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red15
    15: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red16
    16: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red17
    17: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red18
    18: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red19
    19: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red20
    20: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red21
    21: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red22
    22: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red23
    23: { pattern: "tabby", color: "orange", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // red24
    24: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red25
    25: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red26
    26: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red27
    27: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // red28
};

export const SIAMESE_TEXTURES: Record<number, TextureData> = {
    0: { pattern: "pointed", color: "cream", hairs: "short",  tail: "normal", snout: "normal", head: "round" }, // siamese
    1: { pattern: "pointed", color: "cream", hairs: "short",  tail: "normal", snout: "normal", head: "round" }, // siamese2
    2: { pattern: "pointed", color: "cream", hairs: "short",  tail: "normal", snout: "normal", head: "round" }, // siamese3
    3: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // siamese4
    4: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // siamese5
    5: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }, // siamese6
};

export const TABBY_TEXTURES: Record<number, TextureData> = {
    0:  { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby
    1:  { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby2
    2:  { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby3
    3:  { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby4
    4:  { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby5
    5:  { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby6
    6:  { pattern: "tabby",         color: "gray",      hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // tabby7
    7:  { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // tabby8
    8:  { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // tabby9
    9:  { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // tabby10
    10: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "normal",  snout: "normal", head: "round" }, // tabby11
    11: { pattern: "tortoiseshell", color: "orange",    hairs: "short",  tail: "normal",  snout: "normal", head: "round" }, // tabby12
    12: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby13
    13: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby14
    14: { pattern: "tabby",         color: "chocolate", hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby15
    15: { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby16
    16: { pattern: "tabby",         color: "gray",      hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby17
    17: { pattern: "tabby",         color: "gray",      hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // tabby18
    18: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // tabby19
    19: { pattern: "tabby",         color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }, // tabby20
    20: { pattern: "tortoiseshell", color: "gray",      hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby21
    21: { pattern: "tortoiseshell", color: "orange",    hairs: "short",  tail: "bobtail", snout: "normal", head: "round" }, // tabby22
};

export const WHITE_TEXTURES: Record<number, TextureData> = {
    0: { pattern: "sphinx", color: "white",     hairs: "none", tail: "normal", snout: "normal", head: "flat" }, // white
    1: { pattern: "sphinx", color: "chocolate", hairs: "none", tail: "normal", snout: "normal", head: "flat" }, // white2
    2: { pattern: "sphinx", color: "white",     hairs: "none", tail: "normal", snout: "normal", head: "flat" }, // white3
    3: { pattern: "sphinx", color: "gray",      hairs: "none", tail: "normal", snout: "normal", head: "flat" }, // white4
};

export const PATTERN_DRIFT: Partial<Record<string, string[]>> = {

    // Solid: cleanest coat, white spotting can develop → bicolor
    // recessive agouti can surface → tabby (rare)
    "solid": [
        "solid", "solid", "solid",
        "bicolor",
        "tabby",
    ],

    // Bicolor: white spotting active, can intensify → tuxedo
    // or reduce → solid, or gain color complexity → tortoiseshell
    "bicolor": [
        "bicolor", "bicolor",
        "solid",
        "tuxedo",
        "tortoiseshell",
    ],

    // Tuxedo: high-contrast bicolor, very stable
    "tuxedo": [
        "tuxedo", "tuxedo", "tuxedo",
        "bicolor",
        "solid",
    ],

    // Tabby: agouti gene dominant, very heritable
    // can mute → solid, gain color complexity → tortoiseshell
    "tabby": [
        "tabby", "tabby", "tabby",
        "solid",
        "tortoiseshell",
    ],

    // Tortoiseshell: tabby + orange gene, can gain white → calico
    // or lose complexity → tabby/solid
    "tortoiseshell": [
        "tortoiseshell", "tortoiseshell",
        "calico",
        "tabby",
        "solid",
    ],

    // Calico: tortoiseshell + white base (color is always white in catalog)
    // loses white → tortoiseshell, loses patches → bicolor
    "calico": [
        "calico", "calico",
        "tortoiseshell",
        "bicolor",
        "solid",
    ],

    // Pointed: breed-locked (siamese/ragdoll), extremely stable
    "pointed": [
        "pointed", "pointed", "pointed", "pointed",
        "solid",
    ],

    // Sphinx: structural/hairless — nearly fully locked
    // color varies freely (skin showing), pattern itself almost never drifts
    "sphinx": [
        "sphinx", "sphinx", "sphinx", "sphinx", "sphinx",
        "solid",
    ],
};

// ============================================================
// EYE & WHISKER OPTIONS
// ============================================================
export const EYE_COLORS = [
    "emerald", 
    "green", 
    "yellow", 
    "orange", 
    "teal", 
    "blue", 
    "gray", 
    "brown", 
    "heterochromia1", 
    "heterochromia2", 
    "heterochromia3"
] as const;

export const EYE_SHAPES = [
    "almond", 
    "narrow", 
    "round"
] as const;

export const WHISKERS = [
    "short_white",   // 0
    "short_black",   // 1
    "medium_white",  // 2
    "medium_black",  // 3
    "long_white",    // 4
    "long_black",    // 5
] as const;

export type EyesData = {
    shape: typeof EYE_SHAPES[number];
    color: typeof EYE_COLORS[number];
};

export type WhiskerData = {
    length: typeof WHISKERS[number];
};

export type CatData = TextureData & EyesData & WhiskerData;


// ============================================================
// BREED LOOKUP — maps typeId → its texture catalog
// ============================================================
export const BREED_TEXTURES: Record<string, Record<number, TextureData>> = {
    "clingy_cats:all_black": ALL_BLACK_TEXTURES,
    "clingy_cats:black":     BLACK_TEXTURES,
    "clingy_cats:british":   BRITISH_TEXTURES,
    "clingy_cats:calico":    CALICO_TEXTURES,
    "clingy_cats:jellie":    JELLIE_TEXTURES,
    "clingy_cats:ocelot":    OCELOT_TEXTURES,
    "clingy_cats:persian":   PERSIAN_TEXTURES,
    "clingy_cats:ragdoll":   RAGDOLL_TEXTURES,
    "clingy_cats:red":       RED_TEXTURES,
    "clingy_cats:siamese":   SIAMESE_TEXTURES,
    "clingy_cats:tabby":     TABBY_TEXTURES,
    "clingy_cats:white":     WHITE_TEXTURES,
};

export const BREED_OFFSETS: Record<string, number> = {
    "clingy_cats:white":     0,
    "clingy_cats:black":     4,
    "clingy_cats:red":       24,
    "clingy_cats:siamese":   52,
    "clingy_cats:british":   58,
    "clingy_cats:calico":    85,
    "clingy_cats:persian":   101,
    "clingy_cats:ragdoll":   109,
    "clingy_cats:tabby":     114,
    "clingy_cats:all_black": 136,
    "clingy_cats:jellie":    160,
};


export const TRAIT_POOL = [
    { weight: 1, trait: "lazy"},
    { weight: 1, trait: "active"},
    { weight: 1, trait: "curious"},
    { weight: 1, trait: "shy"},
    { weight: 1, trait: "friendly"},
    { weight: 1, trait: "independent"},
] as const;

export const PERSONALITY_POOL = [
    { weight: 1, personality: "affectionate"},
    { weight: 1, personality: "aloof"},
    { weight: 1, personality: "playful"},
    { weight: 1, personality: "calm"},
    { weight: 1, personality: "anxious"},
    { weight: 1, personality: "confident"},
] as const;

export const FAVORITE_FOOD_POOL = [
    { weight: 1, food: "carrot" },
    { weight: 1, food: "spider_eye"},
    { weight: 3, food: "beef"   },
    { weight: 3, food: "porkchop"},
    { weight: 3, food: "cod"     },
    { weight: 3, food: "salmon"    },
    { weight: 2, food: "tropical"  },
    { weight: 1, food: "puffer"   },
    { weight: 2, food: "rabbit"    },
    { weight: 3, food: "chicken"    },
    /*{ weight: 2, food: "treat_fish"},
    { weight: 2, food: "treat_meat"},
    { weight: 1, food: "treat_fancy"},*/
] as const;

export const FAVORITE_BLOCK_POOL = [
    { weight: 1, block: "bed"},
    { weight: 1, block: "soft"},
    { weight: 1, block: "warm"},
    { weight: 1, block: "high"},
    { weight: 1, block: "owner"},
    { weight: 1, block: "sun"},
] as const;

export type BehaviorTrait = "lazy" | "active" | "curious" | "shy" | "friendly" | "independent";
export type Personality   = "affectionate" | "aloof" | "playful" | "calm" | "anxious" | "confident";
export type FavoriteBlock = "bed" | "soft" | "warm" | "high" | "owner" | "sun";

export type WeightedEntry<T extends string> = {
    value: T;
    weight: number;
};

export const BREED_SPAWN_POOLS: Record<string, {
    trait: WeightedEntry<BehaviorTrait>[],
    personality: WeightedEntry<Personality>[],
    block: WeightedEntry<FavoriteBlock>[]
}> = {

    ragdoll: {
        trait: [
            { value: "lazy",        weight: 5 },
            { value: "friendly",    weight: 3 },
            { value: "independent", weight: 1 },
            { value: "curious",     weight: 1 },
        ],
        personality: [
            { value: "affectionate", weight: 5 },
            { value: "calm",         weight: 3 },
            { value: "aloof",        weight: 1 },
            { value: "playful",      weight: 1 },
        ],
        block: [
            { value: "soft",  weight: 5 },
            { value: "bed",   weight: 3 },
            { value: "owner", weight: 2 },
        ]
    },

    siamese: {
        trait: [
            { value: "curious",     weight: 4 },
            { value: "active",      weight: 3 },
            { value: "friendly",    weight: 2 },
            { value: "independent", weight: 1 },
        ],
        personality: [
            { value: "confident",    weight: 4 },
            { value: "playful",      weight: 3 },
            { value: "affectionate", weight: 2 },
            { value: "anxious",      weight: 1 },
        ],
        block: [
            { value: "high",  weight: 4 },
            { value: "sun",   weight: 3 },
            { value: "owner", weight: 2 },
            { value: "warm",  weight: 1 },
        ]
    },

    persian: {
        trait: [
            { value: "lazy",        weight: 5 },
            { value: "independent", weight: 3 },
            { value: "shy",         weight: 2 },
        ],
        personality: [
            { value: "aloof",        weight: 5 },
            { value: "calm",         weight: 3 },
            { value: "affectionate", weight: 1 },
            { value: "playful",      weight: 1 },
        ],
        block: [
            { value: "soft", weight: 5 },
            { value: "warm", weight: 3 },
            { value: "bed",  weight: 2 },
        ]
    },

    british: {
        trait: [
            { value: "independent", weight: 4 },
            { value: "lazy",        weight: 3 },
            { value: "curious",     weight: 2 },
            { value: "friendly",    weight: 1 },
        ],
        personality: [
            { value: "aloof",        weight: 4 },
            { value: "calm",         weight: 3 },
            { value: "confident",    weight: 2 },
            { value: "affectionate", weight: 1 },
        ],
        block: [
            { value: "high", weight: 4 },
            { value: "soft", weight: 3 },
            { value: "warm", weight: 2 },
            { value: "sun",  weight: 1 },
        ]
    },

    tabby: {
        trait: [
            { value: "active",      weight: 4 },
            { value: "curious",     weight: 3 },
            { value: "friendly",    weight: 2 },
            { value: "independent", weight: 1 },
        ],
        personality: [
            { value: "playful",      weight: 4 },
            { value: "confident",    weight: 3 },
            { value: "affectionate", weight: 2 },
            { value: "calm",         weight: 1 },
        ],
        block: [
            { value: "sun",  weight: 4 },
            { value: "high", weight: 3 },
            { value: "warm", weight: 2 },
            { value: "soft", weight: 1 },
        ]
    },

    all_black: {
        trait: [
            { value: "independent", weight: 4 },
            { value: "curious",     weight: 3 },
            { value: "shy",         weight: 2 },
            { value: "active",      weight: 1 },
        ],
        personality: [
            { value: "aloof",     weight: 4 },
            { value: "confident", weight: 3 },
            { value: "anxious",   weight: 2 },
            { value: "calm",      weight: 1 },
        ],
        block: [
            { value: "high", weight: 4 },
            { value: "warm", weight: 3 },
            { value: "soft", weight: 2 },
            { value: "sun",  weight: 1 },
        ]
    },

    black: {
        trait: [
            { value: "curious",     weight: 4 },
            { value: "active",      weight: 3 },
            { value: "independent", weight: 2 },
            { value: "friendly",    weight: 1 },
        ],
        personality: [
            { value: "playful",   weight: 4 },
            { value: "confident", weight: 3 },
            { value: "aloof",     weight: 2 },
            { value: "calm",      weight: 1 },
        ],
        block: [
            { value: "high", weight: 4 },
            { value: "sun",  weight: 3 },
            { value: "warm", weight: 2 },
            { value: "soft", weight: 1 },
        ]
    },

    calico: {
        trait: [
            { value: "friendly",  weight: 4 },
            { value: "curious",   weight: 3 },
            { value: "active",    weight: 2 },
            { value: "shy",       weight: 1 },
        ],
        personality: [
            { value: "affectionate", weight: 4 },
            { value: "playful",      weight: 3 },
            { value: "anxious",      weight: 2 },
            { value: "calm",         weight: 1 },
        ],
        block: [
            { value: "soft",  weight: 4 },
            { value: "owner", weight: 3 },
            { value: "bed",   weight: 2 },
            { value: "warm",  weight: 1 },
        ]
    },

    jellie: {
        trait: [
            { value: "friendly",  weight: 5 },
            { value: "curious",   weight: 3 },
            { value: "active",    weight: 2 },
        ],
        personality: [
            { value: "affectionate", weight: 5 },
            { value: "playful",      weight: 3 },
            { value: "confident",    weight: 2 },
        ],
        block: [
            { value: "owner", weight: 5 },
            { value: "soft",  weight: 3 },
            { value: "bed",   weight: 2 },
        ]
    },

    ocelot: {
        trait: [
            { value: "independent", weight: 5 },
            { value: "shy",         weight: 3 },
            { value: "active",      weight: 2 },
        ],
        personality: [
            { value: "aloof",     weight: 5 },
            { value: "anxious",   weight: 3 },
            { value: "confident", weight: 2 },
        ],
        block: [
            { value: "high", weight: 5 },
            { value: "sun",  weight: 3 },
            { value: "warm", weight: 2 },
        ]
    },

    red: {
        trait: [
            { value: "active",   weight: 4 },
            { value: "friendly", weight: 3 },
            { value: "curious",  weight: 2 },
            { value: "lazy",     weight: 1 },
        ],
        personality: [
            { value: "playful",      weight: 4 },
            { value: "affectionate", weight: 3 },
            { value: "confident",    weight: 2 },
            { value: "calm",         weight: 1 },
        ],
        block: [
            { value: "warm",  weight: 4 },
            { value: "sun",   weight: 3 },
            { value: "soft",  weight: 2 },
            { value: "owner", weight: 1 },
        ]
    },

    white: {
        trait: [
            { value: "shy",         weight: 4 },
            { value: "lazy",        weight: 3 },
            { value: "independent", weight: 2 },
            { value: "curious",     weight: 1 },
        ],
        personality: [
            { value: "anxious",      weight: 4 },
            { value: "aloof",        weight: 3 },
            { value: "calm",         weight: 2 },
            { value: "affectionate", weight: 1 },
        ],
        block: [
            { value: "soft", weight: 4 },
            { value: "bed",  weight: 3 },
            { value: "high", weight: 2 },
            { value: "warm", weight: 1 },
        ]
    }
}
// Flat texture map for test entity — built after BREED_TEXTURES and BREED_OFFSETS
export const TEST_TEXTURES: Record<number, TextureData> = Object.fromEntries(
    Object.entries(BREED_OFFSETS).flatMap(([breedId, offset]) =>
        Object.entries(BREED_TEXTURES[breedId]).map(([localIdx, data]) => [
            offset + Number(localIdx),
            data,
        ])
    )
);

// Register test catalog after it's built
BREED_TEXTURES["clingy_cats:test"] = TEST_TEXTURES;
