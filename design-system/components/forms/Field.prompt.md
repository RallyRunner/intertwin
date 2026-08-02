Label/control/hint wrapper used by every form and scenario control.

```jsx
<Field label="Price" value={`$${price}`}>
  <Slider min={24} max={48} value={price} onChange={setPrice} />
</Field>
```

The `value` slot is the live readout — gold mono, right aligned. It is the one place gold appears outside the "on the fence" verdict, because it reads as a value-in-flux.
