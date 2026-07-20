"use client";
import { Briefcase, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "@/data/timeline";
import { useInView } from "@/hooks/useInView";

function ExperienceItem({ role, company, period, bullets, index }: {
  role: string; company: string; period: string; bullets: string[]; index: number;
}) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
      style={{ transitionDelay: `${0.15 * index}s` }}
    >
      <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-cyan ring-4 ring-bg transition-all duration-500"
        style={{ boxShadow: inView ? "0 0 12px rgba(111,211,247,0.4)" : "none" }} />
      <div className="flex items-center gap-2 mb-1.5">
        <Briefcase size={16} className="text-amber" />
        <span className="font-mono text-sm text-muted">{period}</span>
      </div>
      <h3 className="font-display font-semibold text-xl mb-0.5">{role}</h3>
      <p className="font-mono text-base text-cyan mb-3">{company}</p>
      <ul className="space-y-2 max-w-[640px]">
        {bullets.map((b, bi) => (
          <li key={bi} className="text-muted2 text-base leading-[1.7] flex gap-2.5">
            <span className="text-amber shrink-0">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-5 border-t border-linesoft bg-bgalt">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="experience" title="Experience" />
        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-cyan/40 via-line to-line" />
          {EXPERIENCE.map((e, i) => (
            <div key={i} className={`relative ${i === EXPERIENCE.length - 1 ? "" : "mb-10"}`}>
              <ExperienceItem role={e.role} company={e.company} period={e.period} bullets={e.bullets} index={i} />
            </div>
          ))}
          <div className="relative mt-8 pl-7">
            <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full border-2 border-dashed border-muted ring-4 ring-bg" />
            <div className="flex items-center gap-2 mb-1.5 opacity-60">
              <span className="font-mono text-sm text-muted">growth_in_progress</span>
            </div>
            <p className="font-mono text-sm text-muted">
              Currently expanding into AI/ML engineering, cloud architecture, and system design.
              <a href="/#contact" className="text-cyan hover:underline underline-offset-2 ml-1 inline-flex items-center gap-0.5">
                open to opportunities <ExternalLink size={10} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
