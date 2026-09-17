import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { toProjectCardData } from "@/components/ProjectCard";
import { ProjectsListing } from "@/components/ProjectsListing";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Projeler | İstanbul, İzmir ve Kocaeli Referansları",
  description:
    "Elegance İnşaat'ın İstanbul, İzmir ve Kocaeli'deki tamamlanmış ve devam eden proje kayıtları; konut, endüstriyel yapı ve lojistik tesis referansları.",
  alternates: { canonical: "/projeler" },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.legalName} geçmiş projeleri`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.name,
    url: `${site.url}/projeler/${project.slug}`,
  })),
};

export default function ProjectsPage() {
  const cards = projects.map(toProjectCardData);

  return (
    <>
      <JsonLd data={projectsJsonLd} />

      <ProjectsListing
        projects={cards}
        breadcrumbs={[{ label: "Projeler" }]}
      />

      <CtaBand
        label="Projeniz sırada"
        title="Bir sonraki proje sizin olsun."
        text="İster dönüşüm, ister yeni yapı; yapınızı yerinde inceleyip yol haritasını birlikte çıkaralım."
      />
    </>
  );
}
