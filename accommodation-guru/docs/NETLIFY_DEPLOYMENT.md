# Netlify deployment

This project uses Next.js App Router. Netlify's current Next.js adapter is automatically detected; this project intentionally does not pin the legacy `@netlify/plugin-nextjs` plugin.

## Repository layout

- If this folder (`accommodation-guru/`) is itself the repository root, keep `netlify.toml` next to `package.json` and leave Netlify's Base directory blank.
- If the Git repository contains this folder as a subdirectory, use the repository-root `netlify.toml` included alongside this folder. It sets `base = "accommodation-guru"`.

The build command is `npm run build`; the publish directory is `.next`; Node.js is set to version 20. Confirm the latest deploy serves `/`, `/properties`, `/about`, and `/contact` after deployment.

## Production setup to verify

- Replace placeholder phone, email and WhatsApp details in `lib/site-config.ts`.
- Current property inventory is sample content in `lib/properties.ts`.
- Inquiry forms open WhatsApp and do not write to a backend database.
