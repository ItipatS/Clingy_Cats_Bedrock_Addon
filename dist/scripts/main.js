// scripts/main.ts
import { system as system6 } from "@minecraft/server";

// scripts/events/eventRegister.ts
import { system as system3 } from "@minecraft/server";

// scripts/logics/breed.ts
import { world } from "@minecraft/server";

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
  { weight: 2, food: "tropical_fish" },
  { weight: 2, food: "rabbit" },
  { weight: 3, food: "chicken" }
];
var FAVORITE_BLOCK_POOL = [
  { weight: 1, block: "bed" },
  { weight: 1, block: "soft" },
  { weight: 1, block: "warm" },
  { weight: 1, block: "high" },
  { weight: 1, block: "owner" },
  { weight: 1, block: "sun" }
];
var BIOME_COLOR_BIAS = {
  // Snowy / icy
  "minecraft:snowy_plains": ["white", "gray", "cream"],
  "minecraft:snowy_taiga": ["white", "gray", "cream"],
  "minecraft:snowy_slopes": ["white", "gray", "cream"],
  "minecraft:grove": ["white", "gray"],
  "minecraft:frozen_peaks": ["white", "gray"],
  "minecraft:jagged_peaks": ["white", "gray"],
  "minecraft:ice_spikes": ["white", "gray"],
  "minecraft:frozen_river": ["white", "gray"],
  // Pale garden
  "minecraft:pale_garden": ["white", "gray"],
  // Cherry grove
  "minecraft:cherry_grove": ["white", "cream"],
  // Dark forest / swamp
  "minecraft:dark_forest": ["black", "brown", "gray"],
  "minecraft:swamp": ["brown", "gray", "black"],
  "minecraft:mangrove_swamp": ["brown", "gray", "black"],
  // Desert / badlands / savanna
  "minecraft:desert": ["orange", "brown", "cream"],
  "minecraft:badlands": ["orange", "brown"],
  "minecraft:eroded_badlands": ["orange", "brown"],
  "minecraft:wooded_badlands": ["orange", "brown"],
  "minecraft:savanna": ["orange", "brown", "cream"],
  "minecraft:savanna_plateau": ["orange", "brown", "cream"],
  "minecraft:windswept_savanna": ["orange", "brown"],
  // Jungle
  "minecraft:jungle": ["orange", "brown"],
  "minecraft:sparse_jungle": ["orange", "brown"],
  "minecraft:bamboo_jungle": ["orange", "brown"],
  // Flower / meadow
  "minecraft:meadow": ["white", "cream", "gray"],
  "minecraft:flower_forest": ["white", "cream", "orange"],
  "minecraft:sunflower_plains": ["orange", "cream", "white"],
  // Forest / taiga
  "minecraft:forest": ["brown", "gray", "chocolate"],
  "minecraft:birch_forest": ["white", "gray"],
  "minecraft:old_growth_birch_forest": ["white", "gray"],
  "minecraft:taiga": ["gray", "brown", "white"],
  "minecraft:old_growth_spruce_taiga": ["gray", "brown"],
  "minecraft:old_growth_pine_taiga": ["gray", "brown"]
};
var BREED_SPAWN_POOLS = {
  ragdoll: {
    trait: [
      { value: "lazy", weight: 5 },
      { value: "friendly", weight: 3 },
      { value: "independent", weight: 1 },
      { value: "curious", weight: 1 }
    ],
    personality: [
      { value: "affectionate", weight: 5 },
      { value: "calm", weight: 3 },
      { value: "aloof", weight: 1 },
      { value: "playful", weight: 1 }
    ],
    block: [
      { value: "soft", weight: 5 },
      { value: "bed", weight: 3 },
      { value: "owner", weight: 2 }
    ],
    size: [
      { value: "tiny", weight: 1 },
      { value: "small", weight: 5 },
      { value: "normal", weight: 25 },
      { value: "large", weight: 45 },
      { value: "huge", weight: 24 }
    ]
  },
  siamese: {
    trait: [
      { value: "curious", weight: 4 },
      { value: "active", weight: 3 },
      { value: "friendly", weight: 2 },
      { value: "independent", weight: 1 }
    ],
    personality: [
      { value: "confident", weight: 4 },
      { value: "playful", weight: 3 },
      { value: "affectionate", weight: 2 },
      { value: "anxious", weight: 1 }
    ],
    block: [
      { value: "high", weight: 4 },
      { value: "sun", weight: 3 },
      { value: "owner", weight: 2 },
      { value: "warm", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 30 },
      { value: "normal", weight: 45 },
      { value: "large", weight: 17 },
      { value: "huge", weight: 3 }
    ]
  },
  persian: {
    trait: [
      { value: "lazy", weight: 5 },
      { value: "independent", weight: 3 },
      { value: "shy", weight: 2 }
    ],
    personality: [
      { value: "aloof", weight: 5 },
      { value: "calm", weight: 3 },
      { value: "affectionate", weight: 1 },
      { value: "playful", weight: 1 }
    ],
    block: [
      { value: "soft", weight: 5 },
      { value: "warm", weight: 3 },
      { value: "bed", weight: 2 }
    ],
    size: [
      { value: "tiny", weight: 3 },
      { value: "small", weight: 15 },
      { value: "normal", weight: 45 },
      { value: "large", weight: 30 },
      { value: "huge", weight: 7 }
    ]
  },
  british: {
    trait: [
      { value: "independent", weight: 4 },
      { value: "lazy", weight: 3 },
      { value: "curious", weight: 2 },
      { value: "friendly", weight: 1 }
    ],
    personality: [
      { value: "aloof", weight: 4 },
      { value: "calm", weight: 3 },
      { value: "confident", weight: 2 },
      { value: "affectionate", weight: 1 }
    ],
    block: [
      { value: "high", weight: 4 },
      { value: "soft", weight: 3 },
      { value: "warm", weight: 2 },
      { value: "sun", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 2 },
      { value: "small", weight: 10 },
      { value: "normal", weight: 35 },
      { value: "large", weight: 40 },
      { value: "huge", weight: 13 }
    ]
  },
  tabby: {
    trait: [
      { value: "active", weight: 4 },
      { value: "curious", weight: 3 },
      { value: "friendly", weight: 2 },
      { value: "independent", weight: 1 }
    ],
    personality: [
      { value: "playful", weight: 4 },
      { value: "confident", weight: 3 },
      { value: "affectionate", weight: 2 },
      { value: "calm", weight: 1 }
    ],
    block: [
      { value: "sun", weight: 4 },
      { value: "high", weight: 3 },
      { value: "warm", weight: 2 },
      { value: "soft", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  all_black: {
    trait: [
      { value: "independent", weight: 4 },
      { value: "curious", weight: 3 },
      { value: "shy", weight: 2 },
      { value: "active", weight: 1 }
    ],
    personality: [
      { value: "aloof", weight: 4 },
      { value: "confident", weight: 3 },
      { value: "anxious", weight: 2 },
      { value: "calm", weight: 1 }
    ],
    block: [
      { value: "high", weight: 4 },
      { value: "warm", weight: 3 },
      { value: "soft", weight: 2 },
      { value: "sun", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  black: {
    trait: [
      { value: "curious", weight: 4 },
      { value: "active", weight: 3 },
      { value: "independent", weight: 2 },
      { value: "friendly", weight: 1 }
    ],
    personality: [
      { value: "playful", weight: 4 },
      { value: "confident", weight: 3 },
      { value: "aloof", weight: 2 },
      { value: "calm", weight: 1 }
    ],
    block: [
      { value: "high", weight: 4 },
      { value: "sun", weight: 3 },
      { value: "warm", weight: 2 },
      { value: "soft", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  calico: {
    trait: [
      { value: "friendly", weight: 4 },
      { value: "curious", weight: 3 },
      { value: "active", weight: 2 },
      { value: "shy", weight: 1 }
    ],
    personality: [
      { value: "affectionate", weight: 4 },
      { value: "playful", weight: 3 },
      { value: "anxious", weight: 2 },
      { value: "calm", weight: 1 }
    ],
    block: [
      { value: "soft", weight: 4 },
      { value: "owner", weight: 3 },
      { value: "bed", weight: 2 },
      { value: "warm", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  jellie: {
    trait: [
      { value: "friendly", weight: 5 },
      { value: "curious", weight: 3 },
      { value: "active", weight: 2 }
    ],
    personality: [
      { value: "affectionate", weight: 5 },
      { value: "playful", weight: 3 },
      { value: "confident", weight: 2 }
    ],
    block: [
      { value: "owner", weight: 5 },
      { value: "soft", weight: 3 },
      { value: "bed", weight: 2 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  ocelot: {
    trait: [
      { value: "independent", weight: 5 },
      { value: "shy", weight: 3 },
      { value: "active", weight: 2 }
    ],
    personality: [
      { value: "aloof", weight: 5 },
      { value: "anxious", weight: 3 },
      { value: "confident", weight: 2 }
    ],
    block: [
      { value: "high", weight: 5 },
      { value: "sun", weight: 3 },
      { value: "warm", weight: 2 }
    ],
    size: [
      { value: "tiny", weight: 10 },
      { value: "small", weight: 35 },
      { value: "normal", weight: 40 },
      { value: "large", weight: 13 },
      { value: "huge", weight: 2 }
    ]
  },
  red: {
    trait: [
      { value: "active", weight: 4 },
      { value: "friendly", weight: 3 },
      { value: "curious", weight: 2 },
      { value: "lazy", weight: 1 }
    ],
    personality: [
      { value: "playful", weight: 4 },
      { value: "affectionate", weight: 3 },
      { value: "confident", weight: 2 },
      { value: "calm", weight: 1 }
    ],
    block: [
      { value: "warm", weight: 4 },
      { value: "sun", weight: 3 },
      { value: "soft", weight: 2 },
      { value: "owner", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 5 },
      { value: "small", weight: 20 },
      { value: "normal", weight: 50 },
      { value: "large", weight: 20 },
      { value: "huge", weight: 5 }
    ]
  },
  white: {
    trait: [
      { value: "shy", weight: 4 },
      { value: "lazy", weight: 3 },
      { value: "independent", weight: 2 },
      { value: "curious", weight: 1 }
    ],
    personality: [
      { value: "anxious", weight: 4 },
      { value: "aloof", weight: 3 },
      { value: "calm", weight: 2 },
      { value: "affectionate", weight: 1 }
    ],
    block: [
      { value: "soft", weight: 4 },
      { value: "bed", weight: 3 },
      { value: "high", weight: 2 },
      { value: "warm", weight: 1 }
    ],
    size: [
      { value: "tiny", weight: 8 },
      { value: "small", weight: 30 },
      { value: "normal", weight: 42 },
      { value: "large", weight: 15 },
      { value: "huge", weight: 5 }
    ]
  }
};
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
    if (breedId === "clingy_cats:test") continue;
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
var SIZE_ORDER = ["tiny", "small", "normal", "large", "huge"];
function pickWeightedSize(pool) {
  const total = pool.reduce((s, e) => s + e.weight, 0);
  let roll = Math.random() * total;
  for (const entry of pool) {
    roll -= entry.weight;
    if (roll <= 0) return entry.value;
  }
  return "normal";
}
function applyFullMoonOverrides(cat) {
  const catalog = BREED_TEXTURES[cat.typeId];
  if (catalog) {
    const paleKeys = Object.keys(catalog).map(Number).filter(
      (k) => catalog[k].color === "white" || catalog[k].color === "cream"
    );
    if (paleKeys.length > 0 && Math.random() < 0.8) {
      const localIdx = paleKeys[Math.floor(Math.random() * paleKeys.length)];
      applyTextureData(cat, localIdx, catalog[localIdx]);
    }
  }
  const heteroOptions = EYE_COLORS.filter((c) => c.startsWith("heterochromia"));
  const eyeColor = heteroOptions[Math.floor(Math.random() * heteroOptions.length)];
  const eyeShape = EYE_SHAPES[Math.floor(Math.random() * EYE_SHAPES.length)];
  const shapeIdx = EYE_SHAPES.indexOf(eyeShape);
  const colorIdx = EYE_COLORS.indexOf(eyeColor);
  applyEyesData(cat, shapeIdx * EYE_COLORS.length + colorIdx, { shape: eyeShape, color: eyeColor });
  const isBaby = cat.hasComponent("minecraft:is_baby");
  cat.setProperty("clingy_cats:size", "huge");
  cat.triggerEvent(isBaby ? "clingy_cats:baby_size_huge" : "clingy_cats:size_huge");
}
function assignRandomSize(cat) {
  const breedKey = cat.typeId.replace("clingy_cats:", "");
  const pool = BREED_SPAWN_POOLS[breedKey]?.size;
  const size = pool ? pickWeightedSize(pool) : "normal";
  cat.setProperty("clingy_cats:size", size);
  const isBaby = cat.hasComponent("minecraft:is_baby");
  cat.triggerEvent(isBaby ? `clingy_cats:baby_size_${size}` : `clingy_cats:size_${size}`);
}
function assignInheritedSize(baby, momSize, dadSize) {
  const sourceSize = dadSize && Math.random() < 0.5 ? dadSize : momSize;
  const sourceIdx = SIZE_ORDER.indexOf(sourceSize);
  const idx = sourceIdx === -1 ? 2 : sourceIdx;
  const childIdx = Math.random() < 0.85 ? Math.max(0, Math.min(SIZE_ORDER.length - 1, idx + Math.floor(Math.random() * 3) - 1)) : Math.floor(Math.random() * SIZE_ORDER.length);
  const size = SIZE_ORDER[childIdx];
  baby.setProperty("clingy_cats:size", size);
  baby.triggerEvent(`clingy_cats:baby_size_${size}`);
}
function applyAdultSize(cat) {
  const size = cat.getProperty("clingy_cats:size") ?? "normal";
  cat.triggerEvent(`clingy_cats:size_${size}`);
}
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
function assignRandomAppearance(cat, preferredColors) {
  const catalog = BREED_TEXTURES[cat.typeId];
  const keys = Object.keys(catalog).map(Number);
  if (preferredColors && preferredColors.length > 0) {
    const exclusive = keys.filter((k) => preferredColors.includes(catalog[k].color));
    if (exclusive.length > 0) {
      const idx2 = exclusive[Math.floor(Math.random() * exclusive.length)];
      applyTextureData(cat, idx2, catalog[idx2]);
      return;
    }
  }
  const idx = keys[Math.floor(Math.random() * keys.length)];
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
function weightedPick(pool) {
  return weightedRandom(pool).value;
}
function assignRandomPersonality(cat) {
  const trait = weightedRandom(TRAIT_POOL).trait;
  const personality = weightedRandom(PERSONALITY_POOL).personality;
  const food = weightedRandom(FAVORITE_FOOD_POOL).food;
  const block = weightedRandom(FAVORITE_BLOCK_POOL).block;
  cat.setProperty("clingy_cats:behavior_trait", trait);
  cat.setProperty("clingy_cats:personality", personality);
  cat.setProperty("clingy_cats:favorite_food", food);
  cat.setProperty("clingy_cats:favorite_block", block);
  cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
  cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}
function assignBreedPersonality(cat) {
  const breedKey = cat.typeId.replace("clingy_cats:", "");
  const pool = BREED_SPAWN_POOLS[breedKey];
  if (!pool) {
    assignRandomPersonality(cat);
    return;
  }
  const trait = weightedPick(pool.trait);
  const personality = weightedPick(pool.personality);
  const block = weightedPick(pool.block);
  const food = weightedRandom(FAVORITE_FOOD_POOL).food;
  cat.setProperty("clingy_cats:behavior_trait", trait);
  cat.setProperty("clingy_cats:personality", personality);
  cat.setProperty("clingy_cats:favorite_block", block);
  cat.setProperty("clingy_cats:favorite_food", food);
  cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
  cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}

// scripts/logics/breed.ts
function getBiomeColors(cat) {
  try {
    const biome = cat.dimension.getBiome(cat.location);
    return BIOME_COLOR_BIAS[biome.id];
  } catch {
    return void 0;
  }
}
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
  assignRandomAppearance(cat, getBiomeColors(cat));
  assignRandomEyesAndWhiskers(cat);
  if (world.getMoonPhase() === 0) {
    applyFullMoonOverrides(cat);
  } else {
    assignRandomSize(cat);
  }
  assignBreedPersonality(cat);
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
    whiskers: entity.getProperty("clingy_cats:whiskers"),
    size: entity.getProperty("clingy_cats:size") ?? "normal"
  };
}
function findFather(mother) {
  return mother.dimension.getEntities({ location: mother.location, maxDistance: 6, families: ["clingy_cats"] }).filter((e) => e.id !== mother.id && !e.hasComponent("minecraft:is_baby")).sort((a, b) => distanceSq(a, mother) - distanceSq(b, mother))[0];
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
  for (let i = 0; i < babyCount; i++) {
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
    assignInheritedSize(baby, momGenes.size, dadGenes?.size);
    assignBreedPersonality(baby);
    baby.triggerEvent("clingy_cats:born");
  }
}

// scripts/logics/bond.ts
import { system, world as world2 } from "@minecraft/server";
var AFF = "clingy_cats:affection_level";
var TRU = "clingy_cats:trust_level";
var AFF_MAX = 1e3;
var TRU_MAX = 1e3;
var TRU_REST = 500;
var BONDER = "clingy_cats:bonder_id";
function getBonderId(cat) {
  return cat.getDynamicProperty(BONDER) ?? "";
}
function canBond(cat, player) {
  const id = getBonderId(cat);
  return id === "" || id === player.id;
}
function claimBond(cat, player) {
  if (getBonderId(cat) === "") cat.setDynamicProperty(BONDER, player.id);
}
var TAME_THRESHOLDS = {
  affectionate: 150,
  playful: 250,
  confident: 250,
  calm: 300,
  aloof: 350,
  anxious: 400
};
var PET_BUMPS = {
  affectionate: 20,
  playful: 12,
  confident: 5,
  calm: 3,
  aloof: 1,
  anxious: 0
};
var FEED_BUMPS = {
  affectionate: { favorite: 30, neutral: 12 },
  playful: { favorite: 25, neutral: 10 },
  confident: { favorite: 30, neutral: 12 },
  calm: { favorite: 25, neutral: 10 },
  aloof: { favorite: 20, neutral: 8 },
  anxious: { favorite: 15, neutral: 5 }
};
function checkAutoTame(cat, player) {
  if (!cat.isValid) return false;
  const tame = cat.getComponent("minecraft:tameable");
  if (!tame || tame.isTamed) return false;
  const personality = cat.getProperty("clingy_cats:personality");
  if (!personality) return false;
  const threshold = TAME_THRESHOLDS[personality];
  if (getAffection(cat) < threshold) return false;
  tame.tame(player);
  cat.setDynamicProperty(BONDER, "");
  cat.setProperty(AFF, 100);
  cat.setProperty(TRU, TRU_REST);
  cat.dimension.playSound("mob.cat.meow", cat.location, { volume: 1, pitch: 1.2 });
  return true;
}
function getAffection(cat) {
  return cat.getProperty(AFF) ?? 0;
}
function setAffection(cat, v) {
  cat.setProperty(AFF, Math.max(0, Math.min(AFF_MAX, Math.round(v))));
}
function addAffection(cat, d) {
  setAffection(cat, getAffection(cat) + d);
}
function getTrust(cat) {
  return cat.getProperty(TRU) ?? TRU_REST;
}
function setTrust(cat, v) {
  cat.setProperty(TRU, Math.max(0, Math.min(TRU_MAX, Math.round(v))));
}
function addTrust(cat, d) {
  setTrust(cat, getTrust(cat) + d);
}
function registerBondLoop() {
  system.runInterval(() => {
    for (const player of world2.getAllPlayers()) {
      const cats = player.dimension.getEntities({
        location: player.location,
        maxDistance: 64,
        families: ["clingy_cats"]
      });
      for (const cat of cats) {
        if (!cat.isValid) continue;
        const t = getTrust(cat);
        if (t !== TRU_REST) setTrust(cat, t + (t < TRU_REST ? 1 : -1));
        const tame = cat.getComponent("minecraft:tameable");
        const dx = cat.location.x - player.location.x;
        const dy = cat.location.y - player.location.y;
        const dz = cat.location.z - player.location.z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (tame?.isTamed) {
          if (tame.tamedToPlayerId !== player.id) continue;
          if (d2 > 256) continue;
          addAffection(cat, 1);
        } else {
          if (isHissing(cat)) continue;
          if (!player.isSneaking) continue;
          if (d2 > 64) continue;
          const trait = cat.getProperty("clingy_cats:behavior_trait");
          const personality = cat.getProperty("clingy_cats:personality");
          if (trait !== "curious" && personality !== "affectionate") continue;
          if (!canBond(cat, player)) continue;
          claimBond(cat, player);
          addAffection(cat, 1);
          checkAutoTame(cat, player);
        }
      }
    }
  }, 20);
}
function handlePet(cat) {
  if (!cat.isValid) return;
  addAffection(cat, 5);
  addTrust(cat, 2);
  cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 0.8, pitch: 1.2 });
}
function handleWildPet(cat) {
  if (!cat.isValid) return;
  if (isHissing(cat)) return;
  const personality = cat.getProperty("clingy_cats:personality");
  if (!personality) return;
  const player = cat.dimension.getPlayers({ location: cat.location, maxDistance: 3 }).sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];
  if (!player) return;
  if (!canBond(cat, player)) {
    cat.dimension.playSound("mob.cat.hiss", cat.location, { volume: 0.5, pitch: 1 });
    return;
  }
  claimBond(cat, player);
  addAffection(cat, PET_BUMPS[personality]);
  addTrust(cat, 2);
  cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 0.8, pitch: 1.2 });
  checkAutoTame(cat, player);
}
function handleCatHurt(cat) {
  if (!cat.isValid) return;
  addTrust(cat, -15);
}
var WRONG_TRUST_DROPS = {
  anxious: -40,
  affectionate: -25,
  aloof: -20,
  playful: -15,
  confident: -10,
  calm: -10
};
var HISS_VOLUMES = {
  anxious: 1,
  affectionate: 0.8,
  aloof: 0.8,
  playful: 0.8,
  confident: 0.8,
  calm: 0.6
};
var HISSING_UNTIL = "clingy_cats:hissing_until";
var HISS_LOCKOUT_TICKS = 60;
var STATE_HISS_TRUST_FLOOR = 300;
function isHissing(cat) {
  const until = cat.getDynamicProperty(HISSING_UNTIL) ?? 0;
  return system.currentTick < until;
}
function handleWrongFood(cat) {
  if (!cat.isValid) return;
  if (isHissing(cat)) return;
  const personality = cat.getProperty("clingy_cats:personality");
  if (!personality) return;
  const drop = WRONG_TRUST_DROPS[personality];
  const volume = HISS_VOLUMES[personality];
  addTrust(cat, drop);
  cat.setProperty("clingy_cats:emotion", "angry");
  cat.dimension.playSound("mob.cat.hiss", cat.location, { volume, pitch: 1 });
  cat.dimension.spawnParticle("minecraft:villager_angry", {
    x: cat.location.x,
    y: cat.location.y + 0.6,
    z: cat.location.z
  });
  if (getTrust(cat) >= STATE_HISS_TRUST_FLOOR) return;
  cat.setProperty("clingy_cats:state", "fleeing");
  cat.setDynamicProperty(HISSING_UNTIL, system.currentTick + HISS_LOCKOUT_TICKS);
  system.runTimeout(() => {
    if (!cat.isValid) return;
    cat.dimension.spawnParticle("minecraft:villager_angry", {
      x: cat.location.x,
      y: cat.location.y + 0.6,
      z: cat.location.z
    });
  }, 20);
  system.runTimeout(() => {
    if (!cat.isValid) return;
    cat.dimension.spawnParticle("minecraft:villager_angry", {
      x: cat.location.x,
      y: cat.location.y + 0.6,
      z: cat.location.z
    });
  }, 40);
  system.runTimeout(() => {
    if (!cat.isValid) return;
    behaviorTick(cat);
  }, HISS_LOCKOUT_TICKS);
}
var SLEEP_GATE = "clingy_cats:last_sleep_bump";
function handleOwnerSleeping(cat) {
  if (!cat.isValid) return;
  const now = system.currentTick;
  const last = cat.getDynamicProperty(SLEEP_GATE) ?? -9999;
  if (now - last < 200) return;
  cat.setDynamicProperty(SLEEP_GATE, now);
  addAffection(cat, 3);
}

// scripts/logics/states.ts
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
function applyBondMultipliers(cat, pool) {
  const aff = getAffection(cat);
  if (aff <= 0) return;
  for (const e of pool) {
    if (e.behavior === "temp_follow_close") e.weight *= 1 + aff / 500;
    else if (e.behavior === "enter_sleep_state") e.weight *= 1 + aff / 800;
    else if (e.behavior === "enter_sit_state") e.weight *= 1 + aff / 1e3;
  }
}
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
function spawnMoodReaction(cat, behavior) {
  if (Math.random() >= 0.4) return;
  const personality = cat.getProperty("clingy_cats:personality");
  const trait = cat.getProperty("clingy_cats:behavior_trait");
  const aff = getAffection(cat);
  const trust = getTrust(cat);
  let emotion = "happy";
  let particle = null;
  if (trust < 300) {
    emotion = "scared";
    particle = "minecraft:mobspell_ambient";
  } else if (aff > 600 && (behavior === "enter_sleep_state" || behavior === "enter_sit_state" || behavior === "temp_follow_close")) {
    emotion = "happy";
    particle = "minecraft:heart_particle";
  } else if (personality === "playful" && (behavior === "temp_play" || behavior === "temp_follow_loose")) {
    emotion = "playful";
    particle = "minecraft:villager_happy";
  } else if (personality === "anxious") {
    emotion = "scared";
    particle = "minecraft:sneeze";
  } else if (personality === "affectionate" && behavior === "temp_follow_close") {
    emotion = "happy";
    particle = "minecraft:heart_particle";
  } else if (trait === "curious" && (behavior === "temp_follow_loose" || behavior === "enter_groom_state")) {
    emotion = "curious";
    particle = "minecraft:glow_particle";
  } else if (personality === "aloof") {
    emotion = "happy";
    if (Math.random() < 0.3) particle = "minecraft:villager_happy";
  } else if (behavior === "enter_sleep_state" && aff > 300) {
    emotion = "happy";
    particle = "minecraft:sculk_soul_particle";
  } else {
    emotion = "happy";
    particle = "minecraft:villager_happy";
  }
  cat.setProperty("clingy_cats:emotion", emotion);
  if (particle) {
    const loc = { x: cat.location.x, y: cat.location.y + 0.6, z: cat.location.z };
    cat.dimension.spawnParticle(particle, loc);
  }
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
  applyBondMultipliers(cat, pool);
  const chosen = state || weightedRandom2(pool);
  spawnMoodReaction(cat, chosen);
  if (chosen === "enter_still_state" || chosen === "enter_sit_state" || chosen === "enter_sleep_state" || chosen === "enter_groom_state") {
    cat.triggerEvent(`clingy_cats:${chosen}`);
    cat.setDynamicProperty(LAST_TEMP, "");
    return;
  }
  if (chosen === null) {
    cat.setDynamicProperty(LAST_TEMP, "");
    return;
  }
  cat.triggerEvent(`clingy_cats:add_${chosen}`);
  cat.setDynamicProperty(LAST_TEMP, chosen);
}
function restoreIdentity(cat) {
  if (!cat.isValid) return;
  const trait = cat.getProperty("clingy_cats:behavior_trait");
  if (!trait) return;
  const personality = cat.getProperty("clingy_cats:personality");
  if (!personality) return;
  const last = cat.getDynamicProperty(LAST_TEMP);
  if (last) {
    cat.triggerEvent(`clingy_cats:remove_${last}`);
    cat.setDynamicProperty(LAST_TEMP, "");
  }
  cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
  cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
}

// scripts/logics/interact.ts
import { MolangVariableMap } from "@minecraft/server";
function handleGiveItem(cat) {
  if (!cat.isValid) return;
  if (isHissing(cat)) {
    cat.setProperty("clingy_cats:equipment", "none");
    return;
  }
  const equipment = cat.getProperty("clingy_cats:equipment");
  const favoriteFood = cat.getProperty("clingy_cats:favorite_food");
  const personality = cat.getProperty("clingy_cats:personality");
  cat.setProperty("clingy_cats:equipment", "none");
  const isFavorite = equipment === favoriteFood;
  if (isFavorite) {
    const molang = new MolangVariableMap();
    molang.setVector3("variable.direction", { x: 0, y: 1, z: 0 });
    molang.setColorRGB("variable.color", { red: 1, green: 0.85, blue: 0.2 });
    const loc = { ...cat.location, y: cat.location.y + 1 };
    cat.dimension.spawnParticle("minecraft:wax_particle", loc, molang);
    cat.dimension.spawnParticle("minecraft:wax_particle", { ...loc, x: loc.x + 0.3 }, molang);
    cat.dimension.spawnParticle("minecraft:wax_particle", { ...loc, x: loc.x - 0.3 }, molang);
    cat.dimension.playSound("mob.cat.purreow", cat.location, { volume: 1, pitch: 1 });
  } else {
    const molang = new MolangVariableMap();
    molang.setColorRGB("variable.note_color", { red: 0.5, green: 0.7, blue: 1 });
    cat.dimension.spawnParticle("minecraft:note_particle", { ...cat.location, y: cat.location.y + 0.5 }, molang);
    cat.dimension.playSound("mob.cat.purr", cat.location, { volume: 1, pitch: 1 });
  }
  const tameable = cat.getComponent("minecraft:tameable");
  if (tameable?.isTamed) {
    if (isFavorite) {
      addAffection(cat, 20);
      addTrust(cat, 5);
    }
    return;
  }
  const player = cat.dimension.getPlayers({ location: cat.location, maxDistance: 10 }).sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];
  if (!player) return;
  if (!canBond(cat, player)) {
    cat.dimension.playSound("mob.cat.hiss", cat.location, { volume: 0.5, pitch: 1 });
    return;
  }
  claimBond(cat, player);
  const bump = FEED_BUMPS[personality];
  if (bump) addAffection(cat, isFavorite ? bump.favorite : bump.neutral);
  behaviorTick(cat, "temp_follow_close");
  checkAutoTame(cat, player);
}

// scripts/logics/riding.ts
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
}
function handleAnchorExpire(anchor) {
  if (!anchor.isValid) return;
  const player = findOwnerPlayer(anchor);
  if (player) {
    const ids = getStoredAnchorIds(player);
    setStoredAnchorIds(player, ids.filter((id) => id !== anchor.id));
  }
  anchor.remove();
}

// scripts/logics/guideBook.ts
import { ItemStack, system as system2, world as world4 } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
var GUIDE_TAG = "clingy_cats:welcomed";
var ICON_GUIDE = "textures/items/guidebook";
var ICON_MEOW = "textures/items/meownifier";
var ICON_TABBY = "textures/items/spawn_eggs/tabby_spawn_egg";
var ICON_PERSIAN = "textures/items/spawn_eggs/persian_spawn_egg";
var ICON_OCELOT = "textures/items/spawn_eggs/ocelot_spawn_egg";
var ICON_CALICO = "textures/items/spawn_eggs/calico_spawn_egg";
var ICON_RAGDOLL = "textures/items/spawn_eggs/ragdoll_spawn_egg";
function registerGuideBookEvents() {
  world4.afterEvents.playerSpawn.subscribe((ev) => {
    if (!ev.initialSpawn) return;
    const player = ev.player;
    if (player.hasTag(GUIDE_TAG)) return;
    player.addTag(GUIDE_TAG);
    system2.runTimeout(() => {
      const inv = player.getComponent("minecraft:inventory");
      inv?.container?.addItem(new ItemStack("clingy_cats:guide_book", 1));
    }, 60);
  });
}
function showGuide(player) {
  new ActionFormData().title("\xA76\xA7l\u25C6 Field Notes \u25C6\xA7r").body("\xA77These are notes I've kept\n\xA77while learning the cats.").button("\xA7e\xA7lOn Taming", ICON_TABBY).button("\xA7d\xA7lKinds I've Met", ICON_CALICO).button("\xA7b\xA7lHow They Live", ICON_OCELOT).button("\xA7a\xA7lWhere I Found Them", ICON_RAGDOLL).button("\xA76\xA7lOn Kittens", ICON_PERSIAN).button("\xA73\xA7lThe Meownifier", ICON_MEOW).button("\xA79\xA7lSigns They Leave", ICON_GUIDE).button("\xA78\xA7l... Loose Pages ...").button("\xA77Close the book").show(player).then((res) => {
    if (res.canceled || res.selection === 8) return;
    const pages = [
      pageTaming,
      pagePersonalities,
      pageTraits,
      pageBreeds,
      pageBreeding,
      pageMeownifier,
      pageMoodSignals,
      pageSecrets
    ];
    pages[res.selection]?.(player);
  });
}
function H(text) {
  return { kind: "header", text };
}
function L(text) {
  return { kind: "label", text };
}
function D() {
  return { kind: "divider" };
}
function buildPage(player, title, intro, blocks) {
  const form = new ActionFormData().title(title).body(intro);
  for (const b of blocks) {
    if (b.kind === "header") form.header(b.text);
    else if (b.kind === "label") form.label(b.text);
    else form.divider();
  }
  form.button("\xA77< Back").button("\xA78Close").show(player).then((res) => {
    if (!res.canceled && res.selection === 0) showGuide(player);
  });
}
function pageTaming(player) {
  buildPage(
    player,
    "\xA7e\xA7lOn Taming\xA7r",
    "\xA7fIt took me a while to learn that not every cat wants the same thing. Some run off if you crowd them. Some won't even glance at food.",
    [
      H("\xA7eThings I've tried that worked\xA7r"),
      L("\xA77Crouching nearby and just waiting."),
      L("\xA77Holding out their favorite \u2014 you can"),
      L("\xA77see which one by their face."),
      L("\xA77Reaching slowly with an empty hand."),
      D(),
      H("\xA7eWhat I had to unlearn\xA7r"),
      L("\xA77It's never a coin flip. Each cat"),
      L("\xA77keeps its own quiet count."),
      L("\xA77Some I tried for weeks. Petting did"),
      L("\xA77nothing \u2014 they only wanted food."),
      L("\xA77Others followed me home after one"),
      L("\xA77slow afternoon."),
      D(),
      H("\xA7eHeads-up\xA7r"),
      L("\xA77If a cat warms up to you, it's yours."),
      L("\xA77Friends who try to feed it get hissed at.")
    ]
  );
}
function pagePersonalities(player) {
  buildPage(
    player,
    "\xA7d\xA7lKinds I've Met\xA7r",
    "\xA7fEvery cat is its own creature, but I've started to notice kinds.",
    [
      H("\xA7dAffectionate\xA7r"),
      L("\xA77Watches you. Will leave a warm spot"),
      L("\xA77to sleep next to a cold one, if you're in it."),
      D(),
      H("\xA7dAloof\xA7r"),
      L("\xA77Sits with its back to you. It's not"),
      L("\xA77personal \u2014 they're like that with everyone."),
      D(),
      H("\xA7dPlayful\xA7r"),
      L("\xA77Comes close just to look. Pounces"),
      L("\xA77on string like it owes them money."),
      D(),
      H("\xA7dCalm\xA7r"),
      L("\xA77Doesn't startle. Lightning, water,"),
      L("\xA77dogs barking \u2014 nothing fazes them."),
      D(),
      H("\xA7dAnxious\xA7r"),
      L("\xA77Flees anything that isn't sneaking."),
      L("\xA77Make yourself small."),
      D(),
      H("\xA7dConfident\xA7r"),
      L("\xA77Stares from across the room. Owns"),
      L("\xA77the place. Easy if you feed them right.")
    ]
  );
}
function pageTraits(player) {
  buildPage(
    player,
    "\xA7b\xA7lHow They Live\xA7r",
    "\xA7fPersonality is who they are. Traits are how they spend their days. Different thing.",
    [
      H("\xA7bThe homebodies\xA7r"),
      L("\xA77Some cats sit for hours. Long naps,"),
      L("\xA77slow stretches. Nothing much pulls them out."),
      D(),
      H("\xA7bThe wanderers\xA7r"),
      L("\xA77Others can't sit still. Always pacing,"),
      L("\xA77always somewhere just past the door."),
      D(),
      H("\xA7bThe nosy ones\xA7r"),
      L("\xA77Some come up to investigate everything."),
      L("\xA77Sit quietly near one and they notice you."),
      D(),
      H("\xA7bThe skittish ones\xA7r"),
      L("\xA77Big personal-space bubble. Sneak"),
      L("\xA77or they're gone."),
      D(),
      H("\xA7bThe loose followers\xA7r"),
      L("\xA77Tame, but on their own schedule."),
      L("\xA77They'll come back. Eventually.")
    ]
  );
}
function pageBreeds(player) {
  buildPage(
    player,
    "\xA7a\xA7lWhere I Found Them\xA7r",
    "\xA7fTwelve coats, twelve homes. I've found them all eventually. The same breed can look different depending where you stand.",
    [
      H("\xA7aThe common ones\xA7r"),
      L("\xA77Tabby \u2014 forest, birch forest"),
      L("\xA77Black \u2014 plains, sunflower plains"),
      L("\xA77Siamese \u2014 savanna"),
      L("\xA77Red \u2014 desert, badlands"),
      L("\xA77British \u2014 taiga (not mega)"),
      L("\xA77All Black \u2014 dark oak, swamp"),
      L("\xA77Calico \u2014 cherry, meadow, flower forest"),
      D(),
      H("\xA76Harder to find\xA7r"),
      L("\xA77Ragdoll \u2014 snowy slopes, grove"),
      L("\xA77Persian \u2014 high peaks only"),
      L("\xA77Jellie \u2014 mangrove, mushroom island"),
      L("\xA77Ocelot \u2014 deep jungle, not the edges"),
      D(),
      H("\xA75The strange one\xA7r"),
      L("\xA77White \u2014 pale garden, ice spikes."),
      L("\xA77Sphinx pattern, no hair. Spawns"),
      L("\xA77alone in the strangest places.")
    ]
  );
}
function pageBreeding(player) {
  buildPage(
    player,
    "\xA76\xA7lOn Kittens\xA7r",
    "\xA7fTwo of mine, both content, both fed what they love \u2014 there will be a kitten. Doesn't matter if they match.",
    [
      H("\xA76Whose kitten is it\xA7r"),
      L("\xA77Mostly it looks like one of them."),
      L("\xA77Now and then, neither. Something"),
      L("\xA77older pulls through."),
      D(),
      H("\xA76What they keep\xA7r"),
      L("\xA77Coat patterns and colors usually carry."),
      L("\xA77Tail, ear shape, face \u2014 almost always."),
      L("\xA77Eye color, almost always. Shape drifts."),
      L("\xA77Size mostly carries. Sometimes a runt"),
      L("\xA77or a giant turns up."),
      D(),
      H("\xA76Rare\xA7r"),
      L("\xA77Now and then a kitten has mismatched"),
      L("\xA77eyes. They tell me that's lucky."),
      D(),
      H("\xA76Growing up\xA7r"),
      L("\xA77A huge cat starts small. Fills out slowly.")
    ]
  );
}
function pageMeownifier(player) {
  buildPage(
    player,
    "\xA73\xA7lThe Meownifier\xA7r",
    "\xA7fA pocket telescope for the things a cat won't say. Aim at any cat within a few houses' distance and click. They don't notice.",
    [
      H("\xA73How to build one\xA7r"),
      L("\xA7f  \xA77. \xA7eG \xA77."),
      L("\xA7f  \xA7eG \xA7cE \xA7eG     \xA7eG\xA7f Gold \xB7 \xA7cE\xA7f Eye of Ender"),
      L("\xA7f  \xA77. \xA7bA \xA77.     \xA7bA\xA7f Amethyst"),
      D(),
      H("\xA73What it tells me\xA7r"),
      L("\xA77Breed. Who they love best."),
      L("\xA77What they like to eat, where they sit."),
      L("\xA77Their state, their feelings, the numbers."),
      D(),
      H("\xA73Keeping it sharp\xA7r"),
      L("\xA77Sixty-some uses before it dulls."),
      L("\xA77Amethyst or gold sharpens it on an anvil."),
      L("\xA77Mending keeps it forever.")
    ]
  );
}
function pageMoodSignals(player) {
  buildPage(
    player,
    "\xA79\xA7lSigns They Leave\xA7r",
    "\xA7fCats don't make faces. They make signs. I've started to notice them in the air around them.",
    [
      H("\xA79What I've seen\xA7r"),
      L("\xA7c\u2665\xA77 hearts \u2014 they love it here. Usually me."),
      L("\xA7agreen sparkles\xA77 \u2014 content. The most common."),
      L("\xA7ewhite puff\xA77 \u2014 startled. I crowded them."),
      L("\xA7bsoft glow\xA77 \u2014 curious. They're watching."),
      L("\xA75dark wisp\xA77 \u2014 deep peace. Always sleeping."),
      L("\xA79blue mist\xA77 \u2014 they don't trust me. Something hurt them."),
      D(),
      H("\xA79What I haven't figured out\xA7r"),
      L("\xA77Some cats show nothing at all."),
      L("\xA77Aloof ones, mostly. That seems to be"),
      L("\xA77its own kind of mood."),
      L("\xA77The signs come when they decide"),
      L("\xA77what to do next. Not all the time.")
    ]
  );
}
function pageSecrets(player) {
  buildPage(
    player,
    "\xA78\xA7l... Loose Pages ...\xA7r",
    "\xA78Some things I've written down only once.",
    [
      H("\xA78On the moon\xA7r"),
      L("\xA78Watch the sky. The moon keeps old promises."),
      L("\xA78Pale coats and mismatched eyes walk at night"),
      L("\xA78when the world is brightest dark."),
      D(),
      H("\xA78On death\xA7r"),
      L("\xA78A cat that has witnessed death"),
      L("\xA78and carries a golden ward..."),
      L("\xA78may never witness it again."),
      D(),
      H("\xA78On the telescope\xA7r"),
      L("\xA78It reveals what the eye cannot see."),
      L("\xA78Look closely at the numbers."),
      D(),
      L("\xA78\xA7o\u2014 that is all that will be said here.")
    ]
  );
}

// scripts/events/eventRegister.ts
function registerCatsEvents() {
  registerGuideBookEvents();
  system3.afterEvents.scriptEventReceive.subscribe((ev) => {
    const { id, message, sourceEntity } = ev;
    if (!sourceEntity || !sourceEntity.isValid) return;
    if (id === "clingycats:catspawn") {
      if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
        sourceEntity.removeTag("clingy_cats:not_wild_spawn");
        return;
      }
      if (sourceEntity.typeId === "clingy_cats:test" && !sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
        handleSpawnTestCats(sourceEntity);
        return;
      } else {
        handleWildSpawn(sourceEntity);
      }
      behaviorTick(sourceEntity);
      return;
    }
    if (id === "clingycats:conception") {
      handleConception(sourceEntity);
      return;
    }
    if (id === "clingycats:givebirth") {
      handleGiveBirth(sourceEntity);
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
    if (id == "clingycats:on_give_food") {
      handleGiveItem(sourceEntity);
    }
    if (id == "clingycats:on_pick_up_event") {
      const cat = sourceEntity;
    }
    if (id == "clingycats:on_pick_up_start_event") {
      const cat = sourceEntity;
    }
    if (id === "clingycats:request_shoulder_mount") {
      handleRequestShoulderMount(sourceEntity);
    }
    if (id === "clingycats:anchor_expire") {
      handleAnchorExpire(sourceEntity);
    }
    if (id === "clingycats:grow_up") {
      applyAdultSize(sourceEntity);
    }
    if (id === "clingycats:pet") {
      handlePet(sourceEntity);
      return;
    }
    if (id === "clingycats:wild_pet") {
      handleWildPet(sourceEntity);
      return;
    }
    if (id === "clingycats:wrong_food") {
      handleWrongFood(sourceEntity);
      return;
    }
    if (id === "clingycats:cat_hurt") {
      handleCatHurt(sourceEntity);
      return;
    }
    if (id === "clingycats:owner_sleeping") {
      handleOwnerSleeping(sourceEntity);
      return;
    }
  });
}

// scripts/debug/catdebug.ts
import { world as world6, system as system4, EquipmentSlot, GameMode, EntityComponentTypes } from "@minecraft/server";
var DEBUG = false;
function registerDebugRaycast() {
  if (!DEBUG) return;
  system4.runInterval(() => {
    for (const player of world6.getAllPlayers()) {
      const held = player.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand);
      if (held?.typeId !== "minecraft:stick") continue;
      if (player.getGameMode() === GameMode.Creative) return;
      const hit = player.getEntitiesFromViewDirection({
        maxDistance: 10,
        ignoreBlockCollision: false
      })[0];
      if (!hit?.entity) continue;
      const cat = hit.entity;
      if (!cat.typeId.startsWith("clingy_cats:")) continue;
      const inventory = cat.getComponent(EntityComponentTypes.Inventory);
      const heldItem = inventory?.container?.getItem(0);
      const lines = [
        `\xA7e${cat.typeId.replace("clingy_cats:", "")} \xA77[${cat.id.slice(-6)}]`,
        `\xA77sub:\xA7f${cat.getProperty("clingy_cats:sub_variant")} \xA77pattern:\xA7f${cat.getProperty("clingy_cats:pattern")} \xA77color:\xA7f${cat.getProperty("clingy_cats:color")}`,
        `\xA77hairs:\xA7f${cat.getProperty("clingy_cats:hairs")} \xA77tail:\xA7f${cat.getProperty("clingy_cats:tail")} \xA77snout:\xA7f${cat.getProperty("clingy_cats:snout")} \xA77head:\xA7f${cat.getProperty("clingy_cats:head")}`,
        `\xA77eye_shape:\xA7f${cat.getProperty("clingy_cats:eye_shape")} \xA77eye_color:\xA7f${cat.getProperty("clingy_cats:eye_color")} \xA77eye_idx:\xA7f${cat.getProperty("clingy_cats:eye_index")} \xA77whisker_idx:\xA7f${cat.getProperty("clingy_cats:whisker_index")}`,
        `\xA77trait:\xA7f${cat.getProperty("clingy_cats:behavior_trait")} \xA77personality:\xA7f${cat.getProperty("clingy_cats:personality")} \xA77sound:\xA7f${cat.getProperty("clingy_cats:sound_variant")}`,
        `\xA77food:\xA7f${cat.getProperty("clingy_cats:favorite_food")} \xA77block:\xA7f${cat.getProperty("clingy_cats:favorite_block")}`,
        `\xA77baby:\xA7f${cat.hasComponent("minecraft:is_baby")} \xA77tamed:\xA7f${cat.hasComponent("minecraft:is_tamed")} \xA77tags:\xA7f${cat.getTags().join(",") || "none"}`,
        `\xA77state:\xA7f${cat.getProperty("clingy_cats:state")}`,
        `\xA77pregnant:\xA7f${cat.hasComponent("minecraft:is_pregnant")}\xA77clingy_pregnant:\xA7f${cat.getProperty("clingy_cats:pregnant")}`,
        `\xA77want_to_lay_eggs?:\xA7f${cat.hasComponent("minecraft:behavior.lay_egg")}`,
        `\xA77has equippable?:\xA7f${cat.hasComponent("minecraft:equippablee")}`,
        `MH:${heldItem?.typeId ?? "empty"} , inv:[${inventory}]`
      ].join("\n");
      player.onScreenDisplay.setActionBar(lines);
    }
  }, 10);
}

// scripts/logics/inspect.ts
import { EquipmentSlot as EquipmentSlot2, GameMode as GameMode2, system as system5 } from "@minecraft/server";
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";
function registerItemComponents() {
  system5.beforeEvents.startup.subscribe((ev) => {
    ev.itemComponentRegistry.registerCustomComponent("clingy_cats_component:guide_book", {
      onUse(event) {
        const player = event.source;
        if (!player) return;
        showGuide(player);
      }
    });
    ev.itemComponentRegistry.registerCustomComponent("clingy_cats_component:meownifier", {
      onUse(event) {
        const player = event.source;
        if (!player) return;
        const hits = player.dimension.getEntitiesFromRay(
          player.getHeadLocation(),
          player.getViewDirection(),
          { maxDistance: 20, excludeTypes: ["minecraft:item", "minecraft:xp_orb"] }
        );
        const hit = hits.find((h) => h.entity.typeId.startsWith("clingy_cats:") && h.entity !== player);
        if (!hit) return;
        const catSounds = ["mob.cat.meow", "mob.cat.purreow"];
        const sound = catSounds[Math.floor(Math.random() * catSounds.length)];
        player.dimension.playSound(sound, player.location, { volume: 1, pitch: 1.8 });
        showCatForm(player, hit.entity);
        reduceDurability(player);
      }
    });
  });
}
function statBar(val, max, len = 10) {
  const filled = Math.round(val / max * len);
  return "\xA72" + "\u2588".repeat(filled) + "\xA78" + "\u2591".repeat(len - filled) + `\xA77 ${val}\xA78/${max}`;
}
function showCatForm(player, cat) {
  const breed = cat.typeId.replace("clingy_cats:", "").replace(/_/g, " ");
  const isBaby = cat.hasComponent("minecraft:is_baby");
  const isTamed = cat.hasComponent("minecraft:is_tamed");
  const isImmortal = cat.getProperty("clingy_cats:immortal");
  const p = (key) => String(cat.getProperty(`clingy_cats:${key}`) ?? "?").replace(/_/g, " ");
  const pi = (key) => cat.getProperty(`clingy_cats:${key}`) ?? 0;
  const stageTag = isBaby ? "\xA7b\u2605 Baby" : "\xA7a\u2605 Adult";
  const tameTag = isTamed ? "\xA7d\u2665 Tamed" : "\xA77  Wild";
  const immortalLine = isImmortal ? `
\xA78-=-=-=-=-=-\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\xA7r
\xA7c\xA7l  \u2726 IMMORTAL  \xA7r\xA77  protected by totem` : "";
  const body = [
    `\xA7e\xA7l${breed.toUpperCase()}\xA7r`,
    `\xA78  ${stageTag}\xA78  |  ${tameTag}`,
    `\xA78- - - - - - - - - - - - - - -`,
    `\xA76\xA7lIDENTITY`,
    `\xA77  Personality  \xA7d${p("personality")}`,
    `\xA77  Trait        \xA7b${p("behavior_trait")}`,
    `\xA77  Fav. Food    \xA7e${p("favorite_food")}`,
    `\xA77  Fav. Block   \xA73${p("favorite_block")}`,
    `\xA78- - - - - - - - - - - - - - -`,
    `\xA76\xA7lVITALS`,
    `\xA77  Size   \xA7f${p("size")}\xA77   State  \xA7f${p("state")}`,
    `\xA7d  Affection  ${statBar(pi("affection_level"), 1e3)}`,
    `\xA7a  Trust      ${statBar(pi("trust_level"), 1e3)}`,
    `\xA78- - - - - - - - - - - - - - -`,
    `\xA76\xA7lAPPEARANCE`,
    `\xA77  Eyes  \xA7f${p("eye_shape")} \xA78/ \xA7f${p("eye_color")}`,
    `\xA77  Coat  \xA7f${p("pattern")} \xA78+ \xA7f${p("color")} \xA78+ \xA7f${p("hairs")} hair`,
    `\xA77  Tail  \xA7f${p("tail")}  \xA77Snout  \xA7f${p("snout")}  \xA77Head  \xA7f${p("head")}`,
    immortalLine
  ].join("\n");
  new ActionFormData2().title("\xA76\xA7l[ Meownifier ]\xA7r").body(body).button("\xA77Close").show(player);
}
function reduceDurability(player) {
  if (player.getGameMode() === GameMode2.Creative) return;
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;
  const slot = equippable.getEquipmentSlot(EquipmentSlot2.Mainhand);
  const item = slot.getItem();
  if (!item) return;
  const dur = item.getComponent("minecraft:durability");
  if (!dur) return;
  const next = dur.damage + 1;
  if (next >= dur.maxDurability) {
    slot.setItem(void 0);
    player.dimension.playSound("random.break", player.location);
  } else {
    dur.damage = next;
    slot.setItem(item);
  }
}

// scripts/main.ts
registerItemComponents();
system6.run(() => {
  registerCatsEvents();
  registerDebugRaycast();
  registerBondLoop();
});

//# sourceMappingURL=../debug/main.js.map
