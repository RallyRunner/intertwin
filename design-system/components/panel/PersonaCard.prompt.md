The panel's atom: one persona's reaction, click-to-expand for full rationale.

```jsx
<PersonaCard name="Devon" archetype="Ingredient Researcher" color="var(--persona-2)"
  verdict="fence" tags={['Combination','Hyperpigmentation','Evidence-driven']}
  quote="'consumer test, n=128' isn't a clinical claim — I want to see the actual study."
  rationale="Devon reads INCI lists before reviews…" />
```

Grid it at `repeat(auto-fill, minmax(230px, 1fr))` with a 14px gap. Set `moved` on the cards that changed in the last re-run so the delta is attributable. Quotes are synthesized voice — copy must never imply a scraped testimonial.
