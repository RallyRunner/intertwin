const { Button, Chip, Icon, LiveDot, VerdictBar } = window.IntertwinDesignSystem_276e72;

function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{
    opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(22px)',
    transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`,
    ...style,
  }}>{children}</div>;
}

function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, display: 'flex', alignItems: 'center',
      padding: '18px 40px', gap: 'var(--space-10)',
      background: solid ? 'var(--surface-glass)' : 'transparent',
      backdropFilter: solid ? 'var(--blur-glass)' : 'none',
      borderBottom: `1px solid ${solid ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'background var(--dur-medium) ease, border-color var(--dur-medium) ease',
    }}>
      <a href="#top" style={{ font: 'var(--type-title)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', letterSpacing: '-.01em' }}>intertwin</a>
      <nav style={{ display: 'flex', gap: 'var(--space-10)', marginLeft: 'var(--space-16)', font: 'var(--type-small)' }}>
        <a href="#loop" style={{ color: 'var(--text-secondary)' }}>The loop</a>
        <a href="#panel" style={{ color: 'var(--text-secondary)' }}>The panel</a>
        <a href="#delta" style={{ color: 'var(--text-secondary)' }}>The delta</a>
        <a href="#honest" style={{ color: 'var(--text-secondary)' }}>What it isn&rsquo;t</a>
      </nav>
      <div style={{ marginLeft: 'auto' }}><Button variant="primary" size="sm" href="#cta">Run a panel</Button></div>
    </header>
  );
}

function Hero() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const on = () => setT(window.scrollY);
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <section id="top" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '140px 40px 80px', background: 'var(--bloom-hero)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', width: '100%', transform: `translateY(${t * -0.12}px)` }}>
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)', font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
            <LiveDot />Agentic research panels for beauty brands
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ font: 'var(--type-hero)', fontSize: 'clamp(56px,9vw,132px)', margin: 0, letterSpacing: '-.025em' }}>
            A focus group,<br /><span style={{ fontStyle: 'italic', color: 'var(--iris-300)' }}>not a survey.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ font: 'var(--type-body-lg)', fontSize: '20px', color: 'var(--text-secondary)', maxWidth: 620, marginTop: 'var(--space-12)', textWrap: 'pretty' }}>
            Describe a skincare product. A panel of grounded shopper personas reacts — each with a purchase-intent verdict and a reason in their own voice. Then move a lever and watch them change their minds.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', marginTop: 'var(--space-14)' }}>
            <Button variant="primary" size="lg" href="#cta">Run your first panel</Button>
            <Button variant="outline" size="lg" href="#loop">See the loop<Icon name="arrow-down" size={15} /></Button>
          </div>
        </Reveal>
      </div>
      <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: 160, background: 'var(--scrim-bottom)', pointerEvents: 'none' }} />
    </section>
  );
}

Object.assign(window, { Reveal, Nav, Hero });
