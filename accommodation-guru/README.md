# Accommodation Guru

A responsive accommodation discovery and enquiry website built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm start
```

## Netlify

- If the Git repository contains this project in an `accommodation-guru/` subfolder, use the `netlify.toml` at the repository root (included in the ZIP root).
- If this project folder itself is the Git repository root, use this folder's `netlify.toml` and leave Netlify's Base directory unset.
- Netlify should auto-detect its current Next.js adapter; no legacy `@netlify/plugin-nextjs` entry is required.
- Replace `whatsappNumber`, `email`, and `phone` in `lib/site-config.ts` before production.
- Property inventory and rates are sample content. Enquiry is not a live booking or availability confirmation.

## Routes

- `/` — Homepage
- `/properties` — Property discovery and filters
- `/properties/[id]` — Property details and enquiry options
- `/about` — About Accommodation Guru
- `/contact` — Contact form with WhatsApp handoff

## Visual redesign notes

The latest art-direction pass is documented in [`docs/HIGH_END_VISUAL_REDESIGN_PROMPT.md`](docs/HIGH_END_VISUAL_REDESIGN_PROMPT.md). It defines the premium editorial hospitality direction, image hygiene rules, responsive behavior, interaction requirements, and screenshot-based QA process.

The public image assets that previously contained complete interface mockups with text have been replaced with clean property photography. The unused full-page screenshot asset has been removed. Text, navigation, labels, and calls to action are rendered as HTML/CSS, not embedded into photos.

Property prices and listing content in `lib/properties.ts` are illustrative sample data; verify all property details and rates before production.
