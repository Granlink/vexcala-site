import React from 'react';
import { XCircle } from 'lucide-react'; // Eliminamos AlertCircle porque no se usa

const pains = [
  "Las ventas suben y bajan sin una razón clara",
  "Llegan prospectos, pero pocos están listos para comprar",
  "Se pierde tiempo con personas que no encajan",
  "El seguimiento es inconsistente o inexistente",
  "El crecimiento depende demasiado del dueño",
  "Se invierte en marketing sin control real del proceso",
  "Cada mes se &quot;empieza de nuevo&quot;" // Escapamos las comillas aquí
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header de la Sección */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              El problema no es que a tu negocio le falte marketing. <br />
              <span className="text-slate-500 italic">El problema es que no tiene un sistema de ventas.</span>
            </h2>
            <div className="space-y-4 text-xl text-slate-400">
              <p>Muchos negocios venden. Algunos incluso venden bien.</p>
              <p>
                El problema es que la mayoría no puede repetir los resultados y depende 
                demasiado del esfuerzo manual, del dueño o de la suerte.
              </p>
            </div>
          </div>

          {/* Lista de Dolor (Bullets) */}
          <div className="grid md:grid-cols-1 gap-4 mb-16">
            {pains.map((pain, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/30 hover:border-red-900/30 transition-colors"
              >
                <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                <span className="text-slate-200 text-lg" dangerouslySetInnerHTML={{ __html: pain }} />
              </div>
            ))}
          </div>

          {/* Cierre de Sección */}
          <div className="p-8 rounded-2xl bg-blue-600/5 border border-blue-500/20 text-center">
            <p className="text-xl md:text-2xl font-medium text-white italic">
              &quot;Eso no es un problema de esfuerzo. Es un problema de estructura. <br className="hidden md:block" />
              Y la estructura se diseña, no se improvisa.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}