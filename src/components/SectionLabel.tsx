export function SectionLabel({
  no,
  children,
  tone = "dark",
}: {
  no: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const line = tone === "dark" ? "bg-ink/20" : "bg-paper/25";
  const text = tone === "dark" ? "text-muted" : "text-paper/55";
  const numberColor = tone === "dark" ? "text-brass-deep" : "text-brass";

  return (
    <div className="flex items-center gap-4">
      <span className={`eyebrow ${numberColor}`}>{no}</span>
      <span className={`h-px w-10 ${line}`} aria-hidden="true" />
      <span className={`eyebrow ${text}`}>{children}</span>
    </div>
  );
}
