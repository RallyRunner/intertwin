const { Card, Button, Chip, Icon, Field, Input, Select, SectionTitle } = window.IntertwinDesignSystem_276e72;

function ProductForm({ draft, setDraft, onNext }) {
  const set = (k, v) => setDraft({ ...draft, [k]: v });
  const col = { display: 'flex', flexDirection: 'column', gap: 'var(--space-9)' };
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <div style={{ font: 'var(--type-display)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>Describe the product.</div>
        <div style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', maxWidth: 620 }}>
          The panel reacts to what a shopper would actually see — formulation, claim, evidence, price, channel. Be as specific as your brief is.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
        <div style={col}>
          <SectionTitle>What it is</SectionTitle>
          <Field label="Product name"><Input value={draft.name} onChange={e => set('name', e.target.value)} /></Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <Field label="Category"><Select options={['Skincare']} /></Field>
            <Field label="Format"><Select options={['Serum', 'Cream', 'Cleanser', 'Toner', 'Mask', 'Oil']} value={draft.format} onChange={e => set('format', e.target.value)} /></Field>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <Field label="Size"><Input value={draft.size} suffix="mL" onChange={e => set('size', e.target.value)} /></Field>
            <Field label="Price"><Input prefix="$" value={draft.price} onChange={e => set('price', e.target.value)} /></Field>
          </div>
          <Field label="Key actives" hint="Comma-separated, as they appear on pack.">
            <Input as="textarea" value={draft.actives} onChange={e => set('actives', e.target.value)} />
          </Field>
        </div>

        <div style={col}>
          <SectionTitle>What it claims</SectionTitle>
          <Field label="Primary claim" hint="Verbatim wording — personas react to phrasing, not intent.">
            <Input value={draft.claim} onChange={e => set('claim', e.target.value)} />
          </Field>
          <Field label="Evidence behind the claim" hint="Evidence-driven personas weigh this heavily.">
            <Select options={['Consumer perception test (n=128)', 'Clinical study, dermatologist-graded', 'In-vitro only', 'No evidence cited']} value={draft.evidence} onChange={e => set('evidence', e.target.value)} />
          </Field>
          <Field label="Fragrance"><Select options={['Light citrus fragrance', 'Unscented', 'Fragrance-free (no masking)']} value={draft.fragrance} onChange={e => set('fragrance', e.target.value)} /></Field>
          <Field label="Certifications">
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', padding: '4px 0' }}>
              {['Cruelty-free', 'Vegan', 'Dermatologist-tested', 'Reef-safe', 'Refillable'].map(c => (
                <Chip key={c} interactive selected={draft.certs.includes(c)}
                  onClick={() => set('certs', draft.certs.includes(c) ? draft.certs.filter(x => x !== c) : draft.certs.concat(c))}>{c}</Chip>
              ))}
            </div>
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <Field label="Market"><Select options={['US market', 'UK market', 'EU market']} /></Field>
            <Field label="Channel"><Select options={['DTC + Sephora', 'DTC only', 'Mass retail', 'Pharmacy']} /></Field>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
        <Button variant="primary" size="lg" onClick={onNext}>Choose the panel<Icon name="arrow-right" size={15} /></Button>
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-faint)' }}>Roughly 40 seconds to run a 6-persona panel.</span>
      </div>
    </div>
  );
}

Object.assign(window, { ProductForm });
