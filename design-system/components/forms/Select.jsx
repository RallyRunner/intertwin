import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{
      position: 'relative', display: 'flex', alignItems: 'center',
      background: 'var(--surface-raised)', border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-md)', boxShadow: focus ? 'var(--glow-focus)' : 'none',
      transition: 'var(--transition-hover)', ...style,
    }}>
      <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          appearance: 'none', flex: 1, background: 'transparent', border: 'none', outline: 'none',
          color: 'var(--text-primary)', font: 'var(--type-body)', padding: 'var(--pad-control)', paddingRight: 32, cursor: 'pointer',
        }} {...rest}>
        {options.map(o => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return <option key={v} value={v} style={{ background: 'var(--surface-card)' }}>{l}</option>;
        })}
      </select>
      <span style={{ position: 'absolute', right: 10, pointerEvents: 'none', color: 'var(--text-secondary)' }}>
        <Icon name="chevron-down" size={14} />
      </span>
    </div>
  );
}
