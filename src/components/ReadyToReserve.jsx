import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-5 sm:py-6 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Punchy Hashtag Only with Heavy Bold Font (No Paragraph, No Extra Badges) */}
        <div className="w-full md:w-auto text-left">
          <h3 className="font-sans font-black text-[22px] sm:text-[28px] lg:text-[34px] text-cream tracking-tight uppercase">
            #SatuMejaBerhentiSejenak
          </h3>
        </div>

        {/* Right: Tactile WhatsApp CTA button with motion scale physics */}
        <div className="w-full md:w-auto shrink-0 flex items-center justify-start md:justify-end">
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-turquoise text-cream hover:bg-turquoise-dark transition-colors duration-200 shadow-md shadow-turquoise/25 whitespace-nowrap text-center cursor-pointer"
          >
            <span>Reservasi Meja (WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </motion.a>
        </div>

      </div>
    </aside>
  );
}
