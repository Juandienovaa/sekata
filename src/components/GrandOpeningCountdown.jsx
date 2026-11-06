import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GrandOpeningCountdown() {
  // Target: Malam ini, Jumat 6 November 2026, 20:00 WIB (Ba'da Isya)
  const targetDate = new Date('2026-11-06T20:00:00+07:00').getTime();

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
      className="w-full bg-cream py-10 sm:py-16 px-4 text-center select-none scroll-mt-20 border-b border-espresso/10"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Top Kicker Date */}
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-turquoise font-bold block mb-2">
          MALAM INI &bull; JUMAT 6 NOV 2026 &bull; 20:00 WIB (BA'DA ISYA)
        </span>

        {/* Minimalist Bold Title (Gambar 3 Reference Style) */}
        <h2 className="font-sans font-black text-2xl sm:text-4xl text-espresso uppercase tracking-tight mb-8">
          GRAND OPENING!
        </h2>

        {/* Minimalist 4-Column Countdown with Vertical Hairline Dividers */}
        <div className="flex items-center justify-center w-full max-w-md mx-auto mb-8">
          
          {/* DAYS */}
          <div className="flex-1 text-center px-1 sm:px-3">
            <span className="font-mono text-3xl sm:text-5xl font-black text-espresso block tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-coffee-dust block mt-1.5 lowercase">
              days
            </span>
          </div>

          {/* Hairline Divider */}
          <div className="w-[1px] h-10 sm:h-12 bg-espresso/20 self-center" />

          {/* HOURS */}
          <div className="flex-1 text-center px-1 sm:px-3">
            <span className="font-mono text-3xl sm:text-5xl font-black text-espresso block tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-coffee-dust block mt-1.5 lowercase">
              hours
            </span>
          </div>

          {/* Hairline Divider */}
          <div className="w-[1px] h-10 sm:h-12 bg-espresso/20 self-center" />

          {/* MINUTES */}
          <div className="flex-1 text-center px-1 sm:px-3">
            <span className="font-mono text-3xl sm:text-5xl font-black text-espresso block tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-coffee-dust block mt-1.5 lowercase">
              minutes
            </span>
          </div>

          {/* Hairline Divider */}
          <div className="w-[1px] h-10 sm:h-12 bg-espresso/20 self-center" />

          {/* SECONDS */}
          <div className="flex-1 text-center px-1 sm:px-3">
            <span className="font-mono text-3xl sm:text-5xl font-black text-turquoise block tracking-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-turquoise/75 block mt-1.5 lowercase font-medium">
              seconds
            </span>
          </div>

        </div>

        {/* Minimal Clean CTA Button */}
        <motion.a
          href="https://wa.me/6281991445331?text=Halo%20Sekata,%20saya%20mau%20gabung%20waitlist%20Grand%20Opening%20Sekata!"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-turquoise text-cream font-sans text-xs uppercase tracking-wider font-bold hover:bg-turquoise-dark transition-colors duration-200 shadow-sm group cursor-pointer"
        >
          <span>JOIN THE WAITLIST</span>
          <ArrowRight className="w-3.5 h-3.5 text-cream group-hover:translate-x-1 transition-transform duration-200" />
        </motion.a>

        {/* Minimal Clean Motto */}
        <p className="font-mono text-[9.5px] sm:text-[10px] text-coffee-dust/70 uppercase tracking-[0.16em] mt-4">
          &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
        </p>

      </div>
    </section>
  );
}
