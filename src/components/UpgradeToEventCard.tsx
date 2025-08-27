import React from 'react';
import { ArrowRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

interface UpgradeToEventCardProps {
  placesCount: number;
  onUpgrade?: () => void;
}

export function UpgradeToEventCard({ placesCount, onUpgrade }: UpgradeToEventCardProps) {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade();
    }
    navigate('/escapade?importFrom=stash');
  };

  if (placesCount < 3) return null;

  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl text-center shadow-lg border border-primary/10">
      <h3 className="text-xl font-bold mb-2 text-foreground">
        Want to turn this list into a full group journey?
      </h3>
      <p className="text-muted-foreground mb-4">
        Your places, schedule, and notes are preserved automatically. No chaos—just calm coordination.
      </p>
      <button
        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto"
        onClick={handleUpgrade}
      >
        <ArrowRight size={20} />
        Plan as an event
      </button>
      <div className="text-xs text-muted-foreground mt-3">
        You control everything. No chaos, just calm.
      </div>
    </div>
  );
}