import type { Project } from "@/lib/projects";

/* Görseli eşleştirilmemiş proje kayıtları için tipografik kapak.
   Uydurma yapı çizimi üretmez; yalnızca kayıttaki gerçek künyeyi taşır. */
export function ProjectCoverArt({
  project,
  className = "",
}: {
  project: Pick<
    Project,
    | "name"
    | "buildingName"
    | "location"
    | "city"
    | "contractYear"
    | "occupancyYear"
    | "duration"
    | "status"
  >;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-between bg-paper-deep/70 p-6 ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="block h-px w-12 bg-brass"
      />
      <div>
        <p className="eyebrow text-muted">{project.buildingName}</p>
        <p className="mt-3 font-display text-2xl leading-tight text-ink/80 lg:text-3xl">
          {project.name}
        </p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted">
          {project.location} · {project.city}
        </p>
        <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-brass-deep">
          {project.status === "ongoing"
            ? `${project.contractYear} · Devam ediyor`
            : [project.contractYear, project.occupancyYear, project.duration]
                .filter(Boolean)
                .join(" · ")}
        </p>
      </div>
      <p className="text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
        Bu kayıt için tekil görsel eşleştirilmedi.
      </p>
    </div>
  );
}
