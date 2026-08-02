# intertwin — Design System

A design system for **intertwin**, a research tool for beauty brands. You describe a skincare product — formulation, claims, evidence, price, size, channel — and a panel of AI personas, each grounded in a realistic beauty-shopper archetype, reacts to it. Every persona returns a purchase-intent verdict (*would buy* / *on the fence* / *would not buy*) plus a rationale in their own voice. Move a lever — drop the price, pull the fragrance, upgrade a consumer test to a clinical claim — and the panel re-reacts live.

The core loop: **describe a product → a grounded panel reacts → move a lever and watch the panel move → walk away with a directional read and a concrete list of objections to fix.**

The audience is a beauty marketer, indie founder or agency researcher about to commit five figures and several weeks to a real qualitative panel. intertwin is what they run first.

## Sources this system was built from

Everything here derives from a mounted read-only codebase, `intertwin/`, containing exactly two files:

- `intertwin/docs/design-brief.md` — product & design brief, captain-approved v1 scope, dated 2026-08-01. Source for scope, screens, design themes, and the palette table.
- `intertwin/docs/mockup-panel-dashboard.html` — a self-contained interactive mockup of the results dashboard (screen C) built by a prior scout. Source for every exact numeric value in this system (paddings, radii, 12.5px/13.5px type sizes, the 500ms verdict transition, the persona colour set).
- `intertwin/docs/reference-trionn.md` — captured 2026-08-02. A colour/tone read of **https://trionn.com/**, extracted from that site's stylesheets. The file states plainly that it is *not* intertwin's palette and *not* a proposal — a mood reference only. It is treated as such here; see *What was taken from the trionn reference*.

### What was taken from the trionn reference

| Adopted | Deliberately not adopted |
|---|---|
| **Near-total desaturation.** The ink ramp was pulled off the mockup's plum (`#141019`) to a layered near-black (`#0a0a0e`) with only a faint cool cast. Chroma is a signal, not an atmosphere. | **The red-orange accent** (`#ff4b2f`). It would sit inches from coral `#ff6f8e`, which means *would not buy*. A second hot warm accent would wreck the verdict grammar. |
| **Layered blacks, not one flat black.** Depth comes from the surface steps and hairline, never from shadow. | **A single-accent system.** intertwin needs three semantic colours plus a brand accent; achromatic-with-one-accent is not available to it. |
| **A grayscale text ramp** rather than pure white — `#f2f1f4` / `#c9c8d0` / `#9a99a6`. | **The slate-blue surface cast** (`#24262e`). Kept a plum cast instead, faintly, as the one tie back to the brief's stated "near-black plum". |
| **The light break band.** trionn's flat `#c3c3c3` full-viewport panel, sharp-edged against the black around it, became `--surface-break` + `--text-on-break` and appears exactly once on the landing page. | **The HUD/targeting tone.** intertwin's buyer is a beauty marketer, not an operator; "lab instrument" is right, "weapons system" is not. |
| **The serif-display / grotesque / mono triad**, and **Martian Mono** specifically — it is freely licensed, so it is used verbatim rather than substituted. | **PP Editorial / Neue Haas Grotesk** — both licensed. Structurally mirrored by Instrument Serif and Instrument Sans. |

No Figma file, no repository, no brand assets, no font binaries, and **no logo** were provided. See *Gaps & substitutions*.

A landing page was additionally requested, referencing **https://trionn.com/** for its smooth, editorial scroll feel. That reference informed motion, layout rhythm and the degree of desaturation — not the palette itself.

## Products

| Surface | Kit | Status |
|---|---|---|
| intertwin app (v1 loop: product input → panel selection → results dashboard → run comparison) | `ui_kits/app/` | Built |
| intertwin marketing site (landing page) | `ui_kits/marketing/` | Built |

---

## CONTENT FUNDAMENTALS

**Voice: a straight-talking research partner.** Confident about what the product does, unembarrassed about what it doesn't. The brief's own line is the north star: *"surfaces objections you'd otherwise pay a real panel to discover"* — never *"predicts your sales."*

**Person.** The interface speaks to *you* ("Describe the product", "Who's in the room?", "Move a lever and the panel re-reacts"). It never says *we* about the system's own reasoning, and never says *I*. Personas speak in the first person; the product never does.

**Casing.** Sentence case everywhere — headings, buttons, labels, chips. The only uppercase is the mono section eyebrow (`AGGREGATE PURCHASE INTENT — 6 PERSONAS`) at `--tracking-caps`. Never title case. The brand name **intertwin** is always lowercase, even at the start of a sentence.

**Length.** Interface copy is short and declarative; explanatory copy is one full sentence, not a fragment. Compare:
- Button: `Re-run panel` · `Choose the panel` · `Compare with first run`
- Helper: *"Panel: 6 of 11 personas shown (skincare · brightening-relevant). Adjust controls to see the panel re-react — no page reload."*

**Numbers are always qualified.** `4 of 6 on this panel would buy` — never a bare `67%` standing alone as a finding. Percentages carry the denominator or a "of this panel" frame. Never invent precision: no confidence intervals, no p-values, no error bars, no ±.

**Persona voice is distinct and unmistakable.** Each persona's quote reads like that individual and nobody else. Marisol does arithmetic (*"that's $1.27/mL"*). Devon cites chemistry (*"15% L-AA + ferulic is a solid stabilized combo"*). Priya states a rule (*"Auto-pass the second I see 'fragrance'"*). Tasha talks sensory and shelf appeal (*"This films well"*). Contractions, sentence fragments and mild slang are correct in persona voice; they are wrong in product voice.

**Honesty is copy, not fine print.** Every screen showing aggregate numbers carries an inline framing line in the flow of the layout, not a greyed footnote: *"A read on these 6 personas, not a market projection."* The word **synthesized** appears wherever persona speech is introduced.

**Never used:** emoji, exclamation marks, "revolutionary/AI-powered/game-changing", "insights" as a mass noun, "consumers" (say *shoppers*), "respondents" (they aren't), quotation framing that implies a real person said it.

**Delta copy is attributive.** Say *"dropping the price to $26 is what moved these two people."* Not *"results updated."*

---

## VISUAL FOUNDATIONS

### Palette
A near-neutral black world with a whisper of plum cast — the ground carries no chroma so the accents can. `#0a0a0e` page, stepping up through `#101016` panel → `#16161d` card → `#1e1e26` raised, separated by a `#2b2b35` hairline. Text is an off-white `#f2f1f4` over a muted `#9a99a6` secondary. This is a deliberate desaturation of the source mockup's plum (`#141019`/`#241c30`) toward the editorial near-black the brief's reference site uses: chroma is a signal here, not an atmosphere, so anything coloured on screen means something.

**The verdict triad is load-bearing and never remapped:** teal `#4ddbc0` = would buy, gold `#f4c869` = on the fence, coral `#ff6f8e` = would not buy. Dimmed variants back the badges and chips.

**Resolving the mockup's collision.** In the source mockup coral was simultaneously the primary CTA and the "would not buy" colour. That is fixed here: the committing action on any screen is a **bone** fill (`#f6f2ec`) with near-black text, and a new brand accent — **iris** (`#a97bff`) — carries brand moments, links, focus rings, selection and the "this moved in the last re-run" marker. Teal, gold and coral now mean exactly one thing each.

### Type
- **Display — Instrument Serif.** Editorial, high-contrast, slightly literary. Used only for hero and screen titles, always at large sizes with `-.02em` tracking. Italic is available and used once per page at most, on the phrase that carries the idea.
- **UI — Instrument Sans.** Everything interactive: headings, body, labels, quotes. 13px is the base UI size, matching the source mockup.
- **Data — Martian Mono.** Prices, percentages, counts, section eyebrows, telemetry labels, token names. Mono signals "this is a measured value". Its slightly technical, wide-set character is the one place the system borrows the reference's lab-instrument tone. `--type-telemetry` (9.5px, wide-tracked, uppercase) is the smallest register, used for field labels on the light break band.

### Backgrounds
No photography, no illustration, no texture, no repeating pattern. Exactly one gradient exists in the system: `--bloom-page`, a barely-there iris bloom sized `1200px 800px` from `10% -10%`, decaying to flat black by 55%. If you can name the gradient's colour at a glance it is too strong. The marketing hero uses a centred variant. **Never** a two-stop diagonal gradient, never a gradient behind a card, never a gradient on a button.

**The light break.** One — and only one — band per page may invert to `--surface-break` (`#c8c6c2`) with `--text-on-break` (`#14141a`). It is flat, full-bleed, sharp-edged: no radius, no border, no shadow, no gradient. Its job is to interrupt the black hard enough that the reader resets. Two of them on one page and neither works. It appears on the landing page only, never in the app.

### Cards and borders
Every surface is a 1px `#2b2b35` hairline on a stepped near-black fill. Radii: 10px buttons and inputs, 12px chat bubbles and nested boxes, 14px persona cards, 16px panels, 24px marketing blocks, pill for chips and badges. Nesting steps exactly one surface level at a time; two cards of the same surface never stack.

### Shadow, glow, transparency
Elevation on dark comes from the surface step and hairline first — shadow is almost absent. The only coloured shadows are iris glows: `--glow-focus` (3px focus ring), `--glow-moved` (iris ring on a persona who just changed). Transparency and blur appear in exactly two places: the fixed marketing nav and the app top bar, both `--surface-glass` + `blur(14px)` and both only after scroll. Text over a bleeding section uses `--scrim-bottom`, a protection gradient, not a capsule.

### Motion
One house curve: `cubic-bezier(.2,.9,.2,1)`. Four durations: 150ms interaction, 250ms expand/collapse, **500ms the verdict bar re-proportioning**, 800ms marketing reveals. The 500ms width transition is the single most important animation in the product — the brief is explicit that a re-run must be *witnessed*, so widths animate and never snap. Marketing bands fade up 22px, staggered 100ms. No bounce, no spring, no autoplay loops, no scroll-jacking. The one pulse in the system is the teal `LiveDot`. All of it collapses under `prefers-reduced-motion`.

### States
- **Hover:** border goes iris, card lifts `translateY(-2px)`, fills lighten one step. Never opacity-dimming.
- **Press:** `translateY(1px)`. No colour change, no scale.
- **Focus:** iris hairline plus the `--glow-focus` ring. Visible always; never removed.
- **Selected:** iris border + iris-900 fill + iris-100 text.
- **Disabled:** raised fill, faint text, `not-allowed`. Never a low-opacity ghost.
- **Moved (product-specific):** iris ring plus a small iris dot on the verdict badge. Cleared on the next interaction so it stays meaningful.

### Layout
App: `1180px` container, `28px` page padding, a `260px` sticky control rail beside a fluid main column. Persona grid is `repeat(auto-fill, minmax(230px, 1fr))` at a 14px gap. Marketing: `1320px` container, `40px` gutters, `88px` between bands, one fixed element (the nav). The spacing scale is deliberately **not** a strict 4px grid — 9px switch rows, 12.5px and 13.5px type, and 4/10px chip padding are carried verbatim from the source mockup.

### Imagery
There is none, and that is a decision, not a gap: the personas *are* the imagery. Identity is carried by an initials avatar on a fixed per-persona colour (eight-colour palette, wider than the semantic triad on purpose). If photography is ever introduced it should be cool-toned, low-key and grainless, and must never sit under text without a scrim.

---

## ICONOGRAPHY

The source materials contain **no icon assets** — the mockup used two bare Unicode glyphs (`↻` re-run, `▾` expand) and nothing else. No icon font, no sprite, no SVG files.

**Substitution (flagged):** this system uses **Lucide** (`lucide@0.469.0`, loaded from unpkg) at **1.75 stroke weight, 16px default**. Lucide was chosen because its light, geometric, open stroke matches the mockup's thin-hairline, low-chrome character better than a filled or heavy-stroke set. The `Icon` component wraps it; `IconButton` composes it.

Rules:
- Icons are always paired with a label except in `IconButton`, which requires an accessible `label` prop.
- `currentColor` only — icons never carry their own colour, so they inherit verdict and state colours correctly.
- Icons never appear inside chips, badges or persona cards. They live in the top bar, buttons, the diff view's direction arrows, and empty/info states.
- **No emoji, ever** — in interface copy, persona voice, or marketing.
- The Unicode `▾` / `▴` expand affordance from the mockup is preserved verbatim on `PersonaCard`, because it is set in the text run, not the icon layer.
- Direction semantics in the diff view: `trending-up` teal, `trending-down` coral, `minus` faint.

---

## Gaps & substitutions — please confirm

1. **No logo.** Nothing in the sources contains a mark, wordmark file, or logotype. Per policy nothing was drawn. Everywhere a mark belongs, the brand name is set in Instrument Serif, lowercase. `assets/` therefore contains no logo file. **Send us the mark** and it drops straight into the nav, top bar and thumbnail.
2. **No font binaries.** The mockup used the system UI stack. Instrument Serif / Instrument Sans / Martian Mono are deliberate choices loaded from Google Fonts — they mirror the type *structure* named in the trionn reference, not intertwin's own licensed type. If intertwin has licensed type, send the files and `tokens/fonts.css` becomes real `@font-face` rules.
3. **No icon set.** Lucide substituted, as above.
4. **Screens A, B and D** existed only as one row of a table in the brief — the mockup covers screen C alone. Those three screens are designed from the brief's descriptions and are the most interpretive part of this system.

## Intentional additions

The mockup defines its own component inventory (button, chip, switch, slider, verdict bar, verdict badge, avatar, persona card, chat bubble, signal box, section title, card, input). Four primitives were added because screens A, B and D in the brief cannot be built without them:

- **`Icon` / `IconButton`** — a wrapper for the substituted glyph set.
- **`Select`** — screen A is a form of fixed enumerations (category, format, evidence type, channel).
- **`Checkbox`** — screen B is include/exclude selection over the persona library.
- **`Field`** — the label/control/readout pattern the mockup repeats inline four times.

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — homepage tile.

### Tokens (`tokens/`)
`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css`

### Components

**`components/core/`** — `Button`, `IconButton`, `Icon`, `Chip`, `Avatar`, `LiveDot`, `SectionTitle`, `Card`

**`components/forms/`** — `Field`, `Input`, `Select`, `Switch`, `Slider`, `Checkbox`

**`components/panel/`** — `VerdictBar`, `VerdictBadge`, `PersonaCard`, `ChatMessage`, `SignalBox`

Each directory carries a `*.card.html` showing its states, and each component a `.d.ts` props contract plus a `.prompt.md` usage note.

### Guidelines (`guidelines/`)
17 specimen cards across **Colors** (surfaces, verdict triad, brand & action, text, persona palette, light break), **Type** (display, UI, data, persona voice), **Spacing** (scale, radii, density in use) and **Brand** (elevation & glow, motion, page bloom, voice say/don't-say).

### UI kits (`ui_kits/`)
- `app/` — the v1 product loop across four screens. See its `README.md`.
- `marketing/` — the landing page. See its `README.md`.

### Assets (`assets/`)
Empty by design — no logo, imagery or icon binaries were provided. Icons come from the Lucide CDN.
