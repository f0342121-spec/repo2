import { useEffect, useState, useCallback } from 'react';
import Intro from '@/components/Intro';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PersonalDetails from '@/components/PersonalDetails';
import PreviewCards from '@/components/PreviewCards';
import MemoryStrip from '@/components/MemoryStrip';
import VideoTeaser from '@/components/VideoTeaser';
import Footer from '@/components/Footer';
import FilmGrain from '@/components/FilmGrain';
import AmbientGlow from '@/components/AmbientGlow';
import OurStory from '@/pages/OurStory';

const sectionIds = ['home', 'story', 'memories', 'songs', 'surprise'];

type Page = 'home' | 'story';

function App() {
  const [entered, setEntered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [page, setPage] = useState<Page>('home');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (!entered || page !== 'home') return;

    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { rootMargin: '-35% 0px -55% 0px' }
        );
        observer.observe(element);
        return observer;
      })
      .filter((observer): observer is IntersectionObserver => observer !== null);

    return () => observers.forEach((observer) => observer.disconnect());
  }, [entered, page]);

  const handleNavigate = useCallback((target: string) => {
    if (target === 'home') {
      if (page !== 'home') {
        setTransitioning(true);
        setTimeout(() => {
          setPage('home');
          window.scrollTo(0, 0);
          setTransitioning(false);
        }, 600);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (target === 'story') {
      if (page !== 'story') {
        setTransitioning(true);
        setTimeout(() => {
          setPage('story');
          window.scrollTo(0, 0);
          setTransitioning(false);
        }, 600);
      }
    } else {
      if (page !== 'home') {
        setTransitioning(true);
        setTimeout(() => {
          setPage('home');
          window.scrollTo(0, 0);
          setTransitioning(false);
          setTimeout(() => {
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }, 600);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [page]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-900">
      <FilmGrain />
      <AmbientGlow />

      {!entered && <Intro onEnter={() => setEntered(true)} />}

      <main
        className={`transition-opacity duration-500 ${
          entered
            ? transitioning
              ? 'opacity-0'
              : 'opacity-100'
            : 'pointer-events-none h-screen overflow-hidden opacity-0'
        }`}
      >
        <Navigation
          activeSection={activeSection}
          currentPage={page}
          onNavigate={handleNavigate}
        />

        {page === 'home' && (
          <>
            <Hero />
            <PersonalDetails />
            <PreviewCards />
            <MemoryStrip />
            <VideoTeaser />
            <Footer />
          </>
        )}

        {page === 'story' && (
          <OurStory onNavigateMemories={() => handleNavigate('memories')} />
        )}
      </main>
    </div>
  );
}

export default App;
