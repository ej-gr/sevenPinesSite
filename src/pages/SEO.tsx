import { Zap, Code, Smartphone, Key, MapPin, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const features = [
  {
    icon: Zap,
    title: 'Fast Loading Times',
    description: 'Optimized images, clean code, and compressed assets ensure your site loads instantly — crucial for rankings and user experience.',
  },
  {
    icon: Code,
    title: 'Technical SEO',
    description: 'Proper HTML hierarchy, meta titles, meta descriptions, alt tags, and schema markup built into every page.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Designed and tested for flawless performance on every device — mobile-first is the standard, not an add-on.',
  },
  {
    icon: Key,
    title: 'Keyword-Informed Copywriting',
    description: 'We help guide your site\'s copy so it\'s both human-friendly and keyword-smart, targeting what your customers search for.',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Connected to Google Business, Maps, and citations for your region — essential for service businesses and local shops.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Google Analytics + Search Console tracking baked in before launch so you can measure traffic and conversions from day one.',
  },
];

export default function SEO() {
  const { openInquiryModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-navy to-pine-green">
      {/* Animated Search Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border-4 border-pine-gold rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border-4 border-white rounded-full animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-pine-gold/20 text-pine-gold rounded-full text-sm font-semibold mb-6">
            SEO Built In
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Built to Be Found.
            <br />
            <span className="text-pine-gold">SEO That Works</span> Behind the Scenes.
          </h1>
          <p className="text-2xl text-pine-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Every Seven Pines website is structured for performance, speed, and visibility from day one — giving you a solid foundation for organic growth.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-pine-white/90 leading-relaxed text-center">
            <span className="text-2xl font-bold text-pine-gold block mb-4">You shouldn't have to wonder if your new website will show up on Google.</span>
            Every site we build follows modern SEO standards — from clean code and mobile optimization to lightning-fast load speeds and keyword-rich copy. We don't just make your site look great — <strong className="text-pine-gold">we make sure people can find it</strong>.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              SEO <span className="text-pine-green">Baked Into Every Build</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              No hidden fees, no upsells — just smart structure and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-pine-white rounded-2xl p-8 border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-pine-green/10 to-pine-gold/10 rounded-xl mb-6 group-hover:from-pine-gold/20 group-hover:to-pine-gold/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-pine-green group-hover:text-pine-gold" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-pine-navy mb-4">{feature.title}</h3>
                <p className="text-pine-navy/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Callout Box */}
          <div className="bg-gradient-to-br from-pine-green to-pine-navy p-12 rounded-2xl text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pine-gold rounded-full mb-6">
              <Zap className="w-8 h-8 text-pine-navy" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Every Seven Pines Website Ships Optimized for SEO
            </h3>
            <p className="text-xl text-pine-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              No hidden fees, no upsells, just smart structure and measurable results. We handle technical SEO, speed optimization, mobile responsiveness, and local search — all included in your 7-day build.
            </p>
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-pine-gold/30">
              <p className="text-pine-gold font-semibold">
                Want ongoing SEO campaign management? Add it for $199/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="relative py-24 bg-pine-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
                Local Search
              </div>
              <h2 className="text-4xl font-bold text-pine-navy mb-6">
                Show Up When <span className="text-pine-green">Local Customers Search</span>
              </h2>
              <p className="text-lg text-pine-navy/80 leading-relaxed mb-6">
                For service businesses and local shops, showing up in local search results is critical. Every Seven Pines site includes:
              </p>
              <ul className="space-y-4">
                {[
                  'Google Business Profile integration',
                  'Local keyword optimization (e.g., "web design Windsor CT")',
                  'Schema markup for local business',
                  'Mobile-friendly maps and contact info',
                  'Location-specific landing pages (if needed)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pine-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pine-navy text-sm font-bold">✓</span>
                    </div>
                    <span className="text-pine-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pine-green/10 to-pine-gold/10 rounded-2xl p-12 border-2 border-pine-green/20">
              <div className="text-center">
                <MapPin className="w-24 h-24 text-pine-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-pine-navy mb-4">
                  Get Found in Your Area
                </h3>
                <p className="text-pine-navy/70 leading-relaxed">
                  Local SEO ensures your business shows up when nearby customers search for your services on Google, Maps, and mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-pine-navy to-pine-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Organically?
          </h2>
          <p className="text-xl text-pine-white/90 mb-8 max-w-2xl mx-auto">
            Let's build a website that's designed to be found — from day one. No tricks, just solid SEO fundamentals that drive real traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCTAClick('cta-seo-start', openInquiryModal)}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Start Your 7-Day Launch
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-pine-navy font-bold rounded-xl transition-all duration-300"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
