import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/sevenpinesdesign';
const CALENDLY_URL_WITH_PARAMS = `${CALENDLY_URL}?utm_source=sevenpines&utm_medium=website&utm_campaign=homepage&hide_event_type_details=1&hide_gdpr_banner=1&background_color=F7F7F5&text_color=08293C&primary_color=165C2F`;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyScheduler() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const widget = entry.target as HTMLElement;
            if (!widget.hasAttribute('data-loaded')) {
              widget.setAttribute('data-loaded', 'true');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const widget = document.querySelector('.calendly-inline-widget');
    if (widget) {
      observer.observe(widget);
    }

    return () => {
      if (widget) {
        observer.unobserve(widget);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pine-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pine-navy mb-4">
            Let's Talk About <span className="text-pine-green">Your Project</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            Book a 15-minute call to explore your vision and see if Seven Pines is the right fit for your 7-day build.
          </p>
        </div>

        <div className="hidden md:block">
          <div
            className="calendly-inline-widget w-full rounded-2xl shadow-lg overflow-hidden border-2 border-pine-green/10"
            data-url={CALENDLY_URL_WITH_PARAMS}
            style={{ minWidth: '320px', height: '720px' }}
          ></div>
        </div>

        <div className="md:hidden text-center py-12">
          <button
            id="calendly-mobile-launcher"
            onClick={(e) => {
              e.preventDefault();
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: CALENDLY_URL_WITH_PARAMS
                });
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-pine-gold hover:bg-pine-green text-pine-navy hover:text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            aria-label="Book a 15-minute consultation"
          >
            Book Your Free Call
          </button>
          <a
            href={CALENDLY_URL}
            className="sr-only"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Calendly scheduling in a new tab
          </a>
        </div>
      </div>
    </section>
  );
}

export { CALENDLY_URL_WITH_PARAMS };
