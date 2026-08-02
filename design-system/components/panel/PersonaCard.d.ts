import * as React from 'react';

/**
 * One panellist's reaction: identity, verdict, tags, synthesized quote, expandable rationale.
 * Persona identity is the credibility mechanism — never render a reaction without name,
 * archetype and the persona's fixed avatar colour.
 */
export interface PersonaCardProps {
  name: string;
  /** Short archetype label, e.g. "Ingredient Researcher". */
  archetype: string;
  /** The persona's fixed colour (--persona-1..8). */
  color?: string;
  verdict?: 'buy' | 'fence' | 'pass';
  /** True when this persona changed verdict in the latest re-run. */
  moved?: boolean;
  tags?: string[];
  /** Synthesized first-person line — never a verbatim real review. */
  quote?: string;
  /** Full reasoning, revealed on expand. */
  rationale?: string;
  /** Controlled expansion; omit for self-managed. */
  expanded?: boolean;
  onToggle?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export declare function PersonaCard(props: PersonaCardProps): JSX.Element;
