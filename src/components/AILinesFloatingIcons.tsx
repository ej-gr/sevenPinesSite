import { motion } from 'framer-motion';
import { Phone, CheckCircle, Clock, MessageCircle } from 'lucide-react';

const icons = [
  {
    icon: Phone,
    initialX: -80,
    initialY: -60,
    animateX: [-80, -100, -80],
    animateY: [-60, -40, -60],
    duration: 4,
    delay: 0,
    size: 20,
    color: 'text-pine-green',
  },
  {
    icon: CheckCircle,
    initialX: 100,
    initialY: -80,
    animateX: [100, 120, 100],
    animateY: [-80, -60, -80],
    duration: 5,
    delay: 1,
    size: 18,
    color: 'text-pine-gold',
  },
  {
    icon: Clock,
    initialX: -120,
    initialY: 80,
    animateX: [-120, -140, -120],
    animateY: [80, 100, 80],
    duration: 6,
    delay: 0.5,
    size: 16,
    color: 'text-pine-green',
  },
  {
    icon: MessageCircle,
    initialX: 90,
    initialY: 100,
    animateX: [90, 110, 90],
    animateY: [100, 80, 100],
    duration: 4.5,
    delay: 1.5,
    size: 19,
    color: 'text-pine-gold',
  },
];

export default function AILinesFloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {icons.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            className={`absolute ${item.color} opacity-30`}
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{
              x: item.initialX,
              y: item.initialY,
              opacity: 0,
            }}
            animate={{
              x: item.animateX,
              y: item.animateY,
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}









