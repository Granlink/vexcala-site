"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

export default function Thesis() {
  const thesisPhrases = [
    { old: "Las agencias tradicionales te venden clics.", new: "Nosotros instalamos activos." },
    { old: "Ellos celebran los leads baratos.", new: "Nosotros nos preocupamos por tu margen de beneficio." },
    { old: "No buscamos que seas viral.", new: "Buscamos que seas predecible." }
  ];

  return (
    <section id="Thesis" aria-labelledby="thesis-title" className="bg-[#000000] text-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-12">
          <motion.h2
            id="thesis-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-1"
          >
            <span className="text-white">El marketing táctico ha muerto.</span> <br />
            <span className="text-white">Tu negocio necesita </span>
            <span className="text-[#FF8C00] italic">Arquitectura.</span>
          </motion.h2>
        </div>

        {/* El Bloque de Tesis */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          {thesisPhrases.map((phrase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-3 px-3 py-4 bg-white/5 rounded-xl border border-white/10"
            >
              <div className="flex items-center gap-3 flex-1 opacity-40">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm md:text-base font-light">{phrase.old}</p>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <CheckCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                <p className="text-white text-sm md:text-base font-medium">{phrase.new}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Las Cards Comparativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BLOQUE A: La Agencia Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-white/5 bg-white/2 bg-opacity-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-500">EL MODELO AGOTADO</h3>
            <p className="text-base text-gray-400 mb-3">• Enfoque en métricas de vanidad (Likes/Clicks).</p>
            <p className="text-base text-gray-400 mb-3">• Dependencia total de algoritmos externos.</p>
            <p className="text-base text-gray-400 mb-3">• Ejecución manual y lenta (Error humano).</p>
            <p className="text-red-500/70 font-mono text-xs mt-3">STATUS: FRÁGIL Y COSTOSO</p>
          </motion.div>

          {/* BLOQUE B: Vexcala Operating System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-2 border-[#FF8C00] bg-black shadow-[0_0_60px_rgba(255,140,0,0.2)] rounded-2xl p-6 relative overflow-visible"
          >
            <div className="absolute -top-3 right-0 bg-[#FF8C00] text-black text-[12px] font-black px-4 py-2 uppercase rounded-md shadow-[0_0_24px_rgba(255,140,0,0.25)]">
              SISTEMA RECOMENDADO
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">VEXCALA VOS (ARQUITECTURA)</h3>
            <p className="text-base text-white mb-3">• Enfoque en manufactura de citas calificadas.</p>
            <p className="text-base text-white mb-3">• Infraestructura propia (Independencia total).</p>
            <p className="text-base text-white mb-3">• Orquestación por IA (Escalabilidad 24/7).</p>
            <p className="text-[#FF8C00] font-mono text-xs mt-3 animate-pulse">STATUS: ROBUSTO Y ESCALABLE</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
