import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer id="surprise" className="relative px-6 pb-12 pt-24 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
          <p className="font-serif text-xl italic text-ivory-200/80 sm:text-2xl">
            Made with an unreasonable amount of love.
          </p>
          <p className="mt-4 font-hand text-lg text-blush-200/70">
            for my favourite human ♡
          </p>
        </Reveal>

        <div className="mt-20 flex items-center justify-between border-t border-ivory-200/5 pt-5">
          <span className="font-sans text-[9px] tracking-wide-2 text-ivory-400/25">
            JUST FOR US
          </span>
          <span className="font-serif text-sm italic text-ivory-400/30">∞</span>
          <span className="font-sans text-[9px] tracking-wide-2 text-ivory-400/25">
            ALWAYS
          </span>
        </div>
      </div>
    </footer>
  );
}
