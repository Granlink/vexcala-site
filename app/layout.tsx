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
  title: "Vexcala | Departamento de Adquisición Digital High Ticket",
  description: "Ayudamos a dueños de negocio a escalar su facturación mediante sistemas de adquisición de clientes calificados.",
  alternates: { canonical: "https://vexcala.com" }
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
