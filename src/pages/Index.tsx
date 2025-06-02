
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Vision } from "@/components/Vision";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <Vision />
      <Services />
      <Founder />
      <Contact />
    </div>
  );
};

export default Index;
