# Aastha Saini — PM Portfolio (React)

A premium light-mode Product Manager portfolio, built with **React + Vite + Tailwind CSS + Framer Motion**.

**Live:** https://aastha381.github.io/portfolio-react/
**Vanilla version:** https://aastha381.github.io/portfolio/

## Highlights
- Word-by-word hero reveal + interactive gradient-mesh background (Framer Motion)
- 3D-tilt bento capability grid with ambient glow
- Sticky, stacked case-study cards with **odometer** metric counters
- Scroll-driven experience timeline (`useScroll` / `useTransform`)
- Dual-lane grayscale→color certifications marquee
- Magnetic buttons + copy-email confetti

## Develop
```bash
npm install
npm run dev
```

## Build & deploy (GitHub Pages)
```bash
npm run build     # → dist/
npm run deploy    # pushes dist/ to the gh-pages branch
```
`vite.config.js` sets `base: '/portfolio-react/'` for the project-site path.

## Stack
React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11
