# Accommodation Guru

This archive contains the Next.js application in `accommodation-guru/` plus a repository-root `netlify.toml` for Netlify deployments where the application lives in that subdirectory.

## Deploy to Netlify
1. Push the contents of this archive to the Git repository.
2. The root `netlify.toml` sets the Base directory to `accommodation-guru`, runs `npm run build`, and publishes `.next`.
3. Netlify should use its managed Next.js adapter. Do not add the legacy `@netlify/plugin-nextjs` plugin manually.
4. Verify `/`, `/properties`, `/about`, and `/contact` after deployment.

If you instead make `accommodation-guru/` the Git repository root, use its own `netlify.toml` and leave Netlify's Base directory blank.

Before production, replace the placeholder contact details and WhatsApp number in `accommodation-guru/lib/site-config.ts`. Property listings are sample content, and inquiry forms hand off to WhatsApp rather than a booking backend.
