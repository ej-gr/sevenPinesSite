import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle, Mail, PhoneIncoming } from 'lucide-react';
import { useEffect, useState } from 'react';

const stages = [
  {
    id: 1,
    icon: PhoneIncoming,
    label: 'Call Received',
    color: 'text-pine-green',
  },
  {
    id: 2,
    icon: Phone,
    label: 'AI Answers',
    color: 'text-pine-green',
  },
  {
    id: 3,
    icon: MessageCircle,
    label: 'Conversation',
    color: 'text-pine-navy',
  },
  {
    id: 4,
    icon: CheckCircle,
    label: 'Data Captured',
    color: 'text-pine-green',
  },
  {
    id: 5,
    icon: Mail,
    label: 'Sent to Inbox',
    color: 'text-pine-navy',
  },
];

export default function AILinesCallFlow() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const totalDuration = stages.length * 2000; // 2 seconds per stage
    const pauseDuration = 2000; // 2 second pause
    
    const interval = setInterval(() => {
      setActiveStage(prev => {
        if (prev >= stages.length - 1) {
          // Pause at the end, then reset
          setTimeout(() => setActiveStage(0), pauseDuration);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12" aria-label="AI Lines call flow process">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage >= idx;
          const isCurrent = activeStage === idx;

          return (
            <div key={stage.id} className="flex items-center gap-4 md:gap-6">
              {/* Stage Item */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isCurrent ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon Container */}
                <motion.div
                  className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center ${
                    isActive
                      ? 'bg-pine-green/20 border-2 border-pine-green'
                      : 'bg-pine-white/50 border-2 border-pine-green/20'
                  }`}
                  animate={isCurrent ? {
                    boxShadow: [
                      '0 0 0 0 rgba(22, 92, 47, 0.4)',
                      '0 0 0 20px rgba(22, 92, 47, 0)',
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: isCurrent ? Infinity : 0,
                  }}
                >
                  <Icon
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${stage.color} ${
                      isActive ? 'opacity-100' : 'opacity-50'
                    }`}
                    aria-hidden="true"
                  />
                  
                  {/* Checkmark overlay for completed stages */}
                  {isActive && !isCurrent && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-pine-green rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" aria-hidden="true" />
                    </motion.div>
                  )}
                  
                  {/* Animated pulse for current stage */}
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-pine-gold"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{
                        scale: [1, 1.3, 1.3],
                        opacity: [0.8, 0.2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.p
                  className={`mt-3 text-sm lg:text-base font-semibold text-center ${
                    isActive ? 'text-pine-navy' : 'text-pine-navy/40'
                  }`}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {stage.label}
                </motion.p>
              </motion.div>

              {/* Arrow between stages */}
              {idx < stages.length - 1 && (
                <motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: activeStage > idx ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                  aria-hidden="true"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={activeStage > idx ? 'text-pine-green' : 'text-pine-green/30'}
                  >
                    <path
                      d="M0 12H38M38 12L28 2M38 12L28 22"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 max-w-xl mx-auto">
        <div className="w-full h-2 bg-pine-green/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-pine-green rounded-full"
            initial={{ width: '0%' }}
            animate={{
              width: `${((activeStage + 1) / stages.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

