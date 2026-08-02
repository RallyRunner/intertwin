# intertwin — logo (mark 2E, "shared foot")

Two lowercase serif **i**s standing on one continuous foot serif: twinned, not doubled. The right dot is **iris** — the synthesized twin of a real shopper, and the same colour the product already uses for "this moved in the last re-run".

Drawn on a 64×64 grid. No new colours: bone `#f6f2ec` (`--bone-100`) and iris `#a97bff` (`--iris-500`). The verdict triad is never used in the mark.

## Files

| File | Use |
|---|---|
| `mark-primary.svg` | Default on any dark surface — app top bar, marketing nav, social avatar. |
| `mark-mono-light.svg` | Where iris would compete (dense data views); dot drops to `--lilac-300`. |
| `mark-mono-dark.svg` | On the light break band and on white/print. |
| `mark-currentcolor.svg` | Inline in code — inherits text colour. Loses the iris dot by design. |
| `favicon-mark.svg` / `favicon-mark-dark.svg` | 16–32px only. Thicker stems, flat foot, larger dots — the bracketed serif fills in below ~24px. |
| `lockup-horizontal.svg` | Mark + wordmark, dark backgrounds. |
| `lockup-horizontal-on-break.svg` | Same, for `--surface-break`. |

The lockup SVGs set the wordmark as live `<text>` in **Instrument Serif** — fine in the app (the font is already loaded via `tokens/fonts.css`). For anything that leaves the browser (email, PDF, a partner's deck), convert the text to outlines first.

## Geometry (64×64 viewBox)

- Stems: `x 18.9–25.1` and `38.9–45.1`, `y 26 → 52.8` (6.2 wide, 20px apart on centres).
- Foot serif: one path, `y 51.6 → 57`, `x 14.6 → 49.4`, with a bracket curve at each of the four stem junctions.
- Dots: `r 4.1` at `(22, 16.6)` and `(42, 16.6)`. The gap between dot and stem is 5.3 — do not close it.
- Optical centre sits at `y ≈ 36`; centre the mark on the *ink*, not the viewBox, when it sits beside type.

## Sizing and clear space

- App top bar: **20px**. Marketing nav: **24px**. Hero / thumbnail: 96px+.
- Minimum: **16px**, and only with the favicon variant.
- Clear space on all sides = the dot diameter at the rendered size (0.128 × mark height).
- In a lockup the wordmark cap height ≈ 0.62 × mark height, set in Instrument Serif at `-0.02em`, gap = 0.4 × mark height.

## Lockup

Always `intertwin`, lowercase, Instrument Serif, sentence-case never title-case. Mark left, wordmark right, baselines aligned on the foot serif. There is no stacked lockup yet — ask before making one.

## Don't

- Don't recolour the dot to teal, gold or coral. Those three mean *would buy / on the fence / would not buy* and nothing else.
- Don't put the mark on a gradient, a photo, or a coloured fill. Bone-on-near-black, or near-black-on-break.
- Don't add a container tile, ring, shadow or glow. The one exception is the app icon: a bone `10px`-radius tile with the `mark-mono-dark` inside.
- Don't animate the dot, and don't let it pulse — the pulse is reserved for `LiveDot`.
- Don't stretch, outline, italicise, or re-space the stems.

## Drop-in for the prototype

```jsx
export function Logo({ size = 20, dot = "#a97bff", ink = "#f6f2ec" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="intertwin">
      <g fill={ink}>
        <path d="M18.9 26H25.1v26.8h-6.2z"/>
        <path d="M38.9 26h6.2v26.8h-6.2z"/>
        <path d="M14.6 54.9c2.9-.2 4.3-1.3 4.3-3.3h6.2c0 2 1.4 3.1 4.3 3.3h5.2c2.9-.2 4.3-1.3 4.3-3.3h6.2c0 2 1.4 3.1 4.3 3.3V57H14.6z"/>
      </g>
      <circle cx="22" cy="16.6" r="4.1" fill={ink} />
      <circle cx="42" cy="16.6" r="4.1" fill={dot} />
    </svg>
  );
}
```

Top bar usage:

```jsx
<div style={{ display: "flex", alignItems: "center", gap: 9 }}>
  <Logo size={20} />
  <span style={{ font: "400 20px/1 var(--font-display)" }}>intertwin</span>
</div>
```

Favicon: `<link rel="icon" href="/intertwin-logo/favicon-mark.svg">` (add `favicon-mark-dark.svg` behind `prefers-color-scheme: light` if the browser chrome is light).
