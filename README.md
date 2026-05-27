# Diya Patel — Portfolio

A personal portfolio for **Diya Patel**, a junior product designer shipping B2B SaaS at Petpooja. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion — with dark mode, smooth motion, and a strong typographic system.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + custom design tokens
- **Framer Motion** for entrance animations and micro-interactions
- **next-themes** for light/dark mode
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

The site will be running at `http://localhost:3000`.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run Next.js lint
```

## Project structure

```
diya-patel-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # design tokens, fonts, motion utilities
│   │   ├── layout.tsx         # root layout + theme provider
│   │   └── page.tsx           # composes all sections
│   ├── components/
│   │   ├── Nav.tsx            # sticky frosted-glass nav with theme toggle
│   │   ├── Hero.tsx           # name, headline, CTA, stats strip
│   │   ├── About.tsx          # bio, AI workflow, values
│   │   ├── Projects.tsx       # case studies + modal
│   │   ├── Skills.tsx         # craft / tools / AI / collaboration
│   │   ├── Experience.tsx     # timeline + education
│   │   ├── Contact.tsx        # CTA, email, LinkedIn
│   │   ├── Footer.tsx
│   │   ├── SectionHeader.tsx  # shared section header
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/
│       ├── data.ts            # all content (profile, projects, skills…)
│       └── utils.ts           # cn() helper
├── public/
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Editing content

All copy, projects, skills, and experience live in **`src/lib/data.ts`** — edit there and the UI updates automatically. No CMS, no env vars, no hidden state.

To add a new project, append a new `Project` object to the `projects` array. Set `featured: true` to make it appear as a large case-study card on the homepage; leave it off to make it a compact card under "More work."

## Design notes

- **Typography:** Instrument Serif for display, system sans for body, monospace for metadata.
- **Color:** warm cream + deep ink, with a single accent (`#E6543B`) used sparingly.
- **Motion:** Framer Motion handles entrance fades, modal transitions, and hover lifts. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` throughout for a soft, premium feel.
- **Dark mode:** default. Toggle in the nav. Tokens flip via CSS variables on the `.dark` class.

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`).
- Keyboard-friendly modal with `Esc`-aware backdrop, focusable close button.
- High-contrast text in both themes.
- Reduced-motion users get the same content with minimal animation cost (Framer Motion respects `prefers-reduced-motion`).

## License

Personal portfolio — content © Diya Patel. Code MIT.
