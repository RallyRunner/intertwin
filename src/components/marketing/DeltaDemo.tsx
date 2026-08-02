"use client";

import { useState } from "react";
import {
  Avatar,
  Card,
  Field,
  LiveDot,
  SectionTitle,
  SignalBox,
  Slider,
  Switch,
  VerdictBadge,
  VerdictBar,
} from "@/components";
import { personas, signals, verdictFor, type Scenario } from "@/lib/panel-data";
import { cn } from "@/lib/cn";
import { BAND, BIG_HEAD, EYEBROW } from "./bands";
import { Reveal } from "./Reveal";

const LEVERS: Array<[keyof Omit<Scenario, "price">, string]> = [
  ["fragrance", "Fragrance-free reformulation"],
  ["clinical", "Clinical study claim"],
  ["trial", "7 mL trial size SKU"],
];

/**
 * A real, interactive panel in the middle of the marketing page. The product's
 * claim is that a lever change produces a visible, attributable shift — so the
 * page proves it rather than describing it.
 */
export function DeltaDemo() {
  const [scenario, setScenario] = useState<Scenario>({
    price: 38,
    fragrance: false,
    clinical: false,
    trial: false,
  });

  const results = personas.map((p) => verdictFor(p, scenario));
  const counts = { buy: 0, fence: 0, pass: 0 };
  results.forEach((r) => (counts[r.v] += 1));
  const sig = signals(scenario);

  const set = <K extends keyof Scenario>(key: K, value: Scenario[K]) =>
    setScenario((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="delta" className={cn(BAND, "pt-0")}>
      <Reveal>
        <div className={EYEBROW}>The delta</div>
      </Reveal>
      <Reveal>
        <h2 className={BIG_HEAD}>
          The moment a lever moves
          <br />
          is the whole product.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-5 max-w-[620px] font-sans text-[18px] leading-relaxed text-text-secondary">
          This is live. Drag it.
        </p>
      </Reveal>

      <Reveal delay={140}>
        <Card
          surface="panel"
          pad="lg"
          radius="3xl"
          className="mt-7 grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]"
        >
          <div>
            <SectionTitle>Scenario controls</SectionTitle>
            <Field label="Price" value={`$${scenario.price}`}>
              <Slider
                min={24}
                max={48}
                value={scenario.price}
                onChange={(v) => set("price", v)}
                minLabel="$24"
                maxLabel="$48"
                aria-label="Price"
              />
            </Field>
            <div className="mt-4.5">
              {LEVERS.map(([key, label], i) => (
                <Switch
                  key={key}
                  label={label}
                  checked={scenario[key]}
                  onChange={(v) => set(key, v)}
                  className={i ? "border-t border-border-hairline" : undefined}
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle icon={<LiveDot />}>
              Aggregate purchase intent — 6 personas
            </SectionTitle>
            <VerdictBar buy={counts.buy} fence={counts.fence} pass={counts.pass} />

            <div className="mt-4.5 grid grid-cols-1 gap-card sm:grid-cols-2">
              <SignalBox
                title="Top appeals right now"
                tone="appeal"
                items={sig.appeals}
              />
              <SignalBox
                title="Top objections right now"
                tone="objection"
                items={sig.objections}
                empty="Every objection on this panel is resolved."
              />
            </div>

            <div className="mt-4.5 flex flex-wrap gap-2">
              {personas.map((p, i) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 rounded-pill border border-border-hairline bg-surface-card py-1.5 pl-1.5 pr-2.5"
                >
                  <Avatar name={p.name} color={p.color} size={22} />
                  <span className="font-sans text-2xs leading-normal">
                    {p.name}
                  </span>
                  <VerdictBadge verdict={results[i].v} />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
