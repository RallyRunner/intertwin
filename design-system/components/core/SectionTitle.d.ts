import * as React from 'react';

/** Small uppercase mono label above a dashboard section. */
export interface SectionTitleProps {
  /** Usually a <LiveDot/>. */
  icon?: React.ReactNode;
  /** Right-aligned control (link, button). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function SectionTitle(props: SectionTitleProps): JSX.Element;
