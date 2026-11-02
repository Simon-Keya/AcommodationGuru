# Accommodation Guru — Image Direction & UI Refinement Prompt

## Role
Act as a principal hospitality art director, senior product designer, Next.js App Router engineer, accessibility specialist and visual QA lead. Work inside the existing Accommodation Guru codebase; do not replace it with a generic travel-booking template.

## Objective
Upgrade the visual storytelling and polish of the homepage hero, About page image and homepage “Why Us” section. These are the three highest-impact brand moments. The finished experience should feel like a carefully art-directed Kenyan boutique-hospitality brand: confident, calm, premium, welcoming and editorial.

## Existing brand system to preserve
- Deep ocean teal / blue-green, warm ivory, natural sand and restrained antique gold.
- Editorial serif display headings paired with clean sans-serif interface text.
- Rectangular, composed layouts, thin rules, careful spacing and restrained motion.
- Authentic accommodation and destination photography, never stock-photo collage layouts or fake interface screenshots.

## Image art direction
Use real, clean photographic assets only. No text, logos, watermarks, UI, frames, collages or graphic overlays baked into image pixels.

1. **Homepage hero:** wide cinematic Kenyan coastal property photograph. Prioritize an architecturally distinctive villa or boutique retreat, a visible pool or terrace, Indian Ocean/coastal context, natural golden-hour or soft daylight, believable materials and a clear focal point. Compose with useful negative space on the left for the live HTML headline and CTA. Avoid over-saturated tropical clichés.
2. **About page:** human-scale, welcoming accommodation photograph that communicates thoughtful hospitality, calm and a sense of place. Prefer a garden retreat, refined cottage or outdoor living space in Kenya. It should support the brand story rather than look like another hero banner.
3. **Why Us:** visually distinct image that reinforces destination expertise and personal service. Prefer a recognizably East African coastal or countryside setting with a strong sense of place. Do not reuse the hero or About image.

All image files should be locally stored in `public/images/`, optimized for the web, have descriptive filenames and meaningful alt text. Use Next.js `Image` with appropriate `sizes`; use `priority` only for the actual above-the-fold LCP image. If a suitable asset cannot be sourced or generated, use the best already-present clean photograph and explicitly report that decision. Never use the generated full-page mockup images as content photography.

## UI refinement
- Improve hero crop, focal point, contrast overlay and text measure without obscuring the property.
- Keep the CTA hierarchy clear and consistent with the existing enquiry flow.
- Make About and Why Us image compositions intentionally different in crop, ratio and visual mood.
- Refine section spacing, alignment, typography and responsive behavior without introducing gratuitous cards, gradients, glass effects or excessive shadows.
- Preserve the current content meaning and avoid unsupported claims such as guaranteed availability, verified inventory, review totals or booking guarantees.
- Check desktop and mobile crop behavior; no text collisions, clipped CTAs or horizontal overflow.
- Respect `prefers-reduced-motion` and visible keyboard focus.

## Engineering constraints
- Preserve existing routes, dialogs, property enquiry flow, data, navigation, Netlify setup and package dependencies unless a verified defect requires a change.
- Keep code maintainable and TypeScript-safe.
- Do not embed a full website mockup in a page as an image.
- Do not change the meaning of existing trust claims without evidence.

## Required audit and verification
1. Inspect the actual image assets and every image reference in the three target sections.
2. Confirm the three sections use distinct, suitable photographs.
3. Confirm no selected image contains baked-in text, UI, watermarks or promotional overlays.
4. Check alt text, image sizing, crop, loading priority and mobile positioning.
5. Run lint/type-check/build where the environment permits and report the exact outcome.
6. Provide a concise change log and identify any remaining work.

## Definition of done
The hero creates a memorable first impression; About feels warm and credible; Why Us visually reinforces the brand's service promise. The three photographs are distinct, clean and locally available. The existing site identity and working enquiry experience remain intact. Never claim a build or visual-browser test passed unless it was actually run.
