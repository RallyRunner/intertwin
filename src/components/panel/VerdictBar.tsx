import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { VERDICT_META, type Verdict } from "./VerdictBadge";

/**
 * Stacked aggregate purchase-intent bar. Segments animate their width over
 * 500ms on the house curve — the animation is load-bearing, it is how a re-run
 * reads as real. Widths animate and never snap.
 */
export interface VerdictBarProps {
  /** Persona counts, not percentages — the component derives the split. */
  buy?: number;
  fence?: number;
  pass?: number;
  height?: number;
  showLegend?: boolean;
  className?: string;
  style?: CSSProperties;
}

const ORDER: Verdict[] = ["buy", "fence", "pass"];

export function VerdictBar({
  buy = 0,
  fence = 0,
  pass = 0,
  height = 34,
  showLegend = true,
  className,
  style,
}: VerdictBarProps) {
  const counts: Record<Verdict, number> = { buy, fence, pass };
  const total = Math.max(buy + fence + pass, 1);
  const pct = (n: number) => Math.round((n / total) * 100);

  return (
    <div className={className} style={style}>
      <div
        className="flex overflow-hidden rounded-md border border-border-hairline bg-surface-raised"
        style={{ height }}
      >
        {ORDER.map((key) => (
          <div
            key={key}
            className={cn(
              "flex items-center justify-center overflow-hidden font-sans text-xs font-bold text-verdict-fg-on-fill transition-[width] duration-[var(--dur-slow)] ease-standard",
              VERDICT_META[key].fill,
            )}
            style={{ width: `${pct(counts[key])}%` }}
          >
            {counts[key] ? `${pct(counts[key])}%` : ""}
          </div>
        ))}
      </div>

      {showLegend && (
        <div className="mt-2.5 flex gap-4.5 font-sans text-sm leading-normal text-text-secondary">
          {ORDER.map((key) => (
            <span key={key} className="inline-flex items-center gap-1.5">
              <span
                className={cn(
                  "h-2 w-2 rounded-circle",
                  VERDICT_META[key].fill,
                )}
              />
              {VERDICT_META[key].label}{" "}
              <span className="font-mono text-xs font-medium text-text-faint">
                {counts[key]}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
