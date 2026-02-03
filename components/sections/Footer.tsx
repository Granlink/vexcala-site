import React from "react";
import { Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#050505] border-t border-gray-900/70 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF8C00] text-black font-black">
                V
              </span>
              <span className="text-white font-black tracking-tight text-xl uppercase">
                VEXCALA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Ingeniería de Infraestructura Comercial para Negocios de Alto Ticket.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6 text-gray-500">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="X"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Sistema
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#section-hero" className="hover:text-white transition-colors">
                  El Método VOS
                </a>
              </li>
              <li>
                <a href="#section-proof" className="hover:text-white transition-colors">
                  Casos de Estudio
                </a>
              </li>
              <li>
                <a href="#section-auditor" className="hover:text-white transition-colors">
                  Auditoría (Quiz)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Ayuda
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#section-faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Estatus de Sistema
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="inline-flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span>Vexcala VOS: Operational Status: Online</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-900/70 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-gray-500">
          <p>© {currentYear} Vexcala. Todos los derechos reservados. Construido para el 1%.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Acuerdo de Confidencialidad (NDA)
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-white/30 text-[10px] uppercase tracking-[0.3em]">
          The infrastructure of the next generation of scale.
        </p>
      </div>
    </footer>
  );
}
