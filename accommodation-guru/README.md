# The Accommodation Guru

Premium landing page for a Kenyan vacation-home agency that connects travellers with private property owners.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Custom design system (warm ivory + deep ocean teal + soft gold)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Features

- Sticky header with mobile navigation
- Art-directed hero
- How It Works, Featured Homes, Why Us, Testimonials, Final CTA
- Guest inquiry modal → WhatsApp
- Owner partnership modal → WhatsApp
- Floating WhatsApp action
- Sample property data clearly marked
- Accessible dialogs and skip link
- Responsive from 360px upward

## Before Launch

Replace the following placeholders in `lib/site-config.ts` and content:

- `whatsappNumber`
- Email / phone
- Real photography for hero and property cards
- Real testimonials
- Confirm service claims (24/7 support, verified owners, etc.)

## Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/       # header, footer
  sections/     # page sections
  property/     # property card
  inquiry/      # guest & owner dialogs
  ui/           # button primitive
lib/
  site-config.ts
  properties.ts
  utils.ts
```

## Design Direction

Quiet luxury, contemporary coastal hospitality, editorial typography (Cormorant Garamond + Inter), generous white space, restrained gold accent.

## Deploy to Netlify

This project includes a `netlify.toml` configured for Next.js.

### Option 1 – Netlify UI (easiest)
1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Connect the repository
4. Netlify will detect the Next.js plugin automatically
5. Click **Deploy site**

### Option 2 – Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

The official `@netlify/plugin-nextjs` handles App Router, SSR, and image optimization.
