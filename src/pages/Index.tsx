
import { useState } from "react";
import { AINavigator } from "@/components/AINavigator";
import { PersonalizedHero } from "@/components/PersonalizedHero";
import { Services } from "@/components/Services";
import { Vision } from "@/components/Vision";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [solution, setSolution] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Navigation />
      <AINavigator onSolutionFound={setSolution} />
      <PersonalizedHero solution={solution} />
      <Vision />
      <Services />
      <Founder />
      <Contact />
    </div>
  );
};

export default Index;
