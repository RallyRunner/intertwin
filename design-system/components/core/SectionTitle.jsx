import React from 'react';

export function SectionTitle({ icon, action, style, children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-secondary)', ...style,
    }}>
      {icon}
      <span>{children}</span>
      {action ? <span style={{ marginLeft: 'auto' }}>{action}</span> : null}
    </div>
  );
}
