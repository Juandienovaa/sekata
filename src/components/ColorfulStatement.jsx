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
  const bottomPillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Natural, high-performance entrance animation without sticky scroll-trap or empty void
      gsap.fromTo(
        '.reveal-word',
        {
          opacity: 0.25,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.012,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      if (bottomPillsRef.current) {
        gsap.fromTo(
          bottomPillsRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
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
      id="statement"
      ref={containerRef}
      className="relative w-full bg-cream border-b-hairline select-none py-14 sm:py-18 md:py-24 px-4 sm:px-8"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center">
        
        {/* Top Header: Brand Stamp & Authentic Tagline */}
        <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-espresso/10">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-turquoise" />
            <span className="text-[12px] sm:text-[14px] font-body text-[#5c4d44] font-medium">
              Sekata Coffee &amp; Slowbar &bull; Tanjungpinang
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-mono text-turquoise font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>#KecilBertumbuh</span>
          </div>
        </div>

        {/* Statement Text: Fluid typography, zero unnecessary blank space */}
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
    </section>
  );
}
