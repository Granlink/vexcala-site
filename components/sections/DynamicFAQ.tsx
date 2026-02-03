"use client";

import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  userHasFinishedQuiz: boolean;
  variant?: "explore" | "conversion";
};

const explorationFaqs: FAQItem[] = [
  {
    question: "¿Es Vexcala una agencia de marketing?",
    answer:
      "No. Somos una firma de ingeniería comercial. Mientras las agencias se enfocan en clics, nosotros nos enfocamos en la infraestructura que convierte esos clics en capital.",
  },
  {
    question: "¿Necesito tener un CRM o software previo?",
    answer:
      "No. Nosotros diseñamos la arquitectura técnica desde cero o auditamos y optimizamos la que ya tienes para que funcione bajo el estándar VOS.",
  },
  {
    question: "¿Para qué modelos de negocio funciona?",
    answer:
      "Está diseñado para negocios de servicios de alto ticket, consultoras e infoproductores que ya validaron su oferta y buscan escalabilidad.",
  },
];

const conversionFaqs: FAQItem[] = [
  {
    question: "Mi Score fue bajo, ¿qué significa?",
    answer:
      "Significa que tienes fugas de capital críticas. Es el escenario ideal para implementar VOS, ya que el impacto en tus ingresos será inmediato al tapar esos huecos.",
  },
  {
    question: "¿La Auditoría de Implementación tiene costo?",
    answer:
      "No. Es una sesión técnica gratuita de 15 minutos para validar si tu operación es apta para el sistema.",
  },
  {
    question: "¿Qué pasa si no agendo ahora?",
    answer:
      "Tu diagnóstico se guardará por 48 horas. Sin embargo, los cupos para la implementación mensual son limitados para garantizar la calidad de la ingeniería.",
  },
];

export default function DynamicFAQ({ userHasFinishedQuiz, variant = "explore" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  const items = variant === "conversion" ? conversionFaqs : explorationFaqs;

  const jsonLd = useMemo(() => {
    if (variant !== "explore") return "";
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: explorationFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    return JSON.stringify(data);
  }, [variant]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
    if (!userHasFinishedQuiz && variant === "explore") {
      setShowBanner(true);
    }
  };

  return (
    <section
      id={variant === "explore" ? "section-faq" : undefined}
      className={variant === "explore" ? "py-[120px] bg-[#000000]" : ""}
    >
      {variant === "explore" && (
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#FF8C00] text-[11px] font-bold tracking-[0.3em] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
              Resuelve tus dudas antes de avanzar
            </h2>
          </div>
        </div>
      )}

      <div
        className={
          variant === "explore"
            ? "max-w-5xl mx-auto px-6"
            : "border border-orange-500/20 rounded-2xl p-6 bg-white/[0.02]"
        }
      >
        {variant === "conversion" && (
          <div className="text-white text-sm font-semibold mb-4">
            Preguntas sobre tu Diagnóstico
          </div>
        )}

        <div className="divide-y divide-white/10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-4">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between text-left text-white/90 font-medium"
                >
                  <span>{item.question}</span>
                  <Plus
                    className={`h-4 w-4 text-white/60 transition-transform ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-white/70 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showBanner && variant === "explore" && (
          <div className="mt-6 border border-white/10 rounded-xl p-4 text-sm text-white/80 bg-white/[0.02]">
            ¿Quieres respuestas personalizadas? Realiza el Auditor VOS{" "}
            <a href="#section-auditor" className="text-[#FF8C00] underline">
              aquí
            </a>
            .
          </div>
        )}
      </div>

      {variant === "explore" && jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </section>
  );
}
