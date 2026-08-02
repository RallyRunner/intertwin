<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# intertwin

Research tool for beauty brands: describe a skincare product, a panel of AI shopper
personas returns purchase-intent verdicts, move a lever and the panel re-reacts.

## Design system

`design-system/` is the delivered spec, committed **verbatim and read-only**. Never edit
it to change the app — treat it as documentation. `design-system/readme.md` is the source
of truth for every visual decision (palette rationale, voice rules, motion, the "gaps &
substitutions" that are approved, not blockers). `design-system/guidelines/*.card.html`
open directly in a browser and are ground truth for rendered values.

The implementation lives in `src/`, converted to Tailwind v4:

- `src/app/theme.css` — the `@theme` block mapping design tokens into Tailwind namespaces.
  Each line comments the `design-system/tokens/*.css` token it came from. Values are a
  mechanical translation; changing one is a design decision, not a refactor.
- `src/app/tokens.css` — tokens with no Tailwind namespace (raw ramps, the bloom/scrim
  gradients, and the `--dur-*` durations). Durations stay plain custom properties so the
  `prefers-reduced-motion` block collapses every animation at once; reach them with
  `duration-[var(--dur-slow)]`, never a hardcoded `duration-500`.
- `src/components/{core,forms,panel}/` — ported from `design-system/components/`, same
  prop contracts (the `.d.ts` files there remain the contract), Tailwind classes instead
  of inline styles, plus an optional `className`.

Conventions that are load-bearing:

- The verdict triad is never remapped: teal = would buy, gold = on the fence,
  coral = would not buy. Coral is never a button fill; the primary CTA is bone.
- Components resolve conflicting state variants in JS (see `Chip`) rather than relying on
  class order — there is no `tailwind-merge`, and `src/lib/cn.ts` only joins strings.
- Per-instance values (persona colour, avatar size, verdict-bar widths) stay inline
  styles on purpose; no utility class can express them.
- Fonts come from `next/font/google` in `src/app/layout.tsx`, exposing the CSS variables
  `theme.css` expects. Do not reintroduce the CDN `@import` from `tokens/fonts.css`.
- Icons: `lucide-react`'s `DynamicIcon`, keeping the kebab-case `name` contract. Icons
  render after mount, so they do not appear in SSR output.

## The product loop

`/panel` (`src/app/panel/page.tsx` → `src/components/app/`) is the v1 loop, ported from
the reference kit in `design-system/ui_kits/app/`. It is deliberately **one route with
four wizard steps** (`steps.ts`) sharing one in-memory session — there is nothing to
persist yet, so no per-screen URLs and no state in search params.

`src/lib/panel-data.ts` holds every fixture and rule the panel runs on (personas, the
library, verdict rules, signal derivation, chat presets) and is shared with the landing
page's demo — extend it rather than duplicating a persona or a rule. Verdicts and replies
are scripted, not model output; the disclosure on screen C says so and must stay true.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
