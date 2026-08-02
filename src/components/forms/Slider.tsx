"use client";

import type { CSSProperties } from "react";

/** Continuous scenario lever — price is the canonical use. Iris accent, never
 *  coral: coral means "would not buy" and nothing else. */
export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange?: (next: number) => void;
  /** End labels in mono, e.g. "$24" / "$48". */
  minLabel?: string;
  maxLabel?: string;
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
  style?: CSSProperties;
}

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  minLabel,
  maxLabel,
  disabled,
  className,
  style,
  ...rest
}: SliderProps) {
  return (
    <div className={className} style={style}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full cursor-pointer accent-iris-500"
        {...rest}
      />
      {(minLabel || maxLabel) && (
        <div className="mt-1 flex justify-between font-mono text-3xs font-medium text-text-secondary">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
    </div>
  );
}
