# Accommodation Guru — Master UI Implementation Prompt

Act as a principal product designer, senior Next.js engineer, accessibility specialist, and QA lead. Continue the existing Accommodation Guru codebase; do not replace it with a generic template or remove working functionality.

## Visual target
Use the supplied Accommodation Guru visual reference as the target for layout, hierarchy, density, and atmosphere. The intended experience is a polished hospitality discovery website with a warm ivory canvas, deep ocean-teal typography and footer, restrained sand accents, and muted gold calls to action. Combine editorial serif headlines with crisp, legible sans-serif UI text. Use clean rectangular controls, subtle borders, gentle shadows, consistent spacing, generous but not wasteful whitespace, rounded corners only where useful, and high-quality accommodation photography when approved/local image assets are available.

## Reference composition
1. **Header:** compact ivory navigation bar, house-mark wordmark at left, clear links, search/enquiry affordance at right, and an accessible mobile menu.
2. **Homepage hero:** wide resort/coastal visual, dark teal gradient for legible white headline, short supporting copy, prominent gold primary action and quieter secondary action. On small screens, stack the copy and actions without clipping.
3. **Search and discovery:** easy-to-scan search controls for location/name and property type, visible result count, clear filters, and an honest empty state. Controls must change results, not merely look interactive.
4. **Featured properties:** consistent card grid with strong image crop, property name, location, type, bedroom count, illustrative price range, and an enquiry action. Use a 4-column desktop grid, 2-column tablet grid, and compact mobile grid that remains readable. Label sample content as illustrative; do not claim availability or verification.
5. **Property/inquiry experience:** retain a clear path from a selected listing to a prefilled enquiry. Validate required fields and dates; check-out must be after check-in. Clearly distinguish a prepared inquiry from a sent message or confirmed reservation.
6. **Trust and supporting sections:** explain the enquiry process and value proposition without fabricated guarantees, partnerships, verified-owner claims, or invented testimonials. Any placeholder reviews must be unmistakably labelled and replaced before launch.
7. **Footer:** deep ocean teal, clear navigation, brand mark, contact placeholders only where details are genuinely missing, and a concise note that enquiries do not guarantee a booking.
8. **Mobile:** preserve the same brand and hierarchy at approximately 390 × 844; no horizontal overflow, overlapping controls, unreadable copy, or tiny tap targets.

## Brand system
- Ocean teal: approximately `#073F46` for strong text, navigation, and footer.
- Warm ivory: approximately `#FBF8F1` for page surfaces.
- Muted gold: approximately `#C99A3B` for primary calls to action and small highlights.
- Sand: approximately `#EFE3CD` for secondary surfaces.
- Use Playfair Display (or a resilient serif fallback) for display headings and DM Sans (or a resilient sans-serif fallback) for body/UI text.
- Keep contrast strong. Gold should not be used for small body text on light backgrounds.

## Engineering constraints
- Preserve the existing Next.js, React, TypeScript, Tailwind/configuration, Lucide icons, and Zod validation approach unless a concrete issue requires change.
- Keep components semantic and responsive; maintain keyboard access, visible focus, descriptive image alt text, labels, and understandable validation errors.
- Avoid unnecessary dependencies and avoid hiding meaningful build/type/lint errors.
- Use local, approved assets when possible. Do not treat the existing illustrative SVG scenes as real property photographs. Do not introduce fragile external image URLs without a deliberate fallback.
- Do not invent business contact details, property inventory, live availability, payments, backend persistence, customer reviews, or verification claims.
- Preserve the existing modal enquiry workflow and ensure the selected property's details flow into the enquiry message.

## Verification requirements
Run dependency installation, type checking, linting, production build, and browser interaction tests where the environment permits. Inspect actual desktop and mobile screenshots. Test navigation, search/filter results, empty states, modal keyboard behavior, invalid dates, check-out ordering, selected-property context, WhatsApp URL encoding, and the unconfigured-number fallback. Record each result honestly as passed, failed, blocked, or not run. A successful syntax check is not a production build; a mockup is not a browser screenshot.

## Definition of done
The result should feel close to the supplied reference in composition and design language while remaining true to Accommodation Guru's existing identity. All visible controls work, responsive layouts are coherent, sample data is clearly disclosed, no false booking or delivery claims are made, and the README plus verification report match the actual implementation and tests.
