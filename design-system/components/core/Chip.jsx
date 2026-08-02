import React from 'react';

const tones = {
  neutral: { background: 'var(--surface-raised)', color: 'var(--text-secondary)', borderColor: 'var(--border-hairline)' },
  objection: { background: 'var(--verdict-pass-bg)', color: 'var(--verdict-pass)', borderColor: '#54303e' },
  appeal: { background: 'var(--verdict-buy-bg)', color: 'var(--verdict-buy)', borderColor: '#1f5750' },
  caution: { background: 'var(--verdict-fence-bg)', color: 'var(--verdict-fence)', borderColor: '#544625' },
  accent: { background: 'var(--iris-900)', color: 'var(--iris-300)', borderColor: 'var(--iris-700)' },
};

export function Chip({ tone = 'neutral', interactive = false, selected = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', font: 'var(--type-body)',
        fontSize: 'var(--text-2xs)', padding: 'var(--pad-chip)', borderRadius: 'var(--radius-pill)',
        border: '1px solid transparent', whiteSpace: 'nowrap', transition: 'var(--transition-hover)',
        ...tones[tone],
        ...(interactive ? { cursor: 'pointer', color: 'var(--text-primary)' } : null),
        ...(interactive && hover ? { borderColor: 'var(--border-accent)' } : null),
        ...(selected ? { borderColor: 'var(--iris-500)', color: 'var(--iris-100)', background: 'var(--iris-900)' } : null),
        ...style,
      }} {...rest}>{children}</span>
  );
}
