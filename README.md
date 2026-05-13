# clarantlabs.com

Company/credibility website for Clarant Labs LLC.
The app lives at clarant.app — this site is the "who we are" face of the company.

## Stack
- Next.js 15 (App Router)
- TypeScript
- No UI library — plain inline styles with CSS variables

## Structure
```
app/
  layout.tsx        ← Nav + Footer (shared across all pages)
  globals.css       ← Brand tokens (fonts, colors)
  page.tsx          ← Homepage (hero, problem, features, pricing, CTA)
  about/page.tsx    ← About page (founder story, mission)
  legal/page.tsx    ← Privacy Policy + Terms of Service (tabbed, client component)
```

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Works with Vercel out of the box — connect the repo and deploy.
Set the custom domain to clarantlabs.com in the Vercel dashboard.

## Before launch checklist
- [ ] Replace legal placeholder text with lawyer-reviewed versions
- [ ] Add real OG image at /public/og.png (1200×630)
- [ ] Add favicon at /public/favicon.ico
- [ ] Confirm abhishek@clarantlabs.com is receiving mail
- [ ] Add Google Analytics or Plausible if desired
