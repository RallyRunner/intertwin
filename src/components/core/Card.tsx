"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Bordered plum surface. Elevation on dark comes from the surface step plus
 *  the hairline, not from shadow. Nesting steps exactly one surface level at a
 *  time; two cards of the same surface never stack. */
export interface CardProps {
  surface?: "panel" | "card" | "raised" | "glass";
  pad?: "none" | "card" | "panel" | "lg";
  radius?: "lg" | "xl" | "2xl" | "3xl";
  /** Lift + iris border on hover. */
  hoverable?: boolean;
  /** Persistent iris ring — use to mark "this moved in the last re-run". */
  active?: boolean;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const SURFACES: Record<NonNullable<CardProps["surface"]>, string> = {
  panel: "bg-surface-panel",
  card: "bg-surface-card",
  raised: "bg-surface-raised",
  glass: "bg-surface-glass backdrop-blur-glass",
};

const PADS: Record<NonNullable<CardProps["pad"]>, string> = {
  none: "",
  card: "p-3.5", // --pad-card: 14px
  panel: "p-4.5", // --pad-panel: 18px
  lg: "p-5", // --pad-panel-lg: 20px
};

const RADII: Record<NonNullable<CardProps["radius"]>, string> = {
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export function Card({
  surface = "panel",
  pad = "panel",
  radius = "2xl",
  hoverable = false,
  active = false,
  className,
  style,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "border transition-[background-color,border-color,transform] duration-[var(--dur-fast)] ease-[ease]",
        SURFACES[surface],
        PADS[pad],
        RADII[radius],
        active ? "border-iris-500 shadow-glow-moved" : "border-border-hairline",
        hoverable &&
          "cursor-pointer hover:-translate-y-0.5 hover:border-border-accent motion-reduce:hover:translate-y-0",
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
