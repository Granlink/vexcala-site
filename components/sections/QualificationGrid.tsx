"use client";

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function QualificationGrid() {
  const ideal = [
    {
      title: "Oferta Validada",
      desc: "Ya tienes tracción y un producto que el mercado desea."
    },
    {
      title: "Mentalidad de Inversión",
      desc: "Entiendes que la infraestructura técnica es un activo, no un gasto mensual."
    },
    {
      title: "Capacidad de Cierre",
      desc: "Tienes un equipo listo para procesar una demanda escalable."
    }
  ];

  const notQualified = [
    {
      title: "Fase de Idea",
      desc: "Proyectos sin historial de ventas o validación real."
    },
    {
      title: "Buscadores de \"Trucos\"",
      desc: "Quienes esperan magia sin estructura ni pauta."
    },
    {
      title: "Inacción Comercial",
      desc: "Negocios que no pueden atender leads en menos de 15 minutos."
    }
  ];

  return (
    <section id="section-qualification" className="pt-[160px] pb-[120px] bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FF8C00] uppercase tracking-widest text-sm font-semibold">
            CRITERIOS DE SELECCION PARA VEXCALA VOS
          </span>
          <h2 className="text-4xl font-semibold text-white mt-4">
            No instalamos motores de carrera en barcos que no saben navegar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white/5 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(255,140,0,0.12)] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_44px_rgba(255,140,0,0.2)]">
            <svg
              className="absolute top-6 right-6 h-10 w-10 text-green-500/40"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M14 20l4 4 8-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#FF8C00] font-bold text-sm tracking-widest">
              [ SOCIO IDEAL ]
            </div>
            <ul className="mt-6 space-y-5">
              {ideal.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF8C00] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-gray-400 text-sm mt-1">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-white/2 border border-white/10 rounded-3xl p-8 opacity-60">
            <svg
              className="absolute top-6 right-6 h-10 w-10 text-red-500/35"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M14 14l12 12M26 14l-12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="text-gray-300 font-bold text-sm tracking-widest">
              [ NO CUALIFICADO ]
            </div>
            <ul className="mt-6 space-y-5">
              {notQualified.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-gray-400 text-sm mt-1">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
