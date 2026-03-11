import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Matheus Teixeira Francelino — Portfólio",
  description: "Portfólio de Matheus Teixeira Francelino (Full Stack Java / Front-end).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="grain font-sans">
        <Navbar />
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
