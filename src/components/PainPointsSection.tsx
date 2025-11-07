import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const painPoints = [
  {
    title: 'Outdated or Invisible Online',
    subtext: 'Your site doesn\'t reflect your business — or it barely loads.',
  },
  {
    title: 'Losing Leads Every Day',
    subtext: 'No clear contact path means missed opportunities.',
  },
  {
    title: 'No Time or Tech Help',
    subtext: 'You\'re running your business, not managing web tools.',
  },
  {
    title: 'Burned by Big Agencies',
    subtext: 'Months, thousands spent, still no results that work.',
  },
  {
    title: 'Brand Doesn\'t Match Your Quality',
    subtext: 'Great work deserves a website that looks the part.',
  },
  {
    title: 'Your Website\'s Working Against You',
    subtext: 'Visitors bounce before you ever get a chance.',
  },
];

const solutions = [
  {
    title: 'Built Fast',
    description: 'Launch your site in just 7 days — no long timelines or delays.',
  },
  {
    title: 'Looks Great',
    description: 'Modern, mobile-ready design that reflects your brand\'s quality.',
  },
  {
    title: 'Works Hard',
    description: 'Built-in forms, automations, and CRM-ready integrations that save you time.',
  },
  {
    title: 'Low Stress',
    description: 'We handle design, setup, and revisions — you focus on your business.',
  },
  {
    title: 'Transparent & Affordable',
    description: 'Flat-rate pricing, clear deliverables, and no hidden costs. Ever.',
  },
  {
    title: 'Easy to Maintain',
    description: 'We hand off your site with clear training and tools you actually understand.',
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
            We Understand
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B4D8C] mb-4">
            You're Not Alone in <span className="text-[#1E7A3B]">These Struggles</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            We built Seven Pines because we've seen these problems hurt too many great businesses
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {painPoints.map((point, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-[250ms] hover:-translate-y-1 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
              }}
            >
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
                style={{
                  background: 'linear-gradient(35deg, #1E7A3B 0%, #0B4D8C 100%)',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* X Icon with gradient stroke */}
              <div className="absolute top-7 left-7 opacity-70">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`gradient-x-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1E7A3B', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0B4D8C', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <line
                    x1="8"
                    y1="8"
                    x2="24"
                    y2="24"
                    stroke={`url(#gradient-x-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="24"
                    y1="8"
                    x2="8"
                    y2="24"
                    stroke={`url(#gradient-x-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative pl-12 pt-1">
                <h3 className="text-[22px] font-bold text-[#0B4D8C] leading-tight mb-3 tracking-tight group-hover:text-[#1E7A3B] transition-colors duration-[250ms]">
                  {point.title}
                </h3>
                <p className="text-[15px] text-[#425466] leading-relaxed">
                  {point.subtext}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Arrow Divider */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="w-1 h-12 bg-gradient-to-b from-[#0B4D8C]/20 to-[#1E7A3B]"></div>
            <div className="p-4 bg-gradient-to-br from-[#1E7A3B] to-[#0B4D8C] rounded-full shadow-lg">
              <ArrowRight className="w-8 h-8 text-white rotate-90" strokeWidth={2.5} />
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-[#1E7A3B] to-pine-gold"></div>
          </div>
        </div>

        {/* Solutions Section */}
        <section id="solutions" className="bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[36px] md:text-4xl lg:text-5xl font-bold text-[#0B4D8C] mb-4">
                How Seven Pines <span className="text-[#1E7A3B]">Solves It</span>
              </h2>
              {/* Gradient accent line */}
              <div className="w-32 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#1E7A3B] to-[#0B4D8C]"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {solutions.map((solution, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  aria-label={solution.title}
                  className="group relative rounded-[18px] p-8 text-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-[250ms] ease-out hover:-translate-y-1.5 overflow-hidden min-h-[240px] flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, #1E7A3B 0%, #0B4D8C 100%)',
                  }}
                >
                  {/* Inner glow effect */}
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at top left, rgba(255,255,255,0.15) 0%, transparent 70%)',
                    }}
                  />

                  {/* Gradient border animation on hover */}
                  <div
                    className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
                    style={{
                      background: 'linear-gradient(90deg, #1E7A3B 0%, #0B4D8C 100%)',
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Checkmark Icon with gradient */}
                  <div className="relative mb-4 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_8px_rgba(230,184,0,0.4)] transition-all duration-[250ms]">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #E6B800 0%, #F3C84B 100%)',
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#0B4D8C]" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-[#1E7A3B] transition-colors duration-[250ms]">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 leading-relaxed text-[15px] transition-all duration-[250ms]">
                      {solution.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-pine-navy/80 mb-6 max-w-2xl mx-auto">
            Stop settling for "good enough." Get a website that works as hard as you do.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105"
          >
            Start Your 7-Day Launch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
