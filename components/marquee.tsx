"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Marquee({ text = "LFG!", rows = 4 }: { text?: string; rows?: number }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const lines = Array.from(el.querySelectorAll("[data-line]"));
    const ctx = gsap.context(() => {
      lines.forEach((line, i) => {
        gsap.to(line, {
          xPercent: i % 2 === 0 ? -30 : 30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const repeated = Array.from({ length: 18 }).map((_, i) => (
    <span key={i} className="mx-4">{text}</span>
  ));

  return (
    <div ref={root} className="border-y border-white/10 bg-white/5 py-8 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4">
          {Array.from({ length: rows }).map((_, r) => (
            <div
              key={r}
              data-line
              className="whitespace-nowrap font-mono text-2xl md:text-4xl tracking-widest text-white/80 select-none"
            >
              {repeated}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
