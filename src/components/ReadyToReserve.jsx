import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-5 sm:py-5 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Left: Aesthetic, structured invitation that looks great on mobile & desktop */}
        <div className="w-full sm:w-auto text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse shrink-0" />
            <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] text-turquoise-light font-semibold">
              MEJA SEDUH SELALU TERBUKA
            </span>
          </div>

          <h3 className="font-sans font-bold text-[16px] sm:text-[18px] text-cream tracking-tight mb-1">
            Satu Meja untuk Berhenti Sejenak.
          </h3>
          <p className="font-sans text-[12.5px] sm:text-[13.5px] text-cream/70 leading-relaxed max-w-xl">
            Duduk santai, nikmati ritual seduhan lambat, dan bertukar cerita bersama barista. Tanpa biaya reservasi.
          </p>
        </div>

        {/* Right: Full-width on mobile, tactile button with Hijau Telor Asin */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-turquoise text-cream hover:bg-turquoise-dark transition-all duration-200 active:scale-95 shadow-md shadow-turquoise/20 whitespace-nowrap shrink-0 text-center"
        >
          <span>Reservasi Meja (WhatsApp)</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>

      </div>
    </aside>
  );
}
