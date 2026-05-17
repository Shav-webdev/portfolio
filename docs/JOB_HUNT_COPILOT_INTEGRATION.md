# Connecting `job-hunt-copilot` to the Portfolio

A research + solution write-up. Reviewed both repos on 2026-05-16.

## TL;DR

The cleanest way to surface `job-hunt-copilot` in the portfolio today is **a project card pointing to a dedicated case-study page** inside the portfolio (`/projects/job-hunt-copilot`), with the GitHub repo as the secondary link. A public live demo is **not realistically deployable as-is** without paid infra and significant changes (auth provider, demo mode, Gemini rate-limit handling). The case-study route gives recruiters something to click that *is* still inside the portfolio, while we defer the live demo to a follow-up.

This document explains what's already there, what was blocking the integration, what was implemented, and what remains optional.

## What `job-hunt-copilot` actually is

Reading the source confirmed it's a real, working, multi-service AI product — not a stub:

- **`apps/web`** — Next.js 16 + React 19 + Tailwind, NextAuth, dashboard/chat/jobs/profile/applications pages. Streams agent output via SSE.
- **`apps/api`** — NestJS 11 + Drizzle ORM + Postgres + pgvector. Modules for `auth`, `users`, `cvs`, `jobs`, `applications`, `agent`, `ai-core`. JWT auth.
- **`apps/agent`** — Python FastAPI + LangGraph (`create_react_agent`) + Gemini 2.5 Flash. Uses Redis pub/sub to stream tool events (`start`, `tool_start`, `tool_end`, `llm_chunk`, `done`, `error`) back to the web app over SSE. Hard cap of 10 tool calls per run.
- **`apps/ai-core`** — Python FastAPI + Gemini. Endpoints for `/embed`, `/parse-cv` (PDF → structured JSON), `/score` (CV ↔ JD match with reasons), `/draft-cover-letter` (streamed SSE).
- **`infra/`** — Helm umbrella chart with subcharts for web/api/agent/ai-core, k3d local cluster, Tilt for live reload, Bitnami Redis via `helm_remote`.
- **DB schema** — `users`, `cvs`, `jobs`, `applications` (status enum: `saved | applied | interview | rejected | offer`), with relations.
- **Git** — 6 commits, phases 1–4 complete, public at <https://github.com/Shav-webdev/job-hunt-copilot>.

So the project is real and shippable into the portfolio. The question is just *how* to surface it.

## Missing parts that were blocking a clean portfolio entry

The portfolio's `Project` schema (`src/data/projects.ts`) requires: `image`, `url`, `github`, `description`, `category`, `technologies`. The card component opens `url` in a new tab on click.

Concrete gaps between what `job-hunt-copilot` provides today and what the portfolio needs:

1. **No cover image / screenshot.** Nothing in the repo to put on the card. Resolved by generating a branded SVG cover (`public/images/projects/job-hunt-copilot.svg`) as a placeholder. Replace with a real screenshot when convenient.
2. **No live demo URL.** Card UX expects `url` to do something. Resolved by pointing `url` at an internal case-study page in the portfolio (`/projects/job-hunt-copilot`) rather than 404'ing.
3. **No root `README.md` in the repo.** The GitHub link from the portfolio leads to a bare repo. Not blocking — but the GitHub landing page is what visitors will see, so adding a README is a recommended follow-up (covered in "Optional follow-ups" below).
4. **Categories are too narrow.** Existing categories (`Web Application`, `React Application`, `UI Component`, `Data Visualization`, `Game Development`) don't fit a full-stack AI agent product. Resolved by adding **`Full-Stack & AI`** as a new category.
5. **`status: 'completed' | 'in-progress' | 'archived'`** — the schema is fine, just needs `in-progress` for this one.

Items that would block a *real live demo* (deferred — see "If you ever do want a live demo"):

6. NextAuth has no public provider configured for a stranger to log in. Would need a guest/demo login.
7. `apps/agent`'s error handler reveals the Gemini free-tier quota is **20 requests/day**. A public demo would burn through this immediately.
8. Backend stack (Postgres + Redis + 2 Python services + 1 Nest service + Next) is non-trivial to host. Costs money on Fly/Railway/Render.
9. `Tiltfile` + Helm setup is **local-only** (k3d). There's no production deployment manifest.
10. No CI, no tests beyond `app.controller.spec.ts`.

## Options compared

| Option | Visitor experience | Effort | Cost | Risk |
|---|---|---|---|---|
| **A. Card + GitHub only** | Click → GitHub | 15 min | $0 | Recruiters bounce — code-only |
| **B. Card + case-study page** ✅ chosen | Click → rich page on your site → GitHub | 1–2 hrs | $0 | Low |
| **C. Recorded video demo** | Click → 1–2 min Loom showing the product | 1 day | $0 | Needs you on camera/screen |
| **D. Full live deploy** | Click → working app | 1–2 days + ongoing | ~$5–20/mo + Gemini paid | Demo abuse, quota burn |

We picked B. Pairs well with C later (embed the Loom in the case-study page) and B/C can both upgrade to D later by swapping `project.url`.

## What was implemented

Files added/changed in the portfolio:

- `src/data/projects.ts` — added project id `9` for `job-hunt-copilot`. Added `"Full-Stack & AI"` to `categories`.
- `public/images/projects/job-hunt-copilot.svg` — placeholder cover (replace with real screenshot when convenient).
- `src/app/projects/job-hunt-copilot/page.tsx` — case-study page: overview, architecture diagram (SVG), tech stack, feature list, what it taught me, GitHub link.

Card behavior on the `/projects` page (Personal tab):

- Cover image: the SVG (replaceable).
- "Live Demo" button → opens `/projects/job-hunt-copilot` in a new tab.
- GitHub button → opens the public repo.
- Modal: shows `longDescription`, `highlights`, `challenges`, `results`, technologies.

## How to replace the placeholder with a real screenshot

1. Run `job-hunt-copilot` locally (`tilt up` from the repo root once Docker + k3d are running, or `pnpm dev` per-app).
2. Take a screenshot of the dashboard (`/dashboard`) showing application stats + recent applications, or the chat page (`/chat`) mid-agent-run with tool events. Target ~1200×800.
3. Save it as `public/images/projects/job-hunt-copilot.png` (or `.jpg`).
4. In `src/data/projects.ts`, change the new entry's `image` from `"/images/projects/job-hunt-copilot.svg"` to `"/images/projects/job-hunt-copilot.png"`. The component already accepts `string | StaticImageData`.

## Optional follow-ups

1. **Write a root `README.md` in `job-hunt-copilot`.** What it does, screenshot, `tilt up` instructions, architecture diagram. The GitHub link from the portfolio should not land on a bare directory listing.
2. **Record a 60–90 second Loom** of the agent doing a real run + scoring a CV. Embed it (`<iframe>`) at the top of the case-study page.
3. **Push a screenshot** as described above.
4. **Add a small "What I learned" section** to the case-study page if you want it more narrative.

## If you ever do want a live demo (path D, deferred)

A workable production shape:

- **Web** on Vercel.
- **API (Nest)** + **agent** + **ai-core** on Fly.io or Railway (one app each, internal networking).
- **Postgres** on Neon (free tier covers this) — note `pgvector` is required.
- **Redis** on Upstash (serverless, pub/sub supported on paid tier — check before committing) or a small Fly Redis instance.
- **Demo mode**: seed a `demo@jobhunt.dev` user with a sample CV + 10 saved jobs; show a "Try as guest" button on `/login` that signs them in as that user. Don't let guests write to anything.
- **Gemini**: pay the API (cheap at low volume) and cache `/score` results keyed by `hash(cv_text, job_description)` so repeated demos don't re-bill. Add a per-IP rate limit on `/agent/run` (e.g. 1 run / hour / IP) so a curious recruiter doesn't burn the quota.
- **Sanitize**: hide `/profile` write actions for the demo user.

Rough estimate: **1–2 focused days** of work plus ~$10/month ongoing.
