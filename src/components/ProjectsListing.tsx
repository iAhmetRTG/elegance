"use client";

import { useState } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { FilterTabs } from "./subpages/FilterTabs";
import {
  ProjectsGrid,
  projectFilterOptions,
  projectMatches,
  type ProjectCardData,
  type ProjectFilter,
} from "./ProjectsGrid";

/**
 * Baslik yerine gecen arsiv seridigi: tek guclu baslik, altinda pirinc cizgi
 * ve filtreler. Filtre durumu listeyi de yonettigi icin ikisi tek istemci
 * bileseninde birlesir.
 */
export function ProjectsListing({
  projects,
  breadcrumbs,
}: {
  projects: ProjectCardData[];
  breadcrumbs?: { label: string; href?: string }[];
}) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const options = projectFilterOptions(projects);
  const visible = projects.filter((project) => projectMatches(project, filter));
  const years = projects
    .flatMap((project) => [project.contractYear, project.occupancyYear])
    .filter((year): year is string => Boolean(year));
  const archiveRange = years.length
    ? `${Math.min(...years.map(Number))} — ${Math.max(...years.map(Number))}`
    : null;

  return (
    <>
      <section
        aria-labelledby="projects-title"
        className="relative overflow-hidden border-b border-ink/10 bg-ivory"
      >
        <div
          aria-hidden="true"
          className="drafting absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,black_0%,transparent_88%)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-3 hidden select-none font-display italic text-[9.5rem] leading-none text-ink/[0.055] lg:block"
        >
          {String(projects.length).padStart(2, "0")}
        </span>

        <div className="page-shell relative pb-9 pt-8 lg:pb-11 lg:pt-11">
          {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:items-end lg:gap-14">
            <div>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                <span aria-hidden="true" className="h-px w-9 shrink-0 bg-brass" />
                <span className="text-brass-deep">Proje arşivi</span>
                <span aria-hidden="true" className="text-brass">
                  ·
                </span>
                <span>{String(projects.length).padStart(2, "0")} kayıt</span>
              </p>

              <h1
                id="projects-title"
                className="foil-ink mt-5 font-display text-[2.9rem] leading-[0.95] tracking-tight sm:text-[3.9rem] lg:text-[clamp(3.5rem,5.8vw,5.75rem)]"
              >
                Projelerimiz
              </h1>
            </div>

            <p className="max-w-[46ch] text-[15px] leading-relaxed text-muted lg:pb-2">
              İstanbul, İzmir ve Kocaeli&apos;deki tamamlanmış ve devam eden
              proje kayıtları. Künyeler şirket arşivinden derlenmiştir.
            </p>
          </div>

          <div aria-hidden="true" className="rule-brass mt-8 lg:mt-10" />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
            <FilterTabs
              groupLabel="Projeleri konuma göre filtrele"
              options={options}
              value={filter}
              onChange={setFilter}
            />
            {archiveRange ? (
              <p className="tag text-muted">{`Arşiv · ${archiveRange}`}</p>
            ) : null}
          </div>
        </div>
      </section>

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
