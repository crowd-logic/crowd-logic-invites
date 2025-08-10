// src/components/SplineExperience.tsx
import React, { Suspense, useState, useEffect } from 'react';

import KitoAgencyDossier from './KitoAgencyDossier';
// Lazy load the Spline viewer to improve initial page load
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineExperience: React.FC = () => {
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const [splineApp, setSplineApp] = useState<any>(null);

    function onSplineLoad(spline: any) {
        setSplineApp(spline);
    }

    function handleMouseDown(e: any) {
        const objectName = e?.target?.name;
        const validPanels = ['escapade', 'kito', 'eventaxis', 'vibepass'];
        if (objectName && validPanels.includes(objectName)) {
            // Delay showing the panel to sync with Spline camera animation
            setTimeout(() => setActivePanel(objectName), 500);
        }
    }

    function handleClosePanel() {
        // Here you would tell Spline to reverse the camera animation
        // For example: splineApp.emitEvent('start', 'ResetCamera');
        setActivePanel(null);
    }

    const dossierPanels: Record<string, React.ReactNode> = {
        escapade: (
            <div className="dossier-panel">
                <button onClick={handleClosePanel} className="close-btn" aria-label="Close panel">&times;</button>
                <h2>End Group Chat Chaos.</h2>
                <p>We started by solving a problem everyone understands: planning a trip with friends is a nightmare. Our AI-powered app, escapade, is the live, working proof that thoughtful technology can create more human connection.</p>
                <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noreferrer" className="cta-button">Try the Live App</a>
            </div>
        ),
        kito: (
            <div className="dossier-panel">
                <button onClick={handleClosePanel} className="close-btn" aria-label="Close panel">&times;</button>
                {/* The KITO AI tool will be its own component, placed here */}
                <KitoAgencyDossier />
            </div>
        ),
        eventaxis: (
            <div className="dossier-panel">
                <button onClick={handleClosePanel} className="close-btn" aria-label="Close panel">&times;</button>
                <h2>Your Campaign's Command Center.</h2>
                <p>EventAxis is the upcoming B2B platform for brands and agencies to manage campaigns, staffing, and analytics with unprecedented clarity.</p>
                <a href="#" className="cta-button">Join the Waitlist</a>
            </div>
        ),
        vibepass: (
            <div className="dossier-panel">
                <button onClick={handleClosePanel} className="close-btn" aria-label="Close panel">&times;</button>
                <h2>Know What Your Audience Truly Loves.</h2>
                <p>VibePass is the future of attendee experience, turning passive audiences into active participants and feeding real-time sentiment data back to you.</p>
                <a href="#" className="cta-button">Join the Waitlist</a>
            </div>
        )
    };

    return (
        <>
            <div className="spline-container">
                <Suspense fallback={<div className="fallback-image"></div>}>
                    <Spline
                        scene="[PLACEHOLDER_SPLINE_URL]"
                        onLoad={onSplineLoad}
                        onMouseDown={handleMouseDown}
                    />
                </Suspense>
            </div>
            <div className={`dossier-container ${activePanel ? 'visible' : ''}`}>
                {activePanel && dossierPanels[activePanel]}
            </div>
        </>
    );
};

export default SplineExperience;
