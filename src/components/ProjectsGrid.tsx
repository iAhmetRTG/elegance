import { ProjectCard, type ProjectCardData } from "./ProjectCard";
import type { ProjectLocation } from "@/lib/projects";
import { Reveal } from "./Reveal";

export type { ProjectCardData };

/* Filtreler geçmiş projelerin gerçek konumlarıdır; kayıtlarda yayınlanan
   başka bir kırılım (durum, tip) bulunmaz. */
export type ProjectFilter = "all" | ProjectLocation;

const FILTERS: { key: ProjectFilter; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "Etiler", label: "Etiler" },
  { key: "Karaburun", label: "Karaburun" },
  { key: "Hadımköy", label: "Hadımköy" },
  { key: "Pelitli", label: "Pelitli" },
];

export function projectMatches(
  project: ProjectCardData,
  filter: ProjectFilter,
) {
  if (filter === "all") return true;
  return project.location === filter;
}

export function projectFilterOptions(
  projects: ProjectCardData[],
): { key: ProjectFilter; label: string; count: number }[] {
  return FILTERS.map((option) => ({
    ...option,
    count: projects.filter((project) => projectMatches(project, option.key))
      .length,
  }));
}

export function ProjectsGrid({
  projects,
  filter = "all",
}: {
  projects: ProjectCardData[];
  filter?: ProjectFilter;
}) {
  return (
    <div className="grid gap-x-6 gap-y-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
      {projects.map((project, index) => (
        <div key={project.slug} hidden={!projectMatches(project, filter)}>
          <Reveal delay={(index % 3) * 70}>
            <ProjectCard project={project} />
          </Reveal>
        </div>
      ))}
    </div>
  );
}
