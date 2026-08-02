const { Card, Button, Chip, Icon, Avatar, Checkbox, SectionTitle, Input } = window.IntertwinDesignSystem_276e72;

function PersonaTile({ p, checked, onToggle }) {
  return (
    <Card surface="panel" pad="card" radius="xl" hoverable onClick={() => onToggle(!checked)}
      style={checked ? { borderColor: 'var(--iris-500)' } : null}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
        <Avatar name={p.name} color={p.color} size={34} />
        <div style={{ minWidth: 0 }}>
          <div style={{ font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', fontSize: '13.5px' }}>{p.name}</div>
          <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.archetype}</div>
        </div>
        <span style={{ marginLeft: 'auto' }}><Checkbox checked={checked} onChange={onToggle} /></span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: '9px' }}>
        {(p.tags || []).slice(0, 3).map(t => <Chip key={t}>{t}</Chip>)}
      </div>
    </Card>
  );
}

function PanelSelect({ library, selected, setSelected, onNext, onBack }) {
  const [q, setQ] = React.useState('');
  const shown = library.filter(p => (p.name + p.archetype + (p.tags || []).join(' ')).toLowerCase().includes(q.toLowerCase()));
  const toggle = (id, on) => setSelected(on ? selected.concat(id) : selected.filter(x => x !== id));
  return (
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-10)', marginBottom: 'var(--space-12)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ font: 'var(--type-display)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>Who&rsquo;s in the room?</div>
          <div style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', maxWidth: 620 }}>
            We pre-selected the archetypes most relevant to a brightening serum. Override anything — segment mix is what makes a finding actionable.
          </div>
        </div>
        <div style={{ width: 280 }}><Input placeholder="Filter by archetype or concern" value={q} onChange={e => setQ(e.target.value)} /></div>
      </div>

      <SectionTitle action={<span style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--text-secondary)' }}>{selected.length} selected · library of 52</span>}>
        Platform-curated persona library
      </SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(268px,1fr))', gap: 'var(--gap-card)' }}>
        {shown.map(p => <PersonaTile key={p.id + p.archetype} p={p} checked={selected.includes(p.id)} onToggle={on => toggle(p.id, on)} />)}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
        <Button variant="primary" size="lg" onClick={onNext}>Run the panel<Icon name="arrow-right" size={15} /></Button>
        <Button variant="ghost" onClick={onBack}>Back to product</Button>
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-faint)' }}>Personas are platform-curated in v1 — you can include or exclude, not edit.</span>
      </div>
    </div>
  );
}

Object.assign(window, { PanelSelect, PersonaTile });
