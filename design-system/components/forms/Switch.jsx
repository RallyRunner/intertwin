import React from 'react';

export function Switch({ checked = false, onChange, label, disabled, style }) {
  const row = (
    <div onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 36, height: 20, borderRadius: 'var(--radius-pill)', position: 'relative', flex: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        background: checked ? 'var(--verdict-buy-bg)' : 'var(--surface-raised)',
        border: `1px solid ${checked ? 'var(--verdict-buy)' : 'var(--border-hairline)'}`,
        transition: 'var(--transition-hover)',
      }}>
      <div style={{
        position: 'absolute', top: 2, left: checked ? 18 : 2, width: 14, height: 14,
        borderRadius: 'var(--radius-circle)', background: checked ? 'var(--verdict-buy)' : 'var(--text-secondary)',
        transition: 'left var(--dur-fast) ease, background var(--dur-fast) ease',
      }} />
    </div>
  );
  if (!label) return <div style={style}>{row}</div>;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)',
      padding: '9px 0', font: 'var(--type-small)', color: 'var(--text-primary)', ...style,
    }}>
      <span>{label}</span>{row}
    </div>
  );
}
