
import { useState, useEffect } from 'react';

interface Quote {
  q: string; // quote text
  a: string; // author name
  c: string; // character count
}

export const useQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      
      if (data && data.length > 0) {
        setQuote(data[0]);
      } else {
        throw new Error('No quote received');
      }
    } catch (err) {
      console.error('Failed to fetch quote:', err);
      setError('Failed to load inspirational quote');
      // Fallback quote for Kito
      setQuote({
        q: "Your potential is endless. Trust the process and embrace your journey to greatness.",
        a: "Unknown",
        c: "85"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return { quote, loading, error, refreshQuote: fetchQuote };
};
