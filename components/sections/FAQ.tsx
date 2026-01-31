"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Esto es marketing?",
    answer: "No en el sentido tradicional. No gestionamos redes sociales ni creamos contenido vacío. Implementamos infraestructura comercial (sistemas de adquisición, calificación y conversión) para que el marketing se transforme en ingresos predecibles."
  },
  {
    question: "¿Incluye publicidad paga?",
    answer: "Diseñamos la estrategia y la arquitectura de los anuncios como parte del Demand Architecture™, pero la inversión publicitaria es gestionada bajo nuestra supervisión para asegurar que alimente el sistema correctamente."
  },
  {
    question: "¿Garantizan resultados?",
    answer: "Garantizamos la instalación de una infraestructura funcional y probada. Los resultados dependen de la combinación de nuestro sistema y la calidad de tu oferta/producto. No vendemos fórmulas mágicas, vendemos ingeniería de ventas."
  },
  {
    question: "¿Necesito un closer de ventas?",
    answer: "El sistema está diseñado para entregar prospectos altamente calificados. Dependiendo de tu volumen, el sistema puede ser operado por ti o por un equipo comercial. Te ayudamos a decidir cuál es la mejor estructura según tu etapa."
  },
  {
    question: "¿Cuánto tarda en funcionar?",
    answer: "La fase de diagnóstico e instalación suele tomar entre 2 y 4 semanas. Una vez activo, el sistema empieza a generar datos y prospectos de inmediato, optimizándose durante los primeros 90 días."
  },
  {
    question: "¿Qué pasa si no soy el decisor final?",
    answer: "Nuestra infraestructura requiere cambios estructurales en el proceso comercial. Si no eres el decisor, te recomendamos que el perfil con autoridad participe desde la primera llamada estratégica para evitar bloqueos en la implementación."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-800 rounded-2xl bg-slate-900/20 overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-900/40 transition-colors"
                >
                  <span className="text-lg font-medium text-slate-200">{faq.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="w-5 h-5 text-blue-500" /> : 
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  }
                </button>
                
                <div className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-slate-400 leading-relaxed italic">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}