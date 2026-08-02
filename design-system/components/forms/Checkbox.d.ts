import * as React from 'react';

/** Selection control for the panel-selection grid (which personas run). Iris fill when checked. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
