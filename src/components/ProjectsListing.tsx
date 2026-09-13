"use client";

import { useState } from "react";
import { SubpageHero, type SubpageHeroMedia } from "./subpages/SubpageHero";
import { FilterTabs } from "./subpages/FilterTabs";
import {
  ProjectsGrid,
  projectFilterOptions,
  projectMatches,
  type ProjectCardData,
  type ProjectFilter,
} from "./ProjectsGrid";

/**
 * Filtre durumu hero ile listeyi birlikte yonettigi icin ikisi tek
 * istemci bileseninde birlesir.
 */
export function ProjectsListing({
  projects,
  title,
  intro,
  breadcrumbs,
  media,
}: {
  projects: ProjectCardData[];
  title: React.ReactNode;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
  media?: SubpageHeroMedia;
}) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const options = projectFilterOptions(projects);
  const visible = projects.filter((project) => projectMatches(project, filter));

  return (
    <>
      <SubpageHero
        variant="listing"
        label="Projeler"
        note={`${String(projects.length).padStart(2, "0")} kayıt`}
        title={title}
        intro={intro}
        breadcrumbs={breadcrumbs}
        media={media}
        filters={
          <FilterTabs
            groupLabel="Projeleri konuma göre filtrele"
            options={options}
            value={filter}
            onChange={setFilter}
          />
        }
      />

      <section className="page-shell pt-10 pb-[var(--section-y)] lg:pt-14">
        <h2 className="sr-only">Proje listesi</h2>
        <ProjectsGrid projects={projects} filter={filter} />
        <p role="status" className="sr-only">
          {visible.length} proje gösteriliyor.
        </p>
      </section>
    </>
  );
}
