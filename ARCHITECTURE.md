# Portfolio Site — Architecture Spec

## Summary
A personal portfolio site for Matthew Barlow at matthewbarlow.me. Showcases projects, technical background, and contact information to hiring managers and potential freelance clients. Built to replace a basic Jekyll site with a polished, cohesive, visually impressive static site. Designed for career re-entry into the tech workforce.

## Classification
- **Type**: Static personal portfolio site
- **Interface**: Web UI
- **Persistence**: None — all content is static files (JSON/Markdown + assets)

## Go/No-Go Score
| Axis | Score (1–5) |
|---|---|
| Effort | 3 |
| Income potential | 1 |
| Portfolio value | 5 |
| Strategic fit | 5 |
| **Payoff / Threshold** | 11 vs. 6 — clear GO |

## Stack
| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro | Static output, fast, zero JS by default, supports component islands |
| Styling | Tailwind CSS | Built-in dark mode, consistent design system, responsive utilities |
| Interactivity | Vanilla JS + CSS animations | Sufficient for scroll animations and hover effects — no framework runtime needed |
| Component reference | 21st.dev (adapted) | Highest visual quality source for hero, animations, and project showcase |
| Hosting | Cloudflare Pages | Already in use at matthewbarlow.me |

## Components
- **Layout**: Base layout wrapping all pages — imports global styles, fonts, metadata
- **Navbar**: Sticky nav with anchor links to each section; dark/light mode toggle
- **Hero**: Animated intro section — strong tagline, CTA to projects
- **About**: Bio section — EE + Physics background, career re-entry framing (content TBD)
- **ProjectGrid**: Dual scrolling rows (opposite directions), filter bar by tech stack
- **ProjectCard**: Individual project card — title, description, thumbnail; hover overlay reveals tech stack
- **Contact**: LinkedIn and GitHub links
- **Footer**: Version, timezone, social links
- **ThemeToggle**: Dark/light mode switcher (Tailwind class-based)

## Data Model (key entities)
- **Project**: `title`, `description`, `thumbnail`, `tech_stack[]`, `github_url`, `live_url`, `featured: bool`
- Stored as a JSON file or Astro content collection (Markdown with frontmatter)
- 6 projects at launch; designed to scale

## Data Flow
1. Build time: Astro reads project data from content collection / JSON
2. Generates static HTML for each section
3. CSS handles dark/light mode via Tailwind `dark:` classes toggled by a class on `<html>`
4. Vanilla JS handles: sticky nav behavior, dual-row scroll animation, project filter, hover overlays, theme toggle
5. Cloudflare serves static files — no runtime, no server

## External Dependencies
- Cloudflare Pages: hosting and DNS — Low risk, already in use
- Google Fonts or Bunny Fonts: typography — Low risk, swap if needed
- 21st.dev components: adapted manually, no npm dependency — No risk

## UI Mockup

### Full Page (desktop)
```
┌─────────────────────────────────────────────────┐
│  matthewbarlow.me    About Projects Contact  🌙  │  ← sticky nav
├─────────────────────────────────────────────────┤
│                                                 │
│         [Animated Hero Section]                 │
│         Name + tagline + CTA button             │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  About                                          │
│  Short bio — EE/Physics background,             │
│  career re-entry, what I build                  │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Projects                                       │
│  [Filter: All] [Python] [React] [Flutter] ...   │
│                                                 │
│  ← [Card][Card][Card][Card][Card] ←  (row 1)   │
│  → [Card][Card][Card][Card][Card] →  (row 2)   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Contact                                        │
│  [LinkedIn]  [GitHub]                           │
│                                                 │
├─────────────────────────────────────────────────┤
│  matthewbarlow.me  v1.0  UTC-8  © 2026          │
└─────────────────────────────────────────────────┘
```

### Project Card (hover state)
```
┌──────────────────────┐    ┌──────────────────────┐
│                      │    │ ░░░░░░░░░░░░░░░░░░░░ │
│   [thumbnail]        │ →  │ ░ Python  Flutter  ░ │
│                      │    │ ░ SQLite  Riverpod ░ │
│   Project Name       │    │ ░░░░░░░░░░░░░░░░░░░░ │
│   Short description  │    │   Project Name       │
└──────────────────────┘    └──────────────────────┘
     default state                hover state
```

## MVP Scope
### v1 — Ship this
- Sticky navbar with dark/light mode toggle
- Animated hero section with tagline and CTA
- About section (bio content TBD)
- Projects section: dual scrolling rows + tech filter bar + hover overlay
- 6 placeholder project cards (real content and GitHub links added later)
- Contact section: LinkedIn + GitHub links
- Footer with version/timezone
- Fully responsive (mobile + desktop)
- Deployed to matthewbarlow.me on Cloudflare

**Done when:** The site is live at matthewbarlow.me with all sections rendered, placeholder project cards in place, and dark/light mode working — ready for real content to be swapped in.

### Future — Don't build yet
- Blog / writing section
- Case study pages per project
- Contact form with backend
- Testimonials
- Resume PDF download
- Three.js / shader visual effects (assess after v1)

## Risk Register
| Risk | Likelihood | Mitigation |
|---|---|---|
| Projects not on GitHub at launch | High | Use placeholder cards in v1; swap in real content after repos are public |
| 21st.dev components hard to adapt without React | Med | Adapt HTML/Tailwind only; drop React-specific syntax |
| About section content undefined | Med | Write bio content before dev begins; don't block on it |
| Dual-row scroll animation performance on mobile | Low | Test early; fall back to static grid on mobile if needed |

## Assumptions
| Assumption | Impact |
|---|---|
| No blog or dynamic content needed at launch | Structural |
| Project cards launch as placeholders; real content swapped in post-v1 | Structural |
| matthewbarlow.me DNS remains on Cloudflare | Minimal |
| About section content will be provided before development | Behavioral |

## Open Questions
- [ ] About section copy — what does the bio say? (career re-entry framing, tone)
- [ ] Which 6 projects get real cards post-v1? (candidates: Chess, Voice-Claude, Tavernboard, Nodesmith, + 2 from current site)
- [ ] Color scheme — TBD, to be iterated on
- [ ] Font choice — TBD
