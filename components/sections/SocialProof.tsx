"use client";
import { motion } from "framer-motion";

const logos = [
  { name: "Empresa 1", label: "LOGOTIPO A" },
  { name: "Empresa 2", label: "LOGOTIPO B" },
  { name: "Empresa 3", label: "LOGOTIPO C" },
  { name: "Empresa 4", label: "LOGOTIPO D" },
  { name: "Empresa 5", label: "LOGOTIPO E" },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-slate-900 bg-slate-950/50 overflow-hidden">
      <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-widest">
        Empresas que confían en nuestro sistema de adquisición
      </p>
      <div className="flex w-full">
        <motion.div 
          className="flex flex-nowrap gap-12 min-w-full"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center w-40 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-xl font-bold text-slate-300">{logo.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}