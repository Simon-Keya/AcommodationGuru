# The Accommodation Guru

A responsive Next.js + TypeScript + Tailwind CSS landing site for a Kenyan accommodation enquiry service. It helps visitors explore illustrative stay concepts and prepare a guest or property-owner enquiry to review and send through WhatsApp.

## Technology

- Next.js 15 App Router and React 19
- TypeScript
- Tailwind CSS 3 (with a custom editorial design system in `app/globals.css`)
- Zod form validation
- lucide-react icons

## Requirements

- Node.js 20 or newer
- npm

## Install and run

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set the confirmed business WhatsApp number
npm run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`.

## Deploy to Netlify

See [`docs/NETLIFY_DEPLOYMENT.md`](docs/NETLIFY_DEPLOYMENT.md) for repository layout options, Netlify setup, and environment variables. The project includes a `netlify.toml` for deploying this directory as the repository root. The archive also includes a root-level configuration for cases where the Git repository contains the `accommodation-guru/` subdirectory.

Netlify's current Next.js adapter is auto-detected; the configuration does not add or pin the legacy `@netlify/plugin-nextjs` plugin. The configured build command is `npm run build`, the publish directory is `.next`, and Node.js is set to version 20. The deployment still needs to be confirmed from a real Netlify build log.

## Environment variables

| Variable | Required for launch | Description |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes, for WhatsApp handoff | Confirmed business number in international digits-only format, e.g. `2547XXXXXXXX`. Do not include `+`, spaces or punctuation. The sample value is deliberately treated as unconfigured. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public production origin for future metadata/deployment configuration. Replace `https://example.com` with the real site origin. |

Never put secrets in `NEXT_PUBLIC_*` variables; these are exposed to browser code.

## Quality commands

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

The repository does not currently include an automated test suite. Manually exercise the guest and owner inquiry flows after starting the site.

## Current functionality

- Responsive landing page and mobile navigation.
- Sample accommodation cards with client-side name/location search and property-type filtering, including an empty state and clear-filters action.
- Guest enquiry form with required fields, guest/bedroom/budget selection, date validation, check-out-after-check-in validation, and a 40-guest limit.
- Owner partnership enquiry form with validation.
- WhatsApp message preparation, URL encoding, copy-message fallback, and clear distinction between a prepared enquiry and a sent message.
- Keyboard focus handling for the enquiry dialog, Escape-to-close, scroll locking, skip link, visible focus styles and reduced-motion support.
- Locally stored SVG illustrations so the page does not depend on external property image URLs.

## Before launch

- **Listings are illustrative samples.** The four property names, locations, bedroom counts, prices and availability are not verified inventory. Replace them with approved, accurate data.
- **Images are illustrations, not property photography.** Replace with licensed/approved images for real listings and update alt text accordingly.
- **Testimonials are placeholders.** Replace them with genuine, permissioned feedback or remove the section before publishing.
- **WhatsApp is not configured by default.** Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the business's confirmed number. The sample number is disabled as a handoff target; visitors can still copy the prepared message.
- **No live booking or backend exists.** Enquiries are prepared in the browser; this project does not persist them, check live availability, take payment, verify owners, or confirm reservations. The user must review and press Send in WhatsApp.
- **Contact details and production domain are not confirmed.** Add the real email, phone and domain when provided.
- **Search filters sample data only.** They are not connected to an inventory API.
- Metadata currently disables search indexing by default. Review `app/layout.tsx` and enable indexing only after the real domain and launch content are confirmed.

## Visual direction

The reference-aligned visual refinement is documented in [`docs/MASTER_UI_IMPLEMENTATION_PROMPT.md`](docs/MASTER_UI_IMPLEMENTATION_PROMPT.md). It defines the ivory/ocean-teal/sand/gold palette, editorial typography, compact navigation, image-led hero, property-card grid, enquiry-first behavior, responsive rules, and honest verification requirements. The existing local SVGs remain illustrative artwork, not real property photographs.

## Visual and browser verification

A successful compile is not a substitute for browser testing. Test desktop and mobile layouts, navigation, filter states, invalid form submissions, dates, copy fallback, and the configured WhatsApp handoff before launch. See the delivery report for the checks actually run in the supplied environment.
