
import React, { useState, useEffect } from 'react';

import SplineBackground from '../components/SplineBackground';
import fallbackVisual from '@/assets/dashboard-vignette.jpg';
// Import all the dossier components
import EscapadeDossier from '../components/EscapadesDossier';
import KitoDossier from '../components/dossiers/KitoDossier';
import EventAxisDossier from '../components/dossiers/EventAxisDossier';
import VibePassDossier from '../components/dossiers/VibePassDossier';
import FoundersDossier from '../components/FoundersDossier';

// Simple placeholder component for testing
const BlueprintPlaceholder = ({ onNodeClick }: { onNodeClick: (id: string) => void }) => {
  const nodes = [
    { id: 'escapade', label: 'Escapade' },
    { id: 'kito', label: 'KITO Agency' },
    { id: 'eventaxis', label: 'EventAxis' },
    { id: 'vibepass', label: 'VibePass' }
  ];

  return (
    <div style={styles.placeholderContainer}>
      <div style={styles.centerNode} onClick={() => onNodeClick('our-why')}>
        Our Why
      </div>
      {nodes.map((node, index) => {
        const angle = (index / nodes.length) * 2 * Math.PI;
        const x = 200 * Math.cos(angle);
        const y = 200 * Math.sin(angle);
        return (
          <div
            key={node.id}
            style={{ ...styles.outerNode, transform: `translate(${x}px, ${y}px)` }}
            onClick={() => onNodeClick(node.id)}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
};

// Styles for the placeholder component
const styles = {
  placeholderContainer: {
    position: 'relative' as const,
    width: '450px',
    height: '450px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerNode: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#009B77',
    color: '#1A1A1A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    fontFamily: "'Crimson Text', serif",
    fontSize: '1.2rem',
    border: '2px solid #009B77',
    transition: 'transform 0.3s ease',
  },
  outerNode: {
    position: 'absolute' as const,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#242424',
    color: '#EAEAEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center' as const,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  }
};

const Index = () => {
  const [activeDossier, setActiveDossier] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'CrowdLogic - Ecosystem';
  }, []);

  const handleNodeClick = (dossierId: string) => {
    setActiveDossier(dossierId);
    // Scroll down to the content smoothly
    setTimeout(() => {
      document.getElementById('dossier-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderDossier = () => {
    switch (activeDossier) {
      case 'escapade': return <EscapadeDossier />;
      case 'kito': return <KitoDossier />;
      case 'eventaxis': return <EventAxisDossier />;
      case 'vibepass': return <VibePassDossier />;
      case 'our-why': return <FoundersDossier />;
      default: return <div style={{height: '100vh'}}></div>;
    }
  };

  return (
    <div style={{ color: '#EAEAEA', fontFamily: "'Inter', sans-serif", minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <style>{`
        .center-node:hover { transform: scale(1.1) !important; }
        .outer-node:hover { background-color: #009B77 !important; color: #1A1A1A !important; transform: scale(1.1) !important; }
      `}</style>

      {/* Background Spline scene with graceful fallback */}
      <SplineBackground url="[PLACEHOLDER_SPLINE_URL]" fallbackImage={fallbackVisual} />

      <main>
        {/* Placeholder section that will be replaced by Spline later */}
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BlueprintPlaceholder onNodeClick={handleNodeClick} />
        </div>
        
        {/* Container for the dossiers that appear on click */}
        <div id="dossier-section">
          {renderDossier()}
        </div>
      </main>
    </div>
  );
};

export default Index;
