
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

// Import all the new dossier components
import EscapadeDossier from '../components/EscapadesDossier';
import KitoDossier from '../components/dossiers/KitoDossier';
import EventAxisDossier from '../components/dossiers/EventAxisDossier';
import VibePassDossier from '../components/dossiers/VibePassDossier';
import FoundersDossier from '../components/FoundersDossier';

const Index = () => {
  const [activeDossier, setActiveDossier] = useState<string | null>(null);
  const [splineApp, setSplineApp] = useState<any>(null);

  // IMPORTANT: Replace this with the Public URL from your Spline scene
  const splineSceneURL = 'https://prod.spline.design/PASTE_YOUR_SPLINE_URL_HERE';

  function onSplineLoad(spline: any) {
    setSplineApp(spline);
  }

  function handleSplineEvent(e: any) {
    // The event name is dispatched from Spline on click
    const dossierName = e.detail.name;
    setActiveDossier(dossierName);
    // Smoothly scroll down to the dossier section
    document.getElementById('dossier-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (!splineApp) return;

    // Listen for the custom events dispatched from Spline
    splineApp.addEventListener('escapade', handleSplineEvent);
    splineApp.addEventListener('kito', handleSplineEvent);
    splineApp.addEventListener('eventaxis', handleSplineEvent);
    splineApp.addEventListener('vibepass', handleSplineEvent);

    // Cleanup event listeners on component unmount
    return () => {
      splineApp.removeEventListener('escapade', handleSplineEvent);
      splineApp.removeEventListener('kito', handleSplineEvent);
      splineApp.removeEventListener('eventaxis', handleSplineEvent);
      splineApp.removeEventListener('vibepass', handleSplineEvent);
    };
  }, [splineApp]);

  const renderDossier = () => {
    switch (activeDossier) {
      case 'escapade': return <EscapadeDossier />;
      case 'kito': return <KitoDossier />;
      case 'eventaxis': return <EventAxisDossier />;
      case 'vibepass': return <VibePassDossier />;
      case 'our-why': return <FoundersDossier />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .our-why-link {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 10;
          color: #A0A0A0;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .our-why-link:hover {
          color: #EAEAEA;
        }
      `}</style>

      <main>
        <button 
          onClick={() => setActiveDossier('our-why')} 
          className="our-why-link"
        >
          Our Why
        </button>

        <div style={{ width: '100%', height: '100vh', zIndex: 1 }}>
          <Spline
            scene={splineSceneURL}
            onLoad={onSplineLoad}
          />
        </div>
        
        <div id="dossier-section">
          {renderDossier()}
        </div>
      </main>
    </div>
  );
};

export default Index;
