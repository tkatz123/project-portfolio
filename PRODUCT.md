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

Current phase: **live.** All content is real — five case-study projects, real experience bullets, real resume PDF, and real contact links. Content changes going forward are data-only edits to `data/content.ts`.

## Positioning

An AI/ML engineer in training with real production-adjacent experience unusual for a graduate student: LangGraph agents, RAG, and LLM fine-tuning (LoRA/QLoRA) shipped inside Comcast's cybersecurity organization (CSRE / TPX Security Solutions Engineering), plus engineering leadership of United AI, Syracuse's campus AI/ML organization. The site's claim is depth of applied AI engineering work, evidenced by project detail pages — not a résumé rehash.

## Operating Context

- Visitors typically arrive from a resume link, LinkedIn, or an application; they give the site seconds before deciding to dig in.
- Single-page site with smooth-scroll anchor navigation (Hero → About → Projects → Resume → Contact → Footer) plus individual project detail pages at `/projects/[slug]`.
- Sections and structure (confirmed):
  - **Hero:** name, tagline positioning Tyler as an AI/ML engineer in training, GitHub / LinkedIn / email links, CTAs to Projects and Resume.
  - **About:** four sub-blocks — About Me (4 personable paragraphs, real bio); Education timeline (Syracuse M.S. Applied Human Centered AI, in progress; Syracuse B.S. Applied Data Analytics, iSchool); Skills grouped as Languages (Python, JavaScript, R, SQL, HTML, CSS), ML & Data Science (scikit-learn, pandas, NumPy, matplotlib, PySpark), AI/LLM Engineering (LangGraph, RAG, agents, LoRA/QLoRA fine-tuning, prompt engineering), Engineering & Cloud (FastAPI, Docker, AWS EKS, GitHub Actions CI/CD, Streamlit, Shiny); Experience (Data Science Intern — Comcast SIAO, Cybersecurity Research Engineering; Engineering Lead — United AI, Syracuse's AI/ML student org; Data Analytics Research Assistant — Syracuse University) with real bullets.
  - **Projects:** two categories, each a card grid — AI / LLM Projects (2 real case studies: Agentic RAG System, Fine-Tuned LLM Microservice) and Classical ML / Data Science Projects (3 real case studies: Fake News Detection, Sales Forecasting Predictions, Customer Segmentation). Filter buttons: All / AI & LLM / Classical ML & DS. Cards link to detail pages built from one reusable template with sections: Overview, Problem, Approach, Architecture (authored SVG diagram), Results/Outcome (with click-to-enlarge result-chart galleries where applicable), Tech Stack, GitHub link.
  - **Resume:** prominent "Download Resume (PDF)" button linking to `/resume.pdf`, plus brief highlights list.
  - **Contact:** friendly invitation; email click-to-copy, GitHub and LinkedIn buttons. Static only — no backend, no contact form.
  - **Footer:** minimal — name, social icons, current year.

## Capabilities and Constraints

- All personal and project text lives in a structured data file (e.g., `data/content.ts`); project cards and detail pages are driven by a single `projects` array so adding a real project is a data-only edit.
- Static-export friendly; no server runtime, no backend, no forms.
- Fully responsive mobile through desktop; semantic HTML; good Lighthouse scores.
- README must cover: run locally, edit content, add a project, deploy.
- Five real project case studies are live; the template supports adding more via a data-only edit to the `projects` array.

## Brand Commitments

Name: Tyler Katz. No pre-existing logo, palette, or visual identity — visual world is open (to be decided in design work, not here). Voice for About/Contact: personable and editable by Tyler.

## Evidence on Hand

- **Headshot/photo:** real photo in place at `public/headshot.png`.
- **GitHub and LinkedIn URLs:** real profile URLs wired in. GitHub is `tkatz123`; LinkedIn is `tylerkatz1`. Email: tylerkatz110@gmail.com.
- **Resume PDF:** real resume in place at `public/resume.pdf`; downloads as `Tyler_Katz_Resume.pdf`.
- **Project details:** five real case studies are live (Agentic RAG System, Fine-Tuned LLM Microservice, Fake News Detection, Sales Forecasting Predictions, Customer Segmentation), each with real write-ups, GitHub links, and an authored architecture diagram.

## Product Principles

1. **Projects are the conversion.** Every path (hero CTA, nav, cards) should make exploring project depth the easiest next step; resume and contact support it.
2. **Data-file-driven content.** Structure and presentation never hard-code personal or project text; a future edit is a data edit, not a code edit.
3. **Content is honest.** Every accomplishment, metric, and outcome shown is real — nothing is invented or dressed up.
4. **Recruiter-speed scannability.** A visitor skimming for 30 seconds should grasp who Tyler is, his AI/LLM depth, and where the proof lives.
5. **Static and portable.** Nothing may require a server runtime; the site must build to static output cleanly.
