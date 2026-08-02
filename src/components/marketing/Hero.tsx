"use client";

import { useEffect, useState } from "react";
import { Button, Icon, LiveDot } from "@/components";
import { Reveal } from "./Reveal";

/** Full-height hero on the centred bloom variant. The 0.12x drift is the only
 *  parallax in the system, and it is disabled outright under reduced motion. */
export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[image:var(--bloom-hero)] px-10 pb-20 pt-35"
    >
      <div
        className="mx-auto w-full max-w-marketing"
        style={{ transform: `translateY(${offset * -0.12}px)` }}
      >
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 font-mono text-3xs font-semibold uppercase leading-none tracking-caps text-text-secondary">
            <LiveDot />
            Agentic research panels for beauty brands
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="m-0 font-display text-[clamp(56px,9vw,132px)] font-normal leading-tight tracking-[-.025em]">
            A focus group,
            <br />
            {/* Italic display is used once per page at most, on the phrase that
                carries the idea. */}
            <span className="italic text-iris-300">not a survey.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[620px] font-sans text-[20px] leading-relaxed text-pretty text-text-secondary">
            Describe a skincare product. A panel of grounded shopper personas
            reacts — each with a purchase-intent verdict and a reason in their
            own voice. Then move a lever and watch them change their minds.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" href="#cta">
              Run your first panel
            </Button>
            <Button variant="outline" size="lg" href="#loop">
              See the loop
              <Icon name="arrow-down" size={15} />
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Protection gradient, not a capsule. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[image:var(--scrim-bottom)]" />
    </section>
  );
}
