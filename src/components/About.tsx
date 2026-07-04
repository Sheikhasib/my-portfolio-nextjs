import { BadgeCheck, MapPin, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CERTIFICATE } from "@/data/timeline";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 border-t border-linesoft">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="about_me" title="About" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-muted2 text-lg leading-[1.8]">
            <p className="mb-4">
              My journey started with the MERN stack — JavaScript, React, Node.js, Express, and MongoDB — building
              full, working products end to end: authentication flows, REST APIs, and responsive UIs with Firebase
              and Bootstrap. That hands-on stretch is where I learned to actually ship things, not just follow
              tutorials.
            </p>
            <p className="mb-4">
              From there I moved into the AI-Driven Software Engineering Bootcamp at Next Level (Programming Hero),
              which pushed me further into TypeScript, Next.js, PostgreSQL, Prisma, Docker, and AWS — plus AI
              integration: RAG pipelines, vector search with pgvector, and LangChain orchestration. I like that my
              path combines real product experience with a deliberately expanding backend and AI skill set, rather
              than starting from theory alone.
            </p>
            <p>
              Outside of code, I also work in program coordination for community development initiatives, which
              keeps me grounded in how software actually needs to serve people, not just pass a code review.
            </p>
          </div>

          <div className="bp-card p-6 h-fit">
            <div className="bp-eyebrow mb-4">credentials</div>
            <div className="flex gap-3 items-start mb-4">
              <BadgeCheck size={20} className="text-[#7CE0A6] shrink-0 mt-0.5" />
              <div>
                <div className="text-base text-ink mb-1">{CERTIFICATE.title}</div>
                <div className="font-mono text-sm text-muted mb-2">{CERTIFICATE.issuer}</div>
                <a href={CERTIFICATE.link} target="_blank" rel="noreferrer" className="font-mono text-sm text-cyan inline-flex items-center gap-1">
                  view_certificate <ExternalLink size={12} />
                </a>
              </div>
            </div>
            <div className="h-px bg-line my-4" />
            <div className="bp-eyebrow mb-3">location</div>
            <div className="flex items-center gap-2 text-muted2 text-base">
              <MapPin size={17} className="text-amber" /> Banani, Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
