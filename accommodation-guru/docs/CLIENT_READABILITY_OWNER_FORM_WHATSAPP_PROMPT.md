# High-Level Implementation Prompt: Readability, Owner Enquiry and WhatsApp Access

You are working in the existing **The Accommodation Guru** Next.js App Router codebase. Treat the supplied latest project archive as the source of truth and preserve all existing client-approved content, images, routes, responsive work, branding and enquiry behaviour.

## Objective

Apply a careful usability refinement based on client feedback. The website currently has several small, low-contrast supporting text elements. The client also requires changes to the property-owner partnership enquiry and wants a persistent WhatsApp contact shortcut.

## 1. Improve text readability and visibility

- Audit the full site on desktop, tablet and mobile, including the homepage, property catalogue, property details, contact page, footer, navigation, dialogs and forms.
- Identify text that is too small, too faint, or difficult to distinguish from its background.
- Increase small supporting text to comfortable readable sizes, generally aiming for 14–16px for body copy and at least 12–13px for secondary labels and metadata where practical.
- Improve text/background contrast while respecting the existing premium hospitality identity and palette.
- Preserve editorial typography, whitespace, visual hierarchy and image-led layouts. Do not make every element bold or oversized.
- Keep decorative eyebrow labels and metadata subordinate, but do not allow them to become illegible.
- Ensure focus states, keyboard navigation, form labels, touch targets and reduced-motion preferences remain usable.

## 2. Update the owner partnership enquiry form

The form must:
- Ask for **Number of beds**, not **Number of bedrooms**.
- Make Number of beds mandatory, numeric, and greater than zero.
- Make **Additional property information** mandatory and require a meaningful short description.
- Remove optional wording and optional validation behaviour from these two fields.
- Include the number of beds and additional property information in the prepared WhatsApp enquiry using the same field names.
- Keep other owner form fields and the existing WhatsApp hand-off behaviour unless a change is required for correctness.
- Clearly explain that the visitor reviews and sends the prepared message in WhatsApp; never claim the website sends it automatically.

Do not globally rename property catalogue data or guest-facing bedroom terminology unless the client explicitly requests that separate change. The specific requested terminology change applies to the owner form.

## 3. Add a persistent WhatsApp contact shortcut

- Add an accessible floating WhatsApp link that appears on every route, preferably from the shared root layout.
- Use the existing configured official WhatsApp number and existing URL helper; do not hardcode a second phone number.
- Use a clear icon, adequate contrast, a descriptive accessible name, visible keyboard focus, and a touch-friendly hit area.
- Position it consistently at the lower right, account for mobile safe-area insets, and ensure it does not obscure important controls or content.
- Open WhatsApp in a new tab with a short prefilled enquiry message. The user must still review and send it.
- Do not add an automated chat service, booking engine or message delivery backend.

## 4. Broader UI refinement

Inspect related interface elements and make restrained improvements where they clearly improve usability: form hints, footer links, navigation labels, cards, section descriptions, captions, buttons, focus states and mobile spacing. Avoid unnecessary redesign or unrelated feature additions.

## 5. Constraints

- Preserve Next.js App Router, TypeScript strictness, existing dependencies and project architecture.
- Do not force dependency upgrades or modify unrelated business logic.
- Preserve the existing premium palette and AG brand direction.
- Do not invent property listings, testimonials, social profile URLs, verification claims, prices or availability.
- Keep the product as a marketing and enquiry website, not a full booking or payment platform.

## 6. Validation and deliverables

- Inspect existing code before editing and identify shared components that affect multiple routes.
- Validate modified TSX syntax and types, run the project build and lint when dependencies are available, and inspect key viewport widths (320, 360, 390, 768, 1024, 1280 and 1440px or wider).
- Test owner form required-field validation and verify the generated WhatsApp message contains the correct labels and values.
- Confirm the floating WhatsApp shortcut appears on all routes and uses the configured number.
- Report what changed, files touched, validation actually completed, and any remaining limitations. Never claim a build or browser test passed unless it was run successfully.
