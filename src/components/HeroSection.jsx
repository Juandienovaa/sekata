import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const waReserveUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

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
      <div className="relative z-10 container-max w-full px-5 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-10 sm:pb-14 flex flex-col justify-between h-full">
        
        {/* Spacer */}
        <div />

        {/* Content Box with Unforgettable Hook Headline */}
        <div className="max-w-3xl text-left my-auto">
          
          {/* Subtle slowbar category badge — Hijau Telor Asin Signature */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-turquoise-light font-medium">
              SEKATA COFFEE &amp; SPACE &bull; TANJUNGPINANG
            </span>
          </div>

          {/* Magnetic Campaign Hook Headline with Hijau Telor Asin Accent */}
          <h1 className="font-sans font-black text-[44px] xs:text-[48px] sm:text-[68px] lg:text-[88px] leading-[0.92] text-cream tracking-[-0.04em] uppercase mb-5 sm:mb-6">
            Waktu Melambat,<br />
            <span className="text-turquoise italic font-bold">Cerita Mengalir.</span>
          </h1>

          {/* Simple, Crisp Single-Sentence Subtitle */}
          <p className="font-sans text-[15px] sm:text-[18px] leading-[1.6] text-cream/80 max-w-xl mb-8 sm:mb-10 font-normal">
            Satu meja slowbar untuk berhenti sejenak. Menyeduh kopi Nusantara dengan sabar dan merawat setiap perjumpaan.
          </p>

          {/* Action Buttons: Menu & Direct WhatsApp Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-7 py-3.5 tracking-wide uppercase rounded-full font-bold bg-turquoise text-cream hover:bg-turquoise-dark transition-all duration-200 ease-out active:scale-[0.97] shadow-lg shadow-turquoise/25 group"
            >
              <span>JELAJAHI MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2] group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </button>

            <a
              href={waReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-6 py-3.5 tracking-wide uppercase rounded-full font-semibold bg-white/10 hover:bg-white/20 text-cream backdrop-blur-md border border-white/20 transition-all duration-200 ease-out active:scale-[0.97] text-center"
            >
              <span>RESERVASI MEJA (WA)</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* Minimal Bottom Bar: Pure Whitespace & Accurate Location */}
        <div className="w-full flex items-center justify-between text-cream/50 font-mono text-[11px] uppercase tracking-[0.16em] pt-4 border-t border-white/10">
          <span>Jln Bunguran No.53, Sei Jang &bull; Buka s/d 00:00 WIB</span>
          <span className="hidden sm:inline">Setiap Seduhan Punya Cerita</span>
        </div>

      </div>

    </section>
  );
}
