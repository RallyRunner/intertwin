const { Button, IconButton, Chip, Icon, Avatar } = window.IntertwinDesignSystem_276e72;

const STEPS = [
  { id: 'product', label: 'Product', n: '01' },
  { id: 'panel', label: 'Panel', n: '02' },
  { id: 'results', label: 'Results', n: '03' },
  { id: 'diff', label: 'Compare runs', n: '04' },
];

function TopBar({ step, onStep, onRerun, canAdvance }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, display: 'flex', alignItems: 'center', gap: 'var(--space-10)',
      padding: '14px var(--pad-app)', background: 'var(--surface-glass)', backdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-hairline)',
    }}>
      <div style={{ font: 'var(--type-title)', fontSize: 'var(--text-2xl)', letterSpacing: '-.01em' }}>intertwin</div>
      <nav style={{ display: 'flex', gap: 'var(--space-2)' }}>
        {STEPS.map(s => {
          const active = s.id === step;
          const enabled = canAdvance(s.id);
          return (
            <button key={s.id} disabled={!enabled} onClick={() => enabled && onStep(s.id)} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: '7px 12px',
              borderRadius: 'var(--radius-pill)', border: '1px solid ' + (active ? 'var(--iris-500)' : 'transparent'),
              background: active ? 'var(--iris-900)' : 'transparent', cursor: enabled ? 'pointer' : 'not-allowed',
              color: active ? 'var(--iris-100)' : enabled ? 'var(--text-secondary)' : 'var(--text-faint)',
              font: 'var(--type-small)', transition: 'var(--transition-hover)',
            }}>
              <span style={{ font: 'var(--type-data)', fontSize: 'var(--text-3xs)', opacity: .7 }}>{s.n}</span>{s.label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-faint)' }}>Skincare · v1 · single product</span>
        {step === 'results' && <Button variant="primary" size="sm" onClick={onRerun}><Icon name="refresh-cw" size={14} />Re-run panel</Button>}
        <IconButton name="settings" label="Settings" variant="ghost" />
      </div>
    </header>
  );
}

function Disclosure({ children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: '10px 14px',
      border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-panel)', color: 'var(--text-secondary)', font: 'var(--type-caption)',
    }}>
      <span style={{ color: 'var(--iris-300)', marginTop: 1 }}><Icon name="info" size={13} /></span>
      <span>{children}</span>
    </div>
  );
}

function ProductHeader({ product, price }) {
  return (
    <header style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-2xl)', padding: '18px 22px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
        <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-lg)', flex: 'none', background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
          <Icon name="flask-conical" size={20} />
        </div>
        <div>
          <div style={{ font: 'var(--type-heading)' }}>{product.name}</div>
          <div style={{ font: 'var(--type-data)', fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)', marginTop: 3 }}>
            {product.category} · {product.format} · {product.size} · <span style={{ color: 'var(--verdict-fence)' }}>${price}.00</span> · {product.market} · {product.channel}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', maxWidth: 520 }}>
        {product.attributes.map(a => <Chip key={a.label} tone={a.tone || 'neutral'}>{a.label}</Chip>)}
      </div>
    </header>
  );
}

Object.assign(window, { TopBar, Disclosure, ProductHeader, STEPS });
