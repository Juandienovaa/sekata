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
          poster="/konten1.jpg"
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

      {/* Hero Content Overlay — Clean, Minimal, Uncluttered, Pure Aesthetic */}
      <div className="relative z-10 container-max w-full px-5 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-between h-full">
        
        {/* Spacer */}
        <div />

        {/* Content Box with Unforgettable Hook Headline */}
        <div className="max-w-3xl text-left my-auto">
          
          {/* Subtle slowbar category badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-cream/90 font-medium">
              SPECIALTY COFFEE &bull; TANJUNGPINANG
            </span>
          </div>

          {/* Magnetic Campaign Hook Headline */}
          <h1 className="font-sans font-black text-[46px] sm:text-[68px] lg:text-[88px] leading-[0.92] text-cream tracking-[-0.04em] uppercase mb-5 sm:mb-6">
            Waktu Melambat,<br />
            <span className="text-burnt-orange italic font-bold">Cerita Mengalir.</span>
          </h1>

          {/* Simple, Crisp Single-Sentence Subtitle */}
          <p className="font-sans text-[15px] sm:text-[18px] leading-[1.6] text-cream/80 max-w-xl mb-8 sm:mb-10 font-normal">
            Satu meja slowbar untuk berhenti sejenak. Menyeduh kopi Nusantara dengan sabar dan merawat setiap perjumpaan.
          </p>

          {/* Sleek Tactile Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-7 py-3.5 tracking-wide uppercase rounded-full font-bold bg-burnt-orange text-cream hover:bg-[#a52901] transition-all duration-200 ease-out active:scale-[0.97] shadow-lg shadow-burnt-orange/20 group"
            >
              <span>JELAJAHI MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2] group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </button>

            <button
              onClick={scrollToSlowbar}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-6 py-3.5 tracking-wide uppercase rounded-full font-semibold bg-white/10 hover:bg-white/20 text-cream backdrop-blur-md border border-white/20 transition-all duration-200 ease-out active:scale-[0.97]"
            >
              RESERVASI MEJA
            </button>
          </div>
        </div>

        {/* Minimal Bottom Bar: Pure Whitespace & Subtle Location (No Clutter) */}
        <div className="w-full flex items-center justify-between text-cream/50 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span>Jl. Yos Sudarso &bull; Buka 10:00 – 22:00 WIB</span>
          <span className="hidden sm:inline">Setiap Seduhan Punya Cerita</span>
        </div>

      </div>

    </section>
  );
}
