import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SolutionArchitect } from "@/components/SolutionArchitect";
import escapadeVignette from "@/assets/escapade-vignette.jpg";
import ambassadorVignette from "@/assets/ambassador-vignette.jpg";
import dashboardVignette from "@/assets/dashboard-vignette.jpg";
import sentimentVignette from "@/assets/sentiment-vignette.jpg";

interface ArchitecturalBlueprintProps {}

interface NodeData {
  id: string;
  cx: number;
  cy: number;
  technicalLabel: string[];
  humanLabel: string;
  vignette: string;
  lineEnd: { x: number; y: number };
}

const nodes: NodeData[] = [
  {
    id: "logistics",
    cx: 200,
    cy: 150,
    technicalLabel: ["Personal Logistics", "Engine"],
    humanLabel: "End Group Chat Chaos.",
    vignette: escapadeVignette,
    lineEnd: { x: 360, y: 260 }
  },
  {
    id: "capital",
    cx: 600,
    cy: 150,
    technicalLabel: ["Human Capital", "Network"],
    humanLabel: "Your Experience is Your Superpower.",
    vignette: ambassadorVignette,
    lineEnd: { x: 440, y: 260 }
  },
  {
    id: "analytics",
    cx: 200,
    cy: 450,
    technicalLabel: ["Campaign Analytics", "Core"],
    humanLabel: "Your Campaign's Command Center.",
    vignette: dashboardVignette,
    lineEnd: { x: 360, y: 340 }
  },
  {
    id: "sentiment",
    cx: 600,
    cy: 450,
    technicalLabel: ["Audience Sentiment", "Matrix"],
    humanLabel: "Know What Your Audience Truly Loves.",
    vignette: sentimentVignette,
    lineEnd: { x: 440, y: 340 }
  }
];

export const ArchitecturalBlueprint = ({}: ArchitecturalBlueprintProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [showSolutionArchitect, setShowSolutionArchitect] = useState(false);

  if (showSolutionArchitect) {
    return <SolutionArchitect onBack={() => setShowSolutionArchitect(false)} />;
  }

  return (
    <div className="h-screen w-full relative flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Solution Architect Entry Button */}
      <div className="absolute top-8 right-8 z-10">
        <Button 
          variant="outline" 
          onClick={() => setShowSolutionArchitect(true)}
          className="bg-background/10 border-border/50 text-white hover:bg-background/20"
        >
          I'm looking for a solution
        </Button>
      </div>
      <svg 
        width="800" 
        height="600" 
        viewBox="0 0 800 600" 
        className="max-w-full max-h-full"
      >
        {/* Central Nexus Node */}
        <motion.g
          animate={{
            opacity: hoveredNode ? 0.2 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <circle 
            cx="400" 
            cy="300" 
            r="60" 
            fill="none" 
            stroke="#444444" 
            strokeWidth="2"
          />
          <text 
            x="400" 
            y="305" 
            textAnchor="middle" 
            className="font-inter text-sm fill-white"
          >
            CrowdLogic Nexus
          </text>
        </motion.g>

        {/* Outer Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Connecting Line */}
            <motion.line 
              x1={node.cx + (node.cx < 400 ? 40 : -40)} 
              y1={node.cy} 
              x2={node.lineEnd.x} 
              y2={node.lineEnd.y} 
              stroke={hoveredNode === node.id ? "hsl(var(--emerald))" : "#444444"}
              strokeWidth="1"
              animate={{
                opacity: hoveredNode && hoveredNode !== node.id ? 0.2 : 1
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            
            {/* Node Circle */}
            <motion.circle 
              cx={node.cx} 
              cy={node.cy} 
              r="40" 
              fill="none" 
              stroke={hoveredNode === node.id ? "hsl(var(--emerald))" : "#444444"}
              strokeWidth="2"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
              animate={{
                opacity: hoveredNode && hoveredNode !== node.id ? 0.2 : 1,
                filter: hoveredNode === node.id ? `drop-shadow(0 0 20px hsl(var(--emerald-glow)))` : "none"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Blooming Vignette */}
            <AnimatePresence>
              {hoveredNode === node.id && (
                <motion.g>
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="0"
                    fill="url(#vignettePattern)"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: 80, opacity: 1 }}
                    exit={{ r: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <defs>
                    <pattern id="vignettePattern" patternUnits="objectBoundingBox" width="1" height="1">
                      <image href={node.vignette} x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />
                    </pattern>
                  </defs>
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="80"
                    fill="none"
                    stroke="hsl(var(--emerald))"
                    strokeWidth="3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Technical Labels */}
            <motion.g
              animate={{
                opacity: hoveredNode === node.id ? 0 : (hoveredNode && hoveredNode !== node.id ? 0.2 : 1)
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <text 
                x={node.cx} 
                y={node.cy + 5} 
                textAnchor="middle" 
                className="font-inter text-xs fill-white"
              >
                {node.technicalLabel[0]}
              </text>
              <text 
                x={node.cx} 
                y={node.cy + 20} 
                textAnchor="middle" 
                className="font-inter text-xs fill-white"
              >
                {node.technicalLabel[1]}
              </text>
            </motion.g>

            {/* Human-Centric Headlines */}
            <AnimatePresence>
              {hoveredNode === node.id && (
                <motion.text
                  x={node.cx}
                  y={node.cy + 120}
                  textAnchor="middle"
                  className="font-crimson text-lg fill-white font-semibold"
                  initial={{ opacity: 0, y: node.cy + 100 }}
                  animate={{ opacity: 1, y: node.cy + 120 }}
                  exit={{ opacity: 0, y: node.cy + 100 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {node.humanLabel}
                </motion.text>
              )}
            </AnimatePresence>
          </g>
        ))}
      </svg>
    </div>
  );
};