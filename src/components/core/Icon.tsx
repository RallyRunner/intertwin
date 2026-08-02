"use client";

import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Thin wrapper around the Lucide icon set. The source materials shipped no
 * icon assets — Lucide at 1.75 stroke is the documented substitution.
 *
 * The design system loaded Lucide from a CDN and hydrated it by hand; here it
 * comes from the `lucide-react` package instead, keeping the same kebab-case
 * `name` contract. Icons carry `currentColor` only, so they inherit verdict and
 * state colours correctly.
 */
export interface IconProps {
  /** Lucide icon name, kebab-case. */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  color = "currentColor",
  className,
  style,
}: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0", className)}
      style={{ width: size, height: size, ...style }}
    >
      <DynamicIcon
        name={name as IconName}
        size={size}
        strokeWidth={strokeWidth}
        color={color}
      />
    </span>
  );
}
