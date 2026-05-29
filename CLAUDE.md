# CLAUDE.md — portfolio_site

## Overview
Personal portfolio site for Matthew Barlow at matthewbarlow.me.
See `ARCHITECTURE.md` for full spec and `SUBTASKS.md` for build progress.

## Stack
- **Framework**: Astro v6
- **Styling**: Tailwind CSS v4 (class-based dark mode via `.dark` on `<html>`)
- **Interactivity**: Vanilla JS + CSS animations (no React runtime)
- **Hosting**: Cloudflare Pages (deploy only when user explicitly requests it)

## Project Structure
```
src/
  components/   # One file per UI component
  data/         # projects.ts — project data, edit here to add/update projects
  layouts/      # Layout.astro — shared shell (navbar, footer, global styles)
  pages/        # index.astro — home page; projects/[slug].astro — detail pages
  styles/       # global.css — Tailwind import + dark mode variant
public/         # Static assets (images, favicon)
```

## Design Conventions
- Color accent: **cyan** (`cyan-400` hover/text · `cyan-600` borders/buttons) — do not use indigo
- Section layout: label (monospace, uppercase, cyan) → heading → content
- Section dividers: `border-t border-zinc-100 dark:border-zinc-800`
- Cards: `rounded-2xl`, animated border trace, hover lift `translateY(-8px)` + cyan glow
- Spacing: `py-32 px-6` per section, `max-w-6xl mx-auto` container
- Typography: no custom font yet (system default), headings are `font-bold tracking-tight`
- Full style spec: `references/style-guide.md` (read by `style-enforcer-agent`)

## Adding a Project
Edit `src/data/projects.ts`. Each project has:
- `title`, `description`, `tech[]` — required
- `github` — link to GitHub repo (use `"#"` as placeholder)
- `slug` — if set, card links to `/projects/[slug]` (detail page) instead of GitHub
- `thumbnail` — optional image path under `public/`

## Commands
```bash
npm run dev        # Start dev server at http://localhost:4321 (hot-reload)
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally to verify before deploy
```

No linter configured yet. Astro type-checks TypeScript automatically on build.

## Design Philosophy
- **Polished and cohesive** — animations should serve the overall design, not compete with it or feel bolted on.
- Reference site for visual quality: [bettinasosa.com](https://www.bettinasosa.com) — emulate the polish, avoid the fragmentation.
- When building new sections or components, browse [21st.dev/community/components](https://21st.dev/community/components) for visual inspiration and patterns. Adapt HTML/Tailwind only — do not install React packages or introduce a React runtime.

## Project Detail Pages
- Cards with a `slug` field link to `/projects/[slug]` instead of GitHub — used for web projects with enough depth to warrant a case study page.
- The page lives at `src/pages/projects/[slug].astro`. Do not invent a different routing pattern.

## Open Design Decisions (ask before deciding)
- **Color scheme** — TBD, will be iterated on with the user. Do not make permanent color decisions beyond the current cyan accent without asking.
- **Font** — TBD. Currently using system default. Do not add a font without user approval.

## Rules
- **This project is locally hosted during development.** Do not deploy to Cloudflare or any remote environment without explicit user approval. Use `npm run dev` and `npm run preview` for all testing.
- Never include a phone number anywhere on the site.
- Never hardcode personal contact info beyond LinkedIn and GitHub URLs.
- Keep components single-responsibility — one component per file.
- All new sections must support dark mode via `dark:` Tailwind classes.
