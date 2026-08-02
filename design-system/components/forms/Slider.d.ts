import * as React from 'react';

/** Continuous scenario lever — price is the canonical use. Iris accent, never coral. */
export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange?: (next: number) => void;
  /** End labels in mono, e.g. "$24" / "$48". */
  minLabel?: string;
  maxLabel?: string;
  style?: React.CSSProperties;
}
export declare function Slider(props: SliderProps): JSX.Element;
