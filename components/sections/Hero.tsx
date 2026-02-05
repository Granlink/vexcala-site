"use client";

import React from 'react';
import { Radar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="section-hero" aria-labelledby="hero-title" className="relative min-h-[90vh] flex items-center justify-center bg-[#000000] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF8C00]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-3 py-1 rounded-full bg-[rgba(255,140,0,0.1)] border border-[#FF8C00] text-[#FF8C00] text-[10px] font-bold tracking-widest uppercase mb-6"
        >
          <Radar className="w-4 h-4 inline mr-2" />
          INFRAESTRUCTURA COMERCIAL DE ÉLITE
        </motion.div>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white mb-6"
        >
          Deja de administrar el caos. <br /> Empieza a gestionar una <span className="text-[#FF8C00]">Infraestructura de Ventas.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-[700px] mx-auto mb-8"
        >
          VEXCALA Sales Operating System (VOS): infraestructura comercial y automatización comercial para generar citas calificadas B2B cada 24 horas.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#auditoria-vos"
          className="inline-block relative isolate overflow-hidden bg-[#FF8C00] text-black font-black px-8 py-4 rounded-xl shadow-[0_0_36px_rgba(255,140,0,0.45)] hover:scale-105 transition-transform"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] shimmer-sweep" />
          INICIAR AUDITORÍA DE INFRAESTRUCTURA
        </motion.a>
        <p className="text-xs text-gray-400 mt-4">
          Toma 2 minutos. Detecta fallos en tu sistema actual.
        </p>
      </div>
      <style jsx>{`
        @keyframes shimmer-sweep {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }
        .shimmer-sweep {
          animation: shimmer-sweep 3s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
