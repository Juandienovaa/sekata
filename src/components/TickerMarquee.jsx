import React from 'react';

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
    <div className="w-full bg-[#140e0c] text-white py-3 sm:py-3.5 border-y-2 border-espresso/35 overflow-hidden select-none relative z-20">
      {/* Infinite Scrolling Ticker (Persis Gambar 3 User) */}
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[0, 1].map((blockIdx) => (
          <div
            key={blockIdx}
            className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 flex-shrink-0"
          >
            {marqueeItems.map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-10 flex-shrink-0">
                {/* Retro Sparkle Star Icon Persis Gambar 3 */}
                <span className="text-burnt-orange text-lg sm:text-xl font-bold flex-shrink-0 select-none">
                  ✦
                </span>
                <span className="font-sans font-black italic text-[15px] sm:text-[18px] md:text-[20px] tracking-[0.05em] text-white uppercase">
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
