import { X, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface AudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  audioUrl: string;
  title?: string;
}

export default function AudioModal({ isOpen, onClose, audioUrl, title = 'AI Lines Demo' }: AudioModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset audio when modal closes
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      aria-label="Close audio modal"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audio-modal-title"
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 id="audio-modal-title" className="text-2xl font-bold text-slate-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close audio modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-32 h-32 bg-gradient-to-br from-pine-green to-pine-navy rounded-full flex items-center justify-center shadow-lg">
              <button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-pine-navy mb-2">
                {isPlaying ? 'Playing...' : 'Click to play'}
              </p>
              <p className="text-sm text-pine-navy/70">
                Hear AI Lines in action
              </p>
            </div>

            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={handleEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

