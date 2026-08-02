const { Card, Button, Chip, Icon, Avatar, SectionTitle, VerdictBar, VerdictBadge } = window.IntertwinDesignSystem_276e72;

function LeverDiff({ label, before, after }) {
  const changed = before !== after;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', padding: '10px 0', borderTop: '1px solid var(--border-hairline)', font: 'var(--type-small)' }}>
      <span style={{ flex: 1, color: changed ? 'var(--text-primary)' : 'var(--text-faint)' }}>{label}</span>
      <span style={{ font: 'var(--type-data)', fontSize: 'var(--text-2xs)', color: 'var(--text-faint)', textDecoration: changed ? 'line-through' : 'none' }}>{before}</span>
      <Icon name="arrow-right" size={12} />
      <span style={{ font: 'var(--type-data)', fontSize: 'var(--text-2xs)', color: changed ? 'var(--iris-300)' : 'var(--text-faint)' }}>{after}</span>
    </div>
  );
}

function MoveRow({ p, from, to }) {
  const dir = ({ pass: 0, fence: 1, buy: 2 })[to] - ({ pass: 0, fence: 1, buy: 2 })[from];
  return (
    <Card surface="panel" pad="card" radius="xl" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
      <Avatar name={p.name} color={p.color} size={32} />
      <div style={{ minWidth: 140 }}>
        <div style={{ font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', fontSize: '13.5px' }}>{p.name}</div>
        <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>{p.archetype}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', marginLeft: 'auto' }}>
        <span style={{ opacity: .45 }}><VerdictBadge verdict={from} /></span>
        <span style={{ color: dir > 0 ? 'var(--verdict-buy)' : dir < 0 ? 'var(--verdict-pass)' : 'var(--text-faint)' }}>
          <Icon name={dir > 0 ? 'trending-up' : dir < 0 ? 'trending-down' : 'minus'} size={15} />
        </span>
        <VerdictBadge verdict={to} moved={dir !== 0} />
      </div>
    </Card>
  );
}

function TweakDiff({ personas, baseState, state, baseResults, results, onBack }) {
  const b = { buy: 0, fence: 0, pass: 0 }, a = { buy: 0, fence: 0, pass: 0 };
  baseResults.forEach(r => b[r.v]++); results.forEach(r => a[r.v]++);
  const movers = personas.map((p, i) => ({ p, from: baseResults[i].v, to: results[i].v })).filter(m => m.from !== m.to);
  const held = personas.length - movers.length;
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <div style={{ font: 'var(--type-display)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>
          {movers.length ? `${movers.length} of ${personas.length} moved.` : 'Nobody moved.'}
        </div>
        <div style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', maxWidth: 640 }}>
          {movers.length
            ? 'Here is exactly which levers changed and who changed with them. Everyone else held their position.'
            : 'The levers you changed did not touch anything this panel objected to. Try the objections list on the results screen.'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', marginBottom: 'var(--space-16)' }}>
        <div>
          <SectionTitle>What you changed</SectionTitle>
          <Card surface="panel" pad="panel" radius="2xl">
            <LeverDiff label="Price" before={'$' + baseState.price} after={'$' + state.price} />
            <LeverDiff label="Fragrance" before={baseState.fragrance ? 'fragrance-free' : 'light citrus'} after={state.fragrance ? 'fragrance-free' : 'light citrus'} />
            <LeverDiff label="Evidence" before={baseState.clinical ? 'clinical study' : 'consumer test'} after={state.clinical ? 'clinical study' : 'consumer test'} />
            <LeverDiff label="Trial SKU" before={baseState.trial ? '7 mL available' : 'none'} after={state.trial ? '7 mL available' : 'none'} />
          </Card>
        </div>
        <div>
          <SectionTitle>Aggregate, before and after</SectionTitle>
          <Card surface="panel" pad="panel" radius="2xl">
            <div style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--text-faint)', marginBottom: 6 }}>FIRST RUN</div>
            <VerdictBar buy={b.buy} fence={b.fence} pass={b.pass} height={22} showLegend={false} />
            <div style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--iris-300)', margin: '14px 0 6px' }}>CURRENT RUN</div>
            <VerdictBar buy={a.buy} fence={a.fence} pass={a.pass} height={22} />
          </Card>
        </div>
      </div>

      <SectionTitle action={<span style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--text-faint)' }}>{held} held position</span>}>
        Who moved
      </SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {movers.length ? movers.map(m => <MoveRow key={m.p.id} {...m} />)
          : <Card surface="panel" pad="card" radius="xl" style={{ font: 'var(--type-small)', color: 'var(--text-secondary)' }}>No verdict changes between these two runs.</Card>}
      </div>

      <div style={{ marginTop: 'var(--space-16)' }}>
        <Button variant="secondary" onClick={onBack}><Icon name="arrow-left" size={14} />Back to results</Button>
      </div>
    </div>
  );
}

Object.assign(window, { TweakDiff, MoveRow, LeverDiff });
