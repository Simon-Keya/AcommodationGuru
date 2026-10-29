# Accommodation Guru — High-End Visual Redesign Master Prompt

## Mission

Act as a principal digital product designer, hospitality brand art director, senior frontend engineer, accessibility specialist, and visual QA lead. Elevate Accommodation Guru from a functional starter interface into a distinctive, premium hospitality experience. Use the supplied mockup as a reference for the core information architecture, but do not preserve weak implementation decisions merely because they exist. Design the experience as if a high-end boutique hospitality studio had established the art direction, design system, content hierarchy, imagery, and responsive behavior before engineering began.

Do not produce a generic vacation-rental template. The result must feel intentional, editorial, calm, confident, tactile, and specific to curated stays in Kenya.

## Non-negotiable image rule

Never use an image that already contains a website, interface, text, logos, buttons, labels, typography, or promotional overlay baked into its pixels. Images must be photography only. All headings, badges, navigation, labels, and calls to action must be real HTML/CSS components layered on top of clean images. Audit every image asset and every CSS `background-image` before finishing. Remove unused screenshots/mockups from the public asset directory so they cannot accidentally be used as content.

Use high-quality property photography with a consistent photographic direction: natural light, architectural detail, believable interiors, considered composition, authentic coastal and countryside settings, restrained color grading, and clear focal points. Download or generate clean image assets where tools permit, store them locally when practical, and optimize them. Do not use a composite mockup as a background image.

## Brand art direction

Create a premium editorial identity for a curated Kenyan accommodation collection. The interface should feel like a boutique travel journal combined with a dependable enquiry service, not a generic SaaS dashboard or mass-market booking engine.

- Use a restrained palette: deep blue-green, warm ivory, natural stone, charcoal-ink, and a muted antique-gold accent.
- Use a high-contrast serif for display headings and property names, paired with a highly legible modern sans-serif for navigation, body copy, controls, metadata, and forms.
- Create a clear typographic hierarchy with deliberate line breaks, generous but purposeful whitespace, and controlled measure lengths.
- Prefer thin rules, subtle tonal surfaces, clean alignment, careful image crops, and quiet hover states over excessive shadows, gradients, glass effects, pill shapes, or ornamental decoration.
- Make the brand distinctive through composition, editorial copy, photography, and details—not by adding more UI elements.
- Use a consistent spacing scale, border radius system, focus style, icon weight, and motion language across every route.

## Experience architecture

Audit and redesign the existing routes as one system:

1. Homepage: refined masthead, cinematic property photography, editorial hero, compact but elegant search panel, selected property cards, clear destination/value storytelling, and a confident enquiry call to action.
2. Properties: clear page introduction, search controls, useful filters, result count, thoughtful card grid, meaningful empty state, and working clear/reset behavior.
3. Property detail: immersive image gallery, precise property summary, clear pricing context, factual amenity list, readable description, location section, transparent availability wording, and an accessible enquiry panel.
4. About: concise brand story, service principles, curated destinations, and real photography.
5. Contact: clear contact details, premium photographic banner, accessible enquiry form, and honest success/error messaging.
6. Shared header, mobile drawer, and footer: consistent brand presentation, accessible navigation, and only valid links/actions.

Do not fabricate ratings, reviews, inventory counts, availability, owner verification, testimonials, or booking confirmations. Mark sample data and indicative pricing as illustrative where appropriate.

## Interaction and accessibility

- Search and filters must affect the displayed property data.
- Favorite controls must expose their state to assistive technology and respond to keyboard input.
- Date inputs must have visible labels and sensible validation.
- Mobile navigation must support keyboard use, close predictably, and not trap users behind an invisible overlay.
- Forms must validate required fields and explain what happens next. Never show a false success message if no message was delivered.
- Use semantic landmarks, logical heading order, visible focus states, reduced-motion support, adequate contrast, and touch targets that are comfortable on small screens.
- Avoid nested interactive elements and controls that look functional but do nothing.

## Responsive behavior

Design mobile deliberately rather than simply shrinking desktop. Review at widths around 375, 390, 430, 768, 1024, 1280, and 1440 pixels. Check for horizontal overflow, awkward image crops, broken card heights, tiny controls, headings with poor line breaks, and enquiry forms that become difficult to use.

## Engineering constraints

- Inspect the repository and reuse its established Next.js App Router, TypeScript, and Tailwind setup where appropriate.
- Keep components reusable and route-specific logic understandable.
- Centralize design tokens and avoid contradictory overrides where possible.
- Keep images optimized and locally available where practical.
- Preserve the Netlify deployment structure; verify the actual repository root and app base directory before editing deployment configuration.
- Do not add dependencies unless they solve a real need.

## Visual QA process

1. Audit the current routes, styles, images, data, and interactions.
2. Establish the design system and implement it consistently.
3. Audit every referenced image and background. Replace any image containing baked-in text or UI with clean photography.
4. Run the application and capture screenshots at the target viewport sizes.
5. Compare screenshots with the supplied reference and the intended premium art direction.
6. Fix the largest visual differences first: page composition, typography, imagery, spacing, alignment, cards, and controls.
7. Test every navigation path, search/filter state, favorite interaction, form state, and mobile menu.
8. Run type checks and a production build. Report any checks that could not be run instead of claiming they passed.

## Acceptance criteria

- No interface screenshots, text, logos, or buttons are embedded in content photographs.
- Every route looks like part of the same premium brand system.
- The design feels deliberately art-directed rather than assembled from generic components.
- Photography is relevant, clean, consistently cropped, and not used as a substitute for UI.
- Search, filters, navigation, and enquiry controls work as presented.
- The site remains responsive, accessible, and deployable.
- The final report lists meaningful changes, test results, and any remaining production setup requirements.

**Deliver the implementation, not just recommendations. Never claim visual or build verification unless it was actually performed.**
