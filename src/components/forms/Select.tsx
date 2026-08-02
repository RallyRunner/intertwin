"use client";

import type { ChangeEvent, CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "../core/Icon";

/** Native select with the house chrome. Screen A is a form of fixed
 *  enumerations (category, format, evidence type, channel). */
export interface SelectProps {
  options: Array<string | { value: string; label: string }>;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  style?: CSSProperties;
}

export function Select({
  options = [],
  className,
  style,
  ...rest
}: SelectProps) {
  return (
    <div
      className={cn(
        "relative flex items-center rounded-md border border-border-hairline bg-surface-raised transition-[border-color,box-shadow] duration-[var(--dur-fast)] ease-[ease] focus-within:border-border-focus focus-within:shadow-glow-focus",
        className,
      )}
      style={style}
    >
      <select
        className="flex-1 cursor-pointer appearance-none border-none bg-transparent py-2.5 pl-3 pr-8 font-sans text-base leading-normal text-text-primary outline-none focus-visible:shadow-none"
        {...rest}
      >
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return (
            <option key={value} value={value} className="bg-surface-card">
              {label}
            </option>
          );
        })}
      </select>
      <span className="pointer-events-none absolute right-2.5 text-text-secondary">
        <Icon name="chevron-down" size={14} />
      </span>
    </div>
  );
}
