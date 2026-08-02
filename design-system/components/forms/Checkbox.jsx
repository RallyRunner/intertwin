import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ checked = false, onChange, label, disabled, style }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      font: 'var(--type-small)', color: 'var(--text-primary)', ...style,
    }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 18, height: 18, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-xs)', transition: 'var(--transition-hover)',
          background: checked ? 'var(--iris-500)' : 'var(--surface-raised)',
          border: `1px solid ${checked ? 'var(--iris-500)' : 'var(--border-hairline)'}`,
          color: 'var(--text-inverse)',
        }}>{checked ? <Icon name="check" size={12} strokeWidth={3} /> : null}</span>
      {label}
    </label>
  );
}
