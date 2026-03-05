import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import MagicCard from "@/components/MagicCard";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <MagicCard
      enableTilt={false}
      enableMagnetism={false}
      clickEffect
      glowColor="132, 0, 255"
    >
      <div className="group rounded-3xl border border-white/10 bg-white/5 shadow-brutal overflow-hidden hover:border-white/25 transition">
        <div className="relative h-40 md:h-52">
          <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {p.title}
              </h3>
              <p className="mt-1 text-white/70">
                {p.subtitle}
              </p>
            </div>
            <span className="font-mono text-xs text-white/55">
              {p.year}
            </span>
          </div>

          <p className="mt-4 text-white/75 leading-relaxed">
            {p.blurb}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-xs text-white/75"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {(p.links ?? []).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs no-underline hover:bg-white/5 hover:border-white/30 transition"
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MagicCard>
  );
}