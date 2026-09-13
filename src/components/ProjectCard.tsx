import Link from "next/link";
import Image from "next/image";
import { MEDIA_LABELS, type Project } from "@/lib/projects";
import { Icon } from "./Icon";
import { ProjectCoverArt } from "./ProjectCoverArt";

/** Kart; proje adı, konum, varsa alan, sözleşme/iskan yılları ve süreyi taşır. */
export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "name"
  | "buildingName"
  | "location"
  | "city"
  | "contractYear"
  | "occupancyYear"
  | "duration"
  | "area"
  | "cover"
  | "coverAlt"
  | "coverKind"
>;

export function toProjectCardData(project: Project): ProjectCardData {
  return project;
}

export function ProjectCard({ project }: { project: ProjectCardData }) {
  const kindLabel =
    project.coverKind && project.coverKind !== "photo"
      ? MEDIA_LABELS[project.coverKind]
      : null;

  return (
    <Link href={`/projeler/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep/60">
        {project.cover ? (
          <>
            <Image
              src={project.cover}
              alt={project.coverAlt ?? `${project.name} görseli`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
            />
            {kindLabel ? (
              <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper">
                {kindLabel}
              </span>
            ) : null}
          </>
        ) : (
          <ProjectCoverArt
            project={project}
            className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl leading-snug transition-colors duration-300 group-hover:text-brass-deep lg:text-[1.6rem]">
            {project.name}
          </h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-muted">
            <span>
              {project.location}, {project.city}
            </span>
            {project.area ? (
              <>
                <span aria-hidden="true" className="text-brass/70">
                  ·
                </span>
                <span>{project.area}</span>
              </>
            ) : null}
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted">
            {`Sözleşme ${project.contractYear} · İskân ${project.occupancyYear} · ${project.duration}`}
          </p>
        </div>
        <Icon
          name="arrowUpRight"
          className="mt-1 h-4 w-4 shrink-0 text-ink/30 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep"
        />
      </div>
    </Link>
  );
}
