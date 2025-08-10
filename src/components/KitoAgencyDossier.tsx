// src/components/KitoAgencyDossier.tsx
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type Playbook = {
  strategy: string;
  opportunities: string[];
  team_tactics: string;
  projected_impact: string;
  investment: {
    ba_team_cost: number;
    materials_cost: number;
    setup_fee: number;
    total: number;
  };
};

const KitoAgencyDossier: React.FC = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>('');
  const [challenge, setChallenge] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbook, setPlaybook] = useState<Playbook | null>(null);

  const handleGeneratePlaybook = async () => {
    if (!userType || !location || !challenge) return;
    setIsLoading(true);
    setPlaybook(null);
    try {
      const { data, error } = await supabase.functions.invoke('ai-playbook-architect', {
        body: { user_type: userType, location: location, challenge: challenge },
      });
      if (error) throw error;
      setPlaybook(data.playbook);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="kito-hero">
        <h1>
          Build a Street Team for your <span className="rotating-text">Business.</span>
        </h1>
        <p>
          Demystify the power of Brand Ambassadors. Get a custom, location-aware campaign playbook in 60 seconds.
        </p>
      </div>

      <div className="architect-tool">
        {/* ... (The HTML for the 3-step form from the previous prompt goes here) ... */}
        {playbook && (
          <div className="playbook-results">
            {/* ... (The HTML for rendering the playbook results goes here) ... */}
          </div>
        )}
      </div>
    </>
  );
};

export default KitoAgencyDossier;
