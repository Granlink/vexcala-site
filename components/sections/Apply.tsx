"use client";
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Apply() {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: []
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, submitting: true });
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Reemplaza 'TU_ID_DE_FORMSPREE' por el ID que te den al crear el formulario
    const response = await fetch("https://formspree.io/f/xzdgqzrd", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setState({ submitting: false, succeeded: true, errors: [] });
    } else {
      setState({ ...state, submitting: false, succeeded: false });
      alert("Hubo un error al enviar. Por favor intenta por WhatsApp.");
    }
  };

  if (state.succeeded) {
    return (
      <section id="apply" className="py-24 bg-slate-950 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto p-12 rounded-3xl border border-blue-500/30 bg-blue-500/5">
            <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Aplicación Recibida</h2>
            <p className="text-slate-400">Revisamos personalmente cada aplicación. Si el sistema encaja, te contactaremos.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/20 p-8 md:p-12 rounded-3xl border border-slate-800">
            {/* IMPORTANTE: Cada input DEBE tener el atributo 'name' para que Formspree lo reconozca */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                <input name="nombre" required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Empresa</label>
                <input name="empresa" required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input name="email" required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">WhatsApp</label>
                <input name="whatsapp" required type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Rol en la decisión</label>
              <select name="rol" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500">
                <option value="decisor">Decisor final</option>
                <option value="participo">Participo en la decisión</option>
                <option value="evaluo">Evaluando internamente</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {state.submitting ? "Enviando..." : "Enviar Aplicación"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}