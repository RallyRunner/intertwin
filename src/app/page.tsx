import { Break } from "@/components/marketing/Break";
import { CTA } from "@/components/marketing/CTA";
import { DeltaDemo } from "@/components/marketing/DeltaDemo";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Loop } from "@/components/marketing/Loop";
import { Nav } from "@/components/marketing/Nav";
import { PanelShowcase } from "@/components/marketing/PanelShowcase";

export default function LandingPage() {
  return (
    <div className="flex-1">
      <Nav />
      <Hero />
      <Loop />
      <PanelShowcase />
      <Break />
      <DeltaDemo />
      <CTA />
      <Footer />
    </div>
  );
}
