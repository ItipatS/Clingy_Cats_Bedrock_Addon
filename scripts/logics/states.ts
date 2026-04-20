import { Entity, world, system } from "@minecraft/server";

export type BehaviorTrait =  "lazy" | "active" | "curious" | "shy" | "friendly" | "independent";

export type Personality = "affectionate" | "aloof" | "playful" | "calm" | "anxious" | "confident";

export type FavoriteBlock = "bed" | "soft" | "warm" | "high" | "owner" | "sun";

export const TOD_BEHAVIOR: Record<BehaviorTrait, { day: string; night: string }> = {
    lazy:        { day: "lazy_day",        night: "lazy_night" },
    active:      { day: "active_day",      night: "active_night" },
    curious:     { day: "curious_day",     night: "curious_night" },
    shy:         { day: "shy_day",         night: "shy_night" },
    friendly:    { day: "friendly_day",    night: "friendly_night" },
    independent: { day: "independent_day", night: "independent_night" }
};

export function restoreIdentity(cat:Entity): void {
    if (!cat.isValid) return;

    const trait = cat.getProperty("clingy_cats:behavior_trait") as BehaviorTrait;
    const personality = cat.getProperty("clingy_cats:personality") as Personality;
    const block = cat.getProperty("clingy_cats:favorite_block") as FavoriteBlock;

    if (!trait || !personality || !block) return;
    
    cat.triggerEvent("clingy_cats:on_idle");
    cat.triggerEvent(`clingy_cats:set_personality_${personality}`);
    cat.triggerEvent(`clingy_cats:set_trait_${trait}`);
    cat.triggerEvent(`clingy_cats:set_block_${block}`);
}

function isItDaytime(): boolean {
    const time = world.getDay() % 1; // or however you're reading ticks
    return time >= 0 && time < 0.5; // 0-12000 ticks = day
}

function handleTimeOfDay(cat: Entity): void {
        if (!cat.isValid) return;
        const trait = cat.getProperty("clingy_cats:behavior_trait") as BehaviorTrait;
        const isDay = isItDaytime();
        const key = TOD_BEHAVIOR[trait][isDay ? "day" : "night"];
        cat.triggerEvent("clingy_cats:remove_tod");
        cat.triggerEvent(`clingy_cats:tod_${key}`);
}

function getAllCats(): Entity[] {
    const dims = ["overworld", "nether", "the_end"];
    return dims.flatMap(d => 
        world.getDimension(d).getEntities({ families: ["clingy_cats"] })
    );
}

/*system.runInterval(() => {
    for (const cat of getAllCats()) {
        handleTimeOfDay(cat);
    }
}, 200); // every 10 seconds*/