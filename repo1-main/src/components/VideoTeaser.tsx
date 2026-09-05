import { Play } from 'lucide-react';
import Reveal from './Reveal';
import AmbientGlow from './AmbientGlow';

export default function VideoTeaser() {
  return (
    <section id="songs" className="relative py-24 sm:py-32">
      <AmbientGlow />
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold-400/10 bg-wine-800 sm:aspect-[16/8]">
            {/* Video placeholder */}
            <video
              src="/videos/us.mp4"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              muted
              playsInline
              preload="metadata"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blush-400/10 via-wine-900/40 to-ink-900/90" />
            <div className="absolute inset-0 vignette" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <p className="max-w-xl font-serif text-3xl font-light leading-tight text-ivory-100 sm:text-5xl">
                There are some moments
                <br />
                <span className="italic text-blush-100">pictures couldn't hold.</span>
              </p>

              <button className="group mt-10 flex items-center gap-4 rounded-full border border-gold-400/30 px-6 py-3 transition-all duration-500 hover:border-gold-400/60 hover:bg-blush-400/5 active:scale-95">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory-100 text-ink-900 transition-transform duration-500 group-hover:scale-110">
                  <Play size={12} fill="currentColor" />
                </span>
                <span className="font-sans text-xs tracking-wide-2 text-ivory-200">
                  Someday, press play.
                </span>
              </button>
            </div>

            <span className="absolute bottom-6 left-6 font-sans text-[9px] tracking-ultra-wide text-ivory-400/30">
              A LITTLE FILM · 00:00
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
