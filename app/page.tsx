"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { Skills } from "@/components/skills";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Marquee } from "@/components/marquee";
import { Contact } from "@/components/contact";
import LightPillar from "@/components/LightPillar";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const q = gsap.utils.selector(el);
    const items = q("[data-hero]");
    gsap.set(items, { opacity: 0, y: 22 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
    });
  }, []);

  return (
    <main id="top">
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <LightPillar />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-64 right-0 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-20">
          <div ref={heroRef} className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p data-hero className="font-mono text-xs tracking-widest text-white/55 uppercase">
                Disponível para novos projetos °
              </p>
              <h1 data-hero className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.05]">
                Matheus Teixeira Francelino
              </h1>
              
              <p data-hero className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed">
                Eu construo produtos e interfaces que <span className="text-white">funcionam</span>. Full Stack Java,
                front-end moderno, e um pouco de automação/IA quando faz sentido. Sem enfeite inútil.
              </p>

              <div data-hero className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#projetos"
                  className="no-underline inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-mono text-sm shadow-brutal hover:opacity-90 transition"
                >
                  Scroll for work <ArrowDown className="h-4 w-4" />
                </Link>
                <Link
                  href="https://wa.me/5511998313015"
                  className="no-underline inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-sm hover:bg-white/5 hover:border-white/30 transition"
                >
                  Let's talk <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/matheus-teixeira-francellino-799796242/"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  LinkedIn, if you must <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 shadow-brutal p-5 md:p-6">
                <p data-hero className="font-mono text-xs text-white/55">Resumo</p>
                <ul data-hero className="mt-4 grid gap-3 text-white/75">
                  <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-mono text-xs text-white/55">Foco</span>
                    <div className="mt-1">Back-end Java + Front-end React/Next</div>
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-mono text-xs text-white/55">Stack</span>
                    <div className="mt-1">Spring Boot, REST, Postgres, Mongo, Docker</div>
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-mono text-xs text-white/55">Objetivo</span>
                    <div className="mt-1">Entregar UX limpa + sistemas bem amarrados</div>
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-xs text-white/45 font-mono">
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <Section
        eyebrow="Sobre"
        title="Tudo que eu construo precisa fazer sentido."
        subtitle="Nada de caos disfarçado de criatividade. Interface é sistema, e sistema tem lógica."
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 shadow-brutal p-5 md:p-6">
          <p className="text-white/75 leading-relaxed">
            Eu gosto de projetos onde o resultado dá pra sentir: performance, clareza, código organizado e um produto que
            não te faz brigar com a tela. Se for pra animar, anima com propósito. Se for pra integrar APIs, integra direito.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="font-mono text-xs text-white/55">Entrega</p>
              <p className="mt-1 text-white/80">Projeto com começo, meio e fim</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="font-mono text-xs text-white/55">Qualidade</p>
              <p className="mt-1 text-white/80">Testável, escalável, legível</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="font-mono text-xs text-white/55">UX</p>
              <p className="mt-1 text-white/80">Simples, rápida, sem fricção</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projetos"
        eyebrow="Trabalho que vale a pena rolar"
        title="Projetos"
        subtitle="Aqui você encontra alguns dos projetos que desenvolvi — experiências que colocam em prática minhas habilidades com código, design e resolução de problemas. Cada projeto representa um passo na minha evolução como desenvolvedor e meu compromisso em criar soluções funcionais e bem estruturadas."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        eyebrow="Stack"
        title="Habilidades"
        subtitle="Essas são as tecnologias que utilizo no meu dia a dia para construir aplicações modernas, eficientes e bem estruturadas. Estou sempre aprendendo e evoluindo, buscando aprimorar minhas habilidades e acompanhar as melhores práticas do mercado."
      >
        <Skills />
        <p className="mt-6 text-white/70">
          Atualmente estou desenvolvendo projetos pessoais <span className="text-white">Full Stack Java</span> para consolidar meus conhecimentos.
         
        </p>
      </Section>

      <Marquee text="FULL STACK" rows={4} />

      {/* Contact */}
      <Section id="contato" eyebrow="Contato" title="Fale comigo!" subtitle="Links rápidos e um jeitinho divertido pra liberar o CTA 😉">
        <Contact />
        <footer className="mt-10 text-center text-xs text-white/45 font-mono">
          Todos os direitos reservados © 2026 · Privacy policy · Cookies & shït
        </footer>
      </Section>
    </main>
  );
}
