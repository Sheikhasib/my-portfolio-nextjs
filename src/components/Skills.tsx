"use client";
import { Code2, Layers, Server, Database, Cpu, Cloud, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/data/skills";
import { useInView } from "@/hooks/useInView";

const ICONS: Record<string, React.ElementType> = {
  "Languages": Code2,
  "Frontend": Layers,
  "Backend": Server,
  "Database & ORM": Database,
  "AI / ML": Cpu,
  "DevOps & Cloud": Cloud,
  "Tools": Wrench,
};

function SkillCard({ category, items, index }: { category: string; items: string[]; index: number }) {
  const { ref, inView } = useInView(0.05);
  const Icon = ICONS[category] ?? Code2;

  return (
    <div
      ref={ref}
      className={`bp-card p-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${0.08 * index}s` }}
    >
      <div className="flex items-center gap-2 mb-3.5">
        <Icon size={16} className="text-cyan" />
        <span className="font-mono text-sm text-cyan">{category}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="bp-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 border-t border-linesoft bg-bgalt">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="skills" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.category} category={s.category} items={s.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
