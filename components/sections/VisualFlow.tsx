"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const metrics = [
  {
    value: 85,
    prefix: "+",
    suffix: "%",
    decimals: 0,
    label: "De efectividad en el filtrado de prospectos."
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    decimals: 0,
    label: "Operación autónoma de captación y agendamiento."
  },
  {
    value: 3.5,
    prefix: "",
    suffix: "x",
    decimals: 1,
    label: "Promedio de incremento en el ROAS de nuestros clientes."
  }
];

export default function VisualFlow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const start = performance.now();
        const duration = 1200;

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCounts(metrics.map((metric) => metric.value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6px", "6px"]);

  return (
    <section
      id="section-proof"
      ref={sectionRef}
      className="py-[180px] bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-6 right-12 w-[520px] h-[260px] bg-[#FF8C00]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#FF8C00] text-[11px] font-black tracking-[0.3em] uppercase">
            EVIDENCIA DEL SISTEMA
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Del Caos Operativo a la Manufactura de Citas.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">
            No teorizamos sobre marketing. Instalamos infraestructuras que producen resultados predecibles, visibles y auditables en tiempo real.
          </p>
        </div>

        <motion.div
          ref={metricsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {metrics.map((metric, index) => {
            const current = counts[index];
            const formatted = metric.decimals
              ? current.toFixed(metric.decimals)
              : Math.round(current).toString();
            return (
              <div
                key={metric.label}
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-6 text-center transition-all duration-300 hover:border-[#FF8C00]/50"
              >
                <div className="text-4xl md:text-5xl font-black text-white">
                  {metric.prefix}
                  {formatted}
                  {metric.suffix}
                </div>
                <p className="text-slate-400 text-sm mt-3">{metric.label}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <figure className="md:col-span-3 bg-white/[0.02] border border-[#FF8C00]/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(255,140,0,0.12)] transition-all duration-300 hover:border-[#FF8C00]/50">
            <div className="relative h-56 md:h-64 rounded-xl border border-white/5 hover:border-[#FF8C00]/20 transition-colors bg-black/60 backdrop-blur-sm overflow-hidden">
              <Image
                src="/proof/agenda.png"
                alt=""
                fill
                className="object-cover scale-110 blur-[18px] opacity-60"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60" />
              <Image
                src="/proof/agenda.png"
                alt="Saturación de agenda con perfiles calificados"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
            <figcaption className="text-slate-400 text-sm mt-4">
              Saturación de agenda con perfiles calificados.
            </figcaption>
          </figure>
          <figure className="md:col-span-3 bg-white/[0.02] border border-[#FF8C00]/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(255,140,0,0.12)] transition-all duration-300 hover:border-[#FF8C00]/50">
            <motion.div style={{ y: parallaxY }}>
              <div className="relative h-56 md:h-64 rounded-xl border border-white/5 hover:border-[#FF8C00]/20 transition-colors bg-black/60 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/proof/trazabilidad.png"
                  alt=""
                  fill
                  className="object-cover scale-110 blur-[18px] opacity-60"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60" />
                <Image
                  src="/proof/trazabilidad.png"
                  alt="Trazabilidad total desde el clic hasta el cierre"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>
            </motion.div>
            <figcaption className="text-slate-400 text-sm mt-4">
              Trazabilidad total desde el clic hasta el cierre.
            </figcaption>
          </figure>
          <figure className="md:col-span-6 bg-white/[0.02] border border-[#FF8C00]/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(255,140,0,0.12)] transition-all duration-300 hover:border-[#FF8C00]/50">
            <div className="relative h-64 md:h-72 rounded-xl border border-white/5 hover:border-[#FF8C00]/20 transition-colors bg-black/60 backdrop-blur-sm overflow-hidden">
              <Image
                src="/proof/interaccion.png"
                alt=""
                fill
                className="object-cover scale-110 blur-[18px] opacity-60"
                sizes="100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60" />
              <Image
                src="/proof/interaccion.png"
                alt="Interacción inteligente y cierre de objeciones en tiempo real"
                fill
                className="object-contain"
                sizes="100vw"
                priority={false}
              />
            </div>
            <figcaption className="text-slate-400 text-sm mt-4">
              Interacción inteligente y cierre de objeciones en tiempo real.
            </figcaption>
          </figure>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <button className="px-5 py-2 border border-white/20 hover:border-white/40 text-white/80 text-xs font-semibold uppercase tracking-widest rounded-lg transition-all bg-transparent">
            Ver casos de estudio
          </button>
        </div>
      </div>
    </section>
  );
}
