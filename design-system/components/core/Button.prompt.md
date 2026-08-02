Primary action control — use `primary` (bone fill) for the one committing action on a screen, `secondary`/`outline` for everything beside it.

```jsx
<Button variant="primary" size="md" onClick={rerun}>Re-run panel</Button>
<Button variant="secondary" size="sm">Edit product</Button>
```

Variants: `primary` (bone), `accent` (iris — brand moments only, e.g. marketing hero), `secondary` (raised plum), `ghost`, `outline`. Sizes `sm | md | lg`. Hover lightens the fill; press nudges 1px down. Never fill a button with coral, teal or gold — those three carry verdict meaning.
