import React from 'react';

export function Slider({ min = 0, max = 100, step = 1, value, onChange, minLabel, maxLabel, style }) {
  return (
    <div style={style}>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange && onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--iris-500)', cursor: 'pointer' }} />
      {(minLabel || maxLabel) && (
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-2)',
          font: 'var(--type-data)', fontSize: 'var(--text-3xs)', color: 'var(--text-secondary)',
        }}><span>{minLabel}</span><span>{maxLabel}</span></div>
      )}
    </div>
  );
}
