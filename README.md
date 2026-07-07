# Tanvi Karanth — Portfolio

Personal portfolio of Tanvi Karanth, product designer and manager in Sydney.
Case studies on reMind, First Revenue, and Qrew, plus a live vibecoded side
project (Wishcake).

Built with React + Vite. Motion by Framer Motion, ambient background via a WebGL
shader with a CSS-gradient fallback on touch and reduced-motion.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Notes

- External links (email, LinkedIn, resume) live in `src/constants.js`.
- Case-study routes are code-split; the home page ships only what it needs.
- Deep links are handled by an SPA rewrite (`vercel.json` / `public/_redirects`).
