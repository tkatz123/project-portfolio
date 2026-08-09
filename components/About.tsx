import Image from "next/image";
import { about, education, experience, site, skillGroups } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * About: personable bio beside the headshot, then education as a horizontal
 * timeline (vertical on mobile), then skills and experience side by side.
 */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading>About</SectionHeading>

      {/* Bio + headshot */}
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="group relative mx-auto w-64 lg:w-full">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-accent/50 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              />
              <Image
                src={site.headshot}
                alt={`Portrait of ${site.name}`}
                width={641}
                height={489}
                className="relative aspect-[4/3] w-full border border-line object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
              />
            </div>
          </figure>
        </Reveal>
      </div>

      {/* Education timeline */}
      <Reveal className="mt-20">
        <h3 className="font-display mb-8 text-lg font-bold text-fg">Education</h3>
        <ol className="relative grid gap-10 border-l border-line pl-6 sm:grid-cols-2 sm:gap-8 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-8">
          {education.map((entry) => (
            <li key={entry.degree} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[30px] top-1 h-3 w-3 rounded-full sm:-top-[39px] sm:left-[-2.5px] ${
                  entry.dot === "filled" ? "bg-accent" : "border-2 border-accent bg-ink"
                }`}
              />
              <p className="font-mono text-xs text-accent">{entry.period}</p>
              <p className="font-display mt-1.5 font-bold text-fg">{entry.degree}</p>
              <p className="mt-1 text-sm text-fg-mute">{entry.school}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Skills + Experience */}
      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <Reveal>
          <h3 className="font-display mb-8 text-lg font-bold text-fg">Skills</h3>
          <dl className="space-y-7">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <dt className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-mute">
                  {group.category}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-line bg-surface px-3 py-1.5 font-mono text-xs text-fg-body transition-colors hover:border-accent/60 hover:text-fg"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-display mb-8 text-lg font-bold text-fg">Experience</h3>
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.role}-${job.org}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display font-bold text-fg">{job.role}</p>
                  <p className="font-mono text-xs text-accent">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-fg-mute">{job.org}</p>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
