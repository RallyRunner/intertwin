import { Chip, PersonaCard } from "@/components";
import { personas } from "@/lib/panel-data";
import { cn } from "@/lib/cn";
import { BAND, BIG_HEAD, EYEBROW } from "./bands";
import { Reveal } from "./Reveal";

export function PanelShowcase() {
  return (
    <section id="panel" className={cn(BAND, "pt-0")}>
      <Reveal>
        <div className={EYEBROW}>The panel</div>
      </Reveal>

      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className={BIG_HEAD}>
            Six people who
            <br />
            disagree with each other.
          </h2>
          <p className="mt-5 max-w-[520px] font-sans text-[18px] leading-relaxed text-pretty text-text-secondary">
            Predict your customer&rsquo;s feedback.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Chip tone="accent">52 curated personas</Chip>
            <Chip>Skincare, v1</Chip>
            <Chip>Segment-level read</Chip>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 gap-card sm:grid-cols-2">
            {personas.slice(0, 4).map((p, i) => (
              <PersonaCard
                key={p.id}
                name={p.name}
                archetype={p.archetype}
                color={p.color}
                verdict={p.base.v}
                tags={p.tags.slice(0, 2)}
                quote={p.base.quote}
                // Staggered column — the cards read as a panel, not a table.
                className={i % 2 ? "sm:translate-y-[22px]" : undefined}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
