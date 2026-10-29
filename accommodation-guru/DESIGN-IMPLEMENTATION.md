# Reference-led redesign implementation

The UI has been rebuilt against the supplied Accommodation Guru mockup, focusing on its compact white header, house wordmark, coastal hero with left-aligned serif headline, floating horizontal search panel, ivory content surfaces, compact property cards, muted gold buttons, deep teal footer, mobile drawer, property listing filters, property detail gallery/enquiry panel, and contact/about routes.

## Important limitations
- The supplied project data is illustrative sample inventory, not live accommodation inventory.
- Displayed USD amounts on the homepage and KSh example rates on the properties page are visual/demo values and must be replaced with confirmed property prices before production.
- Availability is enquiry-based; there is no live booking engine or availability database.
- WhatsApp/email/phone values in `lib/site-config.ts` must be configured for the real business.
- A dependency installation timed out in this environment, so the production build and browser screenshot comparison could not be completed here. Run `npm install` and `npm run build` before deploying.
