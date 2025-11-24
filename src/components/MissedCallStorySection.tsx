import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MissedCallStorySectionProps {
  className?: string;
  annualLoss?: number;
  missedCallsCount?: number;
  loopDelayMs?: number;
}

// Hook to detect reduced motion preference
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Currency formatter helper
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Card 1: The Cost
function TheCostCard({ annualLoss, prefersReducedMotion }: {
  annualLoss: number;
  prefersReducedMotion: boolean;
}) {
  const [currentLossAmount, setCurrentLossAmount] = useState(prefersReducedMotion ? annualLoss : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const runSequence = async () => {
      setCurrentLossAmount(0);

      // Animate counter
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const lossIncrement = annualLoss / steps;

      for (let i = 1; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, stepDuration));
        setCurrentLossAmount(Math.round(lossIncrement * i));
      }

      setCurrentLossAmount(annualLoss);
      await new Promise(resolve => setTimeout(resolve, 2000));
    };

    runSequence();
    const interval = setInterval(runSequence, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, annualLoss]);

  return (
    <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/70 border border-white/10 shadow-xl shadow-black/40 flex flex-col h-full min-h-[280px]">
      <div className="text-sm uppercase tracking-wider text-slate-400 mb-3 font-semibold">1 · The cost</div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <motion.div
          key={currentLossAmount}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.96, 1, 0.96],
            scale: [0.97, 1, 0.97],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="mb-8"
        >
          <div className="text-5xl md:text-6xl font-bold tabular-nums mb-2" style={{ color: '#FF7A6A' }}>
            {formatCurrency(currentLossAmount)}
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mx-auto"
            style={{ color: '#FF7A6A', opacity: 0.4 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-2">
          Lost each year.
        </h3>
        
        <p className="text-sm md:text-base text-slate-400 max-w-sm">
          The average small business loses this to missed calls.
        </p>
      </div>
    </div>
  );
}

// Card 2: The Reality
function TheRealityCard({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/70 border border-white/10 shadow-xl shadow-black/40 flex flex-col h-full min-h-[280px]">
      <div className="text-sm uppercase tracking-wider text-slate-400 mb-3 font-semibold">2 · The reality</div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <div className="mb-8 flex justify-center">
          <motion.svg
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            viewBox="0 0 80 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-20 text-slate-500"
          >
            {/* iPhone 15 silhouette */}
            <rect x="10" y="5" width="60" height="90" rx="12" ry="12" />
            {/* Dynamic Island */}
            <rect x="30" y="10" width="20" height="5" rx="2.5" ry="2.5" fill="currentColor" />
            {/* Screen indicator line */}
            <line x1="20" y1="85" x2="60" y2="85" strokeWidth="2" opacity="0.3" />
            
            {/* Downward arrow indicating missed call */}
            <path d="M40 50v-20" strokeWidth="3" />
            <path d="M33 43l7 7 7-7" strokeWidth="3" />
          </motion.svg>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-2">
          You can't answer every call.
        </h3>
        
        <p className="text-sm md:text-base text-slate-400 max-w-sm">
          You're busy, on a job, or after hours — callers move on.
        </p>
      </div>
    </div>
  );
}

// Card 3: The Fix
function TheFixCard({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/70 border border-white/10 shadow-xl shadow-black/40 flex flex-col h-full min-h-[280px]">
      <div className="text-sm uppercase tracking-wider text-slate-400 mb-3 font-semibold">3 · The fix</div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <motion.div
          animate={prefersReducedMotion ? {} : {
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="mb-11"
        >
          <svg 
            className="w-14 h-14 text-pine-green/90" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-2">
          AI Lines answers when you can't.
        </h3>
        
        <p className="text-sm md:text-base text-slate-400 max-w-sm">
          We handle customer questions, scheduling, and lead capture 24/7.
        </p>
      </div>
    </div>
  );
}

// Main Component
export default function MissedCallStorySection({
  className = '',
  annualLoss = 62000,
  missedCallsCount = 42,
  loopDelayMs = 2000
}: MissedCallStorySectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={className}>
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white leading-tight">
          Unanswered calls are quietly draining your revenue
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        <TheCostCard 
          annualLoss={annualLoss}
          prefersReducedMotion={prefersReducedMotion}
        />
        <TheRealityCard prefersReducedMotion={prefersReducedMotion} />
        <TheFixCard prefersReducedMotion={prefersReducedMotion} />
      </div>
    </div>
  );
}

