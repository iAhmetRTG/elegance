"use client";

import { useState } from "react";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/Icon";

const phases = [
  { no: "01", title: "Riskli yapı tespiti", upTo: 24 },
  { no: "02", title: "Kontrollü yıkım", upTo: 48 },
  { no: "03", title: "Yeni karkas ve cephe", upTo: 76 },
  { no: "04", title: "İskân ve anahtar teslim", upTo: 100 },
];

const benefits = [
  "Güncel deprem yönetmeliğine uygun karkas",
  "Kira yardımı ve resmi süreç yönetimi",
  "Anahtar teslim, eksiksiz teslim",
];

export function TransformationSteps({ no = "06" }: { no?: string }) {
  const [position, setPosition] = useState(62);
  const activePhase = Math.max(
    0,
    phases.findIndex((phase) => position <= phase.upTo),
  );

  return (
    <section className="cv-auto border-b border-ink/10 bg-paper-deep/45">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel no={no}>Dönüşüm</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              Eski yapıdan{" "}
              <em className="italic text-brass-deep">yeni yaşama</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Eski yapıdan yeni yaşama giden adımlar. Karşılaştırma görseli
              temsilidir; sürükleyerek süreci takip edebilirsiniz.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-muted"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/hizmetler/kentsel-donusum"
              className="group mt-9 inline-flex items-center gap-3 border border-ink/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-ink"
            >
              Kentsel dönüşüm süreci
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <BeforeAfter position={position} onPositionChange={setPosition} />
          </div>
        </div>

        <div className="mt-14">
          <ol className="grid gap-px overflow-hidden border border-ink/12 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => {
              const isActive = index === activePhase;
              const isDone = index < activePhase;
              const start = index === 0 ? 0 : phases[index - 1].upTo;
              const target = Math.round((start + phase.upTo) / 2);

              return (
                <li key={phase.no} className="bg-paper">
                  <button
                    type="button"
                    onClick={() => setPosition(target)}
                    aria-pressed={isActive}
                    className={`relative flex h-full w-full flex-col gap-4 px-5 py-6 text-left ${
                      isActive ? "bg-ivory" : ""
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span
                        className={`text-[11px] font-semibold tracking-[0.18em] ${
                          isActive || isDone ? "text-brass-deep" : "text-muted"
                        }`}
                      >
                        {phase.no}
                      </span>
                    </span>
                    <span
                      className={`font-display text-lg leading-snug ${
                        isActive ? "text-ink" : "text-ink/70"
                      }`}
                    >
                      {phase.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
