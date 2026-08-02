"use client";

import {
  Avatar,
  Button,
  Card,
  Icon,
  SectionTitle,
  VerdictBadge,
  VerdictBar,
  type Verdict,
} from "@/components";
import { cn } from "@/lib/cn";
import type { Persona, PersonaReaction, Scenario } from "@/lib/panel-data";

/** Screen D — what you changed, the aggregate before and after, and exactly who
 *  moved with it. Ported from design-system/ui_kits/app/TweakDiff.jsx. */

function LeverDiff({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const changed = before !== after;
  return (
    <div className="flex items-center gap-2.5 border-t border-border-hairline py-2.5 font-sans text-sm leading-normal">
      <span
        className={cn("flex-1", changed ? "text-text-primary" : "text-text-faint")}
      >
        {label}
      </span>
      <span
        className={cn(
          "font-mono text-2xs font-medium text-text-faint",
          changed && "line-through",
        )}
      >
        {before}
      </span>
      <Icon name="arrow-right" size={12} />
      <span
        className={cn(
          "font-mono text-2xs font-medium",
          changed ? "text-iris-300" : "text-text-faint",
        )}
      >
        {after}
      </span>
    </div>
  );
}

/** Direction of travel on the intent ladder: pass → fence → buy. */
const RANK: Record<Verdict, number> = { pass: 0, fence: 1, buy: 2 };

function MoveRow({
  p,
  from,
  to,
}: {
  p: Persona;
  from: Verdict;
  to: Verdict;
}) {
  const dir = RANK[to] - RANK[from];
  return (
    <Card
      surface="panel"
      pad="card"
      radius="xl"
      className="flex items-center gap-3"
    >
      <Avatar name={p.name} color={p.color} size={32} />
      <div className="min-w-[140px]">
        <div className="font-sans text-[13.5px] font-bold leading-normal">
          {p.name}
        </div>
        <div className="font-sans text-2xs leading-normal text-text-secondary">
          {p.archetype}
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        {/* The "before" badge is dimmed, not recoloured — the verdict triad is
            never remapped, not even for a diff. */}
        <span className="opacity-45">
          <VerdictBadge verdict={from} />
        </span>
        <span
          className={
            dir > 0
              ? "text-verdict-buy"
              : dir < 0
                ? "text-verdict-pass"
                : "text-text-faint"
          }
        >
          <Icon
            name={dir > 0 ? "trending-up" : dir < 0 ? "trending-down" : "minus"}
            size={15}
          />
        </span>
        <VerdictBadge verdict={to} moved={dir !== 0} />
      </div>
    </Card>
  );
}

export interface TweakDiffProps {
  personas: Persona[];
  /** The scenario the panel first ran at — never mutated by the levers. */
  baseState: Scenario;
  state: Scenario;
  baseResults: PersonaReaction[];
  results: PersonaReaction[];
  onBack: () => void;
}

export function TweakDiff({
  personas,
  baseState,
  state,
  baseResults,
  results,
  onBack,
}: TweakDiffProps) {
  const b = { buy: 0, fence: 0, pass: 0 };
  const a = { buy: 0, fence: 0, pass: 0 };
  baseResults.forEach((r) => (b[r.v] += 1));
  results.forEach((r) => (a[r.v] += 1));

  const movers = personas
    .map((p, i) => ({ p, from: baseResults[i].v, to: results[i].v }))
    .filter((m) => m.from !== m.to);
  const held = personas.length - movers.length;

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="mb-7">
        <h1 className="m-0 mb-2 font-display text-4xl font-normal leading-tight">
          {movers.length
            ? `${movers.length} of ${personas.length} moved.`
            : "Nobody moved."}
        </h1>
        <p className="m-0 max-w-[640px] font-sans text-lg leading-relaxed text-text-secondary">
          {movers.length
            ? "Here is exactly which levers changed and who changed with them. Everyone else held their position."
            : "The levers you changed did not touch anything this panel objected to. Try the objections list on the results screen."}
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <SectionTitle>What you changed</SectionTitle>
          <Card surface="panel" pad="panel" radius="2xl">
            <LeverDiff
              label="Price"
              before={`$${baseState.price}`}
              after={`$${state.price}`}
            />
            <LeverDiff
              label="Fragrance"
              before={baseState.fragrance ? "fragrance-free" : "light citrus"}
              after={state.fragrance ? "fragrance-free" : "light citrus"}
            />
            <LeverDiff
              label="Evidence"
              before={baseState.clinical ? "clinical study" : "consumer test"}
              after={state.clinical ? "clinical study" : "consumer test"}
            />
            <LeverDiff
              label="Trial SKU"
              before={baseState.trial ? "7 mL available" : "none"}
              after={state.trial ? "7 mL available" : "none"}
            />
          </Card>
        </div>
        <div>
          <SectionTitle>Aggregate, before and after</SectionTitle>
          <Card surface="panel" pad="panel" radius="2xl">
            <div className="mb-1.5 font-mono text-3xs font-medium leading-normal text-text-faint">
              FIRST RUN
            </div>
            <VerdictBar
              buy={b.buy}
              fence={b.fence}
              pass={b.pass}
              height={22}
              showLegend={false}
            />
            <div className="mb-1.5 mt-3.5 font-mono text-3xs font-medium leading-normal text-iris-300">
              CURRENT RUN
            </div>
            <VerdictBar buy={a.buy} fence={a.fence} pass={a.pass} height={22} />
          </Card>
        </div>
      </div>

      <SectionTitle
        action={
          <span className="font-mono text-3xs font-medium leading-normal text-text-faint">
            {held} held position
          </span>
        }
      >
        Who moved
      </SectionTitle>
      <div className="flex flex-col gap-2">
        {movers.length ? (
          movers.map((m) => <MoveRow key={m.p.id} {...m} />)
        ) : (
          <Card
            surface="panel"
            pad="card"
            radius="xl"
            className="font-sans text-sm leading-normal text-text-secondary"
          >
            No verdict changes between these two runs.
          </Card>
        )}
      </div>

      <div className="mt-12">
        <Button variant="secondary" onClick={onBack}>
          <Icon name="arrow-left" size={14} />
          Back to results
        </Button>
      </div>
    </div>
  );
}
