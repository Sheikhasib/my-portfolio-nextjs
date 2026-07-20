"use client";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 border-t border-linesoft bg-bgalt">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="projects" title="Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
