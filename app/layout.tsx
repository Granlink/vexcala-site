import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vexcala.com'), // Tu dominio real
  title: {
    default: "VEXCALA | Sales Operating System",
    template: "%s | VEXCALA"
  },
  description: "Infraestructura de ventas y automatización comercial para generar citas calificadas B2B con un Sales Operating System predecible.",
  keywords: [
    "Infraestructura de ventas",
    "Infraestructura comercial",
    "Automatización comercial",
    "Citas calificadas B2B",
    "Sales Operating System",
    "Ventas predecibles",
  ],
  authors: [{ name: "VEXCALA Team" }],
  creator: "VEXCALA",
  openGraph: {
    type: "website",
    locale: "es_CO", // Ajustado a tu ubicación o es_ES general
    url: "https://vexcala.com",
    title: "VEXCALA | Sales Operating System",
    description: "Deja de improvisar. Construye una infraestructura comercial predecible.",
    siteName: "VEXCALA",
    images: [
      {
        url: "/og-image.png", // Debes tener esta imagen en /public
        width: 1200,
        height: 630,
        alt: "VEXCALA Sales Operating System Dashboard",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} bg-slate-950 text-slate-50 antialiased selection:bg-[#FF8C00] selection:text-black`}>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        {/* Aquí irá el Footer más adelante */}
      </body>
    </html>
  );
}
