import * as React from 'react';

/** Square icon-only button. Always pass `label` — it becomes the accessible name and the tooltip. */
export interface IconButtonProps {
  /** Lucide icon name, kebab-case (e.g. "refresh-cw"). */
  name: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'secondary' | 'ghost' | 'outline';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
