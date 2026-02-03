import Hero from "@/components/sections/Hero";
import Thesis from "@/components/sections/Thesis";
import Mechanism from "@/components/sections/Mechanism";
import VisualFlow from "@/components/sections/VisualFlow";
import QualificationGrid from "@/components/sections/QualificationGrid";
import VOSAuditor from "@/components/sections/VOSAuditor";
import DynamicFAQ from "@/components/sections/DynamicFAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#000000] min-h-screen selection:bg-[#FF8C00]/30 text-white">
      <main className="flex flex-col bg-[#000000]">
        <Hero />
        <Thesis />
        <Mechanism />
        <VisualFlow />
        <QualificationGrid />
        <VOSAuditor />
        <DynamicFAQ userHasFinishedQuiz={false} />
        <Footer />
      </main>
    </div>
  );
}
