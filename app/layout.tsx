import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexcala | Departamento de Adquisición Digital",
  description: "Ingeniería de ventas para negocios que facturan +$X. Generamos flujo constante de clientes calificados.",
  openGraph: {
    title: "Vexcala - Adquisición de Clientes High Ticket",
    description: "Convertimos tu inversión en activos de venta predecibles.",
    url: "https://vexcala.com",
    siteName: "Vexcala",
    images: [
      {
        url: "/og-image.jpg", // Luego diseñaremos esta imagen
        width: 1200,
        height: 630,
      },
    ],
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
    <html lang="en">
      <body
        className="antialiased bg-slate-950 text-white font-sans"
      >
        {children}
      </body>
    </html>
  );
}
