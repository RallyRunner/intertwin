import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type Verdict = "buy" | "fence" | "pass";

/**
 * The three-state purchase-intent badge. This triad is the visual grammar of
 * the whole product: teal = would buy, gold = on the fence, coral = would not
 * buy. Never remap it.
 */
export interface VerdictBadgeProps {
  verdict?: Verdict;
  /** Adds an iris dot + ring when this persona changed in the latest re-run. */
  moved?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const VERDICT_META: Record<
  Verdict,
  { label: string; text: string; bg: string; fill: string }
> = {
  buy: {
    label: "Would buy",
    text: "text-verdict-buy",
    bg: "bg-verdict-buy-bg",
    fill: "bg-verdict-buy",
  },
  fence: {
    label: "On the fence",
    text: "text-verdict-fence",
    bg: "bg-verdict-fence-bg",
    fill: "bg-verdict-fence",
  },
  pass: {
    label: "Would not buy",
    text: "text-verdict-pass",
    bg: "bg-verdict-pass-bg",
    fill: "bg-verdict-pass",
  },
};

export function VerdictBadge({
  verdict = "fence",
  moved = false,
  className,
  style,
}: VerdictBadgeProps) {
  const meta = VERDICT_META[verdict];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill px-[9px] py-[3px] font-sans text-2xs font-bold transition-[box-shadow] duration-[var(--dur-fast)] ease-[ease]",
        meta.bg,
        meta.text,
        moved && "shadow-glow-moved",
        className,
      )}
      style={style}
    >
      {moved && (
        <span className="h-[5px] w-[5px] rounded-circle bg-signal-moved" />
      )}
      {meta.label}
    </span>
  );
}
