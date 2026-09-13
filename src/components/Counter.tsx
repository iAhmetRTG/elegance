"use client";

import { useEffect, useRef, useState } from "react";

const easeOutExpo = (value: number) =>
  value === 1 ? 1 : 1 - Math.pow(2, -10 * value);

export function Counter({
  value,
  duration = 1500,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const parsed = value.match(/^(\d+)(.*)$/);
  const target = parsed ? Number(parsed[1]) : null;
  const suffix = parsed ? parsed[2] : "";
  const [display, setDisplay] = useState(target ?? 0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (target === null) return;
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(easeOutExpo(progress) * target));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      setDisplay(0);
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {target === null ? value : `${display}${suffix}`}
    </span>
  );
}
