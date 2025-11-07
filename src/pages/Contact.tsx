import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

export default function Contact() {
  const { openInquiryModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const messageText = formData.get('message') as string;

    try {
      // If Supabase is not configured, simulate success for now
      // Forms will be integrated with GoHighLevel later
      if (!import.meta.env.VITE_SUPABASE_URL) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMessage('Thank you! We\'ll be in touch soon.');
        e.currentTarget.reset();
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          message: messageText,
          source: 'contact-page',
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setMessage('Thank you! We\'ll be in touch soon.');
        e.currentTarget.reset();
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pine-navy mb-4">
            Get in <span className="text-pine-green">Touch</span>
          </h1>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            Ready to build your website in 7 days? Reach out and tell us about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-pine-green/20">
              <h2 className="text-2xl font-bold text-pine-navy mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pine-green/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-pine-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-navy mb-1">Phone</h3>
                    <a href="tel:+17162046443" className="text-pine-green hover:text-pine-gold text-lg">
                      (716) 204-6443
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pine-green/10 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-pine-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-navy mb-1">Email</h3>
                    <a href="mailto:EJ@SevenPines.Design" className="text-pine-green hover:text-pine-gold">
                      EJ@SevenPines.Design
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pine-green/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pine-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-navy mb-1">Location</h3>
                    <p className="text-pine-navy/70">
                      Remote Studio<br />
                      Serving Clients Worldwide
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-8 border-t border-pine-green/10">
                <button
                  onClick={() => handleCTAClick('cta-contact-consultation', openInquiryModal)}
                  className="block w-full px-6 py-4 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-semibold rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-pine-green/20">
            <h2 className="text-2xl font-bold text-pine-navy mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-pine-navy mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 border border-pine-green/30 rounded-lg focus:ring-2 focus:ring-pine-green focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-pine-navy mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-pine-green/30 rounded-lg focus:ring-2 focus:ring-pine-green focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-pine-navy mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-pine-green/30 rounded-lg focus:ring-2 focus:ring-pine-green focus:border-transparent transition-all"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-pine-navy mb-2">
                  Tell me about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-pine-green/30 rounded-lg focus:ring-2 focus:ring-pine-green focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, timeline and any specific features you need..."
                ></textarea>
              </div>

              {message && (
                <div className={`p-4 rounded-lg ${message.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-pine-navy/60 text-center">
                Your information is secure and will only be used to contact you about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
