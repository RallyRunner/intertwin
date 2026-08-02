Pill used for product attributes, persona tags, and the appeal/objection signal rows.

```jsx
<Chip>Cruelty-free</Chip>
<Chip tone="objection">Added fragrance (sensitive-skin blocker)</Chip>
<Chip interactive onClick={ask}>Is $38 worth it for 30 mL?</Chip>
```

Tone maps to verdict semantics: `appeal` teal, `caution` gold, `objection` coral. Keep chip text to a short phrase — they wrap into rows, never truncate.
