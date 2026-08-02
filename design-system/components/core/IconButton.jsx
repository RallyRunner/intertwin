import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ name, label, size = 'md', variant = 'secondary', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const fills = {
    secondary: { background: 'var(--action-secondary-bg)', borderColor: 'var(--border-hairline)' },
    ghost: { background: 'transparent', borderColor: 'transparent' },
    outline: { background: 'transparent', borderColor: 'var(--border-strong)' },
  };
  return (
    <button aria-label={label} title={label} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: px, height: px, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)', border: '1px solid transparent', cursor: 'pointer',
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)', transition: 'var(--transition-hover)',
        ...fills[variant], ...(hover ? { borderColor: 'var(--border-accent)' } : null), ...style,
      }} {...rest}>
      <Icon name={name} size={size === 'lg' ? 20 : 16} />
    </button>
  );
}
