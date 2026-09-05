import { useMemo } from 'react';

interface DustFieldProps {
  count?: number;
  className?: string;
}

interface Particle {
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export default function DustField({ count = 40, className = '' }: DustFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 20 + 15}s`,
      delay: `${Math.random() * -20}s`,
      opacity: Math.random() * 0.35 + 0.08,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background: i % 3 === 0 ? '#D8A1AE' : '#F7EEE8',
            animation: `drift ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
            boxShadow: '0 0 4px rgba(216, 161, 174, 0.25)',
          }}
        />
      ))}
    </div>
  );
}
