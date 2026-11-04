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
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const bottomPillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // AWWWARDS SCROLL-DRIVEN REVEAL TIMELINE (0% -> 100%)
      // Using rock-solid sticky container to prevent premature section cuts
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          onUpdate: (self) => {
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

      // Step 1: Reveal words sequentially across 0% -> 80% scroll progress
      // Every single word transitions from ghost dormant blur to vibrant crisp brand color
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
          stagger: 0.025,
          ease: 'none',
          duration: 0.18,
        }
      );

      // Step 2: Meta badges pop in gracefully between 80% -> 90%
      if (bottomPillsRef.current) {
        tl.fromTo(
          bottomPillsRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, ease: 'power2.out', duration: 0.18 },
          '>-0.05'
        );
      }

      // Step 3: Comfortable buffer hold from 90% -> 100% so full statement is savored
      tl.to({}, { duration: 0.1 });

    }, containerRef);

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
      ref={containerRef}
      className="relative w-full h-[220vh] bg-cream border-b-hairline select-none"
    >
      {/* 
        STICKY STAGE (100vh FULLSCREEN):
        Stays locked at top: 0 while scrolling through the 220vh container.
        This guarantees the text finishes 100% revealing before the next section appears!
      */}
      <div className="sticky top-0 w-full h-screen min-h-screen bg-cream flex flex-col justify-center items-center px-4 sm:px-8 z-10 overflow-hidden">
        
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center">
          
          {/* Top Header: Brand Stamp + Live Scroll Progress Indicator (0% - 100%) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-espresso/10">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
              <span className="text-[13px] sm:text-[14px] font-body text-[#5c4d44] font-medium">
                Sekata Coffee &amp; Slowbar &bull; Tanjungpinang, Kepri
              </span>
            </div>

            {/* Interactive Awwwards Scroll Scrub Counter */}
            <div className="inline-flex items-center gap-3">
              <span className="text-[12px] font-body text-[#735e54]">
                Scroll to reveal
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
                className="text-[12px] sm:text-[13px] font-mono text-burnt-orange font-bold min-w-[36px] text-right"
              >
                0%
              </span>
            </div>
          </div>

          {/* 
            AWWWARDS GSAP SCROLL-DRIVEN WORD-BY-WORD REVEAL (0% -> 100% Scroll)
            Right mascot card DIHAPUS. Layout lebar, rapi, dan proporsional.
          */}
          <div className="text-left">
            <p className="font-display text-[24px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.3] tracking-[-0.035em]">
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

            {/* Bottom Meta Badges (Image 5 Human Typography) */}
            <div
              ref={bottomPillsRef}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-[13px] sm:text-[14px] font-body"
            >
              <span className="text-turquoise font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                Meja Slowbar Interaktif
              </span>
              <span className="text-burnt-orange font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" />
                Tempat Bertukar Cerita
              </span>
              <span className="text-amber font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                #KecilBertumbuh
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
