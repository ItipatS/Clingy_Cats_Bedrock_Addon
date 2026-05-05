// scripts/main.ts
import { world as world6, system as system3 } from "@minecraft/server";

// scripts/events/eventRegister.ts
import { world as world4, system } from "@minecraft/server";

// scripts/configs/catsbreed.ts
var ALL_BLACK_TEXTURES = {
  0: { pattern: "solid", color: "black", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // all_black
  1: { pattern: "solid", color: "black", hairs: "short", tail: "normal", snout: "normal", head: "flat" },
  // all_black2
  2: { pattern: "solid", color: "black", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // all_black3
  3: { pattern: "solid", color: "brown", hairs: "short", tail: "normal", snout: "normal", head: "flat" },
  // all_black4
  4: { pattern: "solid", color: "brown", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // all_black5
  5: { pattern: "solid", color: "brown", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // all_black6
  6: { pattern: "solid", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // all_black7
  7: { pattern: "solid", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // all_black8
  8: { pattern: "solid", color: "white", hairs: "short", tail: "normal", snout: "normal", head: "flat" },
  // all_black9
  9: { pattern: "solid", color: "white", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // all_black10
  10: { pattern: "solid", color: "gray", hairs: "short", tail: "normal", snout: "normal", head: "flat" },
  // all_black11
  11: { pattern: "solid", color: "gray", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // all_black12
  12: { pattern: "solid", color: "black", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // all_black13
  13: { pattern: "solid", color: "black", hairs: "short", tail: "bobtail", snout: "normal", head: "flat" },
  // all_black14
  14: { pattern: "solid", color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // all_black15
  15: { pattern: "solid", color: "brown", hairs: "short", tail: "bobtail", snout: "normal", head: "flat" },
  // all_black16
  16: { pattern: "solid", color: "brown", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // all_black17
  17: { pattern: "solid", color: "brown", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // all_black18
  18: { pattern: "solid", color: "black", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // all_black19
  19: { pattern: "solid", color: "gray", hairs: "short", tail: "bobtail", snout: "normal", head: "flat" },
  // all_black20
  20: { pattern: "solid", color: "gray", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // all_black21
  21: { pattern: "solid", color: "white", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // all_black22
  22: { pattern: "solid", color: "white", hairs: "short", tail: "bobtail", snout: "normal", head: "flat" },
  // all_black23
  23: { pattern: "solid", color: "white", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }
  // all_black24
};
var BLACK_TEXTURES = {
  0: { pattern: "tuxedo", color: "black", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // black
  1: { pattern: "bicolor", color: "black", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // black2
  2: { pattern: "bicolor", color: "white", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // black3
  3: { pattern: "tuxedo", color: "black", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // black4
  4: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // black5
  5: { pattern: "bicolor", color: "black", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // black6
  6: { pattern: "tuxedo", color: "black", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // black7
  7: { pattern: "bicolor", color: "black", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // black8
  8: { pattern: "bicolor", color: "white", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // black9
  9: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // black10
  10: { pattern: "tuxedo", color: "black", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // black11
  11: { pattern: "bicolor", color: "black", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // black12
  12: { pattern: "bicolor", color: "white", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // black13
  13: { pattern: "tuxedo", color: "black", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // black14
  14: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // black15
  15: { pattern: "bicolor", color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // black16
  16: { pattern: "tuxedo", color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // black17
  17: { pattern: "bicolor", color: "black", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // black18
  18: { pattern: "bicolor", color: "white", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // black19
  19: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }
  // black20
};
var BRITISH_TEXTURES = {
  0: { pattern: "solid", color: "gray", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair
  1: { pattern: "solid", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair2
  2: { pattern: "solid", color: "black", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair3
  3: { pattern: "solid", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair4
  4: { pattern: "tabby", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair5
  5: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair6
  6: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair7
  7: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair8
  8: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair9
  9: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair10
  10: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair11
  11: { pattern: "tabby", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair12
  12: { pattern: "tabby", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair13
  13: { pattern: "tabby", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair14
  14: { pattern: "tabby", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair15
  15: { pattern: "tabby", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair16
  16: { pattern: "tabby", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair17
  17: { pattern: "tabby", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair18
  18: { pattern: "tabby", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair19
  19: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair20
  20: { pattern: "bicolor", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair21
  21: { pattern: "tuxedo", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair22
  22: { pattern: "bicolor", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair23
  23: { pattern: "calico", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair24
  24: { pattern: "calico", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // british_shorthair25
  25: { pattern: "tortoiseshell", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // british_shorthair26
  26: { pattern: "tortoiseshell", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }
  // british_shorthair27
};
var CALICO_TEXTURES = {
  0: { pattern: "calico", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // calico
  1: { pattern: "calico", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // calico2
  2: { pattern: "calico", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // calico3
  3: { pattern: "calico", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // calico4
  4: { pattern: "bicolor", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // calico5
  5: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // calico6
  6: { pattern: "tortoiseshell", color: "brown", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // calico7
  7: { pattern: "tortoiseshell", color: "brown", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // calico8
  8: { pattern: "calico", color: "white", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // calico9
  9: { pattern: "calico", color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" },
  // calico10
  10: { pattern: "calico", color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" },
  // calico11
  11: { pattern: "calico", color: "white", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // calico12
  12: { pattern: "bicolor", color: "white", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // calico13
  13: { pattern: "bicolor", color: "white", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" },
  // calico14
  14: { pattern: "tortoiseshell", color: "brown", hairs: "short", tail: "bobtail", snout: "short", head: "round" },
  // calico15
  15: { pattern: "tortoiseshell", color: "brown", hairs: "fluffy", tail: "bobtail", snout: "short", head: "round" }
  // calico16
};
var JELLIE_TEXTURES = {
  0: { pattern: "tabby", color: "gray", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie
  1: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie2
  2: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie3
  3: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie4
  4: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie5
  5: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie6
  6: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie7
  7: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie8
  8: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie9
  9: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie10
  10: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie11
  11: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie12
  12: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie13
  13: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie14
  14: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie15
  15: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie16
  16: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie17
  17: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie18
  18: { pattern: "tuxedo", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie19
  19: { pattern: "tuxedo", color: "black", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie20
  20: { pattern: "calico", color: "white", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie21
  21: { pattern: "calico", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // jellie22
  22: { pattern: "tortoiseshell", color: "chocolate", hairs: "short", tail: "normal", snout: "short", head: "round" },
  // jellie23
  23: { pattern: "tortoiseshell", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }
  // jellie24
};
var OCELOT_TEXTURES = {
  0: { pattern: "tortoiseshell", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "flat" }
  // ocelot
};
var PERSIAN_TEXTURES = {
  0: { pattern: "solid", color: "orange", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persian
  1: { pattern: "solid", color: "black", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain2
  2: { pattern: "solid", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain3
  3: { pattern: "solid", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain4
  4: { pattern: "pointed", color: "white", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain5
  5: { pattern: "solid", color: "gray", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain6
  6: { pattern: "bicolor", color: "gray", hairs: "fluffy", tail: "normal", snout: "short", head: "round" },
  // persain7
  7: { pattern: "tuxedo", color: "black", hairs: "fluffy", tail: "normal", snout: "short", head: "round" }
  // persain8
};
var RAGDOLL_TEXTURES = {
  0: { pattern: "pointed", color: "white", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // ragdoll
  1: { pattern: "pointed", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // ragdoll2
  2: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // ragdoll3
  3: { pattern: "pointed", color: "gray", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // ragdoll4
  4: { pattern: "pointed", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }
  // ragdoll5
};
var RED_TEXTURES = {
  0: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red
  1: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red2
  2: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red3
  3: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red4
  4: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red5
  5: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red6
  6: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red7
  7: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red8
  8: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red9
  9: { pattern: "tabby", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // red10
  10: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red11
  11: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red12
  12: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red13
  13: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // red14
  14: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red15
  15: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red16
  16: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // red17
  17: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red18
  18: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red19
  19: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red20
  20: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red21
  21: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red22
  22: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // red23
  23: { pattern: "tabby", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // red24
  24: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // red25
  25: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // red26
  26: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // red27
  27: { pattern: "tabby", color: "orange", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" }
  // red28
};
var SIAMESE_TEXTURES = {
  0: { pattern: "pointed", color: "cream", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // siamese
  1: { pattern: "pointed", color: "cream", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // siamese2
  2: { pattern: "pointed", color: "cream", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // siamese3
  3: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // siamese4
  4: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // siamese5
  5: { pattern: "pointed", color: "cream", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" }
  // siamese6
};
var TABBY_TEXTURES = {
  0: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby
  1: { pattern: "tabby", color: "gray", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby2
  2: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby3
  3: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby4
  4: { pattern: "tabby", color: "gray", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby5
  5: { pattern: "tabby", color: "gray", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby6
  6: { pattern: "tabby", color: "gray", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // tabby7
  7: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // tabby8
  8: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // tabby9
  9: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // tabby10
  10: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "normal", snout: "normal", head: "round" },
  // tabby11
  11: { pattern: "tortoiseshell", color: "orange", hairs: "short", tail: "normal", snout: "normal", head: "round" },
  // tabby12
  12: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby13
  13: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby14
  14: { pattern: "tabby", color: "chocolate", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby15
  15: { pattern: "tabby", color: "gray", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby16
  16: { pattern: "tabby", color: "gray", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby17
  17: { pattern: "tabby", color: "gray", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // tabby18
  18: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // tabby19
  19: { pattern: "tabby", color: "chocolate", hairs: "fluffy", tail: "bobtail", snout: "normal", head: "round" },
  // tabby20
  20: { pattern: "tortoiseshell", color: "gray", hairs: "short", tail: "bobtail", snout: "normal", head: "round" },
  // tabby21
  21: { pattern: "tortoiseshell", color: "orange", hairs: "short", tail: "bobtail", snout: "normal", head: "round" }
  // tabby22
};
var WHITE_TEXTURES = {
  0: { pattern: "sphinx", color: "white", hairs: "none", tail: "normal", snout: "normal", head: "flat" },
  // white
  1: { pattern: "sphinx", color: "chocolate", hairs: "none", tail: "normal", snout: "normal", head: "flat" },
  // white2
  2: { pattern: "sphinx", color: "white", hairs: "none", tail: "normal", snout: "normal", head: "flat" },
  // white3
  3: { pattern: "sphinx", color: "gray", hairs: "none", tail: "normal", snout: "normal", head: "flat" }
  // white4
};
var PATTERN_DRIFT = {
  // Solid: cleanest coat, white spotting can develop → bicolor
  // recessive agouti can surface → tabby (rare)
  "solid": [
    "solid",
    "solid",
    "solid",
    "bicolor",
    "tabby"
  ],
  // Bicolor: white spotting active, can intensify → tuxedo
  // or reduce → solid, or gain color complexity → tortoiseshell
  "bicolor": [
    "bicolor",
    "bicolor",
    "solid",
    "tuxedo",
    "tortoiseshell"
  ],
  // Tuxedo: high-contrast bicolor, very stable
  "tuxedo": [
    "tuxedo",
    "tuxedo",
    "tuxedo",
    "bicolor",
    "solid"
  ],
  // Tabby: agouti gene dominant, very heritable
  // can mute → solid, gain color complexity → tortoiseshell
  "tabby": [
    "tabby",
    "tabby",
    "tabby",
    "solid",
    "tortoiseshell"
  ],
  // Tortoiseshell: tabby + orange gene, can gain white → calico
  // or lose complexity → tabby/solid
  "tortoiseshell": [
    "tortoiseshell",
    "tortoiseshell",
    "calico",
    "tabby",
    "solid"
  ],
  // Calico: tortoiseshell + white base (color is always white in catalog)
  // loses white → tortoiseshell, loses patches → bicolor
  "calico": [
    "calico",
    "calico",
    "tortoiseshell",
    "bicolor",
    "solid"
  ],
  // Pointed: breed-locked (siamese/ragdoll), extremely stable
  "pointed": [
    "pointed",
    "pointed",
    "pointed",
    "pointed",
    "solid"
  ],
  // Sphinx: structural/hairless — nearly fully locked
  // color varies freely (skin showing), pattern itself almost never drifts
  "sphinx": [
    "sphinx",
    "sphinx",
    "sphinx",
    "sphinx",
    "sphinx",
    "solid"
  ]
};
var EYE_COLORS = [
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
];
var EYE_SHAPES = [
  "almond",
  "narrow",
  "round"
];
var WHISKERS = [
  "short_white",
  // 0
  "short_black",
  // 1
  "medium_white",
  // 2
  "medium_black",
  // 3
  "long_white",
  // 4
  "long_black"
  // 5
];
var BREED_TEXTURES = {
  "clingy_cats:all_black": ALL_BLACK_TEXTURES,
  "clingy_cats:black": BLACK_TEXTURES,
  "clingy_cats:british": BRITISH_TEXTURES,
  "clingy_cats:calico": CALICO_TEXTURES,
  "clingy_cats:jellie": JELLIE_TEXTURES,
  "clingy_cats:ocelot": OCELOT_TEXTURES,
  "clingy_cats:persian": PERSIAN_TEXTURES,
  "clingy_cats:ragdoll": RAGDOLL_TEXTURES,
  "clingy_cats:red": RED_TEXTURES,
  "clingy_cats:siamese": SIAMESE_TEXTURES,
  "clingy_cats:tabby": TABBY_TEXTURES,
  "clingy_cats:white": WHITE_TEXTURES
};
var BREED_OFFSETS = {
  "clingy_cats:white": 0,
  "clingy_cats:black": 4,
  "clingy_cats:red": 24,
  "clingy_cats:siamese": 52,
  "clingy_cats:british": 58,
  "clingy_cats:calico": 85,
  "clingy_cats:persian": 101,
  "clingy_cats:ragdoll": 109,
  "clingy_cats:tabby": 114,
  "clingy_cats:all_black": 136,
  "clingy_cats:jellie": 160
};
var TRAIT_POOL = [
  { weight: 1, trait: "lazy" },
  { weight: 1, trait: "active" },
  { weight: 1, trait: "curious" },
  { weight: 1, trait: "shy" },
  { weight: 1, trait: "friendly" },
  { weight: 1, trait: "independent" }
];
var PERSONALITY_POOL = [
  { weight: 1, personality: "affectionate" },
  { weight: 1, personality: "aloof" },
  { weight: 1, personality: "playful" },
  { weight: 1, personality: "calm" },
  { weight: 1, personality: "anxious" },
  { weight: 1, personality: "confident" }
];
var FAVORITE_FOOD_POOL = [
  { weight: 1, food: "carrot" },
  { weight: 1, food: "spider_eye" },
  { weight: 3, food: "beef" },
  { weight: 3, food: "porkchop" },
  { weight: 3, food: "cod" },
  { weight: 3, food: "salmon" },
  { weight: 2, food: "tropical" },
  { weight: 1, food: "puffer" },
  { weight: 2, food: "rabbit" },
  { weight: 3, food: "chicken" }
  /*{ weight: 2, food: "treat_fish"},
  { weight: 2, food: "treat_meat"},
  { weight: 1, food: "treat_fancy"},*/
];
var FAVORITE_BLOCK_POOL = [
  { weight: 1, block: "bed" },
  { weight: 1, block: "soft" },
  { weight: 1, block: "warm" },
  { weight: 1, block: "high" },
  { weight: 1, block: "owner" },
  { weight: 1, block: "sun" }
];
var TEST_TEXTURES = Object.fromEntries(
  Object.entries(BREED_OFFSETS).flatMap(
    ([breedId, offset]) => Object.entries(BREED_TEXTURES[breedId]).map(([localIdx, data]) => [
      offset + Number(localIdx),
      data
    ])
  )
);
BREED_TEXTURES["clingy_cats:test"] = TEST_TEXTURES;

// scripts/logics/utils.ts
function distanceSq(a, b) {
  const dx = a.location.x - b.location.x;
  const dy = a.location.y - b.location.y;
  const dz = a.location.z - b.location.z;
  return dx * dx + dy * dy + dz * dz;
}
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function uniqueValues(catalog, key) {
  return [...new Set(Object.values(catalog).map((d) => d[key]))];
}
function weightedRandom(pool) {
  const total = pool.reduce((sum, e) => sum + e.weight, 0);
  let roll = Math.random() * total;
  for (const entry of pool) {
    roll -= entry.weight;
    if (roll <= 0) return entry;
  }
  return pool[pool.length - 1];
}

// scripts/logics/genetics.ts
function inheritTrait(traitA, traitB, inheritRate, validValues) {
  const source = Math.random() < 0.5 ? traitA : traitB;
  return Math.random() < inheritRate ? source : randomFrom(validValues);
}
function inheritPattern(patternA, patternB, colorResult, inheritRate, validValues) {
  const source = Math.random() < 0.5 ? patternA : patternB;
  const applyColorGate = (pool) => {
    if (source === "sphinx") return pool;
    return colorResult === "white" ? pool.filter((p) => p !== "tortoiseshell") : pool.filter((p) => p !== "calico");
  };
  const fallback = (pool) => pool.length > 0 ? pool : ["bicolor", "solid", "tabby"].filter((p) => validValues.includes(p)).length > 0 ? ["bicolor", "solid", "tabby"].filter((p) => validValues.includes(p)) : validValues;
  if (Math.random() < inheritRate) {
    const driftPool = fallback(
      applyColorGate((PATTERN_DRIFT[source] ?? [source]).filter((p) => validValues.includes(p)))
    );
    return randomFrom(driftPool);
  }
  return randomFrom(fallback(applyColorGate(validValues)));
}
function pickTexture(catalog, target) {
  const entries = Object.entries(catalog).map(([i, d]) => ({ idx: Number(i), data: d }));
  const exact = entries.filter(
    (e) => Object.entries(target).every(([k, v]) => e.data[k] === v)
  );
  if (exact.length > 0) return randomFrom(exact).idx;
  const { color: _c, ...noColor } = target;
  const relaxed = entries.filter(
    (e) => Object.entries(noColor).every(([k, v]) => e.data[k] === v)
  );
  if (relaxed.length > 0) return randomFrom(relaxed).idx;
  const { hairs: _h, ...structural } = noColor;
  const minimal = entries.filter(
    (e) => Object.entries(structural).every(([k, v]) => e.data[k] === v)
  );
  if (minimal.length > 0) return randomFrom(minimal).idx;
  return randomFrom(entries).idx;
}
function findMutationBreed(motherTypeId, fatherTypeId) {
  const parentBreeds = /* @__PURE__ */ new Set([motherTypeId, fatherTypeId]);
  const motherCatalog = BREED_TEXTURES[motherTypeId];
  const fatherCatalog = BREED_TEXTURES[fatherTypeId] ?? motherCatalog;
  const validPatterns = /* @__PURE__ */ new Set([
    ...uniqueValues(motherCatalog, "pattern"),
    ...uniqueValues(fatherCatalog, "pattern")
  ]);
  const validColors = /* @__PURE__ */ new Set([
    ...uniqueValues(motherCatalog, "color"),
    ...uniqueValues(fatherCatalog, "color")
  ]);
  const candidates = [];
  for (const [breedId, catalog] of Object.entries(BREED_TEXTURES)) {
    if (parentBreeds.has(breedId)) continue;
    const hasMatch = Object.values(catalog).some(
      (e) => validPatterns.has(e.pattern) && validColors.has(e.color)
    );
    if (hasMatch) candidates.push(breedId);
  }
  return candidates.length > 0 ? randomFrom(candidates) : randomFrom([motherTypeId, fatherTypeId]);
}
function determineBabyBreed(mother, father) {
  if (!father || father.typeId === mother.typeId) return mother.typeId;
  const roll = Math.random();
  if (roll < 0.45) return mother.typeId;
  if (roll < 0.9) return father.typeId;
  return findMutationBreed(mother.typeId, father.typeId);
}

// scripts/logics/appearance.ts
function applyTextureData(cat, idx, data) {
  cat.setProperty("clingy_cats:sub_variant", idx);
  cat.setProperty("clingy_cats:hairs", data.hairs);
  cat.setProperty("clingy_cats:tail", data.tail);
  cat.setProperty("clingy_cats:snout", data.snout);
  cat.setProperty("clingy_cats:head", data.head);
  cat.setProperty("clingy_cats:pattern", data.pattern);
  cat.setProperty("clingy_cats:color", data.color);
}
function applyEyesData(cat, idx, data) {
  cat.setProperty("clingy_cats:eye_shape", data.shape);
  cat.setProperty("clingy_cats:eye_color", data.color);
  cat.setProperty("clingy_cats:eye_index", idx);
}
function applyWhiskerData(cat, idx, data) {
  cat.setProperty("clingy_cats:whiskers", data.length);
  cat.setProperty("clingy_cats:whisker_index", idx);
}
function assignRandomAppearance(cat) {
  const catalog = BREED_TEXTURES[cat.typeId];
  const maxIdx = Object.keys(catalog).length - 1;
  const idx = Math.floor(Math.random() * (maxIdx + 1));
  applyTextureData(cat, idx, catalog[idx]);
}
function assignRandomEyesAndWhiskers(cat) {
  const shape = randomFrom(EYE_SHAPES);
  const color = randomFrom(EYE_COLORS);
  const whisker = randomFrom(WHISKERS);
  const shapeIdx = EYE_SHAPES.indexOf(shape);
  const colorIdx = EYE_COLORS.indexOf(color);
  const whiskerIdx = WHISKERS.indexOf(whisker);
  applyEyesData(cat, shapeIdx * EYE_COLORS.length + colorIdx, { shape, color });
  applyWhiskerData(cat, whiskerIdx, { length: whisker });
}
function assignInheritedAppearanceFromGenes(baby, momGenes, dadGenes) {
  const catalog = BREED_TEXTURES[baby.typeId];
  const traitsA = momGenes.traits;
  const traitsB = dadGenes?.traits ?? traitsA;
  const targetColor = inheritTrait(traitsA.color, traitsB.color, 0.85, uniqueValues(catalog, "color"));
  const targetPattern = inheritPattern(traitsA.pattern, traitsB.pattern, targetColor, 0.85, uniqueValues(catalog, "pattern"));
  const targetHairs = inheritTrait(traitsA.hairs, traitsB.hairs, 0.8, uniqueValues(catalog, "hairs"));
  const targetTail = inheritTrait(traitsA.tail, traitsB.tail, 0.95, uniqueValues(catalog, "tail"));
  const targetSnout = inheritTrait(traitsA.snout, traitsB.snout, 0.95, uniqueValues(catalog, "snout"));
  const targetHead = inheritTrait(traitsA.head, traitsB.head, 0.95, uniqueValues(catalog, "head"));
  const idx = pickTexture(catalog, {
    pattern: targetPattern,
    color: targetColor,
    hairs: targetHairs,
    tail: targetTail,
    snout: targetSnout,
    head: targetHead
  });
  applyTextureData(baby, idx, catalog[idx]);
}
function assignInheritedEyesAndWhiskersFromGenes(baby, momGenes, dadGenes) {
  const sourceColor = dadGenes && Math.random() < 0.5 ? dadGenes : momGenes;
  const inheritedColor = sourceColor.eyeColor;
  const colorRoll = Math.random();
  let finalColor;
  if (colorRoll < 0.9) finalColor = inheritedColor;
  else if (colorRoll < 0.99) finalColor = randomFrom(EYE_COLORS.filter((c) => !c.startsWith("heterochromia")));
  else finalColor = randomFrom(["heterochromia1", "heterochromia2", "heterochromia3"]);
  const sourceShape = dadGenes && Math.random() < 0.5 ? dadGenes : momGenes;
  const inheritedShapeIdx = EYE_SHAPES.indexOf(sourceShape.eyeShape);
  const shapeDrift = Math.random() < 0.85 ? Math.max(0, Math.min(EYE_SHAPES.length - 1, inheritedShapeIdx + Math.floor(Math.random() * 3) - 1)) : Math.floor(Math.random() * EYE_SHAPES.length);
  applyEyesData(baby, shapeDrift * EYE_COLORS.length + EYE_COLORS.indexOf(finalColor), {
    shape: EYE_SHAPES[shapeDrift],
    color: finalColor
  });
  const sourceWhisker = dadGenes && Math.random() < 0.5 ? dadGenes : momGenes;
  const inheritedWhiskerIdx = WHISKERS.indexOf(sourceWhisker.whiskers);
  const whiskerDrift = Math.random() < 0.9 ? Math.max(0, Math.min(WHISKERS.length - 1, inheritedWhiskerIdx + Math.floor(Math.random() * 3) - 1)) : Math.floor(Math.random() * WHISKERS.length);
  applyWhiskerData(baby, whiskerDrift, { length: WHISKERS[whiskerDrift] });
}

// scripts/logics/personality.ts
import { world } from "@minecraft/server";
function assignRandomPersonality(cat) {
  const trait = weightedRandom(TRAIT_POOL);
  const personality = weightedRandom(PERSONALITY_POOL);
  const food = weightedRandom(FAVORITE_FOOD_POOL);
  const block = weightedRandom(FAVORITE_BLOCK_POOL);
  world.sendMessage([
    `\xA77state:\xA7f${cat.getProperty("clingy_cats:state")}`,
    `\xA77trait:\xA7f${trait.trait}`,
    `\xA77personality:\xA7f${personality.personality}`,
    `\xA77food:\xA7f${food.food}`,
    `\xA77block:\xA7f${block.block}`
  ].join("\n"));
  cat.setProperty("clingy_cats:behavior_trait", trait.trait);
  cat.setProperty("clingy_cats:personality", personality.personality);
  cat.setProperty("clingy_cats:favorite_food", food.food);
  cat.setProperty("clingy_cats:favorite_block", block.block);
  cat.triggerEvent(`clingy_cats:set_trait_${trait.trait}`);
  cat.triggerEvent(`clingy_cats:set_personality_${personality.personality}`);
}

// scripts/logics/breed.ts
function handleSpawnTestCats(cat) {
  const breedIds = Object.keys(BREED_OFFSETS);
  const chosenBreed = randomFrom(breedIds);
  const catalog = BREED_TEXTURES[chosenBreed];
  const localIdx = Number(randomFrom(Object.keys(catalog)));
  const flatIdx = BREED_OFFSETS[chosenBreed] + localIdx;
  applyTextureData(cat, flatIdx, catalog[localIdx]);
  assignRandomEyesAndWhiskers(cat);
  assignRandomPersonality(cat);
  cat.triggerEvent("clingy_cats:visible_event");
}
function handleWildSpawn(cat) {
  assignRandomAppearance(cat);
  assignRandomEyesAndWhiskers(cat);
  assignRandomPersonality(cat);
  cat.triggerEvent("clingy_cats:visible_event");
}

// scripts/logics/pregnancy.ts
function getParentTraits(parent) {
  return {
    pattern: parent.getProperty("clingy_cats:pattern"),
    color: parent.getProperty("clingy_cats:color"),
    hairs: parent.getProperty("clingy_cats:hairs"),
    tail: parent.getProperty("clingy_cats:tail"),
    snout: parent.getProperty("clingy_cats:snout"),
    head: parent.getProperty("clingy_cats:head")
  };
}
function captureGenes(entity) {
  return {
    typeId: entity.typeId,
    traits: getParentTraits(entity),
    eyeColor: entity.getProperty("clingy_cats:eye_color"),
    eyeShape: entity.getProperty("clingy_cats:eye_shape"),
    whiskers: entity.getProperty("clingy_cats:whiskers")
  };
}
function findFather(mother) {
  return mother.dimension.getEntities({ location: mother.location, maxDistance: 6, families: ["cat"] }).filter((e) => e.id !== mother.id && !e.hasComponent("minecraft:is_baby")).sort((a, b) => distanceSq(a, mother) - distanceSq(b, mother))[0];
}
var pregnancyMap = /* @__PURE__ */ new Map();
var LITTER_WEIGHTS = [40, 30, 15, 8, 5, 2];
function rollLitterSize() {
  const total = LITTER_WEIGHTS.reduce((s, w) => s + w, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < LITTER_WEIGHTS.length; i++) {
    roll -= LITTER_WEIGHTS[i];
    if (roll <= 0) return i + 1;
  }
  return 1;
}
function handleConception(mother) {
  const fatherEntity = findFather(mother);
  const record = {
    mother: captureGenes(mother),
    father: fatherEntity ? captureGenes(fatherEntity) : void 0,
    babyCount: rollLitterSize()
  };
  pregnancyMap.set(mother.id, record);
  mother.setDynamicProperty("clingy_cats:conception_data", JSON.stringify(record));
}
function handleGiveBirth(mother) {
  const record = pregnancyMap.get(mother.id) ?? (() => {
    const raw = mother.getDynamicProperty("clingy_cats:conception_data");
    return raw ? JSON.parse(raw) : void 0;
  })();
  pregnancyMap.delete(mother.id);
  mother.setDynamicProperty("clingy_cats:conception_data", void 0);
  const { mother: momGenes, father: dadGenes, babyCount = 1 } = record ?? { mother: captureGenes(mother), father: void 0, babyCount: 1 };
  for (let i = 0; i < 5; i++) {
    const babyBreed = determineBabyBreed(momGenes, dadGenes);
    const baby = mother.dimension.spawnEntity(babyBreed, mother.location);
    const owner = mother.dimension.getPlayers({ location: mother.location, maxDistance: 10 })[0];
    if (owner) {
      const tameable = baby.getComponent("minecraft:tameable");
      tameable?.tame(owner);
    }
    baby.addTag("clingy_cats:not_wild_spawn");
    assignInheritedAppearanceFromGenes(baby, momGenes, dadGenes);
    assignInheritedEyesAndWhiskersFromGenes(baby, momGenes, dadGenes);
    assignRandomPersonality(baby);
    baby.triggerEvent("clingy_cats:born");
  }
}

// scripts/logics/states.ts
import { world as world2 } from "@minecraft/server";
var LAST_TEMP = "clingy_cats:last_temp_group";
var TRAIT_POOLS = {
  lazy: [
    { behavior: "enter_sleep_state", weight: 4 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "temp_move_to_soft", weight: 2 },
    { behavior: "temp_move_to_warm", weight: 1 }
  ],
  active: [
    { behavior: "temp_follow_loose", weight: 2 },
    { behavior: "enter_sit_state", weight: 1 }
  ],
  curious: [
    { behavior: "temp_follow_loose", weight: 2 },
    { behavior: "enter_groom_state", weight: 2 },
    { behavior: "enter_sit_state", weight: 1 }
  ],
  shy: [
    { behavior: "enter_sleep_state", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "temp_move_to_soft", weight: 1 }
  ],
  friendly: [
    { behavior: "temp_follow_close", weight: 2 },
    { behavior: "temp_play", weight: 2 },
    { behavior: "enter_groom_state", weight: 1 },
    { behavior: "enter_sit_state", weight: 1 }
  ],
  independent: [
    { behavior: "enter_sleep_state", weight: 2 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "temp_move_to_sun", weight: 2 }
  ]
};
var PERSONALITY_POOLS = {
  affectionate: [
    { behavior: "temp_follow_close", weight: 4 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "enter_groom_state", weight: 1 }
  ],
  aloof: [
    { behavior: "temp_follow_loose", weight: 1 },
    { behavior: "enter_sit_state", weight: 3 },
    { behavior: "enter_sleep_state", weight: 2 }
  ],
  playful: [
    { behavior: "temp_play", weight: 3 },
    { behavior: "temp_follow_loose", weight: 2 },
    { behavior: "enter_sit_state", weight: 1 }
  ],
  calm: [
    { behavior: "temp_follow_loose", weight: 2 },
    { behavior: "enter_sleep_state", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 }
  ],
  anxious: [
    { behavior: "temp_follow_close", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "enter_groom_state", weight: 2 }
  ],
  confident: [
    { behavior: "temp_follow_loose", weight: 2 },
    { behavior: "enter_sit_state", weight: 1 },
    { behavior: "temp_move_to_sun", weight: 1 }
  ]
};
var BLOCK_POOLS = {
  bed: [
    { behavior: "temp_move_to_bed", weight: 4 },
    { behavior: "enter_sleep_state", weight: 3 }
  ],
  soft: [
    { behavior: "temp_move_to_soft", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "enter_groom_state", weight: 1 }
  ],
  warm: [
    { behavior: "temp_move_to_warm", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "enter_sleep_state", weight: 1 }
  ],
  high: [
    { behavior: "enter_sit_state", weight: 3 },
    { behavior: "enter_sleep_state", weight: 1 }
  ],
  owner: [
    { behavior: "temp_follow_close", weight: 4 },
    { behavior: "enter_sit_state", weight: 1 }
  ],
  sun: [
    { behavior: "temp_move_to_sun", weight: 3 },
    { behavior: "enter_sit_state", weight: 2 },
    { behavior: "enter_sleep_state", weight: 1 }
  ]
};
function weightedRandom2(pool) {
  const total = pool.reduce((sum, e) => sum + e.weight, 0);
  let roll = Math.random() * total;
  for (const entry of pool) {
    roll -= entry.weight;
    if (roll <= 0) return entry.behavior;
  }
  return pool[pool.length - 1].behavior;
}
function mergePools(...pools) {
  const merged = /* @__PURE__ */ new Map();
  for (const pool of pools) {
    for (const entry of pool) {
      const key = entry.behavior ?? "__null__";
      const existing = merged.get(key);
      if (existing) {
        existing.weight += entry.weight;
      } else {
        merged.set(key, { ...entry });
      }
    }
  }
  return Array.from(merged.values());
}
function behaviorTick(cat, state) {
  if (!cat.isValid) return;
  const last = cat.getDynamicProperty(LAST_TEMP);
  if (last) {
    cat.triggerEvent(`clingy_cats:remove_${last}`);
    cat.setDynamicProperty(LAST_TEMP, "");
  }
  const trait = cat.getProperty("clingy_cats:behavior_trait");
  const personality = cat.getProperty("clingy_cats:personality");
  const block = cat.getProperty("clingy_cats:favorite_block");
  if (!trait || !personality || !block) return;
  const pool = mergePools(
    TRAIT_POOLS[trait] ?? [],
    PERSONALITY_POOLS[personality] ?? [],
    BLOCK_POOLS[block] ?? []
  );
  const chosen = state || weightedRandom2(pool);
  if (chosen === "enter_still_state" || chosen === "enter_sit_state" || chosen === "enter_sleep_state" || chosen === "enter_groom_state") {
    cat.triggerEvent(`clingy_cats:${chosen}`);
    cat.setDynamicProperty(LAST_TEMP, "");
    return;
  }
  if (chosen === null) {
    cat.setDynamicProperty(LAST_TEMP, "");
    return;
  }
  world2.sendMessage([
    `\xA77pattern:\xA7f${cat.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${cat.getProperty("clingy_cats:color")}`,
    `\xA77behavior tick cosse :\xA7f${chosen} \xA77last_behavior:\xA7f${last}`
  ].join("\n"));
  cat.triggerEvent(`clingy_cats:add_${chosen}`);
  cat.setDynamicProperty(LAST_TEMP, chosen);
}
function restoreIdentity(cat) {
  if (!cat.isValid) return;
  const trait = cat.getProperty("clingy_cats:behavior_trait");
  if (!trait) return;
  const last = cat.getDynamicProperty(LAST_TEMP);
  if (last) {
    cat.triggerEvent(`clingy_cats:remove_${last}`);
    cat.setDynamicProperty(LAST_TEMP, "");
  }
  cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
}

// scripts/logics/riding.ts
import { world as world3 } from "@minecraft/server";
var ANCHOR_IDS_KEY = "clingy_cats:anchor_ids";
var MAX_ANCHORS = 2;
function getStoredAnchorIds(player) {
  return JSON.parse(
    player.getDynamicProperty(ANCHOR_IDS_KEY) ?? "[]"
  );
}
function setStoredAnchorIds(player, ids) {
  player.setDynamicProperty(ANCHOR_IDS_KEY, JSON.stringify(ids));
}
function getActiveAnchors(player) {
  const storedIds = getStoredAnchorIds(player);
  return player.dimension.getEntities({ location: player.location, maxDistance: 6, families: ["clingy_cats_anchor"] }).filter((e) => storedIds.includes(e.id));
}
function findOwnerPlayer(anchor) {
  return anchor.dimension.getPlayers({ location: anchor.location, maxDistance: 6 }).find((p) => {
    const ids = getStoredAnchorIds(p);
    return ids.includes(anchor.id);
  });
}
function handleRequestShoulderMount(cat) {
  if (!cat.isValid) return;
  const player = cat.dimension.getPlayers({ location: cat.location, maxDistance: 5 })[0];
  if (!player) return;
  const active = getActiveAnchors(player);
  if (active.length >= MAX_ANCHORS) return;
  const anchor = cat.dimension.spawnEntity(
    "clingy_cats:shoulder_anchor",
    player.location
  );
  const trait = cat.getProperty("clingy_cats:behavior_trait");
  anchor.triggerEvent(`clingy_cats:anchor_timer_${trait}`);
  const ids = getStoredAnchorIds(player);
  ids.push(anchor.id);
  setStoredAnchorIds(player, ids);
  world3.sendMessage(`\xA7b[ClingyCats] anchor spawned for ${player.name} trait:${trait}`);
}
function handleAnchorExpire(anchor) {
  if (!anchor.isValid) return;
  const player = findOwnerPlayer(anchor);
  if (player) {
    const ids = getStoredAnchorIds(player);
    setStoredAnchorIds(player, ids.filter((id) => id !== anchor.id));
    world3.sendMessage(`\xA7c[ClingyCats] anchor expired for ${player.name}`);
  }
  anchor.remove();
}

// scripts/events/eventRegister.ts
function registerCatsEvents() {
  system.afterEvents.scriptEventReceive.subscribe((ev) => {
    const { id, message, sourceEntity } = ev;
    if (!sourceEntity || !sourceEntity.isValid) return;
    if (id === "clingycats:catspawn") {
      world4.sendMessage(`\xA7b[ClingyCats] event received: ${id}`);
      if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
        sourceEntity.removeTag("clingy_cats:not_wild_spawn");
        world4.sendMessage(`\xA7a[ClingyCats] Non-wild spawn event received on: ${sourceEntity.typeId}`);
        return;
      }
      if (sourceEntity.typeId === "clingy_cats:test" && !sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
        handleSpawnTestCats(sourceEntity);
        world4.sendMessage(`\xA7d[ClingyCats] catspawn on: ${sourceEntity.typeId}`);
        return;
      } else {
        handleWildSpawn(sourceEntity);
      }
      behaviorTick(sourceEntity);
      return;
    }
    if (id === "clingycats:conception") {
      world4.sendMessage(`\xA7b[ClingyCats] event received: ${id}`);
      handleConception(sourceEntity);
      world4.sendMessage(`\xA7e[ClingyCats] conception event received from: ${sourceEntity.typeId}`);
      return;
    }
    if (id === "clingycats:givebirth") {
      world4.sendMessage(`\xA7b[ClingyCats] event received: ${id}`);
      handleGiveBirth(sourceEntity);
      world4.sendMessage(`\xA7c[ClingyCats] give birth event received from: ${sourceEntity.typeId}`);
      return;
    }
    if (id === "clingycats:interact") {
      return;
    }
    if (id === "clingycats:restore_identity") {
      restoreIdentity(sourceEntity);
      return;
    }
    if (id === "clingycats:behavior_tick") {
      behaviorTick(sourceEntity);
      return;
    }
    if (id === "clingycats:enter_still_state_event") {
      behaviorTick(sourceEntity, "enter_still_state");
      return;
    }
    if (id == "clingycats:try_sitting") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77try sitting`
      ].join("\n"));
    }
    if (id == "clingycats:try_sleeping") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77try sleeping`
      ].join("\n"));
    }
    if (id == "clingycats:try_grooming") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77try grooming`
      ].join("\n"));
    }
    if (id == "clingycats:sit_confirm") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77sit confirm \xA77state:\xA7f${sourceEntity.getProperty("clingy_cats:state")}`
      ].join("\n"));
    }
    if (id == "clingycats:sleep_confirm") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77sleep confirm \xA77state:\xA7f${sourceEntity.getProperty("clingy_cats:state")}`
      ].join("\n"));
    }
    if (id == "clingycats:groom_confirm") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77grooming confirm \xA77state:\xA7f${sourceEntity.getProperty("clingy_cats:state")}`
      ].join("\n"));
    }
    if (id == "clingycats:weather_rain") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77avoid rain`
      ].join("\n"));
    }
    if (id == "clingycats:weather_clear") {
      world4.sendMessage([
        `\xA77pattern:\xA7f${sourceEntity.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${sourceEntity.getProperty("clingy_cats:color")}`,
        `\xA77not avoid rain anymore`
      ].join("\n"));
    }
    if (id == "clingycats:follow_given_player") {
      behaviorTick(sourceEntity, "temp_follow_close");
    }
    if (id === "clingycats:request_shoulder_mount") {
      handleRequestShoulderMount(sourceEntity);
    }
    if (id === "clingycats:anchor_expire") {
      handleAnchorExpire(sourceEntity);
    }
  });
  world4.sendMessage("\xA7a[ClingyCats] subscriber registered");
}

// scripts/debug/catdebug.ts
import { world as world5, system as system2, EquipmentSlot } from "@minecraft/server";
var DEBUG = true;
function registerDebugRaycast() {
  if (!DEBUG) return;
  system2.runInterval(() => {
    for (const player of world5.getAllPlayers()) {
      const held = player.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand);
      if (held?.typeId !== "minecraft:stick") continue;
      const hit = player.getEntitiesFromViewDirection({
        maxDistance: 10,
        ignoreBlockCollision: false
      })[0];
      if (!hit?.entity) continue;
      const cat = hit.entity;
      if (!cat.typeId.startsWith("clingy_cats:")) continue;
      const mainhand = cat.getComponent("minecraft:equippable")?.getEquipment(EquipmentSlot.Mainhand);
      const offhand = cat.getComponent("minecraft:equippable")?.getEquipment(EquipmentSlot.Offhand);
      const inv = cat.getComponent("minecraft:inventory")?.container;
      const invStr = inv ? Array.from({ length: inv.size }, (_, i) => inv.getItem(i)?.typeId ?? "_").join(",") : "no_inv";
      const lines = [
        `\xA7e${cat.typeId.replace("clingy_cats:", "")} \xA77[${cat.id.slice(-6)}]`,
        `\xA77sub:\xA7f${cat.getProperty("clingy_cats:sub_variant")} \xA77pattern:\xA7f${cat.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${cat.getProperty("clingy_cats:color")}`,
        `\xA77hairs:\xA7f${cat.getProperty("clingy_cats:hairs")} \xA77tail:\xA7f${cat.getProperty("clingy_cats:tail")} \xA77snout:\xA7f${cat.getProperty("clingy_cats:snout")} \xA77head:\xA7f${cat.getProperty("clingy_cats:head")}`,
        `\xA77eye_shape:\xA7f${cat.getProperty("clingy_cats:eye_shape")} \xA77eye_color:\xA7f${cat.getProperty("clingy_cats:eye_color")} \xA77eye_idx:\xA7f${cat.getProperty("clingy_cats:eye_index")} \xA77whisker_idx:\xA7f${cat.getProperty("clingy_cats:whisker_index")}`,
        `\xA77trait:\xA7f${cat.getProperty("clingy_cats:behavior_trait")} \xA77personality:\xA7f${cat.getProperty("clingy_cats:personality")} \xA77sound:\xA7f${cat.getProperty("clingy_cats:sound_variant")}`,
        `\xA77food:\xA7f${cat.getProperty("clingy_cats:favorite_food")} \xA77block:\xA7f${cat.getProperty("clingy_cats:favorite_block")}`,
        `\xA77baby:\xA7f${cat.hasComponent("minecraft:is_baby")} \xA77tamed:\xA7f${cat.hasComponent("minecraft:is_tamed")} \xA77tags:\xA7f${cat.getTags().join(",") || "none"}`,
        `\xA77state:\xA7f${cat.getProperty("clingy_cats:state")}`,
        `MH:${mainhand?.typeId ?? "empty"} OH:${offhand?.typeId ?? "empty"} , inv:[${invStr}]`,
        `\xA77pregnant:\xA7f${cat.hasComponent("minecraft:is_pregnant")}\xA77clingy_pregnant:\xA7f${cat.getProperty("clingy_cats:pregnant")}`,
        `\xA77want_to_lay_eggs?:\xA7f${cat.hasComponent("minecraft:behavior.lay_egg")}`
      ].join("\n");
      player.onScreenDisplay.setActionBar(lines);
    }
  }, 10);
}

// scripts/main.ts
system3.run(() => {
  registerCatsEvents();
  registerDebugRaycast();
  world6.sendMessage("ClingyCats script loaded!");
});

//# sourceMappingURL=../debug/main.js.map
