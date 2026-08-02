import React from 'react';

export function Field({ label, hint, value, htmlFor, style, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }}>
      {(label || value) && (
        <label htmlFor={htmlFor} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-4)',
          font: 'var(--type-body)', color: 'var(--text-primary)',
        }}>
          <span>{label}</span>
          {value != null && <b style={{ font: 'var(--type-data)', fontSize: 'var(--text-base)', color: 'var(--verdict-fence)' }}>{value}</b>}
        </label>
      )}
      {children}
      {hint && <div style={{ font: 'var(--type-caption)', color: 'var(--text-faint)' }}>{hint}</div>}
    </div>
  );
}
