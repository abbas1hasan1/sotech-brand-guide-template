import type { Metadata } from "next";
import { brandGuide } from "@/data/brandGuide";
import "./globals.css";

const c = brandGuide.theme.colors;
const f = brandGuide.theme.fonts;
const rootVars = `:root{--ink:${c.ink};--deep:${c.deep};--mid:${c.mid};--soft:${c.soft};--bg:${c.bg};--warm:${c.warm};--font-head:'${f.head.family}',Georgia,serif;--font-body:'${f.body.family}',system-ui,sans-serif;}`;

export const metadata: Metadata = {
  metadataBase: new URL(brandGuide.meta.siteUrl),
  title: `${brandGuide.meta.displayName} — Brand Guidelines`,
  description: `The brand system for ${brandGuide.meta.displayName} — colour, type, logo, voice, and imagery.`,
  icons: { icon: brandGuide.logo.icon },
  openGraph: {
    title: `${brandGuide.meta.displayName} — Brand Guidelines`,
    description: `The living brand system for ${brandGuide.meta.displayName}.`,
    images: [brandGuide.logo.mark],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={f.head.googleFontUrl} />
        <link rel="stylesheet" href={f.body.googleFontUrl} />
        <style dangerouslySetInnerHTML={{ __html: rootVars }} />
        {children}
      </body>
    </html>
  );
}
