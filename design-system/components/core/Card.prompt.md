Generic bordered surface for panels, signal boxes and content blocks.

```jsx
<Card surface="panel" pad="lg" radius="2xl">…</Card>
<Card surface="card" pad="card" radius="xl" hoverable>…</Card>
```

Nest one step at a time: `panel` (#1c1624) > `card` (#241c30) > `raised` (#2c2238). Never stack two cards of the same surface — the hairline is doing the separating.
