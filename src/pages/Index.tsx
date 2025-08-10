import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* Header */}
      <header id="header">
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="text-2xl font-semibold tracking-wider" style={{ fontFamily: 'Crimson Text, serif' }}>CrowdLogic</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#proof" className="text-gray-400 hover:text-white transition">The Proof</a>
                <a href="#service" className="text-gray-400 hover:text-white transition">The Service</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Vision */}
        <section id="hero-vision">
          <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-man-in-a-virtual-world-42441-large.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                We build the <span className="emerald-text">human connection</span> in a digital world.
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                CrowdLogic is an AI-first ecosystem founded by industry veterans to unify the fragmented world of events. We turn experience into empowerment, for both our clients and our teams.
              </p>
            </div>
          </div>
        </section>

        {/* The Proof */}
        <section id="proof">
          <div className="py-20 md:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
              <div className="pr-8">
                <h3 className="text-sm uppercase text-gray-400 tracking-widest">The Proof: Live Now</h3>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">escapade: End Group Chat Chaos.</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  We started by solving a problem everyone understands: planning a trip with friends is a nightmare. Our AI-powered app, escapade, is the live, working proof that thoughtful technology can create more human connection. It's the soul of our system.
                </p>
                <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noreferrer" className="cta-button">
                  Try the Live App
                </a>
              </div>
              <div>
                <img src="https://placehold.co/1200x800/1A1A1A/009B77?text=escapade+App" alt="escapade App Mockup" className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* The Service */}
        <section id="service">
          <div className="py-20 md:py-32 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
              <div className="md:order-2 pl-8">
                <h3 className="text-sm uppercase text-gray-400 tracking-widest">The Service: Active Now</h3>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">KITO Agency: Your Street Team.</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  For local businesses and nonprofits, cutting through the digital noise is the biggest challenge. Our Brand Ambassadors are your solution. They are trained professionals who take your story to the streets, creating hundreds of meaningful, human interactions that build real-world buzz and lasting loyalty.
                </p>
                <a href="#contact" className="cta-button-outline">
                  Learn How It Works
                </a>
              </div>
              <div className="md:order-1">
                <img src="https://placehold.co/1200x800/242424/FFFFFF?text=KITO+Agency" alt="KITO Agency Brand Ambassador" className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Together.</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Whether you're a small business looking to make a big impact or a potential partner who shares our vision, we'd love to connect.
            </p>
            <a href="mailto:contact@accesscrowdlogic.com" className="cta-button">
              contact@accesscrowdlogic.com
            </a>
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-500">What's Next: EventAxis (The Command Center) & VibePass (The Audience Connection) — Launching Q3 2025.</p>
              <p className="text-sm text-gray-600 mt-4">&copy; 2025 CrowdLogic. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
