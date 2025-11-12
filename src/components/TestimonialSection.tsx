import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  business: string;
  testimonial: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    business: 'Green Leaf Wellness',
    testimonial: 'Seven Pines delivered a stunning website in exactly 7 days. Their process was clear, communication was excellent, and the end result exceeded our expectations. Our bookings have doubled since launch!',
    rating: 5,
    project: 'Website & Branding'
  },
  {
    name: 'Marcus Chen',
    business: 'Precision Auto Detail',
    testimonial: 'I was skeptical about the 7-day timeline, but EJ and his team proved me wrong. They built a professional, fast-loading site that perfectly captures our brand. Best investment we\'ve made.',
    rating: 5,
    project: 'Website in 7 Days'
  },
  {
    name: 'Jennifer Torres',
    business: 'Blueprint Legal',
    testimonial: 'The automation setup has been a game-changer. Leads come in 24/7, and the follow-up sequences run automatically. Seven Pines doesn\'t just build websites—they build systems that work.',
    rating: 5,
    project: 'Website & Automation'
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pine-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pine-green/10 text-pine-green rounded-full text-sm font-semibold mb-4">
            Client Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
            Built for Growth, <span className="text-pine-green">Built in 7 Days</span>
          </h2>
          <p className="text-xl text-pine-navy/70 max-w-3xl mx-auto">
            Real results from small businesses who chose Seven Pines for their digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-pine-green/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-pine-gold/20">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pine-gold text-pine-gold" />
                ))}
              </div>

              <p className="text-pine-navy/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.testimonial}"
              </p>

              <div className="border-t border-pine-green/10 pt-6">
                <p className="font-bold text-pine-navy mb-1">{testimonial.name}</p>
                <p className="text-sm text-pine-navy/60 mb-2">{testimonial.business}</p>
                <div className="inline-block px-3 py-1 bg-pine-gold/20 text-pine-green text-xs font-semibold rounded-full">
                  {testimonial.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-white rounded-2xl shadow-lg border border-pine-green/10">
            <div className="text-center px-6 border-r border-pine-green/10">
              <div className="text-4xl font-bold text-pine-green mb-1">20+</div>
              <div className="text-sm text-pine-navy/70">Sites Launched</div>
            </div>
            <div className="text-center px-6 border-r border-pine-green/10">
              <div className="text-4xl font-bold text-pine-green mb-1">100%</div>
              <div className="text-sm text-pine-navy/70">On-Time Delivery</div>
            </div>
            <div className="text-center px-6">
              <div className="text-4xl font-bold text-pine-green mb-1">5★</div>
              <div className="text-sm text-pine-navy/70">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
