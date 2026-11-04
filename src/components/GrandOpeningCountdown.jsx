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
    <section id="countdown" className="w-full relative min-h-screen flex flex-col justify-between bg-[#19110f] text-cream overflow-hidden py-14 sm:py-20 px-4 sm:px-8 border-b-2 border-hairline select-none">
      
      {/* Background Illustrated Atmosphere with warm dark espresso vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/opening.jpg"
          alt="Suasana Grand Opening Sekata"
          className="w-full h-full object-cover opacity-10 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19110f] via-[#19110f]/85 to-[#19110f]/90" />
      </div>

      {/* 1. TOP HEADER: FESTIVAL TITLE & MONOGRAM */}
      <div className="relative z-10 w-full text-center pt-2 sm:pt-4">
        
        {/* Monogram Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-marigold/40 bg-marigold/10 text-marigold font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-marigold" />
          <span>HITUNG MUNDUR HARI-H &bull; JUMAT, 6 NOVEMBER 2026</span>
        </div>

        {/* Festival Title */}
        <h2 className="font-display text-[30px] sm:text-[44px] lg:text-[52px] uppercase tracking-[0.14em] text-cream leading-none drop-shadow-md">
          GRAND OPENING SEKATA
        </h2>
        
        <p className="font-mono text-[11px] sm:text-xs text-marigold tracking-[0.2em] uppercase mt-2 font-medium">
          06, 07, 08 NOVEMBER 2026 &bull; TANJUNGPINANG, KEPULAUAN RIAU
        </p>

      </div>

      {/* 2. CENTER: COLOSSAL FESTIVAL COUNTDOWN NUMBERS */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-6 sm:my-8">
        <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-10 text-center">
          
          {/* DAYS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[14px] sm:text-[20px] md:text-[24px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-3">
              hari
            </div>
          </div>

          {/* Thin Vertical Divider 1 */}
          <div className="h-14 sm:h-20 md:h-28 w-px bg-cream/30 flex-shrink-0" />

          {/* HOURS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[14px] sm:text-[20px] md:text-[24px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-3">
              jam
            </div>
          </div>

          {/* Thin Vertical Divider 2 */}
          <div className="h-14 sm:h-20 md:h-28 w-px bg-cream/30 flex-shrink-0" />

          {/* MINUTES */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[14px] sm:text-[20px] md:text-[24px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-3">
              menit
            </div>
          </div>

          {/* Thin Vertical Divider 3 */}
          <div className="h-14 sm:h-20 md:h-28 w-px bg-cream/30 flex-shrink-0" />

          {/* SECONDS */}
          <div className="flex-1 min-w-0">
            <div className="font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-[0.85] text-cream font-normal tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="font-display italic text-[14px] sm:text-[20px] md:text-[24px] text-cream/90 lowercase tracking-normal mt-2 sm:mt-3">
              detik
            </div>
          </div>

        </div>
      </div>

      {/* 3. HERO VISUAL: OPENING.JPG CARICATURE SHOWCASE */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-4 sm:my-6">
        <div className="rounded-[18px] sm:rounded-[22px] overflow-hidden border-2 border-cream/25 shadow-[0_16px_50px_rgba(0,0,0,0.6)] bg-[#fcf8f2] relative group">
          <img
            src="/opening.jpg"
            alt="Ilustrasi Grand Opening Sekata Coffee Shop"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
          
          {/* Bottom Caption Pill Overlays */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
            <span className="bg-espresso/90 backdrop-blur-md text-cream px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-wider border border-cream/25 shadow-lg">
              🎉 Pesta Perayaan Bersama Kawan &amp; Warga Sekata
            </span>
            <span className="bg-burnt-orange text-cream px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-lg">
              JUMAT INI &bull; MULAI 09.00 WIB
            </span>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM ACTION: JOIN THE WAITLIST BUTTON */}
      <div className="relative z-10 w-full text-center pt-2 sm:pt-4 pb-2 space-y-3">
        
        {/* Pill Button CTA */}
        <div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20mau%20daftar%20waitlist%20Grand%20Opening%20Jumat%20ini!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full border-2 border-cream/80 text-cream font-mono text-xs sm:text-sm uppercase tracking-[0.15em] font-bold hover:bg-cream hover:text-espresso hover:border-cream transition-all duration-300 shadow-xl group"
          >
            <Sparkles className="w-4 h-4 text-marigold group-hover:rotate-12 transition-transform" />
            <span>JOIN THE WAITLIST (FREE 50 CUPS)</span>
            <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-1 transition-transform group-hover:text-espresso" />
          </a>
        </div>

        {/* Location & Tagline */}
        <p className="font-mono text-[10px] sm:text-[11px] text-cream/70 uppercase tracking-[0.1em]">
          TANJUNGPINANG, KEPRI &bull; &ldquo;MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN.&rdquo;
        </p>

      </div>

    </section>
  );
}
