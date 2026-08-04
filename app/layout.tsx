import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

const directionContract = `
THESIS: A recruiter lands on an engineer's identity rendered as a dark technical
document — grid, numerals, one red instrument — and is routed into project depth;
refuses the pastel template portfolio and the neon-glow dev page alike.
OWN-WORLD: Near-black #0a0a0c ground, layered dark surfaces, hairline borders,
gray-to-off-white text; red #e5484d only as rules, numerals, pills, underlines;
wide Archivo display, Hanken body, JetBrains Mono for numbers/tags.
STORY: Visitor grasps who Tyler is in one viewport, believes the AI/LLM depth via
case-study cards, and acts by opening a project page.
FIRST VIEWPORT: Faded engineering grid + slow crimson sweep; name at display
scale left-aligned, mono role line above-fold, social links, Projects (primary)
+ Resume CTAs lower-left; numbered sticky nav on top.
FORM: Brief-pinned direction (user-supplied world: dark/red/mono-accent tech);
no concept seed rolled — pinned brief beats the roll.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${hanken.variable} ${jetbrains.variable} bg-ink text-fg-body antialiased`}
      >
        {/* No-JS fallback: entrance animations SSR content at opacity 0;
            without JS, force everything visible. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }} hidden />
        {children}
      </body>
    </html>
  );
}
