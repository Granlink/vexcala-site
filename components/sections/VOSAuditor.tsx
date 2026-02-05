"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VOSResultsDashboard from "@/components/sections/VOSResultsDashboard";

type Option = {
  label: string;
  value: number;
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
      { label: "0-50", value: 5 },
      { label: "51-200", value: 15 },
      { label: "+200", value: 20 },
    ],
  },
  {
    title: "VELOCIDAD",
    question: "¿Cuánto tarda tu sistema en contactar a un nuevo lead?",
    options: [
      { label: "+24 horas", value: 0 },
      { label: "1-6 horas", value: 10 },
      { label: "< 5 minutos", value: 20 },
    ],
  },
  {
    title: "TRAZABILIDAD",
    question: "¿Identificas en qué etapa exacta del proceso se caen tus prospectos?",
    options: [
      { label: "Caja Negra / No sé", value: 0 },
      { label: "Idea Vaga / Manual", value: 10 },
      { label: "Trazabilidad Exacta", value: 20 },
    ],
  },
  {
    title: "CIERRE",
    question: "¿Cómo se gestiona actualmente el cierre de ventas en tu organización?",
    options: [
      { label: "Fundador hace todo", value: 5 },
      { label: "Equipo manual/artesanal", value: 15 },
      { label: "Equipo con sistemas/IA", value: 20 },
    ],
  },
  {
    title: "ESCALABILIDAD",
    question: "Si mañana triplicamos tus leads de golpe, ¿qué sucede?",
    options: [
      { label: "Sin equipo para eso", value: 0 },
      { label: "Colapsamos operativamente", value: 10 },
      { label: "Escalamos y cerramos", value: 20 },
    ],
  },
];

export default function VOSAuditor() {
  const totalSteps = steps.length;
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scoreByStep, setScoreByStep] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+57");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<"quiz" | "loading" | "lead_capture" | "results">("quiz");
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [shakeEmail, setShakeEmail] = useState(false);

  useEffect(() => {
    window.localStorage.removeItem("vosProgress");
    setStepIndex(0);
    setAnswers([]);
    setScoreByStep([]);
    setStep("quiz");
    window.localStorage.removeItem("vosScore");
    window.localStorage.removeItem("vosDiagnosed");
  }, []);

  const progress = useMemo(() => {
    if (step === "results") return 100;
    const raw = (Math.min(stepIndex + 1, totalSteps) / totalSteps) * 100;
    return Math.round(raw);
  }, [stepIndex, totalSteps, step]);

  const currentStep = steps[Math.min(stepIndex, totalSteps - 1)];

  const score = useMemo(() => {
    const total = scoreByStep.reduce((acc, value) => acc + value, 0);
    return Math.round(Math.max(0, Math.min(100, total)));
  }, [scoreByStep]);

  const findings = useMemo(() => {
    const speed = answers[1];
    const trace = answers[2];
    const scale = answers[4];

    const leak =
      speed === 0
        ? "Tu tiempo de respuesta de +24h reduce tu conversión en un 60%."
        : speed === 10
          ? "Tu tiempo de respuesta intermedio filtra leads con intención alta."
          : "Tu velocidad es competitiva, pero aún hay fricciones ocultas.";

    const impact =
      trace === 0
        ? "Sin trazabilidad, el 40% de tu presupuesto de pauta es una caja negra."
        : trace === 10
          ? "La falta de data precisa aumenta tu costo por oportunidad."
          : "Tus datos son sólidos, pero no están automatizados al 100%.";

    const solution =
      scale === 0
        ? "Implementación urgente de Nodos de Respuesta Automática VOS."
        : scale === 10
          ? "Orquestación de agenda y enrutamiento inteligente de leads."
          : "Automatización avanzada para escalar sin perder control.";

    return { leak, impact, solution };
  }, [answers]);

  const mainLeak = useMemo(() => {
    const categories = [
      { key: "Volumen", value: scoreByStep[0] ?? 0 },
      { key: "Velocidad", value: scoreByStep[1] ?? 0 },
      { key: "Trazabilidad", value: scoreByStep[2] ?? 0 },
      { key: "Cierre", value: scoreByStep[3] ?? 0 },
      { key: "Escalabilidad", value: scoreByStep[4] ?? 0 },
    ];
    return categories.reduce((min, current) =>
      current.value < min.value ? current : min
    ).key;
  }, [scoreByStep]);

  const auditSegment = useMemo(() => {
    if (score <= 45) return "Crítico";
    if (score <= 80) return "Riesgo";
    return "Optimizable";
  }, [score]);

  const quizResponses = useMemo(() => {
    return steps
      .map((stepItem, index) => {
        const selectedValue = answers[index];
        const label =
          stepItem.options.find((option) => option.value === selectedValue)?.label ?? "Sin respuesta";
        return `${stepItem.title}: ${label}`;
      })
      .join(" | ");
  }, [answers]);

  const handleSelect = (value: number) => {
    const nextAnswers = [...answers];
    nextAnswers[stepIndex] = value;
    setAnswers(nextAnswers);

    const nextScoreByStep = [...scoreByStep];
    nextScoreByStep[stepIndex] = value;
    setScoreByStep(nextScoreByStep);
    window.localStorage.setItem("vosProgress", JSON.stringify({
      stepIndex,
      answers: nextAnswers,
      scoreByStep: nextScoreByStep,
    }));

    if (stepIndex < totalSteps - 1) {
      setStepIndex((prev) => prev + 1);
      return;
    }

    const total = nextScoreByStep.reduce((acc, val) => acc + val, 0);
    window.localStorage.setItem("vosScore", String(total));
    setStep("loading");
    setTimeout(() => {
      setStepIndex(totalSteps);
      setStep("lead_capture");
    }, 2500);
  };

  const showGate = step === "lead_capture";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const allAnswered = answers.length === totalSteps && answers.every((value) => typeof value === "number");
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nameValid = fullName.trim().length > 2;
    const digitsOnly = phone.replace(/\D/g, "");
    const phoneValid = !phone.trim() || digitsOnly.length >= 8;
    if (!nameValid) {
      setNameError("Ingresa tu nombre completo.");
      return;
    }
    setNameError("");
    if (!emailValid) {
      setEmailError("Ingresa un correo corporativo válido.");
      setShakeEmail(true);
      window.setTimeout(() => setShakeEmail(false), 450);
      return;
    }
    if (!phoneValid) {
      setPhoneError("El número debe tener al menos 8 dígitos.");
      return;
    }
    setPhoneError("");
    if (!allAnswered) return;
    setEmailError("");
    setIsSubmitting(true);
    try {
      const phoneValue = phone.trim() ? `${countryCode}${digitsOnly}` : "";
      await fetch("https://services.leadconnectorhq.com/hooks/qvrffYnI0Fqoxdb3R9bn/webhook-trigger/72a32c67-0fd7-452c-92d9-a43788835001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          email,
          phone: phoneValue,
          score,
          answers,
          scoreByStep,
          main_leak: mainLeak,
          audit_segment: auditSegment,
          quiz_responses: quizResponses,
          status: "Quiz_Completado",
          tag: "VOS_Quiz_Completado",
        }),
      });
    } catch {
      // allow results even if webhook fails
    } finally {
      setStep("loading");
      setTimeout(() => {
        setStep("results");
        window.localStorage.setItem("vosDiagnosed", "true");
      }, 2000);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (step === "results" && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  return (
    <>
      <section
        id="auditoria-vos"
        className="py-[140px] bg-[#000000] scroll-mt-24 vos-auditor-target"
      >
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
              <span className="text-xs text-white/60 font-mono uppercase tracking-widest">
                {step === "results"
                  ? "REPORTE GENERADO"
                  : `${String(Math.min(stepIndex + 1, totalSteps)).padStart(2, "0")} / ${String(
                      totalSteps
                    ).padStart(2, "0")}`}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {step === "loading" && (
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
                    Analizando infraestructura...
                  </p>
                </motion.div>
              )}

              {step === "quiz" && (
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
                    {currentStep.options.map((option) => {
                      const isSelected = answers[stepIndex] === option.value;
                      return (
                      <button
                        key={option.label}
                        onClick={() => handleSelect(option.value)}
                        className={`min-h-[48px] text-left px-5 py-4 rounded-2xl border bg-white/[0.02] text-white/80 transition-all duration-300 hover:text-white hover:border-orange-500 hover:shadow-[0_0_24px_rgba(255,140,0,0.2)] ${
                          isSelected ? "border-orange-500 text-white shadow-[0_0_24px_rgba(255,140,0,0.25)]" : "border-white/10"
                        }`}
                      >
                        {option.label}
                      </button>
                      );
                    })}
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
                    <div className="grid grid-cols-1 gap-4">
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#FF8C00] outline-none text-white py-3 text-base"
                      />
                      {nameError ? (
                        <p className="text-xs text-red-400 -mt-2">{nameError}</p>
                      ) : null}
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className={`w-full bg-transparent border-b border-white/20 focus:border-[#FF8C00] outline-none text-white py-3 text-base ${
                        shakeEmail ? "vos-shake border-red-400" : ""
                      }`}
                    />
                    {emailError ? (
                      <p className="text-xs text-red-400 mt-2">{emailError}</p>
                    ) : null}
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                        <select
                          value={countryCode}
                          onChange={(event) => setCountryCode(event.target.value)}
                          className="bg-transparent border-b border-white/20 focus:border-[#FF8C00] text-white/80 py-3 outline-none"
                        >
                          <option value="+57">+57 CO</option>
                          <option value="+52">+52 MX</option>
                          <option value="+54">+54 AR</option>
                          <option value="+56">+56 CL</option>
                          <option value="+51">+51 PE</option>
                          <option value="+593">+593 EC</option>
                          <option value="+58">+58 VE</option>
                          <option value="+598">+598 UY</option>
                          <option value="+595">+595 PY</option>
                          <option value="+34">+34 ES</option>
                          <option value="+1">+1 US</option>
                          <option value="+44">+44 UK</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="WhatsApp / Teléfono (opcional)"
                          value={phone}
                          onChange={(event) => {
                            const digits = event.target.value.replace(/\D/g, "");
                            const formatted = digits.replace(/(\d{3})(?=\d)/g, "$1 ");
                            setPhone(formatted.trim());
                          }}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#FF8C00] outline-none text-white py-3 text-base"
                        />
                      </div>
                      {phoneError ? (
                        <p className="text-xs text-red-400 -mt-2">{phoneError}</p>
                      ) : null}
                      <p className="text-xs text-white/50">
                        Déjanos tu WhatsApp para recibir alertas técnicas si tu Score cae por debajo del 30%.
                      </p>
                    </div>
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

              {step === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div ref={resultsRef}>
                    <VOSResultsDashboard score={score} findings={findings} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .vos-auditor-target:target {
          animation: vos-focus 0.6s ease-out;
        }
        @keyframes vos-focus {
          0% {
            transform: scale(1);
          }
          60% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes vos-shake {
          0%,
          100% {
            transform: translateX(0);
          }
        20% {
          transform: translateX(-6px);
        }
        40% {
          transform: translateX(6px);
        }
        60% {
          transform: translateX(-4px);
        }
        80% {
          transform: translateX(4px);
        }
      }
      .vos-shake {
        animation: vos-shake 0.45s ease-in-out;
      }
    `}</style>
    </>
  );
}
