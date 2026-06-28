# SoTech Brand Guide Template

A themeable Next.js **brand guide / brand experience** — the productized version of a SoTech brand kit. Chaptered full-bleed scroll, reveal engine, click-to-copy tokens, themed entirely from one data file.

- **Edit one file:** `src/data/brandGuide.ts` (filled from `clients/{slug}/brand-tokens.json`). See `AGENTS.md` for the data contract.
- Cloned + deployed per client by SoTech's Senior Developer (`/brand-guide-deployer`) → `https://sotech-{slug}-brand-guide.vercel.app`.

```bash
npm install && npm run dev   # http://localhost:3000
npm run build                # production build
```

Public template under `abbas1hasan1` (sibling of `sotech-proposal-template-stylec`).
