# External reference — trionn.com (color/tone read)

**Captured:** 2026-08-02
**Source:** https://trionn.com/ ("TRIONN — AI-Powered Creative Design & Development Studio")
**Why this is here:** an outside tone/palette reference pulled while intertwin's own design system is still being built — this is NOT intertwin's palette or a proposal for intertwin's colors. It's a comparison point / mood reference for the design partner, captured because the captain liked its visual language.

Colors below were extracted directly from the site's stylesheets (ranked by usage frequency across ~380 CSS rules) and cross-checked against a visual capture, not eyeballed from a screenshot — the site's hero section sits behind a heavy loading animation, so this is more reliable than a casual look.

## Color palette

**Base — near-monochrome, high-contrast**

| Role | Hex | Notes |
|---|---|---|
| Primary background | `#040508` | near-black, dominant surface site-wide |
| Deep panel blacks | `#000`, `#0c0c0c`, `#131415`, `#171717` | layered blacks for depth, not one flat black |
| Cool dark surfaces | `#24262e`, `#2f323b`, `#2f3135` | slate-blue-tinted dark gray — secondary panels/cards distinct from pure black |
| Hero panel gray | `#c3c3c3` / `#c8c8c8` | the one light "break" section — a flat warm-light-gray full-viewport panel, sharp-edged against the black sections around it |
| Light neutrals / text-on-dark | `#fff`, `#d8d8d8`, `#d2d2d2`, `#d9d9d9`, `#e6e4e2`, `#e8e8e8`, `#f7f7f7` | a full grayscale ramp for text and UI, not just pure white |

**Single accent — hot red-orange**

| Hex | Notes |
|---|---|
| `#ff4b2f`, `#ff501e`, `#ff6b50`, `rgba(220,10,0,…)` | one saturated color in the entire system, used sparingly against roughly 90 other neutral values — reads as a warning-light / targeting-reticle signal color, not a general brand color |

Of roughly 94 distinct colors found in the site's stylesheets, all but about five are grayscale. This is a deliberately achromatic system with exactly one accent held in reserve for emphasis.

## Typography

- **Neue Haas Grotesk** — clean, neutral grotesque sans; likely the body/UI workhorse.
- **PP Editorial** — a serif display face, probably reserved for large headline moments — the "editorial" counterweight to the grotesque.
- **Martian Mono** — a monospace, used for the HUD/technical furniture (the site's own loading screen has fields like "detected," "hint," "scan-id").
- **Familjen Grotesk** — a second grotesque, likely for secondary UI text.

## Tone

Reads as a "black-box sci-fi HUD" aesthetic — the loading screen itself literalizes it (a grayscale "target-scan" panel with monospace telemetry labels). Overall impression: technical, confident, minimal, slightly aggressive — closer to a targeting system or lab instrument than a soft/friendly SaaS product. Near-total desaturation reads as serious/premium; the single red-orange accent is held back for moments that need real urgency or focus, not decoration. The serif/mono/grotesque type mix signals "design studio with engineering credibility" — editorial polish paired with technical readouts.
