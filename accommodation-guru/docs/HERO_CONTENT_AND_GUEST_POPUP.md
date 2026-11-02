# Hero content and guest submission popup

## Hero content
The homepage hero contains the requested headline, description and trust lines:

- Find Your Perfect Home Away From Home
- Discover exceptional holiday homes, private villas, beautiful cottages and exclusive short-stay apartments across Kenya.
- The full coastal escape, romantic getaway, family holiday, corporate stay and weekend retreat description.
- Verified Owners | Personalized Matching | Dedicated Booking Assistance

## Guest submission popup
The `Find Your Stay` hero CTA opens the existing `GuestInquiryDialog` through the `guestOpen` state in `app/page.tsx`.

The dialog collects the guest's name, destination, arrival/departure dates, guest count, accommodation type and optional nightly budget. On valid submission it prepares and opens a WhatsApp enquiry. It does not silently submit a booking or claim availability.

The CTA now includes dialog accessibility attributes. The existing dialog implementation is retained.
