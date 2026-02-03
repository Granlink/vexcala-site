"use client";
import React from 'react';
import { Zap, ShieldCheck, TrendingUp, AlertCircle } from 'lucide-react';

export default function Impact() {
  const slides = [
    {
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      text: "Las empresas que contactan leads en <5 min tienen 21x más éxito. VOS lo hace en 0 seg."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      text: "El 80% del gasto en Ads se pierde en leads no calificados. La Ingeniería de Intención corta esa fuga."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      text: "Sistemas predecibles superan a tácticas virales en un 400% en LTV (Life Time Value)."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
      text: "La falta de seguimiento mata el 70% de las ventas potenciales. El VOS nunca olvida un lead."
    }
  ];

  return (
    <section id="section-impact" className="py-12 bg-[#FF8C00]/5 border-y border-orange-500/10 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden group">
        {/* Duplicamos los slides para crear el efecto infinito real */}
        <div className="flex animate-marquee group-hover:pause-animation">
          {[...slides, ...slides].map((slide, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-12 py-2 border-r border-white/5"
            >
              <div className="p-2 bg-orange-500/10 rounded-full">
                {slide.icon}
              </div>
              <span className="text-white/80 font-medium text-sm md:text-base tracking-wide uppercase italic">
                {slide.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos CSS Inline para la Animación Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}