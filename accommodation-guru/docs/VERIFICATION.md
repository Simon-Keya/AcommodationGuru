# Local Verification Checklist

Run from `accommodation-guru/` in a network-enabled environment:

```powershell
npm ci
npx tsc --noEmit
npx eslint .
npm run build
npm run dev
```

Then verify:

1. Homepage sections and approved copy appear in the correct order.
2. Header Browse Homes and hero Find Your Stay open the guest enquiry dialog.
3. Header/footer owner actions open the owner enquiry dialog.
4. Guest form requires name, destination, arrival/departure dates and guest count; departure cannot precede arrival; accommodation options match the client document.
5. Guest and owner forms prepare the correct WhatsApp message and do not claim it has been sent.
6. Contact page displays the configured number and email.
7. `/properties` does not display invented/sample listings and provides a clear enquiry path.
8. No testimonial/sample review section appears.
9. Navigation, footer links, dialogs and form controls work by keyboard.
10. Check responsive layouts at 390px, 768px and 1440px; confirm no horizontal overflow.
11. Confirm logo/image usage rights, owner-verification claim, phone/WhatsApp destination and social handles with the client before launch.

## Dependency caution

Do not run `npm audit fix --force` or perform an unreviewed Next.js major upgrade. Preserve the existing Next.js 15 baseline while reviewing the lockfile and any dependency advisories in the local environment.
