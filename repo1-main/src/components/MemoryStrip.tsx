import Reveal from './Reveal';
import PhotoPlaceholder from './PhotoPlaceholder';

const memories = [
  { src: '/images/memory-1.jpg', caption: 'one of those days I wish I could replay.', rotation: 'sm:-rotate-2' },
  { src: '/images/memory-2.jpg', caption: 'you, being effortlessly you.', rotation: 'sm:rotate-1', offset: 'sm:mt-8' },
  { src: '/images/memory-3.jpg', caption: 'a small moment that meant everything.', rotation: 'sm:-rotate-1' },
  { src: '/images/memory-4.jpg', caption: 'somewhere I would always find you.', rotation: 'sm:rotate-2', offset: 'sm:mt-6' },
];

export default function MemoryStrip() {
  return (
    <section id="memories" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex items-end justify-between sm:mb-16">
          <div>
            <p className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/40">
              KEPT CLOSE
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-ivory-100 sm:text-5xl">
              Little pieces of us
            </h2>
          </div>
          <span className="hidden font-hand text-lg text-blush-200/60 sm:block">
            swipe through our days →
          </span>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="no-scrollbar mask-fade-edges flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:gap-8 sm:px-[calc((100vw-1152px)/2)]">
          {memories.map((memory, i) => (
            <div
              key={i}
              className={`w-[72vw] flex-none snap-center sm:w-[280px] ${memory.offset ?? ''} ${memory.rotation}`}
            >
              <PhotoPlaceholder
                src={memory.src}
                alt={`Memory ${i + 1}`}
                label={`memory 0${i + 1}`}
                className="aspect-[4/5] w-full rounded-xl"
              />
              <p className="mt-4 max-w-[240px] font-serif text-base italic leading-relaxed text-ivory-300/70">
                {memory.caption}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-px w-6 bg-gold-400/30" />
                <span className="font-sans text-[9px] tracking-wide-2 text-ivory-400/30">
                  0{i + 1} / 04
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
