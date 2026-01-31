import React from 'react';
import { ArrowRight, } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Elementos de fondo: Gradientes técnicos para profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tag de Categoría */}
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Infraestructura Comercial de Élite
        </div>

          {/* H1: El Gancho (Dolor + Resultado) */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Ventas predecibles para negocios que <span className="text-blue-500 italic font-bold">dejaron de improvisar.</span>
          </h1>

          {/* H2: El Sistema y la Definición */}
          <div className="mb-10 space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide uppercase italic">
              VEXCALA Sales Operating System
            </h2>
            <p className="text-lg md:text-xl text-blue-400 font-medium">
              Infraestructura de crecimiento comercial diseñada para ordenar, calificar y convertir ventas.
            </p>
          </div>

          {/* Supporting Line: Diferenciación y Acción */}
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
             No somos una agencia de marketing. Diseñamos e Instalamos sistemas de ventas completos para negocios y marcas personales en crecimiento.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#apply" 
              className="group w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              Agendar llamada estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#system" 
              className="w-full sm:w-auto text-slate-400 hover:text-white font-medium px-8 py-4 transition-colors border border-slate-800 rounded-full hover:bg-slate-900/50"
            >
              Explorar el sistema
            </a>
          </div>

        </div>
      </div>

      {/* Decoración de scroll sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}