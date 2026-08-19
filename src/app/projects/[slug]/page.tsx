import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ToastProvider } from "@/components/Toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectLinkButton from "./ProjectLinkButton";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  return { title: project ? project.name : "Project not found" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <ToastProvider>
      <Navbar />
      <div className="relative min-h-[70vh]">
        <div className="bp-grid-bg" />
        <div className="absolute inset-0 bg-gradient-cyan pointer-events-none" />
        <div className="max-w-[860px] mx-auto px-5 pt-12 pb-20 relative">
          <Link href="/#projects" className="bp-btn-outline mb-8 inline-flex animate-fade-up">
            <ArrowLeft size={14} /> back_to_projects
          </Link>

          <div className="bp-eyebrow mb-3 animate-fade-up stagger-1">table: projects / row: {project.id}</div>
          <div className="flex items-center gap-3 mb-2 flex-wrap animate-fade-up stagger-2">
            <h1 className="font-display font-semibold text-[clamp(30px,4.5vw,42px)]">{project.name}</h1>
            <span className={project.status === "live" ? "bp-status-live" : "bp-status-progress"}>
              {project.status === "live" ? "live" : "in progress"}
            </span>
          </div>
          <p className="font-mono text-cyan text-sm mb-7 animate-fade-up stagger-3">{project.tagline}</p>

          {project.image && (
            <div className="bp-card overflow-hidden mb-8 relative aspect-[16/9] animate-fade-up stagger-3">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 860px) 100vw, 820px"
                className="object-cover object-top"
                priority
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2.5 mb-8 animate-fade-up stagger-4">
            <ProjectLinkButton href={project.live} label="live_demo" icon="external" variant="primary" comingSoonMessage="Live demo link coming soon." />
            <ProjectLinkButton href={project.github} label="client_repo" icon="github" variant="outline" comingSoonMessage="Repository link coming soon." />
          </div>

          <div className="space-y-6 animate-fade-up stagger-5">
            <div className="bp-card p-6">
              <div className="bp-eyebrow mb-3">tech_stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => <span key={t} className="bp-tag">{t}</span>)}
              </div>
            </div>

            <div>
              <div className="bp-eyebrow mb-2.5">overview</div>
              <p className="text-muted2 text-lg leading-[1.8]">{project.description}</p>
            </div>

            <div>
              <div className="bp-eyebrow mb-2.5">key_features</div>
              <ul className="space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-muted2 text-lg leading-[1.8]">
                    <span className="mt-[11px] w-1.5 h-1.5 bg-amber rounded-sm shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bp-eyebrow mb-2.5">challenges</div>
              <p className="text-muted2 text-lg leading-[1.8]">{project.challenges}</p>
            </div>

            <div>
              <div className="bp-eyebrow mb-2.5">future_improvements</div>
              <p className="text-muted2 text-lg leading-[1.8]">{project.improvements}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ToastProvider>
  );
}
