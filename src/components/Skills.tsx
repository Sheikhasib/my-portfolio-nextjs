import { Code2, Layers, Server, Database, Cpu, Cloud, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/data/skills";

const ICONS: Record<string, React.ElementType> = {
  "Languages": Code2,
  "Frontend": Layers,
  "Backend": Server,
  "Database & ORM": Database,
  "AI / ML": Cpu,
  "DevOps & Cloud": Cloud,
  "Tools": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 border-t border-linesoft bg-bgalt">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="skills" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS.map((s) => {
            const Icon = ICONS[s.category] ?? Code2;
            return (
              <div key={s.category} className="bp-card p-5">
                <div className="flex items-center gap-2 mb-3.5">
                  <Icon size={16} className="text-cyan" />
                  <span className="font-mono text-sm text-cyan">{s.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="bp-tag">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
