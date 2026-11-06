import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const waReserveUrl = 'https://wa.me/6281991445331?text=Hello%20Sekata!%20I%20would%20like%20to%20reserve%20a%20slowbar%20table.%20Is%20there%20a%20spot%20available%3F%20Thank%20you!';

  // Pause video when out of viewport to free GPU/CPU cycles for ultra-smooth scrolling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] bg-espresso flex flex-col justify-between overflow-hidden select-none">
      
      {/* Background Video — Fullscreen Edge-to-Edge with Film Scrim (pointer-events-none ensures zero touch scroll blocking) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#140e0c] pointer-events-none">
        <video
          ref={videoRef}
          src="/herosection.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none will-change-transform"
        />
        {/* Layered cinematic scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/90 via-[#140e0c]/50 to-[#140e0c]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#140e0c]/30 to-[#140e0c]/70 pointer-events-none" />
      </div>

      {/* Hero Content Overlay — Clean English Editorial (Never gets cut off) */}
      <div className="relative z-10 container-max w-full px-5 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-6 sm:pb-8 flex flex-col justify-between flex-1">
        
        {/* Top spacer for balanced optical centering */}
        <div className="h-2 sm:h-6" />

        {/* Content Box */}
        <div className="max-w-3xl text-left my-auto py-4">
          
          {/* Subtle slowbar category badge */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-turquoise" />
            <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.22em] text-turquoise-light font-medium">
              SPECIALTY COFFEE &bull; ARTISAN SLOWBAR
            </span>
          </div>

          {/* Magnetic Campaign Hook Headline in English */}
          <h1 className="font-sans font-black text-[38px] xs:text-[46px] sm:text-[62px] lg:text-[76px] leading-[0.96] text-cream tracking-[-0.04em] uppercase mb-4 sm:mb-5">
            Time Slows Down,<br />
            <span className="text-turquoise italic font-bold">Stories Unfold.</span>
          </h1>

          {/* Simple, Crisp English Subtitle */}
          <p className="font-sans text-[14px] sm:text-[16px] leading-[1.55] text-cream/85 max-w-xl mb-6 sm:mb-8 font-normal">
            A calm communal slowbar. Patiently brewing Indonesian single origins, creating genuine conversations one cup at a time.
          </p>

          {/* Action Buttons with Spring Feedback Animation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-7 py-3.5 tracking-wide uppercase rounded-full font-bold bg-turquoise text-cream hover:bg-turquoise-dark transition-colors duration-200 shadow-lg shadow-turquoise/25 group cursor-pointer"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2] group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </motion.button>

            <motion.a
              href={waReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center font-sans text-[13px] sm:text-[14px] px-6 py-3.5 tracking-wide uppercase rounded-full font-semibold bg-white/15 hover:bg-white/25 text-cream border border-white/25 transition-colors duration-200 text-center cursor-pointer"
            >
              <span>RESERVE A TABLE</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2]" />
            </motion.a>
          </div>
        </div>

        {/* Minimal Clean Bottom Strip */}
        <div className="w-full flex items-center justify-between text-cream/50 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] pt-4 border-t border-white/10 mt-auto">
          <span>EVERY BREW TELLS A STORY</span>
          <span className="hidden sm:inline">SCROLL TO DISCOVER &darr;</span>
        </div>

      </div>

    </section>
  );
}
