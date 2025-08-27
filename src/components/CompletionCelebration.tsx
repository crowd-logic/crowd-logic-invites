import React, { useState, useEffect } from 'react';
import { Sparkle } from 'phosphor-react';

interface CompletionCelebrationProps {
  isVisible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export function CompletionCelebration({ 
  isVisible, 
  title, 
  message, 
  onClose 
}: CompletionCelebrationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-background px-8 py-6 rounded-2xl shadow-xl border border-primary/20 text-center animate-fade-in pointer-events-auto">
        <div className="flex justify-center mb-3">
          <Sparkle size={32} className="text-primary animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-primary">{title}</h2>
        <p className="mb-2 text-muted-foreground">{message}</p>
        <div className="mt-3 text-primary/80 font-semibold text-sm">
          You're one click away from something amazing.
        </div>
      </div>
    </div>
  );
}