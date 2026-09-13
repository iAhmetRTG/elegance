export function CornerTicks({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-2 text-brass/60 ${className}`}
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-current" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-current" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-current" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-current" />
    </span>
  );
}
