import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "@/data/timeline";

export default function Education() {
  return (
    <section id="education" className="py-20 px-5 border-t border-linesoft">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="education" title="Education" />
        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-line" />
          {EDUCATION.map((e, i) => (
            <div key={i} className={`relative ${i === EDUCATION.length - 1 ? "" : "mb-8"}`}>
              <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-cyan ring-4 ring-bg" />
              <div className="flex items-center gap-2 mb-1.5">
                <GraduationCap size={16} className="text-amber" />
                <span className="font-mono text-sm text-muted">{e.period}</span>
              </div>
              <h3 className="font-display font-semibold text-xl mb-0.5">{e.degree}</h3>
              <p className="font-mono text-base text-cyan">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
