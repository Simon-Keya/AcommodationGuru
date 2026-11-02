# The Accommodation Guru

A premium, responsive hospitality marketing and enquiry website built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
```

## Production validation

```bash
npx tsc --noEmit
npx eslint .
npm run build
npm start
```

## Website role and functionality

The website introduces The Accommodation Guru, presents the agency's approach, and collects guest and property-owner enquiries. Enquiries are prepared as WhatsApp messages. Visitors must review and send those messages in WhatsApp; the website does not automatically deliver messages, confirm availability, create reservations or process payments.

The latest client content document is the source of truth for the public-facing homepage copy. See `docs/CLIENT_CONTENT_MAPPING.md` for the mapping and outstanding client confirmations.

## Routes

- `/` — Homepage and primary guest/owner enquiry dialogs
- `/properties` — Catalogue introduction and enquiry path; no unverified sample listings are published
- `/properties/[id]` — Reserved for future verified property detail pages (currently returns not found)
- `/about` — Agency approach
- `/contact` — Business contact details and WhatsApp enquiry hand-off

## Contact configuration

Update `lib/site-config.ts` to change the central WhatsApp, phone, email and navigation configuration. Current values were taken from the supplied client content. Confirm the WhatsApp number with the client before launch.

## Client inputs required before launch

- Approved logo and brand assets
- Verified property names, descriptions, images, amenities, guest capacity, rates and availability details
- Confirmation of the owner-verification process behind the “Verified Owners” claim
- Official Instagram, Facebook and TikTok profile URLs/handles
- Approved privacy/legal wording
- Confirmation of the WhatsApp destination

## Deployment

The archive includes Netlify configuration. Confirm the intended repository/base-directory arrangement in Netlify before deploying. Do not treat the website as a booking engine or payment platform in marketing or deployment descriptions.

## Technical caution

Keep the current Next.js 15 baseline while reviewing dependency advisories. Do not use `npm audit fix --force` or perform an unreviewed major upgrade. See `docs/VERIFICATION.md` for the test checklist and current validation limitation.
