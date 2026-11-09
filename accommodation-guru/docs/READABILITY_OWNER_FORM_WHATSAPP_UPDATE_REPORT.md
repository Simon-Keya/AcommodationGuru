# Readability, Owner Form and WhatsApp Update Report

## Source baseline

Implemented against `The_Accommodation_Guru_Updated_Codebase_v6.zip`, preserving the Version 6 favicon, properties hero image, responsive refinements, client content and existing enquiry-first website scope.

## Changes made

### Readability and contrast

- Increased supporting copy sizes and contrast across hero copy, section introductions, process steps, benefits, footer text, form labels, inputs, hints and footer metadata.
- Improved small text on both desktop and mobile while keeping the existing editorial hospitality styling and colour palette.
- Kept decorative hierarchy intact rather than enlarging every label indiscriminately.

### Owner partnership form

- Replaced the owner form's `Number of bedrooms` field with `Number of beds`.
- Added required numeric validation (`min=1`, integer step) for the number of beds.
- Made additional property information required with a 10-character minimum and helpful placeholder/hint.
- Removed optional wording and optional inclusion logic for those two fields.
- Updated the prepared WhatsApp message to include `Number of beds` and `Additional property information`.
- Left property catalogue data and guest-facing property facts unchanged; the requested terminology change was specifically for the owner submission form.

### Persistent WhatsApp shortcut

- Added a floating WhatsApp link as a shared root-layout component, making it available across routes.
- Reused `getWhatsAppUrl()` and the configured `siteConfig.whatsappNumber` (`254112307490`).
- Added accessible labelling, keyboard focus styling, mobile sizing and safe-area positioning.
- The link opens WhatsApp with a prefilled message; visitors remain responsible for reviewing and sending it.

## Files changed

- `components/inquiry/owner-inquiry-dialog.tsx`
- `components/layout/floating-whatsapp.tsx` (new)
- `app/layout.tsx`
- `app/globals.css`
- `docs/CLIENT_READABILITY_OWNER_FORM_WHATSAPP_PROMPT.md` (new)
- `docs/READABILITY_OWNER_FORM_WHATSAPP_UPDATE_REPORT.md` (new)
- `docs/IMPLEMENTATION_AUDIT.md` (owner form description corrected)

## Validation status

- Source-level checks confirm the owner form now uses `Number of beds`, requires the beds field, requires additional property information, and includes both in the WhatsApp message.
- The shared layout imports and renders the floating WhatsApp component.
- The floating component uses the project's existing WhatsApp URL helper rather than a separate hardcoded contact number.
- Full Next.js build, ESLint and browser viewport testing have **not** been run in this environment because project dependencies are not installed (`node_modules` is absent). Do not treat this update as a substitute for local build and visual QA.

## Recommended staging checks

1. Run `npm ci` and `npm run build` in the project directory.
2. Open the homepage, `/properties`, a property detail route, `/about` and `/contact`; verify the floating WhatsApp control is present and not covering key actions.
3. Test the owner form with each required field blank, then with valid values.
4. Verify the WhatsApp draft uses the labels `Number of beds` and `Additional property information` and includes the submitted values.
5. Review text readability and layout at 320, 360, 390, 768, 1024, 1280 and 1440px widths.
