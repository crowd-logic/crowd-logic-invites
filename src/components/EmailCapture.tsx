import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

interface EmailCaptureProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

export function EmailCapture({ className = '', placeholder = 'Your email', buttonText = 'Subscribe' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(''); // bot trap

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (honeypot) return; // ignore bots
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError('Please enter a valid email.');
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase
        .from('email_captures')
        .insert({ email, first_name: '', last_name: '' });
      if (error) throw error;
      setDone(true);
    } catch (err: any) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <h4 className="text-white font-semibold">You’re on the list.</h4>
        <p className="text-white/70 mt-1">We’ll keep you in the loop.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-3 ${className}`}>
      <div className="flex items-center space-x-3 p-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-emerald-400/60 transition">
        <Mail className="h-5 w-5 text-emerald-300 shrink-0" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none"
          required
        />
        <input
          type="text"
          className="hidden"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-2.5 font-medium hover:from-emerald-400 hover:to-cyan-400 disabled:opacity-60"
      >
        {busy ? 'Submitting…' : buttonText}
      </button>
    </form>
  );
}
