import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { Avatar } from "../core/Avatar";

/** One turn in the panel discussion thread. Persona replies carry the avatar
 *  and name so voice stays attributable — the product never speaks in the
 *  first person, only personas do. */
export interface ChatMessageProps {
  /** Persona name, or omitted for the user's own message. */
  from?: string;
  color?: string;
  text?: string;
  /** The user's own message — bone bubble, right aligned. */
  self?: boolean;
  /** Renders the "<name> is typing…" placeholder instead of a bubble. */
  typing?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function ChatMessage({
  from,
  color,
  text,
  self = false,
  typing = false,
  className,
  style,
}: ChatMessageProps) {
  if (typing) {
    return (
      <div
        className={cn(
          "pl-9 font-sans text-2xs italic leading-relaxed text-text-secondary",
          className,
        )}
        style={style}
      >
        {from} is typing…
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex max-w-[80%] gap-2.5",
        self ? "flex-row-reverse self-end" : "flex-row self-start",
        className,
      )}
      style={style}
    >
      {!self && <Avatar name={from ?? "?"} color={color} size={26} />}
      <div>
        {!self && (
          <div className="mb-[3px] font-sans text-3xs leading-normal text-text-secondary">
            {from}
          </div>
        )}
        <div
          className={cn(
            "rounded-lg border px-[13px] py-[9px] font-sans text-sm leading-normal",
            self
              ? "border-transparent bg-action-primary-bg font-semibold text-action-primary-fg"
              : "border-border-hairline bg-surface-card font-normal text-text-primary",
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
