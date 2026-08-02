# intertwin — Product & Design Brief

**For:** design partner building out the intertwin design system
**Status of scope below:** captain-approved v1 scope, 2026-08-01
**Working reference mockup:** [`docs/mockup-panel-dashboard.html`](./mockup-panel-dashboard.html)

---

## 1. What intertwin is

intertwin is a research tool for beauty brands. You describe a product — its formulation, claims, price, size, channel — and a panel of AI personas, each grounded in a realistic beauty-shopper archetype, reacts to it. Every persona returns a purchase-intent verdict (*would buy* / *on the fence* / *would not buy*) plus a personal rationale in their own voice. Then you start poking: drop the price, toggle the fragrance out, upgrade a consumer test to a clinical claim — and the panel re-reacts live, in front of you. The core loop is **describe a product → a grounded panel reacts → move a lever and watch the panel move → walk away with a directional read and a concrete list of objections to fix before spending real money on a real research panel.**

The single most important interaction in the entire product is that live re-run: a lever change produces a visible, attributable shift in the panel's reaction. That loop — not a one-shot PDF report — *is* the product. If a designer only gets one thing right, it should be making that moment feel real.

## 2. Who it's for

A beauty brand marketer, an indie founder, or an agency researcher — someone about to commit budget to a real qualitative panel, which takes weeks and costs five figures. intertwin is what they run first, to pre-screen claims and pricing before that commitment.

Critically, **the value is not a single aggregate sentiment score.** It's segment-level granularity: seeing *which* kind of shopper objects, and *why*. The ingredient researcher wants clinical evidence and won't be bought off with a discount. The budget shopper is doing cost-per-mL math and nothing else. The clean-beauty loyalist has a hard fragrance filter that no price change will ever move. Three different objections, three different fixes, three different costs to the business — and an averaged "62% positive" number destroys all of it. Design should treat the aggregate as an entry point, never as the answer.

## 3. Decided v1 scope

This is the approved shape of v1. Design against this, not against the fuller long-term vision.

- **Single product per session.** No side-by-side comparison — that's planned for v2, so don't design the v1 layouts around a future second column.
- **Skincare only.** No makeup, no haircare.
- **One fixed, platform-curated persona library** of roughly 40–60 personas. Customers select from it and can override which personas run, but cannot create or edit personas in v1.
- **Personas speak in their own synthesized voice**, grounded in realistic review patterns — never verbatim quotes from real reviews. Anything in the UI that frames persona speech (quote marks, chat bubbles, attribution) should be honest about this: it's a synthesized voice, not a scraped testimonial.

### Screens the v1 loop needs

| | Screen | Role |
|---|---|---|
| **A** | Product input form | Capture the product: category, format, size, price, claims + evidence type, fragrance, certifications, market/channel. |
| **B** | Panel selection grid | Confirm or override which personas from the library will run. |
| **C** | **Results / panel dashboard** | The centerpiece. Aggregate verdict, persona reaction cards, scenario controls, panel chat. See the mockup. |
| **D** | Before/after tweak-diff view | Later in v1. Shows what changed between two runs and who moved. |

Screen C carries the product. It's where the loop lives and where nearly all the design risk sits.

## 4. Design themes

These are the load-bearing part of this brief. Design against them.

### Theme 1 — "A focus group, not a survey."

This should feel like watching a room full of distinct people react, not like reading rows in a spreadsheet. Personas need real identity: a name, an avatar, an archetype label, a consistent voice that stays recognizable from the reaction card into the chat thread. The product's credibility rests entirely on the panel *feeling like individuals with genuine disagreement* — not one blended average opinion wearing six different hats. When Priya and Tasha disagree about the citrus fragrance, that disagreement should land as two people who actually see it differently.

Practically: persona identity is not decoration. It is the mechanism by which a user trusts a segment-level finding enough to act on it.

### Theme 2 — "The delta is the product."

The single most valuable moment in intertwin is a lever changing and the panel visibly, legibly reacting. Design for that moment specifically:

- The aggregate verdict bar animates to its new proportions rather than snapping.
- Objection chips appear and disappear as the underlying objection is resolved or created.
- A brief "recalculating" state makes clear that a real re-evaluation happened.
- Individual persona cards show that *they* moved — their badge changed, their rationale now references the change.

Every re-run must read as real and attributable — *"dropping the price to $26 is what moved these two people"* — never like a static report quietly swapping itself out while the user's attention was elsewhere. If a change happens invisibly, the product's central claim goes unwitnessed.

### Theme 3 — "Directional signal, honestly framed."

This is simulated research, not a guarantee. The UI must never visually oversell false precision: no fake confidence intervals, no invented statistical rigor, no p-values, no error bars implying sampling that didn't happen. At the same time it cannot read as a toy — the buyer is a professional deciding whether to spend five figures, and the interface needs to feel credible and premium enough to be taken seriously in that decision.

The tone to hit: *"surfaces objections you'd otherwise pay a real panel to discover."* The tone to avoid: *"predicts your sales."* Percentages are fine as a read of this panel; anything that implies market-level projection is not. The mockup's standing disclaimer line is one crude approach to this — find a better one that stays honest without feeling apologetic.

### Theme 4 — Aggregate-to-individual drill-down as the core navigation pattern.

The verdict bar is a summary. The real value is always one click away, inside a specific persona's rationale. Visual hierarchy should make that next click obvious at every level: aggregate → segment → individual persona → their full reasoning → asking them a follow-up. A user who stops at the aggregate bar has not gotten what they came for, and the layout should keep pulling them downward into specifics.

## 5. Existing visual direction (a reference point, not a mandate)

A prior scout built and interactively tested a real HTML mockup of the results dashboard (screen C), saved here as **[`docs/mockup-panel-dashboard.html`](./mockup-panel-dashboard.html)**. It is self-contained with no backend or external dependencies — open it directly in a browser. The price slider, the three claim toggles, the persona card expansion, and the chat presets are all wired to real JavaScript, so you can actually play the loop rather than just look at a picture of it. Verdicts and chat replies are scripted for the demo, not live model output.

It establishes a first pass at a visual language:

- A dark, moody "beauty-tech" palette: near-black plum background with a soft violet radial glow, deep-purple card surfaces.
- Coral-pink as the primary accent and CTA color.
- A three-way semantic color code for verdicts that should probably carry through the entire system: **teal = would buy, gold = on the fence, coral = would not buy.**

**Treat this as a proof of interaction, not a locked visual system.** Please challenge and evolve the palette, typography, and layout — it was built to prove the loop works, not to be a design system. Two things are worth preserving, though, and they're worth preserving because they're load-bearing for the product's value proposition rather than because they look nice:

1. **The semantic three-color verdict coding.** It's the visual grammar of the whole product; every screen ultimately expresses the same three states.
2. **The "personas as distinct individuals" pattern.** See Theme 1 — this is the credibility mechanism.

Note one collision the mockup has and doesn't resolve: coral is simultaneously the primary CTA color and the "would not buy" color. That works at mockup scale and probably won't at system scale. Resolving it cleanly is a good first design decision.

### Palette reference

Pulled directly from the mockup's CSS variables, so you don't have to reverse-engineer it from the HTML.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#141019` | page background (near-black plum) |
| `--bg2` | `#1c1624` | section/card background, one step up |
| `--card` | `#241c30` | card surface |
| `--card2` | `#2c2238` | nested/secondary surface |
| `--border` | `#3a2e49` | hairline borders |
| `--text` | `#f1ecf7` | primary text |
| `--muted` | `#a894bd` | secondary/muted text |
| `--coral` | `#ff6f8e` | primary accent, CTAs, "would not buy" |
| `--gold` | `#f4c869` | "on the fence" / caution |
| `--teal` | `#4ddbc0` | "would buy" / positive, live-activity pulse |

The mockup also carries dimmed variants of each accent (`--coral-dim`, `--gold-dim`, `--teal-dim`) used as badge and chip backgrounds against the dark surfaces, plus per-persona avatar colors drawn from a wider set than the three semantic accents.

---

## Out of scope for v1

Please don't design for these — they aren't being built yet:

- **Comparative / multi-product panels.** One product per session. Side-by-side is v2.
- **Bring-your-own-data.** No customer-supplied reviews, customer lists, or custom personas; the persona library is platform-curated and fixed.
- **Makeup and haircare.** Skincare only.
- **Accounts, billing, teams, sharing, permissions, multi-user collaboration.** None of it in v1.
