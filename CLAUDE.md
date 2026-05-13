# Clarant Labs — clarantlabs.com

Company/credibility website for Clarant Labs LLC.
The app lives at clarant.app. This site is the "who we are" face.

## Commands
- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build
- `npm run lint` — lint check

## Stack
- Next.js 15 App Router, TypeScript
- No UI library — plain inline styles + CSS variables
- Fonts: Lora (display), DM Sans (body) via Google Fonts
- Colors: --brand: #1D9E75, --brand-dark: #0F6E56, --brand-light: #E1F5EE

## Rules
- Do not change any copy
- Do not restructure the component hierarchy
- Do not add new dependencies
- Fix only what is broken, ask before making design changes

## Structure
- app/layout.tsx — Nav + Footer
- app/globals.css — brand tokens
- app/page.tsx — Homepage
- app/about/page.tsx — About page
- app/legal/page.tsx — Legal (Privacy + Terms, tabbed, 'use client')

## Known gotcha
legal/page.tsx uses useSearchParams() — requires a <Suspense>
boundary in Next.js 15 or the build will fail.