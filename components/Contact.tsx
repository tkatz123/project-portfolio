"use client";

import { useEffect, useRef, useState } from "react";
import { contact, site } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

/**
 * Contact: a friendly invitation with a click-to-copy email as the hero
 * action, flanked by GitHub and LinkedIn. Static — no form, no backend.
 */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions, http): fall back to mail client.
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading>Contact</SectionHeading>

      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-3xl font-bold text-fg sm:text-4xl">
            {contact.heading}
          </h3>
          <p className="mt-5 text-base leading-relaxed sm:text-lg">{contact.invitation}</p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="group inline-flex items-center gap-3 border border-accent/50 bg-accent-soft px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-accent"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-4 w-4 text-accent" />
                  <span className="text-accent">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <CopyIcon className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                  <span className="font-mono text-sm font-normal">{site.email}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-fg-body transition-colors hover:border-accent hover:text-fg"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-fg-body transition-colors hover:border-accent hover:text-fg"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
