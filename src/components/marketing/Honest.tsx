import { Card } from "@/components";
import { cn } from "@/lib/cn";
import { BAND, BIG_HEAD, EYEBROW } from "./bands";
import { Reveal } from "./Reveal";

/** Honesty is copy, not fine print — the framing sits in the flow of the
 *  layout, never as a greyed footnote. */
const ROWS: Array<{ t: string; d: string; dot: string }> = [
  {
    t: "What it is",
    d: "A directional read on a curated panel. A list of objections worth fixing before you brief a real study.",
    dot: "bg-verdict-buy",
  },
  {
    t: "What it is not",
    d: "A sales forecast, a market projection, or a substitute for the five-figure qualitative panel it helps you brief.",
    dot: "bg-verdict-pass",
  },
];

export function Honest() {
  return (
    <section id="honest" className={cn(BAND, "pt-0")}>
      <Reveal>
        <div className={EYEBROW}>Honestly framed</div>
      </Reveal>
      <Reveal>
        <h2 className={BIG_HEAD}>No fake confidence intervals.</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-2">
        {ROWS.map((row, i) => (
          <Reveal key={row.t} delay={i * 100} className="h-full">
            <Card surface="panel" pad="lg" radius="3xl" className="h-full">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className={cn("h-2 w-2 rounded-circle", row.dot)} />
                <span className="font-mono text-3xs font-semibold uppercase leading-none tracking-caps text-text-secondary">
                  {row.t}
                </span>
              </div>
              <p className="m-0 font-sans text-[19px] leading-relaxed text-pretty">
                {row.d}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
