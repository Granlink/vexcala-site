import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const positiveFit = [
  "Dueños de negocio y empresas en crecimiento",
  "Consultores y marcas personales profesionales",
  "Negocios que ya venden (aunque sea inestable)",
  "Personas que valoran estructura y procesos",
  "Disposición a invertir en sistemas"
];

const negativeFit = [
  "Quien empieza desde cero",
  "Quien solo busca leads baratos",
  "Quien quiere resultados inmediatos sin estructura",
  "Quien no quiere ordenar procesos"
];

export default function Fit() {
  return (
    <section id="fit" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Encabezado con Autoridad */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              VEXCALA no es para todos los negocios. <br />
              <span className="text-blue-500 italic">Y eso es intencional.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Para quién SÍ */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-emerald-500/20 shadow-[0_0_30px_-15px_rgba(16,185,129,0.1)]">
              <h3 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> Para quién SÍ:
              </h3>
              <ul className="space-y-6">
                {positiveFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quién NO */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-900 opacity-60">
              <h3 className="text-xl font-bold text-slate-500 mb-8 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Para quién NO:
              </h3>
              <ul className="space-y-6">
                {negativeFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2.5 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA de Cierre de Sección */}
          <div className="flex flex-col items-center gap-6">
            <a 
              href="#apply" 
              className="group bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all flex items-center gap-3 active:scale-95"
            >
              Aplicar ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              Tiempo estimado de aplicación: 2 minutos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}