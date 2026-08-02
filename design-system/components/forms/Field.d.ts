import * as React from 'react';

/** Label + control + hint wrapper. The optional right-aligned `value` is the live readout for sliders. */
export interface FieldProps {
  label?: string;
  /** Live value shown right-aligned in gold mono (price readout pattern). */
  value?: string | number;
  hint?: string;
  htmlFor?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
