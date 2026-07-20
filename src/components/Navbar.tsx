"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const { id } of NAV) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-bg/85 backdrop-blur-md border-b border-linesoft">
      <div className="max-w-[1120px] mx-auto px-5 flex items-center justify-between">
        <Link
          href="/#home"
          className="font-mono text-[15px] py-4 flex items-center gap-2 hover:text-cyan transition-colors"
        >
          <span className="text-amber">&gt;</span> sheikh_hasib<span className="text-cyan">.dev</span>
        </Link>

        <nav className="hidden md:flex gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`/#${n.id}`}
              className={`bp-nav-link py-4 ${active === n.id ? "active" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-3 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-linesoft px-5 py-2 bg-bg/95 backdrop-blur-md">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`/#${n.id}`}
              onClick={() => setOpen(false)}
              className={`bp-nav-link block py-2.5 ${active === n.id ? "active" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
