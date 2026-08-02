import type { CSSProperties } from "react";

/**
 * The intertwin mark: two lowercase serif "i"s on one shared foot serif,
 * twinned rather than doubled. The right dot is iris — the synthesized twin
 * of a real shopper — and is the same colour the product uses elsewhere for
 * "this moved in the last re-run". See design-system/assets/intertwin-logo
 * for the full spec, favicon variants, and lockup guidance.
 *
 * Don't recolour the dot to a verdict colour (teal/gold/coral) — those mean
 * would buy / on the fence / would not buy and nothing else.
 */
export interface LogoProps {
  size?: number;
  /** iris dot colour. Defaults to --iris-500. */
  dot?: string;
  /** stem/foot ink colour. Defaults to --bone-100. */
  ink?: string;
  className?: string;
  style?: CSSProperties;
}

export function Logo({
  size = 20,
  dot = "var(--iris-500)",
  ink = "var(--bone-100)",
  className,
  style,
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="intertwin"
      className={className}
      style={style}
    >
      <g fill={ink}>
        <path d="M18.9 26H25.1v26.8h-6.2z" />
        <path d="M38.9 26h6.2v26.8h-6.2z" />
        <path d="M14.6 54.9c2.9-.2 4.3-1.3 4.3-3.3h6.2c0 2 1.4 3.1 4.3 3.3h5.2c2.9-.2 4.3-1.3 4.3-3.3h6.2c0 2 1.4 3.1 4.3 3.3V57H14.6z" />
      </g>
      <circle cx="22" cy="16.6" r="4.1" fill={ink} />
      <circle cx="42" cy="16.6" r="4.1" fill={dot} />
    </svg>
  );
}
