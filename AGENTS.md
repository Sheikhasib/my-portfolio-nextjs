# hasib-portfolio — AGENTS.md

## Stack

- Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS 3
- Path alias: `@/*` → `./src/*`

## Commands

```bash
npm run dev      # dev server with HMR
npm run build    # production build (only place typecheck runs — no separate script)
npm run lint     # next lint (uses bundled eslint-config-next, no .eslintrc)
npm run start    # production server
```

No test, format, or pre-commit tooling is configured.

## Architecture

- Single-page app at `/` with hash anchors (`#home`, `#about`, `#skills`, etc.)
- Dynamic route `projects/[slug]` — SSG via `generateStaticParams()`
- All content data is static TypeScript in `src/data/` — no CMS, no API
- `params` is a `Promise` (Next.js 15) — must `await params` in page and `generateMetadata`
- Client components: `Navbar`, `Hero`, `ProjectLinkButton`, `Toast`
- Returns 404 via `notFound()` for invalid project slugs

## Design

- Custom `bp-*` component classes in `src/app/globals.css`
- Tailwind custom colors (`bg`, `bgalt`, `card`, `line`, `cyan`, `amber`, ...) and 3 font families (`display`, `mono`, `sans`) — see `tailwind.config.ts`
- Blueprint-grid background pattern: `bg-bp-grid`

## Quirks & gotchas

- `public/resume.pdf` exists but Hero.tsx links to Google Drive instead (not linked locally)
- `Hero.tsx` references `/images/headshot-2.jpeg` — verify this file exists
- `src/lib/` is empty (intended for future utilities)
- No `error.tsx`, `loading.tsx`, or `not-found.tsx` pages exist
- In-progress projects have `image: null` — `ProjectCard` handles this via initials fallback
