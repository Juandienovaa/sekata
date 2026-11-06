import React from 'react';
import { Sparkles } from 'lucide-react';

export default function TickerMarquee() {
  const marqueeItems = [
    'SELALU ADA CERITA DI SETIAP SEDUHAN',
    'SEKATA SLOWBAR TANJUNGPINANG',
    '#KECILBERTUMBUH',
    'BUKAN HANYA TENTANG KOPI',
    'RITUAL SEDUH LAMBAT DI MEJA BARISTA',
    'MARI BERTEMU & BERCERITA'
  ];

  return (
    <div className="w-full bg-[#110b09] text-white py-3.5 sm:py-4 border-y-2 border-espresso/40 overflow-hidden select-none relative z-20 shadow-md pointer-events-none">
      {/* Infinite Scrolling Ticker (Persis Gambar 5 User) */}
      <div className="flex animate-marquee whitespace-nowrap will-change-transform pointer-events-none">
        {[0, 1].map((blockIdx) => (
          <div
            key={blockIdx}
            className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 flex-shrink-0"
          >
            {marqueeItems.map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
                {/* Retro Sparkle Star Icon */}
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-turquoise stroke-[2] flex-shrink-0" />
                <span className="font-sans font-black italic text-[16px] sm:text-[19px] md:text-[22px] tracking-[0.06em] text-white uppercase">
                  {text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

