interface ArchitecturalBlueprintProps {}

export const ArchitecturalBlueprint = ({}: ArchitecturalBlueprintProps) => {
  return (
    <div className="h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
      <svg 
        width="800" 
        height="600" 
        viewBox="0 0 800 600" 
        className="max-w-full max-h-full"
      >
        {/* Central Nexus Node */}
        <g>
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
        </g>

        {/* Personal Logistics Engine - Top Left */}
        <g>
          <circle 
            cx="200" 
            cy="150" 
            r="40" 
            fill="none" 
            stroke="#444444" 
            strokeWidth="2"
          />
          <line 
            x1="240" 
            y1="150" 
            x2="360" 
            y2="260" 
            stroke="#444444" 
            strokeWidth="1"
          />
          <text 
            x="200" 
            y="155" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Personal Logistics
          </text>
          <text 
            x="200" 
            y="170" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Engine
          </text>
        </g>

        {/* Human Capital Network - Top Right */}
        <g>
          <circle 
            cx="600" 
            cy="150" 
            r="40" 
            fill="none" 
            stroke="#444444" 
            strokeWidth="2"
          />
          <line 
            x1="560" 
            y1="150" 
            x2="440" 
            y2="260" 
            stroke="#444444" 
            strokeWidth="1"
          />
          <text 
            x="600" 
            y="155" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Human Capital
          </text>
          <text 
            x="600" 
            y="170" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Network
          </text>
        </g>

        {/* Campaign Analytics Core - Bottom Left */}
        <g>
          <circle 
            cx="200" 
            cy="450" 
            r="40" 
            fill="none" 
            stroke="#444444" 
            strokeWidth="2"
          />
          <line 
            x1="240" 
            y1="450" 
            x2="360" 
            y2="340" 
            stroke="#444444" 
            strokeWidth="1"
          />
          <text 
            x="200" 
            y="455" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Campaign Analytics
          </text>
          <text 
            x="200" 
            y="470" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Core
          </text>
        </g>

        {/* Audience Sentiment Matrix - Bottom Right */}
        <g>
          <circle 
            cx="600" 
            cy="450" 
            r="40" 
            fill="none" 
            stroke="#444444" 
            strokeWidth="2"
          />
          <line 
            x1="560" 
            y1="450" 
            x2="440" 
            y2="340" 
            stroke="#444444" 
            strokeWidth="1"
          />
          <text 
            x="600" 
            y="455" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Audience Sentiment
          </text>
          <text 
            x="600" 
            y="470" 
            textAnchor="middle" 
            className="font-inter text-xs fill-white"
          >
            Matrix
          </text>
        </g>
      </svg>
    </div>
  );
};