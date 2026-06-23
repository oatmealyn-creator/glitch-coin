# GLITCH — Digital Plasticity

## Stack
- Astro v7 (static output)
- Tailwind CSS v4 (custom `clay-card`, `clay-btn-primary`, `clay-btn-accent` utilities)
- Vercel (hosting — free tier)
- Vercel Analytics (free tier)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build

## Project Structure
```
src/
├── layouts/Layout.astro     ← SEO meta, fonts (Hanken Grotesk + Plus Jakarta Sans + Geist)
├── components/
│   ├── Nav.astro            ← Sticky claymorphism nav
│   ├── Hero.astro           ← Hero with bg image + clay coin
│   ├── Vision.astro         ← 2-column clay cards
│   ├── CTA.astro            ← Final call-to-action
│   └── Footer.astro         ← Social links + copyright
├── styles/global.css        ← Tailwind v4 @import + custom clay utilities
└── pages/index.astro        ← Composes all sections
```

## Non-Negotiables
- Source maps OFF in production ✅
- .env* files NEVER committed ✅
- All third-party API calls server-side only
- HTTPS enforced everywhere
- Security headers set
- CDN caching on static assets

## Color Palette — Clay Theme
- Primary: #6b38d4 / Primary Container: #8455ef
- Tertiary Fixed: #26fedc / Tertiary Container: #008471
- Surface: #fcf8ff / Surface Container: #efecff
- Background: #fcf8ff / On Background: #181934

## Typography
- Body: Hanken Grotesk (400, 700)
- Headline: Plus Jakarta Sans (700, 800)
- Label: Geist (600)

## Chungus Rules — ALWAYS ACTIVE
- Phase 1: Think before code (YAGNI, stdlib > npm)
- Phase 2: No AI slop — scan every file for banned patterns
- Phase 3: Pre-ship audit (verify every step with proof)
- Phase 4: Container health (skip — static site)
