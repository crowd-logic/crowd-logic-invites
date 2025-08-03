import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { DossierLayout, DossierCard, ServiceIcon } from "@/components/dossier";

const EscapadeDossier = () => {
  return (
    <DossierLayout
      gradientClass="gradient-escapade"
      title="End Group Chat Chaos."
      subtitle="It starts with a simple, human experience. Escapade is our live, working app that turns the messy, frustrating process of planning a group trip into a fun, collaborative adventure. It's the soul of our system."
      icon={
        <ServiceIcon size="xl">
          <Compass className="w-full h-full" />
        </ServiceIcon>
      }
    >
      {/* Product Showcase */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <DossierCard className="max-w-4xl mx-auto" delay={0.7}>
          <div className="product-showcase-escapade h-96 md:h-[500px] w-full rounded-lg overflow-hidden relative">
            {/* Placeholder for the looping video */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-emerald/20 to-accent-emerald/40 flex items-center justify-center"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Compass className="w-12 h-12 text-accent-emerald" />
                </motion.div>
                <p className="dossier-caption text-muted-foreground">
                  Interactive Escapade Demo
                </p>
                <p className="dossier-body text-sm mt-2 max-w-md mx-auto">
                  Experience how our app transforms chaotic group planning into seamless collaboration
                </p>
              </div>
            </div>
            
            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-accent-emerald/20 backdrop-blur-sm rounded-full">
                <span className="dossier-caption text-accent-emerald">Live App</span>
              </div>
            </div>
          </div>
        </DossierCard>
      </motion.div>

      {/* Key Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <DossierCard delay={0.9}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent-emerald rounded-full emerald-glow" />
            </div>
            <h3 className="dossier-section-title text-lg mb-3">Real-Time Sync</h3>
            <p className="dossier-body text-sm">
              Everyone stays updated instantly. No more endless message threads or missed decisions.
            </p>
          </div>
        </DossierCard>

        <DossierCard delay={1.0}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent-emerald rounded-full emerald-glow" />
            </div>
            <h3 className="dossier-section-title text-lg mb-3">Smart Suggestions</h3>
            <p className="dossier-body text-sm">
              AI-powered recommendations that understand your group's preferences and constraints.
            </p>
          </div>
        </DossierCard>

        <DossierCard delay={1.1}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent-emerald rounded-full emerald-glow" />
            </div>
            <h3 className="dossier-section-title text-lg mb-3">Collaborative Flow</h3>
            <p className="dossier-body text-sm">
              From chaos to clarity. Every decision becomes a shared adventure, not a source of stress.
            </p>
          </div>
        </DossierCard>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.a
          href="https://escapadeapp.accesscrowdlogic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-emerald to-emerald-glow text-background font-semibold rounded-lg architect-transition hover:scale-105 emerald-glow-strong"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Compass className="w-5 h-5 mr-2" />
          Try the Live App
        </motion.a>
        
        <p className="dossier-caption mt-4 text-muted-foreground">
          Experience the future of group planning today
        </p>
      </motion.div>
    </DossierLayout>
  );
};

export default EscapadeDossier;