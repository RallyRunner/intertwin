import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase mono label above a section. The mono eyebrow is the only
 *  uppercase in the system — everything else is sentence case. */
export interface SectionTitleProps {
  /** Usually a <LiveDot/>. */
  icon?: ReactNode;
  /** Right-aligned control (link, button). */
  action?: ReactNode;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function SectionTitle({
  icon,
  action,
  className,
  style,
  children,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-2.5 flex items-center gap-2 font-mono text-2xs font-semibold uppercase tracking-caps text-text-secondary",
        className,
      )}
      style={style}
    >
      {icon}
      <span>{children}</span>
      {action ? <span className="ml-auto">{action}</span> : null}
    </div>
  );
}
