// Demo fixtures for the intertwin app UI kit. Verdicts and replies are scripted, not model output.
window.ITW = window.ITW || {};
window.ITW.product = {
  name: 'Lumina 15% Vitamin C Brightening Serum',
  category: 'Skincare', format: 'Serum', size: '30 mL', price: 38,
  market: 'US market', channel: 'DTC + Sephora',
  attributes: [
    { label: '15% L-Ascorbic Acid + Ferulic Acid' },
    { label: '"Brightens dark spots in 2 weeks" (consumer test, n=128)' },
    { label: 'Light citrus fragrance', tone: 'objection' },
    { label: 'Cruelty-free' },
  ],
};

window.ITW.personas = [
  { id: 'marisol', name: 'Marisol', archetype: 'Budget-Conscious Multitasker', color: 'var(--persona-1)',
    tags: ['Oily / acne-prone', 'Mass budget', 'Value-driven'], flipBelow: 30, buyBelow: 26,
    base: { v: 'pass', quote: "Cute bottle, but $38 for 30 mL of vitamin C? I can get 20% for a third of that.",
      full: "Marisol tracks cost-per-mL against her drugstore benchmarks. At $38 she rates this a pass — she'd need a clear reason it outperforms her $12 alternative. She's not fragrance-sensitive and doesn't care about the clinical-vs-consumer-test distinction; price is the whole story for her." } },
  { id: 'devon', name: 'Devon', archetype: 'Ingredient Researcher', color: 'var(--persona-2)',
    tags: ['Combination', 'Hyperpigmentation', 'Evidence-driven'], sensitive: 'clinical',
    base: { v: 'fence', quote: "15% L-AA + ferulic is a solid stabilized combo, but 'consumer test, n=128' isn't a clinical claim — I want the study.",
      full: "Devon reads INCI lists before reviews. The formulation itself (L-ascorbic acid + ferulic acid, a known stabilizing pair) earns real credibility, but the evidence backing the brightening claim is a consumer perception test, not a dermatologist-graded clinical study — that gap keeps her on the fence regardless of price." } },
  { id: 'priya', name: 'Priya', archetype: 'Clean Beauty Loyalist', color: 'var(--persona-3)',
    tags: ['Sensitive', 'Fragrance-free only', 'Ingredient-cautious'], sensitive: 'fragrance',
    base: { v: 'pass', quote: "Auto-pass the second I see 'fragrance' on a serum I'd use daily near my eyes.",
      full: "Priya has a hard filter: any added fragrance in a leave-on skincare product is disqualifying, independent of efficacy claims or price. This is a categorical rule, not a sliding preference, so she won't move off 'would not buy' until the fragrance itself is addressed." } },
  { id: 'tasha', name: 'Tasha', archetype: 'Luxury Skinfluencer', color: 'var(--persona-4)',
    tags: ['Normal / early aging', 'Prestige budget', 'Brand & experience'], priceInsensitive: true,
    base: { v: 'buy', quote: "Weightless texture, pretty packaging, a citrus note that feels premium rather than an afterthought. This films well.",
      full: "Tasha evaluates sensory experience and shelf appeal as much as function. Price in the $30–48 band reads as 'accessible prestige' to her audience, so the slider barely moves her — she's anchored on packaging and finish, not cost-per-mL." } },
  { id: 'renee', name: 'Renee', archetype: 'Repurchase Loyalist', color: 'var(--persona-5)',
    tags: ['Dry', 'Brand-loyal', 'Dermatologist-recommended'], flipBelow: 28,
    base: { v: 'fence', quote: "I've used the same derm-recommended vitamin C for three years. This would have to be noticeably cheaper or clearly better.",
      full: "Renee's switching cost is high — an established routine plus a dermatologist recommendation she trusts over a new DTC claim. A moderate price edge nudges her to a maybe (worth a sample); it won't move her to 'would buy' without a stronger differentiated reason to switch." } },
  { id: 'jordan', name: 'Jordan', archetype: 'Sample-First Skeptic', color: 'var(--persona-6)',
    tags: ['Combo / acne-prone', 'Claims-skeptical', 'Trial-size shopper'], sensitive: 'trial',
    base: { v: 'pass', quote: "Vitamin C can break me out. I'm not committing $38 to a full size sight unseen.",
      full: "Jordan has been burned by reactive skin before and refuses to buy full-size actives without trying them first. No price point fixes this — what changes his answer is a trial SKU, which removes the risk of committing to a size he can't return." } },
];

// The wider platform-curated library shown on the panel-selection screen.
window.ITW.library = window.ITW.personas.concat([
  { id: 'aiko', name: 'Aiko', archetype: 'Routine Minimalist', color: 'var(--persona-7)', tags: ['Normal', 'Few-step routine'] },
  { id: 'noor', name: 'Noor', archetype: 'Derm-Guided Treater', color: 'var(--persona-8)', tags: ['Melasma', 'Prescription-adjacent'] },
  { id: 'beatriz', name: 'Beatriz', archetype: 'Value Bulk Buyer', color: 'var(--persona-1)', tags: ['Combination', 'Warehouse channel'] },
  { id: 'kenji', name: 'Kenji', archetype: 'Texture-First Shopper', color: 'var(--persona-2)', tags: ['Oily', 'Layering-heavy'] },
  { id: 'harriet', name: 'Harriet', archetype: 'Mature Skin Pragmatist', color: 'var(--persona-5)', tags: ['Dry / mature', 'Efficacy-first'] },
  { id: 'sol', name: 'Sol', archetype: 'Sustainability Screener', color: 'var(--persona-7)', tags: ['Refill-seeking', 'Packaging-critical'] },
]);

window.ITW.verdictFor = function (p, s) {
  const base = p.base || { v: 'fence', quote: '', full: '' };
  if (p.sensitive === 'fragrance' && s.fragrance) return { v: 'buy', quote: "Fragrance-free changes everything — this goes straight on my list.", full: base.full + " With the fragrance-free reformulation on, Priya's hard filter no longer applies and she moves to 'would buy'." };
  if (p.sensitive === 'clinical' && s.clinical) return { v: 'buy', quote: "An actual clinical study behind the brightening claim is what I needed. Sold.", full: base.full + " With a clinical-study claim in place of the consumer test, the evidence bar Devon needed is met." };
  if (p.sensitive === 'trial' && s.trial) return { v: 'fence', quote: "A 7 mL trial size means I can test for breakouts before committing. I'd try that.", full: base.full + " With a trial SKU available, Jordan's risk objection is addressed and he moves to the fence." };
  if (p.priceInsensitive) return base;
  if (typeof p.buyBelow === 'number' && s.price <= p.buyBelow) return { v: 'buy', quote: "At this price it's a clear yes.", full: base.full + ` At $${s.price} the price is low enough to move her to 'would buy' outright.` };
  if (typeof p.flipBelow === 'number' && s.price <= p.flipBelow) return { v: base.v === 'pass' ? 'fence' : 'buy', quote: "That price gets my attention — I'd consider it now.", full: base.full + ` At $${s.price} the lower price moves her up one tier of intent.` };
  return base;
};

window.ITW.signals = function (s) {
  const appeals = ['Stabilized L-AA + ferulic pairing', 'Cruelty-free'];
  const objections = [];
  if (!s.fragrance) objections.push('Added fragrance (sensitive-skin blocker)'); else appeals.push('Fragrance-free reformulation');
  if (!s.clinical) objections.push('Evidence is consumer-test, not clinical'); else appeals.push('Clinical-study-backed claim');
  if (!s.trial) objections.push('No trial size — high risk to commit'); else appeals.push('Trial size available');
  if (s.price > 32) objections.push('Price vs. mass-market alternatives');
  return { appeals, objections };
};

window.ITW.presets = {
  switch: { q: 'What would make you switch from your current serum?', a: [
    ['renee', "Honestly? A dermatologist backing it, or a friend's before/after. Marketing copy alone won't do it."],
    ['jordan', "A sample I can patch-test for two weeks without committing to a full bottle."] ] },
  worth: { q: 'Is $38 worth it for 30 mL?', a: [
    ['marisol', "Not for me — that's $1.27/mL when I can get a comparable percentage for under 40 cents/mL elsewhere."],
    ['tasha', "For the texture and packaging, yes — I'd pay more for how this feels and photographs."] ] },
  scent: { q: 'Does the citrus scent bother you?', a: [
    ['priya', "Yes — any added fragrance in a leave-on serum is a dealbreaker for me regardless of how it's dosed."],
    ['devon', "Not directly, but it makes me wonder if fragrance was prioritised over keeping the formula minimal."] ] },
};
