import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vexcala | Departamento de Adquisición Digital",
  description: "Infraestructura de crecimiento comercial. Diseñamos sistemas de ventas predecibles para negocios que buscan escalabilidad y control.",
  openGraph: {
    title: "Vexcala - Tu Departamento de Adquisición",
    description: "Escala tu facturación con sistemas de ingeniería de ventas.",
    url: "https://vexcala.com",
    siteName: "Vexcala",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}