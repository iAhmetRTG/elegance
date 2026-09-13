import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-5 py-28 lg:py-40">
      <span className="eyebrow text-brass">404</span>
      <h1 className="mt-6 font-display text-5xl leading-tight">
        Bu sayfa inşa halinde.
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-muted">
        Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfadan
        devam edebilir veya doğrudan bize ulaşabilirsiniz.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Ana sayfaya dön</Button>
        <Button href="/iletisim" variant="outline">
          İletişim
        </Button>
      </div>
    </section>
  );
}
