import * as React from 'react';

/** Pulsing teal dot marking a live / just-recalculated region. */
export interface LiveDotProps {
  size?: number;
  color?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}
export declare function LiveDot(props: LiveDotProps): JSX.Element;
