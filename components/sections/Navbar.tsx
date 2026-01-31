"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo con peso visual de autoridad */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          VEXCALA<span className="text-blue-600">.</span>
        </Link>

        {/* Navegación Semántica */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#system" className="hover:text-white transition-colors">Sistema</Link>
          <Link href="#fit" className="hover:text-white transition-colors">Para quién</Link>
          <Link href="#process" className="hover:text-white transition-colors">Proceso</Link>
          
          {/* CTA Primario en Header */}
          <Link 
            href="#apply" 
            className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-semibold hover:bg-slate-200 transition-all active:scale-95"
          >
            Agendar llamada estratégica
          </Link>
        </div>
      </div>
    </nav>
  );
}