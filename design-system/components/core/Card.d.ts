import * as React from 'react';

/** Bordered plum surface. Elevation on dark comes from the surface step + hairline, not shadow. */
export interface CardProps {
  surface?: 'panel' | 'card' | 'raised' | 'glass';
  pad?: 'none' | 'card' | 'panel' | 'lg';
  radius?: 'lg' | 'xl' | '2xl' | '3xl';
  /** Lift + iris border on hover. */
  hoverable?: boolean;
  /** Persistent iris ring — use to mark "this moved in the last re-run". */
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
