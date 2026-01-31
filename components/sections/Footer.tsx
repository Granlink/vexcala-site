import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            {/* Bloque de Confianza */}
            <div>
              <h3 className="text-white font-bold mb-4 tracking-tighter text-xl">
                VEXCALA<span className="text-blue-500">.</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                La información compartida se usa únicamente para evaluar si el sistema encaja. 
                No compartimos datos ni enviamos spam. Privacidad y criterio por encima de todo.
              </p>
            </div>

            {/* Bloque Legal / Disclaimer */}
            <div className="md:text-right">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
                Disclaimer Estratégico
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed italic ml-auto max-w-md">
                VEXCALA no garantiza resultados específicos. Los resultados dependen de múltiples factores, 
                incluyendo el modelo de negocio, el mercado y la correcta implementación por parte del cliente. 
                El crecimiento es una ciencia de probabilidades, no de magia.
              </p>
            </div>
          </div>

          {/* Línea Final */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest">
              © {currentYear} VEXCALA. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-blue-500 transition-colors">Aviso de Privacidad</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}