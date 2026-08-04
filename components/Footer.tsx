import { site } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-fg-mute">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fg-mute transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg-mute transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-fg-mute transition-colors hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-fg-mute">
          built with next.js <span className="text-accent">//</span> deployed on vercel
        </p>
      </div>
    </footer>
  );
}
