import React from 'react';
import { Sprout, Sparkles, Heart, Users } from 'lucide-react';

export default function KecilBertumbuh() {
  return (
    <section className="w-full py-16 sm:py-24 bg-linen border-b-hairline">
      <div className="container-max">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="badge-stamp bg-turquoise text-cream">#KECILBERTUMBUH</span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              GERAKAN &amp; SEMANGAT SEKATA
            </span>
          </div>

          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[54px] leading-[0.95] text-espresso tracking-[-0.05em]">
            Kecil Bertumbuh, Bersama Menjadi Berarti.
          </h2>

          <p className="font-body text-[15px] sm:text-[17px] leading-[1.7] text-coffee-dust max-w-2xl mx-auto">
            Setiap perjalanan dimulai dari hal kecil. Satu cangkir, satu pertemuan, satu cerita. Kami percaya setiap momen punya arti dalam perjalanan untuk terus bertumbuh.
          </p>

          {/* 3 Core Values of #KecilBertumbuh */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            
            <div className="bg-cream p-6 rounded-[8px] border-hairline">
              <span className="text-xs font-mono font-bold text-turquoise block mb-2">
                01 / LANGKAH SEDERHANA
              </span>
              <h3 className="font-display text-[20px] text-espresso mb-2">
                Dari Satu Cangkir
              </h3>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Kami memulai dari kedai sederhana di Tanjungpinang, belajar menyeduh dengan jujur dan menyapa setiap pengunjung sebagai kawan.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-[8px] border-hairline">
              <span className="text-xs font-mono font-bold text-turquoise block mb-2">
                02 / PERTEMUAN BERMAKNA
              </span>
              <h3 className="font-display text-[20px] text-espresso">
                Saling Bertukar Cerita
              </h3>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Bukan cuma duduk sendirian di depan layar. Kami menyediakan ruang untuk saling mendengarkan, bertukar pikiran, dan berbagi cerita hidup.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-[8px] border-hairline">
              <span className="text-xs font-mono font-bold text-turquoise block mb-2">
                03 / TUMBUH BERSAMA
              </span>
              <h3 className="font-display text-[20px] text-espresso">
                Untuk Tanjungpinang
              </h3>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Mendukung kreator lokal, komunitas muda, dan budaya apresiasi kopi yang ramah di Kepulauan Riau.
              </p>
            </div>

          </div>

          <div className="pt-6">
            <p className="font-display text-[20px] sm:text-[24px] text-espresso italic">
              &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

