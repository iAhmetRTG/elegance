import Link from "next/link";
import Image from "next/image";
import { getProject, type ProjectMedia } from "@/lib/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/* İç mekân seçkisi yalnızca gerçek proje fotoğraflarından oluşur.
   Her kare kendi projesinin adını taşır; başka projeye atanamaz. */
const selection: { slug: string; index: number; label: string }[] = [
  { slug: "proje-ametist", index: 4, label: "İç mekân" },
  { slug: "proje-kuvars", index: 2, label: "Salon ve mutfak" },
  { slug: "proje-mercan", index: 3, label: "İç mekân" },
  { slug: "proje-kuvars", index: 4, label: "Banyo" },
];

const items = selection.flatMap((entry) => {
  const project = getProject(entry.slug);
  const media: ProjectMedia | undefined = project?.media[entry.index];
  if (!project || !media) return [];
  return [
    {
      href: `/projeler/${project.slug}`,
      projectName: project.name,
      location: `${project.location}, ${project.city}`,
      label: entry.label,
      media,
    },
  ];
});

export function InteriorSelection({ no = "07" }: { no?: string }) {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel no={no}>İç mekân seçkisi</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight lg:text-5xl">
              Teslim edilen dairelerden
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Tamamlanmış projelerimizdeki iç mekânlardan seçkiler. Her kare,
            ait olduğu projenin adıyla birlikte gösterilir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => (
            <Reveal
              key={`${item.href}-${item.label}`}
              delay={(index % 4) * 80}
              className="h-full"
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col border border-ink/15 bg-ivory p-2.5 transition-colors duration-500 hover:border-brass/60"
              >
                <span className="relative block aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.media.src}
                    alt={item.media.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-2.5 top-2.5 bg-ink/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper">
                    Proje fotoğrafı
                  </span>
                </span>
                <span className="mt-auto flex items-start justify-between gap-3 px-1 pb-1 pt-3">
                  <span className="min-w-0">
                    <span className="block font-display text-lg leading-snug">
                      {item.projectName}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-muted">
                      {item.label} · {item.location}
                    </span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="mt-1 h-4 w-4 shrink-0 text-ink/30 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
