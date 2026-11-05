import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const waReserveUrl = 'https://wa.me/6281991445331?text=Hello%20Sekata!%20I%20would%20like%20to%20reserve%20a%20slowbar%20table.%20Is%20there%20a%20spot%20available%3F%20Thank%20you!';

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

      {/* Hero Content Overlay — Pure, Clean English Editorial (No clutter, No location/hours text) */}
      <div className="relative z-10 container-max w-full px-5 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-10 sm:pb-14 flex flex-col justify-between h-full">
        
        {/* Spacer */}
        <div />

        {/* Content Box with Arresting English Hook Headline */}
        <div className="max-w-3xl text-left my-auto">
          
          {/* Subtle slowbar category badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-turquoise-light font-medium">
              SPECIALTY COFFEE &bull; ARTISAN SLOWBAR
            </span>
          </div>

          {/* Magnetic Campaign Hook Headline in English */}
          <h1 className="font-sans font-black text-[46px] xs:text-[54px] sm:text-[74px] lg:text-[94px] leading-[0.92] text-cream tracking-[-0.04em] uppercase mb-5 sm:mb-6">
            Time Slows Down,<br />
            <span className="text-turquoise italic font-bold">Stories Unfold.</span>
          </h1>

          {/* Simple, Crisp English Subtitle */}
          <p className="font-sans text-[15px] sm:text-[18px] leading-[1.6] text-cream/85 max-w-xl mb-8 sm:mb-10 font-normal">
            A calm communal slowbar. Patiently brewing Indonesian single origins, creating genuine conversations one cup at a time.
          </p>

          {/* Action Buttons: Menu & Direct WhatsApp Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-7 py-3.5 tracking-wide uppercase rounded-full font-bold bg-turquoise text-cream hover:bg-turquoise-dark transition-all duration-200 ease-out active:scale-[0.97] shadow-lg shadow-turquoise/25 group"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2] group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </button>

            <a
              href={waReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-6 py-3.5 tracking-wide uppercase rounded-full font-semibold bg-white/10 hover:bg-white/20 text-cream backdrop-blur-md border border-white/20 transition-all duration-200 ease-out active:scale-[0.97] text-center"
            >
              <span>RESERVE A TABLE</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* Minimal Clean Bottom Strip — Motto Only, Free of Clutter */}
        <div className="w-full flex items-center justify-between text-cream/50 font-mono text-[11px] uppercase tracking-[0.18em] pt-4 border-t border-white/10">
          <span>EVERY BREW TELLS A STORY</span>
          <span className="hidden sm:inline">SCROLL TO DISCOVER &darr;</span>
        </div>

      </div>

    </section>
  );
}
