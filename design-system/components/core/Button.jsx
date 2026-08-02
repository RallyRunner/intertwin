import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
  font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', border: '1px solid transparent',
  borderRadius: 'var(--radius-md)', cursor: 'pointer', whiteSpace: 'nowrap',
  transition: 'var(--transition-hover)', textDecoration: 'none',
};

const sizes = {
  sm: { padding: '7px 12px', fontSize: 'var(--text-xs)' },
  md: { padding: '10px 18px', fontSize: 'var(--text-base)' },
  lg: { padding: '14px 26px', fontSize: 'var(--text-md)' },
};

const variants = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' },
  accent: { background: 'var(--action-accent-bg)', color: 'var(--action-accent-fg)' },
  secondary: { background: 'var(--action-secondary-bg)', color: 'var(--action-secondary-fg)', borderColor: 'var(--border-hairline)' },
  ghost: { background: 'transparent', color: 'var(--action-ghost-fg)' },
  outline: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
};

const hovers = {
  primary: { background: 'var(--action-primary-bg-hover)' },
  accent: { background: 'var(--iris-300)' },
  secondary: { background: 'var(--action-secondary-bg-hover)', borderColor: 'var(--border-strong)' },
  ghost: { color: 'var(--text-primary)' },
  outline: { borderColor: 'var(--border-accent)', color: 'var(--text-primary)' },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, full = false, as = 'button', href, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : as;
  const s = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? { transform: 'var(--press-nudge)' } : null),
    ...(full ? { width: '100%' } : null),
    ...(disabled ? { background: 'var(--action-disabled-bg)', color: 'var(--action-disabled-fg)', borderColor: 'transparent', cursor: 'not-allowed' } : null),
    ...style,
  };
  return (
    <Tag href={href} style={s} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}>
      {children}
    </Tag>
  );
}
