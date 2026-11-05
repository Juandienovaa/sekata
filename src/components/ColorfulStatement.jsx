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
      const mm = gsap.matchMedia();

      // Desktop only (>= 768px): Smooth sticky scroll scrub (shortened to 130vh for snappy feel)
      mm.add("(min-width: 768px)", () => {
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

        if (bottomPillsRef.current) {
          tl.fromTo(
            bottomPillsRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, ease: 'power2.out', duration: 0.18 },
            '>-0.05'
          );
        }

        tl.to({}, { duration: 0.1 });
      });

      // Mobile only (< 768px): Natural flow without sticky pinning, eliminating huge empty void & heavy scroll jank
      mm.add("(max-width: 767px)", () => {
        gsap.set('.reveal-word', { opacity: 1, y: 0, filter: 'blur(0px)' });
        if (bottomPillsRef.current) {
          gsap.set(bottomPillsRef.current, { opacity: 1, y: 0 });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper for color classes
  const getColorClass = (color) => {
    switch (color) {
      case 'orange':
        return 'text-turquoise font-semibold';
      case 'turquoise':
        return 'text-turquoise font-bold';
      case 'amber':
        return 'text-turquoise-dark font-semibold';
      case 'dusty-blue':
        return 'text-dusty-blue font-semibold';
      default:
        return 'text-espresso font-normal';
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full md:h-[135vh] bg-cream border-b-hairline select-none py-8 sm:py-12 md:py-0"
    >
      {/* 
        Responsive Stage:
        - Mobile: Normal flow, compact padding, zero empty void, native 60fps scrolling
        - Desktop: Sticky locked stage with snappy 135vh scrub reveal
      */}
      <div className="md:sticky md:top-0 w-full md:h-screen md:min-h-screen bg-cream flex flex-col justify-center items-center px-4 sm:px-8 z-10">
        
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center">
          
          {/* Top Header: Brand Stamp + Live Scroll Progress Indicator (Desktop only for counter) */}
          <div className="flex items-center justify-between gap-3 mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-espresso/10">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-turquoise" />
              <span className="text-[12px] sm:text-[14px] font-body text-[#5c4d44] font-medium">
                Sekata Coffee &amp; Slowbar &bull; Tanjungpinang
              </span>
            </div>

            {/* Interactive Awwwards Scroll Scrub Counter (Desktop only) */}
            <div className="hidden md:inline-flex items-center gap-3">
              <span className="text-[12px] font-body text-[#735e54]">
                Scroll to reveal
              </span>
              <div className="w-20 sm:w-28 h-[3px] bg-espresso/15 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-turquoise rounded-full origin-left transition-transform duration-75"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
              <span
                ref={counterRef}
                className="text-[12px] sm:text-[13px] font-mono text-turquoise font-bold min-w-[36px] text-right"
              >
                0%
              </span>
            </div>
          </div>

          {/* Statement Text: Fluid, responsive font size, no excessive vertical blank space */}
          <div className="text-left">
            <p className="font-display text-[21px] xs:text-[23px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[1.32] tracking-[-0.03em]">
              {STATEMENT_WORDS.map((item, index) => {
                const colorClass = getColorClass(item.color);
                return (
                  <span
                    key={index}
                    className={`reveal-word inline-block mr-[0.25em] will-change-transform ${colorClass}`}
                  >
                    {item.text}
                  </span>
                );
              })}
            </p>

            {/* Bottom Meta Badges */}
            <div
              ref={bottomPillsRef}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-6 text-[12px] sm:text-[14px] font-body"
            >
              <span className="text-turquoise font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                Meja Slowbar Interaktif
              </span>
              <span className="text-turquoise font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
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
