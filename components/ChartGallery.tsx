"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/icons";

interface Chart {
  src: string;
  caption: string;
  width: number;
  height: number;
}

/**
 * Result-chart thumbnails that open into a full-size lightbox on click.
 * Escape and a backdrop click both dismiss it; body scroll is locked while open.
 */
export function ChartGallery({ charts }: { charts: Chart[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? charts[openIndex] : null;
  const hasMultiple = charts.length > 1;

  const showPrev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + charts.length) % charts.length));
  const showNext = () => setOpenIndex((i) => (i === null ? i : (i + 1) % charts.length));

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (hasMultiple && e.key === "ArrowLeft") showPrev();
      if (hasMultiple && e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, hasMultiple]);

  return (
    <>
      <ul className="mt-8 flex flex-wrap justify-center gap-6">
        {charts.map((chart, i) => (
          <li key={chart.src} className="w-full sm:w-[calc(33.333%-1rem)]">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full text-left"
              aria-label={`Enlarge: ${chart.caption}`}
            >
              <Image
                src={chart.src}
                alt={chart.caption}
                width={chart.width}
                height={chart.height}
                className="w-full border border-line transition-colors group-hover:border-accent/60"
              />
              <p className="mt-3 font-mono text-xs leading-relaxed text-fg-mute transition-colors group-hover:text-fg">
                {chart.caption}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={open.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm sm:p-10"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="fixed right-5 top-5 border border-line bg-surface p-2.5 text-fg transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous chart"
                  className="fixed left-5 top-1/2 -translate-y-1/2 border border-line bg-surface p-2.5 text-fg transition-colors hover:border-accent hover:text-accent sm:left-8"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next chart"
                  className="fixed right-5 top-1/2 -translate-y-1/2 border border-line bg-surface p-2.5 text-fg transition-colors hover:border-accent hover:text-accent sm:right-8"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={open.src}
                alt={open.caption}
                width={open.width}
                height={open.height}
                className="max-h-[75vh] w-auto border border-line object-contain"
              />
              <p className="mt-4 text-center font-mono text-xs text-fg-mute">{open.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
