import { processSteps } from "@/lib/site";
import { SectionLabel } from "@/components/SectionLabel";

export function ProcessSchedule({ no = "08" }: { no?: string }) {
  return (
    <section
      data-tone="dark"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div
        className="blueprint-dark absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionLabel no={no} tone="light">
          Çalışma süreci
        </SectionLabel>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-xl font-display text-4xl leading-tight lg:text-5xl">
            İlk aramadan anahtar teslimine
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-paper/70">
            Her projede aynı disiplin: ölçülebilir plan, şeffaf bütçe ve tek
            muhatap.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden border border-paper/12 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.no} className="bg-ink p-7 lg:p-8">
              <span className="font-display text-4xl text-brass">
                {step.no}
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-paper/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
