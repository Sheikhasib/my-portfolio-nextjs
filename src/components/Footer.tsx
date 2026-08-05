import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-linesoft py-7 px-5">
      <div className="max-w-[1120px] mx-auto flex flex-wrap gap-3 items-center justify-between">
        <span className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} Sheikh Hasib Uzzaman
        </span>
        <div className="flex gap-2">
          <a href="https://github.com/Sheikhasib" target="_blank" rel="noreferrer" className="bp-link-icon w-8 h-8" aria-label="GitHub">
            <Github size={14} />
          </a>
          <a href="https://www.linkedin.com/in/sheikh-hasib-uzzaman" target="_blank" rel="noreferrer" className="bp-link-icon w-8 h-8" aria-label="LinkedIn">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
