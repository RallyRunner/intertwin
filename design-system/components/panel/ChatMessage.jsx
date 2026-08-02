import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

export function ChatMessage({ from, color, text, self = false, typing = false, style }) {
  if (typing) {
    return <div style={{ font: 'var(--type-quote)', fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)', paddingLeft: 36, ...style }}>{from} is typing…</div>;
  }
  return (
    <div style={{
      display: 'flex', gap: 'var(--space-5)', maxWidth: '80%',
      alignSelf: self ? 'flex-end' : 'flex-start', flexDirection: self ? 'row-reverse' : 'row', ...style,
    }}>
      {!self && <Avatar name={from} color={color} size={26} />}
      <div>
        {!self && <div style={{ font: 'var(--type-caption)', fontSize: 'var(--text-3xs)', color: 'var(--text-secondary)', marginBottom: 3 }}>{from}</div>}
        <div style={{
          borderRadius: 'var(--radius-lg)', padding: '9px 13px', font: 'var(--type-small)',
          background: self ? 'var(--action-primary-bg)' : 'var(--surface-card)',
          color: self ? 'var(--action-primary-fg)' : 'var(--text-primary)',
          border: `1px solid ${self ? 'transparent' : 'var(--border-hairline)'}`,
          fontWeight: self ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        }}>{text}</div>
      </div>
    </div>
  );
}
