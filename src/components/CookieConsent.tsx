import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show banner after a brief delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const closeBanner = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-pine-navy/95 backdrop-blur-sm border-t border-pine-green/20 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-pine-gold flex-shrink-0 mt-0.5" />
          <p className="text-pine-white/90 text-sm leading-relaxed">
            We use cookies to improve your experience and analyze site traffic. By continuing, you accept our{' '}
            <Link 
              to="/privacy" 
              className="text-pine-gold hover:text-pine-white underline transition-colors"
              onClick={acceptCookies}
            >
              Privacy Policy
            </Link>.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2.5 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={closeBanner}
            className="p-2 text-pine-white/60 hover:text-pine-white hover:bg-pine-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

