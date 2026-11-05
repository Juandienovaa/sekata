import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6283125525115?text=Halo%20Sekata%20Coffee%20%26%20Slowbar!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-4 sm:py-5 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Aesthetic, clean invitation without cluttered badges */}
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
            <span className="font-sans font-bold text-[14px] sm:text-[15px] text-cream tracking-tight">
              Meja Seduh Selalu Terbuka.
            </span>
            <span className="font-sans text-[12.5px] sm:text-[13px] text-cream/70">
              Duduk santai, nikmati ritual seduhan lambat, dan bertukar cerita bersama barista. Tanpa biaya reservasi.
            </span>
          </div>
        </div>

        {/* Right: Sleek tactile WhatsApp CTA button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-burnt-orange text-cream hover:bg-[#a52901] transition-all duration-200 active:scale-95 shadow-md shadow-burnt-orange/20 whitespace-nowrap shrink-0"
        >
          <span>Reservasi Meja (WhatsApp)</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>

      </div>
    </aside>
  );
}
