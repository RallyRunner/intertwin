Continuous lever. Always pair with a `Field` whose `value` shows the live readout.

```jsx
<Field label="Price" value={`$${price}`}>
  <Slider min={24} max={48} value={price} onChange={setPrice} minLabel="$24" maxLabel="$48" />
</Field>
```

Fire the re-run on every input event, not on release — the point is to watch the panel move while dragging.
