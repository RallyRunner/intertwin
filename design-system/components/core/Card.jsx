import React from 'react';

const surfaces = {
  panel: 'var(--surface-panel)',
  card: 'var(--surface-card)',
  raised: 'var(--surface-raised)',
  glass: 'var(--surface-glass)',
};

export function Card({ surface = 'panel', pad = 'panel', radius = '2xl', hoverable = false, active = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pads = { none: 0, card: 'var(--pad-card)', panel: 'var(--pad-panel)', lg: 'var(--pad-panel-lg)' };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: surfaces[surface], border: '1px solid var(--border-hairline)',
        borderRadius: `var(--radius-${radius})`, padding: pads[pad],
        transition: 'var(--transition-hover)',
        ...(surface === 'glass' ? { backdropFilter: 'var(--blur-glass)' } : null),
        ...(hoverable ? { cursor: 'pointer' } : null),
        ...(hoverable && hover ? { borderColor: 'var(--border-accent)', transform: 'var(--lift-hover)' } : null),
        ...(active ? { borderColor: 'var(--iris-500)', boxShadow: 'var(--glow-moved)' } : null),
        ...style,
      }} {...rest}>{children}</div>
  );
}
