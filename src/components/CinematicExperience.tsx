import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Panel {
  id: string;
  title: string;
  description: string;
  headline: string;
  cta: string;
}

const panels: Panel[] = [
  {
    id: "escapade",
    title: "The Human Experience",
    headline: "End Group Chat Chaos",
    description: "Transform how your team coordinates complex events and travel with intuitive, beautiful interfaces that actually make planning enjoyable.",
    cta: "Explore escapade"
  },
  {
    id: "kito",
    title: "The Professional Network",
    headline: "Your Experience is Your Superpower",
    description: "Connect with seasoned professionals who bring decades of event expertise to your most important projects.",
    cta: "Join KITO Agency"
  },
  {
    id: "eventaxis",
    title: "The Command Center",
    headline: "Your Campaign's Control Tower",
    description: "Real-time analytics and campaign management tools that give you complete visibility into every aspect of your events.",
    cta: "Access EventAxis"
  },
  {
    id: "vibepass",
    title: "The Audience Connection",
    headline: "Know What Your Audience Truly Loves",
    description: "Advanced sentiment analysis and engagement tracking that reveals the true impact of your events and campaigns.",
    cta: "Discover VibePass"
  }
];

export const CinematicExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);

  useEffect(() => {
    if (!containerRef.current || !phoneRef.current || !ecosystemRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(ecosystemRef.current, { opacity: 0 });
      
      // Scroll-triggered fly-through animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (progress < 0.5) {
            // Phone rotation and scaling phase
            gsap.set(phoneRef.current, {
              rotationY: progress * 180,
              scale: 1 + progress * 2,
              z: progress * 500
            });
          } else {
            // Fly-through and ecosystem reveal phase
            const flyProgress = (progress - 0.5) * 2;
            gsap.set(phoneRef.current, {
              scale: 3 + flyProgress * 10,
              opacity: 1 - flyProgress,
              filter: `blur(${flyProgress * 20}px)`
            });
            gsap.set(ecosystemRef.current, {
              opacity: flyProgress
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePanelClick = (panel: Panel) => {
    setSelectedPanel(panel);
  };

  const handleClosePanel = () => {
    setSelectedPanel(null);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Initial Scene - Phone Mockup */}
      <section className="h-screen w-full relative flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
        <div
          ref={phoneRef}
          className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] border-8 border-gray-700 relative shadow-2xl"
          style={{ transform: "perspective(1000px)" }}
        >
          {/* Phone Screen */}
          <div className="absolute inset-4 bg-black rounded-[2rem] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-2">escapade</div>
                <div className="text-sm opacity-75">Event Planning Reimagined</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Spacer for Animation */}
      <div className="h-screen" />

      {/* Ecosystem Reveal */}
      <section 
        ref={ecosystemRef}
        className="min-h-screen w-full relative flex items-center justify-center p-8"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        {!selectedPanel ? (
          <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
            {panels.map((panel) => (
              <div
                key={panel.id}
                onClick={() => handlePanelClick(panel)}
                className="bg-card/10 border border-border/20 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:bg-card/20 hover:border-emerald/30 hover:shadow-lg hover:shadow-emerald/10"
              >
                <h3 className="font-crimson text-2xl text-white mb-2">
                  {panel.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Click to explore
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl w-full bg-card/10 border border-border/20 rounded-lg p-12 relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClosePanel}
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
            
            <div className="space-y-6">
              <div>
                <h2 className="font-crimson text-4xl text-white mb-2">
                  {selectedPanel.headline}
                </h2>
                <h3 className="font-crimson text-xl text-emerald mb-4">
                  {selectedPanel.title}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedPanel.description}
              </p>
              
              <div className="flex gap-4 pt-6">
                <Button variant="outline" className="bg-background/10 border-border/50 text-white hover:bg-background/20">
                  Ask a question
                </Button>
                <Button className="bg-emerald text-white hover:bg-emerald/90">
                  {selectedPanel.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};