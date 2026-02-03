import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export default function Fit() {
  return (
    <section id="section-fit" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Encabezado: Posicionamiento de Élite */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono mb-6">
            <ShieldCheck className="w-3 h-3" /> PROTOCOLO DE ADMISIÓN
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Es <span className="text-orange-500 text-italic">ID Mechanism</span> para ti?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            No somos una agencia de servicios generales. Somos una firma de ingeniería comercial. Solo trabajamos con negocios listos para la arquitectura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Columna: SÍ (El Cliente Ideal) */}
          <div className="group p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-green-500/10">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">SÍ es para ti si...</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                <p className="text-slate-300 text-lg">Facturas consistentemente pero vives en el <span className="text-white font-semibold">caos operativo.</span></p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                <p className="text-slate-300 text-lg">Valoras la <span className="text-white font-semibold">estructura y la predictibilidad</span> sobre las modas virales.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                <p className="text-slate-300 text-lg">Buscas <span className="text-white font-semibold">control absoluto</span> de tu flujo de ventas y de tu tiempo.</p>
              </li>
            </ul>
          </div>

          {/* Columna: NO (El Filtro de Rechazo) */}
          <div className="group p-8 md:p-12 rounded-3xl bg-transparent border border-white/5 opacity-50 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-red-500/10">
                <XCircle className="w-8 h-8 text-red-500/60" />
              </div>
              <h3 className="text-2xl font-bold text-slate-400">NO es para ti si...</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-700 mt-2 shrink-0" />
                <p className="text-slate-500">Buscas <span className="italic">&quot;probar suerte&quot;</span> solo un mes para ver qué pasa.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-700 mt-2 shrink-0" />
                <p className="text-slate-500">No tienes una <span className="italic">oferta validada</span> ni un producto que el mercado ya desee.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-700 mt-2 shrink-0" />
                <p className="text-slate-500">Prefieres <span className="italic">cantidad de leads</span> baratos sobre calidad de citas calificadas.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}