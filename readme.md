# Bo Bunlong — Cybersecurity Portfolio

A static, single-page portfolio (SOC dashboard aesthetic) built with plain HTML/CSS/JS — no build step, no framework, no dependencies to install.

## Files
- `index.html` — all page content/sections
- `style.css` — design system + styling
- `script.js` — boot-sequence animation, scroll reveals, animated bars, nav highlighting

## Put this on GitHub (recommended — do this first)

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
```

Then create a new empty repo on GitHub (no README/license, so it stays empty), and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

From then on, whenever you edit a file:

```bash
git add .
git commit -m "Add SOC intern experience"
git push
```

If you connect this repo to Vercel (see Option C below), every `git push` auto-deploys — no manual redeploy step needed.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel   # skip if already installed
cd portfolio
vercel                  # first deploy, follow the prompts
vercel --prod           # promote to production URL
```

### Option B — Drag and drop (no CLI)
1. Go to https://vercel.com/new
2. Choose "Deploy" → drag the `portfolio` folder (or a zip of it) onto the upload area
3. Since this is static HTML, leave Framework Preset as **Other** — no build command or output directory needed
4. Click Deploy

### Option C — Git-based (recommended for ongoing edits)
1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. In Vercel: **New Project → Import** your repo
3. Framework Preset: **Other**. Build Command: leave empty. Output Directory: leave empty (root)
4. Deploy — every future push to the connected branch auto-deploys

No `vercel.json` is required since there's no routing or serverless logic — Vercel serves static files automatically.

## Editing content

Everything is hand-written in `index.html`, organized into clearly commented sections in the same order as the live page. Open the file and search (Ctrl+F / Cmd+F) for a `<!-- === SECTION === -->` banner to jump straight to it. There's also a "FILE MAP" comment right at the top of `index.html` listing every section.

The sections you'll come back to most often each have a **"HOW TO ADD/EDIT"** comment directly above them with copy-paste-ready instructions:

| Section | ID | What it's for |
|---|---|---|
| About | `#about` | Bio paragraphs + the ID-card panel (name, age, institution, etc.) |
| Career Goals | `#goals` | Long-term goal checklist |
| Focus Areas | `#interests` | The 6 interest cards (SOC, Threat Hunting, etc.) |
| Skills | `#skills` | Skill bars grouped by category, with Beginner/Intermediate/Learning badges |
| **Certifications** | `#certifications` | **New.** Add certs/courses here as you earn them — currently shows an empty-state placeholder with an example block commented out just below it |
| **Experience** | `#experience` | **New.** Add internships/jobs/volunteer work here — same empty-state + example pattern |
| Projects | `#projects` | Project write-ups (problem solved / relevance / skills / challenges) |
| Lab | `#lab` | Home lab diagram + activity list |
| CTF | `#ctf` | TryHackMe / HTB / PicoCTF progress cards |
| Writeups | `#writeups` | Blog post list |
| Achievements | `#achievements` | Milestone timeline |
| Contact | `#contact` | Email + social links — swap the placeholder `mailto:` and `#` links for real ones |

General pattern for adding a new card/row/item almost anywhere on the page: **find the block you want to duplicate, copy it, paste it right below the original, then edit the text inside.** The styling and animations apply automatically — you don't need to touch `style.css` or `script.js` for routine content updates.

Two CSS/JS conventions worth knowing if you do want to customize further:
- Add `class="reveal"` to any new element to make it fade in on scroll.
- Add `data-fill="NN"` (0–100) to any bar's inner `<div>` to have it animate to that percentage on scroll (used by skill bars, hero gauges, and CTF bars).

## Notes
- Fonts (`JetBrains Mono`, `Inter`) load from Google Fonts via CDN link tags in `<head>` — no local font files needed.
- Fully responsive (mobile nav collapses the link list; grids stack on narrow screens).
- Respects `prefers-reduced-motion` for accessibility.
- Placeholder links (`mailto:`, LinkedIn, GitHub, TryHackMe, blog post links) should be swapped for real URLs before sharing widely.