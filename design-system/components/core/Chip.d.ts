import * as React from 'react';

/** Pill for product attributes, persona tags, appeals and objections. */
export interface ChipProps {
  /** `objection` = coral, `appeal` = teal, `caution` = gold — these follow verdict semantics. */
  tone?: 'neutral' | 'objection' | 'appeal' | 'caution' | 'accent';
  /** Clickable chip (quick questions, filters). */
  interactive?: boolean;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
