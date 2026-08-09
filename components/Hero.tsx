"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const socials = [
  { label: "GitHub", href: site.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
];

/**
 * Hero: full-viewport identity statement over a faded engineering grid with
 * a slow crimson gradient sweep. Name at display scale; the primary route
 * is into Projects.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Atmosphere: grid + crimson sweep, both purely decorative */}
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-sweep absolute -inset-[10%] will-change-transform" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          {...enter(0.05)}
          className="mb-5 font-mono text-sm text-accent sm:text-base"
        >
          {site.role}
        </motion.p>

        <motion.h1
          {...enter(0.15)}
          className="font-display max-w-4xl text-5xl font-black leading-[0.95] text-fg sm:text-7xl lg:text-8xl"
        >
          Tyler
          <br />
          Katz
        </motion.h1>

        <motion.p
          {...enter(0.3)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-fg-body sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div {...enter(0.45)} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/#projects"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-fg"
          >
            View Projects
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/#resume"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </motion.div>

        <motion.ul {...enter(0.6)} className="mt-10 flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="block text-fg-mute transition-colors hover:text-accent"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
