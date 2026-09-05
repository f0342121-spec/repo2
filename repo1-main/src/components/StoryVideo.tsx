import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface StoryVideoProps {
  src: string;
  label?: string;
}

export default function StoryVideo({ src, label = 'a memory in motion' }: StoryVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="group relative aspect-[9/12] w-full overflow-hidden rounded-2xl border border-gold-400/10 bg-ink-800 sm:aspect-[16/10]">
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        onClick={togglePlay}
      />

      {/* Placeholder overlay when no video */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-wine-700 via-ink-700 to-ink-800">
          <div className="absolute inset-0 ambient-glow opacity-50" />
          <span className="relative z-10 font-serif text-sm italic text-ivory-400/40">
            {label}
          </span>
          <span className="relative z-10 mt-1 font-sans text-[10px] tracking-ultra-wide text-ivory-400/20">
            replace with your video
          </span>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-ink-900/20" />

      {/* Custom play button */}
      {loaded && (
        <button
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass-strong transition-all duration-500 hover:scale-110 active:scale-95"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          <span
            className="absolute inset-0 rounded-full blur-lg transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 142, 123, 0.25), transparent 70%)',
              opacity: 1,
            }}
          />
          {playing ? (
            <Pause size={20} className="relative z-10 text-ivory-100" />
          ) : (
            <Play size={20} fill="currentColor" className="relative z-10 ml-1 text-ivory-100" />
          )}
        </button>
      )}

      {/* Bottom label */}
      <span className="absolute bottom-5 left-5 font-sans text-[9px] tracking-ultra-wide text-ivory-400/30">
        A MEMORY · {playing ? 'NOW PLAYING' : 'PRESS PLAY'}
      </span>
    </div>
  );
}
