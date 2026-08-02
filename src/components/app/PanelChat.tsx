"use client";

import { useState } from "react";
import { Button, Card, ChatMessage, Chip, Input } from "@/components";
import {
  PRESET_ORDER,
  presets,
  type Persona,
  type PresetKey,
} from "@/lib/panel-data";

/** One turn in the panel thread. `typing` renders the placeholder that a real
 *  reply replaces once its delay elapses. */
export interface ChatTurn {
  /** The user's own message. */
  self?: boolean;
  /** Persona id for a panel reply. */
  from?: string;
  text?: string;
  typing?: boolean;
}

export interface PanelChatProps {
  personas: Persona[];
  log: ChatTurn[];
  onPreset: (key: PresetKey) => void;
  onSend: (text: string) => void;
}

/** Ported from `PanelChat` in design-system/ui_kits/app/Results.jsx. */
export function PanelChat({ personas, log, onPreset, onSend }: PanelChatProps) {
  const [text, setText] = useState("");
  const send = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <Card surface="panel" pad="panel" radius="2xl">
      <div className="mb-3.5 flex flex-wrap gap-2">
        {PRESET_ORDER.map((key) => (
          <Chip
            key={key}
            interactive
            onClick={() => onPreset(key)}
            // The quick-question chips run larger than a tag chip. Inline so it
            // wins outright — the base padding and size are utility classes and
            // there is no tailwind-merge here to arbitrate.
            style={{ padding: "7px 12px", fontSize: "var(--text-xs)" }}
          >
            {presets[key].q}
          </Chip>
        ))}
      </div>

      <div className="flex max-h-[300px] flex-col gap-2.5 overflow-y-auto pr-1">
        {log.length === 0 && (
          <div className="py-2.5 font-sans text-2xs leading-normal text-text-faint">
            Ask the panel a follow-up. Replies come back one persona at a time,
            in their own voice.
          </div>
        )}
        {log.map((m, i) => {
          const p = personas.find((x) => x.id === m.from);
          return (
            <ChatMessage
              key={i}
              self={m.self}
              from={p ? p.name : m.from}
              color={p?.color}
              text={m.text}
              typing={m.typing}
            />
          );
        })}
      </div>

      <div className="mt-3 flex gap-2">
        <Input
          className="flex-1"
          placeholder="Ask the whole panel, or @ a persona by name…"
          aria-label="Ask the panel a follow-up"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <Button variant="primary" onClick={send}>
          Send
        </Button>
      </div>
    </Card>
  );
}
