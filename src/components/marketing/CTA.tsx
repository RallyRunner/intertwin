import Link from "next/link";
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
            <Link href="/panel" className="inline-flex">
              <Button variant="primary" size="lg" as="div">
                Run a panel
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
