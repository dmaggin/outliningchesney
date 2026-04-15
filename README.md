# Outlining Chesney

Kenny Chesney songs are so formulaic you can reduce them to bullet-point outlines and they still make perfect sense. We have the outlines to prove it.

> "Nothing works quite like a Chesney song (or runs like a Deere)" — MJM, July 2010

Born from a 2010 email thread between friends. Launched as a website in 2026. Only took 16 years.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel

Currently Phase 1 — a fully static site with all content baked in. No database or auth required.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

All pages are statically generated at build time.

## Project Structure

- `src/data/` — All outline content, founding members, and lore as typed TypeScript
- `src/components/` — Shared React components
- `src/app/` — Next.js App Router pages (home, browse, outline detail, about, 404)

## Deploy

Connect this repo to [Vercel](https://vercel.com) — zero configuration needed for Next.js.
