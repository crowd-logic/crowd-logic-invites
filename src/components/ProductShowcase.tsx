import { motion } from "framer-motion";
import { Smartphone, Calendar, MapPin, Users, BarChart3, TrendingUp, Target } from "lucide-react";
import escapadeMockup from "@/assets/escapade-mockup.jpg";
import eventosDashboard from "@/assets/eventos-dashboard.jpg";

interface ProductShowcaseProps {
  solution: any;
}

export const ProductShowcase = ({ solution }: ProductShowcaseProps) => {
  const isEscapade = solution?.persona?.toLowerCase().includes('personal') || 
                   solution?.persona?.toLowerCase().includes('trip') ||
                   solution?.persona?.toLowerCase().includes('family');

  const isEventOS = solution?.persona?.toLowerCase().includes('brand') ||
                   solution?.persona?.toLowerCase().includes('event') ||
                   solution?.persona?.toLowerCase().includes('marketing');

  if (isEscapade) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-background relative overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="w-80 h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
              <img 
                src={escapadeMockup}
                alt="Escapade App Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (isEventOS) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-secondary/20 via-primary/10 to-background relative overflow-hidden">
        <motion.div
          className="relative z-10 max-w-4xl w-full mx-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-muted p-6 border-b border-border">
              <h3 className="text-2xl font-bold text-foreground font-lora">EventOS™ Dashboard</h3>
            </div>
            <div className="h-96 overflow-hidden">
              <img 
                src={eventosDashboard}
                alt="EventOS Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Default CrowdLogic Platform view
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
      <motion.div
        className="text-center text-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 font-lora">CrowdLogic Platform</h2>
        <p className="text-xl text-muted-foreground font-inter">Your tailored solution</p>
      </motion.div>
    </div>
  );
};