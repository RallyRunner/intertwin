import React from 'react';
import { Card } from '../core/Card.jsx';
import { Chip } from '../core/Chip.jsx';

export function SignalBox({ title, items = [], tone = 'neutral', empty = 'None right now', style }) {
  return (
    <Card surface="card" pad="card" radius="lg" style={{ padding: '12px 14px', ...style }}>
      <h4 style={{ margin: '0 0 var(--space-4)', font: 'var(--type-caption)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-secondary)' }}>{title}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        {items.length ? items.map(i => <Chip key={i} tone={tone}>{i}</Chip>)
          : <span style={{ font: 'var(--type-caption)', color: 'var(--text-faint)' }}>{empty}</span>}
      </div>
    </Card>
  );
}
