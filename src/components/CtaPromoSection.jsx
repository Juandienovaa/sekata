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
      className="w-full bg-[#fff5e3] border-t border-b border-espresso/15 py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden select-none"
    >
      {/* Subtle Background Typography Watermark */}
      <div className="absolute -right-6 -bottom-10 select-none pointer-events-none opacity-[0.06] font-sans font-black text-[120px] sm:text-[200px] leading-none text-espresso whitespace-nowrap">
        SEKATA
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Tilted Modern Photo Card with Marigold Offset (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[340px] sm:max-w-[390px]">
            
            {/* Warm Marigold Offset Backdrop (matches sweater color) */}
            <div className="absolute inset-0 bg-[#f5ba31] rounded-3xl transform rotate-2 translate-x-2 translate-y-2 opacity-85 shadow-md"></div>

            {/* Main Photo Card */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-espresso/15 bg-espresso group"
            >
              <img
                src="/CTA.jpg"
                alt="Grab Your Sekata Today — Signature Drinks"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#f5ba31] text-espresso font-mono text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 stroke-[2.5]" />
                <span>5 SIGNATURE SIPS</span>
              </div>

              {/* Bottom Frosted Glass Tagline */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-cream">
                <p className="font-sans font-bold text-xs sm:text-sm leading-snug">
                  Always a cup that matches your story.
                </p>
                <span className="font-mono text-[10px] text-[#f5ba31] block mt-0.5 font-bold tracking-wider">
                  #GRABYOURSEKATATODAY
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column: Large English Typography & Catchy Promotional CTA (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
          
          {/* Main Hashtag Pill */}
          <div className="inline-flex items-center gap-2 bg-espresso text-[#f5ba31] px-3.5 py-1.5 rounded-full w-fit mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#f5ba31] animate-pulse"></span>
            <span className="font-mono text-[11px] sm:text-xs font-black uppercase tracking-[0.14em]">
              #GRABYOURSEKATATODAY
            </span>
          </div>

          {/* Large Punchy English Typography Headline */}
          <h2 className="font-sans font-black text-2xl xs:text-3xl sm:text-5xl lg:text-[50px] text-espresso uppercase leading-[0.93] tracking-[-0.035em] mb-4">
            GOOD COFFEE,<br />
            HONEST TALKS.<br />
            <span className="text-turquoise">GRAB YOUR SEKATA TODAY.</span>
          </h2>

          {/* Inviting English Lead Paragraph */}
          <p className="font-sans text-xs sm:text-base text-espresso/85 leading-relaxed mb-6 max-w-xl">
            From rich single origin manual brews and velvety white coffee, to iced citrus tea and chilled matcha. Stop by our open slowbar table or grab your favorite cup to accompany your day in Tanjungpinang.
          </p>

          {/* Feature Badges Cloud */}
          <div className="flex flex-wrap gap-2 mb-7">
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

          {/* Action Cluster (WhatsApp Order/Reservation + Menu Scroll) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-turquoise hover:bg-turquoise-dark text-cream font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-200 shadow-md shadow-turquoise/25 group cursor-pointer"
            >
              <span>GRAB VIA WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream/90 hover:bg-cream border border-espresso/20 text-espresso font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              <span>LIHAT MENU LENGKAP</span>
              <ArrowDown className="w-3.5 h-3.5 text-espresso/70" />
            </motion.button>
          </div>

          {/* Micro Information Line */}
          <div className="flex items-center gap-2 mt-4 text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="font-mono text-[10.5px] sm:text-[11px] text-coffee-dust">
              Buka setiap hari mulai pukul 10:00 WIB &bull; Tanjungpinang, Kepri
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
