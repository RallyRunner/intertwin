import * as React from 'react';

/** Titled chip cluster for "top appeals" / "top objections" — the derived read on a run. */
export interface SignalBoxProps {
  title: string;
  items?: string[];
  /** `appeal` for the appeals box, `objection` for the objections box. */
  tone?: 'neutral' | 'appeal' | 'objection' | 'caution';
  empty?: string;
  style?: React.CSSProperties;
}
export declare function SignalBox(props: SignalBoxProps): JSX.Element;
