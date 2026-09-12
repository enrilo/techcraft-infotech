# Enrilo Technologies — website

Next.js 16 (App Router) + Tailwind CSS site for Enrilo Technologies, the
parent company behind AcadTracker. Plain JavaScript — no TypeScript.

## Setup

```bash
npm install
cp .env.local.example .env.local
# then edit .env.local with your real GA4 Measurement ID and site URL
npm run dev
```

## What's included

- **Pages:** homepage (hero, about, AcadTracker product section, contact),
  `/privacy`, `/terms`
- **SEO:** per-page `<title>`/description via the Metadata API, a `keywords`
  list in `app/layout.tsx`, Open Graph + Twitter card tags, a canonical URL,
  and an Organization + SoftwareApplication JSON-LD block describing
  Enrilo Technologies and AcadTracker
- **Google Analytics 4:** `components/GoogleAnalytics.tsx` loads gtag.js
  site-wide, driven entirely by `NEXT_PUBLIC_GA_MEASUREMENT_ID` — set it in
  `.env.local` (never hardcode the ID in code)
- **`sitemap.xml` and `robots.txt`:** generated dynamically from
  `NEXT_PUBLIC_SITE_URL` via `app/sitemap.ts` and `app/robots.ts`
- **Design:** a "drafting studio" visual identity (ink navy + brass on cool
  paper, IBM Plex Serif/Sans, ruled hairlines and a hero schematic) rather
  than a generic SaaS template — see the design notes in the conversation
  this was built from

## Before you publish

- Replace `hello@enrilotechnologies.com`, the physical/registration details,
  and the `[insert date]` placeholders in `/privacy` and `/terms` — those two
  pages are structural starting points, not reviewed legal text
- Add a real `public/og-image.png` (1200×630) for social share previews —
  none is included yet
- Wire the contact form in `app/page.tsx` to a real submit endpoint (e.g. an
  API route, or a form backend) — it's currently markup only
- Set `NEXT_PUBLIC_SITE_URL` to your real production domain before building,
  so the sitemap, robots.txt, and canonical URLs are correct

## Build

```bash
npm run build
npm start
```
