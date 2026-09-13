import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { JsonLd } from "@/components/JsonLd";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ConstructionSequence } from "@/components/scenes/ConstructionSequence";
import { StatsScale } from "@/components/home/StatsScale";
import { CompanyProfile } from "@/components/home/CompanyProfile";
import { ServicesSheets } from "@/components/home/ServicesSheets";
import { StandardsBrief } from "@/components/home/StandardsBrief";
import { ProjectsBoard } from "@/components/home/ProjectsBoard";
import { TransformationSteps } from "@/components/home/TransformationSteps";
import { InteriorSelection } from "@/components/home/InteriorSelection";
import { ProcessSchedule } from "@/components/home/ProcessSchedule";
import { DistrictAtlas } from "@/components/home/DistrictAtlas";
import { FaqSheet } from "@/components/home/FaqSheet";
import { CtaBand } from "@/components/CtaBand";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.legalName,
  url: site.url,
  inLanguage: "tr-TR",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteJsonLd, faqJsonLd]} />

      <HeroCarousel />

      <section className="border-b border-ink/10 bg-paper">
        <div className="ruler-x" aria-hidden="true" />
        <div className="marquee py-6">
          <div className="marquee-track items-center">
            {[...services, ...services].map((service, index) => (
              <span
                key={`${service.slug}-${index}`}
                className="flex items-center whitespace-nowrap"
              >
                <span className="eyebrow px-8 text-muted">{service.name}</span>
                <span
                  className="h-1.5 w-1.5 rotate-45 bg-brass"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      <ConstructionSequence no="01" />

      <StatsScale />

      <CompanyProfile no="02" />

      <ServicesSheets no="03" />

      <StandardsBrief no="04" />

      <ProjectsBoard no="05" />

      <TransformationSteps no="06" />

      <InteriorSelection no="07" />

      <ProcessSchedule no="08" />

      <DistrictAtlas no="09" />

      <FaqSheet no="10" />

      <CtaBand showMarks />
    </>
  );
}
