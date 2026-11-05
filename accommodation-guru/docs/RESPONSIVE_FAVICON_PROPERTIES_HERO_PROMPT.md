# High-Level Implementation Prompt — AG Favicon, Responsive UI & Properties Hero

## Objective

Audit the existing Accommodation Guru Next.js application before changing anything. Implement a branded AG favicon, replace the Properties page hero photograph with a relevant premium holiday-accommodation image, and improve layout behaviour across mobile, tablet, laptop and large desktop screens.

## Mandatory approach

1. Inspect the supplied repository, its current changes, routing, metadata, design tokens, components, image assets, CSS cascade and package versions before editing.
2. Preserve the current client-approved copy, visual identity, enquiry flows, WhatsApp hand-off behaviour, route structure and existing generated/user-favourite images.
3. Do not replace or roll back recent homepage/image work. Do not invent property listings, guest testimonials, prices, owner verification, availability or booking automation.
4. Use local assets already present in `public/images` where suitable. Do not add externally sourced photography unless licensing and source are clear. Prefer existing project-generated imagery.
5. Keep Next.js 15 and the existing React/TypeScript/Tailwind architecture. Do not run `npm audit fix --force` or introduce a major framework upgrade.

## Favicon and brand icon

- Create a distinctive AG monogram favicon aligned with the site's deep teal, warm ivory and muted gold palette.
- Provide a scalable SVG icon, browser ICO and Apple touch icon.
- Register icons through the App Router metadata conventions and confirm there are no broken icon references.
- Keep the visible website wordmark/header identity consistent; do not invent a different company logo.

## Properties page hero

- Inspect available photography and select a strong image that clearly communicates premium holiday accommodation (villa, pool, coastal setting, outdoor living), not an unrelated abstract landscape or website screenshot.
- Use an existing project-generated image when possible, with an informative alt description, responsive `sizes`, priority loading and tasteful crop positioning.
- Ensure overlay contrast keeps the existing headline and supporting copy readable on desktop and mobile.
- Preserve the current page purpose and truthful statement that property details are still being confirmed; do not imply a live searchable inventory.

## Responsive audit and implementation

Review at minimum these viewport widths: 320, 360, 390, 430, 768, 820, 1024, 1280, 1440 and 1920 CSS pixels.

Check and fix:
- Header navigation and mobile drawer transitions without squeezed links or clipped actions.
- Hero height, image crop, headline wrapping, CTA stacking and trust-line wrapping.
- Three-step section, featured image grid, benefits layout and final CTA.
- Footer columns, contact details, long email/phone strings and social labels.
- Contact and enquiry forms, labels, controls, modal width/height, internal scrolling and keyboard focus.
- No unintended horizontal overflow, overlapping content, tiny tap targets or text over unreadable image regions.
- Respect reduced-motion preferences and preserve visible focus indicators.

Use fluid sizing, minmax(0, ...), sensible max-widths, content-aware breakpoints and mobile-first overrides. Avoid brittle fixed widths/heights where content can grow.

## Validation and deliverables

- Inspect the final diff and confirm only relevant files/assets changed.
- Run dependency installation, TypeScript, lint and production build where the environment permits. If a command cannot run, state why; never report it as passed.
- If browser automation is available, inspect the specified viewport widths and capture any issues found.
- Update implementation/verification documentation and package the complete project, preserving all existing source and assets.
