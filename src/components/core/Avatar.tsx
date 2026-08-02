import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** Persona identity mark. There is no photography in this system — the personas
 *  are the imagery, and identity is carried by initials on a fixed per-persona
 *  colour. That colour must stay stable everywhere the persona appears. */
export interface AvatarProps {
  name: string;
  /** One of the --color-persona-1..8 tokens. Fixed per persona across cards,
   *  chat and diff views. */
  color?: string;
  size?: number;
  src?: string;
  className?: string;
  style?: CSSProperties;
}

export function Avatar({
  name,
  color = "var(--color-persona-4)",
  size = 38,
  src,
  className,
  style,
}: AvatarProps) {
  const initials = (name || "?").trim().slice(0, 2).toUpperCase();
  return (
    <div
      title={name}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-circle font-sans font-bold tracking-[.01em] text-text-inverse",
        className,
      )}
      // Size and persona colour are per-instance data, not design decisions —
      // they stay inline because no utility class can express them.
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.34),
        background: src ? `center/cover url(${src})` : color,
        ...style,
      }}
    >
      {src ? "" : initials}
    </div>
  );
}
