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
      className="w-full bg-cream py-6 sm:py-10 px-4 sm:px-6 select-none scroll-mt-20"
    >
      {/* Compact Bento Card (Solves giant edge-to-edge black void on mobile) */}
      <div className="max-w-2xl mx-auto rounded-[20px] sm:rounded-[24px] bg-[#140e0c] text-cream border border-espresso/40 p-5 sm:p-8 shadow-md relative overflow-hidden text-center">
        
        {/* Subtle Ambient Background Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
          <img
            src="/opening.jpg"
            alt="Suasana Grand Opening Sekata"
            className="w-full h-full object-cover filter contrast-125 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-[#140e0c]/90 to-[#140e0c]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Top Compact Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turquoise/15 border border-turquoise/30 text-turquoise text-[10px] font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3" />
            <span>GRAND OPENING &bull; 06 — 08 NOV 2026</span>
          </div>

          {/* Compact Headline */}
          <h2 className="font-sans font-black text-xl sm:text-2xl lg:text-[28px] leading-tight text-cream uppercase tracking-tight mb-1.5">
            Grand Opening Sekata
          </h2>
          
          {/* Concise Classy Subtitle */}
          <p className="font-sans text-[12px] sm:text-[13px] text-cream/75 max-w-sm leading-relaxed mb-5">
            Merayakan perjumpaan perdana, menyeduh cerita baru, dan duduk bersama tanpa sekat di Tanjungpinang.
          </p>

          {/* Sleek Compact Countdown Capsules */}
          <div className="grid grid-cols-4 gap-2 w-full max-w-xs mx-auto mb-5">
            
            {/* DAYS */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg py-2 px-1 sm:py-2.5 sm:px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
              <span className="font-mono text-xl sm:text-2xl font-black text-cream tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-turquoise-light/80 mt-0.5 font-medium">
                hari
              </span>
            </div>

            {/* HOURS */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg py-2 px-1 sm:py-2.5 sm:px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
              <span className="font-mono text-xl sm:text-2xl font-black text-cream tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-turquoise-light/80 mt-0.5 font-medium">
                jam
              </span>
            </div>

            {/* MINUTES */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg py-2 px-1 sm:py-2.5 sm:px-2 flex flex-col items-center shadow-inner hover:border-turquoise/40 transition-colors duration-200">
              <span className="font-mono text-xl sm:text-2xl font-black text-cream tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-turquoise-light/80 mt-0.5 font-medium">
                menit
              </span>
            </div>

            {/* SECONDS */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-turquoise/35 rounded-lg py-2 px-1 sm:py-2.5 sm:px-2 flex flex-col items-center shadow-inner hover:border-turquoise transition-colors duration-200">
              <span className="font-mono text-xl sm:text-2xl font-black text-turquoise tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-turquoise-light/80 mt-0.5 font-medium">
                detik
              </span>
            </div>

          </div>

          {/* Compact Pill CTA Button with Tactile Spring React Animation */}
          <motion.a
            href="https://wa.me/6281991445331?text=Halo%20Sekata,%20saya%20mau%20gabung%20waitlist%20Grand%20Opening%20Sekata!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-turquoise text-cream font-sans text-xs uppercase tracking-wider font-bold hover:bg-turquoise-dark transition-colors duration-200 shadow-md shadow-turquoise/25 group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cream/90 group-hover:rotate-12 transition-transform duration-200" />
            <span>JOIN THE WAITLIST</span>
            <ArrowRight className="w-3.5 h-3.5 text-cream group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>

          {/* Minimal Clean Motto */}
          <p className="font-mono text-[9.5px] text-cream/45 uppercase tracking-[0.16em] mt-3.5">
            &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
          </p>

        </div>
      </div>
    </section>
  );
}
