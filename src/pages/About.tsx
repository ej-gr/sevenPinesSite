import { Sprout, Hammer, Zap, Handshake, Globe, Palette, Settings, ArrowRight } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';

export default function AboutPage() {
  const { openInquiryModal } = useModal();

  const values = [
    {
      icon: Sprout,
      title: 'Growth in 7 Days',
      description: 'We help small businesses move fast — from idea to live site in a week.',
    },
    {
      icon: Hammer,
      title: 'Crafted With Care',
      description: 'Each site is built like a portfolio piece — clean, modern, and made to convert.',
    },
    {
      icon: Zap,
      title: 'Smart Systems',
      description: 'We connect your website to automation that turns leads into loyal customers.',
    },
    {
      icon: Handshake,
      title: 'True Partnership',
      description: 'You\'re not hiring an agency — you\'re gaining a long-term digital partner.',
    },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Website in 7 Days',
      description: 'From wireframe to launch in one week — a custom, mobile-ready website that converts.',
    },
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      description: 'Refine your visual identity with a logo and palette that reflect your story.',
    },
    {
      icon: Settings,
      title: 'Advanced Automation',
      description: 'Turn your website into a 24/7 sales assistant — follow-ups, scheduling, and CRM built-in.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-pine-white">
      {/* Rooted in Real-World Experience */}
      <section className="py-32 bg-gradient-to-b from-pine-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="inline-block">
                <span className="text-pine-green font-semibold text-sm uppercase tracking-wider bg-pine-green/10 px-4 py-2 rounded-full">
                  About Seven Pines Design
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy leading-tight">
                Rooted in Real-World Experience
              </h2>

              <p className="text-xl text-pine-navy/80 leading-relaxed max-w-3xl mx-auto">
                Seven Pines Design was founded by <span className="font-semibold text-pine-green">EJ and Kylie Groff</span> — a husband-and-wife team who understand small-business challenges firsthand.
              </p>

              <p className="text-lg text-pine-navy/70 leading-relaxed max-w-3xl mx-auto">
                EJ spent 10+ years in the business world, learning how design and automation drive real growth.
                Kylie grew up in a small-business family, where every client mattered.
              </p>

              <p className="text-lg text-pine-navy/70 leading-relaxed max-w-3xl mx-auto">
                Together, they help local businesses build modern websites that convert visitors into customers — in just 7 days.
              </p>

              {/* Founder Photo Section */}
              <div className="pt-12 pb-8">
                <div className="flex flex-col items-center justify-center">
                  {/* Photo */}
                  <div className="mb-8">
                    <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-pine-gold">
                      <img
                        src="/IMG_3195.jpg"
                        alt="EJ and Kylie Groff, founders of Seven Pines Design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bios Side by Side */}
                  <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 max-w-4xl">
                    {/* Kylie */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-pine-navy mb-3">Kylie Groff</h3>
                      <p className="text-base text-pine-navy/70 leading-relaxed">
                        Raised in a small-business family with deep roots in customer service and community. Brings heart and precision to every project.
                      </p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px h-24 bg-pine-green/30 self-center"></div>

                    {/* EJ */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-pine-navy mb-3">EJ Groff</h3>
                      <p className="text-base text-pine-navy/70 leading-relaxed">
                        Combining 10+ years in business strategy with a passion for design and automation, EJ helps small businesses turn their websites into growth engines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-pine-white rounded-2xl p-8 border-2 border-pine-green/10 hover:border-pine-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-4 bg-pine-gold/20 rounded-xl mb-6 group-hover:bg-pine-gold/30 transition-colors">
                  <value.icon className="w-8 h-8 text-pine-green" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-pine-navy mb-3 leading-tight">
                  {value.title}
                </h3>
                <p className="text-pine-navy/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Ribbon */}
      <section className="py-24 bg-pine-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-pine-green/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-pine-green/10 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-pine-green" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-pine-navy mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-pine-navy/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-pine-green hover:text-pine-gold font-semibold text-lg transition-colors"
            >
              See Full Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Behind the Pines Section */}
      <section className="relative py-32 bg-pine-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path
                key={i}
                d={`M ${150 + i * 150} 800 L ${120 + i * 150} 400 L ${150 + i * 150} 200 L ${180 + i * 150} 400 Z`}
                fill="white"
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            "Every pine in our logo<br />
            represents a day in our process."
          </h2>

          <p className="text-xl text-pine-white/80 leading-relaxed mb-4">
            From the first seed of an idea to your launch day, each stage builds on the last.
          </p>
          <p className="text-lg text-pine-white/60 leading-relaxed mb-12">
            It's a reminder that growth takes shape through steady, purposeful design.
          </p>

          <button
            onClick={() => handleCTAClick('cta-about-behind-pines', openInquiryModal)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your 7-Day Launch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
