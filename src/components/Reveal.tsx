export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: "up" | "fade" | "blur" | "mask";
  className?: string;
}) {
  const variantClass = variant === "up" ? "" : `reveal--${variant}`;

  return (
    <div
      className={`reveal ${variantClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
