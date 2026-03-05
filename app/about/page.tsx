import Link from "next/link";
import { Section } from "@/components/section";
import { Skills } from "@/components/skills";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs tracking-widest text-white/55 uppercase">About</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Sobre mim</h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          Sou o Matheus. Curto construir sistemas claros e interfaces rápidas. Back-end com Java / Spring e front-end com React / Next.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#projetos"
            className="no-underline inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-mono text-sm shadow-brutal hover:opacity-90 transition"
          >
            Ver projetos →
          </Link>
          <Link
            href="https://wa.me/5511998313015"
            target="_blank"
            className="no-underline inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-sm hover:bg-white/5 hover:border-white/30 transition"
          >
            Contato →
          </Link>
        </div>
      </div>

      <Section
        eyebrow="Stack"
        title="Habilidades"
        subtitle="Essas são as tecnologias que utilizo no meu dia a dia para construir aplicações modernas, eficientes e bem estruturadas. Estou sempre aprendendo e evoluindo, buscando aprimorar minhas habilidades e acompanhar as melhores práticas do mercado."
      >
        <Skills />
      </Section>
    </main>
  );
}
