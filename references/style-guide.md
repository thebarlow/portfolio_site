# Style Guide — portfolio_site

> Source of truth for CSS/Tailwind conventions. Update this file when design decisions change. Referenced by the `style-enforcer-agent` on every component audit.

---

## Colors

**Accent:** `cyan-400` (text, hover states) · `cyan-600` (borders, active buttons)
- Use cyan consistently. Do not use indigo — it appears in CLAUDE.md but is not the actual convention.

**Neutrals:** `zinc-*` scale exclusively
- Light text on dark: `zinc-300`, `zinc-100`
- Borders (light mode): `zinc-100` · Borders (dark mode): `zinc-800`
- Subtle backgrounds: `zinc-900` (dark), `zinc-50` (light)

**Overlays:** white/black with opacity — `bg-white/10`, `from-black/90`, `via-black/30`

**Never:** hardcoded hex colors, non-zinc neutrals, non-cyan accents without explicit justification.

---

## Spacing

- Section padding: `py-32 px-6`
- Container: `max-w-6xl mx-auto`
- Card grid gap: `gap-6`
- Card fixed width: `w-[260px]`
- Card internal padding: `p-4`
- Tag gap: `gap-1`, tag padding: `px-2 py-0.5`

Stick to Tailwind's 4px spacing scale. Avoid arbitrary values except for established fixed widths (e.g. `w-[260px]`).

---

## Typography

**Section labels:** `font-mono uppercase text-sm` + cyan accent color
**Section headings:** `font-bold tracking-tight` (size varies by section, typically `text-4xl`)
**Body / descriptions:** `text-sm`, `text-zinc-300`, `leading-snug`
**Tech tags:** `text-xs font-mono`

No custom font is in use — system default only. Do not introduce a web font without user approval.

---

## Components

### Cards
- Wrapper: `rounded-2xl overflow-hidden`, `aspect-ratio: 3/4`, fixed `w-[260px]` in grid
- Border: `1px solid rgba(255,255,255,0.08)` at rest
- Animated border trace: `::before` pseudo-element with `conic-gradient` driven by `--angle` CSS variable (animated via `requestAnimationFrame`)
- Hover lift: `transform: translateY(-8px)`
- Hover shadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(34,211,238,0.1)`
- Gradient overlay: `bg-gradient-to-t from-black/90 via-black/30 to-transparent`
- Title hover: `group-hover:text-cyan-400 transition-colors`
- Description: hidden at rest (`max-h-0 opacity-0`), slides in on hover (`group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300`)
- Tags: first 3 visible at rest + overflow count; all visible on hover via `group-hover:hidden` / `group-hover:flex` toggle

### Filter buttons (ProjectGrid)
- Active: `border-cyan-600 bg-cyan-600 text-white`
- Inactive: `border-zinc-300 dark:border-zinc-700`

### Section dividers
- `border-t border-zinc-100 dark:border-zinc-800`

---

## Dark Mode

- Applied via `.dark` class on `<html>` (toggled by localStorage in Layout.astro)
- All components must pair every `bg-*`, `text-*`, `border-*` color class with a `dark:` variant
- In Astro `<style>` blocks (scoped CSS), use `:global(.dark) .selector { }` for dark mode overrides
- In Tailwind utility classes, use `dark:` prefix directly

---

## Animation

- Standard transition: `duration-300` (300ms)
- Hover transitions: `transition-colors`, `transition-all`
- Card lift/shadow: `transition: transform 0.25s ease, box-shadow 0.25s ease`
- Border trace: `requestAnimationFrame` loop, `1.5deg` increment per frame, only while hovered
- Background blobs (ProjectGrid): keyframe animations `11s` and `14s` infinite, using `translate()` + `scale()`

Animations must serve the design — no gratuitous motion. Prefer CSS transitions over JS animation except where the border trace pattern is being reused.
