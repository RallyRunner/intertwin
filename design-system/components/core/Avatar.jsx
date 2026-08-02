import React from 'react';

export function Avatar({ name, color = 'var(--persona-4)', size = 38, src, style }) {
  const initials = (name || '?').trim().slice(0, 2).toUpperCase();
  return (
    <div title={name} style={{
      width: size, height: size, borderRadius: 'var(--radius-circle)', flex: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: src ? `center/cover url(${src})` : color, color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)',
      fontSize: Math.round(size * 0.34), letterSpacing: '.01em', ...style,
    }}>{src ? '' : initials}</div>
  );
}
