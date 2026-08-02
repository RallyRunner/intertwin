import React from 'react';

export function VerdictBar({ buy = 0, fence = 0, pass = 0, height = 34, showLegend = true, style }) {
  const total = Math.max(buy + fence + pass, 1);
  const pct = n => Math.round((n / total) * 100);
  const segs = [
    { k: 'buy', n: buy, c: 'var(--verdict-buy)', label: 'Would buy' },
    { k: 'fence', n: fence, c: 'var(--verdict-fence)', label: 'On the fence' },
    { k: 'pass', n: pass, c: 'var(--verdict-pass)', label: 'Would not buy' },
  ];
  return (
    <div style={style}>
      <div style={{
        height, borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex',
        border: '1px solid var(--border-hairline)', background: 'var(--surface-raised)',
      }}>
        {segs.map(s => (
          <div key={s.k} style={{
            width: `${pct(s.n)}%`, background: s.c, display: 'flex', alignItems: 'center', justifyContent: 'center',
            font: 'var(--type-body)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)',
            color: 'var(--verdict-fg-on-fill)', transition: 'var(--transition-verdict)', overflow: 'hidden',
          }}>{s.n ? `${pct(s.n)}%` : ''}</div>
        ))}
      </div>
      {showLegend && (
        <div style={{ display: 'flex', gap: 'var(--space-9)', marginTop: 'var(--space-5)', font: 'var(--type-small)', color: 'var(--text-secondary)' }}>
          {segs.map(s => (
            <span key={s.k} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.c }} />
              {s.label} <span style={{ font: 'var(--type-data)', color: 'var(--text-faint)' }}>{s.n}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
