import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6283125525115?text=Halo%20Sekata%20Coffee%20%26%20Slowbar!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <aside
      id="reserve"
      className="w-full bg-[#110c0a] text-cream border-y border-white/10 py-3.5 sm:py-4 scroll-mt-20 select-none relative z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Minimal live status badge & micro copy */}
        <div className="flex items-center gap-3 text-left">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/10 border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-wider text-marigold uppercase flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SLOWBAR &bull; 6 KURSI</span>
          </span>
          <p className="font-sans text-[13px] sm:text-[14px] text-cream/80 font-normal">
            Satu meja untuk berhenti sejenak. Tanpa biaya reservasi.
          </p>
        </div>

        {/* Right: Sleek tactile WhatsApp CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full font-sans text-xs font-semibold bg-cream text-espresso hover:bg-burnt-orange hover:text-cream transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
        >
          <span>Reservasi Meja (WhatsApp)</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
        </a>

      </div>
    </aside>
  );
}
