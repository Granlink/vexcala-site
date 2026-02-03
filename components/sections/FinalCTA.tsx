"use client";

import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="section-final-cta" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Fondo con degradado sutil y efecto de brillo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-900/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col items-center text-center">
            
            {/* Elemento Decorativo: Pulso de Datos */}
            <div className="mb-8 p-4 rounded-full bg-orange-500/10 border border-orange-500/20 animate-pulse">
              <Activity className="w-8 h-8 text-orange-500" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              ¿Listo para dejar de <span className="text-orange-500">improvisar?</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
              Aplica para instalar el <span className="text-white font-medium">ID Mechanism</span> en tu estructura comercial y transfiere la incertidumbre a un sistema de ingeniería.
            </p>

            <button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-black font-black py-4 px-8 rounded-[8px]">
              OBTENER MI ÍNDICE DE FRAGILIDAD
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-8 text-slate-600 text-[10px] uppercase tracking-[0.2em] font-mono">
              Tiempo estimado de diagnóstico: 3 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}