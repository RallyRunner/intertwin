import * as React from 'react';

/**
 * Primary action control. Bone-filled `primary` is the house CTA — coral is
 * reserved for the "would not buy" verdict and must never be a button fill.
 * @startingPoint section="Core" subtitle="Buttons, chips, avatars and live indicators" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual weight. `primary` = bone fill; `accent` = iris fill; use sparingly. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Stretch to the container width. */
  full?: boolean;
  /** Render as an anchor. */
  href?: string;
  as?: 'button' | 'a' | 'div';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
