import { useState } from 'react';
import {
  BookOpen,
  Camera,
  Mail,
  Heart,
  Music,
  Cloud,
  Gift,
} from 'lucide-react';
import Reveal from './Reveal';
import PhotoPlaceholder from './PhotoPlaceholder';

interface PreviewCard {
  title: string;
  subtitle: string;
  icon: typeof BookOpen;
  image: string;
  imageLabel: string;
  span: string;
  aspect: string;
  offset?: string;
  rotate?: string;
}

const cards: PreviewCard[] = [
  {
    title: 'Our Story',
    subtitle: 'how it all started, and everything after',
    icon: BookOpen,
    image: '/images/preview-story.jpg',
    imageLabel: 'our story',
    span: 'sm:col-span-2',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'Memories',
    subtitle: 'the moments I keep replaying',
    icon: Camera,
    image: '/images/preview-memories.jpg',
    imageLabel: 'memories',
    span: '',
    aspect: 'aspect-[4/5]',
    offset: 'sm:mt-12',
  },
  {
    title: 'Open When…',
    subtitle: 'letters for every mood you might have',
    icon: Mail,
    image: '/images/preview-letters.jpg',
    imageLabel: 'open when',
    span: '',
    aspect: 'aspect-[4/5]',
    offset: 'sm:mt-6',
    rotate: 'sm:-rotate-1',
  },
  {
    title: 'Things I Love About You',
    subtitle: 'a list that never really ends',
    icon: Heart,
    image: '/images/preview-love.jpg',
    imageLabel: 'things I love',
    span: 'sm:col-span-2',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'Our Songs',
    subtitle: 'the playlist that sounds like us',
    icon: Music,
    image: '/images/preview-songs.jpg',
    imageLabel: 'our songs',
    span: '',
    aspect: 'aspect-square',
  },
  {
    title: 'For Your Bad Days',
    subtitle: 'for when the world feels heavy',
    icon: Cloud,
    image: '/images/preview-baddays.jpg',
    imageLabel: 'for your bad days',
    span: '',
    aspect: 'aspect-square',
    offset: 'sm:mt-8',
  },
  {
    title: 'One Last Surprise',
    subtitle: 'something I saved for the end',
    icon: Gift,
    image: '/images/preview-surprise.jpg',
    imageLabel: 'surprise',
    span: 'sm:col-span-3',
    aspect: 'aspect-[21/9]',
  },
];

function Card({ card, index }: { card: PreviewCard; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <Reveal
      delay={(index % 3) * 100}
      className={`col-span-1 ${card.span} ${card.offset ?? ''} ${card.rotate ?? ''}`}
    >
      <div
        className="group relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`relative ${card.aspect} w-full overflow-hidden rounded-2xl border border-ivory-200/5`}
          style={{
            transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <PhotoPlaceholder
            src={card.image}
            alt={card.title}
            label={card.imageLabel}
            className="h-full w-full"
          />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-800/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wine-900/30 via-transparent to-ink-900/40" />

          {/* Hover glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
            style={{
              opacity: hovered ? 0.25 : 0,
              background: 'radial-gradient(ellipse at center, rgba(201, 142, 123, 0.15), transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full glass">
                <Icon size={14} className="text-blush-200" />
              </div>
              <span className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/50">
                0{index + 1}
              </span>
            </div>
            <h3
              className="mt-3 font-serif text-xl font-light text-ivory-100 transition-transform duration-500 sm:text-2xl"
              style={{ transform: hovered ? 'translateY(-2px)' : 'translateY(0)' }}
            >
              {card.title}
            </h3>
            <p
              className="mt-1 font-sans text-xs font-light text-ivory-300/60 transition-all duration-500"
              style={{
                opacity: hovered ? 1 : 0.6,
                transform: hovered ? 'translateY(0)' : 'translateY(4px)',
              }}
            >
              {card.subtitle}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function PreviewCards() {
  return (
    <section id="story" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-3 text-center">
          <p className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/40">
            A COLLECTION
          </p>
        </Reveal>

        <Reveal delay={100} className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-light text-ivory-100 sm:text-5xl">
            Things I kept for you
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold-400/30" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {cards.map((card, i) => (
            <Card key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
