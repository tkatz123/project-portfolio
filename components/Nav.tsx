"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navSections, site } from "@/data/content";

/**
 * Sticky numbered navigation. Tracks the section currently in view and
 * highlights its entry; collapses to a horizontal scroll strip on mobile.
 */
export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Highlight the first section in nav order that is in view;
        // none in view (e.g. back at the hero) clears the highlight.
        const current = navSections.find((s) => visible.has(s.id));
        setActive(current ? current.id : "");
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const section of navSections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Link
          href="/#top"
          className="font-display whitespace-nowrap text-base font-bold text-fg transition-colors hover:text-accent"
        >
          <span className="sm:hidden" aria-label={site.name}>
            TK
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <ul className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {navSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`/#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-baseline gap-1.5 whitespace-nowrap rounded px-2 py-2 text-sm transition-colors sm:px-3 ${
                    isActive ? "text-fg" : "text-fg-mute hover:text-fg"
                  }`}
                >
                  <span
                    className={`hidden font-mono text-[11px] transition-colors sm:inline ${
                      isActive ? "text-accent" : "text-fg-mute group-hover:text-accent"
                    }`}
                  >
                    {section.number}.
                  </span>
                  <span>{section.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
