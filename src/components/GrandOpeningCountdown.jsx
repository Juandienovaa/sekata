import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function GrandOpeningCountdown() {
  // Target: Jumat 6 November 2026, 09:00 WIB
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
      className="w-full relative bg-[#130d0b] text-cream overflow-hidden pt-16 sm:pt-20 pb-14 sm:pb-20 px-4 sm:px-8 border-b border-white/10 select-none scroll-mt-24"
    >
      {/* Subtle Analog Festival Background Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/opening.jpg"
          alt="Suasana Grand Opening Sekata"
          className="w-full h-full object-cover opacity-15 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130d0b] via-[#130d0b]/85 to-[#130d0b]" />
        {/* Soft centered radial aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-turquoise/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge: Special Event */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-turquoise/15 border border-turquoise/30 text-turquoise text-[11px] font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GRAND OPENING &bull; 06 — 08 NOVEMBER 2026</span>
        </div>

        {/* Headline: Clean, Classy & Impactful */}
        <h2 className="font-sans font-black text-2xl sm:text-4xl lg:text-[42px] leading-tight text-cream uppercase tracking-tight mb-2.5">
          Grand Opening Sekata
        </h2>
        
        {/* Subtitle: Minimal, Classy, No False Info */}
        <p className="font-sans text-[13.5px] sm:text-[15px] text-cream/80 max-w-lg leading-relaxed mb-8">
          Merayakan perjumpaan perdana, menyeduh cerita baru, dan duduk bersama tanpa sekat di Kota Tanjungpinang.
        </p>

        {/* Compact, Aesthetic Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md mx-auto mb-8">
          
          {/* DAYS */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl py-3 sm:py-4 px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-cream tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-turquoise-light/80 mt-1 font-medium">
              hari
            </span>
          </div>

          {/* HOURS */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl py-3 sm:py-4 px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-cream tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-turquoise-light/80 mt-1 font-medium">
              jam
            </span>
          </div>

          {/* MINUTES */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl py-3 sm:py-4 px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-cream tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-turquoise-light/80 mt-1 font-medium">
              menit
            </span>
          </div>

          {/* SECONDS */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-turquoise/30 rounded-xl py-3 sm:py-4 px-2 flex flex-col items-center shadow-inner hover:border-turquoise transition-colors duration-200">
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-turquoise tracking-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-turquoise-light/80 mt-1 font-medium">
              detik
            </span>
          </div>

        </div>

        {/* CTA Button with Tactile Spring React Animation (Clean & Free of 50 cups text) */}
        <motion.a
          href="https://wa.me/6281991445331?text=Halo%20Sekata,%20saya%20mau%20gabung%20waitlist%20Grand%20Opening%20Sekata!"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-turquoise text-cream font-sans text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-turquoise-dark transition-colors duration-200 shadow-lg shadow-turquoise/25 group cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-cream/90 group-hover:rotate-12 transition-transform duration-200" />
          <span>JOIN THE WAITLIST</span>
          <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-1 transition-transform duration-200" />
        </motion.a>

        {/* Minimal clean motto */}
        <p className="font-mono text-[10px] sm:text-[11px] text-cream/50 uppercase tracking-[0.16em] mt-5">
          &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
        </p>

      </div>
    </section>
  );
}
