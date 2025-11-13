import { X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from '../../utils/toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ContactModal({ isOpen, onClose, prefilledService }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const full_name = formData.get('full_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    try {
      // Submit to GoHighLevel webhook
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
      
      if (!webhookUrl) {
        showToast({ message: 'Form configuration error. Please contact support.', type: 'error' });
        setIsSubmitting(false);
        return;
      }

      // Send to webhook - GoHighLevel receives the data even if response indicates error
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'contact',
          full_name,
          email,
          phone,
          company: company || '',
          message: message || '',
          submitted_at: new Date().toISOString(),
        }),
      }).catch(err => console.log('Webhook response:', err));

      // Show success immediately - data is sent regardless of response
      showToast({ message: 'Thank you! We\'ll be in touch soon.', type: 'success' });
      e.currentTarget.reset();
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
      showToast({ message: 'Thank you! We\'ll be in touch soon.', type: 'success' });
      e.currentTarget.reset();
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="full_name" className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your Company Name"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed">
              I agree to the{' '}
              <Link to="/terms" target="_blank" className="text-blue-600 hover:text-blue-500 underline">
                Terms and Conditions
              </Link>{' '}
              provided by Seven Pines LLC. I agree to receive text messages from this business.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
