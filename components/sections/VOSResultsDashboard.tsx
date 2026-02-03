"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicFAQ from "@/components/sections/DynamicFAQ";

type Findings = {
  leak: string;
  impact: string;
  solution: string;
};

type Props = {
  score: number;
  findings: Findings;
};

export default function VOSResultsDashboard({ score, findings }: Props) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const title =
    clampedScore <= 40
      ? "Estado Crítico: Tu infraestructura actual está quemando capital."
      : clampedScore <= 75
        ? "Estado de Riesgo: Tienes tracción, pero careces de sistemas de escala."
        : "Estado de Optimización: Tu base es sólida, es momento de automatizar el 99%.";

  const radius = 78;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (clampedScore / 100) * circumference;

  const whatsappMessage = encodeURIComponent(
    `Hola Vexcala, mi Score de Madurez fue de ${clampedScore}%. Necesito optimizar mi infraestructura comercial.`
  );

  const calendlyUrl = "https://calendly.com/vexcala/auditoria";
  const whatsappUrl = `https://wa.me/573025652978?text=${whatsappMessage}`;

  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-44 h-44">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="vosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#1f2937"
              strokeWidth={stroke}
              fill="none"
            />
            <motion.circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#vosGradient)"
              strokeWidth={stroke}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: progress }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              transform="rotate(-90 100 100)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-black text-white">{clampedScore}%</div>
            <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
              Madurez VOS
            </div>
          </div>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-semibold mt-6">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
          <div className="text-[#FF8C00] text-xs font-bold tracking-widest uppercase">
            Punto de Fuga
          </div>
          <p className="text-white/80 text-sm mt-2">{findings.leak}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
          <div className="text-[#FF8C00] text-xs font-bold tracking-widest uppercase">
            Impacto Financiero
          </div>
          <p className="text-white/80 text-sm mt-2">{findings.impact}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
          <div className="text-[#FF8C00] text-xs font-bold tracking-widest uppercase">
            Solución Sugerida
          </div>
          <p className="text-white/80 text-sm mt-2">{findings.solution}</p>
        </div>
      </div>

      <div className="mt-8 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#FF8C00] text-black font-black py-4 rounded-2xl tracking-widest text-sm uppercase hover:brightness-95 transition-all animate-pulse"
            >
              Agendar Auditoría de Implementación Gratuita
            </a>
            <p className="text-white/70 text-xs mt-2">
              Evaluaremos tu caso en 15 min vía Zoom.
            </p>
          </div>
          <div>
            <a
              href={whatsappUrl}
              className="block w-full text-center border border-[#FF8C00] text-[#FF8C00] font-semibold py-4 rounded-2xl tracking-widest text-sm uppercase hover:bg-[#FF8C00]/10 transition-all"
            >
              Hablar con un Especialista por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DynamicFAQ userHasFinishedQuiz={true} variant="conversion" />
      </div>
    </div>
  );
}
