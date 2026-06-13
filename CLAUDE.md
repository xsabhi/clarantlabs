# Clarant Labs — clarantlabs.com

Company/credibility website for Clarant Labs LLC.
The app lives at clarant.app. This site is the "who we are" face.

## Commands
- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build
- `npm run lint` — lint check

## Stack
- Next.js 15 App Router, TypeScript
- Tailwind CSS v3 — utility classes (tailwind.config.ts, postcss.config.mjs)
- Fonts: Lora (display, font-display) + DM Sans (body, font-sans) via next/font/google, wired through CSS variables
- Colors (Tailwind theme): brand #1D9E75, brand-dark #0F6E56, brand-light #E1F5EE

## Rules
- Brand color is an accent only — never a section background
- Lora (font-display) on h1/h2 only; DM Sans everywhere else
- Keep pages server components; only Nav is 'use client' (mobile menu state)
- Ask before making design changes

## Structure
- app/layout.tsx — fonts + Nav + Footer
- app/globals.css — Tailwind directives
- tailwind.config.ts — brand colors + font families
- components/Nav.tsx — sticky nav, mobile hamburger ('use client')
- components/Footer.tsx — brand + links
- app/page.tsx — Homepage
- app/products/page.tsx — Products (Clarant)
- app/about/page.tsx — About page
- app/legal/page.tsx — Legal (Privacy + Terms, server component)