import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  const initials = project.name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="bp-card overflow-hidden flex flex-col hover:border-cyandim hover:-translate-y-1 transition-all">
      <div className="h-[140px] relative bg-gradient-to-br from-card to-bg border-b border-line flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover object-top"
          />
        ) : (
          <>
            <div className="bp-grid-bg opacity-50" />
            <span className="font-display font-bold text-[34px] text-line relative">{initials}</span>
          </>
        )}
        <span className={`absolute top-2.5 right-2.5 z-10 ${project.status === "live" ? "bp-status-live" : "bp-status-progress"}`}>
          {project.status === "live" ? "live" : "in progress"}
        </span>
      </div>
      <div className="p-[18px] flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg mb-1">{project.name}</h3>
        <p className="text-muted text-sm mb-3.5 flex-1">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t} className="bp-tag text-xs">{t}</span>
          ))}
          {project.stack.length > 3 && <span className="bp-tag text-xs">+{project.stack.length - 3}</span>}
        </div>
        <Link href={`/projects/${project.id}`} className="bp-btn-outline justify-center w-full">
          view_details <ChevronRight size={13} />
        </Link>
      </div>
    </div>
  );
}
