import { useState } from "react";
import { AINavigator } from "@/components/AINavigator";
import { SolutionPortal } from "@/components/SolutionPortal";
import { Navigation } from "@/components/Navigation";

const Homepage = () => {
  const [solution, setSolution] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Persistent Top Navigation */}
      <Navigation />
      
      {/* Main Content Area */}
      <div className="flex-1 pt-20"> {/* pt-20 to account for fixed nav height */}
        {!solution ? (
          <AINavigator onSolutionFound={setSolution} />
        ) : (
          <SolutionPortal solution={solution} onBack={() => setSolution(null)} />
        )}
      </div>
      
      {/* Persistent Bottom Navigation */}
      <footer className="bg-slate-900 text-white py-4 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 CrowdLogic. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;