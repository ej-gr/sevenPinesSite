import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ChatTrigger() {
  const location = useLocation();

  useEffect(() => {
    // Pages that should have proactive chat nudges
    const proactivePages = ['/services', '/contact'];
    
    // Check if current page should trigger chat
    const shouldTrigger = proactivePages.some(page => 
      location.pathname === page || location.pathname.startsWith(page)
    );

    if (shouldTrigger) {
      // Random delay between 8-12 seconds for natural feel
      const delay = 8000 + Math.random() * 4000;
      
      const timer = setTimeout(() => {
        // Check if chat widget is loaded
        if (window.ghlChatWidget) {
          try {
            // Open the chat widget
            window.ghlChatWidget.open();
          } catch (error) {
            console.log('Chat widget not ready yet');
          }
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ghlChatWidget?: {
      open: () => void;
      close: () => void;
    };
  }
}

