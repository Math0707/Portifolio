"use client";


import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
// import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LightPillar from "@/components/LightPillar";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// export const metadata: Metadata = {
//   title: "Matheus Teixeira Francelino — Portfólio",
//   description: "Portfólio de Matheus Teixeira Francelino (Full Stack Java / Front-end).",
// };
// {cn("font-sans", geist.variable
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="">
      <body className="grain font-sans">
        {/* <LightPillar /> */}
        <Navbar />
        
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
