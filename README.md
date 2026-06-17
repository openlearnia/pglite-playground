# PGLite Playground

Interactive SQL playground shell for Openlearnia with Schema Builder integration.

## Quick start

```bash
npm install
npm run dev
```

## Integration Notes

- The `Schema Builder` tab loads the standalone schema builder UI in an iframe.
- Playground exposes a runtime adapter on `window.__OPENLEARNIA_PGLITE_ADAPTER__`.
- This lets the schema builder run both standalone and embedded with the same adapter contract.

## Deploy

Pushes to `main` deploy `dist/` to Cloudflare Pages via GitHub Actions (`.github/workflows/deploy.yml`). Required org secrets: `CF_API_TOKEN`, `CF_ACCOUNT_ID`. Pages project name is in `wrangler.toml`.
