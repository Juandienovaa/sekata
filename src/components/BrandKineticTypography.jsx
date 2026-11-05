import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BrandKineticTypography() {
  const rowTop = [
    'SEKATA COFFEE & SLOWBAR',
    'ARTISAN SLOWBAR',
    '100% SINGLE ORIGIN',
    'RITUAL SEDUHAN MANUAL',
    'TEMPAT BERTEMU & BERCERITA',
    '#KECILBERTUMBUH'
  ];

  const rowBottom = [
    'TANPA TERGESA-GESA',
    'PERCAKAPAN JUJUR',
    'RITUAL SEDUHAN',
    'SEDUHAN LAMBAT',
    'RUANG TERBUKA UNTUK SEMUA',
    'RASA YANG MENETAP'
  ];

  return (
    <section id="brand-kinetic" className="w-full bg-[#0d0806] text-cream py-14 sm:py-20 border-y border-white/10 overflow-hidden select-none relative z-20">
      
      {/* Subtle Background Glow with Signature Turquoise */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-turquoise/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP MARQUEE STREAM — Solid Bold (Moving Left) */}
      <div className="flex animate-marquee whitespace-nowrap will-change-transform mb-6 sm:mb-8">
        {[0, 1].map((blockIdx) => (
          <div key={blockIdx} className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 flex-shrink-0">
            {rowTop.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-14 flex-shrink-0">
                <span className="font-sans font-black text-[28px] sm:text-[44px] lg:text-[56px] tracking-[-0.03em] uppercase text-cream hover:text-turquoise transition-colors">
                  {item}
                </span>
                <span className="text-turquoise text-xl sm:text-2xl font-bold flex-shrink-0 select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 2. CENTERPIECE EDITORIAL MANIFESTO (Awwwards Style) */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 my-6 sm:my-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-white/15 text-turquoise-light font-mono text-[11px] uppercase tracking-[0.2em] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-turquoise" />
          <span>SLOWBAR MANIFESTO &bull; EST. 2026</span>
        </div>

        <h2 className="font-sans font-black text-[32px] sm:text-[54px] lg:text-[70px] leading-[0.98] tracking-[-0.04em] uppercase text-cream max-w-4xl mx-auto">
          Bukan hanya tentang kopi.
          <span className="block text-turquoise italic font-bold tracking-tight">
            Tentang bagaimana kita bertemu.
          </span>
        </h2>

        <p className="font-sans text-[13px] sm:text-[15px] text-cream/70 tracking-wide font-normal max-w-lg mx-auto mt-4">
          Menyeduh perlahan dengan penuh perhatian, merawat obrolan jujur dari satu cangkir ke cangkir berikutnya.
        </p>
      </div>

      {/* 3. BOTTOM MARQUEE STREAM — Outlined Stroke (Moving Right) */}
      <div className="flex animate-marquee-reverse whitespace-nowrap will-change-transform mt-6 sm:mt-8">
        {[0, 1].map((blockIdx) => (
          <div key={blockIdx} className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 flex-shrink-0">
            {rowBottom.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-14 flex-shrink-0">
                <span
                  className="font-sans font-black text-[28px] sm:text-[44px] lg:text-[56px] tracking-[-0.03em] uppercase text-transparent transition-all duration-300"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255, 249, 242, 0.45)',
                  }}
                >
                  {item}
                </span>
                <span className="text-marigold text-lg sm:text-xl font-bold flex-shrink-0 select-none">
                  ★
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
