A turn in the panel discussion. Persona replies stream in one at a time, each preceded by a typing state.

```jsx
<ChatMessage self text="Is $38 worth it for 30 mL?" />
<ChatMessage from="Marisol" typing />
<ChatMessage from="Marisol" color="var(--persona-1)" text="Not for me — that's $1.27/mL…" />
```

Stagger persona replies ~900ms apart. Replies must read as individuals disagreeing, not one blended answer.
