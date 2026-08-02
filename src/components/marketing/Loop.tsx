import { BAND, BIG_HEAD, EYEBROW } from "./bands";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    t: "Describe the product",
    d: "Formulation, claim, evidence type, price, size, fragrance, channel. The things a shopper actually sees on the page.",
  },
  {
    n: "02",
    t: "A grounded panel reacts",
    d: "Each persona returns a purchase-intent verdict and a personal rationale — in a synthesized voice built from realistic review patterns.",
  },
  {
    n: "03",
    t: "Move a lever, watch them move",
    d: "Drop the price. Pull the fragrance. Upgrade a consumer test to a clinical claim. The panel re-reacts live, and you can see exactly who changed.",
  },
];

export function Loop() {
  return (
    <section id="loop" className={BAND}>
      <Reveal>
        <div className={EYEBROW}>The loop</div>
      </Reveal>
      <Reveal>
        <h2 className={BIG_HEAD}>
          Three moves, and you know
          <br />
          what to fix before you spend.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="border-t border-border-hairline pt-4">
              <div className="mb-3 font-mono text-2xs font-medium text-iris-300">
                {s.n}
              </div>
              <h3 className="mb-3 mt-0 font-display text-2xl leading-snug">
                {s.t}
              </h3>
              <p className="m-0 font-sans text-md leading-relaxed text-pretty text-text-secondary">
                {s.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
