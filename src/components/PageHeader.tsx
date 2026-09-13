import { SectionLabel } from "./SectionLabel";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  label,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper-deep/45">
      <div
        aria-hidden="true"
        className="blueprint-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-11 pt-8 lg:px-8 lg:pb-14 lg:pt-12">
        {breadcrumbs ? (
          <div className="mb-8 lg:mb-10">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}

        <div className="grid gap-7 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel no="—" tone="dark">
              {label}
            </SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              {title}
            </h1>
          </div>

          {intro || children ? (
            <div className="lg:col-span-5 lg:pt-10">
              <span
                aria-hidden="true"
                className="mb-5 hidden h-px w-14 bg-brass lg:block"
              />
              {intro ? (
                <p className="max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
                  {intro}
                </p>
              ) : null}
              {children ? <div className="mt-7">{children}</div> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
