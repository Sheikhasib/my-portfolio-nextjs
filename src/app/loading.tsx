export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-bg flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-sm text-cyandim animate-pulse">loading</div>
        <div className="flex gap-1 mt-2 justify-center">
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    </div>
  );
}
