import React from 'react';

export function Input({ as = 'input', prefix, suffix, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  const inner = (
    <Tag onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        flex: 1, width: '100%', background: 'transparent', border: 'none', outline: 'none',
        color: 'var(--text-primary)', font: 'var(--type-body)', resize: as === 'textarea' ? 'vertical' : undefined,
        minHeight: as === 'textarea' ? 76 : undefined,
      }} {...rest} />
  );
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--pad-control)',
      background: 'var(--surface-raised)', border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-md)', boxShadow: focus ? 'var(--glow-focus)' : 'none',
      transition: 'var(--transition-hover)', ...style,
    }}>
      {prefix && <span style={{ color: 'var(--text-secondary)', font: 'var(--type-body)' }}>{prefix}</span>}
      {inner}
      {suffix && <span style={{ color: 'var(--text-secondary)', font: 'var(--type-data)' }}>{suffix}</span>}
    </div>
  );
}
