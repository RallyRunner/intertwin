import type { Metadata } from "next";
import { PanelApp } from "@/components/app/PanelApp";

export const metadata: Metadata = {
  title: "intertwin — run a panel",
  description:
    "Describe a skincare product, choose the panel, read the verdicts, then move a lever and watch who changes their mind.",
};

/** The whole v1 product loop. It is one route on purpose: the four screens are
 *  steps of one in-memory session, not four addressable pages. */
export default function PanelPage() {
  return <PanelApp />;
}
