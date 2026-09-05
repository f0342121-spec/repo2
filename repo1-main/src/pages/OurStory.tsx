import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import StoryVideo from '@/components/StoryVideo';
import AmbientGlow from '@/components/AmbientGlow';
import DustField from '@/components/DustField';
import { useParallax } from '@/hooks/useParallax';

interface OurStoryProps {
  onNavigateMemories: () => void;
}

function ChapterLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-[10px] tracking-ultra-wide text-gold-400/40">
        CHAPTER {num}
      </span>
      <span className="h-px w-8 bg-gold-400/20" />
      <span className="font-sans text-[10px] tracking-wide-2 text-ivory-400/40">
        {label}
      </span>
    </div>
  );
}

function HandNote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-hand text-base text-blush-200/70 sm:text-lg ${className}`}>
      {children}
    </p>
  );
}

export default function OurStory({ onNavigateMemories }: OurStoryProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroParallax = useParallax(0.12);
  const ch1Parallax = useParallax(0.08);
  const ch4Parallax = useParallax(0.1);
  const finalParallax = useParallax(0.1);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-900">
      <AmbientGlow />
      <DustField count={25} />

      {/* ─── INTRO ─── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
          <Reveal y={20}>
            <p className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/30">
              OUR STORY
            </p>
          </Reveal>

          <div className="mt-12">
            <Reveal delay={300} y={24}>
              <h1
                className="font-serif font-light leading-[1.2] text-ivory-100"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
              >
                Before there was an us…
              </h1>
            </Reveal>
          </div>

          <div className="mt-8">
            <Reveal delay={1200} y={20}>
              <p
                className="font-serif italic font-light leading-relaxed text-ivory-300/60"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.75rem)' }}
              >
                there were just two people
                <br />
                who had no idea what was coming.
              </p>
            </Reveal>
          </div>

          <div
            className="mt-24 transition-opacity duration-500"
            style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="font-sans text-[9px] tracking-ultra-wide text-ivory-400/30">
                SCROLL TO BEGIN
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-gold-400/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 01 — THE BEGINNING ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <ChapterLabel num="01" label="where it started" />
          </Reveal>

          <div className="mt-10">
            <Reveal delay={200}>
              <p
                className="font-serif font-light italic text-ivory-300/50"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
              >
                [DATE]
              </p>
            </Reveal>
          </div>

          <div className="mt-8 max-w-xl">
            <Reveal delay={400}>
              <p
                className="font-serif font-light leading-relaxed text-ivory-100"
                style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2rem)' }}
              >
                I didn't know it then, but this was the beginning of something that would mean so much to me.
              </p>
            </Reveal>
          </div>

          <div
            ref={ch1Parallax.ref}
            className="mt-16"
            style={{ transform: `translateY(${ch1Parallax.offset * 0.3}px)` }}
          >
            <Reveal delay={300} y={40}>
              <div className="relative">
                <div className="absolute -left-3 -top-3 z-20 h-12 w-12 border-l border-t border-gold-400/20" />
                <PhotoPlaceholder
                  src="/images/story-1.jpg"
                  alt="The beginning"
                  label="where it started"
                  rounded="rounded-2xl"
                  className="aspect-[4/5] w-full sm:aspect-[16/10]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl vignette" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 02 — THE FIRST LITTLE MOMENTS ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <ChapterLabel num="02" label="the first little moments" />
          </Reveal>

          <div className="mt-10 max-w-2xl">
            <Reveal delay={200}>
              <p
                className="font-serif font-light leading-relaxed text-ivory-100"
                style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2rem)' }}
              >
                Somewhere between the conversations, the laughs, and all those ordinary little moments…
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={500}>
                <p
                  className="font-serif font-light italic leading-relaxed text-blush-100"
                  style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2rem)' }}
                >
                  …you stopped feeling ordinary to me.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Editorial layout: one large, one smaller offset */}
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-8">
            <Reveal delay={200} y={40} className="sm:col-span-3">
              <PhotoPlaceholder
                src="/images/story-2.jpg"
                alt="First little moments"
                label="a moment"
                rounded="rounded-2xl"
                className="aspect-[4/5] w-full"
              />
            </Reveal>
            <Reveal delay={500} y={40} className="sm:col-span-2 sm:mt-16">
              <PhotoPlaceholder
                src="/images/story-3.jpg"
                alt="First little moments 2"
                label="another moment"
                rounded="rounded-xl"
                className="aspect-[4/5] w-full"
              />
              <HandNote className="mt-4 -rotate-2">
                you probably don't even remember this.
              </HandNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 03 — WHEN IT STARTED FEELING DIFFERENT ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ChapterLabel num="03" label="when it started feeling different" />
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
            <Reveal delay={200} y={30}>
              <PhotoPlaceholder
                src="/images/story-4.jpg"
                alt="Feeling different"
                label="this day"
                rounded="rounded-2xl"
                className="aspect-[3/4] w-full"
              />
            </Reveal>

            {/* Chat screenshot as a treasured memory */}
            <div className="flex flex-col items-center sm:items-start sm:pt-12">
              <Reveal delay={400} y={30}>
                <div className="relative -rotate-3 sm:-rotate-6">
                  <div
                    className="absolute -inset-4 rounded-2xl opacity-30 blur-xl"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(156, 100, 120, 0.2), transparent 70%)' }}
                  />
                  <PhotoPlaceholder
                    src="/images/chat-1.jpg"
                    alt="A chat screenshot"
                    label="a conversation"
                    rounded="rounded-xl"
                    className="relative aspect-[9/16] w-48 border border-gold-400/15 shadow-2xl sm:w-56"
                  />
                  <HandNote className="absolute -bottom-8 left-2 -rotate-6">
                    yeah… I kept this.
                  </HandNote>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 04 — US ─── */}
      <section className="relative py-32 sm:py-48">
        <div
          ref={ch4Parallax.ref}
          className="pointer-events-none absolute inset-0"
          style={{ transform: `translateY(${ch4Parallax.offset * 0.2}px)` }}
        >
          <div
            className="absolute left-1/2 top-1/3 h-[50vh] w-[70vh] -translate-x-1/2 rounded-full blur-[140px]"
            style={{ background: 'rgba(91, 36, 56, 0.12)' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <ChapterLabel num="04" label="us" />
          </Reveal>

          {/* Collage */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-12 sm:gap-6">
            <Reveal delay={100} y={40} className="col-span-1 sm:col-span-5">
              <PhotoPlaceholder
                src="/images/story-5.jpg"
                alt="Us together"
                label="us"
                rounded="rounded-2xl"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
            <Reveal delay={300} y={40} className="col-span-1 sm:col-span-4 sm:mt-12">
              <PhotoPlaceholder
                src="/images/story-6.jpg"
                alt="Us together 2"
                label="us again"
                rounded="rounded-xl"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
            <Reveal delay={500} y={40} className="col-span-2 sm:col-span-3 sm:mt-20">
              <PhotoPlaceholder
                src="/images/story-7.jpg"
                alt="Us together 3"
                label="always us"
                rounded="rounded-lg"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>

          {/* Strong typography moment */}
          <div className="mt-24 text-center sm:mt-32">
            <Reveal delay={200} y={20}>
              <p
                className="font-serif font-light italic text-ivory-300/60"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
              >
                And somehow…
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={800} y={24}>
                <h2
                  className="font-serif font-light leading-tight text-ivory-100 text-glow"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
                >
                  there was an us.
                </h2>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 05 — THE MOMENTS I WISH I COULD REPLAY ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ChapterLabel num="05" label="the moments I wish I could replay" />
          </Reveal>

          <div className="mt-10 max-w-xl">
            <Reveal delay={200}>
              <p
                className="font-serif font-light leading-relaxed text-ivory-100"
                style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2rem)' }}
              >
                If memories had a replay button, I already know which ones I'd keep pressing.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal delay={300} y={40}>
              <StoryVideo src="/videos/story-memory.mp4" label="a memory in motion" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 06 — THE LITTLE THINGS ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <ChapterLabel num="06" label="the little things" />
          </Reveal>

          <div className="mt-10 max-w-xl">
            <Reveal delay={200}>
              <p
                className="font-serif font-light italic leading-relaxed text-ivory-300/60"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)' }}
              >
                The little things I never want to forget.
              </p>
            </Reveal>
          </div>

          {/* Scrapbook layout */}
          <div className="mt-20 flex flex-col gap-16 sm:gap-24">
            {/* Photo 8 — left aligned with annotation */}
            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-12">
              <Reveal delay={100} y={40} className="w-full sm:w-1/2">
                <PhotoPlaceholder
                  src="/images/story-8.jpg"
                  alt="The little things"
                  label="your laugh here"
                  rounded="rounded-2xl"
                  className="aspect-[4/5] w-full -rotate-2"
                />
              </Reveal>
              <div className="mt-6 sm:mt-0">
                <Reveal delay={400}>
                  <HandNote className="-rotate-1">
                    your laugh here →
                  </HandNote>
                </Reveal>
                <div className="mt-4">
                  <Reveal delay={600}>
                    <HandNote className="rotate-1">
                      still one of my favourite pictures of you.
                    </HandNote>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Photo 9 — right aligned with annotation */}
            <div className="flex flex-col items-end sm:flex-row-reverse sm:items-center sm:gap-12">
              <Reveal delay={100} y={40} className="w-full sm:w-1/2">
                <PhotoPlaceholder
                  src="/images/story-9.jpg"
                  alt="The little things 2"
                  label="this day"
                  rounded="rounded-xl"
                  className="aspect-[4/5] w-full rotate-2"
                />
              </Reveal>
              <div className="mt-6 sm:mt-0">
                <Reveal delay={400}>
                  <HandNote className="rotate-2">
                    this day ♡
                  </HandNote>
                </Reveal>
                <div className="mt-4">
                  <Reveal delay={600}>
                    <HandNote className="-rotate-1">
                      you probably don't even remember this.
                    </HandNote>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Photo 10 — centered with annotation */}
            <div className="flex flex-col items-center">
              <Reveal delay={100} y={40} className="w-full sm:w-2/3">
                <PhotoPlaceholder
                  src="/images/story-10.jpg"
                  alt="The little things 3"
                  label="look how happy we were"
                  rounded="rounded-2xl"
                  className="aspect-[16/10] w-full -rotate-1"
                />
              </Reveal>
              <div className="mt-6">
                <Reveal delay={400}>
                  <HandNote className="-rotate-2">
                    look how happy we were
                  </HandNote>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 07 — YOU BECAME HOME ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <ChapterLabel num="07" label="you became home" />
          </Reveal>

          {/* Intentionally large spacing for emotional pacing */}
          <div className="mt-32 text-center sm:mt-48">
            <Reveal y={20}>
              <p
                className="font-serif font-light italic leading-relaxed text-ivory-300/50"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
              >
                And somewhere along the way…
              </p>
            </Reveal>
          </div>

          <div className="mt-24 text-center sm:mt-32">
            <Reveal y={20}>
              <p
                className="font-serif font-light leading-relaxed text-ivory-200/70"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
              >
                you became more than part of my days.
              </p>
            </Reveal>
          </div>

          <div className="mt-24 text-center sm:mt-32">
            <Reveal y={20}>
              <p
                className="font-serif font-light leading-relaxed text-ivory-200/80"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
              >
                You became the person I wanted to tell everything to.
              </p>
            </Reveal>
          </div>

          <div className="mt-32 text-center sm:mt-48">
            <Reveal y={24}>
              <h2
                className="font-serif font-light leading-tight text-ivory-100 text-glow"
                style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
              >
                you became home.
              </h2>
            </Reveal>
          </div>

          {/* Final image with cinematic masking */}
          <div
            ref={finalParallax.ref}
            className="mt-24 sm:mt-32"
            style={{ transform: `translateY(${finalParallax.offset * 0.15}px)` }}
          >
            <Reveal y={50}>
              <div className="relative">
                <PhotoPlaceholder
                  src="/images/story-final.jpg"
                  alt="Home"
                  label="home"
                  rounded="rounded-3xl"
                  className="aspect-[16/10] w-full sm:aspect-[21/9]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl vignette" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-ink-900/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── ENDING ─── */}
      <section className="relative py-32 sm:py-48">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-12 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

          <Reveal>
            <p className="font-serif text-lg italic text-ivory-300/50 sm:text-xl">
              And that still isn't the whole story.
            </p>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={400}>
              <p className="font-serif text-lg italic text-ivory-300/50 sm:text-xl">
                There are a few things I kept…
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <Reveal delay={800}>
              <button
                onClick={onNavigateMemories}
                className="group relative overflow-hidden rounded-full border border-gold-400/30 px-10 py-4 transition-all duration-500 hover:border-gold-400/60 active:scale-95 sm:px-12 sm:py-5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-wine-700/20 via-blush-400/10 to-wine-700/20 transition-opacity duration-700" />
                <span
                  className="absolute -inset-1 rounded-full blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-40"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(201, 142, 123, 0.3), transparent 70%)' }}
                />
                <span className="relative z-10 flex items-center gap-3 font-sans text-sm tracking-wide-2 text-ivory-100 transition-colors duration-300 group-hover:text-blush-100">
                  See our memories
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
