import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Elemento visual de cierre: Un brillo radial suave */}
      <div className="absolute inset-0 bg-blue-600/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-blue-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Si tu negocio ya vende pero tu crecimiento no es predecible, <br />
            <span className="text-blue-500 italic">es momento de construir un sistema.</span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            VEXCALA trabaja con un número limitado de negocios para asegurar foco y resultados sostenibles.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="#apply" 
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 active:scale-95"
            >
              Agendar llamada estratégica
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
  href="https://wa.me/573028267788?text=Hola%20VEXCALA,%20vengo%20de%20la%20web.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Sales%20Operating%20System." 
  target="_blank"
  rel="noopener noreferrer"
  className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-300 hover:text-white font-medium px-10 py-5 transition-colors border border-slate-800 rounded-full hover:bg-slate-900"
>
  <MessageCircle className="w-5 h-5 text-green-500" />
  Hablar por WhatsApp primero
</a>
          </div>

          <p className="text-2xl md:text-3xl font-light text-slate-500">
            El crecimiento no se improvisa. <span className="text-white font-semibold italic">Se diseña.</span>
          </p>
        </div>
      </div>
    </section>
  );
}