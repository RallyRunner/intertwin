"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** Scenario lever. On = teal, because switching a lever on is what moves the
 *  panel toward "would buy". */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Renders as a full label + switch row with the house 9px vertical rhythm. */
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  className,
  style,
}: SwitchProps) {
  const track = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={cn(
        "relative h-5 w-9 shrink-0 rounded-pill border transition-[background-color,border-color] duration-[var(--dur-fast)] ease-[ease]",
        checked
          ? "border-verdict-buy bg-verdict-buy-bg"
          : "border-border-hairline bg-surface-raised",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 block h-3.5 w-3.5 rounded-circle transition-[left,background-color] duration-[var(--dur-fast)] ease-[ease]",
          checked ? "left-[18px] bg-verdict-buy" : "left-0.5 bg-text-secondary",
        )}
      />
    </button>
  );

  if (!label) {
    return (
      <div className={className} style={style}>
        {track}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2.5 py-[9px] font-sans text-sm leading-normal text-text-primary",
        className,
      )}
      style={style}
    >
      <span>{label}</span>
      {track}
    </div>
  );
}
