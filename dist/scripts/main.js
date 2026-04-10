// scripts/main.ts
import { world as world3, system as system2 } from "@minecraft/server";

// scripts/events/breedevent.ts
import { world as world2, system } from "@minecraft/server";

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
var TEST_TEXTURES = Object.fromEntries(
  Object.entries(BREED_OFFSETS).flatMap(
    ([breedId, offset]) => Object.entries(BREED_TEXTURES[breedId]).map(([localIdx, data]) => [
      offset + Number(localIdx),
      data
    ])
  )
);
BREED_TEXTURES["clingy_cats:test"] = TEST_TEXTURES;

// scripts/logics/breed.ts
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
var pregnancyMap = /* @__PURE__ */ new Map();
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
function handleConception(mother) {
  const fatherEntity = findFather(mother);
  const record = {
    mother: captureGenes(mother),
    father: fatherEntity ? captureGenes(fatherEntity) : void 0
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
  const { mother: momGenes, father: dadGenes } = record ?? { mother: captureGenes(mother), father: void 0 };
  const babyBreed = determineBabyBreed(momGenes, dadGenes);
  const baby = mother.dimension.spawnEntity(babyBreed, mother.location);
  baby.addTag("clingy_cats:not_wild_spawn");
  baby.triggerEvent("clingy_cats:born");
  const parentA = mother;
  const parentBEntity = dadGenes ? mother.dimension.getEntities({ location: mother.location, maxDistance: 12, families: ["cat"] }).find((e) => e.id !== mother.id && e.id !== baby.id && !e.hasComponent("minecraft:is_baby")) : void 0;
  handleInheritedSpawn(baby, parentA, parentBEntity);
}
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
function inheritTrait(traitA, traitB, inheritRate, validValues) {
  const source = Math.random() < 0.5 ? traitA : traitB;
  return Math.random() < inheritRate ? source : randomFrom(validValues);
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
function logCatProperties(cat) {
  const props = [
    "clingy_cats:sub_variant",
    "clingy_cats:pattern",
    "clingy_cats:color",
    "clingy_cats:hairs",
    "clingy_cats:tail",
    "clingy_cats:snout",
    "clingy_cats:head",
    "clingy_cats:eye_shape",
    "clingy_cats:eye_color",
    "clingy_cats:eye_index",
    "clingy_cats:whiskers",
    "clingy_cats:whisker_index",
    "clingy_cats:behavior_trait",
    "clingy_cats:personality",
    "clingy_cats:state",
    "clingy_cats:emotion",
    "clingy_cats:sound_variant",
    "clingy_cats:favorite_food",
    "clingy_cats:favorite_block",
    "clingy_cats:affection_level",
    "clingy_cats:trust_level"
  ];
  world.sendMessage(`\xA7e=== ${cat.typeId} (${cat.id}) ===`);
  for (const key of props) {
    world.sendMessage(`\xA77${key.replace("clingy_cats:", "")}: \xA7f${cat.getProperty(key)}`);
  }
}
function assignRandomAppearance(cat) {
  const catalog = BREED_TEXTURES[cat.typeId];
  const maxIdx = Object.keys(catalog).length - 1;
  const idx = Math.floor(Math.random() * (maxIdx + 1));
  applyTextureData(cat, idx, catalog[idx]);
}
function assignInheritedAppearance(baby, parentA, parentB) {
  const catalog = BREED_TEXTURES[baby.typeId];
  const traitsA = getParentTraits(parentA);
  const traitsB = parentB ? getParentTraits(parentB) : traitsA;
  const targetPattern = inheritTrait(traitsA.pattern, traitsB.pattern, 0.85, uniqueValues(catalog, "pattern"));
  const targetColor = inheritTrait(traitsA.color, traitsB.color, 0.85, uniqueValues(catalog, "color"));
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
function assignInheritedEyesAndWhiskers(baby, parentA, parentB) {
  const sourceEyeColor = parentB && Math.random() < 0.5 ? parentB : parentA;
  const inheritedColor = sourceEyeColor.getProperty("clingy_cats:eye_color");
  const colorRoll = Math.random();
  let finalColor;
  if (colorRoll < 0.9) finalColor = inheritedColor;
  else if (colorRoll < 0.99) finalColor = randomFrom(EYE_COLORS.filter((c) => !c.startsWith("heterochromia")));
  else finalColor = randomFrom(["heterochromia1", "heterochromia2", "heterochromia3"]);
  const sourceEyeShape = parentB && Math.random() < 0.5 ? parentB : parentA;
  const inheritedShapeIdx = EYE_SHAPES.indexOf(sourceEyeShape.getProperty("clingy_cats:eye_shape"));
  const shapeDrift = Math.random() < 0.85 ? Math.max(0, Math.min(EYE_SHAPES.length - 1, inheritedShapeIdx + Math.floor(Math.random() * 3) - 1)) : Math.floor(Math.random() * EYE_SHAPES.length);
  const idx = shapeDrift * EYE_COLORS.length + EYE_COLORS.indexOf(finalColor);
  const eyedata = { shape: EYE_SHAPES[shapeDrift], color: finalColor };
  applyEyesData(baby, idx, eyedata);
  const sourceWhiskers = parentB && Math.random() < 0.5 ? parentB : parentA;
  const inheritedWhiskerIdx = WHISKERS.indexOf(sourceWhiskers.getProperty("clingy_cats:whiskers"));
  const whiskerDrift = Math.random() < 0.9 ? Math.max(0, Math.min(WHISKERS.length - 1, inheritedWhiskerIdx + Math.floor(Math.random() * 3) - 1)) : Math.floor(Math.random() * WHISKERS.length);
  applyWhiskerData(baby, whiskerDrift, { length: WHISKERS[whiskerDrift] });
}
function handleSpawnTestCats(cat) {
  const breedIds = Object.keys(BREED_OFFSETS);
  const chosenBreed = randomFrom(breedIds);
  const catalog = BREED_TEXTURES[chosenBreed];
  const localIdx = Number(randomFrom(Object.keys(catalog)));
  const flatIdx = BREED_OFFSETS[chosenBreed] + localIdx;
  applyTextureData(cat, flatIdx, catalog[localIdx]);
  assignRandomEyesAndWhiskers(cat);
  logCatProperties(cat);
}
function handleWildSpawn(cat) {
  assignRandomAppearance(cat);
  assignRandomEyesAndWhiskers(cat);
  logCatProperties(cat);
}
function handleInheritedSpawn(baby, parentA, parentB) {
  assignInheritedAppearance(baby, parentA, parentB);
  assignInheritedEyesAndWhiskers(baby, parentA, parentB);
  logCatProperties(baby);
}

// scripts/events/breedevent.ts
function registerCatSpawnSubscriber() {
  system.afterEvents.scriptEventReceive.subscribe((ev) => {
    const { id, message, sourceEntity } = ev;
    world2.sendMessage(`\xA7b[ClingyCats] event received: ${id}`);
    if (!sourceEntity || !sourceEntity.isValid) return;
    if (id === "clingycats:catspawn") {
      system.runTimeout(() => {
        if (sourceEntity.hasTag("clingy_cats:not_wild_spawn")) {
          sourceEntity.removeTag("clingy_cats:not_wild_spawn");
          world2.sendMessage(`\xA7a[ClingyCats] Non-wild spawn event received on: ${sourceEntity.typeId}`);
          return;
        }
        if (sourceEntity.typeId === "clingy_cats:test") {
          handleSpawnTestCats(sourceEntity);
          world2.sendMessage(`\xA7d[ClingyCats] catspawn on: ${sourceEntity.typeId}`);
          return;
        }
        handleWildSpawn(sourceEntity);
      }, 1);
      return;
    }
    if (id === "clingycats:conception") {
      handleConception(sourceEntity);
      world2.sendMessage(`\xA7e[ClingyCats] conception event received from: ${sourceEntity.typeId}`);
      return;
    }
    if (id === "clingycats:givebirth") {
      handleGiveBirth(sourceEntity);
      world2.sendMessage(`\xA7c[ClingyCats] give birth event received from: ${sourceEntity.typeId}`);
      return;
    }
  });
  world2.sendMessage("\xA7a[ClingyCats] subscriber registered");
}

// scripts/main.ts
system2.run(() => {
  registerCatSpawnSubscriber();
  world3.sendMessage("ClingyCats script loaded!");
});

//# sourceMappingURL=../debug/main.js.map
