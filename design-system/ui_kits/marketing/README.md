# intertwin site — UI kit

The marketing landing page. Built to the brief's request for a smooth, editorial scroll experience (reference: trionn.com) reinterpreted around intertwin's own idea rather than copied.

**Open `index.html`.**

| File | Contents |
|---|---|
| `Hero.jsx` | `Reveal` (IntersectionObserver fade-up primitive), fixed glass `Nav`, full-height `Hero` with parallax drift and bottom scrim. |
| `Sections.jsx` | `Loop` (three numbered steps), `PanelShowcase` (staggered persona cards), `DeltaDemo` (a live, draggable panel embedded in the page), `Honest`, `CTA`, `Footer`. |
| data | Reuses `../app/data.js` — the landing demo runs the same scripted verdict rules as the product. |

## Motion rules used here
- Every band fades up 22px over `--dur-reveal` on `--ease-out`, staggered 100ms between siblings.
- Hero drifts at 0.12× scroll — the only parallax in the system.
- Nav goes glass (blur + hairline) past 40px scroll.
- No autoplaying loops, no bouncing, no scroll-jacking. Native smooth scroll only.

## The one thing this page must do
`DeltaDemo` is a real, interactive panel in the middle of the marketing page. The product's claim is that a lever change produces a visible, attributable shift — so the page proves it rather than describing it.
