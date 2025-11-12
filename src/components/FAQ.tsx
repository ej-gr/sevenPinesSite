import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Can you really build a custom website in just 7 days?',
    answer: 'Yes! Our proven process breaks down the build into daily milestones. Day 1-2: Strategy and wireframes. Day 3-4: Design and content. Day 5-6: Development and testing. Day 7: Launch and training. We stay focused, communicate daily, and deliver on time—every time.'
  },
  {
    question: 'What makes Seven Pines different from other web design agencies?',
    answer: 'We\'re a husband-and-wife team who grew up around small businesses, so we understand your challenges firsthand. Unlike large agencies with lengthy timelines and high costs, we specialize in fast, focused builds that deliver real results. Every site is custom-crafted, not templated.'
  },
  {
    question: 'Do I need to provide all content and images upfront?',
    answer: 'Not necessarily. We guide you through content creation as part of the process. If you have brand assets ready, that\'s great—but if not, we can help with copywriting, suggest stock photos, or connect you with photographers. Our goal is to make this easy for you.'
  },
  {
    question: 'What happens after the 7-day build is complete?',
    answer: 'You own everything—domain, hosting, content, and code. We provide training so you can make basic updates yourself. We also offer ongoing support packages and monthly retainers for businesses that need continued updates, SEO, or automation improvements.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment options to make your investment manageable. Typically, we split payments into 50% upfront and 50% at launch. We\'ll work with you to find a structure that fits your budget.'
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'Your 7-day package includes one round of revisions before launch. After launch, minor tweaks in the first 30 days are covered. For ongoing updates, we offer support packages starting at $150/month or hourly rates for one-off changes.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely. Every site we build is fully responsive and tested on desktop, tablet, and mobile devices. Mobile-first design is standard—not an add-on.'
  },
  {
    question: 'Can you help with SEO and getting found on Google?',
    answer: 'Yes. Every website includes basic on-page SEO—meta tags, fast loading speeds, clean code, and mobile optimization. For local businesses, we can set up Google Business Profile integration and location-specific keywords like "web design Windsor CT." Advanced SEO and ongoing optimization are available as add-ons.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with all types of small businesses—from wellness and professional services to trades, retail, and creative studios. If you\'re passionate about what you do and ready to grow online, we\'re ready to help.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
            Frequently Asked <span className="text-pine-green">Questions</span>
          </h2>
          <p className="text-xl text-pine-navy/70">
            Everything you need to know about working with Seven Pines
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-pine-green/10 rounded-xl overflow-hidden hover:border-pine-gold/30 transition-all duration-300"
              style={{ marginBottom: '1.5em' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between bg-white hover:bg-pine-white/50 transition-colors text-left"
              >
                <span className="text-lg font-semibold text-pine-navy pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-pine-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-pine-green" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-6 bg-pine-white/30 border-t border-pine-green/10">
                  <p className="text-pine-navy/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-pine-navy/70 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-pine-green hover:text-pine-gold font-semibold transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
