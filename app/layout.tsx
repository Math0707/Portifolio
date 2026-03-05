import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
      </body>
    </html>
  );
}
