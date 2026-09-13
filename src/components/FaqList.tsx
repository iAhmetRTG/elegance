import { faqs } from "@/lib/faqs";
import { Icon } from "./Icon";

export function FaqList({
  items = faqs,
  tone = "dark",
}: {
  items?: { question: string; answer: string }[];
  tone?: "dark" | "light";
}) {
  const divide = tone === "dark" ? "divide-ink/10" : "divide-paper/15";
  const question = tone === "dark" ? "text-ink" : "text-paper";
  const answer = tone === "dark" ? "text-muted" : "text-paper/65";
  const number = tone === "dark" ? "text-brass-deep" : "text-brass-soft";
  const marker =
    tone === "dark"
      ? "border-ink/20 group-hover:border-brass group-hover:bg-brass group-hover:text-ink group-open:border-brass group-open:bg-brass group-open:text-ink"
      : "border-paper/25 text-paper/70 group-hover:border-brass group-hover:bg-brass group-hover:text-ink group-open:border-brass group-open:bg-brass group-open:text-ink";

  return (
    <div className={`divide-y ${divide}`}>
      {items.map((item, index) => (
        <details key={item.question} className="group relative py-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-brass transition-[width] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full group-open:w-full"
          />
          <summary
            className={`flex cursor-pointer items-center justify-between gap-6 ${question}`}
          >
            <span className="flex items-baseline gap-5">
              <span className={`eyebrow shrink-0 ${number}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl leading-snug sm:text-2xl">
                {item.question}
              </span>
            </span>
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${marker}`}
            >
              <Icon
                name="plus"
                className="h-4 w-4 transition-transform duration-300 group-open:rotate-45"
              />
            </span>
          </summary>
          <p
            className={`mt-4 max-w-3xl text-sm leading-relaxed sm:text-base ${answer}`}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
