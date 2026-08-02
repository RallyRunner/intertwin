"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Primary action control. Bone-filled `primary` is the house CTA — coral is
 * reserved for the "would not buy" verdict and must never be a button fill.
 */
export interface ButtonProps {
  /** Visual weight. `primary` = bone fill; `accent` = iris fill; use sparingly. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Stretch to the container width. */
  full?: boolean;
  /** Render as an anchor. */
  href?: string;
  as?: "button" | "a" | "div";
  onClick?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center gap-inline rounded-md border font-sans font-bold whitespace-nowrap no-underline transition-[background-color,border-color,color,transform] duration-[var(--dur-fast)] ease-[ease]";

const SIZES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-[7px] text-xs",
  md: "px-4.5 py-2.5 text-base",
  lg: "px-6.5 py-3.5 text-md",
};

/** Fill + hover per variant. Press is the shared 1px nudge, never a scale. */
const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-transparent bg-action-primary-bg text-action-primary-fg hover:bg-action-primary-bg-hover",
  accent:
    "border-transparent bg-action-accent-bg text-action-accent-fg hover:bg-iris-300",
  secondary:
    "border-border-hairline bg-action-secondary-bg text-action-secondary-fg hover:border-border-strong hover:bg-action-secondary-bg-hover",
  ghost:
    "border-transparent bg-transparent text-action-ghost-fg hover:text-text-primary",
  outline:
    "border-border-strong bg-transparent text-text-primary hover:border-border-accent",
};

/** Raised fill, faint text, not-allowed. Never a low-opacity ghost. */
const DISABLED =
  "border-transparent bg-action-disabled-bg text-action-disabled-fg cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  full = false,
  as = "button",
  href,
  className,
  style,
  children,
  ...rest
}: ButtonProps) {
  const Tag = href ? "a" : as;
  const classes = cn(
    BASE,
    SIZES[size],
    disabled ? DISABLED : cn(VARIANTS[variant], "cursor-pointer active:translate-y-px"),
    full && "w-full",
    className,
  );

  if (Tag === "a") {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (Tag === "div") {
    return (
      <div className={classes} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <button type="button" disabled={disabled} className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
