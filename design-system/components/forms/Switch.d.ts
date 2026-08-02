import * as React from 'react';

/** Scenario lever. On = teal, because switching a lever on is what moves the panel toward "would buy". */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Renders as a full label + switch row with the house 9px vertical rhythm. */
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
