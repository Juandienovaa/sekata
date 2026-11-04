import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function GrandOpeningCountdown() {
  // Target: Jumat minggu ini (6 November 2026, 09:00 WIB)
  const targetDate = new Date('2026-11-06T09:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="countdown"
      className="w-full relative min-h-[85vh] lg:min-h-screen flex flex-col justify-between bg-[#19110f] text-cream overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 border-b-2 border-hairline select-none"
    >
      {/* 
        FESTIVAL BACKGROUND WITH OPENING.JPG
        Menyatu dalam latar poster festival sinematik:
        Ilustrasi kerumunan perayaan & balon terlihat artistik di latar belakang
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/opening.jpg"
          alt="Suasana Grand Opening Sekata"
          className="w-full h-full object-cover opacity-25 filter contrast-125 brightness-90 scale-105"
        />
        {/* Soft vignette gradient for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19110f] via-[#19110f]/75 to-[#19110f]/85" />
      </div>

      {/* 1. TOP HEADER: CIRCULAR FESTIVAL BADGE & EVENT TITLE (Persis Format Shuffle Festival) */}
      <div className="relative z-10 w-full text-center pt-2 sm:pt-6">
        
        {/* Small Logo Monogram Badge */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/40 mx-auto mb-3 flex items-center justify-center bg-cream/10 backdrop-blur-sm shadow-md">
          <img
            src="/logo.png"
            alt="Sekata"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter invert"
          />
        </div>

        {/* Festival Title */}
        <h2 className="font-display text-[24px] sm:text-[34px] lg:text-[44px] uppercase tracking-[0.14em] text-cream leading-none drop-shadow-md">
          GRAND OPENING SEKATA
        </h2>
        
        <p className="font-mono text-[10px] sm:text-xs text-marigold tracking-[0.2em] uppercase mt-2 font-medium">
          06, 07, 08 NOVEMBER 2026 &bull; TANJUNGPINANG
        </p>

      </div>

      {/* 2. CENTER: COLOSSAL COUNTDOWN NUMBERS WITH VERTICAL DIVIDERS (Persis Referensi Festival) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-8 sm:py-12">
        <div className="flex items-center justify-center gap-1.5 sm:gap-6 md:gap-10 text-center">
          
          {/* DAYS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[46px] sm:text-[80px] md:text-[115px] lg:text-[150px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[13px] sm:text-[20px] md:text-[28px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-4">
              hari
            </div>
          </div>

          {/* Thin Vertical Divider 1 */}
          <div className="h-12 sm:h-20 md:h-28 lg:h-32 w-px bg-cream/30 flex-shrink-0" />

          {/* HOURS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[46px] sm:text-[80px] md:text-[115px] lg:text-[150px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[13px] sm:text-[20px] md:text-[28px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-4">
              jam
            </div>
          </div>

          {/* Thin Vertical Divider 2 */}
          <div className="h-12 sm:h-20 md:h-28 lg:h-32 w-px bg-cream/30 flex-shrink-0" />

          {/* MINUTES */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[46px] sm:text-[80px] md:text-[115px] lg:text-[150px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[13px] sm:text-[20px] md:text-[28px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-4">
              menit
            </div>
          </div>

          {/* Thin Vertical Divider 3 */}
          <div className="h-12 sm:h-20 md:h-28 lg:h-32 w-px bg-cream/30 flex-shrink-0" />

          {/* SECONDS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[46px] sm:text-[80px] md:text-[115px] lg:text-[150px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[13px] sm:text-[20px] md:text-[28px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-4">
              detik
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM ACTION: JOIN THE WAITLIST BUTTON (Persis Format Festival Gambar Referensi) */}
      <div className="relative z-10 w-full text-center pb-2 sm:pb-6 space-y-3 sm:space-y-4">
        
        {/* Bordered Pill CTA Button */}
        <div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20mau%20daftar%20waitlist%20Grand%20Opening%20Jumat%20ini!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-12 py-3 sm:py-4 rounded-full border-2 border-cream/75 text-cream font-mono text-xs sm:text-sm uppercase tracking-[0.15em] font-bold hover:bg-cream hover:text-espresso hover:border-cream transition-all duration-300 shadow-xl group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-marigold group-hover:rotate-12 transition-transform" />
            <span>JOIN THE WAITLIST (FREE 50 CUPS)</span>
            <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-1 transition-transform group-hover:text-espresso" />
          </a>
        </div>

        {/* Location & Tagline Note */}
        <p className="font-mono text-[9px] sm:text-[11px] text-cream/70 uppercase tracking-[0.1em]">
          TANJUNGPINANG, KEPRI &bull; &ldquo;MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN.&rdquo;
        </p>

      </div>

    </section>
  );
}
