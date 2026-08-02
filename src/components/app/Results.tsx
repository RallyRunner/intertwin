"use client";

import {
  Button,
  Card,
  LiveDot,
  PersonaCard,
  SectionTitle,
  SignalBox,
  VerdictBar,
} from "@/components";
import {
  signals,
  type Persona,
  type PersonaReaction,
  type PresetKey,
  type ProductDraft,
  type Scenario,
} from "@/lib/panel-data";
import { ControlRail } from "./ControlRail";
import { PanelChat, type ChatTurn } from "./PanelChat";
import { Disclosure, ProductHeader } from "./Shell";

/** Screen C — the centrepiece: product header, sticky scenario rail, aggregate
 *  verdict bar, appeals/objections, persona reaction grid, panel chat.
 *  Ported from design-system/ui_kits/app/Results.jsx. */

export interface ResultsProps {
  draft: ProductDraft;
  personas: Persona[];
  results: PersonaReaction[];
  state: Scenario;
  setState: (next: Scenario) => void;
  /** Persona ids whose verdict changed in the latest re-evaluation. */
  moved: string[];
  recalcing: boolean;
  chat: ChatTurn[];
  onPreset: (key: PresetKey) => void;
  onSend: (text: string) => void;
  onCompare: () => void;
}

export function Results({
  draft,
  personas,
  results,
  state,
  setState,
  moved,
  recalcing,
  chat,
  onPreset,
  onSend,
  onCompare,
}: ResultsProps) {
  const counts = { buy: 0, fence: 0, pass: 0 };
  results.forEach((r) => (counts[r.v] += 1));
  const sig = signals(state);

  return (
    <div className="mx-auto max-w-app">
      <ProductHeader draft={draft} scenario={state} />

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[var(--container-rail)_1fr]">
        <ControlRail state={state} setState={setState} recalcing={recalcing} />

        <main>
          <section className="mb-section">
            <SectionTitle
              icon={<LiveDot />}
              action={
                <Button variant="ghost" size="sm" onClick={onCompare}>
                  Compare with first run
                </Button>
              }
            >
              Aggregate purchase intent — {personas.length} personas
            </SectionTitle>
            <Card surface="panel" pad="lg" radius="2xl">
              <VerdictBar
                buy={counts.buy}
                fence={counts.fence}
                pass={counts.pass}
              />
              <div className="mt-4.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <SignalBox
                  title="Top appeals right now"
                  tone="appeal"
                  items={sig.appeals}
                />
                <SignalBox
                  title="Top objections right now"
                  tone="objection"
                  items={sig.objections}
                  empty="Every objection on this panel is currently resolved."
                />
              </div>
              <div className="mt-3.5">
                <Disclosure>
                  A read on these {personas.length} personas, not a market
                  projection. Use it to find objections worth testing with real
                  shoppers.
                </Disclosure>
              </div>
            </Card>
          </section>

          <section className="mb-section">
            <SectionTitle
              action={
                moved.length ? (
                  <span className="font-mono text-3xs font-medium leading-normal text-iris-300">
                    {moved.length} moved this run
                  </span>
                ) : null
              }
            >
              Persona reactions — click a card for the full rationale
            </SectionTitle>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-card">
              {personas.map((p, i) => (
                <PersonaCard
                  key={p.id}
                  name={p.name}
                  archetype={p.archetype}
                  color={p.color}
                  verdict={results[i].v}
                  moved={moved.includes(p.id)}
                  tags={p.tags}
                  quote={results[i].quote}
                  rationale={results[i].full}
                />
              ))}
              {personas.length === 0 && (
                <Card
                  surface="panel"
                  pad="card"
                  radius="xl"
                  className="font-sans text-sm leading-normal text-text-secondary"
                >
                  Nobody is on this panel. Go back to step 02 and include at
                  least one persona.
                </Card>
              )}
            </div>
          </section>

          <section>
            <SectionTitle>Panel discussion — ask a follow-up</SectionTitle>
            <PanelChat
              personas={personas}
              log={chat}
              onPreset={onPreset}
              onSend={onSend}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
