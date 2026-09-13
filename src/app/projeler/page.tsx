import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { toProjectCardData } from "@/components/ProjectCard";
import { ProjectsListing } from "@/components/ProjectsListing";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Geçmiş Projeler | Etiler ve Karaburun Referansları",
  description:
    "Elegance İnşaat'ın sunum dosyasında belgelenen geçmiş projeleri: Proje Çiçek, Mercan, Ametist, Kuvars, Topaz, Terrace House ve Hill Stone. Etiler (İstanbul) ve Karaburun (İzmir) konumlarıyla.",
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
        title={
          <>
            Arşivdeki{" "}
            <em className="italic text-brass-deep">gerçek</em> projeler
          </>
        }
        intro="Şirket sunum dosyasında yer alan yedi geçmiş proje kaydı. Künyedeki yapı adı, konum, alan, sözleşme ve iskân yılları ile süre bilgileri sunumdaki tablodan alınmıştır. Proje konumları geçmiş işlerin gerçek yerleridir; güncel hizmet bölgeleri Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya'dır."
        media={{
          src: "/media/elegance-projects/enhanced/proje-kuvars--hero-enhanced.webp",
          alt: "Proje Kuvars bloklarının tamamlanmış dış cephesi",
          caption: "Proje Kuvars · Etiler, İstanbul",
        }}
      />

      <CtaBand
        label="Projeniz sırada"
        title="Bir sonraki proje sizin olsun."
        text="İster dönüşüm, ister yeni yapı; yapınızı yerinde inceleyip yol haritasını birlikte çıkaralım."
      />
    </>
  );
}
