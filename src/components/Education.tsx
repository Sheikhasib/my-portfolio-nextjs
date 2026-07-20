"use client";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "@/data/timeline";
import { useInView } from "@/hooks/useInView";

function EducationItem({ degree, school, period, index }: { degree: string; school: string; period: string; index: number }) {
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
        <GraduationCap size={16} className="text-amber" />
        <span className="font-mono text-sm text-muted">{period}</span>
      </div>
      <h3 className="font-display font-semibold text-xl mb-0.5">{degree}</h3>
      <p className="font-mono text-base text-cyan">{school}</p>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 px-5 border-t border-linesoft">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="education" title="Education" />
        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-cyan/40 via-line to-line" />
          {EDUCATION.map((e, i) => (
            <div key={i} className={`relative ${i === EDUCATION.length - 1 ? "" : "mb-8"}`}>
              <EducationItem degree={e.degree} school={e.school} period={e.period} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
