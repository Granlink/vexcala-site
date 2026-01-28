"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  revenue: z.enum(["less_10k", "10k_50k", "50k_plus"], {
    required_error: "Selecciona un rango de facturación",
    invalid_type_error: "Selecciona una opción válida",
  }),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(8, "Número incompleto"),
});

export default function QualifyingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    if (data.revenue === "less_10k") {
      alert("No cumples el perfil mínimo, pero te enviaremos una guía gratuita.");
      // Redirigir a Lead Magnet
    } else {
      // Redirigir a Calendly
      window.location.href = "https://calendly.com/vexcala/sesion";
    }
  };

  return (
    <section className="py-20 bg-slate-900 rounded-2xl border border-slate-800 p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Aplica para tu Departamento de Adquisición</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-2 text-slate-400">¿Cuánto factura tu negocio mensualmente?</label>
          <select {...register("revenue")} className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-white">
            <option value="">Seleccionar...</option>
            <option value="less_10k">Menos de $10,000 USD</option>
            <option value="10k_50k">$10,000 - $50,000 USD</option>
            <option value="50k_plus">Más de $50,000 USD</option>
          </select>
          {errors.revenue && <p className="text-red-500 text-xs mt-1">{errors.revenue.message as string}</p>}
        </div>
        <input {...register("email")} placeholder="Email corporativo" className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg" />
        <input {...register("whatsapp")} placeholder="WhatsApp (con código de país)" className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all">
          Verificar Disponibilidad
        </button>
      </form>
    </section>
  );
}