// scripts/main.ts
import { system as system5 } from "@minecraft/server";

// scripts/events/eventRegister.ts
import { system as system2 } from "@minecraft/server";

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
var FAVORITE_TAME_CHANCE = 0.45;
var NORMAL_TAME_CHANCE = 0.2;
function handleGiveItem(cat) {
  if (!cat.isValid) return;
  const equipment = cat.getProperty("clingy_cats:equipment");
  const favoriteFood = cat.getProperty("clingy_cats:favorite_food");
  const mappedEquip = equipment;
  const isFavorite = mappedEquip === favoriteFood;
  const chance = isFavorite ? FAVORITE_TAME_CHANCE : NORMAL_TAME_CHANCE;
  const success = Math.random() < chance;
  cat.setProperty("clingy_cats:equipment", "none");
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
  if (!tameable?.isTamed) {
    behaviorTick(cat, "temp_follow_close");
  }
  if (!success) return;
  const player = cat.dimension.getPlayers({ location: cat.location, maxDistance: 10 }).sort((a, b) => distanceSq(a, cat) - distanceSq(b, cat))[0];
  if (!player) return;
  tameable?.tame(player);
  cat.dimension.playSound("mob.cat.meow", cat.location, { volume: 1, pitch: 1.2 });
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
import { ItemStack, system, world as world3 } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
var GUIDE_TAG = "clingy_cats:welcomed";
function registerGuideBookEvents() {
  world3.afterEvents.playerSpawn.subscribe((ev) => {
    if (!ev.initialSpawn) return;
    const player = ev.player;
    if (player.hasTag(GUIDE_TAG)) return;
    player.addTag(GUIDE_TAG);
    system.runTimeout(() => {
      const inv = player.getComponent("minecraft:inventory");
      inv?.container?.addItem(new ItemStack("clingy_cats:guide_book", 1));
    }, 60);
  });
}
function showGuide(player) {
  new ActionFormData().title("\xA76\xA7l\u25C6 Clingy Cats \u2014 Field Notes \u25C6\xA7r").body(
    `\xA7fNotes on finding, befriending, and
\xA7fliving with Clingy Cats.

\xA77Pick a topic to read.`
  ).button("\xA7eTaming Cats").button("\xA7dPersonalities").button("\xA7bTraits").button("\xA7aBreeds").button("\xA76Breeding & Genetics").button("\xA73The Meownifier").button("\xA78Secrets...").button("\xA77Close").show(player).then((res) => {
    if (res.canceled || res.selection === 7) return;
    const pages = [pageTaming, pagePersonalities, pageTraits, pageBreeds, pageBreeding, pageMeownifier, pageSecrets];
    pages[res.selection]?.(player);
  });
}
function subPage(player, title, body) {
  new ActionFormData().title(title).body(body).button("\xA77< Back").button("\xA78Close").show(player).then((res) => {
    if (!res.canceled && res.selection === 0) showGuide(player);
  });
}
function pageTaming(player) {
  subPage(player, "\xA7e\xA7lTaming Cats\xA7r", [
    `\xA7fThese cats aren't village strays. They're`,
    `\xA7fwild, rarer, and they won't just walk up`,
    `\xA7fto you. Each breed has its own biome \u2014`,
    `\xA7fsee \xA7aBreeds\xA7f for where to look.`,
    ``,
    `\xA77How to tame\xA7r`,
    `\xA7fCrouch, hold food, and right-click to offer.`,
    `\xA7fEvery cat has a \xA7efavorite food\xA7f \u2014 offer`,
    `\xA7fthat and you get a \xA7a45%\xA7f chance per try.`,
    `\xA7fOther foods still work, just at \xA7a20%.\xA7f`,
    `\xA7fIt might take a few attempts. That's normal.`,
    ``,
    `\xA77Foods they'll accept\xA7r`,
    `\xA7fcod \xB7 salmon \xB7 tropical fish \xB7 rabbit`,
    `\xA7fchicken \xB7 beef \xB7 porkchop`,
    `\xA7fcarrot \xB7 spider eye`,
    ``,
    `\xA77Tips\xA7r`,
    `\xA7fSome personalities flee from non-sneaking`,
    `\xA7fplayers \u2014 always crouch when approaching`,
    `\xA7fa wild cat just to be safe.`,
    `\xA7fUse the \xA73Meownifier\xA7f to check a cat's`,
    `\xA7ffavorite food before burning your supplies.`
  ].join("\n"));
}
function pagePersonalities(player) {
  subPage(player, "\xA7d\xA7lPersonalities\xA7r", [
    `\xA7fPersonality is set at birth and affects`,
    `\xA7fhow a cat behaves \u2014 not taming odds.`,
    ``,
    `\xA7d\xA7lAffectionate\xA7r`,
    `\xA7fWatches you a lot. Seeks you out at`,
    `\xA7fbedtime to sleep nearby. Very attached.`,
    ``,
    `\xA7d\xA7lAloof\xA7r`,
    `\xA7fRarely looks your way. Sits with its`,
    `\xA7fback to you sometimes. It's just how`,
    `\xA7fthey are \u2014 don't take it personally.`,
    ``,
    `\xA7d\xA7lPlayful\xA7r`,
    `\xA7fAlways paying attention. Approaches`,
    `\xA7fplayers often just to look at them.`,
    ``,
    `\xA7d\xA7lCalm\xA7r`,
    `\xA7fHardly panics. Only lava and lightning`,
    `\xA7freally bother it. Easy to be around.`,
    ``,
    `\xA7d\xA7lAnxious\xA7r`,
    `\xA7fFlees anyone who isn't sneaking, isn't`,
    `\xA7fthe owner, and isn't another cat.`,
    `\xA7fAlways sneak when approaching these.`,
    ``,
    `\xA7d\xA7lConfident\xA7r`,
    `\xA7fDoesn't flee from anything. Will stare`,
    `\xA7fat you from across the room. Bold cat.`
  ].join("\n"));
}
function pageTraits(player) {
  subPage(player, "\xA7b\xA7lBehavior Traits\xA7r", [
    `\xA7fTraits govern day-to-day habits \u2014`,
    `\xA7fdifferent from personality.`,
    ``,
    `\xA7b\xA7lLazy\xA7r`,
    `\xA7fSits a lot, roams rarely. Long gaps`,
    `\xA7fbetween activity. Great homebody.`,
    ``,
    `\xA7b\xA7lActive\xA7r`,
    `\xA7fRoams far, hunts often. Needs space`,
    `\xA7fand something to do.`,
    ``,
    `\xA7b\xA7lCurious\xA7r`,
    `\xA7fApproaches players and mobs to`,
    `\xA7finvestigate. Gets into things.`,
    ``,
    `\xA7b\xA7lShy\xA7r`,
    `\xA7fBig personal-space bubble, flees fast.`,
    `\xA7fAlways crouch when getting close.`,
    ``,
    `\xA7b\xA7lFriendly\xA7r`,
    `\xA7fRelaxed around players. Small flee`,
    `\xA7fradius. Usually easy to approach.`,
    ``,
    `\xA7b\xA7lIndependent\xA7r`,
    `\xA7fFollows when tamed, but loosely.`,
    `\xA7fDoes its own thing. Respect that.`
  ].join("\n"));
}
function pageBreeds(player) {
  subPage(player, "\xA7a\xA7lBreeds\xA7r", [
    `\xA7fTwelve breeds, each with its own home`,
    `\xA7fbiome. Coat colors shift by region too \u2014`,
    `\xA7fthe same breed can look quite different`,
    `\xA7fdepending on where you find it.`,
    ``,
    `\xA7a\xA7lTabby\xA7r \xA77\xB7 Plains \xB7 Forest \xB7 Village`,
    `\xA7fClassic tabby orange, hair and tail vary.`,
    `\xA7fMost common breed.`,
    ``,
    `\xA7a\xA7lBlack\xA7r \xA77\xB7 Plains \xB7 Forest \xB7 Taiga \xB7 Village`,
    `\xA7fTuxedo and bicolor patterns.`,
    ``,
    `\xA7a\xA7lSiamese\xA7r \xA77\xB7 Village \xB7 Desert \xB7 Savanna`,
    `\xA7fAlways pointed cream. Very recognizable.`,
    ``,
    `\xA7a\xA7lRed\xA7r \xA77\xB7 Savanna \xB7 Badlands \xB7 Desert`,
    `\xA7fTabby orange, lots of texture variety.`,
    ``,
    `\xA7a\xA7lBritish\xA7r \xA77\xB7 Taiga \xB7 Cold biomes`,
    `\xA7fStocky, round head. Tends toward big.`,
    ``,
    `\xA7a\xA7lAll Black\xA7r \xA77\xB7 Dark Oak Forest \xB7 Swamp`,
    `\xA7fSolid coat, bobtail common.`,
    ``,
    `\xA7a\xA7lCalico\xA7r \xA77\xB7 Cherry Grove \xB7 Sunflower Plains \xB7 Meadow`,
    `\xA7fEvery one looks different. Rare.`,
    ``,
    `\xA7a\xA7lRagdoll\xA7r \xA77\xB7 Mountain Peaks`,
    `\xA7fLargest breed. Fluffy, pointed coat.`,
    `\xA7fFound on snowy slopes and high ridges.`,
    ``,
    `\xA7a\xA7lPersian\xA7r \xA77\xB7 Mountain Peaks`,
    `\xA7fFlat face, round head. Prefers altitude.`,
    `\xA7fFound on snowy slopes and frozen peaks.`,
    ``,
    `\xA7a\xA7lWhite\xA7r \xA77\xB7 Snowy \xB7 Pale Garden \xA78(rare, spawns alone)`,
    `\xA7fSphinx pattern, no hair. Unusual look.`,
    ``,
    `\xA7a\xA7lJellie\xA7r \xA77\xB7 Swamp \xB7 Mushroom Island \xA78(rare)`,
    `\xA7fSpecial patterned textures. Worth finding.`,
    ``,
    `\xA7a\xA7lOcelot\xA7r \xA77\xB7 Jungle only \xA78(rare)`,
    `\xA7fSmallest breed. Only one texture. Elusive.`
  ].join("\n"));
}
function pageBreeding(player) {
  subPage(player, "\xA76\xA7lBreeding & Genetics\xA7r", [
    `\xA7fTwo tamed cats fed their favorite food`,
    `\xA7fnear each other will have a kitten.`,
    `\xA7fBreed doesn't need to match.`,
    ``,
    `\xA77Baby breed\xA7r`,
    `\xA7a45%\xA7f mother's breed`,
    `\xA7a45%\xA7f father's breed`,
    `\xA7a10%\xA7f neither \u2014 a \xA7emutation\xA7f breed`,
    ``,
    `\xA77Inherited traits\xA7r`,
    `\xA7fKittens take after both parents with`,
    `\xA7fa little drift. Not identical copies.`,
    ``,
    `\xA76Pattern & Color   \xA7a85% \xA77inherit`,
    `\xA76Tail \xB7 Snout \xB7 Head   \xA7a95% \xA77inherit`,
    `\xA76Eye Color   \xA7a90% \xA77inherit`,
    `\xA76Eye Shape   \xA7a85% \xA77inherit \xB11 step`,
    `\xA76Size   \xA7a85% \xA77inherit \xB11 tier`,
    ``,
    `\xA7fAlso a \xA7a1%\xA7f chance of \xA7bheterochromia\xA7f \u2014`,
    `\xA7fone eye a different color. Very rare.`,
    ``,
    `\xA77Growth\xA7r`,
    `\xA7fKittens grow into their size tier over time.`,
    `\xA7fA huge cat starts small and fills out slowly.`
  ].join("\n"));
}
function pageMeownifier(player) {
  subPage(player, "\xA73\xA7lThe Meownifier\xA7r", [
    `\xA7fA tool for reading everything about a cat`,
    `\xA7fthat you can't see with the naked eye.`,
    `\xA7fAim at any cat within \xA7e20 blocks\xA7f and use it.`,
    `\xA7fWon't disturb them.`,
    ``,
    `\xA77Crafting\xA7r`,
    `\xA7f  \xA77. \xA7eG \xA77.`,
    `\xA7f  \xA7eG \xA7cE \xA7eG     \xA7eG\xA7f = Gold Ingot`,
    `\xA7f  \xA77. \xA7bA \xA77.     \xA7cE\xA7f = Eye of Ender`,
    `\xA7f               \xA7bA\xA7f = Amethyst Shard`,
    ``,
    `\xA77What it shows\xA7r`,
    `\xA7fBreed \xB7 Life stage \xB7 Tame status`,
    `\xA7fPersonality \xB7 Trait \xB7 Favorite food`,
    `\xA7fFavorite block \xB7 Size \xB7 Current state`,
    `\xA7fAffection & trust levels`,
    `\xA7fEyes \xB7 Coat \xB7 Tail \xB7 Snout \xB7 Head`,
    ``,
    `\xA77Durability\xA7r`,
    `\xA7f64 uses. Repair with \xA7bamethyst\xA7f or \xA7egold\xA7f`,
    `\xA7fon an anvil. Enchant with \xA7aMending\xA7f`,
    `\xA7fto make it last forever.`
  ].join("\n"));
}
function pageSecrets(player) {
  subPage(player, "\xA78\xA7l... Secrets ...\xA7r", [
    `\xA78Some things are not written in any guide.`,
    ``,
    `\xA78Watch the sky. The moon keeps old promises.`,
    `\xA78Pale coats and mismatched eyes walk at night`,
    `\xA78when the world is brightest dark.`,
    ``,
    `\xA78A cat that has witnessed death`,
    `\xA78and carries a golden ward\xA78...`,
    `\xA78may never witness it again.`,
    ``,
    `\xA78The Meownifier reveals what the eye cannot see.`,
    `\xA78Look closely at the numbers.`,
    ``,
    `\xA78\xA7o\u2014 that is all that will be said here.`
  ].join("\n"));
}

// scripts/events/eventRegister.ts
function registerCatsEvents() {
  registerGuideBookEvents();
  system2.afterEvents.scriptEventReceive.subscribe((ev) => {
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
  });
}

// scripts/debug/catdebug.ts
import { world as world5, system as system3, EquipmentSlot, GameMode, EntityComponentTypes } from "@minecraft/server";
var DEBUG = false;
function registerDebugRaycast() {
  if (!DEBUG) return;
  system3.runInterval(() => {
    for (const player of world5.getAllPlayers()) {
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
import { EquipmentSlot as EquipmentSlot2, GameMode as GameMode2, system as system4 } from "@minecraft/server";
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";
function registerItemComponents() {
  system4.beforeEvents.startup.subscribe((ev) => {
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
system5.run(() => {
  registerCatsEvents();
  registerDebugRaycast();
});

//# sourceMappingURL=../debug/main.js.map
