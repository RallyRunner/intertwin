const { Card, Chip, Icon, Avatar, VerdictBadge, PersonaCard, SectionTitle, VerdictBar, SignalBox, Slider, Switch, Field, Button, LiveDot } = window.IntertwinDesignSystem_276e72;

const band = { padding: 'var(--gap-page) 40px', maxWidth: 'var(--container-marketing)', margin: '0 auto' };
const eyebrow = { font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-secondary)', marginBottom: 'var(--space-10)' };
const bigHead = { font: 'var(--type-display)', fontSize: 'clamp(38px,5vw,66px)', margin: 0, letterSpacing: '-.02em' };

function Loop() {
  const steps = [
    { n: '01', t: 'Describe the product', d: 'Formulation, claim, evidence type, price, size, fragrance, channel. The things a shopper actually sees on the page.' },
    { n: '02', t: 'A grounded panel reacts', d: 'Each persona returns a purchase-intent verdict and a personal rationale — in a synthesized voice built from realistic review patterns.' },
    { n: '03', t: 'Move a lever, watch them move', d: 'Drop the price. Pull the fragrance. Upgrade a consumer test to a clinical claim. The panel re-reacts live, and you can see exactly who changed.' },
  ];
  return (
    <section id="loop" style={band}>
      <Reveal><div style={eyebrow}>The loop</div></Reveal>
      <Reveal><h2 style={bigHead}>Three moves, and you know<br />what to fix before you spend.</h2></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-16)', marginTop: 'var(--space-20)' }}>
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: 'var(--space-8)' }}>
              <div style={{ font: 'var(--type-data)', fontSize: 'var(--text-2xs)', color: 'var(--iris-300)', marginBottom: 'var(--space-6)' }}>{s.n}</div>
              <h3 style={{ font: 'var(--type-title)', fontSize: 'var(--text-2xl)', margin: '0 0 var(--space-6)' }}>{s.t}</h3>
              <p style={{ font: 'var(--type-body)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, textWrap: 'pretty' }}>{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PanelShowcase() {
  const people = window.ITW.personas;
  return (
    <section id="panel" style={{ ...band, paddingTop: 0 }}>
      <Reveal><div style={eyebrow}>The panel</div></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)', alignItems: 'center' }}>
        <Reveal>
          <h2 style={bigHead}>Six people who<br />disagree with each other.</h2>
          <p style={{ font: 'var(--type-body-lg)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: 520, marginTop: 'var(--space-10)', textWrap: 'pretty' }}>
            An averaged sentiment score destroys the only thing worth knowing. The ingredient researcher wants the study. The budget shopper is doing cost-per-mL maths. The clean-beauty loyalist has a fragrance filter no discount will ever move.
          </p>
          <p style={{ font: 'var(--type-body-lg)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: 520, marginTop: 'var(--space-8)', textWrap: 'pretty' }}>
            Three objections. Three different fixes. Three different costs to your business.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-10)', flexWrap: 'wrap' }}>
            <Chip tone="accent">52 curated personas</Chip><Chip>Skincare, v1</Chip><Chip>Segment-level read</Chip>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-card)' }}>
            {people.slice(0, 4).map((p, i) => (
              <PersonaCard key={p.id} name={p.name} archetype={p.archetype} color={p.color}
                verdict={p.base.v} tags={p.tags.slice(0, 2)} quote={p.base.quote}
                style={{ transform: i % 2 ? 'translateY(22px)' : 'none' }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Break() {
  return (
    <section style={{ background: 'var(--surface-break)', color: 'var(--text-on-break)', margin: 'var(--gap-page) 0' }}>
      <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', padding: 'var(--space-32) 40px' }}>
        <Reveal>
          <div style={{ font: 'var(--type-telemetry)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-on-break-muted)', marginBottom: 'var(--space-14)' }}>
            Why segment-level
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p style={{ font: 'var(--type-display)', fontSize: 'clamp(32px,4.4vw,60px)', lineHeight: 1.08, letterSpacing: '-.02em', margin: 0, maxWidth: 1000, textWrap: 'pretty' }}>
            An averaged &ldquo;62% positive&rdquo; tells you nothing you can act on. Three objections, three different fixes, three different costs to your business &mdash; and one number destroys all of it.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-16)', marginTop: 'var(--space-24)', borderTop: '1px solid var(--border-on-break)', paddingTop: 'var(--space-12)' }}>
          {[['52', 'curated personas in the v1 library'], ['3', 'verdict states, one visual grammar'], ['0', 'confidence intervals we made up']].map(([n, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <div style={{ font: 'var(--type-display)', fontSize: '52px', lineHeight: 1 }}>{n}</div>
              <div style={{ font: 'var(--type-telemetry)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-on-break-muted)', marginTop: 'var(--space-6)', lineHeight: 1.6 }}>{d}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeltaDemo() {
  const [state, setState] = React.useState({ price: 38, fragrance: false, clinical: false, trial: false });
  const people = window.ITW.personas;
  const results = people.map(p => window.ITW.verdictFor(p, state));
  const counts = { buy: 0, fence: 0, pass: 0 };
  results.forEach(r => counts[r.v]++);
  const sig = window.ITW.signals(state);
  const set = (k, v) => setState({ ...state, [k]: v });
  return (
    <section id="delta" style={{ ...band, paddingTop: 0 }}>
      <Reveal><div style={eyebrow}>The delta</div></Reveal>
      <Reveal><h2 style={bigHead}>The moment a lever moves<br />is the whole product.</h2></Reveal>
      <Reveal delay={100}>
        <p style={{ font: 'var(--type-body-lg)', fontSize: '18px', color: 'var(--text-secondary)', maxWidth: 620, marginTop: 'var(--space-10)' }}>
          This is live. Drag it.
        </p>
      </Reveal>
      <Reveal delay={140}>
        <Card surface="panel" pad="lg" radius="3xl" style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'var(--space-16)' }}>
          <div>
            <SectionTitle>Scenario controls</SectionTitle>
            <Field label="Price" value={'$' + state.price}>
              <Slider min={24} max={48} value={state.price} onChange={v => set('price', v)} minLabel="$24" maxLabel="$48" />
            </Field>
            <div style={{ marginTop: 'var(--space-9)' }}>
              {[['fragrance', 'Fragrance-free reformulation'], ['clinical', 'Clinical study claim'], ['trial', '7 mL trial size SKU']].map(([k, l], i) => (
                <Switch key={k} label={l} checked={state[k]} onChange={v => set(k, v)} style={i ? { borderTop: '1px solid var(--border-hairline)' } : null} />
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<LiveDot />}>Aggregate purchase intent — 6 personas</SectionTitle>
            <VerdictBar buy={counts.buy} fence={counts.fence} pass={counts.pass} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', marginTop: 'var(--space-9)' }}>
              <SignalBox title="Top appeals right now" tone="appeal" items={sig.appeals} />
              <SignalBox title="Top objections right now" tone="objection" items={sig.objections} empty="Every objection on this panel is resolved." />
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-9)' }}>
              {people.map((p, i) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: '6px 10px 6px 6px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
                  <Avatar name={p.name} color={p.color} size={22} />
                  <span style={{ font: 'var(--type-caption)' }}>{p.name}</span>
                  <VerdictBadge verdict={results[i].v} />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

function Honest() {
  const rows = [
    ['What it is', 'A directional read on a curated panel. A list of objections worth fixing before you brief a real study.', 'buy'],
    ['What it is not', 'A sales forecast, a market projection, or a substitute for the five-figure qualitative panel it helps you brief.', 'pass'],
  ];
  return (
    <section id="honest" style={{ ...band, paddingTop: 0 }}>
      <Reveal><div style={eyebrow}>Honestly framed</div></Reveal>
      <Reveal><h2 style={bigHead}>No fake confidence intervals.</h2></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-14)', marginTop: 'var(--space-16)' }}>
        {rows.map(([t, d, tone], i) => (
          <Reveal key={t} delay={i * 100}>
            <Card surface="panel" pad="lg" radius="3xl" style={{ height: '100%' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: tone === 'buy' ? 'var(--verdict-buy)' : 'var(--verdict-pass)' }} />
                <span style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-secondary)' }}>{t}</span>
              </div>
              <p style={{ font: 'var(--type-body-lg)', fontSize: '19px', margin: 0, lineHeight: 'var(--leading-relaxed)', textWrap: 'pretty' }}>{d}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" style={{ ...band, paddingTop: 0, textAlign: 'center' }}>
      <Reveal>
        <div style={{ padding: 'var(--space-24) var(--space-16)', borderRadius: 'var(--radius-3xl)', border: '1px solid var(--border-hairline)', background: 'var(--bloom-hero)' }}>
          <h2 style={{ ...bigHead, fontSize: 'clamp(40px,6vw,84px)' }}>Find the objection<br />before it costs you.</h2>
          <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', marginTop: 'var(--space-14)' }}>
            <Button variant="primary" size="lg" href="../app/index.html">Run a panel</Button>
            <Button variant="outline" size="lg">Talk to us</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-hairline)', marginTop: 'var(--space-16)' }}>
      <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', padding: '40px', display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ font: 'var(--type-title)', fontSize: 'var(--text-2xl)' }}>intertwin</div>
        <div style={{ display: 'flex', gap: 'var(--space-20)', marginLeft: 'auto', font: 'var(--type-small)' }}>
          {[['Product', ['The loop', 'The panel', 'Persona library']], ['Company', ['About', 'Careers', 'Contact']], ['Legal', ['Privacy', 'Terms', 'Method note']]].map(([h, items]) => (
            <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-faint)', marginBottom: 'var(--space-2)' }}>{h}</div>
              {items.map(i => <a key={i} href="#top" style={{ color: 'var(--text-secondary)' }}>{i}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', padding: '0 40px 40px', font: 'var(--type-caption)', color: 'var(--text-faint)' }}>
        Persona reactions are synthesized voices grounded in realistic review patterns — never verbatim quotes from real reviewers. Results are a directional read on a curated panel, not a market projection.
      </div>
    </footer>
  );
}

Object.assign(window, { Loop, PanelShowcase, Break, DeltaDemo, Honest, CTA, Footer });
