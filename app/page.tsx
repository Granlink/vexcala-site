import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import NotAgency from "@/components/sections/NotAgency";
import System from "@/components/sections/System";
import Fit from "@/components/sections/Fit";
import Impact from "@/components/sections/Impact";
import Process from "@/components/sections/Process";
import Apply from "@/components/sections/Apply";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Sección de Impacto Inicial */}
     <main>
  <Hero />
  <Problem />
  <NotAgency />
  <System />
  <Fit />
  <Impact />
  <Process />
  <Apply />
  <FinalCTA />
  <FAQ />
  <Footer />
</main>
    </>
  );
}