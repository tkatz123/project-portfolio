/**
 * Section heading: the heading followed by a hairline rule that carries
 * the eye across the page.
 */
export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-14">
      <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">{children}</h2>
      <div aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}
