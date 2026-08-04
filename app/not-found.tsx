import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="font-mono text-sm text-accent">404 // page not found</p>
      <h1 className="font-display text-4xl font-black text-fg sm:text-5xl">
        Nothing at this address.
      </h1>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        back home
      </Link>
    </main>
  );
}
