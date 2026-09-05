import Reveal from './Reveal';

const details = [
  { label: 'Us, since', value: '— · — · ——', sub: 'the day everything began' },
  { label: 'Memories saved', value: '∞', sub: 'and still counting' },
  { label: 'Favourite person', value: 'Her ♡', sub: 'always has been' },
];

export default function PersonalDetails() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/40">
            THE LITTLE THINGS
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-16 md:gap-24">
          {details.map((d, i) => (
            <Reveal key={i} delay={i * 150} className="text-center">
              <p className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/50">
                {d.label.toUpperCase()}
              </p>
              <p className="mt-3 font-serif text-3xl font-light text-ivory-100 sm:text-4xl">
                {d.value}
              </p>
              <p className="mt-2 font-hand text-sm text-blush-200/60">{d.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Subtle divider */}
      <div className="mx-auto mt-24 h-px w-24 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
    </section>
  );
}
