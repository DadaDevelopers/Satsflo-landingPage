# Satsflo Landing Page

Marketing landing page for **Satsflo** — a modern women's health platform for cycle tracking, wellness, community, and Bitcoin-powered gifting.

## Tech Stack

- **React 19** — UI framework
- **Vite** — dev server and build tool (HMR enabled)
- **Tailwind CSS 4** — utility-first styling
- **Lucide React** — icon library
- **Oxlint** — fast JavaScript/React linter

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:5173
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root — composes all page sections
├── index.css             # Global styles + CSS variables
├── components/           # Navbar, HeroSection, Button, Footer, etc.
└── sections/             # FeaturesSection, RhythmSection, WellnessSection,
                          # CelebrateSection, PrivacySection, CTASection
```

## Page Sections & Nav Anchors

| Nav link | Section | Anchor |
|---|---|---|
| Features | FeaturesSection | `#features` |
| Community | WellnessSection | `#community` |
| About | RhythmSection | `#about` |
| Privacy | PrivacySection | `#privacy` |

## Brand

- **Colors:** Pink `#FF4081`, Purple `#57007C`
- **Fonts:** Inter (body), EB Garamond (display), Anton (logo)
