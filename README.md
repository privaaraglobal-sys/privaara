# PRIVAARA — Next.js conversion

This workspace contains a minimal Next.js scaffold converted from the original single-page `index (1).html`.

Quick start:

```bash
cd /Users/nischaymehra/Documents/Imperial Health Systems/Privaara-Website
npm install
npm run dev
```

Notes:
- The original CSS was extracted to `styles/globals.css`.
- The inline scripts were moved to `public/js/main.js` and loaded from `pages/index.js` via Next `Script`.
- Large base64 images are kept inline to preserve markup; consider migrating them to `public/`.
