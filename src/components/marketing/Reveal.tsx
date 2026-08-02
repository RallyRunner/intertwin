"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Marketing bands fade up 22px over --dur-reveal, staggered 100ms between
 *  siblings. No bounce, no spring, no scroll-jacking — and the whole thing
 *  collapses under prefers-reduced-motion, since --dur-reveal goes to 0ms. */
export interface RevealProps {
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Reveal({ delay = 0, className, style, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSeen(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[var(--dur-reveal)] ease-out",
        seen ? "translate-y-0 opacity-100" : "translate-y-[22px] opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
