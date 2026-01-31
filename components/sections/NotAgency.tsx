import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2, ZapOff } from 'lucide-react';

export default function NotAgency() {
  return (
    <section id="not-agency" className="py-24 bg-slate-900/30 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Esto no es una agencia de marketing tradicional.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Las agencias suelen trabajar por piezas. Las piezas sueltas no crean sistemas, 
              y sin un sistema, el crecimiento es frágil.
            </p>
          </div>

          {/* Tabla Comparativa */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Columna A: Tradicional */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 opacity-80">
              <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                <ZapOff className="w-5 h-5" /> Marketing Tradicional
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 mt-1 shrink-0" />
                  <span>Tácticas sin arquitectura completa</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 mt-1 shrink-0" />
                  <span>Mucha actividad, poco control</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 mt-1 shrink-0" />
                  <span>Cuando se detiene la ejecución, se detienen las ventas</span>
                </li>
              </ul>
            </div>

            {/* Columna B: VEXCALA */}
            <div className="p-8 rounded-3xl bg-blue-600/5 border-2 border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-blue-500/10 border-b border-l border-blue-500/20 rounded-bl-xl">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">VEXCALA</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
                  <span className="font-medium">Infraestructura de crecimiento comercial</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
                  <span className="font-medium">Sistemas, no tareas</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
                  <span className="font-medium">Proceso completo de ventas integrado</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
                  <span className="font-medium">Crecimiento sostenible y medible</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Frase y Qué NO hacemos */}
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-12 tracking-tight">
              &quot;El marketing crea movimiento. La infraestructura crea estabilidad.&quot;
            </p>
            
            <div className="max-w-2xl mx-auto">
              <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-8">Qué NO hacemos:</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {["Publicaciones sueltas", "Anuncios sin sistema", "Automatizaciones aisladas", "Promesas rápidas"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full border border-slate-800 text-slate-400 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}