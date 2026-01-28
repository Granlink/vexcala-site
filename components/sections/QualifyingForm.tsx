"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  revenue: z.string().min(1, "Selecciona una opción"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(8, "Mínimo 8 dígitos"),
});

type FormData = z.infer<typeof formSchema>;

export default function QualifyingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Usamos una función estándar de manejo para evitar líos con el compilador
  const handleNavigation = (revenue: string) => {
    if (revenue === "less_10k") {
      alert("En breve recibirás nuestra guía de escalado en tu email.");
    } else {
      // Usamos replace para evitar el error de mutación directa si persiste
      window.location.assign("https://calendly.com/vexcala/sesion");
    }
  };

  const onSubmit = (data: FormData) => {
    handleNavigation(data.revenue);
  };

  return (
    <section id="apply" className="py-20 bg-slate-900/50 rounded-3xl border border-slate-800 p-8 max-w-xl mx-auto shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Verifica tu Elegibilidad</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-300">¿Facturación mensual?</label>
          <select 
            {...register("revenue")} 
            className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-blue-500"
          >
            <option value="">Seleccionar...</option>
            <option value="less_10k">Menos de $10,000 USD</option>
            <option value="10k_50k">$10,000 - $50,000 USD</option>
            <option value="50k_plus">Más de $50,000 USD</option>
          </select>
          {errors.revenue && <p className="text-red-500 text-xs mt-2">{errors.revenue.message}</p>}
        </div>

        <input 
          {...register("email")} 
          placeholder="Email corporativo" 
          className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white focus:border-blue-500 outline-none"
        />
        {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}

        <input 
          {...register("whatsapp")} 
          placeholder="WhatsApp" 
          className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white focus:border-blue-500 outline-none"
        />
        {errors.whatsapp && <p className="text-red-500 text-xs mt-2">{errors.whatsapp.message}</p>}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95">
          Verificar Disponibilidad
        </button>
      </form>
    </section>
  );
}