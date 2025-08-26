import React, { useState, useEffect } from "react";
import ScenarioHero from "@/components/marketing/ScenarioHero";
import FeatureCard from "@/components/marketing/FeatureCard";
import PlanCard from "@/components/marketing/PlanCard";
import AddonCard from "@/components/marketing/AddonCard";
import HowItWorks from "@/components/marketing/HowItWorks";
import Testimonials from "@/components/marketing/Testimonials";
import CTASection from "@/components/marketing/CTASection";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";
import ProgressBar from "@/components/marketing/ProgressBar";
import FloatingCTA from "@/components/marketing/FloatingCTA";
import MobileOrganizer from "@/components/marketing/MobileOrganizer";
import { MapPin, Users, Megaphone, Timer, QrCode, ChatCircle, Stack, Eye, DeviceMobile } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MarketingOrganizerPage() {
  const [demoProgress, setDemoProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    // Simulate demo progress for demonstration
    const timer = setTimeout(() => {
      setDemoProgress(0.7);
      setShowFloatingCTA(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Navigation back to main site */}
      <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to CrowdLogic
          </Link>
        </div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-16">
        <ScenarioHero />

        {/* Demo Progress Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <ProgressBar completed={demoProgress} />
        </motion.section>

        {/* Mobile Organizer Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mobile-first organizer experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Manage your event from anywhere. Desktop for setup, mobile for real-time management.
            </p>
          </div>
          <MobileOrganizer className="mb-8" />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why organizers choose Escapade
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Purpose-built for events that need to feel effortless, not chaotic.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Megaphone className="h-5 w-5" />}
              title="Right message → right group"
              description="Scoped announcements and clean chat channels end 'group chat chaos'."
              items={["Announcements (read-only)","Subgroup channels","Activity threads"]}
            />
            <FeatureCard
              icon={<MapPin className="h-5 w-5" />}
              title="Find rooms without beacons"
              description="Upload floorplans; drop pins; attendees get a simple proximity view."
              items={["Indoor floorplan pins","'Go' proximity view","Outdoor deep links"]}
            />
            <FeatureCard
              icon={<Timer className="h-5 w-5" />}
              title="Run the room"
              description="Synchronized timers, banners, and facilitation tools."
              items={["Session timers","Dynamic headers/banners","Clean signage links"]}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Plans</h2>
            <p className="text-muted-foreground text-lg">Transparent, card-friendly pricing for event buyers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PlanCard
              name="Up to 150"
              audience="Small retreats / regional meetups"
              price="$299"
              features={["Scoped chat","Floorplan pins","Admin banners","No app required"]}
              ctaText="Start"
              ctaHref="/escapade"
            />
            <PlanCard
              name="151–500"
              audience="Mid-sized conferences"
              price="$599"
              features={["Everything in 150","Setup wizard","Provisioned channels","Signage pack"]}
              ctaText="Start"
              ctaHref="/escapade"
              highlight
            />
            <PlanCard
              name="501–1,000"
              audience="Large events"
              price="$999"
              features={["Everything in 500","Coverage budgets","Sponsor spaces","Analytics-ready"]}
              ctaText="Start"
              ctaHref="/escapade"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Add-ons</h2>
            <p className="text-muted-foreground text-lg">Enhance your event with specialized features.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <AddonCard
              title="Team Pack"
              price="$149"
              description="Facilitate sessions and team-building without AV or apps."
              bullets={["Synchronized timers","Icebreakers & pairing","Polls/Surveys/Quizzes","Q&A + leaderboards","Signage controls"]}
            />
            <AddonCard
              title="Photo Wall Pro"
              price="$149"
              description="Moderated crowd photos on lobby signage."
              bullets={["Upload with consent","AI pre-flags","Moderator approvals","Sponsor overlays","Signage rotation"]}
            />
            <AddonCard
              title="Explore Pack"
              price="$199"
              description="Curated city lists and micro-groups that form in minutes."
              bullets={["Curated lists","Micro-group formation","Coverage-friendly","Sponsor-ready routes"]}
            />
            <AddonCard
              title="Analytics Pack"
              price="$199"
              description="PDF + CSV of attendance, comms, scans, signage, and budgets."
              bullets={["Comms reach","Arrival curves","Photo/signage impressions","Coverage usage","Sponsor appendix"]}
            />
            <AddonCard
              title="Sponsored Spaces & Analytics"
              price="$499"
              description="Organizer-controlled room/activity skins with exposure metrics."
              bullets={["Agenda badge","Room map label","Signage overlay","Photo Wall frames","Impression analytics"]}
            />
            <AddonCard
              title="Volunteers & Scanning"
              price="Included"
              description="Give volunteers simple tools to scan check-ins and assist ops."
              bullets={["Unique QR badges","Scan check-in","Muster compliance","Line-throughput insights"]}
            />
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <HowItWorks steps={[
            { title: "Pick your scenario", desc: "Choose from festival, retreat, conference, or tournament templates." },
            { title: "Try in sandbox", desc: "Build your event with real features and see instant results." },
            { title: "Launch with one link", desc: "No app required—post the QR, and it just works." }
          ]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <FAQ />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <CTASection 
            title="Ready to try Escapade?"
            subtitle="Start with a sandbox event—see the magic in 30 seconds."
            ctaText="Start your sandbox"
            ctaHref="/escapade"
          />
        </motion.div>
      </div>
      
      {/* Floating CTA */}
      <FloatingCTA 
        isVisible={showFloatingCTA}
        onClose={() => setShowFloatingCTA(false)}
        eventProgress={demoProgress}
      />
      
      <Footer />
    </div>
  );
}