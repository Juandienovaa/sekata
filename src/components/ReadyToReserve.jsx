import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-5 sm:py-5 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
        
        {/* Left: Aesthetic, structured invitation with English Hashtag to encourage reservation */}
        <div className="w-full md:w-auto text-left">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] text-turquoise-light font-semibold">
              <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse shrink-0" />
              MEJA SEDUH TERBUKA
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="inline-flex items-center font-mono text-[11px] font-bold tracking-wider text-turquoise bg-turquoise/15 px-2.5 py-0.5 rounded-full border border-turquoise/30 uppercase">
              #ClaimYourSeat
            </span>
          </div>

          <h3 className="font-sans font-bold text-[17px] sm:text-[19px] text-cream tracking-tight mb-1">
            Satu Meja untuk Berhenti Sejenak.
          </h3>
          <p className="font-sans text-[13px] sm:text-[14px] text-cream/70 leading-relaxed max-w-xl">
            Duduk santai, nikmati ritual seduhan lambat, dan bertukar cerita bersama barista. Tanpa biaya reservasi.
          </p>
        </div>

        {/* Right: Tactile WhatsApp CTA button with flex-shrink-0 so it never hides */}
        <div className="w-full md:w-auto shrink-0 flex items-center justify-start md:justify-end">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-turquoise text-cream hover:bg-turquoise-dark transition-all duration-200 active:scale-95 shadow-md shadow-turquoise/25 whitespace-nowrap text-center"
          >
            <span>Reservasi Meja (WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </aside>
  );
}
