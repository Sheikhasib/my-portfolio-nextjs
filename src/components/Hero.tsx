"use client";
import Image from "next/image";
import { Download, ChevronRight, Github, Linkedin, Mail, Key, Hash, Database } from "lucide-react";
import { useToast } from "./Toast";

function SchemaBox({ title, rows }: { title: string; rows: { label: string; value: string; pk?: boolean }[] }) {
  return (
    <div className="bp-card min-w-[210px]">
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
    <section id="home" className="relative pt-16 pb-16">
      <div className="bp-grid-bg" />
      <div className="max-w-[1120px] mx-auto px-5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="bp-eyebrow mb-5">schema: developer_profile</div>
            <h1 className="font-display font-semibold text-5xl leading-[1.08] mb-4">
              Sheikh Hasib Uzzaman
            </h1>
            <p className="font-mono text-cyan text-lg mb-5">Full Stack Developer</p>
            <p className="text-muted2 text-lg leading-[1.75] max-w-[520px] mb-7">
              I started out building full-stack products with the MERN stack — React, Node.js, Express, MongoDB,
              and Firebase — and have since leveled up into TypeScript, Next.js, PostgreSQL, Prisma, and
              AI-driven engineering through an advanced software engineering bootcamp. I like combining that
              hands-on product experience with a growing backend and AI skill set.
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              <a href="https://drive.google.com/uc?export=download&id=1CJTsHETAtQeH7knQX5BO1QComPPTRvWJ" download="Sheikh_Hasib_Uzzaman_Resume.pdf" className="bp-btn-primary">
                <Download size={16} /> download_resume.pdf
              </a>
              <a href="#projects" className="bp-btn-outline">
                view_projects <ChevronRight size={15} />
              </a>
            </div>

            <div className="flex gap-2.5">
              <a href="https://github.com/Sheikhasib" target="_blank" rel="noreferrer" className="bp-link-icon" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sheikh-hasib-uzzaman-5b12b720b" target="_blank" rel="noreferrer" className="bp-link-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sheikhhasib037@gmail.com"
                onClick={handleEmailClick}
                className="bp-link-icon"
                aria-label="Email — click to copy"
                title="sheikhhasib037@gmail.com"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[220px]">
              <div className="absolute -inset-1.5 border border-dashed border-line rounded-lg" />
              <Image
                src="/images/headshot.jpg"
                alt="Sheikh Hasib Uzzaman"
                width={220}
                height={275}
                className="relative z-[1] rounded border border-line object-cover w-[220px] h-[275px]"
                priority
              />
              <div className="font-mono absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-bg border border-line px-2.5 py-1 text-xs text-amber rounded z-[2] whitespace-nowrap">
                {/* users.avatar */}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-5 overflow-x-auto pb-1 mt-14">
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
