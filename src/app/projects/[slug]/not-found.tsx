import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5">
      <div className="text-center max-w-[420px]">
        <div className="bp-eyebrow justify-center mb-4">error_404</div>
        <div className="font-mono text-sm text-muted mb-2">
          <span className="text-rose">✗</span> project_not_found
        </div>
        <h1 className="font-display font-semibold text-2xl mb-3">Project not found</h1>
        <p className="text-muted2 text-sm mb-6 leading-relaxed">
          This project does not exist or has been removed.
        </p>
        <Link href="/#projects" className="bp-btn-primary">
          back_to_projects
        </Link>
      </div>
    </div>
  );
}
