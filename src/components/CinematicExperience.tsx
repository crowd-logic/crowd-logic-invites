import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Panel {
  id: string;
  title: string;
  description: string;
  headline: string;
  cta: string;
}

const panels: Panel[] = [
  {
    id: "vibepass",
    title: "VibePass",
    headline: "Exclusive Access",
    description: "Advanced sentiment analysis and engagement tracking that reveals the true impact of your events and campaigns.",
    cta: "Discover VibePass"
  },
  {
    id: "kito",
    title: "The KITO Agency",
    headline: "Professional Excellence",
    description: "Connect with seasoned professionals who bring decades of event expertise to your most important projects.",
    cta: "Join KITO Agency"
  },
  {
    id: "growth",
    title: "Growth",
    headline: "Strategic Expansion",
    description: "Transform how your team coordinates complex events and travel with intuitive, beautiful interfaces that scale with your ambitions.",
    cta: "Explore Growth"
  },
  {
    id: "future",
    title: "Future Vision",
    headline: "Tomorrow's Solutions",
    description: "Real-time analytics and campaign management tools that give you complete visibility into every aspect of your events.",
    cta: "See the Future"
  }
];

export const CinematicExperience = () => {
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [panelsLoaded, setPanelsLoaded] = useState(false);

  useEffect(() => {
    // Trigger panel animations on load
    setTimeout(() => setPanelsLoaded(true), 100);
  }, []);

  const handlePanelClick = (panel: Panel) => {
    setSelectedPanel(panel);
  };

  const handleClosePanel = () => {
    setSelectedPanel(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Formspree action
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2A4066', color: '#E27D60' }}>
      <div className="text-center py-8">
        <h1 className="font-crimson text-4xl text-white mb-4">accesscrowdlogic.com</h1>
        <p className="text-lg opacity-75">CrowdLogic's Digital Business Card</p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 max-w-4xl mx-auto">
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            id={panel.id}
            className={`panel h-48 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-500 hover:scale-105 ${
              panelsLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ 
              background: 'rgba(226, 125, 96, 0.8)',
              transitionDelay: `${index * 200}ms`
            }}
            onClick={() => handlePanelClick(panel)}
          >
            <h3 className="font-crimson text-xl text-center font-semibold">
              {panel.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <form 
        action="https://formspree.io/f/your-endpoint" 
        method="POST" 
        onSubmit={handleFormSubmit}
        className="max-w-md mx-auto p-8 rounded-lg my-8"
        style={{ background: 'rgba(42, 64, 102, 0.8)' }}
      >
        <h3 className="font-crimson text-2xl text-white mb-4 text-center">Connect</h3>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mb-4 bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="mb-4 bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
        <Button 
          type="submit"
          className="w-full"
          style={{ background: '#E27D60', color: '#2A4066' }}
        >
          Connect
        </Button>
      </form>

      {/* Expanded Panel Modal */}
      {selectedPanel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full bg-card rounded-lg p-8 relative" style={{ background: '#2A4066' }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClosePanel}
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              ×
            </Button>
            
            <div className="space-y-6">
              <div>
                <h2 className="font-crimson text-3xl text-white mb-2">
                  {selectedPanel.headline}
                </h2>
                <h3 className="font-crimson text-xl mb-4" style={{ color: '#E27D60' }}>
                  {selectedPanel.title}
                </h3>
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed">
                {selectedPanel.description}
              </p>
              
              <div className="flex gap-4 pt-6">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Ask a question
                </Button>
                <Button 
                  className="text-white hover:opacity-90"
                  style={{ background: '#E27D60' }}
                >
                  {selectedPanel.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};