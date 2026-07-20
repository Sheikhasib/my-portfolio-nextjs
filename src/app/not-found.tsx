import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5">
      <div className="text-center max-w-[420px]">
        <div className="bp-eyebrow justify-center mb-4">error_404</div>
        <div className="font-mono text-sm text-muted mb-2">
          <span className="text-rose">✗</span> row_not_found_in_table_pages
        </div>
        <h1 className="font-display font-semibold text-2xl mb-3">Page not found</h1>
        <p className="text-muted2 text-sm mb-6 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="bp-btn-primary">
          back_to_home
        </Link>
      </div>
    </div>
  );
}
