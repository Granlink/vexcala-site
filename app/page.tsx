import Hero from "@/components/sections/Hero";
import QualifyingForm from "@/components/sections/QualifyingForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <div id="apply" className="py-20">
        <QualifyingForm />
      </div>
      {/* Próxima sección: Testimonios/Logos */}
    </main>
  );
}