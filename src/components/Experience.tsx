import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "@/data/timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-5 border-t border-linesoft bg-bgalt">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="experience" title="Experience" />
        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-line" />
          {EXPERIENCE.map((e, i) => (
            <div key={i} className={`relative ${i === EXPERIENCE.length - 1 ? "" : "mb-8"}`}>
              <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-cyan ring-4 ring-bg" />
              <div className="flex items-center gap-2 mb-1.5">
                <Briefcase size={16} className="text-amber" />
                <span className="font-mono text-sm text-muted">{e.period}</span>
              </div>
              <h3 className="font-display font-semibold text-xl mb-0.5">{e.role}</h3>
              <p className="font-mono text-base text-cyan mb-3">{e.company}</p>
              <ul className="space-y-2 max-w-[640px]">
                {e.bullets.map((b, bi) => (
                  <li key={bi} className="text-muted2 text-base leading-[1.7] flex gap-2.5">
                    <span className="text-amber shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
