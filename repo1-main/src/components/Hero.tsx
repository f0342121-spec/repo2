import { useEffect, useState } from 'react';
import PhotoPlaceholder from './PhotoPlaceholder';
import DustField from './DustField';
import AmbientGlow from './AmbientGlow';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AmbientGlow intensity="medium" />
      <DustField count={30} />

      {/* Hero photo with editorial framing */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 pt-24 sm:pt-20">
        {/* Photo container */}
        <div className="relative w-full">
          {/* Decorative frame elements */}
          <div className="absolute -left-2 -top-2 z-20 h-16 w-16 border-l border-t border-gold-400/20 sm:h-20 sm:w-20" />
          <div className="absolute -bottom-2 -right-2 z-20 h-16 w-16 border-b border-r border-gold-400/20 sm:h-20 sm:w-20" />

          <div
            className="relative aspect-[4/5] w-full sm:aspect-[16/10] sm:w-full"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <PhotoPlaceholder
              src="/images/hero-couple.jpg"
              alt="Us together"
              rounded="rounded-3xl"
              label="our photo"
              className="h-full w-full"
            />

            {/* Vignette and gradient mask */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl vignette" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-ink-900/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Overlay text */}
        <div className="relative z-20 -mt-32 flex flex-col items-center text-center sm:-mt-24">
          <p
            className="font-hand text-lg text-blush-200/80 sm:text-xl"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            you're my favourite place.
          </p>

          <h1 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory-100 sm:text-5xl md:text-6xl">
            A little corner of the internet,
            <br />
            <span className="italic text-blush-100">made only for you.</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-ivory-300/70 sm:text-base">
            Every picture, every memory, every stupid little moment I never want to forget.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/40">
            SCROLL
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-400/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
