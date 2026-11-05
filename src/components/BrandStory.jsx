import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import TickerMarquee from './TickerMarquee';

export default function BrandStory() {
  const pillars = [
    {
      num: '01',
      tag: 'RITUAL LAMBAT',
      title: 'Menyeduh dengan Kesadaran',
      desc: 'Setiap cangkir manual brew diekstraksi tanpa tergesa-gesa. Mengutamakan dialog rasa daripada sekadar kecepatan saji.'
    },
    {
      num: '02',
      tag: 'RUANG TERBUKA',
      title: 'Duduk Sejajar Tanpa Sekat',
      desc: 'Tidak ada pemisah antara barista dan penikmat. Meja slowbar adalah ruang ramah untuk kawan lama maupun orang asing.'
    },
    {
      num: '03',
      tag: 'GERAKAN LOKAL',
      title: '#KecilBertumbuh Bersama',
      desc: 'Merawat langkah sederhana, menyemai kolaborasi kreatif, dan tumbuh bersama denyut komunitas lokal.'
    }
  ];

  return (
    <section id="filosofi" className="w-full bg-[#f4ece2] border-y border-espresso/15 scroll-mt-20 select-none">
      
      {/* 1. TULISAN BERGERAK (INFINITE TICKER MARQUEE) FULL-BLEED */}
      <TickerMarquee />

      {/* 
        2. OPEN EDITORIAL CANVAS (ZERO "BOX DALAM BOX"):
        Tidak ada kartu rounded berlapis di dalam kartu rounded.
        Konten hidup bebas langsung di atas kanvas dengan garis pembatas hairline elegan.
      */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        
        {/* TOP LABEL & BIG MEMORABLE HOOK */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-turquoise" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-turquoise font-semibold">
              FILOSOFI SLOWBAR &bull; EST. 2026
            </span>
          </div>

          <h2 className="font-sans font-black text-[36px] sm:text-[54px] lg:text-[68px] leading-[0.98] tracking-[-0.04em] text-espresso uppercase max-w-5xl">
            Waktu sering kali berjalan terburu-buru.{' '}
            <span className="text-turquoise italic font-bold">
              Kami memilih melambat.
            </span>
          </h2>
        </div>

        {/* NARRATIVE MANIFESTO: DUAL EDITORIAL COLUMNS (NO BOXES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-14 sm:pb-20 border-b border-espresso/15 text-left">
          
          <div className="lg:col-span-6 font-sans text-[16px] sm:text-[18px] leading-[1.7] text-espresso font-normal">
            <p>
              Sekata Coffee &amp; Space hadir bukan sekadar untuk menjual kafein harian, melainkan sebagai ruang jeda bersama. Meja slowbar kami adalah panggung terbuka: tempat barista menyeduh dengan kesadaran penuh, dan setiap cangkir menjadi awal perjumpaan yang jujur.
            </p>
          </div>

          <div className="lg:col-span-6 font-sans text-[15px] sm:text-[16px] leading-[1.75] text-espresso/80 font-normal">
            <p>
              Tanpa sekat pemisah, tanpa istilah kopi yang rumit dan mengintimidasi. Kami percaya obrolan terbaik tentang kehidupan selalu dimulai saat kita duduk sejajar, menghela napas, dan merayakan perjumpaan di tengah hangatnya seduhan lokal Nusantara.
            </p>
            <div className="mt-4 pt-4 border-t border-espresso/10 flex items-center justify-between text-xs font-mono text-espresso/60">
              <span>SLOWBAR &bull; SINGLE ORIGIN ROASTERY</span>
              <span className="text-turquoise font-semibold">EST. 2026 &bull; #KECILBERTUMBUH</span>
            </div>
          </div>

        </div>

        {/* 
          3. CINEMATIC VISUAL + 3 ARCHITECTURAL PILLARS (NO BOX-IN-BOX):
          Layout asimetris terbuka: Foto sinematik di kiri + 3 baris pilar editorial di kanan
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-14 sm:pt-20 items-stretch">
          
          {/* Sisi Kiri: Foto Roastery & Slowbar Bersih Tanpa Frame Kartu Bertumpuk */}
          <div className="lg:col-span-5 relative rounded-[18px] sm:rounded-[24px] overflow-hidden bg-espresso shadow-md min-h-[360px] sm:min-h-[460px] group">
            <img
              src="/partner-roasting.jpg"
              alt="Suasana Roastery & Meja Slowbar Sekata Coffee Tanjungpinang"
              className="w-full h-full object-cover filter contrast-105 brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Minimalist Floating Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-cream font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>DOKUMENTER MEJA SLOWBAR</span>
              </span>
            </div>

            {/* Bottom Photo Caption */}
            <div className="absolute bottom-5 left-5 right-5 z-10 text-cream text-left">
              <p className="font-sans font-bold text-[18px] sm:text-[20px] leading-tight text-white mb-1">
                Ritme Tenang di Sudut Meja
              </p>
              <p className="font-sans text-xs text-cream/80 font-normal">
                Setiap biji kopi Nusantara diseduh dengan sabar, mengiringi obrolan hangat antara barista dan kawan yang singgah.
              </p>
            </div>
          </div>

          {/* Sisi Kanan: 3 Pilar Editorial Terbuka (Garis Hairline, Bukan Box Bertingkat) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 text-left">
            {pillars.map((p, idx) => (
              <div
                key={p.num}
                className={`group pb-6 sm:pb-8 ${
                  idx !== pillars.length - 1 ? 'border-b border-espresso/15' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-turquoise tracking-widest">
                    {p.num} &bull; {p.tag}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[22px] sm:text-[26px] text-espresso mb-2 tracking-tight group-hover:text-turquoise transition-colors">
                  {p.title}
                </h3>

                <p className="font-sans text-[14px] sm:text-[15px] text-espresso/75 leading-relaxed font-normal max-w-xl">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
