# Contrack Innovation Hub — Landing Site

Production-grade marketing site for Contrack IH built with **React + Vite + Tailwind CSS + React Router**.

## Stack

- **React 18** — UI library
- **Vite 5** — Build tool / dev server
- **React Router 6** — Client-side routing
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icons (with custom TikTok SVG)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Project Structure

```
contrack-ih/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/                  # Logos and project images
│   │       ├── contrack-logo-dark-blue.png
│   │       └── contrack-logo-white.png
│   ├── components/                  # Reusable UI
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx                 # NEW — handles variant + responsive
│   │   ├── SocialLinks.jsx          # NEW — IG / TikTok / X
│   │   └── SectionHeader.jsx
│   ├── sections/                    # Homepage sections
│   │   ├── Hero.jsx                 # max-h: 900px on big screens
│   │   ├── Clients.jsx              # NEW — client logos + marquee
│   │   ├── Stats.jsx
│   │   ├── Work.jsx                 # Now links to project detail
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── SaasProduct.jsx
│   │   └── Contact.jsx              # Social links added
│   ├── pages/                       # NEW
│   │   ├── Home.jsx
│   │   ├── Projects.jsx             # /projects list
│   │   └── ProjectDetail.jsx        # /projects/:slug
│   ├── data/                        # Centralized content
│   │   ├── services.js
│   │   ├── projects.js              # Expanded with full case-study fields
│   │   ├── stats.js
│   │   ├── leaders.js
│   │   ├── clients.js               # NEW
│   │   └── socials.js               # NEW
│   ├── hooks/
│   │   ├── useTime.js
│   │   └── useScrollPosition.js
│   ├── App.jsx                      # Routes
│   ├── main.jsx                     # BrowserRouter
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Routes

- `/` — Home (all sections)
- `/projects` — All projects grid
- `/projects/:slug` — Dynamic project detail page (zari, flybird, moh40, kdin)

## ⚠️ Logo Files

The uploaded logos are **JPEGs with the `.png` extension** and have a **solid black background** baked in. They look fine in the navbar (where they sit on a white area) but won't blend cleanly on light coloured backgrounds long-term.

**Recommendation:** Get transparent PNG (or better, SVG) versions from your designer. To swap, just replace the files in `src/assets/images/` keeping the same filenames.

## Customization

### Adding a new project

1. Drop project images into `src/assets/images/projects/<slug>/`
2. Import them in `src/data/projects.js`
3. Add a new project object with all required fields (`slug`, `name`, `summary`, `challenge`, `solution`, `impact`, etc.)

It'll automatically appear on `/projects` and have its own detail page at `/projects/<slug>`.

### Adding client logos

1. Drop logo images into `src/assets/images/clients/`
2. Import them in `src/data/clients.js` and set the `logo` field

### Wiring up the contact form

The form in `src/sections/Contact.jsx` logs to console. Swap `handleSubmit` for a call to Formspree, Resend, or your backend.

### Social links

Edit `src/data/socials.js` to update URLs or add platforms.

## Color Palette

| Token            | Hex       | Usage                          |
| ---------------- | --------- | ------------------------------ |
| `navy` (DEFAULT) | `#04165D` | Primary text, dark backgrounds |
| `navy-mid`       | `#424F85` | Italic accents, meta text      |
| `navy-pale`      | `#D8D9E5` | Soft backgrounds, on-dark text |

## License

© 2026 Contrack Innovation Hub.
