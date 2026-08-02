"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Verdict } from "@/components";
import {
  DEFAULT_DRAFT,
  FREE_TEXT_REPLY,
  library,
  personas as scriptedPersonas,
  presets,
  scenarioFromDraft,
  verdictFor,
  type ProductDraft,
  type PresetKey,
  type Scenario,
} from "@/lib/panel-data";
import { PanelSelect } from "./PanelSelect";
import { ProductForm } from "./ProductForm";
import { Results } from "./Results";
import { TopBar } from "./Shell";
import type { ChatTurn } from "./PanelChat";
import { TweakDiff } from "./TweakDiff";
import type { StepId } from "./steps";

/**
 * The v1 product loop: describe a product, pick the panel, watch it react, move
 * a lever and watch it move. The four screens share one in-memory session —
 * there is no backend and nothing to persist yet — so this is a step wizard on
 * a single route, exactly as design-system/ui_kits/app/index.html builds it,
 * not four URLs passing state through search params.
 *
 * Verdicts and replies are scripted fixtures, not model output. See
 * src/lib/panel-data.ts.
 */
export function PanelApp() {
  const [step, setStep] = useState<StepId>("product");
  const [draft, setDraft] = useState<ProductDraft>(DEFAULT_DRAFT);
  const [selected, setSelected] = useState<string[]>(
    scriptedPersonas.map((p) => p.id),
  );
  const [scenario, setScenario] = useState<Scenario>(
    scenarioFromDraft(DEFAULT_DRAFT),
  );
  /** The scenario the panel last ran at — the untouched "first run" the diff
   *  screen compares against. Levers never write to it. */
  const [baseline, setBaseline] = useState<Scenario>(
    scenarioFromDraft(DEFAULT_DRAFT),
  );
  const [moved, setMoved] = useState<string[]>([]);
  const [recalcing, setRecalcing] = useState(false);
  const [chat, setChat] = useState<ChatTurn[]>([]);

  // Only the scripted personas carry reactions; the rest of the library is
  // there to be included or excluded, same as the reference kit.
  const activePersonas = useMemo(
    () => scriptedPersonas.filter((p) => selected.includes(p.id)),
    [selected],
  );
  const results = useMemo(
    () => activePersonas.map((p) => verdictFor(p, scenario)),
    [activePersonas, scenario],
  );
  const baseResults = useMemo(
    () => activePersonas.map((p) => verdictFor(p, baseline)),
    [activePersonas, baseline],
  );

  /* --- Timers -------------------------------------------------------------
     Chat replies and the re-evaluation dot are both delayed; every timeout is
     tracked so leaving the screen mid-thread cannot fire into a dead tree. */
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    },
    [],
  );

  /* --- Which personas moved on the last lever change ---------------------- */
  const previous = useRef<Verdict[] | null>(null);
  useEffect(() => {
    const now = results.map((r) => r.v);
    const before = previous.current;
    previous.current = now;
    // A null baseline is a fresh run, and a length change is a different panel
    // — neither is a persona changing their mind.
    if (!before || before.length !== now.length) return;

    const changed = activePersonas
      .filter((p, i) => now[i] !== before[i])
      .map((p) => p.id);
    if (!changed.length) return;

    setMoved(changed);
    setRecalcing(true);
    const t = setTimeout(() => setRecalcing(false), 700);
    return () => clearTimeout(t);
  }, [results, activePersonas]);

  const goto = (next: StepId) => {
    setStep(next);
    window.scrollTo({ top: 0 });
  };

  /** Running the panel seeds the scenario from the described product, and that
   *  seed becomes the first run the diff screen measures against. */
  const runPanel = () => {
    const fresh = scenarioFromDraft(draft);
    previous.current = null;
    setScenario(fresh);
    setBaseline(fresh);
    setMoved([]);
    setChat([]);
    goto("results");
  };

  const rerun = () => {
    setRecalcing(true);
    after(700, () => setRecalcing(false));
  };

  /* --- Panel chat --------------------------------------------------------- */
  const replyFrom = (id: string, text: string, delay: number) => {
    setChat((c) => c.concat({ from: id, typing: true }));
    after(delay, () =>
      setChat((c) =>
        c
          .filter((m) => !(m.typing && m.from === id))
          .concat({ from: id, text }),
      ),
    );
  };

  const onPreset = (key: PresetKey) => {
    const p = presets[key];
    setChat((c) => c.concat({ self: true, text: p.q }));
    // Scripted answers only count if that persona is actually in the room.
    const answers = p.a.filter(([who]) =>
      activePersonas.some((x) => x.id === who),
    );
    if (!answers.length) {
      if (activePersonas.length) {
        replyFrom(activePersonas[0].id, FREE_TEXT_REPLY, 800);
      }
      return;
    }
    let delay = 500;
    answers.forEach(([who, text]) => {
      replyFrom(who, text, delay);
      delay += 900;
    });
  };

  const onSend = (text: string) => {
    setChat((c) => c.concat({ self: true, text }));
    if (!activePersonas.length) return;
    // "@ a persona by name" — otherwise the first panellist answers for the room.
    const named = activePersonas.find((p) =>
      text.toLowerCase().includes(p.name.toLowerCase()),
    );
    replyFrom((named ?? activePersonas[0]).id, FREE_TEXT_REPLY, 800);
  };

  return (
    <div className="flex-1">
      <TopBar step={step} onStep={goto} onRerun={rerun} />
      <div className="px-7 pb-20 pt-12">
        {step === "product" && (
          <ProductForm
            draft={draft}
            setDraft={setDraft}
            onNext={() => goto("panel")}
          />
        )}
        {step === "panel" && (
          <PanelSelect
            library={library}
            selected={selected}
            setSelected={setSelected}
            onNext={runPanel}
            onBack={() => goto("product")}
          />
        )}
        {step === "results" && (
          <Results
            draft={draft}
            personas={activePersonas}
            results={results}
            state={scenario}
            setState={setScenario}
            moved={moved}
            recalcing={recalcing}
            chat={chat}
            onPreset={onPreset}
            onSend={onSend}
            onCompare={() => goto("diff")}
          />
        )}
        {step === "diff" && (
          <TweakDiff
            personas={activePersonas}
            baseState={baseline}
            state={scenario}
            baseResults={baseResults}
            results={results}
            onBack={() => goto("results")}
          />
        )}
      </div>
    </div>
  );
}
