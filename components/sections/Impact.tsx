import React from 'react';
import { Scale, Filter, Zap, Target, ShieldCheck, BarChart } from 'lucide-react';

const principles = [
  { 
    title: "Sistemas > tácticas", 
    icon: <Scale className="w-5 h-5 text-blue-500" />,
    desc: "Las tácticas ganan batallas, pero los sistemas ganan la guerra del crecimiento."
  },
  { 
    title: "Calificación antes que volumen", 
    icon: <Filter className="w-5 h-5 text-blue-500" />,
    desc: "Hablar con menos personas, pero con las correctas, es el secreto de la escala."
  },
  { 
    title: "Automatización con criterio", 
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    desc: "No eliminamos humanos, liberamos su talento del trabajo repetitivo."
  },
  { 
    title: "Previsibilidad como ventaja", 
    icon: <Target className="w-5 h-5 text-blue-500" />,
    desc: "Un negocio predecible vale 10 veces más que uno que solo tiene suerte."
  },
  { 
    title: "Infraestructura Escalable", 
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    desc: "Construimos para el negocio que serás en 2 años, no solo para el de hoy."
  },
  { 
    title: "Datos sobre Opiniones", 
    icon: <BarChart className="w-5 h-5 text-blue-500" />,
    desc: "Tomamos decisiones basadas en métricas reales de conversión, no en suposiciones."
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Los negocios que crecen no lo hacen por suerte.
          </h2>
          <p className="text-slate-500 text-xl font-light italic">
            Se rigen por principios de ingeniería comercial.
          </p>
        </div>
      </div>

      {/* Contenedor del Carrusel Infinito con Cards Completas */}
      <div className="relative flex overflow-hidden select-none group">
        <div 
          className="flex flex-nowrap gap-8 py-4 animate-marquee-slower"
          style={{
            display: 'flex',
            width: 'max-content'
          }}
        >
          {/* Duplicamos el contenido para el loop infinito perfecto */}
          {[...principles, ...principles].map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col gap-4 p-8 rounded-3xl border border-slate-800 bg-slate-900/20 w-[350px] md:w-[400px] hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white italic tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Inyección de Keyframes y Animación */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-slower {
            animation: marquee-scroll 40s linear infinite;
          }
          .group:hover .animate-marquee-slower {
            animation-play-state: paused;
          }
        `}} />
      </div>

      <div className="text-center mt-20">
        <p className="text-slate-600 text-sm uppercase tracking-[0.3em] font-bold">
          El crecimiento real se estructura, no se improvisa.
        </p>
      </div>
    </section>
  );
}