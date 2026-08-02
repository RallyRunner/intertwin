import { Button } from "@/components";
import { cn } from "@/lib/cn";
import { BAND, BIG_HEAD } from "./bands";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className={cn(BAND, "pt-0 text-center")}>
      <Reveal>
        <div className="rounded-3xl border border-border-hairline bg-[image:var(--bloom-hero)] px-12 py-22">
          <h2 className={cn(BIG_HEAD, "text-[clamp(40px,6vw,84px)]")}>
            Find the objection
            <br />
            before it costs you.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {/* The reference points this at the app loop, which is a follow-up
                task. Until that route exists it points at the live panel on
                this page — the same thing it is inviting you to do. */}
            <Button variant="primary" size="lg" href="#delta">
              Run a panel
            </Button>
            <Button variant="outline" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
