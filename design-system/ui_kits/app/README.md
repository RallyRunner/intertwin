# intertwin app — UI kit

High-fidelity recreation of the v1 product loop, composed entirely from this design system's components.

**Open `index.html`.** It boots on screen C (the results dashboard) because that is the screen that carries the product; use the step nav to reach the others.

| Step | File | What it is |
|---|---|---|
| 01 Product | `ProductForm.jsx` | Screen A — capture formulation, claim, evidence, price, fragrance, certifications, market, channel. |
| 02 Panel | `PanelSelect.jsx` | Screen B — include/exclude personas from the platform-curated library (fixed in v1). |
| 03 Results | `Results.jsx` | Screen C — product header, sticky scenario rail, aggregate verdict bar, appeals/objections, persona reaction grid, panel chat. |
| 04 Compare | `TweakDiff.jsx` | Screen D — lever diff, before/after aggregate, who moved. |
| — | `Shell.jsx` | Top bar, step nav, product header, honesty disclosure. |
| — | `data.js` | Scripted personas, verdict rules, signal derivation, chat presets. |

## Interactions worth playing
- Drag the **price** slider: verdict bar re-proportions over 500ms, moved personas get an iris ring, objection chips appear and disappear.
- Toggle **fragrance-free**: Priya flips pass → buy (a categorical filter, not a sliding preference).
- Toggle **clinical study**: Devon flips fence → buy. Toggle **trial SKU**: Jordan flips pass → fence.
- Click any persona card for the full rationale; click a preset question to watch replies stream in per persona.
- "Compare with first run" opens the diff view against the untouched baseline.

## Deliberately not built (out of v1 scope)
Side-by-side product comparison, custom personas, bring-your-own reviews, accounts/billing/sharing, makeup and haircare.

Verdicts and chat replies are scripted fixtures for demonstration, not model output.
