import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Word tokens with their respective authentic brand highlight colors
const STATEMENT_WORDS = [
  { text: 'Di', color: 'default' },
  { text: 'Sekata', color: 'orange' },
  { text: 'Coffee', color: 'orange' },
  { text: '&', color: 'orange' },
  { text: 'Slowbar', color: 'orange' },
  { text: 'kami', color: 'default' },
  { text: 'ada', color: 'default' },
  { text: 'dalam', color: 'default' },
  { text: 'pencarian', color: 'default' },
  { text: 'tanpa', color: 'default' },
  { text: 'henti', color: 'default' },
  { text: 'untuk', color: 'default' },
  { text: 'seduhan', color: 'turquoise' },
  { text: 'yang', color: 'turquoise' },
  { text: 'bermakna,', color: 'turquoise' },
  { text: 'dengan', color: 'default' },
  { text: 'sabar', color: 'default' },
  { text: 'memilih', color: 'default' },
  { text: 'serta', color: 'default' },
  { text: 'menyangrai', color: 'default' },
  { text: 'biji', color: 'amber' },
  { text: 'kopi', color: 'amber' },
  { text: 'pilihan', color: 'amber' },
  { text: 'yang', color: 'default' },
  { text: 'kami', color: 'default' },
  { text: 'temukan,', color: 'default' },
  { text: 'lalu', color: 'default' },
  { text: 'menyajikannya', color: 'default' },
  { text: 'hangat', color: 'default' },
  { text: 'bagi', color: 'default' },
  { text: 'komunitas', color: 'orange' },
  { text: 'dan', color: 'orange' },
  { text: 'sahabat', color: 'orange' },
  { text: 'di', color: 'default' },
  { text: 'Tanjungpinang', color: 'dusty-blue' },
  { text: 'dan', color: 'default' },
  { text: 'sekitarnya!', color: 'default' }
];

export default function ColorfulStatement() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const bottomPillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // AWWWARDS PINNED SCROLL-DRIVEN REVEAL TIMELINE (0% -> 100%)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', // Pin starts when top of section hits top of viewport
          end: '+=130%',    // Pinned travel distance for a luxurious, controlled reveal
          pin: true,        // Pin the section in place while scrubbing
          anticipatePin: 1, // Eliminates any visual stutter when entering pin
          scrub: 0.8,       // Smooth scrubbing tied directly to scroll gestures
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Live update progress counter (0% -> 100%)
            const pct = Math.round(self.progress * 100);
            if (counterRef.current) {
              counterRef.current.innerText = `${pct}%`;
            }
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }
          }
        }
      });

      // Step 1: Reveal words sequentially from dormant ghost blur to vibrant, crisp brand color
      tl.fromTo(
        '.reveal-word',
        {
          opacity: 0.18,
          y: 8,
          filter: 'blur(3px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.04,
          ease: 'none',
          duration: 0.2,
        }
      );

      // Step 2: Meta badges pop in gracefully near the end of scroll (90% - 100%)
      if (bottomPillsRef.current) {
        tl.fromTo(
          bottomPillsRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, ease: 'power2.out', duration: 0.25 },
          '-=0.1'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper for color classes
  const getColorClass = (color) => {
    switch (color) {
      case 'orange':
        return 'text-burnt-orange font-semibold';
      case 'turquoise':
        return 'text-turquoise font-semibold';
      case 'amber':
        return 'text-amber font-semibold';
      case 'dusty-blue':
        return 'text-dusty-blue font-semibold';
      default:
        return 'text-espresso font-normal';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-cream border-b-hairline flex flex-col justify-center items-center py-16 sm:py-24 px-4 sm:px-8 select-none overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center">
        
        {/* Top Header: Brand Stamp + Live Scroll Progress Indicator (0% - 100%) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-espresso/10">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono text-coffee-dust uppercase tracking-[0.14em] font-semibold">
              SEKATA COFFEE &amp; SLOWBAR &bull; TANJUNGPINANG, KEPRI
            </span>
          </div>

          {/* Interactive Awwwards Scroll Scrub Counter */}
          <div className="inline-flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono text-coffee-dust uppercase tracking-[0.1em]">
              SCROLL REVEAL
            </span>
            <div className="w-20 sm:w-28 h-[3px] bg-espresso/15 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-burnt-orange rounded-full origin-left transition-transform duration-75"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <span
              ref={counterRef}
              className="text-xs sm:text-[13px] font-mono text-burnt-orange font-bold min-w-[36px] text-right"
            >
              0%
            </span>
          </div>
        </div>

        {/* 
          AWWWARDS GSAP SCROLL-DRIVEN WORD-BY-WORD REVEAL (0% -> 100% Scroll)
          Right mascot card DIHAPUS. Layout lebar, rapi, dan proporsional.
        */}
        <div ref={containerRef} className="text-left">
          <p className="font-display text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.3] tracking-[-0.035em]">
            {STATEMENT_WORDS.map((item, index) => {
              const colorClass = getColorClass(item.color);
              return (
                <span
                  key={index}
                  className={`reveal-word inline-block mr-[0.28em] will-change-transform ${colorClass}`}
                >
                  {item.text}
                </span>
              );
            })}
          </p>

          {/* Bottom Meta Badges */}
          <div
            ref={bottomPillsRef}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-[13px] font-mono text-coffee-dust uppercase tracking-[0.06em]"
          >
            <span className="text-turquoise font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
              MEJA SLOWBAR INTERAKTIF
            </span>
            <span className="text-burnt-orange font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" />
              TEMPAT BERCERITA
            </span>
            <span className="text-amber font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              #KECILBERTUMBUH
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
