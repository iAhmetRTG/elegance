import { proofPoints } from "@/lib/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export function StatsScale() {
  return (
    <section className="cv-auto border-b border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-10 gap-y-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        {proofPoints.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 70}>
            <div className="border-t border-ink/15 pt-6">
              <span className="mb-6 block h-1 w-8 bg-brass" aria-hidden="true" />
              <p className="font-display text-5xl leading-none lg:text-6xl">
                <Counter value={stat.value} />
              </p>
              <p className="mt-4 text-[13px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
