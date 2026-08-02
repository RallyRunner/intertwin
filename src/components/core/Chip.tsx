"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Pill for product attributes, persona tags, appeals and objections.
 *  Icons never appear inside chips. */
export interface ChipProps {
  /** `objection` = coral, `appeal` = teal, `caution` = gold — these follow
   *  verdict semantics and are never remapped. */
  tone?: "neutral" | "objection" | "appeal" | "caution" | "accent";
  /** Clickable chip (quick questions, filters). */
  interactive?: boolean;
  selected?: boolean;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type ToneSpec = { bg: string; text: string; border: string };

const TONES: Record<NonNullable<ChipProps["tone"]>, ToneSpec> = {
  neutral: {
    bg: "bg-surface-raised",
    text: "text-text-secondary",
    border: "border-border-hairline",
  },
  objection: {
    bg: "bg-verdict-pass-bg",
    text: "text-verdict-pass",
    border: "border-verdict-pass-border",
  },
  appeal: {
    bg: "bg-verdict-buy-bg",
    text: "text-verdict-buy",
    border: "border-verdict-buy-border",
  },
  caution: {
    bg: "bg-verdict-fence-bg",
    text: "text-verdict-fence",
    border: "border-verdict-fence-border",
  },
  accent: { bg: "bg-iris-900", text: "text-iris-300", border: "border-iris-700" },
};

export function Chip({
  tone = "neutral",
  interactive = false,
  selected = false,
  className,
  style,
  children,
  ...rest
}: ChipProps) {
  const spec = TONES[tone];
  // Selected wins over the tone, and an interactive chip lifts its label to
  // primary text. Resolved here so no two classes fight over one property.
  const bg = selected ? "bg-iris-900" : spec.bg;
  const border = selected ? "border-iris-500" : spec.border;
  const text = selected
    ? "text-iris-100"
    : interactive
      ? "text-text-primary"
      : spec.text;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-pill border px-2.5 py-1 font-sans text-2xs transition-[background-color,border-color,color] duration-[var(--dur-fast)] ease-[ease]",
        bg,
        border,
        text,
        interactive && "cursor-pointer hover:border-border-accent",
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </span>
  );
}
