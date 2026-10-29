# Netlify deployment guide

This project uses Next.js 15 App Router. Netlify's current Next.js adapter supports the App Router and is detected automatically; this configuration intentionally does not pin the legacy `@netlify/plugin-nextjs` plugin.

## Choose the repository layout you will deploy

### Option A — the Git repository contains the `accommodation-guru/` folder

Keep the outer `netlify.toml` at the repository root. It sets `base = "accommodation-guru"`, then runs the build from that directory. In Netlify, leave the Base directory, Build command, and Publish directory fields unset/auto-detected if possible so the committed TOML is authoritative. If the UI has a conflicting saved override, clear it.

### Option B — `accommodation-guru/` itself is the Git repository root (recommended)

Use the `accommodation-guru/netlify.toml` file at the root of that repository. Do not set a Base directory in Netlify. The build command is `npm run build` and the publish directory is `.next`.

Do not set the Base directory to `accommodation-guru` when the repository root already is the app directory; that would point to a non-existent nested directory.

## Environment variables

In Netlify, open **Project configuration → Environment variables** and add:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: the real business WhatsApp number in international digits-only format (for example, `2547XXXXXXXX`, replacing it with the actual confirmed number).
- `NEXT_PUBLIC_SITE_URL`: the real public site origin, such as `https://your-domain.example`, after the domain is known.

Do not commit `.env.local` or credentials. `NEXT_PUBLIC_*` variables are embedded in browser-visible code and must not contain secrets. Trigger a new deploy after changing build-time environment variables.

## Deploy steps

1. Push the selected repository layout to GitHub/GitLab/Bitbucket.
2. In Netlify, choose **Add new project → Import an existing project** and connect the repository.
3. Ensure Netlify detects Next.js. Use `npm run build` and `.next` if values must be entered manually.
4. Add the environment variables above; do not invent a WhatsApp number.
5. Deploy and review the complete build log.
6. Test the homepage, navigation, filters, inquiry validation and WhatsApp fallback on the deployed URL.

## Important

The build and live deployment have not been verified in this environment because dependency installation previously timed out. A successful Netlify deploy still needs to be confirmed in the Netlify build log. Property listings and illustrations are sample content; there is no live availability service or booking persistence backend.
