"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projectCategories, projects, type Project, type ProjectCategory } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";

const categoryLabel: Record<ProjectCategory, string> = {
  "ai-llm": "AI / LLM",
  "classical-ml": "Classical ML / DS",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex h-full flex-col border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-2 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold leading-snug text-fg transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-fg-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-fg-body">{project.description}</p>

      <p className="mt-4 border-t border-line pt-4 font-mono text-xs leading-relaxed text-fg-mute">
        <span className="text-accent">outcome:</span> {project.outcome}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-5">
        <li className="border border-line px-2.5 py-1 font-mono text-[11px] text-fg-mute">
          {categoryLabel[project.category]}
        </li>
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="border border-accent/25 bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}

/**
 * Projects: filter buttons above a card grid. Cards animate in and out as the
 * filter changes; each links to its case-study page at /projects/[slug].
 */
export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const reduceMotion = useReducedMotion();

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading>Projects</SectionHeading>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {projectCategories.map((category) => {
          const isActive = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              aria-pressed={isActive}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-ink"
                  : "border-line text-fg-body hover:border-accent/60 hover:text-fg"
              }`}
            >
              {category.label}
              <span className={`ml-2 font-mono text-xs ${isActive ? "text-ink/60" : "text-fg-mute"}`}>
                {category.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === category.id).length}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduceMotion} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
