import React from 'react';
import { Phone, Search, Settings2, LineChart } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Llamada estratégica",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    id: "02",
    title: "Diagnóstico comercial",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "03",
    title: "Diseño e instalación del sistema",
    icon: <Settings2 className="w-5 h-5" />,
  },
  {
    id: "04",
    title: "Optimización continua",
    icon: <LineChart className="w-5 h-5" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Encabezado */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Un proceso claro. Sin promesas vacías. <br />
              <span className="text-blue-500 italic">Sin improvisación.</span>
            </h2>
          </div>

          {/* Stepper UI */}
          <div className="relative">
            {/* Línea de conexión de fondo (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-900 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step,) => (
                <div key={step.id} className="group flex flex-col items-center">
                  {/* Círculo del Paso */}
                  <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-all duration-500 bg-slate-950 relative">
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full text-white">
                      {step.id}
                    </div>
                    <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Texto del Paso */}
                  <h3 className="text-lg font-bold text-white text-center group-hover:text-blue-400 transition-colors px-4">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Frase Final */}
          <div className="mt-20 text-center">
            <div className="inline-block p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-xl md:text-2xl text-slate-300 font-light">
                &quot;Esto no es una campaña. Es una <span className="text-white font-semibold italic">infraestructura que evoluciona</span> con tu negocio.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}