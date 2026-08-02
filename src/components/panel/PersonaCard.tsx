"use client";

import { useState, type CSSProperties } from "react";
import { Avatar } from "../core/Avatar";
import { Card } from "../core/Card";
import { Chip } from "../core/Chip";
import { VerdictBadge, type Verdict } from "./VerdictBadge";

/**
 * One panellist's reaction: identity, verdict, tags, synthesized quote,
 * expandable rationale. Persona identity is the credibility mechanism — never
 * render a reaction without name, archetype and the persona's fixed colour.
 */
export interface PersonaCardProps {
  name: string;
  /** Short archetype label, e.g. "Ingredient Researcher". */
  archetype: string;
  /** The persona's fixed colour (--color-persona-1..8). */
  color?: string;
  verdict?: Verdict;
  /** True when this persona changed verdict in the latest re-run. */
  moved?: boolean;
  tags?: string[];
  /** Synthesized first-person line — never a verbatim real review. */
  quote?: string;
  /** Full reasoning, revealed on expand. */
  rationale?: string;
  /** Controlled expansion; omit for self-managed. */
  expanded?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

export function PersonaCard({
  name,
  archetype,
  color,
  verdict = "fence",
  moved = false,
  tags = [],
  quote,
  rationale,
  expanded,
  onToggle,
  className,
  style,
}: PersonaCardProps) {
  const [local, setLocal] = useState(false);
  const open = expanded != null ? expanded : local;
  const toggle = () => (onToggle ? onToggle(!open) : setLocal(!open));

  return (
    <Card
      surface="panel"
      pad="card"
      radius="xl"
      hoverable
      active={moved}
      onClick={toggle}
      className={className}
      style={style}
    >
      <div className="flex items-center gap-2.5">
        <Avatar name={name} color={color} size={38} />
        <div>
          <div className="font-sans text-[13.5px] font-bold leading-normal">
            {name}
          </div>
          <div className="font-sans text-2xs leading-normal text-text-secondary">
            {archetype}
          </div>
        </div>
      </div>

      <div className="mt-2.5">
        <VerdictBadge verdict={verdict} moved={moved} />
      </div>

      {tags.length > 0 && (
        <div className="mt-[9px] flex flex-wrap gap-1">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}

      {quote && (
        <div className="mt-2.5 font-sans text-sm italic leading-relaxed text-text-primary opacity-90">
          &ldquo;{quote}&rdquo;
        </div>
      )}

      {rationale && (
        <div
          className={
            // 250ms expand/collapse on the house rhythm — never a snap.
            "overflow-hidden border-t border-dashed border-border-hairline font-sans text-xs leading-relaxed text-text-secondary transition-[max-height,padding-top] duration-[var(--dur-medium)] ease-[ease] " +
            (open ? "mt-2.5 max-h-[260px] pt-2" : "mt-2.5 max-h-0 pt-0")
          }
        >
          {rationale}
        </div>
      )}

      {/* The Unicode expand affordance is preserved verbatim from the mockup:
          it is set in the text run, not the icon layer. */}
      <div className="mt-2 text-right font-sans text-3xs leading-normal text-text-faint">
        {open ? "collapse ▴" : "full rationale ▾"}
      </div>
    </Card>
  );
}
