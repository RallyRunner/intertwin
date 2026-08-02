import * as React from 'react';

/** Text input on a raised plum surface. Focus = iris hairline + iris glow ring. */
export interface InputProps {
  as?: 'input' | 'textarea';
  /** Leading adornment, e.g. "$". */
  prefix?: React.ReactNode;
  /** Trailing unit, rendered in mono, e.g. "mL". */
  suffix?: React.ReactNode;
  placeholder?: string;
  value?: string | number;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
