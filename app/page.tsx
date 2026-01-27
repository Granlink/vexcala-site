// Si usas el alias @/ que configuramos en tsconfig.json
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import QualifyingForm from "@/components/sections/QualifyingForm";
import ValueProps from "@/components/sections/ValueProps";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <SocialProof />
      <div id="apply">
        <QualifyingForm />
      </div>
      <ValueProps />
    </main>
  );
}