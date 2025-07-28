import { useState, useEffect } from "react";
import { DualPathHero } from "@/components/DualPathHero";
import { ContentLibrary } from "@/components/ContentLibrary";
import { Navigation } from "@/components/Navigation";

const Homepage = () => {
  const [solution, setSolution] = useState<any>(null);
  const [initialPersona, setInitialPersona] = useState<string | null>(null);

  // Check for URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const persona = urlParams.get('persona');
    if (persona) {
      setInitialPersona(persona);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Persistent Top Navigation */}
      <Navigation />
      
      {/* Dual-Path Hero Section */}
      <DualPathHero 
        onSolutionFound={setSolution} 
        initialPersona={initialPersona}
      />
      
      {/* Content Library */}
      <ContentLibrary />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CrowdLogic</h3>
              <p className="text-sm text-gray-400">
                Transforming experiences through innovative solutions
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#personal-planners" className="hover:text-white transition-colors">escapade</a></li>
                <li><a href="#brand-managers" className="hover:text-white transition-colors">Event Axis</a></li>
                <li><a href="#event-professionals" className="hover:text-white transition-colors">VibePass</a></li>
                <li><a href="#event-professionals" className="hover:text-white transition-colors">KITO Agency</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#personal-planners" className="hover:text-white transition-colors">Personal Planning</a></li>
                <li><a href="#brand-managers" className="hover:text-white transition-colors">Brand Management</a></li>
                <li><a href="#event-professionals" className="hover:text-white transition-colors">Event Operations</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 CrowdLogic. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;