# Personal Brand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the personal brand spec — update portfolio site copy and produce a portable brand kit (color palette, voice doc, logo/favicon, business card, resume header, GitHub social card).

**Architecture:** Two independent phases. Phase 1 edits three Astro components and Layout.astro. Phase 2 creates static brand artifact files under `docs/brand/` and `public/`. No new dependencies required.

**Tech Stack:** Astro v6, Tailwind CSS v4, plain HTML/CSS for print artifacts, SVG for logo/favicon.

**Spec:** `docs/superpowers/specs/2026-04-25-personal-brand-design.md`

---

## Setup

### Task 0: Create working branch

- [ ] **Step 1: Create and check out the feature branch**

  ```bash
  git checkout -b feat/personal-brand
  ```

- [ ] **Step 2: Verify you're on the branch**

  ```bash
  git branch
  ```
  Expected: `* feat/personal-brand` is active.

---

## Phase 1 — Website Copy

### Task 1: Update Hero copy

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Open the file and locate the three copy nodes**

  In `src/components/Hero.astro`, find:
  - Line 20: label `<p>` — currently says `Software Engineer`
  - Line 23: `<h1>` — currently says `Hi, I'm Matthew`
  - Lines 28–34: body `<p>` — currently the generic "passionate developer" text

- [ ] **Step 2: Replace the label**

  Change:
  ```html
  Software Engineer
  ```
  To:
  ```html
  AI Engineer
  ```

- [ ] **Step 3: Replace the headline and add subhead**

  Replace the existing `<h1>` and body `<p>` block (lines 23–35) with:
  ```html
  <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
    I build AI-powered software.
  </h1>
  <p class="text-xl font-medium text-zinc-600 dark:text-zinc-300 tracking-tight">
    Engineering background. Modern tools. Shipped projects.
  </p>
  ```

- [ ] **Step 4: Replace the body paragraph**

  Add after the subhead `<p>`:
  ```html
  <p class="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
    I'm Matthew — an engineer with a B.S. in EE from Columbia who builds
    AI-integrated applications, Python backends, and cross-platform software.
    I work fast and I ship things.
  </p>
  ```

- [ ] **Step 5: Verify build passes**

  ```bash
  npm run build
  ```
  Expected: exits 0 with no type errors.

- [ ] **Step 6: Verify visually**

  ```bash
  npm run dev
  ```
  Open `http://localhost:4321`. Confirm hero shows "AI Engineer" label, "I build AI-powered software." headline, subhead, and two-sentence body.

- [ ] **Step 7: Commit**

  ```bash
  git add src/components/Hero.astro
  git commit -m "feat: update hero copy for AI engineer brand"
  ```

---

### Task 2: Update About copy and skills grid

**Files:**
- Modify: `src/components/About.astro`

- [ ] **Step 1: Replace the body paragraphs**

  In `src/components/About.astro`, find the two `<p>` tags inside the `.flex.flex-col.gap-4` div (lines 28–38) and replace them with:
  ```html
  <p>
    B.S. Electrical Engineering, Columbia University. B.A. Physics, University of
    Redlands. That background gave me systems thinking and a tolerance for hard
    problems — I now apply both to software.
  </p>
  <p>
    I build AI-integrated applications, Python backends, cross-platform mobile
    apps, and browser-based tooling. I care about writing code that ships and
    holds up.
  </p>
  ```

- [ ] **Step 2: Update the skills grid**

  In the `.map()` array, change `"Claude API"` to `"Claude API / LLMs"`. The full array should read:
  ```ts
  ["Python", "TypeScript", "React", "Astro", "Flutter", "FastAPI", "PostgreSQL", "Docker", "Claude API / LLMs"]
  ```

- [ ] **Step 3: Verify build passes**

  ```bash
  npm run build
  ```
  Expected: exits 0.

- [ ] **Step 4: Verify visually**

  Open `http://localhost:4321/#about`. Confirm updated paragraphs and "Claude API / LLMs" pill in skills grid.

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/About.astro
  git commit -m "feat: update about copy and skills grid for AI brand"
  ```

---

### Task 3: Update Contact copy

**Files:**
- Modify: `src/components/Contact.astro`

- [ ] **Step 1: Replace the body paragraph**

  In `src/components/Contact.astro`, find the `<p>` tag (lines 27–29):
  ```html
  Open to new opportunities, collaborations, and interesting projects.
  Reach me on LinkedIn or browse my work on GitHub.
  ```
  Replace with:
  ```html
  Open to full-time roles, contracts, and collaborations. Reach me directly — I respond.
  ```

- [ ] **Step 2: Update the page meta description in Layout.astro**

  In `src/layouts/Layout.astro` line 13, change the default description:
  ```ts
  description = "Software engineer — Python, TypeScript, Flutter.",
  ```
  To:
  ```ts
  description = "AI engineer building AI-powered applications, Python backends, and automation workflows.",
  ```

- [ ] **Step 3: Verify build passes**

  ```bash
  npm run build
  ```
  Expected: exits 0.

- [ ] **Step 4: Verify visually**

  Open `http://localhost:4321/#contact`. Confirm updated paragraph text.

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/Contact.astro src/layouts/Layout.astro
  git commit -m "feat: update contact copy and meta description"
  ```

---

## Phase 2 — Brand Artifacts

### Task 4: Color palette reference doc

**Files:**
- Create: `docs/brand/color-palette.md`

- [ ] **Step 1: Create the docs/brand directory and file**

  Create `docs/brand/color-palette.md` with:
  ```markdown
  # Brand Color Palette

  ## Accent
  | Usage | Light mode | Dark mode |
  |-------|-----------|-----------|
  | Primary accent | `#0891b2` (cyan-600) | `#22d3ee` (cyan-400) |
  | Accent hover | `#06b6d4` (cyan-500) | `#06b6d4` (cyan-500) |
  | Accent border / buttons | `#0e7490` (cyan-700) | `#06b6d4` (cyan-500) |

  ## Backgrounds
  | Usage | Light mode | Dark mode |
  |-------|-----------|-----------|
  | Page background | `#ffffff` | `#09090b` (zinc-950) |
  | Surface / card | `#f4f4f5` (zinc-100) | `#18181b` (zinc-900) |
  | Elevated surface | `#e4e4e7` (zinc-200) | `#27272a` (zinc-800) |

  ## Borders
  | Usage | Light mode | Dark mode |
  |-------|-----------|-----------|
  | Section divider | `#f4f4f5` (zinc-100) | `#27272a` (zinc-800) |
  | Card border | `#e4e4e7` (zinc-200) | `#27272a` (zinc-800) |

  ## Typography
  | Usage | Light mode | Dark mode |
  |-------|-----------|-----------|
  | Primary text | `#18181b` (zinc-900) | `#ffffff` |
  | Secondary text | `#71717a` (zinc-500) | `#a1a1aa` (zinc-400) |
  | Accent label (monospace) | `#0891b2` (cyan-600) | `#22d3ee` (cyan-400) |

  ## Usage Rules
  - Cyan is the **only** accent color. Do not introduce indigo, violet, or other hues.
  - Dark mode is the default. Light mode is opt-in via `.dark` class removal on `<html>`.
  - Use zinc for all neutrals — not gray, slate, or stone.
  - Accent color on text: labels, hover states, active links only. Not body copy.
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add docs/brand/color-palette.md
  git commit -m "docs: add brand color palette reference"
  ```

---

### Task 5: Voice and tone reference doc

**Files:**
- Create: `docs/brand/voice-and-tone.md`

- [ ] **Step 1: Create the file**

  Create `docs/brand/voice-and-tone.md` with:
  ```markdown
  # Voice & Tone — Matthew Barlow

  ## Positioning
  > "Matthew Barlow builds AI-powered software — grounded in engineering, focused on shipping."

  **Identity:** AI engineer and automation consultant. Operating under personal name at matthewbarlow.me.

  **Audiences:**
  - Hiring managers / recruiters (full-time AI/ML roles)
  - Freelance clients (AI automation workflow services)

  ## Rules

  ### Do
  - Make statements. "I build X." not "I am passionate about X."
  - Use concrete nouns. "Python backend" not "robust solutions."
  - Be direct. Short sentences. Active voice.
  - Lead with credentials as facts, not narrative. "B.S. EE, Columbia." not "I was fortunate to study..."
  - End on action or outcome. "I work fast and I ship things."

  ### Don't
  - Hedge. No "hoping to", "learning to", "interested in", "looking to".
  - Over-explain. One sentence beats two when one is enough.
  - Use filler adjectives. No "passionate", "dedicated", "hardworking", "innovative".
  - Write in third person for first-person contexts (bio, about, cover letter).

  ## Tone
  Confident and direct, but human. Not robotic — contractions are fine, a dry observation is fine.
  The goal is to sound like someone who knows what they're doing and doesn't need to prove it.

  ## Title / Label Usage
  - Portfolio site label: `AI Engineer`
  - Business card title: `AI Automation Engineer`
  - Resume title: `AI / ML Engineer` or `Software Engineer — AI Systems`
  - GitHub bio: concise, one line, no fluff

  ## Copy Examples

  | Bad | Good |
  |-----|------|
  | "I am passionate about building AI solutions." | "I build AI-powered software." |
  | "I have experience with Python and FastAPI." | "Python backends, FastAPI, PostgreSQL." |
  | "I am looking for new opportunities." | "Open to full-time roles and contracts." |
  | "I love learning new technologies." | "I work fast and I ship things." |
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add docs/brand/voice-and-tone.md
  git commit -m "docs: add brand voice and tone reference"
  ```

---

### Task 6: Logo SVG and favicon

**Files:**
- Create: `public/favicon.svg`
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Create the SVG logomark**

  Create `public/favicon.svg`:
  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <!-- Background: rounded square, zinc-950 -->
    <rect width="32" height="32" rx="6" fill="#09090b"/>
    <!-- M glyph — geometric, cyan-400 -->
    <path
      d="M6 24V8l6 8 4-5.5 4 5.5 6-8v16h-2.5V13.5l-3.5 4.8-4-5.5-4 5.5-3.5-4.8V24H6z"
      fill="#22d3ee"
    />
  </svg>
  ```

- [ ] **Step 2: Verify the SVG renders correctly**

  Open `public/favicon.svg` directly in a browser. Confirm: dark rounded square background, cyan "M" glyph visible and centered, readable at small sizes.

- [ ] **Step 3: Update Layout.astro to add apple-touch-icon**

  In `src/layouts/Layout.astro`, after the existing favicon links (line 25–26), add:
  ```html
  <link rel="apple-touch-icon" href="/favicon.svg" />
  ```
  The existing `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` line already points to the new file — no other change needed.

- [ ] **Step 4: Verify favicon appears in browser tab**

  ```bash
  npm run dev
  ```
  Open `http://localhost:4321`. Check the browser tab — favicon should show the dark square with cyan M.

- [ ] **Step 5: Commit**

  ```bash
  git add public/favicon.svg src/layouts/Layout.astro
  git commit -m "feat: add brand logomark as SVG favicon"
  ```

---

### Task 7: Business card

**Files:**
- Create: `docs/brand/business-card/card.html`
- Create: `docs/brand/business-card/card.css`

- [ ] **Step 1: Create the CSS file**

  Create `docs/brand/business-card/card.css`:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #27272a;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .card {
    width: 88.9mm;
    height: 50.8mm;
    background: #09090b;
    border-radius: 3mm;
    padding: 7mm 8mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  /* Subtle cyan glow, top-right */
  .card::before {
    content: '';
    position: absolute;
    width: 40mm;
    height: 40mm;
    background: radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%);
    top: -10mm;
    right: -5mm;
    pointer-events: none;
  }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .monogram {
    width: 8mm;
    height: 8mm;
    flex-shrink: 0;
  }

  .card-bottom { display: flex; flex-direction: column; gap: 1mm; }

  .name {
    font-size: 5mm;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .title {
    font-size: 2.8mm;
    font-weight: 500;
    color: #22d3ee;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 1.5mm;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.5mm;
  }

  .contact-line {
    font-size: 2.5mm;
    color: #a1a1aa;
    font-weight: 400;
  }

  @media print {
    body { background: white; min-height: unset; }
    .card { box-shadow: none; }
  }
  ```

- [ ] **Step 2: Create the HTML file**

  Create `docs/brand/business-card/card.html`:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Business Card — Matthew Barlow</title>
    <link rel="stylesheet" href="card.css" />
  </head>
  <body>
    <div class="card">
      <div class="card-top">
        <!-- Logomark -->
        <svg class="monogram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#18181b"/>
          <path d="M6 24V8l6 8 4-5.5 4 5.5 6-8v16h-2.5V13.5l-3.5 4.8-4-5.5-4 5.5-3.5-4.8V24H6z" fill="#22d3ee"/>
        </svg>
      </div>

      <div class="card-bottom">
        <p class="name">Matthew Barlow</p>
        <p class="title">AI Automation Engineer</p>
        <div class="contact">
          <span class="contact-line">matthewbarlow.me</span>
          <span class="contact-line">hireme@matthewbarlow.me</span>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

- [ ] **Step 3: Preview the card**

  Open `docs/brand/business-card/card.html` in a browser. Verify:
  - Card is dark (zinc-950 background)
  - Name "Matthew Barlow" is prominent in white
  - Title "AI Automation Engineer" is cyan
  - Contact lines are zinc-400
  - Logomark appears top-right area
  - Proportions look like a business card (roughly 2:1 landscape)

- [ ] **Step 4: Verify print layout**

  In the browser, open Print Preview (Ctrl+P). Confirm the card renders cleanly without browser chrome or background-color stripping. If background colors are stripped, note that Chrome requires "Background graphics" enabled in print settings.

- [ ] **Step 5: Commit**

  ```bash
  git add docs/brand/business-card/
  git commit -m "feat: add print-ready business card"
  ```

---

### Task 8: Resume header template

**Files:**
- Create: `docs/brand/resume-header-template.md`

- [ ] **Step 1: Create the file**

  Create `docs/brand/resume-header-template.md`:
  ```markdown
  # Resume Header Template

  ## Text version (paste into any doc)

  ```
  Matthew Barlow
  AI / ML Engineer
  matthewbarlow.me · hireme@matthewbarlow.me · linkedin.com/in/matthew-barlow-433492199 · github.com/thebarlow
  ```

  ## Usage notes
  - Title: use "AI / ML Engineer" for ML-focused roles, "Software Engineer — AI Systems" for broader SWE roles
  - Do not include a phone number
  - Do not include a physical address
  - LinkedIn and GitHub are the only social links to include

  ## Styling guidance (for Word / Google Docs)
  - Name: 20–22pt, bold, zinc-900 equivalent (#18181b) or black
  - Title: 11pt, regular, cyan equivalent (#0891b2) or dark teal if color printing unavailable
  - Contact line: 9–10pt, regular, gray (#71717a)
  - Divider below header: thin rule, zinc-200 equivalent

  ## Tone reminder
  See `docs/brand/voice-and-tone.md` before writing the summary / objective section.
  The summary, if included, should be 2 sentences max. Lead with what you build, end with your differentiator.

  **Example summary:**
  > I build AI-integrated software — Python backends, automation workflows, and cross-platform apps. Engineering background (Columbia EE) applied to shipping real AI products fast.
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add docs/brand/resume-header-template.md
  git commit -m "docs: add resume header template"
  ```

---

### Task 9: GitHub social preview card template

**Files:**
- Create: `docs/brand/github-social-card/template.html`

- [ ] **Step 1: Create the template**

  Create `docs/brand/github-social-card/template.html`:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>GitHub Social Card</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }

      body {
        width: 1280px;
        height: 640px;
        background: #09090b;
        font-family: system-ui, -apple-system, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 72px 96px;
        overflow: hidden;
        position: relative;
      }

      /* Cyan glow top-right */
      body::before {
        content: '';
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%);
        top: -150px;
        right: -100px;
        pointer-events: none;
      }

      .top { display: flex; align-items: center; justify-content: space-between; }

      .monogram svg { width: 48px; height: 48px; }

      .domain {
        font-size: 18px;
        color: #71717a;
        letter-spacing: 0.04em;
      }

      .middle { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 16px; }

      .label {
        font-size: 14px;
        font-weight: 500;
        color: #22d3ee;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .title {
        font-size: 64px;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.05;
        letter-spacing: -0.03em;
        /* EDIT: replace with repo/project name */
      }

      .description {
        font-size: 24px;
        color: #a1a1aa;
        line-height: 1.4;
        max-width: 800px;
        /* EDIT: replace with one-line project description */
      }

      .bottom {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .tag {
        padding: 6px 14px;
        border-radius: 6px;
        background: #18181b;
        border: 1px solid #27272a;
        color: #a1a1aa;
        font-size: 16px;
        font-family: 'Menlo', 'Monaco', monospace;
        /* EDIT: replace with tech stack tags */
      }
    </style>
  </head>
  <body>
    <div class="top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48">
        <rect width="32" height="32" rx="6" fill="#18181b"/>
        <path d="M6 24V8l6 8 4-5.5 4 5.5 6-8v16h-2.5V13.5l-3.5 4.8-4-5.5-4 5.5-3.5-4.8V24H6z" fill="#22d3ee"/>
      </svg>
      <span class="domain">matthewbarlow.me</span>
    </div>

    <div class="middle">
      <span class="label">Project</span>
      <h1 class="title">Project Name</h1><!-- EDIT -->
      <p class="description">One-line description of what this project does.</p><!-- EDIT -->
    </div>

    <div class="bottom">
      <span class="tag">Python</span><!-- EDIT: replace tags -->
      <span class="tag">FastAPI</span>
      <span class="tag">Claude API</span>
    </div>
  </body>
  </html>
  ```

- [ ] **Step 2: Preview the template**

  Open `docs/brand/github-social-card/template.html` in a browser. Set browser window to 1280×640 or zoom out to see the full card. Verify:
  - Dark background, cyan glow visible top-right
  - Logomark top-left, domain top-right
  - Title placeholder is large and legible
  - Tech stack tags appear bottom-left
  - Overall proportions match a GitHub social preview card (2:1 landscape)

- [ ] **Step 3: Add usage instructions as a comment**

  The `<!-- EDIT -->` comments in the HTML serve as the usage guide. No separate doc needed.

- [ ] **Step 4: Commit**

  ```bash
  git add docs/brand/github-social-card/
  git commit -m "feat: add GitHub social preview card template"
  ```

---

## Done

All tasks complete when:
- [ ] `npm run build` exits 0
- [ ] Hero, About, Contact copy matches spec
- [ ] `docs/brand/` contains: `color-palette.md`, `voice-and-tone.md`, `resume-header-template.md`, `business-card/`, `github-social-card/`
- [ ] `public/favicon.svg` is present and visible in browser tab
