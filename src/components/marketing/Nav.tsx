"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Logo } from "@/components";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#loop", label: "The loop" },
  { href: "#panel", label: "The panel" },
  { href: "#delta", label: "The delta" },
];

/** Fixed nav. It is one of exactly two places in the system where transparency
 *  and blur appear, and only after 40px of scroll. */
export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex items-center gap-5 border-b px-10 py-4.5 transition-[background-color,border-color] duration-[var(--dur-medium)] ease-[ease]",
        solid
          ? "border-border-hairline bg-surface-glass backdrop-blur-glass"
          : "border-transparent bg-transparent",
      )}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-[9px] font-display text-2xl leading-snug tracking-[-.01em] text-text-primary"
      >
        <Logo size={24} />
        intertwin
      </a>

      <nav className="ml-12 hidden gap-5 font-sans text-sm leading-normal md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-text-secondary transition-colors duration-[var(--dur-fast)] hover:text-text-primary"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="ml-auto">
        {/* Link owns the navigation (prefetch + client transition), Button owns
            the chrome — hence as="div", the variant it ships for this case. */}
        <Link href="/panel" className="inline-flex">
          <Button variant="primary" size="sm" as="div">
            Run a panel
          </Button>
        </Link>
      </div>
    </header>
  );
}
