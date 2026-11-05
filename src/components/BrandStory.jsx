import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import TickerMarquee from './TickerMarquee';

export default function BrandStory() {
  return (
    <section id="filosofi" className="w-full bg-[#ede2d5] border-y border-espresso/15 scroll-mt-20 select-none">
      
      {/* 
        TULISAN BERGERAK (INFINITE TICKER MARQUEE) PERSIS GAMBAR 5 USER
        Menyatu di bagian paling atas section Filosofi Sekata, full-bleed mentok ke samping
      */}
      <TickerMarquee />

      <div className="py-14 sm:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
          {/* Main Editorial Card with Distinct Warm Organic Linen Background (Bukan Putih Mentah) */}
          <div className="bg-[#f8f2eb] rounded-[24px] sm:rounded-[32px] border border-espresso/15 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          {/* 
            HEADER SECTION: Clean Human Editorial
            Filosofi Sekata • Bukan Hanya Tentang Kopi.
          */}
          <div className="mb-10 text-left relative z-10 pb-6 border-b border-espresso/10">
            <div className="inline-flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-display text-[24px] sm:text-[30px] lg:text-[34px] text-burnt-orange leading-none font-normal">
                Filosofi Sekata:
              </span>
              <img
                src="/pegangkopi.png"
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="Maskot Sekata"
                className="h-8 sm:h-10 w-auto object-contain inline-block -rotate-6 filter drop-shadow-sm transition-transform hover:rotate-0 duration-300"
              />
            </div>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.98] text-espresso tracking-[-0.04em]">
              Bukan Hanya Tentang Kopi.
            </h2>
          </div>

          {/* Narrative Paragraphs: High Legibility & Warm Reading Rhythm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 text-left relative z-10">
            <div className="lg:col-span-6 font-body text-[15px] sm:text-[16px] leading-[1.75] text-[#2d1813] font-normal">
              <p>
                <span className="float-left text-[46px] sm:text-[52px] font-display text-burnt-orange leading-none pr-3 pt-1 font-bold">
                  K
                </span>
                ami percaya, kopi punya cara sederhana untuk mempertemukan banyak hal. Percakapan jujur, ide kreatif, keluh kesah, hingga gelak tawa selalu bisa dimulai dari satu meja dan satu cangkir seduhan hangat. Sekata hadir di sudut Tanjungpinang bukan semata-mata sebagai tempat membeli kafein, melainkan sebagai ruang bersama untuk berhenti sejenak, menghela napas, dan merayakan setiap perjumpaan.
              </p>
            </div>
            <div className="lg:col-span-6 font-body text-[15px] sm:text-[16px] leading-[1.75] text-[#3a201a] font-normal flex items-end">
              <p>
                Melalui meja slowbar, kami ingin menghidupkan kembali kehangatan interaksi antar sesama. Barista kami menyeduh dengan penuh kesadaran dan ketenangan, menyambut setiap orang yang melangkah masuk tanpa sekat—mulai dari teman yang baru pertama kali mencicipi kopi, penikmat manual brew, hingga kawan yang sekadar butuh sudut tenang untuk menulis cerita hari ini.
              </p>
            </div>
          </div>

          {/* 
            CORE FEATURE DUO (Spasial Seimbang, Anti AI-Slop):
            Kiri: Statement Utama & 3 Pilar Editorial Bernomor (01, 02, 03)
            Kanan: Documentary Slowbar Cinema Plate (Tinggi Setara & Proporsional)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
            
            {/* Sisi Kiri: Statement Card & 3 Pilar Minimalis Bernomor */}
            <div className="lg:col-span-7 bg-[#17100d] text-[#fbf6f0] rounded-[22px] p-6 sm:p-9 border border-white/5 ring-1 ring-white/10 shadow-[0_20px_45px_rgba(20,12,9,0.2)] flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-0.5">
              
              <div>
                {/* Subtle Context Indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange"></span>
                  <span className="font-mono text-[11px] text-[#d88d63] uppercase tracking-[0.14em] font-medium">
                    PRINSIP SEDUHAN &bull; #KECILBERTUMBUH
                  </span>
                </div>

                {/* Tagline Heading: Clean Editorial Serif dengan Breathing Room */}
                <h3 className="font-display text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.18] text-[#fcf9f5] tracking-[-0.03em] font-normal mb-3">
                  &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
                </h3>

                {/* Subtext dengan Nada Hangat Netral (Bukan Putih Mentah) */}
                <p className="font-body text-[14px] sm:text-[15px] text-[#c9bcad] leading-relaxed max-w-xl">
                  Kopi di meja kami bukan sekadar ekstraksi rasa, melainkan alasan untuk saling menyapa, mendengarkan, dan merawat obrolan yang jujur.
                </p>
              </div>

              {/* 3 Pilar Editorial Minimalis Bernomor (Menggantikan 3 Kotak Sempit) */}
              <div className="border-t border-white/10 pt-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 text-left">
                  
                  {/* Pilar 01 */}
                  <div className="group/pillar transition-transform duration-200 ease-out">
                    <span className="font-mono text-[11px] text-[#d88d63] font-semibold tracking-[0.12em] block mb-1.5">
                      01 &bull; RITUAL
                    </span>
                    <h4 className="font-sans font-bold text-[15px] text-[#fcf9f5] mb-1 group-hover/pillar:text-marigold transition-colors">
                      Seduhan Lambat
                    </h4>
                    <p className="font-body text-[12.5px] text-[#b8ab9d] leading-relaxed">
                      Menyeduh dengan ketelitian rasa, mengutamakan dialog daripada serba instan.
                    </p>
                  </div>

                  {/* Pilar 02 */}
                  <div className="group/pillar transition-transform duration-200 ease-out">
                    <span className="font-mono text-[11px] text-[#d88d63] font-semibold tracking-[0.12em] block mb-1.5">
                      02 &bull; RUANG
                    </span>
                    <h4 className="font-sans font-bold text-[15px] text-[#fcf9f5] mb-1 group-hover/pillar:text-marigold transition-colors">
                      Terbuka untuk Semua
                    </h4>
                    <p className="font-body text-[12.5px] text-[#b8ab9d] leading-relaxed">
                      Kopi yang ramah dan inklusif, tanpa istilah rumit yang mengintimidasi.
                    </p>
                  </div>

                  {/* Pilar 03 */}
                  <div className="group/pillar transition-transform duration-200 ease-out">
                    <span className="font-mono text-[11px] text-[#d88d63] font-semibold tracking-[0.12em] block mb-1.5">
                      03 &bull; GERAKAN
                    </span>
                    <h4 className="font-sans font-bold text-[15px] text-[#fcf9f5] mb-1 group-hover/pillar:text-marigold transition-colors">
                      #KecilBertumbuh
                    </h4>
                    <p className="font-body text-[12.5px] text-[#b8ab9d] leading-relaxed">
                      Merawat langkah kecil, menyemai karya, dan tumbuh bersama ekosistem lokal.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Sisi Kanan: Documentary Slowbar Cinema Plate (Seimbang Sempurna dengan Kiri) */}
            <div className="lg:col-span-5 bg-[#17100d] rounded-[22px] overflow-hidden border border-white/5 ring-1 ring-white/10 shadow-[0_20px_45px_rgba(20,12,9,0.2)] flex flex-col justify-between relative group transition-all duration-300 ease-out hover:-translate-y-0.5 min-h-[340px] sm:min-h-[400px]">
              
              {/* Documentary Photograph with Scale Micro-Interaction */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/partner-roasting.jpg"
                  alt="Suasana Roastery & Meja Slowbar Sekata Coffee Tanjungpinang"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] filter contrast-105 brightness-95"
                />
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
              </div>

              {/* Top Film Slate Tag */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#fcf9f5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="tracking-wider uppercase">DOKUMENTER MEJA SLOWBAR</span>
                </div>
              </div>

              {/* Bottom Editorial Caption Plate */}
              <div className="relative z-10 p-5 sm:p-6 text-left">
                <h4 className="font-display text-[20px] sm:text-[22px] text-[#fcf9f5] leading-tight mb-1">
                  Ritme Tenang di Sudut Meja
                </h4>
                <p className="font-body text-xs text-[#cfc3b5] leading-relaxed mb-3">
                  Setiap biji kopi Nusantara diseduh dengan sabar, mengiringi obrolan hangat antara barista dan kawan yang singgah.
                </p>
                <div className="flex items-center justify-between pt-2.5 border-t border-white/15 text-[11px] font-mono text-[#d88d63]">
                  <span>📍 JL. YOS SUDARSO, TANJUNGPINANG</span>
                  <span className="font-bold text-[#fcf9f5] flex items-center gap-1 group-hover:text-marigold transition-colors">
                    #KecilBertumbuh <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
  );
}
