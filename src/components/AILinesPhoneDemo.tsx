import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneCall, Volume2, Signal } from 'lucide-react';
import { useState, useEffect } from 'react';

const DEMO_PHONE = '716-403-3341';

type CallState = 'idle' | 'dialing' | 'ringing' | 'connected';

export default function AILinesPhoneDemo() {
  const [callState, setCallState] = useState<CallState>('idle');
  const [callDuration, setCallDuration] = useState(0);

  // Call duration timer
  useEffect(() => {
    if (callState === 'connected') {
      const interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCallDuration(0);
    }
  }, [callState]);

  // Auto-play call sequence with non-overlapping timing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (callState === 'idle') {
      timer = setTimeout(() => setCallState('dialing'), 2500);
    } else if (callState === 'dialing') {
      timer = setTimeout(() => setCallState('ringing'), 4000);
    } else if (callState === 'ringing') {
      timer = setTimeout(() => setCallState('connected'), 5000);
    } else if (callState === 'connected') {
      timer = setTimeout(() => setCallState('idle'), 3000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [callState]);

  const handleCallClick = () => {
    window.location.href = `tel:${DEMO_PHONE}`;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .premium-shimmer {
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
          }
        `}
      </style>

      {/* iPhone Mockup - Premium Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
        style={{ width: '300px', height: '610px' }}
      >
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-pine-green/20 via-pine-navy/10 to-transparent blur-xl -z-10"></div>

        {/* iPhone Frame - Titanium/Pro Design */}
        <div className="absolute inset-0 rounded-[56px] shadow-[0_0_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden">
          {/* Metallic Frame Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[56px] border-[14px] border-gray-900/90" 
               style={{
                 boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.8)'
               }}>
            
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2 px-4">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="w-12 h-4 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Screen with Glass Morphism */}
            <div className="absolute inset-[14px] rounded-[42px] overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)',
                   backdropFilter: 'blur(20px)',
                   boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)'
                 }}>
              
              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 premium-shimmer pointer-events-none opacity-30"></div>

              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-6 text-white/90 text-xs font-medium z-10"
                   style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)' }}>
                <span className="font-semibold">{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                <div className="flex items-center gap-2">
                  <Signal className="w-3 h-3" />
                  <div className="flex items-center gap-0.5">
                    <div className="w-1 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                    <div className="w-1 h-2.5 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                  </div>
                  <div className="w-5 h-3 border border-white/60 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Call Screen Content with Glass Effect */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-16 pb-32">
                <AnimatePresence mode="wait" initial={false}>
                  {/* Idle State */}
                  {callState === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-28 h-28 mx-auto mb-8 rounded-full flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #165C2F 0%, #1E7A3B 100%)',
                          boxShadow: '0 10px 40px rgba(22, 92, 47, 0.4), inset 0 0 0 1px rgba(255,255,255,0.1)'
                        }}
                      >
                        <img 
                          src="/AI%20Lines%20Logo.png" 
                          alt="AI Lines Logo" 
                          className="w-20 h-20 object-contain"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(22, 92, 47, 0.4)',
                              '0 0 0 20px rgba(22, 92, 47, 0)',
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      <p className="text-white/80 text-sm font-medium">Tap to call AI Lines</p>
                      <p className="text-white/50 text-xs mt-1">Experience 24/7 AI voice agent</p>
                    </motion.div>
                  )}

                  {/* Dialing State */}
                  {callState === 'dialing' && (
                    <motion.div
                      key="dialing"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(22, 92, 47, 0.2) 0%, rgba(22, 92, 47, 0.1) 100%)',
                          border: '2px solid rgba(22, 92, 47, 0.3)'
                        }}
                      >
                        <PhoneCall className="w-12 h-12 text-pine-green" />
                      </motion.div>
                      <p className="text-white text-2xl font-bold mb-1">AI Lines</p>
                      <p className="text-white/60 text-sm mb-3">Calling...</p>
                      <p className="text-white/40 text-xs font-mono">{DEMO_PHONE}</p>
                    </motion.div>
                  )}

                  {/* Ringing State */}
                  {callState === 'ringing' && (
                    <motion.div
                      key="ringing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <motion.div
                        key="ringing-icon"
                        animate={{ 
                          scale: [1, 1.08, 1],
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-28 h-28 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                        style={{
                          background: 'linear-gradient(135deg, #165C2F 0%, #1E7A3B 100%)',
                          boxShadow: '0 10px 40px rgba(22, 92, 47, 0.5)'
                        }}
                      >
                        <PhoneCall className="w-14 h-14 text-white" />
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`ring-${i}`}
                            className="absolute inset-0 rounded-full border-2 border-pine-green"
                            animate={{ 
                              scale: [1, 1.9, 1.9],
                              opacity: [0.5, 0, 0]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                      <p className="text-white text-2xl font-bold mb-1">AI Lines</p>
                      <motion.p 
                        className="text-pine-gold text-sm font-medium mb-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Ringing...
                      </motion.p>
                      <p className="text-white/40 text-xs font-mono mt-2">{DEMO_PHONE}</p>
                    </motion.div>
                  )}

                  {/* Connected State */}
                  {callState === 'connected' && (
                    <motion.div
                      key="connected"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="text-center"
                    >
                      <motion.div
                        key="connected-icon"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: [0.95, 1, 0.95] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        className="w-28 h-28 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #10B981 0%, #165C2F 100%)',
                          boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
                        }}
                      >
                        <Volume2 className="w-14 h-14 text-white" />
                      </motion.div>
                      <p className="text-white text-2xl font-bold mb-1">AI Lines</p>
                      <p className="text-green-400 text-sm font-medium mb-2">Connected</p>
                      <p className="text-white/50 text-xs font-mono">{formatTime(callDuration)}</p>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Premium Call Button */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center px-8 z-20">
                <motion.button
                  onClick={handleCallClick}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: callState === 'connected'
                      ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
                      : 'linear-gradient(135deg, #165C2F 0%, #1E7A3B 100%)',
                    boxShadow: '0 10px 30px rgba(22, 92, 47, 0.4), inset 0 0 0 1px rgba(255,255,255,0.1)'
                  }}
                  aria-label="Call AI Lines demo"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={callState === 'connected' ? {
                      boxShadow: [
                        '0 0 0 0 rgba(239, 68, 68, 0.4)',
                        '0 0 0 15px rgba(239, 68, 68, 0)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Phone className="w-10 h-10 text-white relative z-10" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Side Buttons */}
        <div className="absolute right-[-5px] top-28 w-1.5 h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r shadow-lg"></div>
        <div className="absolute right-[-5px] top-48 w-1.5 h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r shadow-lg"></div>
        <div className="absolute left-[-5px] top-32 w-1.5 h-10 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l shadow-lg"></div>
      </motion.div>

      {/* Premium Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-white text-base font-bold mb-1 tracking-wide">Try It Live</p>
        <p className="text-white/70 text-sm">Call {DEMO_PHONE} to experience AI Lines</p>
      </motion.div>
    </div>
  );
}

