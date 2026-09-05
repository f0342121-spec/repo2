interface PhotoPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  rounded?: string;
}

export default function PhotoPlaceholder({
  src,
  alt,
  className = '',
  label = 'your photo here',
  rounded = 'rounded-2xl',
}: PhotoPlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      {/* Fallback placeholder */}
      <div
        className={`absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-wine-700 via-ink-700 to-ink-800`}
      >
        <div className="absolute inset-0 ambient-glow opacity-50" />
        <span className="relative z-10 font-serif text-sm italic text-ivory-400/40">
          {label}
        </span>
        <span className="relative z-10 mt-1 font-sans text-[10px] tracking-ultra-wide text-ivory-400/20">
          replace with your photo
        </span>
      </div>
    </div>
  );
}
