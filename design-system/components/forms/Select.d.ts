import * as React from 'react';

/** Native select with the house chrome. Used across the product-input form. */
export interface SelectProps {
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
