import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Label + control + hint wrapper. The optional right-aligned `value` is the
 *  live readout for sliders — gold mono, the price-readout pattern. */
export interface FieldProps {
  label?: string;
  /** Live value shown right-aligned in gold mono. */
  value?: string | number;
  hint?: string;
  htmlFor?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Field({
  label,
  value,
  hint,
  htmlFor,
  className,
  style,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} style={style}>
      {(label || value != null) && (
        <label
          htmlFor={htmlFor}
          className="flex items-baseline justify-between gap-2 font-sans text-base leading-normal text-text-primary"
        >
          <span>{label}</span>
          {value != null && (
            <b className="font-mono text-base font-medium text-verdict-fence">
              {value}
            </b>
          )}
        </label>
      )}
      {children}
      {hint && (
        <div className="font-sans text-2xs leading-normal text-text-faint">
          {hint}
        </div>
      )}
    </div>
  );
}
