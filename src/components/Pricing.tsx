import { Check, Rocket, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import { motion } from 'framer-motion';

export default function Pricing() {
  const { openInquiryModal } = useModal();

  const pricingCards = [
    {
      icon: Sparkles,
      title: 'Growth Partner',
      tagline: 'The complete growth system — brand, site, and automation handled for you.',
      price: '$8,999',
      priceSubtext: 'one-time',
      isMonthly: false,
      features: [
        'Everything in the Launch Kit and Ongoing Growth packages',
        'Full brand identity suite (logo, color palette, typography, brand guide)',
        'Advanced funnel build (lead magnets + nurturing automations)',
        'SEO keyword strategy + local ranking optimization',
        'Pre-built CRM pipelines + conversion automation',
        '6 months of growth management (strategy calls + updates)',
        'White-glove hosting + VIP support'
      ],
      addOn: null,
      ctaText: 'Apply for Growth Partner',
      ctaStyle: 'summit',
      highlight: false,
      savings: null,
      position: 'left'
    },
    {
      icon: Rocket,
      title: 'Launch Kit',
      tagline: 'Your 7-day website launch — fast, modern, and built to convert.',
      price: '$1,999',
      priceSubtext: 'one-time setup',
      isMonthly: false,
      features: [
        'Custom 5-page responsive website',
        'SEO + mobile optimized',
        'Built on Bolt or GoHighLevel',
        'Brand setup (colors, fonts, logo upload)',
        'Google Business + analytics integration'
      ],
      addOn: 'Logo Redesign & Brand Refresh — $599',
      subPricing: null,
      footerNote: null,
      ctaText: 'Get Started Now',
      ctaStyle: 'primary',
      highlight: true,
      savings: null,
      position: 'center'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Growth',
      tagline: 'We keep your site running — and your leads flowing.',
      price: '$199–$399',
      priceSubtext: '/month',
      isMonthly: true,
      features: [
        'Hosting + domain management',
        'Routine updates + security monitoring',
        'CRM + lead tracker setup',
        'Automated follow-ups (email + text)',
        'Appointment scheduling integration',
        'Monthly performance reports'
      ],
      addOn: null,
      subPricing: [
        { name: 'Site Care', price: '$199/mo', description: 'maintenance + support' },
        { name: 'Automation Suite', price: '$249/mo', description: 'CRM + follow-ups' },
        { name: 'Both Combined', price: '$399/mo', description: 'save $49/mo' }
      ],
      footerNote: 'All monthly plans require the initial $1,999 Launch Kit setup.',
      ctaText: 'Join Ongoing Growth',
      ctaStyle: 'summit',
      highlight: false,
      savings: null,
      position: 'right'
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E7A3B' fill-opacity='1'%3E%3Cpath d='M40 0 L45 15 L60 10 L50 25 L65 30 L50 35 L60 50 L45 45 L40 60 L35 45 L20 50 L30 35 L15 30 L30 25 L20 10 L35 15 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B4D8C] mb-6">
            Transparent Pricing. <span className="text-[#1E7A3B]">Tangible Results.</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-4xl mx-auto leading-relaxed">
            Every project starts with a one-time <span className="font-bold text-[#1E7A3B]">$1,999 Launch Kit</span> setup. Then choose the level of ongoing support that fits your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 mt-16">
          {pricingCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: card.highlight ? -8 : -6,
                  scale: card.highlight ? 1.03 : 1.0,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  card.highlight
                    ? 'bg-white shadow-2xl lg:scale-105'
                    : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
                style={{
                  border: card.position === 'left'
                    ? '2px solid transparent'
                    : card.highlight
                    ? '2px solid #0B4D8C'
                    : '2px solid #e5e7eb',
                  backgroundImage: card.position === 'left'
                    ? 'linear-gradient(white, white), linear-gradient(135deg, #0B4D8C 0%, #1E7A3B 100%)'
                    : undefined,
                  backgroundOrigin: card.position === 'left' ? 'border-box' : undefined,
                  backgroundClip: card.position === 'left' ? 'padding-box, border-box' : undefined,
                  boxShadow: card.highlight
                    ? '0 20px 40px -10px rgba(11, 77, 140, 0.3)'
                    : undefined
                }}
              >
                {card.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pine-gold text-pine-navy px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    <span className="text-lg">⭐</span> Most Popular
                  </div>
                )}

                {card.position === 'right' && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E7A3B] to-[#0B4D8C] rounded-t-2xl"></div>
                )}

                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-6">
                    <h3 className="text-2xl font-bold text-[#0B4D8C] mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-pine-navy/70 leading-relaxed mb-6">
                      {card.tagline}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#1E7A3B] to-[#0B4D8C] bg-clip-text text-transparent">
                        {card.price}
                      </span>
                      <span className="text-base text-pine-navy/60 ml-2">
                        {card.priceSubtext}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow space-y-3 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-[#1E7A3B] flex-shrink-0 mt-0.5" />
                        <span className="text-pine-navy/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}

                    {card.addOn && (
                      <div className="pt-4 mt-4 border-t border-pine-green/20">
                        <p className="text-sm font-semibold text-[#1E7A3B]">
                          Add-On: {card.addOn}
                        </p>
                      </div>
                    )}

                    {card.subPricing && (
                      <div className="pt-4 mt-4 border-t border-pine-green/20 space-y-2">
                        {card.subPricing.map((sub, subIndex) => (
                          <div key={subIndex} className="flex justify-between items-center py-2 px-3 bg-[#F9FAFB] rounded-lg">
                            <div>
                              <span className="text-sm font-semibold text-[#0B4D8C]">{sub.name}</span>
                              {sub.description && (
                                <span className="text-xs text-pine-navy/60 ml-2">({sub.description})</span>
                              )}
                              {sub.savings && (
                                <span className="text-xs text-[#1E7A3B] font-bold ml-2">({sub.savings})</span>
                              )}
                            </div>
                            <span className="text-sm font-bold text-pine-navy">{sub.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {card.footerNote && (
                      <p className="text-xs italic text-pine-navy/60 mt-4 pt-4 border-t border-pine-green/10">
                        {card.footerNote}
                      </p>
                    )}
                  </div>

                  <motion.button
                    onClick={() => handleCTAClick('cta-pricing', openInquiryModal)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        '0 10px 20px -3px rgba(11, 77, 140, 0.4)',
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop"
                      }
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                      card.ctaStyle === 'summit'
                        ? 'bg-[#0B4D8C] hover:bg-gradient-to-r hover:from-[#0B4D8C] hover:to-[#1E7A3B] text-white shadow-lg'
                        : card.ctaStyle === 'primary'
                        ? 'bg-[#1E7A3B] hover:bg-gradient-to-r hover:from-[#1E7A3B] hover:to-[#0B4D8C] text-white shadow-lg'
                        : 'bg-pine-white hover:bg-[#1E7A3B] text-pine-navy hover:text-white border-2 border-pine-green/30 shadow-md'
                    }`}
                  >
                    {card.ctaText}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 bg-white rounded-2xl border-2 border-[#1E7A3B]/20 shadow-xl"
        >
          <p className="text-xl text-pine-navy/80 mb-6 font-medium leading-relaxed">
            Not sure which plan fits you best? Schedule a free 15-minute consultation — we'll help you choose the right one.
          </p>
          <motion.button
            onClick={() => handleCTAClick('cta-pricing-consult', openInquiryModal)}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(30, 122, 59, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#1E7A3B] hover:bg-gradient-to-r hover:from-[#1E7A3B] hover:to-[#0B4D8C] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl"
          >
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
