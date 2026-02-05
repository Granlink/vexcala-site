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
  const range =
    clampedScore <= 45 ? "critical" : clampedScore <= 80 ? "risk" : "optimized";

  const title =
    range === "critical"
      ? "ESTADO CRÍTICO"
      : range === "risk"
        ? "RIESGO DE ESCALABILIDAD"
        : "LISTO PARA ÉLITE";

  const summary =
    range === "critical"
      ? "Tu infraestructura es frágil. Estás perdiendo capital por ineficiencia operativa."
      : range === "risk"
        ? "Tienes tracción, pero tu sistema colapsará si intentas escalar sin automatización."
        : "Base sólida. Estás a un paso de la automatización total con Vexcala VOS.";

  const radius = 78;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (clampedScore / 100) * circumference;

  const whatsappMessage = encodeURIComponent(
    range === "critical"
      ? `Hola Vexcala, mi Score de Madurez fue de ${clampedScore}%. Score crítico, necesito ayuda urgente para optimizar mi infraestructura comercial.`
      : range === "risk"
        ? `Hola Vexcala, mi Score de Madurez fue de ${clampedScore}%. Deseo optimizar mi sistema.`
        : `Hola Vexcala, mi Score de Madurez fue de ${clampedScore}%. Estoy listo para la automatización total.`
  );

  const calendlyUrl =
    range === "critical"
      ? "https://calendly.com/vexcala/auditoria?score=critical"
      : range === "risk"
        ? "https://calendly.com/vexcala/auditoria?score=risk"
        : "https://calendly.com/vexcala/auditoria?score=optimized";
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
              stroke={
                range === "critical"
                  ? "#EF4444"
                  : range === "risk"
                    ? "url(#vosGradient)"
                    : "#22C55E"
              }
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
        <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl">
          {summary}
        </p>
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
              {range === "critical"
                ? "Agendar Auditoría de Rescate Inmediata"
                : range === "risk"
                  ? "Agendar Auditoría de Implementación Gratuita"
                  : "Agendar Auditoría de Escalamiento"}
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
