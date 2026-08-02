"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Chip, Icon, IconButton } from "@/components";
import { cn } from "@/lib/cn";
import {
  productAttributes,
  type ProductDraft,
  type Scenario,
} from "@/lib/panel-data";
import { STEPS, type StepId } from "./steps";

/** Top bar, step nav, product header and the honesty disclosure — the furniture
 *  shared by all four screens. Ported from
 *  design-system/ui_kits/app/Shell.jsx. */

export interface TopBarProps {
  step: StepId;
  onStep: (next: StepId) => void;
  onRerun?: () => void;
  /** v1 lets you jump between steps freely; the hook is here so gating a step
   *  later is a one-line change, not a rewrite of the nav. */
  canAdvance?: (id: StepId) => boolean;
}

export function TopBar({
  step,
  onStep,
  onRerun,
  canAdvance = () => true,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center gap-5 border-b border-border-hairline bg-surface-glass px-7 py-3.5 backdrop-blur-glass">
      {/* No logo was delivered — the brand name set in Instrument Serif is the
          mark, and here it doubles as the way back to the marketing page. */}
      <Link
        href="/"
        className="font-display text-2xl leading-snug tracking-[-.01em] text-text-primary hover:text-text-primary"
      >
        intertwin
      </Link>

      <nav className="flex flex-wrap gap-1">
        {STEPS.map((s) => {
          const active = s.id === step;
          const enabled = canAdvance(s.id);
          // Resolved here rather than by class order: border, background and
          // text colour each get exactly one class.
          const state = active
            ? "border-iris-500 bg-iris-900 text-iris-100 cursor-pointer"
            : enabled
              ? "border-transparent bg-transparent text-text-secondary cursor-pointer hover:text-text-primary"
              : "border-transparent bg-transparent text-text-faint cursor-not-allowed";
          return (
            <button
              key={s.id}
              type="button"
              disabled={!enabled}
              aria-current={active ? "step" : undefined}
              onClick={() => enabled && onStep(s.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-pill border px-3 py-[7px] font-sans text-sm leading-normal transition-[background-color,border-color,color] duration-[var(--dur-fast)] ease-[ease]",
                state,
              )}
            >
              <span className="font-mono text-3xs font-medium opacity-70">
                {s.n}
              </span>
              {s.label}
            </button>
          );
        })}
      </nav>

      <div className="ml-auto flex items-center gap-2.5">
        <span className="hidden font-sans text-2xs leading-normal text-text-faint lg:inline">
          Skincare · v1 · single product
        </span>
        {step === "results" && (
          <Button variant="primary" size="sm" onClick={onRerun}>
            <Icon name="refresh-cw" size={14} />
            Re-run panel
          </Button>
        )}
        <IconButton name="settings" label="Settings" variant="ghost" />
      </div>
    </header>
  );
}

/** The honesty banner. It is not a footnote — the product's credibility rests
 *  on saying what this read is and is not, in the same breath as the number. */
export function Disclosure({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-border-hairline bg-surface-panel px-3.5 py-2.5 font-sans text-2xs leading-normal text-text-secondary">
      <span className="mt-px text-iris-300">
        <Icon name="info" size={13} />
      </span>
      <span>{children}</span>
    </div>
  );
}

export interface ProductHeaderProps {
  draft: ProductDraft;
  scenario: Scenario;
}

export function ProductHeader({ draft, scenario }: ProductHeaderProps) {
  const attributes = productAttributes(draft, scenario);
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border-hairline bg-surface-card px-5.5 py-4.5">
      <div className="flex items-center gap-3.5">
        <div className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-lg border border-border-hairline bg-surface-raised text-text-secondary">
          <Icon name="flask-conical" size={20} />
        </div>
        <div>
          <div className="font-sans text-xl font-bold leading-snug">
            {draft.name}
          </div>
          <div className="mt-[3px] font-mono text-2xs font-medium leading-normal text-text-secondary">
            {draft.category} · {draft.format} · {draft.size} mL ·{" "}
            {/* The price is the live lever, so it carries the gold readout. */}
            <span className="text-verdict-fence">${scenario.price}.00</span> ·{" "}
            {draft.market} · {draft.channel}
          </div>
        </div>
      </div>
      <div className="flex max-w-[520px] flex-wrap gap-1.5">
        {attributes.map((a) => (
          <Chip key={a.label} tone={a.tone ?? "neutral"}>
            {a.label}
          </Chip>
        ))}
      </div>
    </header>
  );
}
