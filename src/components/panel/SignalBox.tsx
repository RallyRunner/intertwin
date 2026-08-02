import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { Card } from "../core/Card";
import { Chip } from "../core/Chip";

/** Titled chip cluster for "top appeals" / "top objections" — the derived read
 *  on a run. */
export interface SignalBoxProps {
  title: string;
  items?: string[];
  /** `appeal` for the appeals box, `objection` for the objections box. */
  tone?: "neutral" | "appeal" | "objection" | "caution";
  empty?: string;
  className?: string;
  style?: CSSProperties;
}

export function SignalBox({
  title,
  items = [],
  tone = "neutral",
  empty = "None right now",
  className,
  style,
}: SignalBoxProps) {
  return (
    <Card
      surface="card"
      pad="none"
      radius="lg"
      className={cn("px-3.5 py-3", className)}
      style={style}
    >
      <h4 className="mb-2 font-sans text-xs font-semibold leading-normal text-text-secondary">
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {items.length ? (
          items.map((item) => (
            <Chip key={item} tone={tone}>
              {item}
            </Chip>
          ))
        ) : (
          <span className="font-sans text-2xs leading-normal text-text-faint">
            {empty}
          </span>
        )}
      </div>
    </Card>
  );
}
