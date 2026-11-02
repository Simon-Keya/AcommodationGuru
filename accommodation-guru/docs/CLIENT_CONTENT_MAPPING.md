# Client Content Mapping — The Accommodation Guru

**Primary content authority:** `THE ACCOMMODATION GURU WEBSITE CONTENT.docx` uploaded 2 November 2026.

Where this document differs from older scope drafts or the original implementation, the latest supplied website-content document takes precedence for public-facing copy and section order. The earlier scope document is treated as supporting implementation context only.

| Client-supplied requirement | Implementation | Notes |
|---|---|---|
| “Find Your Perfect Home Away From Home” hero | Homepage hero | Exact headline retained. |
| Kenya accommodation intro paragraph | Homepage hero supporting copy | Integrated as supplied. |
| “Find Your Stay” opens guest form | Header and homepage primary actions open guest dialog | Header label is “Browse Homes” to match the supplied navigation behaviour; homepage hero says “Find Your Stay”. |
| Verified Owners / Personalized Matching / Dedicated Booking Assistance | Hero trust line | Displayed as client-supplied claims. The owner-verification process must be substantiated by the business before public launch. |
| “Your Perfect Stay, Made Simple.” and intro | How It Works section | Exact copy integrated. |
| Three numbered steps and CTA | How It Works section | Exact step titles and descriptions integrated. Each of the three “Image” placeholders in the source document now has a corresponding image directly above its step. |
| “Explore Our Featured Getaways” and intro | Featured section | Exact heading and intro integrated. |
| Two–three images and property card template | Three editorial image panels | Three user-saved favourite photographs are used as editorial imagery only; no invented listing names, prices, amenities, guest capacity or availability are displayed. |
| “More Than Accommodation. An Experience Worth Remembering.” | Why Us section | Exact heading and intro integrated. |
| Four approved selling points | Why Us section | All four titles and descriptions integrated. |
| Testimonials to be skipped | No testimonial section on homepage | Sample/fabricated quotes are not displayed. |
| Final CTA and two actions | Homepage final CTA | Both guest and owner dialogs open. |
| Guest enquiry fields | Guest enquiry dialog | Destination, arrival/departure dates, guest count, accommodation type, optional nightly budget. Full name is retained as a practical contact field. |
| Footer name, tagline, phone, WhatsApp, email, Kenya | Site footer and contact page | Supplied local phone `0112307490`; WhatsApp configured as `254112307490` (Kenya international format). Email is `bookings@theaccommodationguru.com`. |
| Social media names | Footer | Instagram, Facebook and TikTok are named, but no links/handles were invented. |

## Image placement audit against every “Image” marker

The supplied content document contains these image instructions, and each is now represented in the homepage:

| Source document location | Homepage placement | Image asset |
|---|---|---|
| Hero section — “Image” | Full-bleed hero background | `public/images/watamu.jpg` |
| How It Works — “Image” before step 01 | Image above “Tell Us What You're Looking For” | `public/images/generated-step-coast.jpg` |
| How It Works — “Image” before step 02 | Image above “We Find Your Perfect Match” | `public/images/generated-step-country.jpg` |
| How It Works — “Image” before step 03 | Image above “Enjoy Your Getaway” | `public/images/generated-step-sunset.jpg` |
| Featured Vacation Homes — “Images 2-3” | Three editorial image panels | `public/images/favorite-coastal-villa.jpg`, `favorite-stone-cottage.jpg`, `favorite-garden-retreat.jpg` |
| Why Book Through The Accommodation Guru — “Image” | Editorial image beside the four selling points | `public/images/featured-section.jpg` |
| Final Call to Action — “Image” | Full-width background image | `public/images/hero.jpg` |

The How It Works image placements use clean photographic crops from the earlier generated visual concepts. Only photo areas are used; generated navigation, forms, headings, labels and other embedded writing are excluded. The three Featured Getaways panels now use the three photographs saved in the user’s ChatGPT Favorites. The hero uses `watamu.jpg`, while the final CTA uses `hero.jpg`. Existing bundled and generated assets remain in the project, even where they are not currently assigned to a homepage section. All photographs are editorial/inspiration imagery unless the business separately confirms that they depict approved inventory.

## Important source gaps and launch confirmations

1. The client document includes the “Verified Owners” claim. The business should confirm its verification criteria and process before launch; the website does not invent or describe such a process.
2. No approved property names, property-level descriptions, rates, amenities, capacity, availability or listing photographs were included in the content document. The previous illustrative catalogue has therefore been removed from public display and the catalogue now invites an enquiry until verified listings are supplied.
3. Existing images are retained as editorial/inspiration imagery. They are not represented as verified properties offered by the agency. Confirm usage rights and whether these images depict actual inventory before launch.
4. Official social handles/URLs and approved logo artwork were not supplied. Social names are shown as text only; the existing simple monogram remains a temporary visual identity, not a supplied logo asset.
5. The number `0112307490` is normalized to `254112307490` for the WhatsApp URL. Confirm that this is the intended WhatsApp destination before launch.
6. No testimonials were supplied; none are published.
7. Privacy-policy/legal wording and social URLs were not supplied and are not fabricated.


## User-saved favourite photographs (Version 5)

- Featured Getaways / coastal image: `public/images/favorite-coastal-villa.jpg` (saved favourite showing a coastal villa, pool and ocean).
- Featured Getaways / cottage image: `public/images/favorite-stone-cottage.jpg` (saved favourite showing a stone cottage and garden).
- Featured Getaways / garden retreat image: `public/images/favorite-garden-retreat.jpg` (saved favourite showing a landscaped garden, outdoor seating and pool).
- These are presentation photographs only. Do not infer property location, owner verification, availability, pricing or listing status from the photographs.
- Hero remains `public/images/watamu.jpg`; the final CTA uses `public/images/hero.jpg`, keeping the two requested clean photographs in separate sections. Neither image contains embedded website copy.
