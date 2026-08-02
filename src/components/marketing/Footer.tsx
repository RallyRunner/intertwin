const COLUMNS: Array<[string, string[]]> = [
  ["Product", ["The loop", "The panel", "Persona library"]],
  ["Company", ["About", "Careers", "Contact"]],
  ["Legal", ["Privacy", "Terms", "Method note"]],
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border-hairline">
      <div className="mx-auto flex max-w-marketing flex-wrap items-start gap-12 p-10">
        <div className="font-display text-2xl leading-snug">intertwin</div>
        <div className="ml-auto flex flex-wrap gap-16 font-sans text-sm leading-normal">
          {COLUMNS.map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-2">
              <div className="mb-1 font-mono text-3xs font-semibold uppercase leading-none tracking-caps text-text-faint">
                {heading}
              </div>
              {items.map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="text-text-secondary transition-colors duration-[var(--dur-fast)] hover:text-text-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* The word "synthesized" appears wherever persona speech is introduced,
          and the framing is copy in the layout, not fine print. */}
      <div className="mx-auto max-w-marketing px-10 pb-10 font-sans text-2xs leading-normal text-text-faint">
        Persona reactions are synthesized voices grounded in realistic review
        patterns — never verbatim quotes from real reviewers. Results are a
        directional read on a curated panel, not a market projection.
      </div>
    </footer>
  );
}
