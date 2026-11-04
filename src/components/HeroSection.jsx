import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);

  const scrollToSlowbar = () => {
    const el = document.getElementById('filosofi') || document.getElementById('ruang');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-espresso flex items-center select-none">
      
      {/* Background Video — Fullscreen Desktop Edge-to-Edge */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="/herosection.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Vignette Overlay for High Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 container-max w-full px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-12 flex flex-col justify-center">
        
        {/* Content Box */}
        <div className="max-w-2xl text-left">
          <a href="#" className="inline-block mb-4 sm:mb-6 focus:outline-none">
            <img
              src="/logo.png"
              alt="Sekata Coffee &amp; Slowbar"
              className="h-16 sm:h-24 lg:h-28 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Campaign Headline */}
          <h1 className="font-display text-[38px] sm:text-[54px] lg:text-[66px] leading-[0.92] text-cream tracking-[-0.05em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-4">
            Setiap Seduhan Punya Cerita.
          </h1>

          {/* Supporting Copy in Natural Indonesian */}
          <p className="font-body text-[14px] sm:text-[17px] leading-[1.6] text-cream/95 max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-8">
            Lebih dari sekadar menikmati kopi. Di Sekata, setiap proses, aroma, dan pertemuan punya ceritanya sendiri.
          </p>

          {/* CTAs dengan Background "JELAJAHI MENU" Kontras & Eye-Catching */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToSlowbar}
              className="inline-flex items-center justify-center font-mono text-[12px] sm:text-[13px] px-6 py-3.5 tracking-[0.08em] uppercase rounded-[6px] font-bold bg-burnt-orange text-cream border-2 border-burnt-orange hover:bg-espresso hover:border-espresso shadow-[0_4px_16px_rgba(192,48,1,0.5)] transition-all duration-200 active:scale-95"
            >
              KENALI SEKATA
            </button>

            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center font-mono text-[12px] sm:text-[13px] px-6 py-3.5 tracking-[0.08em] uppercase rounded-[6px] font-bold bg-cream text-espresso border-2 border-cream hover:bg-white hover:text-turquoise shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200 active:scale-95 group"
            >
              <span>JELAJAHI MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
