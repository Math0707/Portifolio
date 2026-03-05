import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function BuildsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-white/55 uppercase">Builds</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Coisas que eu construí</h1>
          <p className="mt-4 text-white/70 max-w-2xl">
           Uma seção criada especialmente para apresentar meus projetos de forma organizada e detalhada. Aqui você pode explorar cada aplicação, entender o problema proposto, as tecnologias utilizadas e as soluções implementadas.
          </p>
        </div>
        <Link
          href="/#contato"
          className="no-underline inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-sm hover:bg-white/5 hover:border-white/30 transition"
        >
          Vamos conversar →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </main>
  );
}
