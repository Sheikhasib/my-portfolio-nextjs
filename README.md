# Sheikh Hasib Uzzaman — Portfolio

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

The fastest path is Vercel:

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Deploy — no config needed, Next.js is auto-detected

## Where to edit things

- **Your info / projects / skills / education / experience** → `src/data/*.ts`
- **Resume PDF** → once ready, drop it in `public/resume.pdf` and update the
  download button in `src/components/Hero.tsx` (currently shows a "coming soon" toast)
- **Photo** → `public/images/headshot.jpg`
- **Colors / fonts** → `tailwind.config.ts` and `src/app/globals.css`
- **Add a new project** → add an entry to `src/data/projects.ts`; a detail
  page is generated automatically at `/projects/<id>`

## Notes

- The two in-progress projects (Healthcare Platform, AI Blog Platform) have
  `live: null` and `github: null` in `src/data/projects.ts` — once you have
  real links, just fill those in and the "coming soon" buttons become real links.
# my-portfolio-nextjs
