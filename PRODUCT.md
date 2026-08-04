# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) with TypeScript and Tailwind CSS. Strict static-export friendly. Deploy target: Vercel (confirmed) — no basePath constraints needed.

## Users

- **Primary:** Recruiters and hiring managers for AI/ML engineering and data science roles, scanning quickly (often from a resume link or LinkedIn) to judge whether Tyler's work merits a conversation. Mobile and desktop both likely.
- **Secondary:** Potential collaborators and peers (campus AI/ML community, open-source, internship colleagues).

## Product Purpose

Tyler Katz's personal portfolio site showcasing AI engineering and data science work. Success: a visiting recruiter **explores the projects** — project depth is the primary conversion; resume download and contact are supporting actions.

Current phase: build the **full structure only**. All project content and bullet-level details use clearly marked placeholder text (`[PLACEHOLDER: ...]`) that Tyler will replace later by editing a data file.

## Positioning

An AI/ML engineer in training with real production-adjacent experience unusual for a graduate student: LangGraph agents, RAG, and LLM fine-tuning (LoRA/QLoRA) shipped inside Comcast's cybersecurity organization (CSRE / TPX Security Solutions Engineering), plus engineering leadership of Cuse AI, Syracuse's campus AI/ML organization. The site's claim is depth of applied AI engineering work, evidenced by project detail pages — not a résumé rehash.

## Operating Context

- Visitors typically arrive from a resume link, LinkedIn, or an application; they give the site seconds before deciding to dig in.
- Single-page site with smooth-scroll anchor navigation (Hero → About → Projects → Resume → Contact → Footer) plus individual project detail pages at `/projects/[slug]`.
- Sections and structure (confirmed):
  - **Hero:** name, tagline positioning Tyler as an AI/ML engineer in training, GitHub / LinkedIn / email links, CTAs to Projects and Resume.
  - **About:** four sub-blocks — About Me (2–3 editable personable paragraphs); Education timeline (Syracuse M.S. Applied Human Centered AI, in progress; Syracuse B.S. Applied Data Analytics, iSchool, 2026); Skills grouped as Languages (Python, R, SQL), ML & Data Science (scikit-learn, pandas, NumPy, matplotlib, PySpark), AI/LLM Engineering (LangGraph, RAG, agents, LoRA/QLoRA fine-tuning, prompt engineering), Engineering & Cloud (FastAPI, Docker, AWS EKS, GitHub Actions CI/CD, Streamlit, Shiny); Experience (Data Science Intern — Comcast CSRE, TPX Security Solutions Engineering, 2026; Engineering Lead — Cuse AI; Treasurer — Zeta Beta Tau Fraternity, Omicron Chapter) with short placeholder bullets.
  - **Projects:** two categories, each a card grid — AI / LLM Projects (3 placeholder cards) and Classical ML / Data Science Projects (3 placeholder cards). Filter buttons: All / AI & LLM / Classical ML & DS. Cards link to detail pages built from one reusable template with sections: Overview, Problem, Approach, Architecture (image placeholder), Results/Outcome, Tech Stack, GitHub / Live Demo links.
  - **Resume:** prominent "Download Resume (PDF)" button linking to `/resume.pdf`, plus brief highlights list.
  - **Contact:** friendly invitation; email click-to-copy, GitHub and LinkedIn buttons. Static only — no backend, no contact form.
  - **Footer:** minimal — name, social icons, current year.

## Capabilities and Constraints

- All personal and project text lives in a structured data file (e.g., `data/content.ts`); project cards and detail pages are driven by a single `projects` array so adding a real project is a data-only edit.
- Static-export friendly; no server runtime, no backend, no forms.
- Fully responsive mobile through desktop; semantic HTML; good Lighthouse scores.
- README must cover: run locally, edit content, add a project, deploy.
- Six project slots ship as placeholders; the template must read well with placeholder content without looking broken or fake.

## Brand Commitments

Name: Tyler Katz. No pre-existing logo, palette, or visual identity — visual world is open (to be decided in design work, not here). Voice for About/Contact: personable and editable by Tyler.

## Evidence on Hand

- **Headshot/photo:** exists and is ready to use (Tyler to supply the file; stub the slot until provided).
- **Real GitHub and LinkedIn URLs:** Tyler wants actual profile URLs wired in now. GitHub is `tkatz123` (inferred from git config — confirm); LinkedIn URL to be supplied by Tyler. Email: tylerkatz110@gmail.com.
- **Resume PDF:** not ready yet — `/resume.pdf` link ships as a placeholder target; do not fabricate resume content.
- **Project details:** none yet — all six projects are `[PLACEHOLDER: ...]` stubs by explicit instruction; do not invent real-sounding project names, metrics, or outcomes presented as fact.

## Product Principles

1. **Projects are the conversion.** Every path (hero CTA, nav, cards) should make exploring project depth the easiest next step; resume and contact support it.
2. **Data-file-driven content.** Structure and presentation never hard-code personal or project text; a future edit is a data edit, not a code edit.
3. **Placeholders are honest.** Stub content is clearly marked as placeholder — never dressed up as real accomplishments, metrics, or testimonials.
4. **Recruiter-speed scannability.** A visitor skimming for 30 seconds should grasp who Tyler is, his AI/LLM depth, and where the proof lives.
5. **Static and portable.** Nothing may require a server runtime; the site must build to static output cleanly.
