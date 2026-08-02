"use client";

import { Card, Field, LiveDot, SectionTitle, Slider, Switch } from "@/components";
import { PRICE_MAX, PRICE_MIN, type Scenario } from "@/lib/panel-data";

/** The sticky scenario rail on screen C. Moving a lever here re-asks the same
 *  six people; it never re-runs the panel against a different product.
 *  Ported from `ControlRail` in design-system/ui_kits/app/Results.jsx. */

const LEVERS: Array<[keyof Omit<Scenario, "price">, string]> = [
  ["fragrance", "Fragrance-free reformulation"],
  ["clinical", "Upgrade to clinical study claim"],
  ["trial", "Add 7 mL trial size SKU"],
];

export interface ControlRailProps {
  state: Scenario;
  setState: (next: Scenario) => void;
  recalcing: boolean;
}

export function ControlRail({ state, setState, recalcing }: ControlRailProps) {
  const set = <K extends keyof Scenario>(key: K, value: Scenario[K]) =>
    setState({ ...state, [key]: value });

  return (
    <Card
      surface="panel"
      pad="panel"
      radius="2xl"
      className="self-start lg:sticky lg:top-[84px]"
    >
      <SectionTitle>Scenario controls</SectionTitle>
      <Field label="Price" value={`$${state.price}`} className="mt-4.5">
        <Slider
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={state.price}
          onChange={(v) => set("price", v)}
          minLabel={`$${PRICE_MIN}`}
          maxLabel={`$${PRICE_MAX}`}
          aria-label="Price"
        />
      </Field>
      <div className="mt-4.5">
        {LEVERS.map(([key, label], i) => (
          <Switch
            key={key}
            label={label}
            checked={state[key]}
            onChange={(v) => set(key, v)}
            className={i ? "border-t border-border-hairline" : undefined}
          />
        ))}
      </div>
      <div className="mt-4.5 border-t border-border-hairline pt-3 font-sans text-2xs leading-relaxed text-text-secondary">
        Move a lever and the panel re-reacts in place. Nothing here re-runs the
        model against a new product — it re-asks the same six people.
      </div>
      {recalcing && (
        <div className="mt-3 flex items-center gap-2 font-sans text-2xs leading-normal text-iris-300">
          <LiveDot color="var(--color-iris-300)" size={6} />
          Re-evaluating the panel…
        </div>
      )}
    </Card>
  );
}
