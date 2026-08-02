const { Card, Button, Chip, Icon, Avatar, Field, Input, Slider, Switch, SectionTitle, LiveDot,
  VerdictBar, VerdictBadge, PersonaCard, SignalBox, ChatMessage } = window.IntertwinDesignSystem_276e72;

function ControlRail({ state, setState, recalcing }) {
  const set = (k, v) => setState({ ...state, [k]: v });
  return (
    <Card surface="panel" pad="panel" radius="2xl" style={{ alignSelf: 'start', position: 'sticky', top: 84 }}>
      <SectionTitle>Scenario controls</SectionTitle>
      <Field label="Price" value={'$' + state.price} style={{ marginTop: 'var(--space-9)' }}>
        <Slider min={24} max={48} value={state.price} onChange={v => set('price', v)} minLabel="$24" maxLabel="$48" />
      </Field>
      <div style={{ marginTop: 'var(--space-9)' }}>
        {[['fragrance', 'Fragrance-free reformulation'], ['clinical', 'Upgrade to clinical study claim'], ['trial', 'Add 7 mL trial size SKU']].map(([k, l], i) => (
          <Switch key={k} label={l} checked={state[k]} onChange={v => set(k, v)}
            style={i ? { borderTop: '1px solid var(--border-hairline)' } : null} />
        ))}
      </div>
      <div style={{ marginTop: 'var(--space-9)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-hairline)', font: 'var(--type-caption)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
        Move a lever and the panel re-reacts in place. Nothing here re-runs the model against a new product — it re-asks the same six people.
      </div>
      {recalcing && (
        <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)', font: 'var(--type-caption)', color: 'var(--iris-300)' }}>
          <LiveDot color="var(--iris-300)" size={6} />Re-evaluating the panel…
        </div>
      )}
    </Card>
  );
}

function PanelChat({ personas, log, onPreset, onSend }) {
  const [text, setText] = React.useState('');
  const send = () => { if (text.trim()) { onSend(text.trim()); setText(''); } };
  return (
    <Card surface="panel" pad="panel" radius="2xl">
      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-7)' }}>
        {[['switch', 'What would make you switch from your current serum?'], ['worth', 'Is $38 worth it for 30 mL?'], ['scent', 'Does the citrus scent bother you?']].map(([k, l]) => (
          <Chip key={k} interactive onClick={() => onPreset(k)} style={{ padding: '7px 12px', fontSize: 'var(--text-xs)' }}>{l}</Chip>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxHeight: 300, overflowY: 'auto', paddingRight: 4 }}>
        {log.length === 0 && <div style={{ font: 'var(--type-caption)', color: 'var(--text-faint)', padding: '10px 0' }}>Ask the panel a follow-up. Replies come back one persona at a time, in their own voice.</div>}
        {log.map((m, i) => {
          const p = personas.find(x => x.id === m.from);
          return <ChatMessage key={i} self={m.self} from={p ? p.name : m.from} color={p && p.color} text={m.text} typing={m.typing} />;
        })}
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
        <Input placeholder="Ask the whole panel, or @ a persona by name…" value={text}
          onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} style={{ flex: 1 }} />
        <Button variant="primary" onClick={send}>Send</Button>
      </div>
    </Card>
  );
}

function Results({ product, personas, state, setState, results, moved, recalcing, chat, onPreset, onSend, onCompare }) {
  const counts = { buy: 0, fence: 0, pass: 0 };
  results.forEach(r => counts[r.v]++);
  const sig = window.ITW.signals(state);
  return (
    <div style={{ maxWidth: 'var(--container-app)', margin: '0 auto' }}>
      <ProductHeader product={product} price={state.price} />
      <div style={{ display: 'grid', gridTemplateColumns: 'var(--rail-controls) 1fr', gap: 'var(--space-10)', marginTop: 'var(--space-10)' }}>
        <ControlRail state={state} setState={setState} recalcing={recalcing} />
        <main>
          <section style={{ marginBottom: 'var(--gap-section)' }}>
            <SectionTitle icon={<LiveDot />} action={<Button variant="ghost" size="sm" onClick={onCompare}>Compare with first run</Button>}>
              Aggregate purchase intent — {personas.length} personas
            </SectionTitle>
            <Card surface="panel" pad="lg" radius="2xl">
              <VerdictBar buy={counts.buy} fence={counts.fence} pass={counts.pass} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', marginTop: 'var(--space-9)' }}>
                <SignalBox title="Top appeals right now" tone="appeal" items={sig.appeals} />
                <SignalBox title="Top objections right now" tone="objection" items={sig.objections} empty="Every objection on this panel is currently resolved." />
              </div>
              <div style={{ marginTop: 'var(--space-7)' }}>
                <Disclosure>A read on these {personas.length} personas, not a market projection. Use it to find objections worth testing with real shoppers.</Disclosure>
              </div>
            </Card>
          </section>

          <section style={{ marginBottom: 'var(--gap-section)' }}>
            <SectionTitle action={moved.length ? <span style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--iris-300)' }}>{moved.length} moved this run</span> : null}>
              Persona reactions — click a card for the full rationale
            </SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 'var(--gap-card)' }}>
              {personas.map((p, i) => (
                <PersonaCard key={p.id} name={p.name} archetype={p.archetype} color={p.color}
                  verdict={results[i].v} moved={moved.includes(p.id)} tags={p.tags}
                  quote={results[i].quote} rationale={results[i].full} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Panel discussion — ask a follow-up</SectionTitle>
            <PanelChat personas={personas} log={chat} onPreset={onPreset} onSend={onSend} />
          </section>
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { Results, ControlRail, PanelChat });
