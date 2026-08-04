/**
 * Section heading: mono numeral in red fused into the heading line,
 * followed by a hairline rule that carries the eye across the page.
 * The numbers mirror the sticky nav — the page's own table of contents.
 */
export function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-14">
      <h2 className="font-display flex items-baseline gap-3 text-2xl font-bold text-fg sm:text-3xl">
        <span aria-hidden="true" className="font-mono text-base font-normal text-accent sm:text-lg">
          {number}.
        </span>
        {children}
      </h2>
      <div aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}
