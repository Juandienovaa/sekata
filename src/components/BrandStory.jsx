import React from 'react';
import { Coffee, HeartHandshake, Sparkles, Sprout } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="filosofi" className="w-full py-14 sm:py-20 bg-[#ede1d3] border-y border-espresso/15 scroll-mt-20 select-none">
      <div className="container-max px-4 sm:px-8">
        
        {/* Main Editorial Card with Distinct Warm Organic Linen (Bukan Putih!) */}
        <div className="bg-[#f6ede2] rounded-[24px] sm:rounded-[32px] border-2 border-espresso/15 p-6 sm:p-10 lg:p-14 shadow-md relative overflow-hidden">
          
          {/* 
            HEADER PERSIS SEPERTI GAMBAR 2 USER:
            "Community Board: [Swan Illustration] What's Happening in Our World"
            -> "Filosofi Sekata: [Maskot Sekata] Bukan Hanya Tentang Kopi."
          */}
          <div className="mb-8 text-left relative z-10 pb-5 border-b border-espresso/10">
            <div className="inline-flex items-center gap-3 mb-1.5 flex-wrap">
              <span className="font-display text-[26px] sm:text-[32px] lg:text-[36px] text-amber leading-none font-normal">
                Filosofi Sekata:
              </span>
              {/* Cute Mascot Illustration inline like the swan in Gambar 2 */}
              <img
                src="/pegangkopi.png"
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="Maskot Sekata"
                className="h-9 sm:h-11 w-auto object-contain inline-block -rotate-6 filter drop-shadow-sm transition-transform hover:rotate-0 duration-300"
              />
            </div>
            <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] leading-[0.98] text-espresso tracking-[-0.035em]">
              Bukan Hanya Tentang Kopi.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Editorial Philosophy Essay (Teks Espresso Pekat, Kontras Tinggi & Sangat Nyaman Dibaca) */}
            <div className="lg:col-span-7 text-left">

              {/* High Contrast Reading Paragraphs (Font Alami & Elegan, Anti AI-Slop) */}
              <div className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.75] text-[#2d1813] font-normal mb-8">
                <p className="text-[#2b1712]">
                  <span className="float-left text-[44px] sm:text-[50px] font-display text-turquoise leading-none pr-3 pt-1 font-bold">
                    K
                  </span>
                  ami percaya, kopi punya cara sederhana untuk mempertemukan banyak hal. Percakapan jujur, ide kreatif, keluh kesah, hingga gelak tawa selalu bisa dimulai dari satu meja dan satu cangkir seduhan hangat. Sekata hadir di sudut Tanjungpinang bukan semata-mata sebagai tempat membeli minuman, melainkan sebagai ruang bersama untuk berhenti sejenak, menghela napas, dan merayakan setiap perjumpaan.
                </p>
                
                <p className="text-[#3a201a]">
                  Melalui meja slowbar, kami ingin menghidupkan kembali kehangatan interaksi antar sesama. Barista kami menyeduh dengan penuh kesadaran dan ketenangan, menyambut setiap orang yang melangkah masuk tanpa sekat—mulai dari teman yang baru pertama kali mencicipi kopi, penikmat manual brew, hingga kawan yang sekadar butuh sudut tenang untuk menulis cerita hari ini.
                </p>
              </div>

              {/* CALLOUT BOX: HIGHLIGHT UTAMA (Warna Turquoise Sekata) */}
              <div className="my-6 p-6 sm:p-7 bg-turquoise text-cream rounded-[18px] border-2 border-turquoise-dark shadow-md relative overflow-hidden">
                
                {/* Background quote mark */}
                <div className="absolute right-3 -bottom-4 text-cream/10 select-none pointer-events-none">
                  <span className="font-display text-[90px] sm:text-[110px] leading-none">“</span>
                </div>

                <div className="relative z-10">
                  <span className="text-[13px] font-body text-cream/80 block mb-1 font-normal">
                    Tagline Utama Sekata
                  </span>

                  <h3 className="font-display text-[22px] sm:text-[28px] text-cream leading-[1.14] tracking-[-0.02em] font-normal mb-2">
                    &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
                  </h3>

                  <p className="text-[13px] font-body text-marigold mb-5">
                    Sekata Slowbar &bull; Tanjungpinang, Kepri &bull; #KecilBertumbuh
                  </p>

                  {/* 3 Pillars inside Callout Box (Clean human typography persis Gambar 5) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-cream/20 text-left">
                    
                    <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[10px] border border-cream/25">
                      <span className="text-[13px] font-body font-semibold text-marigold block mb-1">
                        Ritual Seduhan Lambat
                      </span>
                      <p className="text-[13px] font-body text-cream/90 leading-snug">
                        Menyeduh perlahan dengan tangan dan ketelitian rasa, bukan serba instan.
                      </p>
                    </div>

                    <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[10px] border border-cream/25">
                      <span className="text-[13px] font-body font-semibold text-marigold block mb-1">
                        Terbuka untuk Semua
                      </span>
                      <p className="text-[13px] font-body text-cream/90 leading-snug">
                        Kopi yang ramah dan mudah dipahami, tanpa istilah rumit yang mengintimidasi.
                      </p>
                    </div>

                    <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[10px] border border-cream/25">
                      <span className="text-[13px] font-body font-semibold text-marigold block mb-1">
                        #KecilBertumbuh
                      </span>
                      <p className="text-[13px] font-body text-cream/90 leading-snug">
                        Merawat langkah kecil, menyemai karya, dan bertumbuh bersama komunitas lokal.
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Polaroid Dokumentasi Slowbar */}
            <div className="lg:col-span-5">
              <div className="p-3.5 sm:p-4 bg-[#f8f1e8] rounded-[20px] border-2 border-espresso/15 shadow-sm">
                
                <div className="w-full aspect-[4/3.2] rounded-[14px] overflow-hidden border border-espresso/15 bg-sandstone relative group">
                  <img
                    src="/Caramel_macchiato.jpg"
                    alt="Tasty Coffee and Chill Vibes di Sekata Coffee Tanjungpinang"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Top Badge (Human Typography) */}
                  <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm px-3 py-1 rounded-[6px] border border-espresso/10 text-[12px] font-body text-espresso flex items-center gap-1.5 font-medium shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
                    <span>Sudut Meja Slowbar</span>
                  </div>

                  {/* Graphic Sticker Overlay: "Tasty Coffee and Chill Vibes" with Mascot */}
                  <div className="absolute top-10 left-3 select-none pointer-events-none">
                    <div className="bg-espresso/90 backdrop-blur-sm text-cream px-3.5 py-2.5 rounded-[10px] border border-cream/30 shadow-md rotate-[-3deg]">
                      <div className="flex items-center gap-2.5">
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

                {/* Bottom Metadata Strip (Typography Image 5 style) */}
                <div className="mt-3 px-1 flex items-center justify-between text-[13px] font-body text-espresso">
                  <span className="text-[#5c4d44]">Interaksi santai bersama barista</span>
                  <span className="text-burnt-orange font-medium">Bebas bertukar cerita</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
