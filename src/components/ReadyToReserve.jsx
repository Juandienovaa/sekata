import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-7 sm:py-9 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        
        {/* Hashtag Only with Heavy Bold Font (Balanced Centering on Mobile) */}
        <div>
          <h3 className="font-sans font-black text-[20px] xs:text-[22px] sm:text-[26px] lg:text-[32px] text-cream tracking-tight uppercase">
            #SATUMEJABERHENTISEJENAK
          </h3>
        </div>

        {/* Tactile WhatsApp CTA button with elegant mobile proportions */}
        <div className="shrink-0">
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-turquoise text-cream hover:bg-turquoise-dark transition-colors duration-200 shadow-md shadow-turquoise/25 whitespace-nowrap cursor-pointer"
          >
            <span>Reservasi Meja (WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </motion.a>
        </div>

      </div>
    </aside>
  );
}
