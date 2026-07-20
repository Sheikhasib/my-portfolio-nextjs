"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5">
      <div className="text-center max-w-[420px]">
        <div className="bp-eyebrow justify-center mb-4">error</div>
        <div className="font-mono text-sm text-muted mb-2">
          <span className="text-rose">✗</span> unhandled_exception
        </div>
        <h1 className="font-display font-semibold text-2xl mb-3">Something went wrong</h1>
        <p className="text-muted2 text-sm mb-6 leading-relaxed">
          {error.message || "An unexpected error occurred."}
        </p>
        <button onClick={reset} className="bp-btn-primary">
          try_again
        </button>
      </div>
    </div>
  );
}
