import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Our Story', id: 'story' },
  { label: 'Memories', id: 'memories' },
  { label: 'Letters', id: 'letters' },
  { label: 'Songs', id: 'songs' },
  { label: 'Surprise', id: 'surprise' },
];

export default function Navigation({ activeSection, currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`fixed left-1/2 top-5 z-40 hidden -translate-x-1/2 transition-all duration-500 md:block ${
          scrolled || currentPage !== 'home' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1 rounded-full glass-strong px-2 py-2">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'home' && activeSection === item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-5 py-2 text-xs tracking-wide-2 transition-all duration-300 ${
                  isActive
                    ? 'text-ink-900'
                    : 'text-ivory-300 hover:text-ivory-100'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-blush-200" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav trigger */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`fixed right-5 top-5 z-40 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-ivory-200 transition-all duration-500 md:hidden ${
          scrolled || currentPage !== 'home' ? 'opacity-100' : 'opacity-70'
        }`}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col glass-strong px-8 pt-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="font-serif text-lg italic text-ivory-200">for you</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-ivory-300"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item, i) => {
              const isActive =
                currentPage === item.id ||
                (currentPage === 'home' && activeSection === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-baseline justify-between border-b border-ivory-200/5 py-4 text-left transition-all duration-300 ${
                    mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms',
                    transitionProperty: 'transform, opacity',
                  }}
                >
                  <span
                    className={`font-serif text-2xl transition-colors duration-300 ${
                      isActive
                        ? 'text-blush-200'
                        : 'text-ivory-300 group-hover:text-ivory-100'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="font-sans text-[10px] tracking-ultra-wide text-ivory-400/40">
                    0{i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto mb-10">
            <p className="font-hand text-base text-blush-200/70">you're my favourite place</p>
          </div>
        </div>
      </div>
    </>
  );
}
