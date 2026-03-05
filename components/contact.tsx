"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [magic, setMagic] = useState("");
  const allowed = magic.trim().toLowerCase() === "não sou recruiter" || magic.trim().toLowerCase() === "nao sou recruiter";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 shadow-brutal p-5 md:p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Tem um projeto em mente?!</h3>
          <p className="mt-3 text-white/70 leading-relaxed">
            Se você tem um projeto, uma vaga ou uma oportunidade de colaboração, será um prazer conversar.
          </p>

          <div className="mt-5 grid gap-2">
            <Link
              href="mailto:mteixeirafrancelino2@gmail.com"
              className="no-underline inline-flex items-center justify-between rounded-2xl border border-white/12 bg-black/20 px-4 py-3 hover:bg-white/5 hover:border-white/25 transition"
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm">
                <Mail className="h-4 w-4" /> Gmail
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/matheus-teixeira-francellino-799796242/"
              target="_blank"
              rel="noreferrer"
              className="no-underline inline-flex items-center justify-between rounded-2xl border border-white/12 bg-black/20 px-4 py-3 hover:bg-white/5 hover:border-white/25 transition"
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://github.com/Math0707"
              target="_blank"
              rel="noreferrer"
              className="no-underline inline-flex items-center justify-between rounded-2xl border border-white/12 bg-black/20 px-4 py-3 hover:bg-white/5 hover:border-white/25 transition"
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm">
                <Github className="h-4 w-4" /> GitHub
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/Matheus-Teixeira-Francelino-CV.pdf"
              target="_blank"
              className="no-underline inline-flex items-center justify-between rounded-2xl border border-white/12 bg-black/20 px-4 py-3 hover:bg-white/5 hover:border-white/25 transition"
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm">
                <FileText className="h-4 w-4" /> Currículo
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
          <p className="font-mono text-xs text-white/55">
            Prove que você não é recruiter (brincadeira 😄) — digita o “magic word”.
          </p>

          <label className="mt-3 block">
            <span className="sr-only">Magic word</span>
            <input
              value={magic}
              onChange={(e) => setMagic(e.target.value)}
              placeholder="Não sou recruiter"
              className="mt-2 w-full rounded-2xl border border-white/12 bg-black/40 px-4 py-3 font-mono text-sm outline-none focus:border-white/30"
            />
          </label>

          <div className="mt-4">
            <p className="text-sm text-white/70">
              {allowed ? "Ok. Acesso liberado 😎" : "Dica: “Não sou recruiter”"}
            </p>
          </div>

          <div className="mt-4">
            <Link
              href={allowed ? "mailto:seuemail@gmail.com?subject=Contato%20Portf%C3%B3lio" : "#"}
              className={`no-underline inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 font-mono text-sm transition ${
                allowed
                  ? "bg-white text-black hover:opacity-90"
                  : "bg-white/10 text-white/45 cursor-not-allowed"
              }`}
              aria-disabled={!allowed}
              tabIndex={allowed ? 0 : -1}
            >
              Vamos falar <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/45">
            
          </p>
        </div>
      </div>
    </div>
  );
}
