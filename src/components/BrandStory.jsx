import React from 'react';
import { Coffee, HeartHandshake, Sparkles, Sprout, Check } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="filosofi" className="w-full py-14 sm:py-22 bg-[#f6eee5] border-y-2 border-espresso/10 scroll-mt-20 select-none">
      <div className="container-max px-4 sm:px-8">
        
        {/* Main Editorial Card with Distinct Warm Linen Parchment (Tulisan Jelas & Ga Nyaru) */}
        <div className="bg-[#fffbf6] rounded-[20px] sm:rounded-[28px] border-2 border-espresso/15 p-6 sm:p-10 lg:p-14 shadow-lg relative overflow-hidden">
          
          {/* Subtle Watermark Stamp */}
          <div className="absolute right-4 top-4 font-mono text-[80px] sm:text-[140px] text-espresso/[0.03] select-none pointer-events-none leading-none font-bold">
            #KB
          </div>

          {/* Section Header Stamp */}
          <div className="flex items-center gap-2.5 mb-4 relative z-10">
            <span className="badge-stamp bg-turquoise text-cream font-mono shadow-sm text-xs">
              FILOSOFI SEKATA
            </span>
            <p className="text-[11px] sm:text-xs font-mono text-burnt-orange font-bold uppercase tracking-[0.12em]">
              TANJUNGPINANG &bull; #KECILBERTUMBUH
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Editorial Philosophy Essay (Teks Espresso Pekat, Kontras Tinggi & Sangat Nyaman Dibaca) */}
            <div className="lg:col-span-7 text-left">
              <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] leading-[0.94] text-espresso tracking-[-0.04em] mb-6">
                Bukan Hanya Tentang Kopi.
              </h2>

              {/* High Contrast Reading Paragraphs */}
              <div className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.75] text-[#2d1813] font-medium mb-8">
                <p className="text-[#2b1712]">
                  <span className="float-left text-[46px] sm:text-[52px] font-display text-turquoise leading-none pr-3 pt-1 font-bold">
                    K
                  </span>
                  ami percaya, kopi punya cara sederhana untuk mempertemukan banyak hal. Percakapan jujur, ide kreatif, keluh kesah, hingga gelak tawa selalu bisa dimulai dari satu meja dan satu cangkir seduhan hangat. Sekata hadir di sudut Tanjungpinang bukan semata-mata sebagai tempat membeli minuman, melainkan sebagai ruang bersama untuk berhenti sejenak, menghela napas, dan merayakan setiap perjumpaan.
                </p>
                
                <p className="text-[#3a201a]">
                  Melalui meja slowbar, kami ingin menghidupkan kembali kehangatan interaksi antar sesama. Barista kami menyeduh dengan penuh kesadaran dan ketenangan, menyambut setiap orang yang melangkah masuk tanpa sekat—mulai dari teman yang baru pertama kali mencicipi kopi, penikmat manual brew, hingga kawan yang sekadar butuh sudut tenang untuk menulis cerita hari ini.
                </p>
              </div>

              {/* CALLOUT BOX: HIGHLIGHT UTAMA (Kontras Tajam & Eye-Catching) */}
              <div className="my-6 p-5 sm:p-7 bg-turquoise text-cream rounded-[16px] border-2 border-turquoise-dark shadow-md relative overflow-hidden">
                
                {/* Background quote mark */}
                <div className="absolute right-3 -bottom-4 text-cream/10 select-none pointer-events-none">
                  <span className="font-display text-[90px] sm:text-[110px] leading-none">“</span>
                </div>

                <div className="relative z-10">
                  <span className="badge-stamp bg-cream/90 text-espresso font-mono text-[10px] mb-2 inline-block">
                    TAGLINE UTAMA SEKATA
                  </span>

                  <h3 className="font-display text-[22px] sm:text-[30px] text-cream leading-[1.12] tracking-[-0.02em] font-normal mb-2">
                    &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
                  </h3>

                  <p className="text-[11px] font-mono text-marigold uppercase tracking-[0.1em] font-medium mb-5">
                    &bull; SEKATA SLOWBAR &bull; TANJUNGPINANG, KEPRI &bull; #KECILBERTUMBUH
                  </p>

                  {/* 3 Pillars inside Callout Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-cream/20 text-left">
                    
                    <div className="bg-cream/15 backdrop-blur-sm p-3 rounded-[8px] border border-cream/25">
                      <span className="text-[10px] font-mono font-bold text-marigold block mb-1">
                        01 / PROSES SLOWBAR
                      </span>
                      <p className="text-[12px] font-body text-cream/95 leading-snug">
                        Menyeduh perlahan dengan tangan dan ketelitian rasa, bukan serba instan.
                      </p>
                    </div>

                    <div className="bg-cream/15 backdrop-blur-sm p-3 rounded-[8px] border border-cream/25">
                      <span className="text-[10px] font-mono font-bold text-marigold block mb-1">
                        02 / TERBUKA UNTUK SEMUA
                      </span>
                      <p className="text-[12px] font-body text-cream/95 leading-snug">
                        Kopi yang ramah dan mudah dipahami, tanpa istilah rumit yang mengintimidasi.
                      </p>
                    </div>

                    <div className="bg-cream/15 backdrop-blur-sm p-3 rounded-[8px] border border-cream/25">
                      <span className="text-[10px] font-mono font-bold text-marigold block mb-1">
                        03 / #KECILBERTUMBUH
                      </span>
                      <p className="text-[12px] font-body text-cream/95 leading-snug">
                        Merawat langkah kecil, menyemai karya, dan bertumbuh bersama komunitas lokal.
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Polaroid Dokumentasi Slowbar */}
            <div className="lg:col-span-5">
              <div className="p-3 sm:p-4 bg-[#f8f1e8] rounded-[18px] border-2 border-espresso/15 shadow-md">
                
                <div className="w-full aspect-[4/3.2] rounded-[12px] overflow-hidden border border-espresso/15 bg-sandstone relative group">
                  <img
                    src="/Caramel_macchiato.jpg"
                    alt="Tasty Coffee and Chill Vibes di Sekata Coffee Tanjungpinang"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm px-2.5 py-1 rounded-[4px] border border-espresso/10 text-[10px] font-mono text-turquoise uppercase tracking-[0.05em] flex items-center gap-1.5 font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
                    <span>DOKUMENTASI MEJA SLOWBAR</span>
                  </div>

                  {/* Graphic Sticker Overlay: "Tasty Coffee and Chill Vibes" with Mascot */}
                  <div className="absolute top-10 left-3 select-none pointer-events-none">
                    <div className="bg-espresso/85 backdrop-blur-sm text-cream px-3 py-2 rounded-[8px] border border-cream/30 shadow-md rotate-[-3deg]">
                      <div className="flex items-center gap-2">
                        <div className="leading-tight text-left">
                          <div className="font-display text-[15px] sm:text-[17px] text-cream">Tasty Coffee</div>
                          <div className="font-display text-[13px] sm:text-[15px] text-marigold">and Chill Vibes.</div>
                        </div>
                        <img
                          src="/logo.png"
                          alt="Maskot"
                          className="w-7 h-7 object-contain filter invert"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Metadata Strip */}
                <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-espresso font-semibold uppercase">
                  <span>INTERAKSI LANGSUNG BERSAMA BARISTA</span>
                  <span className="text-burnt-orange">BEBAS SHARING &amp; CERITA</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
