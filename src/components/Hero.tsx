"use client";
import Image from "next/image";
import { Download, ChevronRight, Github, Linkedin, Mail, Key, Hash, Database } from "lucide-react";
import { useToast } from "./Toast";

function SchemaBox({ title, rows }: { title: string; rows: { label: string; value: string; pk?: boolean }[] }) {
  return (
    <div className="bp-card min-w-[210px] bp-glow-cyan">
      <div className="border-b border-line px-3 py-2.5 flex items-center gap-1.5">
        <Database size={13} className="text-cyan" />
        <span className="font-mono text-sm text-cyan">{title}</span>
      </div>
      {rows.map((r) => (
        <div key={r.label} className="bp-col-row">
          <span className="flex items-center gap-1.5 text-muted">
            {r.pk ? <Key size={11} className="text-amber" /> : <Hash size={11} className="text-line" />}
            {r.label}
          </span>
          <span className="text-ink">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { show } = useToast();

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("sheikhhasib037@gmail.com");
      show("Email copied — sheikhhasib037@gmail.com");
    } catch {
      show("Email: sheikhhasib037@gmail.com");
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-16 overflow-hidden">
      <div className="bp-grid-bg" />
      <div className="absolute inset-0 bg-gradient-cyan pointer-events-none" />
      <div className="max-w-[1120px] mx-auto px-5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="bp-eyebrow mb-5 animate-fade-up">schema: developer_profile</div>
            <h1 className="font-display font-semibold text-5xl leading-[1.08] mb-4 animate-fade-up stagger-1">
              Sheikh Hasib Uzzaman
            </h1>
            <p className="font-mono text-cyan text-lg mb-5 animate-fade-up stagger-2">
              Full Stack Developer
            </p>
            <p className="text-muted2 text-lg leading-[1.75] max-w-[520px] mb-7 animate-fade-up stagger-3">
              I started out building full-stack products with the MERN stack — React, Node.js, Express, MongoDB,
              and Firebase — and have since leveled up into TypeScript, Next.js, PostgreSQL, Prisma, and
              AI-driven engineering through an advanced software engineering bootcamp. I like combining that
              hands-on product experience with a growing backend and AI skill set.
            </p>

            <div className="flex flex-wrap gap-3 mb-7 animate-fade-up stagger-4">
              <a href="https://drive.google.com/uc?export=download&id=14czZzdmNovBNpBk_pgbxEfbRpmXR6adG" className="bp-btn-primary">
                <Download size={16} /> download_resume.pdf
              </a>
              <a href="#projects" className="bp-btn-outline">
                view_projects <ChevronRight size={15} />
              </a>
            </div>

            <div className="flex gap-2.5 animate-fade-up stagger-5">
              <a href="https://github.com/Sheikhasib" target="_blank" rel="noreferrer" className="bp-link-icon" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sheikh-hasib-uzzaman" target="_blank" rel="noreferrer" className="bp-link-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <button
                onClick={handleEmailClick}
                className="bp-link-icon cursor-pointer"
                aria-label="Copy email"
                title="sheikhhasib037@gmail.com"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up stagger-3">
            <div className="relative w-[260px] sm:w-[320px] lg:w-[380px] aspect-[4/5]">
              <div className="absolute -inset-2 border border-dashed border-line rounded-sm" />
              <Image
                src="/images/headshot-2.jpeg"
                alt="Sheikh Hasib Uzzaman"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                className="relative z-[1] rounded-sm border border-line object-cover"
                priority
              />
              <span className="font-mono absolute -bottom-3 left-1/2 -translate-x-1/2 bg-bg border border-line px-2.5 py-1 text-xs text-amber rounded-sm z-[2] whitespace-nowrap tracking-wide">
                avatar
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-5 overflow-x-auto pb-1 mt-14 animate-fade-up stagger-6">
          <SchemaBox title="location" rows={[{ label: "city", value: "Jessore", pk: true }, { label: "country", value: "Bangladesh" }]} />
          <div className="flex items-center text-line">──▸</div>
          <SchemaBox
            title="stack_primary"
            rows={[
              { label: "lang", value: "TypeScript", pk: true },
              { label: "runtime", value: "Node.js" },
              { label: "db", value: "PostgreSQL" },
            ]}
          />
          <div className="flex items-center text-line">──▸</div>
          <SchemaBox
            title="focus_area"
            rows={[
              { label: "current", value: "Full Stack", pk: true },
              { label: "exploring", value: "RAG / LLMs" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
