import React from 'react';
import { Card } from '../core/Card.jsx';
import { Chip } from '../core/Chip.jsx';
import { Avatar } from '../core/Avatar.jsx';
import { VerdictBadge } from './VerdictBadge.jsx';

export function PersonaCard({ name, archetype, color, verdict = 'fence', moved = false, tags = [], quote, rationale, expanded, onToggle, style }) {
  const [local, setLocal] = React.useState(false);
  const open = expanded != null ? expanded : local;
  const toggle = () => (onToggle ? onToggle(!open) : setLocal(!open));
  return (
    <Card surface="panel" pad="card" radius="xl" hoverable active={moved} onClick={toggle} style={style}>
      <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
        <Avatar name={name} color={color} size={38} />
        <div>
          <div style={{ font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', fontSize: '13.5px' }}>{name}</div>
          <div style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>{archetype}</div>
        </div>
      </div>
      <div style={{ marginTop: 'var(--space-5)' }}><VerdictBadge verdict={verdict} moved={moved} /></div>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: '9px' }}>
          {tags.map(t => <Chip key={t}>{t}</Chip>)}
        </div>
      )}
      {quote && <div style={{ font: 'var(--type-quote)', color: 'var(--text-primary)', marginTop: 'var(--space-5)', opacity: .9 }}>&ldquo;{quote}&rdquo;</div>}
      {rationale && (
        <div style={{
          font: 'var(--type-xs)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-sans)', lineHeight: 'var(--leading-relaxed)',
          color: 'var(--text-secondary)', marginTop: 'var(--space-5)', borderTop: '1px dashed var(--border-hairline)',
          maxHeight: open ? 260 : 0, paddingTop: open ? 'var(--space-4)' : 0, overflow: 'hidden',
          transition: 'max-height var(--dur-medium) ease, padding-top var(--dur-medium) ease',
        }}>{rationale}</div>
      )}
      <div style={{ font: 'var(--type-caption)', fontSize: 'var(--text-3xs)', color: 'var(--text-faint)', marginTop: 'var(--space-4)', textAlign: 'right' }}>
        {open ? 'collapse ▴' : 'full rationale ▾'}
      </div>
    </Card>
  );
}
