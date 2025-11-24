import { Palette, Sparkles, Package, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

const packages = [
  {
    name: 'Logo Refresh',
    description: 'Update your existing logo, fix proportions, colors, and typography for modern appeal.',
    price: '$500',
    features: [
      'Logo refinement & modernization',
      'Color palette adjustment',
      'Typography optimization',
      'High-res files (PNG, SVG, PDF)',
      '1 revision round',
    ],
  },
  {
    name: 'Full Brand Kit',
    description: 'New logo design, color palette, font pairing, social icons, favicon, and style guide.',
    price: '$850',
    popular: true,
    features: [
      'Custom logo design (3 concepts)',
      'Complete color palette',
      'Typography system',
      'Social media icons',
      'Favicon & app icons',
      'Brand style guide PDF',
      '2 revision rounds',
    ],
  },
  {
    name: 'Custom Identity Suite',
    description: 'All above + business card templates, brand story PDF, and launch graphics.',
    price: '$1,200',
    features: [
      'Everything in Full Brand Kit',
      'Business card templates',
      'Letterhead design',
      'Brand story & messaging guide',
      'Social media launch graphics',
      'Brand presentation deck',
      '3 revision rounds',
    ],
  },
];

const moodboards = [
  { title: 'Elegant Minimalism', gradient: 'from-slate-100 to-slate-300' },
  { title: 'Natural Growth', gradient: 'from-green-100 to-emerald-300' },
  { title: 'Timeless Geometry', gradient: 'from-amber-100 to-orange-200' },
  { title: 'Modern Heritage', gradient: 'from-blue-100 to-indigo-200' },
  { title: 'Bold & Confident', gradient: 'from-red-100 to-rose-300' },
  { title: 'Refined Simplicity', gradient: 'from-gray-50 to-gray-200' },
];

export default function Branding() {
  const { openInquiryModal } = useModal();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-pine-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-6">
            Logo Design & Brand Identity
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-pine-navy mb-6 leading-tight">
            Your Brand, Refined.
            <br />
            <span className="text-pine-green">Logo Design</span> and Brand Systems That Tell Your Story.
          </h1>
          <p className="text-2xl text-pine-navy/70 max-w-4xl mx-auto mb-8 leading-relaxed">
            A great website starts with a great brand. Our logo and brand identity services help you look modern, consistent, and memorable across every platform.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-pine-navy/80 leading-relaxed text-center">
            Whether you need a new logo or want to refresh an old one, we design <strong className="text-pine-green">clean, timeless brand systems</strong> that connect with your audience. Each brand package includes a color palette, typography system, and ready-to-use assets for web, social, and print.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-pine-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              Brand Service <span className="text-pine-green">Packages</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              From quick refreshes to complete brand systems — choose the level that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 ${
                  pkg.popular
                    ? 'border-pine-gold bg-white shadow-2xl scale-105'
                    : 'border-pine-green/20 bg-white hover:border-pine-gold/50 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pine-gold text-pine-navy text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-pine-green/10 to-pine-gold/10 rounded-xl mb-4">
                    {index === 0 && <Palette className="w-8 h-8 text-pine-green" />}
                    {index === 1 && <Sparkles className="w-8 h-8 text-pine-gold" />}
                    {index === 2 && <Package className="w-8 h-8 text-pine-green" />}
                  </div>
                  <h3 className="text-2xl font-bold text-pine-navy mb-2">{pkg.name}</h3>
                  <p className="text-pine-navy/70 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-pine-green mb-6">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pine-green flex-shrink-0 mt-0.5" />
                      <span className="text-pine-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTAClick('cta-branding-' + pkg.name.toLowerCase().replace(/\s+/g, '-'), openInquiryModal)}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white shadow-lg hover:shadow-2xl'
                      : 'bg-pine-green hover:bg-gradient-to-r hover:from-pine-gold hover:to-[#E6B800] text-white hover:text-pine-navy'
                  }`}
                >
                  Get a Quote →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
              Brand <span className="text-pine-green">Inspiration</span>
            </h2>
            <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
              Every brand has a story — we help you tell it through thoughtful design, color, and typography
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {moodboards.map((board, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${board.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}></div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/90 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{board.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-pine-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pine-navy mb-4">
              Our <span className="text-pine-green">Brand Design Process</span>
            </h2>
            <p className="text-xl text-pine-navy/70">
              From discovery to delivery in 5–7 days
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Discovery Call', desc: 'We learn about your business, audience, and vision' },
              { step: 2, title: 'Concept Development', desc: 'We create 2-3 logo concepts with mood boards' },
              { step: 3, title: 'Refinement', desc: 'You choose a direction and we perfect the details' },
              { step: 4, title: 'Brand System', desc: 'We build out colors, fonts, and usage guidelines' },
              { step: 5, title: 'Final Delivery', desc: 'You receive all files and a complete brand guide' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start bg-white p-6 rounded-xl border-2 border-pine-green/10 hover:border-pine-gold transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-pine-gold rounded-full flex items-center justify-center">
                  <span className="text-pine-navy font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pine-navy mb-2">{item.title}</h3>
                  <p className="text-pine-navy/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pine-green to-pine-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Brand Deserves More Than a Quick Logo Generator
          </h2>
          <p className="text-xl text-pine-white/90 mb-8 max-w-2xl mx-auto">
            Let's build a visual identity that stands for your business and connects with your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCTAClick('cta-branding-start', openInquiryModal)}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/50 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-pine-navy font-bold rounded-xl transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
