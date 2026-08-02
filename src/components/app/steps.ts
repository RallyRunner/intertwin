/** The four screens of the v1 loop, in order. Ported from the `STEPS` array in
 *  design-system/ui_kits/app/Shell.jsx — the loop is one in-memory session, so
 *  these are wizard steps, not routes. */

export type StepId = "product" | "panel" | "results" | "diff";

export interface Step {
  id: StepId;
  label: string;
  /** Mono step number shown in the top-bar nav. */
  n: string;
}

export const STEPS: Step[] = [
  { id: "product", label: "Product", n: "01" },
  { id: "panel", label: "Panel", n: "02" },
  { id: "results", label: "Results", n: "03" },
  { id: "diff", label: "Compare runs", n: "04" },
];
