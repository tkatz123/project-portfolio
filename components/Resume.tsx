"use client";

import { resume, site } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DownloadIcon } from "@/components/icons";

const RESUME_FILENAME = "Tyler_Katz_Resume.pdf";

/**
 * Resume: a prominent download action with a compact highlights list beside it.
 */
export function Resume() {
  // Safari doesn't reliably honor <a download="...">, falling back to the
  // served file's own name. Fetching as a blob forces the filename everywhere.
  const handleDownload = async () => {
    const response = await fetch(site.resumeUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = RESUME_FILENAME;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading>Resume</SectionHeading>

      <Reveal>
        <div className="grid gap-10 border border-line bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
              The one-page version
            </h3>
            <ul className="mt-6 space-y-3">
              {resume.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="group inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-fg"
          >
            <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume (PDF)
          </button>
        </div>
      </Reveal>
    </section>
  );
}
