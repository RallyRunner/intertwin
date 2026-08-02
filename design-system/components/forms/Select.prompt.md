Dropdown for the fixed enumerations in the product form (category, format, channel, evidence type).

```jsx
<Select options={['Consumer test', 'Clinical study', 'No evidence cited']} value={evidence} onChange={e => set(e.target.value)} />
```
