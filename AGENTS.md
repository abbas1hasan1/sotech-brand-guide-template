# sotech-brand-guide-template — data contract

A themeable Next.js **brand guide / brand experience**. The Senior Developer's
`/brand-guide-deployer` clones this, fills ONE file, and deploys to Vercel.

## The only file you edit: `src/data/brandGuide.ts`

Fill it from the client's brand kit `clients/{slug}/brand-tokens.json`. Do **not** edit components, `globals.css`, `layout.tsx`, or `page.tsx`.

### Mapping `brand-tokens.json` → `brandGuide.ts`
- `meta.displayName / slug / industry / location` ← kit + brain. `meta.preparedBy` = `"SoTech"`. `meta.siteUrl` = the production alias `https://sotech-{slug}-brand-guide.vercel.app` (drives `metadataBase` / OG — must NOT be localhost).
- `theme.colors` — six **slots**, names fixed, values vary: `ink` (primary/darkest text), `deep` (secondary), `mid` (accent), `soft` (light accent), `bg` (background/lightest), `warm` (warm accent). Map the kit's `brandColors` light→`soft/mid`, dark→`ink/deep`, page bg→`bg`.
- `theme.fonts.head / body` ← kit `fonts.heading / body` (`family` + `googleFontUrl`).
- `logo.mark` / `logo.icon` — copy the kit's `logos/` files into `public/` (e.g. `public/logo.png`, `public/icon.png`) and point here. If the kit has no logo, leave the defaults; the wordmark still renders.
- `palette` — one row per brand colour (name + role + hex). `scale` — keep as-is unless the kit specifies sizes.
- `voice` (`quote`, `approved`, `avoid`), `styleAnchor.text`, `audience.text` ← kit `tone` / `styleAnchor` / `audience`. **Drop the `illustrative: true` flag** on any block you fill with real kit data (it hides the "illustrative" caption).
- `imagery` — set each `src` to a real image copied into `public/` (from the kit's `references/`); without `src` a captioned gradient placeholder renders.
- `pillars.items` ← kit `editorialPillars` (drop `illustrative` once real).
- `tagline` — short hero line; wrap ONE word in `[[ ]]` to give it the signature underline.

## Pre-push QA
- `npm run build` passes. No `illustrative` captions left on real data. `meta.siteUrl` is the vercel alias (OG image not localhost). Logo + icon render (real files in `/public`). Check desktop (1440) + mobile (375): chapters reveal, progress bar + dots track, swatches copy.
- Deploy `vercel --prod --project sotech-{slug}-brand-guide` and post the **production alias** (never the hashed preview URL → 401).
