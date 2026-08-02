"use client";

import { Button, Chip, Field, Icon, Input, SectionTitle, Select } from "@/components";
import {
  CATEGORY_OPTIONS,
  CERT_OPTIONS,
  CHANNEL_OPTIONS,
  EVIDENCE_OPTIONS,
  FORMAT_OPTIONS,
  FRAGRANCE_OPTIONS,
  MARKET_OPTIONS,
  type ProductDraft,
} from "@/lib/panel-data";

/** Screen A — capture the product as a shopper would meet it: formulation,
 *  claim, evidence, price, fragrance, certifications, market, channel.
 *  Ported from design-system/ui_kits/app/ProductForm.jsx. */

export interface ProductFormProps {
  draft: ProductDraft;
  setDraft: (next: ProductDraft) => void;
  onNext: () => void;
}

const COL = "flex flex-col gap-4.5";
const PAIR = "grid grid-cols-2 gap-3";

export function ProductForm({ draft, setDraft, onNext }: ProductFormProps) {
  const set = <K extends keyof ProductDraft>(key: K, value: ProductDraft[K]) =>
    setDraft({ ...draft, [key]: value });

  return (
    <div className="mx-auto max-w-[960px]">
      <div className="mb-7">
        <h1 className="m-0 mb-2 font-display text-4xl font-normal leading-tight">
          Describe the product.
        </h1>
        <p className="m-0 max-w-[620px] font-sans text-lg leading-relaxed text-text-secondary">
          The panel reacts to what a shopper would actually see — formulation,
          claim, evidence, price, channel. Be as specific as your brief is.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className={COL}>
          <SectionTitle>What it is</SectionTitle>
          <Field label="Product name" htmlFor="pf-name">
            <Input
              id="pf-name"
              value={draft.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </Field>
          <div className={PAIR}>
            <Field label="Category" htmlFor="pf-category">
              <Select
                id="pf-category"
                options={CATEGORY_OPTIONS}
                value={draft.category}
                onChange={(e) => set("category", e.target.value)}
              />
            </Field>
            <Field label="Format" htmlFor="pf-format">
              <Select
                id="pf-format"
                options={FORMAT_OPTIONS}
                value={draft.format}
                onChange={(e) => set("format", e.target.value)}
              />
            </Field>
          </div>
          <div className={PAIR}>
            <Field label="Size" htmlFor="pf-size">
              <Input
                id="pf-size"
                value={draft.size}
                suffix="mL"
                onChange={(e) => set("size", e.target.value)}
              />
            </Field>
            <Field label="Price" htmlFor="pf-price">
              <Input
                prefix="$"
                id="pf-price"
                value={draft.price}
                onChange={(e) => set("price", e.target.value)}
              />
            </Field>
          </div>
          <Field
            label="Key actives"
            hint="Comma-separated, as they appear on pack."
            htmlFor="pf-actives"
          >
            <Input
              as="textarea"
              id="pf-actives"
              value={draft.actives}
              onChange={(e) => set("actives", e.target.value)}
            />
          </Field>
        </div>

        <div className={COL}>
          <SectionTitle>What it claims</SectionTitle>
          <Field
            label="Primary claim"
            hint="Verbatim wording — personas react to phrasing, not intent."
            htmlFor="pf-claim"
          >
            <Input
              id="pf-claim"
              value={draft.claim}
              onChange={(e) => set("claim", e.target.value)}
            />
          </Field>
          <Field
            label="Evidence behind the claim"
            hint="Evidence-driven personas weigh this heavily."
            htmlFor="pf-evidence"
          >
            <Select
              id="pf-evidence"
              options={EVIDENCE_OPTIONS}
              value={draft.evidence}
              onChange={(e) => set("evidence", e.target.value)}
            />
          </Field>
          <Field label="Fragrance" htmlFor="pf-fragrance">
            <Select
              id="pf-fragrance"
              options={FRAGRANCE_OPTIONS}
              value={draft.fragrance}
              onChange={(e) => set("fragrance", e.target.value)}
            />
          </Field>
          <Field label="Certifications">
            <div className="flex flex-wrap gap-1.5 py-1">
              {CERT_OPTIONS.map((c) => (
                <Chip
                  key={c}
                  interactive
                  selected={draft.certs.includes(c)}
                  onClick={() =>
                    set(
                      "certs",
                      draft.certs.includes(c)
                        ? draft.certs.filter((x) => x !== c)
                        : draft.certs.concat(c),
                    )
                  }
                >
                  {c}
                </Chip>
              ))}
            </div>
          </Field>
          <div className={PAIR}>
            <Field label="Market" htmlFor="pf-market">
              <Select
                id="pf-market"
                options={MARKET_OPTIONS}
                value={draft.market}
                onChange={(e) => set("market", e.target.value)}
              />
            </Field>
            <Field label="Channel" htmlFor="pf-channel">
              <Select
                id="pf-channel"
                options={CHANNEL_OPTIONS}
                value={draft.channel}
                onChange={(e) => set("channel", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="lg" onClick={onNext}>
          Choose the panel
          <Icon name="arrow-right" size={15} />
        </Button>
        <span className="font-sans text-2xs leading-normal text-text-faint">
          Roughly 40 seconds to run a 6-persona panel.
        </span>
      </div>
    </div>
  );
}
