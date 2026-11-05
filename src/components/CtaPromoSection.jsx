import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';

export default function CtaPromoSection() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata,%20saya%20mau%20pesan%20kopi%20atau%20reservasi%20meja%20slowbar%20hari%20ini!';

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="grab-sekata"
      className="w-full bg-[#fff5e3] border-t border-b border-espresso/15 py-6 sm:py-16 lg:py-20 px-3 sm:px-8 relative overflow-hidden select-none"
    >
      {/* Subtle Background Typography Watermark */}
      <div className="absolute -right-6 -bottom-10 select-none pointer-events-none opacity-[0.06] font-sans font-black text-[100px] sm:text-[180px] lg:text-[220px] leading-none text-espresso whitespace-nowrap">
        SEKATA
      </div>

      {/* Unified 2-Column Row Layout (Identical on Mobile & PC: Photo Left, Content Right) */}
      <div className="max-w-[1200px] mx-auto flex flex-row items-center gap-3 sm:gap-8 lg:gap-14 relative z-10">
        
        {/* Left Column: Photo Card with Marigold Offset */}
        <div className="w-[36%] xs:w-[38%] sm:w-[42%] lg:w-[40%] shrink-0 flex justify-center">
          <div className="relative w-full max-w-[390px]">
            
            {/* Warm Marigold Offset Backdrop (matches sweater color) */}
            <div className="absolute inset-0 bg-[#f5ba31] rounded-2xl sm:rounded-3xl transform rotate-2 translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 opacity-85 shadow-md"></div>

            {/* Main Photo Card */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-espresso/15 bg-espresso group"
            >
              <img
                src="/CTA.jpg"
                alt="Grab Your Sekata Today — Signature Drinks"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-1.5 left-1.5 sm:top-3.5 sm:left-3.5 bg-[#f5ba31] text-espresso font-mono text-[7px] xs:text-[8px] sm:text-[11px] font-black px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 stroke-[2.5]" />
                <span>5 SIPS</span>
              </div>

              {/* Bottom Frosted Glass Tagline */}
              <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-cream">
                <p className="hidden sm:block font-sans font-bold text-xs sm:text-sm leading-snug">
                  Always a cup that matches your story.
                </p>
                <span className="font-mono text-[7px] sm:text-[10px] text-[#f5ba31] block font-bold tracking-wider truncate">
                  #GRABYOURSEKATATODAY
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column: Large Typography, Catchy Promotional Copy & Action Buttons */}
        <div className="flex-1 min-w-0 text-left flex flex-col justify-center">
          
          {/* Main Hashtag Pill */}
          <div className="inline-flex items-center gap-1.5 bg-espresso text-[#f5ba31] px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full w-fit mb-1.5 sm:mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5ba31] animate-pulse"></span>
            <span className="font-mono text-[8px] xs:text-[9.5px] sm:text-xs font-black uppercase tracking-wider">
              #GRABYOURSEKATATODAY
            </span>
          </div>

          {/* Large Punchy English Typography Headline */}
          <h2 className="font-sans font-black text-sm xs:text-base sm:text-3xl lg:text-[48px] text-espresso uppercase leading-[0.94] tracking-[-0.035em] mb-1.5 sm:mb-4">
            GOOD COFFEE,<br />
            HONEST TALKS.<br />
            <span className="text-turquoise">GRAB YOUR SEKATA TODAY.</span>
          </h2>

          {/* Inviting English Lead Paragraph */}
          <p className="font-sans text-[10px] xs:text-[11px] sm:text-sm lg:text-base text-espresso/85 leading-snug sm:leading-relaxed mb-2 sm:mb-5 line-clamp-3 sm:line-clamp-none max-w-xl">
            From rich single origin manual brews and velvety white coffee, to iced citrus tea and chilled matcha. Stop by our open slowbar table or grab your favorite cup to accompany your day in Tanjungpinang.
          </p>

          {/* Feature Badges Cloud (Visible on sm and above) */}
          <div className="hidden sm:flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[10px] sm:text-[11px] font-semibold text-espresso">
              &bull; Single Origin V60
            </span>
            <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[10px] sm:text-[11px] font-semibold text-espresso">
              &bull; Signature Espresso
            </span>
            <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[10px] sm:text-[11px] font-semibold text-espresso">
              &bull; Tea &amp; Fruit Cascade
            </span>
            <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[10px] sm:text-[11px] font-semibold text-espresso">
              &bull; Dine-In &amp; Takeaway
            </span>
          </div>

          {/* Action Cluster (Side-by-Side on both Mobile & PC) */}
          <div className="flex flex-row items-center gap-1.5 sm:gap-3">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-8 py-2 sm:py-3.5 rounded-full bg-turquoise hover:bg-turquoise-dark text-cream font-sans text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-200 shadow-md shadow-turquoise/25 whitespace-nowrap group cursor-pointer"
            >
              <span className="sm:hidden">GRAB VIA WA</span>
              <span className="hidden sm:inline">GRAB VIA WHATSAPP</span>
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-6 py-2 sm:py-3.5 rounded-full bg-cream/90 hover:bg-cream border border-espresso/20 text-espresso font-sans text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <span className="sm:hidden">MENU</span>
              <span className="hidden sm:inline">LIHAT MENU LENGKAP</span>
              <ArrowDown className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-espresso/70" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
