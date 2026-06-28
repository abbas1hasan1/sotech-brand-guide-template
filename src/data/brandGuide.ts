/* ==========================================================================
   BRAND GUIDE — data contract (the ONLY file /brand-guide-deployer edits)
   Filled from clients/{slug}/brand-tokens.json. Ships themed for the example
   client (Garden Montessori Schools). Everything visual is driven from here.
   ========================================================================== */

export interface Swatch { name: string; role: string; hex: string }
export interface FontDef { family: string; googleFontUrl: string }
export interface Pillar { name: string; covers: string; mood: string }
export interface ImageRef { n: string; cap: string; src?: string } // src optional → real PNG in /public

export interface BrandGuide {
  meta: { displayName: string; slug: string; industry: string; location: string; preparedBy: string; updated: string; siteUrl: string };
  /* THEME — colour SLOTS (names fixed, values vary per client):
     ink=primary/text(darkest) · deep=secondary · mid=accent · soft=light accent ·
     bg=background(lightest) · warm=warm accent.  Map the client palette light→soft/mid, dark→ink/deep. */
  theme: {
    colors: { ink: string; deep: string; mid: string; soft: string; bg: string; warm: string };
    fonts: { head: FontDef; body: FontDef };
  };
  logo: { mark: string; icon: string };       // paths under /public (real build copies fetched files here)
  tagline: string;                            // hero line; wrap one word in [[ ]] to give it the signature underline
  palette: Swatch[];
  scale: { label: string; sample: string; kind: "head" | "body" }[];
  voice: { quote: string; approved: string[]; avoid: string[]; illustrative?: boolean };
  styleAnchor: { text: string; illustrative?: boolean };
  audience: { text: string; illustrative?: boolean };
  imagery: ImageRef[];
  pillars: { items: Pillar[]; illustrative?: boolean };
}

export const brandGuide: BrandGuide = {
  meta: {
    displayName: "Garden Montessori Schools",
    slug: "garden-montessori-schools",
    industry: "Montessori education",
    location: "Houston, TX",
    preparedBy: "SoTech",
    updated: "June 2026",
    siteUrl: "https://sotech-garden-montessori-schools-brand-guide.vercel.app",
  },
  theme: {
    colors: { ink: "#384933", deep: "#4a5d44", mid: "#6e8066", soft: "#c1cfa1", bg: "#fffcf2", warm: "#8b7355" },
    fonts: {
      head: { family: "Libre Baskerville", googleFontUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" },
      body: { family: "DM Sans", googleFontUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" },
    },
  },
  logo: { mark: "/logo.png", icon: "/icon.png" },
  tagline: "It starts with a [[seed]].",
  palette: [
    { name: "Forest Green", role: "primary / text", hex: "#384933" },
    { name: "Pine", role: "secondary", hex: "#4a5d44" },
    { name: "Sage", role: "accent", hex: "#6e8066" },
    { name: "Celery", role: "light accent", hex: "#c1cfa1" },
    { name: "Cream", role: "background", hex: "#fffcf2" },
    { name: "Earth", role: "warm accent", hex: "#8b7355" },
  ],
  scale: [
    { label: "H1 / 56", sample: "Where children grow", kind: "head" },
    { label: "H2 / 32", sample: "A prepared environment", kind: "head" },
    { label: "Body / 17", sample: "Nurturing independence, curiosity, and a lifelong love of learning.", kind: "body" },
    { label: "Caption", sample: "Serving families across the greater Houston area.", kind: "body" },
  ],
  voice: {
    quote: "Warm, calm, and nurturing — we speak to parents like a trusted guide.",
    approved: ["nurturing", "independence", "curiosity", "prepared environment", "hands-on", "whole child"],
    avoid: ["daycare", "babysitting", "strict", "drill", "cheap"],
    illustrative: true,
  },
  styleAnchor: {
    text: "Soft natural light, warm wood tones, real classroom moments, children engaged with hands-on materials, calm uncluttered spaces with greenery.",
    illustrative: true,
  },
  audience: {
    text: "Houston-area parents of children 18 months–6 years seeking an authentic Montessori education.",
    illustrative: true,
  },
  imagery: [
    { n: "01", cap: "Practical-life station, soft window light" },
    { n: "02", cap: "Wooden Montessori materials on a shelf" },
    { n: "03", cap: "Outdoor garden classroom + greenery" },
    { n: "04", cap: "Guide kneeling beside a child" },
    { n: "05", cap: "Hands pouring, sensorial detail" },
    { n: "06", cap: "Reading nook, natural materials" },
    { n: "07", cap: "Circle time, prepared environment" },
    { n: "08", cap: "Entrance / signage, golden hour" },
  ],
  pillars: {
    illustrative: true,
    items: [
      { name: "The Montessori Method", covers: "Philosophy, the prepared environment", mood: "warm-afternoon-studio" },
      { name: "In the Classroom", covers: "Real moments, materials, a day in the life", mood: "soft-natural-light" },
      { name: "Parent Corner", covers: "Tips for home, Montessori parenting", mood: "warm-conversational" },
      { name: "Family Stories", covers: "Testimonials, alumni, community wins", mood: "golden-hour" },
      { name: "Our Garden", covers: "Outdoor learning, nature, seasonal", mood: "paper-collage-craft" },
    ],
  },
};
