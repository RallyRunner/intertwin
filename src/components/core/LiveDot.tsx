import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** Pulsing teal dot marking a live / just-recalculated region. This is the one
 *  pulse in the system; it collapses under prefers-reduced-motion. */
export interface LiveDotProps {
  size?: number;
  color?: string;
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function LiveDot({
  size = 7,
  color = "var(--color-signal-live)",
  animated = true,
  className,
  style,
}: LiveDotProps) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-circle shadow-glow-live motion-reduce:animate-none",
        animated && "animate-pulse-live",
        className,
      )}
      style={{ width: size, height: size, background: color, ...style }}
    />
  );
}
