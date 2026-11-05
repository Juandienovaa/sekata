import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);

  const scrollToSlowbar = () => {
    const el = document.getElementById('filosofi') || document.getElementById('reserve');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-espresso flex items-center select-none">
      
      {/* Background Video — Fullscreen Desktop Edge-to-Edge with Organic Film Scrim */}
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
        {/* Layered cinematic scrim: Deep base tone with warm analog vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/90 via-[#140e0c]/45 to-[#140e0c]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#140e0c]/30 to-[#140e0c]/70 pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 container-max w-full px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-12 flex flex-col justify-center">
        
        {/* Content Box */}
        <div className="max-w-2xl text-left">
          <a href="#" className="inline-block mb-4 sm:mb-6 focus:outline-none">
            <img
              src="/logo.png"
              alt="Sekata Coffee &amp; Slowbar"
              className="h-16 sm:h-24 lg:h-28 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out hover:scale-[1.03]"
            />
          </a>

          {/* Campaign Headline */}
          <h1 className="font-display text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.92] text-cream tracking-[-0.045em] mb-4">
            Setiap Seduhan Punya Cerita.
          </h1>

          {/* Supporting Copy in Natural Indonesian */}
          <p className="font-body text-[15px] sm:text-[17px] leading-[1.65] text-cream/90 max-w-xl mb-8 font-normal">
            Lebih dari sekadar menikmati kopi. Di Sekata, setiap proses, aroma, dan pertemuan punya ceritanya sendiri di Tanjungpinang.
          </p>

          {/* CTAs with Tactile Emil Physics (active:scale-[0.97]) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToSlowbar}
              className="inline-flex items-center justify-center font-mono text-[12px] sm:text-[13px] px-6 py-3.5 tracking-[0.08em] uppercase rounded-[8px] font-semibold bg-burnt-orange text-cream border border-burnt-orange/80 hover:bg-[#a52901] hover:border-[#a52901] shadow-[0_4px_20px_rgba(192,48,1,0.4)] transition-all duration-200 ease-out active:scale-[0.97]"
            >
              KENALI SEKATA
            </button>

            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center font-mono text-[12px] sm:text-[13px] px-6 py-3.5 tracking-[0.08em] uppercase rounded-[8px] font-semibold bg-cream text-espresso border border-cream hover:bg-white hover:text-turquoise shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out active:scale-[0.97] group"
            >
              <span>JELAJAHI MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[1.5] group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
