"use client";

import type { CSSProperties, MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

/** Square icon-only button. Always pass `label` — it becomes the accessible
 *  name and the tooltip. This is the one place an icon appears without a
 *  visible label. */
export interface IconButtonProps {
  /** Lucide icon name, kebab-case (e.g. "refresh-cw"). */
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "secondary" | "ghost" | "outline";
  onClick?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
}

const BOX: Record<NonNullable<IconButtonProps["size"]>, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-11 w-11",
};

const VARIANTS: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  secondary: "border-border-hairline bg-action-secondary-bg",
  ghost: "border-transparent bg-transparent",
  outline: "border-border-strong bg-transparent",
};

export function IconButton({
  name,
  label,
  size = "md",
  variant = "secondary",
  className,
  style,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-md border text-text-secondary transition-[background-color,border-color,color] duration-[var(--dur-fast)] ease-[ease] hover:border-border-accent hover:text-text-primary",
        BOX[size],
        VARIANTS[variant],
        className,
      )}
      style={style}
      {...rest}
    >
      <Icon name={name} size={size === "lg" ? 20 : 16} />
    </button>
  );
}
