import React from 'react';
import { Coffee, HeartHandshake, Sparkles, Sprout } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="filosofi" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Stamp */}
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-stamp bg-turquoise text-cream">FILOSOFI SEKATA</span>
          <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
            TANJUNGPINANG &bull; #KECILBERTUMBUH
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Philosophy Essay */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[52px] leading-[0.93] text-espresso tracking-[-0.05em] mb-6">
              Bukan Hanya Tentang Kopi.
            </h2>

            {/* Drop Cap Paragraph in Natural Bahasa Indonesia */}
            <div className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.65] text-coffee-dust">
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

            {/* Tagline Callout Box with Turquoise Accent */}
            <div className="my-8 p-6 bg-linen rounded-[6px] border-hairline border-l-4 border-l-turquoise">
              <p className="font-display text-[22px] sm:text-[26px] text-espresso italic leading-snug">
                &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
              </p>
              <p className="mt-3 text-[11px] font-mono text-turquoise uppercase tracking-[0.05em] font-medium">
                — SEKATA COFFEE &amp; SLOWBAR &bull; #KECILBERTUMBUH
              </p>
            </div>

            {/* 3 Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t-hairline">
              <div className="p-3 bg-linen rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-turquoise block mb-1">01 / PROSES SLOWBAR</span>
                <p className="text-[12px] font-body text-espresso">
                  Menyeduh perlahan dengan tangan dan ketelitian rasa, bukan serba instan.
                </p>
              </div>

              <div className="p-3 bg-linen rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-turquoise block mb-1">02 / TERBUKA UNTUK SEMUA</span>
                <p className="text-[12px] font-body text-espresso">
                  Kopi yang ramah dan mudah dipahami, tanpa istilah rumit yang mengintimidasi.
                </p>
              </div>

              <div className="p-3 bg-linen rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-turquoise block mb-1">03 / #KECILBERTUMBUH</span>
                <p className="text-[12px] font-body text-espresso">
                  Merawat langkah kecil, menyemai karya, dan bertumbuh bersama komunitas lokal.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Photo */}
          <div className="lg:col-span-5">
            <div className="p-3 sm:p-4 bg-linen rounded-[8px] border-hairline">
              <div className="w-full aspect-[4/5] rounded-[6px] overflow-hidden border-hairline bg-sandstone relative">
                <img
                  src="/Sokata_beverage_product_photography_c823fac9_2K.jpg"
                  alt="Suasana seduhan dingin di Sekata Coffee Tanjungpinang"
                  className="w-full h-full object-cover"
                />
                
                {/* Photo Caption */}
                <div className="absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm p-2.5 rounded-[3px] border-hairline">
                  <div className="flex justify-between items-center text-[10px] font-mono text-espresso uppercase tracking-[0.05em]">
                    <span>SLOWBAR TANJUNGPINANG</span>
                    <span className="text-turquoise font-medium">SETIAP SEDUHAN PUNYA CERITA</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 px-1 text-center">
                <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                  DOKUMENTASI MEJA SLOWBAR &bull; TANJUNGPINANG, KEPRI &bull; #KECILBERTUMBUH
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
