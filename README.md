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
