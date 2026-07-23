import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saranya Srija &middot; Tempe, AZ
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/saranyasrija/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saranbud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/saranyasreeja_music"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
