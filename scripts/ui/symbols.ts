// Text symbols and formatting helpers for the Clingy Cats forms.
//
// Everything here is plain BMP Unicode covered by Minecraft's default font —
// NOT Private Use Area glyphs, and NOT dependent on a custom RP/font/ sheet.
//
// We know these render: the old block-character stat bars (█ U+2588, ░ U+2591)
// and the ★ ♥ ✦ in the old inspect form were all BMP and all showed up fine.
// That also means these survive a future move to Ore UI, which cannot render
// custom PUA glyphs. If we ever add a custom glyph atlas, it goes in a separate
// module behind a kill switch — this file stays as the safe fallback.
//
// Literal characters rather than \u escapes, matching what inspect.ts and
// guideBook.ts already ship successfully through the esbuild bundle.

const STAR_FULL  = "★"; // U+2605
const STAR_EMPTY = "☆"; // U+2606

export const SYM = {
    heart: "♥", // U+2665
    star:  STAR_FULL,
    spark: "✦", // U+2726
    dot:   "·", // U+00B7 — separator, reads lighter than "|"
} as const;

/**
 * Replaces the old block-character meter.
 *   OLD:  §2████████░░§7 850§8/1000
 *   NEW:  ★★★★☆
 *
 * Five pips rather than ten blocks: at form width, five reads as a rating and
 * ten reads as a loading bar. Numbers are formatted separately by the caller so
 * the pips can be tinted independently.
 */
export function starBar(val: number, max: number, pips = 5): string {
    if (max <= 0) return STAR_EMPTY.repeat(pips);
    const clamped = Math.max(0, Math.min(val, max));
    const filled = Math.round((clamped / max) * pips);
    return STAR_FULL.repeat(filled) + STAR_EMPTY.repeat(pips - filled);
}

/** "short_white" -> "Short white" */
export function pretty(s: string): string {
    const t = s.replace(/_/g, " ");
    return t.charAt(0).toUpperCase() + t.slice(1);
}
