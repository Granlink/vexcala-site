import React from 'react';
import { Layers, Cpu, BarChart3, ArrowRightCircle } from 'lucide-react';

const phases = [
  {
    id: "01",
    title: "Demand Architecture™",
    tag: "Arquitectura de Demanda",
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    description: "Diseñamos la estructura que atrae a las personas correctas con el mensaje correcto.",
    result: "Demanda alineada, no volumen vacío."
  },
  {
    id: "02",
    title: "Lead Qualification Engine™",
    tag: "Motor de Calificación",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    description: "Implementamos calificación automática para filtrar, segmentar y priorizar oportunidades reales.",
    result: "Menos desgaste, más calidad."
  },
  {
    id: "03",
    title: "Revenue Conversion System™",
    tag: "Sistema de Conversión",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    description: "Estructuramos conversión y seguimiento para que las ventas no dependan de la suerte.",
    result: "Ventas más consistentes y medibles."
  }
];

export default function System() {
  return (
    <section id="system" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header del Sistema */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              VEXCALA Sales Operating System
            </h2>
            <h3 className="text-xl text-blue-400 font-medium mb-8">
              Infraestructura de Crecimiento Comercial basada en sistemas de ventas predecibles.
            </h3>
            <div className="max-w-3xl p-6 rounded-2xl border border-slate-800 bg-slate-900/20 text-slate-400 leading-relaxed">
              <p className="mb-4">No es una campaña, ni un funnel aislado, ni una automatización suelta.</p>
              <p className="font-medium text-slate-200">
                Es una infraestructura completa que organiza la demanda, califica prospectos y convierte ventas de forma consistente.
              </p>
            </div>
          </div>

          {/* Grid de Fases */}
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <div 
                key={phase.id} 
                className="group p-8 rounded-3xl border border-slate-900 bg-slate-900/10 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    {phase.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-800/50 group-hover:text-blue-500/10 transition-colors">
                    {phase.id}
                  </span>
                </div>
                
                <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-2">
                  {phase.tag}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 italic">
                  {phase.title}
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {phase.description}
                </p>
                
                <div className="pt-6 border-t border-slate-800/50">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <ArrowRightCircle className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">Resultado:</span>
                    <span className="text-slate-400">{phase.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cierre de Sección */}
          <div className="mt-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600 font-bold">
              Esto no es marketing tradicional. Es infraestructura comercial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}