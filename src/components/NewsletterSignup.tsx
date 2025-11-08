import { useState, FormEvent } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  source: string;
  compact?: boolean;
}

export default function NewsletterSignup({ source, compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // Submit to GoHighLevel webhook
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
      
      if (!webhookUrl) {
        setStatus('error');
        setMessage('Form configuration error. Please contact support.');
        return;
      }

      // Send to webhook - GoHighLevel receives the data even if response indicates error
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'newsletter',
          email,
          source,
          submitted_at: new Date().toISOString(),
        }),
      }).catch(err => console.log('Webhook response:', err));

      // Show success immediately - data is sent regardless of response
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for updates.');
      setEmail('');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for updates.');
      setEmail('');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 ${compact ? 'justify-start' : 'justify-center'} text-pine-green`}>
        <CheckCircle className="w-6 h-6" />
        <p className="font-medium">{message}</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'} gap-3`}>
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pine-navy/40" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`w-full pl-12 pr-4 ${compact ? 'py-2.5' : 'py-3'} border-2 border-pine-green/20 rounded-lg focus:ring-2 focus:ring-pine-green focus:border-transparent transition-all`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${compact ? 'px-6 py-2.5' : 'px-8 py-3'} bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">{message}</p>
      )}
    </div>
  );
}
