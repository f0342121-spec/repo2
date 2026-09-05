interface AmbientGlowProps {
  className?: string;
  intensity?: 'subtle' | 'medium';
}

export default function AmbientGlow({
  className = '',
  intensity = 'subtle',
}: AmbientGlowProps) {
  const opacity = intensity === 'subtle' ? 0.08 : 0.14;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -top-1/4 left-1/2 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: `rgba(91, 36, 56, ${opacity})` }}
      />
      <div
        className="absolute bottom-0 right-0 h-[40vh] w-[50vh] rounded-full blur-[100px]"
        style={{ background: `rgba(201, 142, 123, ${opacity * 0.4})` }}
      />
      <div
        className="absolute top-1/3 left-0 h-[35vh] w-[40vh] rounded-full blur-[90px]"
        style={{ background: `rgba(156, 100, 120, ${opacity * 0.5})` }}
      />
    </div>
  );
}
