import type { Verdict } from "@/components";

/**
 * Demo fixtures for the intertwin panel, ported from
 * design-system/ui_kits/app/data.js.
 *
 * Verdicts and replies here are SCRIPTED, not model output. The landing page's
 * live demo runs the same rules as the product reference so the delta a visitor
 * drags on the marketing page is the delta the product produces.
 */

export interface PersonaReaction {
  v: Verdict;
  quote: string;
  full: string;
}

export interface Persona {
  id: string;
  name: string;
  archetype: string;
  color: string;
  tags: string[];
  /** Price at which this persona moves up one tier of intent. */
  flipBelow?: number;
  /** Price at which this persona moves to "would buy" outright. */
  buyBelow?: number;
  /** The single lever that resolves this persona's objection. */
  sensitive?: "fragrance" | "clinical" | "trial";
  /** Price barely moves this persona. */
  priceInsensitive?: boolean;
  base: PersonaReaction;
}

export interface Scenario {
  price: number;
  fragrance: boolean;
  clinical: boolean;
  trial: boolean;
}

export const personas: Persona[] = [
  {
    id: "marisol",
    name: "Marisol",
    archetype: "Budget-Conscious Multitasker",
    color: "var(--color-persona-1)",
    tags: ["Oily / acne-prone", "Mass budget", "Value-driven"],
    flipBelow: 30,
    buyBelow: 26,
    base: {
      v: "pass",
      quote:
        "Cute bottle, but $38 for 30 mL of vitamin C? I can get 20% for a third of that.",
      full: "Marisol tracks cost-per-mL against her drugstore benchmarks. At $38 she rates this a pass — she'd need a clear reason it outperforms her $12 alternative. She's not fragrance-sensitive and doesn't care about the clinical-vs-consumer-test distinction; price is the whole story for her.",
    },
  },
  {
    id: "devon",
    name: "Devon",
    archetype: "Ingredient Researcher",
    color: "var(--color-persona-2)",
    tags: ["Combination", "Hyperpigmentation", "Evidence-driven"],
    sensitive: "clinical",
    base: {
      v: "fence",
      quote:
        "15% L-AA + ferulic is a solid stabilized combo, but 'consumer test, n=128' isn't a clinical claim — I want the study.",
      full: "Devon reads INCI lists before reviews. The formulation itself (L-ascorbic acid + ferulic acid, a known stabilizing pair) earns real credibility, but the evidence backing the brightening claim is a consumer perception test, not a dermatologist-graded clinical study — that gap keeps her on the fence regardless of price.",
    },
  },
  {
    id: "priya",
    name: "Priya",
    archetype: "Clean Beauty Loyalist",
    color: "var(--color-persona-3)",
    tags: ["Sensitive", "Fragrance-free only", "Ingredient-cautious"],
    sensitive: "fragrance",
    base: {
      v: "pass",
      quote:
        "Auto-pass the second I see 'fragrance' on a serum I'd use daily near my eyes.",
      full: "Priya has a hard filter: any added fragrance in a leave-on skincare product is disqualifying, independent of efficacy claims or price. This is a categorical rule, not a sliding preference, so she won't move off 'would not buy' until the fragrance itself is addressed.",
    },
  },
  {
    id: "tasha",
    name: "Tasha",
    archetype: "Luxury Skinfluencer",
    color: "var(--color-persona-4)",
    tags: ["Normal / early aging", "Prestige budget", "Brand & experience"],
    priceInsensitive: true,
    base: {
      v: "buy",
      quote:
        "Weightless texture, pretty packaging, a citrus note that feels premium rather than an afterthought. This films well.",
      full: "Tasha evaluates sensory experience and shelf appeal as much as function. Price in the $30–48 band reads as 'accessible prestige' to her audience, so the slider barely moves her — she's anchored on packaging and finish, not cost-per-mL.",
    },
  },
  {
    id: "renee",
    name: "Renee",
    archetype: "Repurchase Loyalist",
    color: "var(--color-persona-5)",
    tags: ["Dry", "Brand-loyal", "Dermatologist-recommended"],
    flipBelow: 28,
    base: {
      v: "fence",
      quote:
        "I've used the same derm-recommended vitamin C for three years. This would have to be noticeably cheaper or clearly better.",
      full: "Renee's switching cost is high — an established routine plus a dermatologist recommendation she trusts over a new DTC claim. A moderate price edge nudges her to a maybe (worth a sample); it won't move her to 'would buy' without a stronger differentiated reason to switch.",
    },
  },
  {
    id: "jordan",
    name: "Jordan",
    archetype: "Sample-First Skeptic",
    color: "var(--color-persona-6)",
    tags: ["Combo / acne-prone", "Claims-skeptical", "Trial-size shopper"],
    sensitive: "trial",
    base: {
      v: "pass",
      quote:
        "Vitamin C can break me out. I'm not committing $38 to a full size sight unseen.",
      full: "Jordan has been burned by reactive skin before and refuses to buy full-size actives without trying them first. No price point fixes this — what changes his answer is a trial SKU, which removes the risk of committing to a size he can't return.",
    },
  },
];

/** Which verdict this persona returns under a given scenario. */
export function verdictFor(p: Persona, s: Scenario): PersonaReaction {
  const base = p.base;

  if (p.sensitive === "fragrance" && s.fragrance) {
    return {
      v: "buy",
      quote: "Fragrance-free changes everything — this goes straight on my list.",
      full: `${base.full} With the fragrance-free reformulation on, Priya's hard filter no longer applies and she moves to 'would buy'.`,
    };
  }
  if (p.sensitive === "clinical" && s.clinical) {
    return {
      v: "buy",
      quote:
        "An actual clinical study behind the brightening claim is what I needed. Sold.",
      full: `${base.full} With a clinical-study claim in place of the consumer test, the evidence bar Devon needed is met.`,
    };
  }
  if (p.sensitive === "trial" && s.trial) {
    return {
      v: "fence",
      quote:
        "A 7 mL trial size means I can test for breakouts before committing. I'd try that.",
      full: `${base.full} With a trial SKU available, Jordan's risk objection is addressed and he moves to the fence.`,
    };
  }
  if (p.priceInsensitive) return base;
  if (typeof p.buyBelow === "number" && s.price <= p.buyBelow) {
    return {
      v: "buy",
      quote: "At this price it's a clear yes.",
      full: `${base.full} At $${s.price} the price is low enough to move her to 'would buy' outright.`,
    };
  }
  if (typeof p.flipBelow === "number" && s.price <= p.flipBelow) {
    return {
      v: base.v === "pass" ? "fence" : "buy",
      quote: "That price gets my attention — I'd consider it now.",
      full: `${base.full} At $${s.price} the lower price moves her up one tier of intent.`,
    };
  }
  return base;
}

/** The derived appeals / objections read for a scenario. */
export function signals(s: Scenario): {
  appeals: string[];
  objections: string[];
} {
  const appeals = ["Stabilized L-AA + ferulic pairing", "Cruelty-free"];
  const objections: string[] = [];

  if (!s.fragrance) objections.push("Added fragrance (sensitive-skin blocker)");
  else appeals.push("Fragrance-free reformulation");

  if (!s.clinical) objections.push("Evidence is consumer-test, not clinical");
  else appeals.push("Clinical-study-backed claim");

  if (!s.trial) objections.push("No trial size — high risk to commit");
  else appeals.push("Trial size available");

  if (s.price > 32) objections.push("Price vs. mass-market alternatives");

  return { appeals, objections };
}
