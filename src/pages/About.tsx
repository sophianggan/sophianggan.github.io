import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const MINT_PART = "hey → i'm sophie ng";
const FADED_PART = " and this is my";
const FULL_TEXT = MINT_PART + FADED_PART;

const tabs = [
  { to: '/timeline', label: 'about me' },
  { to: '/projects', label: 'projects' },
  { href: 'https://drive.google.com/file/d/1_PiuMSp1wRd3ueLqb02G_H1uSKmePHuY/view?usp=sharing', label: 'resume' },
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
    <div className="min-h-screen bg-background text-white font-mono flex items-center justify-center p-8 md:p-16 relative">
      <div>
        {/* Single horizontal line: "hey → i'm sophie ng and this is my [scrollable]" */}
        <div className="flex items-baseline flex-wrap gap-x-3 justify-center">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            {/* Mint portion */}
            <span style={{ color: 'var(--accent-mint)' }}>
              {displayedText.slice(0, Math.min(displayedText.length, MINT_PART.length))}
            </span>
            {/* Faded portion */}
            {displayedText.length > MINT_PART.length && (
              <span style={{ color: 'var(--text-faded)' }}>
                {displayedText.slice(MINT_PART.length)}
              </span>
            )}
            {!doneTyping && <span className="typing-cursor">&zwj;</span>}
          </h1>

          {/* Inline scrollable tab + lever */}
          <div className={`inline-flex gap-4 items-center transition-opacity duration-700 ${showTabs ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Single visible tab */}
            <div className="overflow-hidden h-[2rem] md:h-[2.75rem] lg:h-[3.25rem]">
              <div
                className="transition-transform duration-300 ease-in-out"
                style={{ transform: `translateY(-${activeTab * (100 / tabs.length)}%)` }}
              >
                {tabs.map((tab, idx) => (
                  <div key={idx} className="flex items-center h-[2rem] md:h-[2.75rem] lg:h-[3.25rem]">
                    {tab.href ? (
                      <a
                        href={tab.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-4xl lg:text-5xl font-bold transition-colors whitespace-nowrap leading-none"
                        style={{ color: 'var(--accent-mint)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                      >
                        {tab.label}
                      </a>
                    ) : (
                      <Link
                        to={tab.to!}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold transition-colors whitespace-nowrap leading-none"
                        style={{ color: 'var(--accent-mint)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                      >
                        {tab.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Lever */}
            <div
              ref={trackRef}
              className="relative w-1 rounded-full self-center"
              style={{ background: 'var(--track-bg)', height: '4rem' }}
            >
              <div
                onPointerDown={() => { dragging.current = true; }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-6 rounded-full cursor-grab active:cursor-grabbing"
                style={{ top: `${leverY * 100}%`, background: `rgba(var(--accent-mint-rgb), 0.8)` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* email — pinned bottom-left */}
      <p className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-xs text-white">
        sophie.ng@utoronto.ca
      </p>
    </div>
  );
};

export default About;
