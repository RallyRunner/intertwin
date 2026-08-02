import { Reveal } from "./Reveal";

const STATS: Array<[string, string]> = [
  ["52", "curated personas in the v1 library"],
  ["3", "verdict states, one visual grammar"],
  ["0", "confidence intervals we made up"],
];

/**
 * The light break. One — and only one — band per page may invert. It is flat,
 * full-bleed and sharp-edged: no radius, no border, no shadow, no gradient. Its
 * job is to interrupt the black hard enough that the reader resets. Two of them
 * on one page and neither works.
 */
export function Break() {
  return (
    <section className="my-page bg-surface-break text-text-on-break">
      <div className="mx-auto max-w-marketing px-10 py-30">
        <Reveal>
          <div className="mb-9 font-mono text-telemetry font-medium uppercase leading-none tracking-caps text-text-on-break-muted">
            Why segment-level
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="m-0 max-w-[1000px] font-display text-[clamp(32px,4.4vw,60px)] leading-[1.08] tracking-tight text-pretty">
            An averaged &ldquo;62% positive&rdquo; tells you nothing you can act
            on. Three objections, three different fixes, three different costs
            to your business &mdash; and one number destroys all of it.
          </p>
        </Reveal>

        <div className="mt-22 grid grid-cols-1 gap-12 border-t border-border-on-break pt-7 sm:grid-cols-3">
          {STATS.map(([n, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="font-display text-[52px] leading-none">{n}</div>
              <div className="mt-3 font-mono text-telemetry font-medium uppercase leading-relaxed tracking-label text-text-on-break-muted">
                {d}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
