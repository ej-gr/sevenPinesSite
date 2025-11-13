import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function AILinesAlwaysOn() {
  return (
    <div className="flex flex-col items-center justify-center" aria-label="24/7 AI Lines service indicator">
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 50% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 50% 50%;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .ai-lines-rotate {
              animation: none !important;
            }
            .ai-lines-gradient {
              animation: none !important;
              background: linear-gradient(135deg, #165C2F 0%, #08293C 100%);
            }
          }
        `}
      </style>

      <div className="relative w-40 h-40 mb-4">
        {/* Animated Gradient Background */}
        <motion.div
          className="ai-lines-gradient absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #165C2F 25%, #08293C 50%, #0D9488 75%, #10B981 100%)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 12s ease infinite',
          }}
          aria-hidden="true"
        />
        
        {/* Inner Glow Layer */}
        <div
          className="absolute inset-2 rounded-full bg-white/5"
          style={{ filter: 'blur(4px)' }}
          aria-hidden="true"
        />

        {/* Rotating Outer Ring */}
        <motion.div
          className="ai-lines-rotate absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.25)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        >
          {/* Ring accent mark */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/50 rounded-full"
            aria-hidden="true"
          />
        </motion.div>

        {/* Phone Icon (Always Active) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Phone 
              className="w-10 h-10 text-white relative z-10" 
              style={{ opacity: 0.9 }}
              aria-hidden="true" 
            />
          </motion.div>
        </div>
      </div>

      {/* Always Active Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-white text-sm font-semibold tracking-wider uppercase"
      >
        Always Active
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-pine-white/80 text-xs"
      >
        24/7 Coverage
      </motion.div>
    </div>
  );
}

