"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VOSResultsDashboard from "@/components/sections/VOSResultsDashboard";

type Option = {
  label: string;
  value: string;
};

type Step = {
  title: string;
  question: string;
  options: Option[];
};

const steps: Step[] = [
  {
    title: "VOLUMEN",
    question: "¿Cuál es el volumen mensual de leads que entran actualmente a tu embudo?",
    options: [
      { label: "0-50", value: "0-50" },
      { label: "51-200", value: "51-200" },
      { label: "+200", value: "+200" },
    ],
  },
  {
    title: "VELOCIDAD",
    question: "¿Cuánto tarda tu equipo en contactar a un nuevo lead?",
    options: [
      { label: "< 5 min", value: "< 5 min" },
      { label: "1-6 horas", value: "1-6 horas" },
      { label: "+24 horas", value: "+24 horas" },
    ],
  },
  {
    title: "DATOS",
    question: "¿Identificas en qué etapa exacta del proceso se caen tus prospectos?",
    options: [
      { label: "Data Exacta", value: "Data Exacta" },
      { label: "Idea Vaga", value: "Idea Vaga" },
      { label: "Caja Negra", value: "Caja Negra" },
    ],
  },
  {
    title: "ESCALA",
    question: "Si mañana inyectamos 500 leads de golpe, ¿qué sucede?",
    options: [
      { label: "Escalamos", value: "Escalamos" },
      { label: "Colapsamos", value: "Colapsamos" },
      { label: "Sin Equipo", value: "Sin Equipo" },
    ],
  },
];

export default function VOSAuditor() {
  const totalSteps = steps.length;
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(() => {
    return Math.round(((stepIndex + 1) / totalSteps) * 100);
  }, [stepIndex, totalSteps]);

  const currentStep = steps[stepIndex];

  const score = useMemo(() => {
    const pointsByStep: Record<number, Record<string, number>> = {
      0: { "0-50": 1, "51-200": 2, "+200": 3 },
      1: { "< 5 min": 3, "1-6 horas": 2, "+24 horas": 1 },
      2: { "Data Exacta": 3, "Idea Vaga": 2, "Caja Negra": 1 },
      3: { "Escalamos": 3, "Colapsamos": 2, "Sin Equipo": 1 },
    };

    const raw = answers.reduce((acc, answer, index) => {
      const table = pointsByStep[index];
      return acc + (table?.[answer] ?? 1);
    }, 0);
    const min = steps.length * 1;
    const max = steps.length * 3;
    const normalized = ((raw - min) / (max - min)) * 100;
    return Math.round(Math.max(0, Math.min(100, normalized)));
  }, [answers]);

  const findings = useMemo(() => {
    const speed = answers[1];
    const data = answers[2];
    const scale = answers[3];

    const leak =
      speed === "+24 horas"
        ? "Tu tiempo de respuesta de +24h reduce tu conversión en un 60%."
        : speed === "1-6 horas"
          ? "Tu tiempo de respuesta intermedio filtra leads con intención alta."
          : "Tu velocidad es competitiva, pero aún hay fricciones ocultas.";

    const impact =
      data === "Caja Negra"
        ? "Sin trazabilidad, el 40% de tu presupuesto de pauta es una caja negra."
        : data === "Idea Vaga"
          ? "La falta de data precisa aumenta tu costo por oportunidad."
          : "Tus datos son sólidos, pero no están automatizados al 100%.";

    const solution =
      scale === "Sin Equipo"
        ? "Implementación urgente de Nodos de Respuesta Automática VOS."
        : scale === "Colapsamos"
          ? "Orquestación de agenda y enrutamiento inteligente de leads."
          : "Automatización avanzada para escalar sin perder control.";

    return { leak, impact, solution };
  }, [answers]);

  const handleSelect = (value: string) => {
    const nextAnswers = [...answers];
    nextAnswers[stepIndex] = value;
    setAnswers(nextAnswers);

    if (stepIndex < totalSteps - 1) {
      setStepIndex((prev) => prev + 1);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStepIndex(totalSteps);
    }, 2500);
  };

  const showGate = stepIndex >= totalSteps && !isLoading && !showResults;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      await fetch("https://formspree.io/f/xzdgqzrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          score,
          answers,
        }),
      });
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="section-auditor" className="py-[140px] bg-[#000000]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#FF8C00]">Auditoría</span> de Madurez Operativa:
            Detecta los puntos de fuga de tu infraestructura.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            En menos de 2 minutos, identifica si tu infraestructura actual está diseñada
            para procesar el volumen de ventas que buscas o si colapsará en el intento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          <div className="h-[2px] bg-white/5">
            <div
              className="h-full bg-[#FF8C00] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.2em] text-[#FF8C00] font-bold uppercase">
                Auditor de Infraestructura VOS
              </span>
              <span className="text-xs text-white/60 font-mono">
                {String(Math.min(stepIndex + 1, totalSteps)).padStart(2, "0")} /{" "}
                {String(totalSteps).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-4 w-4 rounded-full border-2 border-[#FF8C00] border-t-transparent animate-spin" />
                    <span className="text-white/80 text-sm tracking-wide uppercase">
                      Procesando
                    </span>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Analizando puntos de fuga en tu infraestructura comercial...
                  </p>
                </motion.div>
              )}

              {!isLoading && !showGate && (
                <motion.div
                  key={currentStep.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="text-white/60 text-xs tracking-[0.3em] font-bold">
                    {currentStep.title}
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold mt-3">
                    {currentStep.question}
                  </h3>

                  <div className="grid grid-cols-1 gap-3 mt-8">
                    {currentStep.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className="min-h-[48px] text-left px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.02] text-white/80 hover:text-white hover:border-orange-500 hover:shadow-[0_0_24px_rgba(255,140,0,0.2)] transition-all duration-300"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {showGate && (
                <motion.div
                  key="gate"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    Análisis Completado.
                  </h3>
                  <p className="text-white/70 text-base mt-3">
                    Ingresa tu email corporativo para desbloquear tu Puntaje de
                    Madurez VOS y el reporte de optimización.
                  </p>

                  <form className="mt-8" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#FF8C00] outline-none text-white py-3 text-base"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full bg-[#FF8C00] text-black font-black py-4 rounded-2xl tracking-widest text-sm uppercase hover:brightness-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Enviando..." : "Ver mi Diagnóstico"}
                    </button>
                    <p className="text-xs text-white/60 mt-3">
                      Tus datos están protegidos bajo protocolos de confidencialidad industrial.
                    </p>
                  </form>
                </motion.div>
              )}

              {showResults && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <VOSResultsDashboard score={score} findings={findings} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
