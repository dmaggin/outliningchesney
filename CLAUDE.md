# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OutliningChesney.com — a humor site celebrating the discovery that Kenny Chesney songs are so formulaic they can be reduced to hierarchical bullet-point outlines. Born from a 2010 email thread between friends (Dan Maggin, Matt Malament, Ben Maggin, Edward Silva, Todd Hutner). Currently Phase 1: a static content site. Phase 2 will add Supabase for auth, voting, comments, and user submissions.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build (all pages are statically generated)
- `npm run lint` — Run ESLint
- `npm start` — Serve production build

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

**Phase 1 is fully static.** No database, no auth, no API routes. All content lives in TypeScript data files under `src/data/`. Pages are statically generated at build time.

### Key directories
- `src/data/` — All content as typed TypeScript: outlines (`outlines.ts`), founding members (`founders.ts`), lore quotes/timeline/suggestions (`lore.ts`)
- `src/components/` — Shared components. `OutlineRenderer.tsx` is the core component that recursively renders the hierarchical outline tree structure.
- `src/app/` — Next.js App Router pages: home, `/browse`, `/outline/[slug]`, `/about`, custom 404

### Data model
Outlines use a recursive `OutlineNode` tree structure (`{ text, children? }`). The hierarchy IS the content — it must be preserved faithfully. Each outline is attributed to a founding member by their initials (DMM, MJM, BDM).

### Special cases
- "Paint It Black" has TWO outlines (by DMM and BDM independently) — both versions are shown on the same detail page with lore about the duplicate incident
- "Live a Little" has an editorial note about being "the listeous of all cheznwazzle songs"
- Non-Chesney outlines get a "Visiting Artist" badge treatment

## Design System

- **Colors:** sunset orange (#FF6B35), ocean teal (#00B4D8), sandy gold (#FFD166), cream bg (#FFFDF7), charcoal text (#2D3748)
- **Fonts:** Outfit (body), Playfair Display (display headings), JetBrains Mono (outline content — the monospace formatting is part of the humor)
- **Tone:** Warm, beachy, whimsical but not childish. Affectionate toward Chesney, not mocking.

## Source Material

The PDF `Gmail - OFFICIAL SONG OUTLINE THREAD.pdf` in the repo root is the original email thread (32 messages, Jul 2010 — Aug 2014). It is the source of truth for all outline content, lore quotes, and founding member attributions.
