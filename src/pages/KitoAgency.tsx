import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

const KitoAgencyPage = () => {
    const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
    // Note: The slider now represents a typical gig length, not weekly hours.
    const [gigHours, setGigHours] = useState(12); 
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleStrengthSelect = (strength: string) => {
        setSelectedStrength(strength);
        // UI logic to advance to the next step
    };

    const handleProjectPotential = async () => {
        if (!selectedStrength) return;
        setIsLoading(true);
        setResult('');
        setError('');

        try {
            const { data, error: functionError } = await supabase.functions.invoke('ai-opportunity-engine', {
                body: {
                    strength: selectedStrength,
                    hours: parseInt(gigHours.toString(), 10)
                }
            });

            if (functionError) throw functionError;
            
            if (data && data.snapshot) {
                setResult(data.snapshot);
            } else {
                throw new Error("Invalid response from the server.");
            }

        } catch (err) {
            console.error('Error projecting potential:', err);
            setError((err as Error).message || 'Could not project your potential at this time. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
            {/* Navigation Spacer */}
            <div className="h-20"></div>
            
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Your Experience is Your Superpower.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            You have a lifetime of skills—connecting with people, telling great stories, making things happen. 
                            The KITO Agency is a network for professionals like you to turn that experience into a flexible, 
                            lucrative career as a Brand Ambassador.
                        </p>
                    </div>

                    <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">What's your natural strength?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    'A Great Storyteller',
                                    'Connecting with People',
                                    'Tech-Savvy & Organized',
                                    'A Natural Tastemaker'
                                ].map((strength) => (
                                    <div 
                                        key={strength}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                                            selectedStrength === strength 
                                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400' 
                                                : 'bg-white/5 border-white/10 hover:border-purple-400/50'
                                        }`}
                                        onClick={() => handleStrengthSelect(strength)}
                                    >
                                        <h3 className="text-xl font-semibold text-white text-center">{strength}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* This step would be shown after a strength is selected */}
                        {selectedStrength && (
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-8 text-center">Select a typical activation length:</h2>
                                <div className="max-w-md mx-auto">
                                    <input 
                                        type="range" 
                                        min="4" 
                                        max="24" 
                                        step="2"
                                        value={gigHours} 
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                        onChange={(e) => setGigHours(Number(e.target.value))} 
                                    />
                                    <div className="text-center mt-4">
                                        <span className="text-lg text-white font-semibold">
                                            {gigHours} hours (e.g., a weekend)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="text-center">
                            <button 
                                onClick={handleProjectPotential} 
                                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                                disabled={!selectedStrength || isLoading}
                            >
                                <span className="relative z-10">
                                    {isLoading ? 'Projecting...' : 'Project My Potential'}
                                </span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {(result || error) && (
                            <div className="mt-12 p-8 bg-black/30 rounded-2xl border border-white/10">
                                {error && (
                                    <p className="text-red-400 text-center text-lg">{error}</p>
                                )}
                                {result && (
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-4 text-center">Your Professional Persona Snapshot</h3>
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-lg leading-relaxed whitespace-pre-wrap">{result}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitoAgencyPage;