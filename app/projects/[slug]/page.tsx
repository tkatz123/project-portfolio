import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site } from "@/data/content";
import { Footer } from "@/components/Footer";
import { ChartGallery } from "@/components/ChartGallery";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  DiagramIcon,
  GitHubIcon,
} from "@/components/icons";

/** Static export: pre-render every project page from the data file. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
  };
}

const categoryLabel = {
  "ai-llm": "AI / LLM",
  "classical-ml": "Classical ML / DS",
} as const;

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-10 sm:py-12">
      <h2 className="font-display text-xl font-bold text-fg sm:text-2xl">{title}</h2>
      <div className="mt-5 max-w-3xl text-base leading-relaxed sm:text-lg">{children}</div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-fg-mute transition-colors hover:text-fg"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            back to projects
          </Link>
          <Link
            href="/#top"
            className="font-display text-sm font-bold text-fg transition-colors hover:text-accent"
          >
            {site.name}
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Same world as the landing hero: faded grid behind the title block */}
        <div aria-hidden="true" className="hero-grid absolute inset-x-0 top-0 h-[420px]" />

        {/* Title block */}
        <h1 className="font-display relative text-3xl font-black leading-tight text-fg sm:text-5xl">
          {project.title}
        </h1>
        <p className="relative mt-5 max-w-2xl text-lg leading-relaxed">{project.description}</p>

        <div className="relative mt-8 flex flex-wrap items-center gap-3">
          <span className="border border-line px-4 py-2.5 font-mono text-xs text-fg-mute">
            {categoryLabel[project.category]}
          </span>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            github repo
          </a>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpRightIcon className="h-4 w-4" />
              live demo
            </a>
          )}
        </div>

        <div className="mt-12 space-y-0">
          <DetailSection title="Overview">
            <p>{project.detail.overview}</p>
          </DetailSection>

          <DetailSection title="Problem">
            <p>{project.detail.problem}</p>
          </DetailSection>

          <DetailSection title="Approach">
            <p>{project.detail.approach}</p>
          </DetailSection>

          <DetailSection title="Architecture">
            {project.detail.architectureImage ? (
              <figure>
                <Image
                  src={project.detail.architectureImage}
                  alt={project.detail.architectureCaption}
                  width={1200}
                  height={675}
                  className="w-full border border-line"
                />
                <figcaption className="mt-3 font-mono text-xs text-fg-mute">
                  {project.detail.architectureCaption}
                </figcaption>
              </figure>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 border border-dashed border-line bg-surface text-center">
                <DiagramIcon className="h-8 w-8 text-fg-mute" />
                <p className="max-w-sm px-6 font-mono text-xs leading-relaxed text-fg-mute">
                  [PLACEHOLDER: architecture diagram — set{" "}
                  <span className="text-accent">architectureImage</span> in data/content.ts]
                </p>
              </div>
            )}
          </DetailSection>

          <DetailSection title="Results & Outcome">
            <p>{project.detail.results}</p>
            <p className="mt-4 border-l border-accent pl-4 font-mono text-sm text-fg-mute">
              <span className="text-accent">outcome:</span> {project.outcome}
            </p>
            {project.detail.resultCharts && (
              <ChartGallery charts={project.detail.resultCharts} />
            )}
          </DetailSection>

          <DetailSection title="Tech Stack">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="border border-accent/25 bg-accent-soft px-3 py-1.5 font-mono text-xs text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </DetailSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
