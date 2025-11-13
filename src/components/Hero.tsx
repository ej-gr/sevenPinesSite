import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedSevenPinesLogo from './AnimatedSevenPinesLogo';
import { useModal } from '../contexts/ModalContext';
import { handleCTAClick } from '../utils/cta';
import { motion } from 'framer-motion';

export default function Hero() {
  const { openContactModal } = useModal();

  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/3620220-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-pine-green/70 via-pine-navy/60 to-[#0B4D8C]/70"></div>

      <div className="logo-wrap relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <AnimatedSevenPinesLogo />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-2xl"
          >
            Your New Website — Built and Launched in 7 Days.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-pine-white/95 max-w-4xl mx-auto leading-relaxed mt-8 drop-shadow-lg font-medium"
          >
            We design, build, and automate beautiful websites for small businesses — fast, affordable, and stress-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center pt-12"
          >
            <button
              id="cta-hero-primary"
              onClick={() => handleCTAClick('cta-hero-primary', openContactModal)}
              className="group px-12 py-6 bg-pine-gold hover:bg-gradient-to-r hover:from-pine-green hover:to-[#0B4D8C] text-pine-navy hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pine-gold/60 hover:scale-105 flex items-center gap-3"
            >
              Start Your 7-Day Launch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 flex flex-wrap justify-center gap-8 sm:gap-12 text-white border-t border-white/30 mt-12 pt-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pine-gold rounded-full shadow-lg shadow-pine-gold/50 animate-pulse"></div>
              <span className="text-base sm:text-lg font-bold drop-shadow-lg">7-Day Turnaround</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pine-gold rounded-full shadow-lg shadow-pine-gold/50 animate-pulse"></div>
              <span className="text-base sm:text-lg font-bold drop-shadow-lg">Custom Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pine-gold rounded-full shadow-lg shadow-pine-gold/50 animate-pulse"></div>
              <span className="text-base sm:text-lg font-bold drop-shadow-lg">Full Launch Support</span>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70 drop-shadow-lg" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
