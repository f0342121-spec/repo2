import { useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import DustField from './DustField';
import AmbientGlow from './AmbientGlow';

interface IntroProps {
  onEnter: () => void;
}

const lines = [
  { text: 'I tried writing you a message…', delay: 600, primary: true },
  { text: 'but somehow, words never felt enough.', delay: 2600, primary: false },
  { text: 'So I made you a little place instead.', delay: 4800, primary: true },
];

const signature = { text: 'For you. Always. ♡', delay: 7000 };
const buttonDelay = 8200;

export default function Intro({ onEnter }: IntroProps) {
  const [stage, setStage] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStage(1), lines[0].delay));
    timers.push(setTimeout(() => setStage(2), lines[1].delay));
    timers.push(setTimeout(() => setStage(3), lines[2].delay));
    timers.push(setTimeout(() => setStage(4), signature.delay));
    timers.push(setTimeout(() => setStage(5), buttonDelay));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = useCallback(() => {
    setExiting(true);
    setTimeout(onEnter, 1400);
  }, [onEnter]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink-900 transition-opacity duration-1000 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <AmbientGlow intensity="medium" />
      <DustField count={45} />

      {/* Rose-gold shimmer accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 75% 25%, rgba(201, 142, 123, 0.06), transparent 70%)',
          animation: 'shimmer 8s ease-in-out infinite',
        }}
      />

      {/* Sound toggle */}
      <button
        onClick={() => setSoundOn((s) => !s)}
        className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full glass text-ivory-300 transition-colors hover:text-ivory-100 sm:right-8 sm:top-8"
        aria-label={soundOn ? 'Mute sound' : 'Enable sound'}
      >
        {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
      </button>

      {/* Center content — vertical flex, no absolute positioning */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center sm:px-8">
        {/* Sequence lines — each occupies its own layout space */}
        <div className="flex flex-col gap-7 sm:gap-9">
          {lines.map((line, i) => (
            <div
              key={i}
              className="transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: stage > i ? 1 : 0,
                transform: stage > i ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <p
                className="font-serif italic leading-[1.35] text-ivory-100"
                style={{
                  fontSize: line.primary
                    ? 'clamp(1.75rem, 5vw, 3.25rem)'
                    : 'clamp(1.4rem, 4vw, 2.6rem)',
                }}
              >
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div
          className="mt-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-12"
          style={{
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <p className="font-hand text-xl text-blush-200 sm:text-2xl">
            {signature.text}
          </p>
        </div>

        {/* Enter button */}
        <div
          className="mt-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-14"
          style={{
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <button
            onClick={handleEnter}
            className="group relative overflow-hidden rounded-full border border-gold-400/40 px-10 py-4 transition-all duration-500 hover:border-gold-400/70 active:scale-95 sm:px-12 sm:py-5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-wine-700/30 via-blush-400/15 to-wine-700/30 transition-opacity duration-700" />
            <span
              className="absolute -inset-1 rounded-full blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-50"
              style={{ background: 'radial-gradient(ellipse at center, rgba(201, 142, 123, 0.35), transparent 70%)' }}
            />
            <span className="relative z-10 font-sans text-sm tracking-wide-2 text-ivory-100 transition-colors duration-300 group-hover:text-blush-100">
              Enter our little world
            </span>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </div>
  );
}
