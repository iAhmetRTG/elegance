"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MEDIA_LABELS, type ProjectMedia } from "@/lib/projects";
import { Icon } from "./Icon";

/* Galeri yalnızca gerçek proje varlıklarını gösterir. Her karenin türü
   (fotoğraf / mimari render / şantiye) görünür etiketle belirtilir. */
export function Gallery({ items }: { items: ProjectMedia[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = openIndex !== null;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables =
          dialog.querySelectorAll<HTMLElement>("button:not([disabled])");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === "ArrowRight") {
        setOpenIndex((index) =>
          index === null ? index : (index + 1) % items.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpenIndex((index) =>
          index === null ? index : (index - 1 + items.length) % items.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length]);

  if (items.length === 0) return null;

  const current = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${item.caption} görselini büyüt`}
            className={`group block border border-ink/15 bg-ivory p-2.5 text-left transition-colors duration-300 hover:border-brass/70 ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <span
              className={`relative block overflow-hidden ${
                index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper">
                {MEDIA_LABELS[item.kind]}
              </span>
            </span>
            <span className="mt-3 flex items-center justify-between px-1 pb-1">
              <span className="eyebrow text-muted">{item.caption}</span>
              <Icon name="plus" className="h-4 w-4 text-brass" />
            </span>
          </button>
        ))}
      </div>

      {current ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/[0.97] p-4 sm:p-8"
        >
          <div className="flex items-center justify-between gap-6">
            <span className="eyebrow text-paper/60">
              {MEDIA_LABELS[current.kind]} · {current.caption}
            </span>
            <button
              type="button"
              autoFocus
              onClick={() => setOpenIndex(null)}
              aria-label="Galeriyi kapat"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mt-4 flex flex-1 items-center justify-center">
            <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
              <span className="relative h-full max-h-[70vh] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />
              </span>
            </div>

            <button
              type="button"
              onClick={() =>
                setOpenIndex(
                  (index) =>
                    index === null
                      ? index
                      : (index - 1 + items.length) % items.length,
                )
              }
              aria-label="Önceki görsel"
              className="absolute left-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <Icon name="arrowRight" className="h-4 w-4 -scale-x-100" />
            </button>
            <button
              type="button"
              onClick={() =>
                setOpenIndex((index) =>
                  index === null ? index : (index + 1) % items.length,
                )
              }
              aria-label="Sonraki görsel"
              className="absolute right-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-center text-xs tracking-wide text-paper/45">
            {(openIndex ?? 0) + 1} / {items.length} · Ok tuşlarıyla gezinin, Esc
            ile kapatın
          </p>
        </div>
      ) : null}
    </>
  );
}
