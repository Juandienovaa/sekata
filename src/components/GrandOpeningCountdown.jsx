import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, MessageCircle, PartyPopper, Check, Bell } from 'lucide-react';

export default function GrandOpeningCountdown() {
  // Target: Jumat minggu ini (6 November 2026, 09:00 WIB)
  const targetDate = new Date('2026-11-06T09:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isRsvp, setIsRsvp] = useState(false);

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
    <section className="w-full relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center bg-espresso text-cream overflow-hidden py-16 sm:py-24 border-b-2 border-hairline">
      
      {/* Background Graphic Photo with Vintage Duotone Film Tone */}
      <div className="absolute inset-0 z-0">
        <img
          src="/konten1.jpg"
          alt="Suasana Kedai Sekata Coffee & Slowbar"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 scale-105 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-espresso/90" />
      </div>

      {/* Decorative Subtle Halftone Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: 'radial-gradient(#fff9f2 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-max relative z-10 w-full text-center max-w-4xl mx-auto px-4">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burnt-orange text-cream border border-cream/30 shadow-lg mb-6 rotate-[-1deg]">
          <Sparkles className="w-4 h-4 text-marigold animate-spin-slow" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.1em]">
            RESMI DIBUKA &bull; JUMAT MINGGU INI
          </span>
          <span className="w-2 h-2 rounded-full bg-cream animate-ping" />
        </div>

        {/* Big Retro Festival Display Headline */}
        <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.92] text-cream tracking-[-0.05em] mb-4 drop-shadow-md">
          Grand Opening <br className="hidden sm:block" />
          <span className="text-marigold underline decoration-wavy decoration-turquoise decoration-2 underline-offset-8">
            Sekata Coffee &amp; Slowbar
          </span>
        </h2>

        <p className="font-body text-[15px] sm:text-[18px] leading-[1.6] text-cream/90 max-w-2xl mx-auto mb-10 drop-shadow">
          Pintu kami resmi terbuka lebar untuk kawan-kawan Tanjungpinang. Mari duduk bersama, mencicipi seduhan pertama, dan bercerita tentang kehidupan.
        </p>

        {/* THE COUNTDOWN CLOCK BOXES (Fills desktop width with tactile analogue cards) */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto mb-10">
          
          {/* Days */}
          <div className="bg-cream/10 backdrop-blur-md border-2 border-cream/20 rounded-[12px] sm:rounded-[18px] p-3 sm:p-5 shadow-lg flex flex-col items-center group hover:border-marigold transition-colors">
            <span className="font-mono text-[32px] sm:text-[54px] lg:text-[64px] font-bold text-marigold leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-cream/80 uppercase tracking-[0.1em] mt-2 font-medium">
              HARI
            </span>
          </div>

          {/* Hours */}
          <div className="bg-cream/10 backdrop-blur-md border-2 border-cream/20 rounded-[12px] sm:rounded-[18px] p-3 sm:p-5 shadow-lg flex flex-col items-center group hover:border-turquoise transition-colors">
            <span className="font-mono text-[32px] sm:text-[54px] lg:text-[64px] font-bold text-cream leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-cream/80 uppercase tracking-[0.1em] mt-2 font-medium">
              JAM
            </span>
          </div>

          {/* Minutes */}
          <div className="bg-cream/10 backdrop-blur-md border-2 border-cream/20 rounded-[12px] sm:rounded-[18px] p-3 sm:p-5 shadow-lg flex flex-col items-center group hover:border-turquoise transition-colors">
            <span className="font-mono text-[32px] sm:text-[54px] lg:text-[64px] font-bold text-cream leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-cream/80 uppercase tracking-[0.1em] mt-2 font-medium">
              MENIT
            </span>
          </div>

          {/* Seconds */}
          <div className="bg-cream/10 backdrop-blur-md border-2 border-burnt-orange/80 rounded-[12px] sm:rounded-[18px] p-3 sm:p-5 shadow-lg flex flex-col items-center group bg-burnt-orange/20">
            <span className="font-mono text-[32px] sm:text-[54px] lg:text-[64px] font-bold text-burnt-orange leading-none animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-cream/80 uppercase tracking-[0.1em] mt-2 font-medium">
              DETIK
            </span>
          </div>

        </div>

        {/* Details Strip: Date, Time & Free Perks */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-black/40 backdrop-blur-md px-5 py-3 rounded-[10px] border border-cream/20 text-xs font-mono text-cream mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-marigold" />
            <span>JUMAT, 6 NOVEMBER 2026</span>
          </div>
          <span className="text-cream/30 hidden sm:inline">&bull;</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-turquoise" />
            <span>MULAI PUKUL 09.00 WIB</span>
          </div>
          <span className="text-cream/30 hidden sm:inline">&bull;</span>
          <div className="flex items-center gap-2 text-marigold font-bold">
            <PartyPopper className="w-4 h-4" />
            <span>FREE 50 CUPS PERTAMA!</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20mau%20ingatkan%20saya%20untuk%20Grand%20Opening%20Jumat%20ini!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-filled text-xs py-3.5 px-7 bg-turquoise border-turquoise hover:bg-turquoise-dark font-mono uppercase tracking-[0.08em] shadow-lg flex items-center gap-2 font-bold"
          >
            <Bell className="w-4 h-4" />
            <span>INGATKAN SAYA VIA WHATSAPP</span>
          </a>

          <a
            href="#lokasi"
            className="btn-ghost text-xs py-3.5 px-6 text-cream border-cream/50 hover:bg-cream hover:text-espresso font-mono uppercase tracking-[0.08em] shadow-sm flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-marigold" />
            <span>PETUNJUK ARAH KEDAI</span>
          </a>
        </div>

      </div>

    </section>
  );
}
