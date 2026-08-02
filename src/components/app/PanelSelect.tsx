"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Chip,
  Icon,
  Input,
  SectionTitle,
} from "@/components";
import type { LibraryPersona } from "@/lib/panel-data";

/** Screen B — include or exclude personas from the platform-curated library.
 *  Ported from design-system/ui_kits/app/PanelSelect.jsx. */

function PersonaTile({
  p,
  checked,
  onToggle,
}: {
  p: LibraryPersona;
  checked: boolean;
  onToggle: (next: boolean) => void;
}) {
  return (
    <Card
      surface="panel"
      pad="card"
      radius="xl"
      hoverable
      // Selection is an iris moment in this system, same as focus — Card's own
      // iris ring carries it rather than a one-off border override.
      active={checked}
      onClick={() => onToggle(!checked)}
    >
      <div className="flex items-center gap-2.5">
        <Avatar name={p.name} color={p.color} size={34} />
        <div className="min-w-0">
          <div className="font-sans text-[13.5px] font-bold leading-normal">
            {p.name}
          </div>
          <div className="truncate font-sans text-2xs leading-normal text-text-secondary">
            {p.archetype}
          </div>
        </div>
        {/* The whole tile is the hit area; the checkbox carries the state and
            the keyboard affordance. A click through the checkbox also reaches
            the tile, and both paths resolve to the same value, so the gesture
            toggles once either way. */}
        <span className="ml-auto">
          <Checkbox checked={checked} onChange={onToggle} />
        </span>
      </div>
      <div className="mt-[9px] flex flex-wrap gap-1">
        {p.tags.slice(0, 3).map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Card>
  );
}

export interface PanelSelectProps {
  library: LibraryPersona[];
  selected: string[];
  setSelected: (next: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export function PanelSelect({
  library,
  selected,
  setSelected,
  onNext,
  onBack,
}: PanelSelectProps) {
  const [q, setQ] = useState("");
  const shown = library.filter((p) =>
    `${p.name}${p.archetype}${p.tags.join(" ")}`
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  const toggle = (id: string, on: boolean) =>
    setSelected(on ? selected.concat(id) : selected.filter((x) => x !== id));

  return (
    <div className="mx-auto max-w-[1080px]">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="m-0 mb-2 font-display text-4xl font-normal leading-tight">
            Who&rsquo;s in the room?
          </h1>
          <p className="m-0 max-w-[620px] font-sans text-lg leading-relaxed text-text-secondary">
            We pre-selected the archetypes most relevant to a brightening serum.
            Override anything — segment mix is what makes a finding actionable.
          </p>
        </div>
        <div className="w-[280px]">
          <Input
            placeholder="Filter by archetype or concern"
            aria-label="Filter the persona library"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <SectionTitle
        action={
          <span className="font-mono text-3xs font-medium leading-normal text-text-secondary">
            {selected.length} selected · library of 52
          </span>
        }
      >
        Platform-curated persona library
      </SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(268px,1fr))] gap-card">
        {shown.map((p) => (
          <PersonaTile
            key={p.id}
            p={p}
            checked={selected.includes(p.id)}
            onToggle={(on) => toggle(p.id, on)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="lg" onClick={onNext}>
          Run the panel
          <Icon name="arrow-right" size={15} />
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Back to product
        </Button>
        <span className="font-sans text-2xs leading-normal text-text-faint">
          Personas are platform-curated in v1 — you can include or exclude, not
          edit.
        </span>
      </div>
    </div>
  );
}
