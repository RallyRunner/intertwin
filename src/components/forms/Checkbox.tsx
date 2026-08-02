"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "../core/Icon";

/** Selection control for the panel-selection grid (which personas run).
 *  Iris fill when checked — selection is an iris moment, like focus. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled,
  className,
  style,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 font-sans text-sm leading-normal text-text-primary",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      )}
      style={style}
    >
      {/* A real checkbox carries the state and the keyboard affordance; the
          span below is the visible box. */}
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span
        className={cn(
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-xs border text-text-inverse transition-[background-color,border-color] duration-[var(--dur-fast)] ease-[ease] peer-focus-visible:shadow-glow-focus",
          checked
            ? "border-iris-500 bg-iris-500"
            : "border-border-hairline bg-surface-raised",
        )}
      >
        {checked ? <Icon name="check" size={12} strokeWidth={3} /> : null}
      </span>
      {label}
    </label>
  );
}
