import * as React from 'react';

/**
 * Stacked aggregate purchase-intent bar. Segments animate their width over 500ms on the
 * house curve — the animation is load-bearing, it is how a re-run reads as real.
 * @startingPoint section="Panel" subtitle="Verdict bar, badges, persona cards and chat" viewport="700x300"
 */
export interface VerdictBarProps {
  /** Persona counts, not percentages — the component derives the split. */
  buy?: number;
  fence?: number;
  pass?: number;
  height?: number;
  showLegend?: boolean;
  style?: React.CSSProperties;
}
export declare function VerdictBar(props: VerdictBarProps): JSX.Element;
