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
      <div className="relative z-10 container-max w-full px-6 sm:px-12 lg:px-16 pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between h-full">
        
        {/* Top Spacer for fixed navbar */}
        <div className="h-6 sm:h-10" />

        {/* Content Box */}
        <div className="max-w-2xl text-left my-auto">
          {/* Editorial Masthead Stamp */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-cream/90 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>KOTA LAMA TANJUNGPINANG &bull; MEJA SLOWBAR BUKA HARI INI</span>
          </div>

          <a href="#" className="inline-block mb-3 sm:mb-4 focus:outline-none">
            <img
              src="/logo.png"
              alt="Sekata Coffee &amp; Slowbar"
              className="h-16 sm:h-22 lg:h-24 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out hover:scale-[1.03]"
            />
          </a>

          {/* Campaign Headline */}
          <h1 className="font-display text-[42px] sm:text-[58px] lg:text-[72px] leading-[0.9] text-cream tracking-[-0.045em] mb-4">
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

        {/* Bottom Editorial Masthead Strip */}
        <div className="w-full pt-6 border-t border-cream/15 flex flex-wrap items-center justify-between gap-3 text-cream/75 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em]">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>01 &bull; SINGLE ORIGIN ROASTERY</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>02 &bull; MEJA SLOWBAR INTERAKTIF</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-marigold">03 &bull; #KECILBERTUMBUH</span>
          </div>
          <div className="hidden lg:block text-cream/60">
            0°55'18"N 104°27'06"E &bull; KEPRI
          </div>
        </div>

      </div>

    </section>
  );
}
