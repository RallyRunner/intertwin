import * as React from 'react';

/**
 * Thin wrapper around the Lucide icon set (CDN). The source materials shipped no
 * icon assets — Lucide at 1.75 stroke is the documented substitution.
 */
export interface IconProps {
  /** Lucide icon name, kebab-case. */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
