import React from 'react';
import './SharedDossier.css'; // Uses the shared styles we already defined

const EventAxisDossier = () => (
    <div className="dossier-wrapper visible" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0, 155, 119, 0.05), #1A1A1A 40%)' }}>
        <div className="dossier-content">
            {/* Icon: Data Crystal */}
            <svg className="dossier-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            
            <h1 className="dossier-headline">Your Campaign's Command Center.</h1>
            <p className="dossier-subheadline">Stop guessing. Start knowing. EventAxis is our upcoming platform that connects your event operations, staffing, and real-time audience data into a single, intelligent, unified view.</p>
            
            <div style={styles.showcaseBox}>
                <span style={styles.comingSoonTag}>Coming Soon</span>
                <div style={styles.featuresGrid}>
                    <div style={styles.featureItem}>
                        <svg viewBox="0 0 24 24" style={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        <span>Analytics</span>
                    </div>
                    <div style={styles.featureItem}>
                        <svg viewBox="0 0 24 24" style={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        <span>Insights</span>
                    </div>
                    <div style={styles.featureItem}>
                        <svg viewBox="0 0 24 24" style={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                        <span>Operations</span>
                    </div>
                </div>
            </div>
            
            <a href="#join-form" className="cta-button">Join the Waitlist</a>
        </div>
    </div>
);
export default EventAxisDossier;

const styles = {
    showcaseBox: { position: 'relative' as const, maxWidth: '700px', margin: '0 auto 3rem auto', background: '#242424', borderRadius: '12px', padding: '4rem', border: '1px solid rgba(255,255,255,0.1)' },
    comingSoonTag: { position: 'absolute' as const, top: '1.5rem', right: '1.5rem', background: 'rgba(0, 155, 119, 0.2)', color: '#009B77', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500' },
    featuresGrid: { display: 'flex', justifyContent: 'space-around' as const, alignItems: 'center', gap: '2rem' },
    featureItem: { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '0.5rem', color: '#A0A0A0' },
    featureIcon: { width: '32px', height: '32px' }
};