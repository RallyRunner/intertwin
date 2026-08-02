import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  Martian_Mono,
} from "next/font/google";
import "./globals.css";

/* The design system ships tokens/fonts.css as a Google Fonts CDN @import. Here
   the same three faces are loaded through next/font/google instead — self-hosted
   at build time, so there is no render-blocking request to fonts.googleapis.com
   and no layout shift. Each font's CSS variable is the name theme.css already
   expects, so --font-display / --font-sans / --font-mono keep resolving.

   These are the documented substitutions, not intertwin's licensed type — see
   design-system/readme.md, "Gaps & substitutions". */

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "intertwin — a focus group, not a survey",
  description:
    "Describe a skincare product. A panel of grounded shopper personas reacts, each with a purchase-intent verdict and a reason in their own voice. Then move a lever and watch them change their minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
