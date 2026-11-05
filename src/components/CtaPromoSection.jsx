import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';

function GoFoodIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
    </svg>
  );
}

export default function CtaPromoSection() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata,%20saya%20mau%20pesan%20kopi%20atau%20reservasi%20meja%20slowbar%20hari%20ini!';
  const gofoodUrl = 'https://gofood.link';

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="grab-sekata"
      className="w-full bg-[#fff5e3] border-t border-b border-espresso/15 py-4 sm:py-16 lg:py-20 px-3 sm:px-8 relative overflow-hidden select-none"
    >
      {/* Background Typography Watermark — Only on desktop to avoid awkward vertical space on mobile */}
      <div className="hidden lg:block absolute -right-6 -bottom-10 select-none pointer-events-none opacity-[0.06] font-sans font-black text-[220px] leading-none text-espresso whitespace-nowrap">
        SEKATA
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* ===================================================================
            1. MOBILE LAYOUT (KHUSUS HP / < lg): 
               - Gambar terekspose penuh dalam rasio portrait alami 3:4 (tidak terpotong).
               - Tata letak bento editorial rapi, terstruktur, zero space kosong.
               - Penempatan tombol proporsional: WhatsApp & GoFood sejajar seimbang.
           =================================================================== */}
        <div className="block lg:hidden w-full max-w-[390px] mx-auto text-left py-2">
          
          {/* Top Kicker Bar: Hashtag + GoFood Badge */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="inline-flex items-center gap-1.5 bg-espresso text-[#f5ba31] px-2.5 py-1 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ba31] animate-pulse"></span>
              <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                #GRABYOURSEKATATODAY
              </span>
            </div>

            {/* GoFood Delivery Badge */}
            <a
              href={gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#EE2737]/30 shadow-xs hover:border-[#EE2737] transition-colors"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#EE2737] flex items-center justify-center shrink-0 text-white">
                <GoFoodIcon className="w-2 h-2 text-white" />
              </span>
              <span className="font-sans font-black text-[11px] text-[#EE2737] tracking-tight">gofood</span>
              <span className="text-[9px] font-mono text-espresso/70 font-semibold">• Delivery</span>
            </a>
          </div>

          {/* Large Bold English Headline — Sangat Jelas & Tegas */}
          <h2 className="font-sans font-black text-[22px] xs:text-[25px] text-espresso uppercase leading-[0.96] tracking-tight mb-3">
            GOOD COFFEE, HONEST TALKS.<br />
            <span className="text-turquoise">GRAB YOUR SEKATA TODAY.</span>
          </h2>

          {/* Hero Photo Card: EXPOSED IN FULL 3:4 NATURAL PORTRAIT RATIO (5 Cangkir Lengkap) */}
          <div className="w-full relative my-2">
            {/* Warm Marigold Offset Backdrop */}
            <div className="absolute inset-0 bg-[#f5ba31] rounded-2xl transform rotate-1 translate-x-1.5 translate-y-1.5 opacity-85 shadow-md"></div>

            {/* Natural Aspect 3:4 Photo Frame (Tanpa Pemotongan Cangkir) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border border-espresso/15 bg-espresso group"
            >
              <img
                src="/CTA.jpg"
                alt="Grab Your Sekata Today — 5 Signature Drinks"
                className="w-full h-full object-cover"
              />

              {/* Floating Top Badge */}
              <div className="absolute top-2.5 left-2.5 bg-[#f5ba31] text-espresso font-mono text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 stroke-[2.5]" />
                <span>5 SIGNATURE SIPS</span>
              </div>

              {/* Bottom Frosted Glass Tagline */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-cream">
                <p className="font-sans font-bold text-xs leading-tight text-white">
                  Always a cup that matches your story.
                </p>
                <span className="font-mono text-[9px] text-[#f5ba31] block font-bold tracking-wider mt-0.5">
                  Americano &bull; Matcha &bull; Lemon Tea &bull; Cold Brew
                </span>
              </div>
            </motion.div>
          </div>

          {/* Clear Lead Copy */}
          <p className="font-sans text-xs text-espresso/85 leading-relaxed my-3">
            Dari manual brew Nusantara hingga matcha dan citrus tea dingin. Nikmati langsung di slowbar kami atau pesan antar ke rumahmu.
          </p>

          {/* Action Buttons: WhatsApp & GoFood Balanced 2-Column Grid */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-turquoise hover:bg-turquoise-dark text-cream font-sans text-xs font-bold tracking-wider uppercase transition-colors shadow-md shadow-turquoise/25 cursor-pointer text-center"
            >
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.a>

            <motion.a
              href={gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-white hover:bg-red-50 text-[#EE2737] border-2 border-[#EE2737] font-sans text-xs font-bold tracking-wider uppercase transition-colors shadow-xs cursor-pointer text-center"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#EE2737] flex items-center justify-center shrink-0 text-white">
                <GoFoodIcon className="w-2 h-2 text-white" />
              </span>
              <span>GOFOOD</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.a>
          </div>

          {/* Clean Sub-Action Menu Link */}
          <div className="text-center mt-2.5 pb-1">
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-1 font-sans text-[11px] font-bold text-espresso/70 hover:text-espresso uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>LIHAT MENU LENGKAP</span>
              <ArrowDown className="w-3 h-3 text-espresso/60" />
            </button>
          </div>

        </div>

        {/* ===================================================================
            2. DESKTOP / PC LAYOUT (KHUSUS PC / lg:):
               Sama persis seperti screenshot PC Gambar 1 (Tidak Dirubah):
               Foto di kiri 5 kolom, Tipografi besar di kanan 7 kolom.
           =================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photo Card with Marigold Offset (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[390px]">
              
              {/* Warm Marigold Offset Backdrop */}
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
                <div className="absolute top-3.5 left-3.5 bg-[#f5ba31] text-espresso font-mono text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 stroke-[2.5]" />
                  <span>5 SIGNATURE SIPS</span>
                </div>

                {/* Bottom Frosted Glass Tagline */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-cream">
                  <p className="font-sans font-bold text-sm leading-snug">
                    Always a cup that matches your story.
                  </p>
                  <span className="font-mono text-[10px] text-[#f5ba31] block mt-0.5 font-bold tracking-wider">
                    #GRABYOURSEKATATODAY
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Large English Typography, GoFood Badge & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Row: Hashtag Pill + GoFood Partner Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-espresso text-[#f5ba31] px-3.5 py-1.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#f5ba31] animate-pulse"></span>
                <span className="font-mono text-xs font-black uppercase tracking-[0.14em]">
                  #GRABYOURSEKATATODAY
                </span>
              </div>

              {/* GoFood Badge */}
              <a
                href={gofoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EE2737]/30 shadow-xs hover:border-[#EE2737] transition-all group"
              >
                <span className="w-4 h-4 rounded-full bg-[#EE2737] flex items-center justify-center shrink-0 text-white">
                  <GoFoodIcon className="w-2.5 h-2.5 text-white" />
                </span>
                <span className="font-sans font-black text-xs text-[#EE2737] tracking-tight">gofood</span>
                <span className="text-[10px] font-mono text-espresso/70 font-semibold">• Tersedia Delivery</span>
                <ArrowUpRight className="w-3 h-3 text-[#EE2737] opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Large Punchy English Typography Headline (Persis PC Gambar 1) */}
            <h2 className="font-sans font-black text-4xl lg:text-[50px] text-espresso uppercase leading-[0.93] tracking-[-0.035em] mb-4">
              GOOD COFFEE,<br />
              HONEST TALKS.<br />
              <span className="text-turquoise">GRAB YOUR SEKATA TODAY.</span>
            </h2>

            {/* Inviting English Lead Paragraph */}
            <p className="font-sans text-base text-espresso/85 leading-relaxed mb-6 max-w-xl">
              From rich single origin manual brews and velvety white coffee, to iced citrus tea and chilled matcha. Stop by our open slowbar table or grab your favorite cup to accompany your day in Tanjungpinang.
            </p>

            {/* Feature Badges Cloud */}
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[11px] font-semibold text-espresso">
                &bull; Single Origin V60
              </span>
              <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[11px] font-semibold text-espresso">
                &bull; Signature Espresso
              </span>
              <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[11px] font-semibold text-espresso">
                &bull; Tea &amp; Fruit Cascade
              </span>
              <span className="px-3 py-1 rounded-full bg-cream border border-espresso/15 font-mono text-[11px] font-semibold text-espresso">
                &bull; Dine-In &amp; Takeaway
              </span>
            </div>

            {/* Action Buttons Row (WhatsApp, GoFood, Menu) */}
            <div className="flex flex-row items-center gap-3">
              <motion.a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-turquoise hover:bg-turquoise-dark text-cream font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-200 shadow-md shadow-turquoise/25 group cursor-pointer"
              >
                <span>GRAB VIA WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href={gofoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-red-50 text-[#EE2737] border-2 border-[#EE2737]/30 hover:border-[#EE2737] font-sans text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#EE2737] flex items-center justify-center shrink-0 text-white">
                  <GoFoodIcon className="w-2 h-2 text-white" />
                </span>
                <span>ORDER DI GOFOOD</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </motion.a>

              <motion.button
                onClick={scrollToMenu}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-cream/90 hover:bg-cream border border-espresso/20 text-espresso font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer"
              >
                <span>LIHAT MENU</span>
                <ArrowDown className="w-3.5 h-3.5 text-espresso/70" />
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
