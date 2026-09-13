"use client";

import { useEffect, useRef } from "react";

export function HeroAmbient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const host = layer?.closest("section");
    if (!layer || !host) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      host.style.setProperty("--hero-shift", "0");
      return;
    }

    let raf = 0;
    let targetX = 72;
    let targetY = 24;
    let currentX = 72;
    let currentY = 24;

    const render = () => {
      raf = 0;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      layer.style.setProperty("--mx", `${currentX.toFixed(2)}%`);
      layer.style.setProperty("--my", `${currentY.toFixed(2)}%`);
      if (
        Math.abs(targetX - currentX) > 0.2 ||
        Math.abs(targetY - currentY) > 0.2
      ) {
        raf = requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = layer.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;
      layer.classList.add("is-active");
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onPointerLeave = () => {
      layer.classList.remove("is-active");
    };

    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const rect = host.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / Math.max(1, rect.height)),
        );
        host.style.setProperty("--hero-shift", (progress * 56).toFixed(1));
      });
    };

    if (finePointer) {
      host.addEventListener("pointermove", onPointerMove);
      host.addEventListener("pointerleave", onPointerLeave);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-spotlight pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
