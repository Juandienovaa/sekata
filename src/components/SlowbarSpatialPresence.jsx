import React from 'react';
import { Compass, Flame, Clock, Users } from 'lucide-react';

export default function SlowbarSpatialPresence() {
  const pillars = [
    {
      icon: Flame,
      number: '01',
      title: 'Manual Brew & Sangrai Segar',
      desc: 'Ekstraksi biji kopi pilihan Nusantara dengan presisi rasa tanpa kompromi.'
    },
    {
      icon: Clock,
      number: '02',
      title: 'Seduhan Lambat (Zero Rush)',
      desc: 'Ruang untuk melambatkan tempo, menghela napas, dan menikmati setiap tegukan.'
    },
    {
      icon: Users,
      number: '03',
      title: 'Meja Komunal Terbuka',
      desc: 'Titik temu bagi kawan lama, pencinta seduhan, dan siapa saja yang ingin bercerita.'
    }
  ];

  return (
    <section id="slowbar-space" className="w-full py-10 sm:py-20 bg-[#f5eee6] border-y border-espresso/15 scroll-mt-20 select-none">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header: Ultra-clean, minimal text, Awwwards typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-espresso/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-turquoise" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-turquoise font-semibold">
                RUANG &bull; SLOWBAR EXPERIENCE
              </span>
            </div>
            <h2 className="font-sans font-black text-[34px] sm:text-[48px] lg:text-[56px] leading-[0.98] tracking-[-0.04em] text-espresso uppercase">
              Satu Meja. Satu Cangkir.
              <span className="block text-espresso/60 font-medium">
                Tanpa Sekat.
              </span>
            </h2>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="font-sans text-[13px] sm:text-[14px] text-espresso/75 leading-relaxed font-normal">
              Slowbar independen dengan ritual seduhan kopi yang jujur dan kehangatan bertukar cerita kehidupan.
            </p>
            <div className="mt-2 font-mono text-[11px] text-turquoise uppercase tracking-wider font-semibold">
              EST. 2026 &bull; #KECILBERTUMBUH
            </div>
          </div>
        </div>

        {/* Cinematic Spatial Visual Frame */}
        <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[480px] lg:h-[560px] rounded-[20px] sm:rounded-[32px] overflow-hidden border border-espresso/15 bg-espresso shadow-lg mb-8 group">
          <img
            src="/konten3.jpg"
            alt="Suasana Ruang Seduh dan Meja Slowbar Sekata"
            loading="eager"
            className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15 pointer-events-none" />

          {/* Bottom Overlaid Aesthetic Tag */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-cream">
            <div className="max-w-xl text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-marigold font-semibold block mb-1">
                #KECILBERTUMBUH
              </span>
              <p className="font-sans font-bold text-[20px] sm:text-[28px] leading-tight text-white tracking-tight">
                Setiap seduhan punya waktu untuk mekar. Begitu pula percakapan kita.
              </p>
            </div>

            <div className="text-left sm:text-right flex-shrink-0">
              <span className="inline-block px-3 py-1 rounded-[6px] bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-mono text-cream/90">
                BUKA SETIAP HARI &bull; 10:00 &ndash; 00:00 WIB
              </span>
            </div>
          </div>
        </div>

        {/* 3 Minimalist Sensory Specs (Replaces old article list & spotify player) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="bg-[#faf5ef] rounded-[18px] p-6 border border-espresso/10 hover:border-espresso/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-turquoise tracking-wider">
                    {p.number}
                  </span>
                  <Icon className="w-4 h-4 text-espresso/40 group-hover:text-turquoise transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-[16px] sm:text-[17px] text-espresso mb-1.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-[13px] text-espresso/70 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

