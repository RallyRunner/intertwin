Aggregate purchase-intent bar. Pass raw persona counts; it derives percentages.

```jsx
<VerdictBar buy={2} fence={2} pass={2} />
```

Widths transition over `--dur-slow` on `--ease-standard`. Never snap the widths — the animated re-proportioning is the moment the product sells itself. Show counts alongside percentages so nobody mistakes a 6-persona panel for a market projection.
