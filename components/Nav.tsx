"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navSections, site } from "@/data/content";

/**
 * Sticky numbered navigation. Tracks the section currently in view and
 * highlights its entry; collapses to a hamburger menu on mobile.
 */
export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

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

        <ul className="hidden items-center gap-1 sm:flex sm:gap-3">
          {navSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`/#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-display whitespace-nowrap rounded px-2 py-2 text-base font-bold underline-offset-[10px] transition-colors sm:px-3 ${
                    isActive
                      ? "text-fg underline decoration-accent decoration-2"
                      : "text-fg-mute hover:text-fg"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded text-fg transition-colors hover:text-accent sm:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-nav-menu"
          className="flex flex-col gap-1 border-t border-line bg-ink/95 px-5 py-3 backdrop-blur-md sm:hidden"
        >
          {navSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`/#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display block rounded px-2 py-3 text-base font-bold underline-offset-[10px] transition-colors ${
                    isActive
                      ? "text-fg underline decoration-accent decoration-2"
                      : "text-fg-mute hover:text-fg"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
