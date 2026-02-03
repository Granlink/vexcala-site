"use client";

import React from 'react';
import { Radar, Cpu, Infinity } from 'lucide-react';

export default function Mechanism() {
  const layers = [
    {
      cap: "CAPA 01 // ENTRADA",
      number: "01",
      icon: <Radar className="w-6 h-6 text-[#FF8C00]" strokeWidth={1.5} />,
      title: "Captación de Alta Intención",
      desc: "Sincronizamos tu ecosistema de contenido y pauta para que el prospecto llegue pre-educado. No compramos clics; compramos atención calificada lista para la transacción."
    },
    {
      cap: "CAPA 02 // PROCESO",
      number: "02",
      icon: <Cpu className="w-6 h-6 text-[#FF8C00]" strokeWidth={1.5} />,
      title: "Protocolo de Auditoría IA",
      desc: "Nuestra infraestructura de IA no solo responde; califica. Filtramos prospectos por capacidad financiera y urgencia, agendando solo llamadas con un 90% de probabilidad de cierre."
    },
    {
      cap: "CAPA 03 // SALIDA",
      number: "03",
      icon: <Infinity className="w-6 h-6 text-[#FF8C00]" strokeWidth={1.5} />,
      title: "Orquestación de Activos",
      desc: "Instalamos una retroalimentación de datos total. Cada venta cerrada educa al sistema para buscar perfiles idénticos, optimizando tu costo de adquisición de forma perpetua."
    }
  ];

  return (
    <section id="section-mechanism" className="py-24 bg-[#000000] relative overflow-hidden">
      <div className="absolute top-8 left-1/4 w-96 h-96 bg-[#FF8C00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#FF8C00] text-[11px] font-black tracking-[0.3em] uppercase">
            EL MOTOR VOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Tres capas de blindaje comercial.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layers.map((layer) => (
            <div
              key={layer.number}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 transition-all duration-500 hover:border-[#FF8C00]/70 hover:bg-white/[0.05] hover:-translate-y-2"
            >
              <div className="absolute inset-0 flex items-start justify-end pr-10 pt-6 text-white/10 text-6xl font-black">
                {layer.number}
              </div>
              <span className="text-[#FF8C00] text-[10px] tracking-[0.2em] font-black uppercase">
                {layer.cap}
              </span>
              <div className="mt-4">{layer.icon}</div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                {layer.title}
              </h3>
              <p className="text-gray-400 leading-[1.6] text-base">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
