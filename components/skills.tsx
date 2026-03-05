"use client";

import { skillGroups } from "@/lib/data";
import { useGsapReveal } from "@/lib/use-gsap-reveal";
import { SkillBadge } from "./badge";

export function Skills() {
  const ref = useGsapReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="grid gap-10">
      {skillGroups.map((g) => (
        <div key={g.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-brutal">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 data-reveal className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
              {g.title}
            </h3>
            <span data-reveal className="font-mono text-xs text-white/45">
              {g.items.length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <div data-reveal key={s.name}>
                <SkillBadge name={s.name} icon={s.icon} className={s.accent} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
