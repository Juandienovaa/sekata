import React from 'react';
import { Coffee, HeartHandshake, Sparkles, Sprout, Check } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="filosofi" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Stamp */}
        <div className="flex items-center gap-3 mb-4">
          <span className="badge-stamp bg-turquoise text-cream font-mono shadow-sm">
            FILOSOFI SEKATA
          </span>
          <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em]">
            TANJUNGPINANG &bull; #KECILBERTUMBUH
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Philosophy Essay */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[54px] leading-[0.93] text-espresso tracking-[-0.05em] mb-6">
              Bukan Hanya Tentang Kopi.
            </h2>

            {/* Drop Cap Paragraph in Natural Bahasa Indonesia */}
            <div className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.7] text-coffee-dust mb-8">
              <p>
                <span className="float-left text-[48px] font-display text-turquoise leading-none pr-3 pt-1">
                  K
                </span>
                ami percaya, kopi punya cara sederhana untuk mempertemukan banyak hal. Percakapan, pengalaman, ide, dan cerita bisa dimulai dari satu meja dan satu cangkir. Sekata hadir di Tanjungpinang bukan semata-mata sebagai tempat membeli minuman, melainkan sebagai ruang bersama untuk berhenti sejenak, menghela napas, dan merayakan perjumpaan.
              </p>
              <p>
                Melalui meja slowbar, kami ingin menghidupkan kembali kehangatan interaksi antara manusia. Kami menyeduh dengan penuh kesadaran dan ketenangan, menyambut setiap orang yang melangkah masuk tanpa sekat—mulai dari teman yang baru pertama kali mencicipi kopi, para pencinta manual brew, hingga mereka yang sekadar butuh sudut tenang untuk menulis cerita hari ini.
              </p>
            </div>

            {/* EYE-CATCHING CALLOUT BOX WITH RICH BACKGROUND & HIGH-IMPACT FONT (Sesuaikan Gambar 3) */}
            <div className="my-8 p-6 sm:p-8 bg-turquoise text-cream rounded-[16px] border-2 border-turquoise-dark shadow-md relative overflow-hidden">
              
              {/* Background watermark badge */}
              <div className="absolute right-3 -bottom-4 text-cream/10 select-none pointer-events-none">
                <span className="font-display text-[110px] leading-none">“</span>
              </div>

              <div className="relative z-10">
                <span className="badge-stamp bg-cream/90 text-espresso font-mono mb-3">
                  TAGLINE UTAMA SEKATA
                </span>

                {/* Font Non-AI-Slop: Bold, Confident, Clean Display Heading */}
                <h3 className="font-display text-[26px] sm:text-[34px] text-cream leading-[1.08] tracking-[-0.03em] font-normal mb-3">
                  &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
                </h3>

                <p className="text-xs font-mono text-turquoise-light uppercase tracking-[0.08em] font-medium mb-6">
                  &bull; SEKATA SLOWBAR &bull; TANJUNGPINANG, KEPRI &bull; #KECILBERTUMBUH
                </p>

                {/* 3 Pillars inside the eye-catching container */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-cream/20">
                  
                  <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[8px] border border-cream/25">
                    <span className="text-[10px] font-mono font-bold text-marigold block mb-1">
                      01 / PROSES SLOWBAR
                    </span>
                    <p className="text-[12px] font-body text-cream/95 leading-snug">
                      Menyeduh perlahan dengan tangan dan ketelitian rasa, bukan serba instan.
                    </p>
                  </div>

                  <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[8px] border border-cream/25">
                    <span className="text-[10px] font-mono font-bold text-marigold block mb-1">
                      02 / TERBUKA UNTUK SEMUA
                    </span>
                    <p className="text-[12px] font-body text-cream/95 leading-snug">
                      Kopi yang ramah dan mudah dipahami, tanpa istilah rumit yang mengintimidasi.
                    </p>
                  </div>

                  <div className="bg-cream/15 backdrop-blur-sm p-3.5 rounded-[8px] border border-cream/25">
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

          {/* Right Column: Frame Foto Sesuai Gambar 5 (Caramel Macchiato dengan Stiker Tasty Coffee & Chill Vibes) */}
          <div className="lg:col-span-5">
            <div className="p-3 sm:p-4 bg-cream rounded-[16px] border-2 border-hairline shadow-md">
              
              <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden border-hairline bg-sandstone relative group">
                <img
                  src="/Caramel_macchiato.jpg"
                  alt="Tasty Coffee and Chill Vibes di Sekata Coffee Tanjungpinang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Top Badge (Sesuai Gambar 5) */}
                <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-[3px] border-hairline text-[10px] font-mono text-turquoise uppercase tracking-[0.05em] flex items-center gap-1.5 font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
                  <span>DOKUMENTASI MEJA SLOWBAR</span>
                </div>

                {/* Graphic Sticker Overlay: "Tasty Coffee and Chill Vibes" with Mascot (Sesuai Gambar 5) */}
                <div className="absolute top-10 left-3 select-none pointer-events-none">
                  <div className="bg-espresso/80 backdrop-blur-sm text-cream px-3 py-2 rounded-[8px] border border-cream/30 shadow-md rotate-[-3deg]">
                    <div className="flex items-center gap-2">
                      <div className="leading-tight">
                        <div className="font-display text-[16px] sm:text-[18px] text-cream">Tasty Coffee</div>
                        <div className="font-display text-[14px] sm:text-[16px] text-marigold">and Chill Vibes.</div>
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

              {/* Bottom Metadata Strip (Sesuai Gambar 5) */}
              <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-coffee-dust uppercase font-medium">
                <span>INTERAKSI LANGSUNG BERSAMA BARISTA</span>
                <span>BEBAS BERTANYA &amp; SHARING</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
