# Personal Brand Design — matthewbarlow.me

## Positioning Statement

> "Matthew Barlow builds AI-powered software — grounded in engineering, focused on shipping."

**Target audiences:**
- Hiring managers / recruiters (full-time AI/ML engineering roles)
- Freelance clients (AI automation workflow services)

**Differentiator:** Strong engineering fundamentals (Columbia EE, Physics) + already shipping real AI products independently. Not a researcher who can't ship; not a bootcamp grad who can't reason about systems.

**Business identity:** Operating under personal name (Matthew Barlow) at matthewbarlow.me. No separate business name — personal brand is the business brand.

---

## Voice Rules

- Statements, not descriptions. ("I build X" not "I am passionate about X")
- No hedging language ("hoping to", "learning to", "interested in")
- Concrete nouns over adjectives ("Python backend" not "robust solutions")
- Confident and direct, but human — not robotic
- Short sentences preferred

---

## Website Copy Changes

### Hero

**Label:** `AI Engineer`
*(replaces "Software Engineer")*

**Headline:**
> I build AI-powered software.

**Subhead:**
> Engineering background. Modern tools. Shipped projects.

**Body:**
> I'm Matthew — an engineer with a B.S. in EE from Columbia who builds AI-integrated applications, Python backends, and cross-platform software. I work fast and I ship things.

---

### About

**Headline (keep as-is):**
> Engineer by training, developer by practice.

**Body:**
> B.S. Electrical Engineering, Columbia University. B.A. Physics, University of Redlands. That background gave me systems thinking and a tolerance for hard problems — I now apply both to software.
>
> I build AI-integrated applications, Python backends, cross-platform mobile apps, and browser-based tooling. I care about writing code that ships and holds up.

**Skills grid change:**
- `"Claude API"` → `"Claude API / LLMs"`

---

### Contact

**Body:**
> Open to full-time roles, contracts, and collaborations. Reach me directly — I respond.

---

## Brand Artifacts

### Priority 1 — Need Now

#### 1. Color Palette
Formalize the implicit palette already in use on the site. Produces a portable reference (hex values, usage rules) for use across all artifacts.

| Role | Light mode | Dark mode |
|------|-----------|-----------|
| Accent | `#0891b2` (cyan-600) | `#22d3ee` (cyan-400) |
| Accent hover | `#06b6d4` (cyan-500) | `#06b6d4` (cyan-500) |
| Background | `#ffffff` | `#09090b` (zinc-950) |
| Surface | `#f4f4f5` (zinc-100) | `#18181b` (zinc-900) |
| Border | `#e4e4e7` (zinc-200) | `#27272a` (zinc-800) |
| Text primary | `#18181b` (zinc-900) | `#ffffff` |
| Text secondary | `#71717a` (zinc-500) | `#a1a1aa` (zinc-400) |

#### 2. Logo / Wordmark
A minimal logomark that:
- Works as a favicon (16×16, 32×32, 180×180 apple-touch)
- Works as a site header mark
- Works on the business card
- Works on light and dark backgrounds

Design direction: monogram ("MB") or wordmark ("Matthew Barlow") in a clean geometric style using the cyan accent. No complex illustration.

Deliverable: SVG source + exported PNG/ICO favicon files placed in `public/`.

#### 3. Voice & Tone Reference Doc
A single markdown file the brand rules defined above, usable as a reference when writing copy for any project, README, or client-facing material.

Deliverable: `docs/brand/voice-and-tone.md`

#### 4. Business Card
Single-sided or double-sided card for in-person client networking (automation workflow services).

**Front:**
- Name: Matthew Barlow
- Title: AI Automation Engineer
- Domain: matthewbarlow.me
- Email: hireme@matthewbarlow.me
- Logo / monogram

**Back (optional):** Minimal — tagline or QR code linking to matthewbarlow.me

Design direction: dark background (zinc-950), cyan accent, clean sans-serif type. Matches site aesthetic.

Deliverable: print-ready PDF + source file (Figma or HTML/CSS for portability).

---

### Priority 2 — Need Soon

#### 5. Resume Header Template
Consistent header block for job applications matching the brand palette and voice.

Deliverable: `docs/brand/resume-header-template.md` (markdown) + matching styled HTML version.

#### 6. GitHub Social Preview Card Template
1280×640px card used as the OpenGraph/social preview image on GitHub repos.

Design direction: dark background, cyan accent, repo name + one-line description + matthewbarlow.me.

Deliverable: template SVG/HTML that can be filled in per-project.

---

## What's Not Changing

- Visual design, color scheme, layout of the portfolio site
- Page structure (Hero → About → Projects → Contact)
- Contact links and social handles
