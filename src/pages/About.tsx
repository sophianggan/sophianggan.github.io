import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const FULL_TEXT = "hey → i'm sophie ng and this is my";

const tabs = [
  { to: '/timeline', label: 'about me' },
  { to: '/projects', label: 'projects' },
  { href: 'https://drive.google.com/file/d/1hhMDFiIl7XPKN2MnyHKsxnc__6q2Kl3n/view?usp=sharing', label: 'resume' },
];

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [leverY, setLeverY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const dragging = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* typewriter */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayedText(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(id);
        setDoneTyping(true);
        setTimeout(() => setShowTabs(true), 400);
      }
    }, 55);
    return () => clearInterval(id);
  }, []);

  /* lever drag */
  const onPointerMove = useCallback((e: PointerEvent) => {
    if (!dragging.current || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setLeverY(y);
    setActiveTab(Math.min(tabs.length - 1, Math.floor(y * tabs.length)));
  }, []);

  const onPointerUp = useCallback(() => { dragging.current = false; }, []);

  useEffect(() => {
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => { window.removeEventListener('pointermove', onPointerMove); window.removeEventListener('pointerup', onPointerUp); };
  }, [onPointerMove, onPointerUp]);

  return (
    <div className="min-h-screen bg-background text-white font-mono flex items-center p-8 md:p-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — name */}
        <div>
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {/* invisible placeholder for stable layout */}
            <span className="invisible block" aria-hidden="true">{FULL_TEXT}</span>
            <span className="block" style={{ marginTop: '-1.35em' }}>
              {displayedText}
              {!doneTyping && <span className="typing-cursor">&zwj;</span>}
            </span>
          </h1>

          {/* email at bottom of left column */}
          <p className="mt-12 text-xs" style={{ color: 'var(--text-faded)' }}>
            sophie.ng@utoronto.ca
          </p>
        </div>

        {/* Right — scrollable tabs + lever */}
        <div className={`flex gap-6 items-stretch transition-opacity duration-700 ${showTabs ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ minHeight: '200px' }}>
          {/* Tabs list */}
          <div className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-hide">
            {tabs.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <div key={idx} className="snap-start flex items-center h-16">
                  {tab.href ? (
                    <a
                      href={tab.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-lg md:text-2xl font-bold uppercase transition-colors ${isActive ? '' : ''}`}
                      style={{ color: isActive ? 'var(--accent-mint)' : 'var(--text-faded)' }}
                    >
                      {tab.label}
                    </a>
                  ) : (
                    <Link
                      to={tab.to!}
                      className={`text-lg md:text-2xl font-bold uppercase transition-colors ${isActive ? '' : ''}`}
                      style={{ color: isActive ? 'var(--accent-mint)' : 'var(--text-faded)' }}
                    >
                      {tab.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Lever */}
          <div
            ref={trackRef}
            className="relative w-1 rounded-full"
            style={{ background: 'var(--track-bg)' }}
          >
            <div
              onPointerDown={() => { dragging.current = true; }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-8 rounded-full cursor-grab active:cursor-grabbing"
              style={{ top: `${leverY * 100}%`, background: `rgba(var(--accent-mint-rgb), 0.8)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
