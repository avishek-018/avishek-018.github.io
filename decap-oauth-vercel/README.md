# Decap OAuth on Vercel

This service provides the `/auth` and `/callback` endpoints needed by Decap CMS with GitHub backend.

## Endpoints

- `/auth` -> starts GitHub OAuth flow
- `/callback` -> exchanges code for token and posts result back to Decap popup

## Required Environment Variables (Vercel Project)

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `PUBLIC_URL` (example: `https://your-oauth-app.vercel.app`)

## Deploy

```bash
cd decap-oauth-vercel
npx vercel
```

For production:

```bash
npx vercel --prod
```

## GitHub OAuth App Settings

- Homepage URL: your main website URL
- Authorization callback URL: `https://your-oauth-app.vercel.app/callback`

## Quick Checks

Health of redirect endpoint:

```bash
curl -I "https://your-oauth-app.vercel.app/auth?provider=github&origin=https://example.com"
```

Expected: HTTP redirect to `https://github.com/login/oauth/authorize?...`
