# Tyler Katz — Portfolio

Personal portfolio site: a single scrolling page (Hero → About → Projects → Resume → Contact) plus a case-study page per project at `/projects/<slug>`.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, exported fully static — deployable to Vercel, GitHub Pages, or any static host.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

**Every word on the site lives in [`data/content.ts`](data/content.ts).** Components never hard-code personal or project text, so updating the site is a data edit:

- `site` — name, role, tagline, email, GitHub/LinkedIn URLs, resume path, headshot path
- `about.paragraphs` — the About Me bio
- `education`, `skillGroups`, `experience` — the About sub-blocks
- `resume.highlights` — bullets shown next to the download button
- `projects` — every project card **and** its detail page
- `contact` — the Contact section copy

Anything wrapped in `[PLACEHOLDER: ...]` is stub content — search the file for `PLACEHOLDER` to find everything left to fill in.

### Replace the resume

`public/resume.pdf` is a clearly-marked placeholder file. Drop your real resume over it (keep the name `resume.pdf`).

### Replace the headshot

The About photo is `public/headshot.png`. Replace the file, or point `site.headshot` at a new one.

## Add a project

Append one entry to the `projects` array in `data/content.ts`:

```ts
{
  slug: "my-new-project",            // becomes /projects/my-new-project
  title: "My New Project",
  category: "ai-llm",                // or "classical-ml"
  description: "What it is, in a sentence or two.",
  outcome: "The single most impressive result.",
  tech: ["LangGraph", "FastAPI"],
  links: { github: "https://github.com/...", demo: "https://..." }, // demo optional
  detail: {
    overview: "...",
    problem: "...",
    approach: "...",
    architectureImage: "/diagrams/my-new-project.png", // file in /public, or null
    architectureCaption: "One-line diagram caption.",
    results: "...",
  },
}
```

That's it — the card, the filter counts, and the detail page are all generated from this entry. Put any architecture diagram image in `public/` and reference it by absolute path (`/...`).

## Deploy

The site is a static export (`output: "export"` in `next.config.ts`).

**Vercel (current target):** push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new) — the defaults work as-is. Every push to `main` redeploys.

**GitHub Pages (alternative):** run `npm run build`, then publish the `out/` directory (e.g. with a Pages workflow). If the site is served at `https://<user>.github.io/<repo>/` rather than a custom domain, add `basePath: "/<repo>"` to `next.config.ts` first.

**Any static host:** `npm run build`, then upload `out/`.

## Preview the production build

```bash
npm run build      # writes the static site to out/
npm run start      # serves out/ locally
```
