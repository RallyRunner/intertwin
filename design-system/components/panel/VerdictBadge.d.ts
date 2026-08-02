import * as React from 'react';

/**
 * The three-state purchase-intent badge. This triad is the visual grammar of the whole
 * product: teal = would buy, gold = on the fence, coral = would not buy. Never remap it.
 */
export interface VerdictBadgeProps {
  verdict?: 'buy' | 'fence' | 'pass';
  /** Adds an iris dot + ring when this persona changed in the latest re-run. */
  moved?: boolean;
  style?: React.CSSProperties;
}
export declare function VerdictBadge(props: VerdictBadgeProps): JSX.Element;
