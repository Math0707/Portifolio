"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home-ish", href: "/#top" },
  { label: "Builds", href: "/builds" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const panel = document.querySelector("[data-menu-panel]");
    const items = document.querySelectorAll("[data-menu-item]");

    if (open) {
      const tl = gsap.timeline();
      tl.fromTo(
        panel,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      ).fromTo(
        items,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "power3.out" },
        "-=0.1"
      );
    } else {
      gsap.set(panel, { clearProps: "all" });
      gsap.set(items, { clearProps: "all" });
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/#top"
          className="flex items-center gap-2 no-underline group"
          aria-label="Ir para o topo"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 shadow-brutal">
            <span className="text-xs font-mono tracking-widest">MTF</span>
          </span>
          <span className="hidden sm:block font-mono text-xs text-white/70 group-hover:text-white transition">
            Matheus Teixeira Francelino
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="font-mono text-sm text-white/70 hover:text-white no-underline"
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5511998313015"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-sm no-underline hover:border-white/30 hover:bg-white/5 transition"
          >
            Vamos conversar <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-sm hover:border-white/30 hover:bg-white/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          data-menu-panel
          className={cn(
            "absolute left-3 right-3 top-3 rounded-3xl border border-white/15 bg-black shadow-brutal p-5 transition-all duration-200",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-white/60">Navegação</span>
            <button
              className="rounded-full border border-white/15 p-2 hover:bg-white/5"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((it) => (
              <Link
                data-menu-item
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="no-underline rounded-2xl border border-white/10 px-4 py-3 font-mono text-sm hover:bg-white/5 hover:border-white/25 transition"
              >
                {it.label}
              </Link>
            ))}
            <Link
              data-menu-item
              href="/#contato"
              onClick={() => setOpen(false)}
              className="no-underline rounded-2xl border border-white/15 px-4 py-3 font-mono text-sm bg-white/5 hover:bg-white/10 hover:border-white/30 transition inline-flex items-center justify-between"
            >
              Vamos conversar <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
