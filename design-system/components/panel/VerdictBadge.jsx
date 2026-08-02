import React from 'react';

const meta = {
  buy: { label: 'Would buy', fg: 'var(--verdict-buy)', bg: 'var(--verdict-buy-bg)', fill: 'var(--verdict-buy)' },
  fence: { label: 'On the fence', fg: 'var(--verdict-fence)', bg: 'var(--verdict-fence-bg)', fill: 'var(--verdict-fence)' },
  pass: { label: 'Would not buy', fg: 'var(--verdict-pass)', bg: 'var(--verdict-pass-bg)', fill: 'var(--verdict-pass)' },
};

export function VerdictBadge({ verdict = 'fence', moved = false, style }) {
  const m = meta[verdict];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      font: 'var(--type-body)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-bold)',
      padding: '3px 9px', borderRadius: 'var(--radius-pill)', background: m.bg, color: m.fg,
      boxShadow: moved ? 'var(--glow-moved)' : 'none', transition: 'var(--transition-hover)', ...style,
    }}>
      {moved && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--signal-moved)' }} />}
      {m.label}
    </span>
  );
}

VerdictBadge.meta = meta;
