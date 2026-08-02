import React from 'react';

export function LiveDot({ size = 7, color = 'var(--signal-live)', animated = true, style }) {
  return <span style={{
    width: size, height: size, borderRadius: 'var(--radius-circle)', background: color, flex: 'none',
    display: 'inline-block', boxShadow: 'var(--glow-live)',
    animation: animated ? 'it-pulse 2s infinite' : 'none', ...style,
  }} />;
}
