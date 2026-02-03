"use client";

import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo (Izq) */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-1.5 rounded-[4px] bg-[#FF8C00]">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <span className="text-white font-black tracking-tighter text-2xl uppercase">
            VEXCALA
          </span>
        </div>

        {/* Menú ancla (Centro) */}
        <div className="hidden md:flex items-center gap-10">
            {[
              { name: "El Sistema", href: "#section-hero" },
              { name: "Para quién es", href: "#section-qualification" },
              { name: "FAQ", href: "#section-faq" }
            ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botón Ghost (Der) */}
        <button className="px-6 py-2 border border-white/20 hover:border-white text-white text-sm font-medium uppercase tracking-widest rounded-[8px] transition-all bg-transparent">
          Acceso Clientes
        </button>

      </div>
    </nav>
  );
}
