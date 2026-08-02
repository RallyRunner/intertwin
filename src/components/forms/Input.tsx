"use client";

import type {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

/** Text input on a raised plum surface. Focus is an iris hairline plus the
 *  house glow ring, carried by the wrapper via focus-within — the inner control
 *  stays chrome-free so the ring never doubles up. */
export interface InputProps {
  as?: "input" | "textarea";
  /** Leading adornment, e.g. "$". */
  prefix?: ReactNode;
  /** Trailing unit, rendered in mono, e.g. "mL". */
  suffix?: ReactNode;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: string;
  disabled?: boolean;
  rows?: number;
  /** Accessible name for a placeholder-only input, i.e. one with no Field
   *  label above it. Same escape hatch Slider ships. */
  "aria-label"?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  className?: string;
  style?: CSSProperties;
}

const CONTROL =
  "w-full flex-1 border-none bg-transparent font-sans text-base leading-normal text-text-primary outline-none placeholder:text-text-faint focus-visible:shadow-none";

export function Input({
  as = "input",
  prefix,
  suffix,
  className,
  style,
  ...rest
}: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border border-border-hairline bg-surface-raised px-3 py-2.5 transition-[border-color,box-shadow] duration-[var(--dur-fast)] ease-[ease] focus-within:border-border-focus focus-within:shadow-glow-focus",
        className,
      )}
      style={style}
    >
      {prefix && (
        <span className="font-sans text-base leading-normal text-text-secondary">
          {prefix}
        </span>
      )}
      {as === "textarea" ? (
        <textarea
          className={cn(CONTROL, "min-h-[76px] resize-y")}
          {...(rest as React.ComponentProps<"textarea">)}
        />
      ) : (
        <input className={CONTROL} {...(rest as React.ComponentProps<"input">)} />
      )}
      {suffix && (
        <span className="font-mono text-xs font-medium text-text-secondary">
          {suffix}
        </span>
      )}
    </div>
  );
}
