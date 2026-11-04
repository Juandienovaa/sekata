import React from 'react';
import { Sprout, Sparkles, Heart, Users, Coffee, MessageCircle } from 'lucide-react';
import CommunityCrowdIllustration from './CommunityCrowdIllustration';

export default function KecilBertumbuh() {
  return (
    <section className="w-full py-16 sm:py-24 bg-linen border-b-hairline relative overflow-hidden">
      
      {/* Background Decorative Stamp */}
      <div className="absolute left-6 top-12 opacity-5 pointer-events-none hidden md:block select-none">
        <span className="font-display text-[140px] text-espresso leading-none">
          #KB
        </span>
      </div>

      <div className="container-max relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="badge-stamp bg-turquoise text-cream font-mono shadow-sm">
              #KECILBERTUMBUH
            </span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em]">
              FILOSOFI GERAKAN KAMI
            </span>
          </div>

          <h2 className="font-display text-[38px] sm:text-[50px] lg:text-[56px] leading-[0.95] text-espresso tracking-[-0.05em]">
            Kecil Bertumbuh, Bersama Menjadi Berarti.
          </h2>

          <p className="font-body text-[15px] sm:text-[17px] leading-[1.7] text-coffee-dust max-w-2xl mx-auto">
            Setiap perjalanan bermakna dimulai dari hal kecil: satu cangkir, satu sapaan hangat di meja slowbar, dan satu cerita yang saling menguatkan.
          </p>
        </div>

        {/* 3 Core Value Cards with Tactile Analog Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="relative bg-cream p-7 rounded-[10px] border-hairline shadow-sm hover:border-turquoise transition-all duration-300 group">
            {/* Washi Tape Corner */}
            <div className="absolute -top-2 left-6 w-12 h-3.5 bg-[#e6dad4]/80 rotate-[-3deg] border border-taupe-hairline/60 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 pt-1">
              <span className="text-[11px] font-mono font-bold text-turquoise tracking-[0.1em] px-2 py-0.5 rounded bg-turquoise-light">
                01 / LANGKAH
              </span>
              <Coffee className="w-4 h-4 text-coffee-dust group-hover:text-turquoise transition-colors" />
            </div>

            <h3 className="font-display text-[22px] text-espresso mb-2.5 leading-snug">
              Dari Satu Cangkir
            </h3>
            
            <p className="text-[13px] font-body text-coffee-dust leading-relaxed">
              Kami memulai dari kedai sederhana di sudut Tanjungpinang. Belajar menyeduh dengan kejujuran rasa, menyapa setiap orang yang datang bukan sekadar sebagai pelanggan, tapi sebagai kawan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-cream p-7 rounded-[10px] border-hairline shadow-sm hover:border-turquoise transition-all duration-300 group">
            {/* Washi Tape Corner */}
            <div className="absolute -top-2 left-6 w-12 h-3.5 bg-[#febf6f]/40 rotate-[2deg] border border-[#febf6f]/60 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 pt-1">
              <span className="text-[11px] font-mono font-bold text-burnt-orange tracking-[0.1em] px-2 py-0.5 rounded bg-burnt-orange/10">
                02 / PERTEMUAN
              </span>
              <MessageCircle className="w-4 h-4 text-coffee-dust group-hover:text-burnt-orange transition-colors" />
            </div>

            <h3 className="font-display text-[22px] text-espresso mb-2.5 leading-snug">
              Saling Bertukar Cerita
            </h3>
            
            <p className="text-[13px] font-body text-coffee-dust leading-relaxed">
              Kopi adalah jembatan obrolan. Kami menyediakan kursi di meja slowbar agar kamu bisa meluangkan waktu sejenak, mendengarkan, bertukar keresahan, dan merayakan hari bersama.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-cream p-7 rounded-[10px] border-hairline shadow-sm hover:border-turquoise transition-all duration-300 group">
            {/* Washi Tape Corner */}
            <div className="absolute -top-2 left-6 w-12 h-3.5 bg-[#89b4ca]/40 rotate-[-2deg] border border-[#89b4ca]/60 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 pt-1">
              <span className="text-[11px] font-mono font-bold text-dusty-blue tracking-[0.1em] px-2 py-0.5 rounded bg-dusty-blue/15">
                03 / KOLABORASI
              </span>
              <Users className="w-4 h-4 text-coffee-dust group-hover:text-dusty-blue transition-colors" />
            </div>

            <h3 className="font-display text-[22px] text-espresso mb-2.5 leading-snug">
              Untuk Tanjungpinang
            </h3>
            
            <p className="text-[13px] font-body text-coffee-dust leading-relaxed">
              Kami ingin terus bertumbuh bersama komunitas lokal, kreator muda, musisi indie, dan penikmat kopi di Kepulauan Riau. Ruang ini terbuka luas untuk siapapun yang berkarya.
            </p>
          </div>

        </div>

        {/* CROWD CARICATURE ILLUSTRATION BANNER (Inspired by Reference Image 2: "Thank You Crowd") */}
        <div className="pt-4 pb-8">
          <CommunityCrowdIllustration />
        </div>

        {/* Bottom Tagline Quote */}
        <div className="text-center pt-4">
          <div className="inline-block p-4 sm:p-5 rounded-[12px] bg-cream border-hairline shadow-sm">
            <p className="font-display text-[22px] sm:text-[28px] text-espresso italic tracking-[-0.03em]">
              &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
            </p>
            <p className="mt-1 text-[11px] font-mono text-turquoise uppercase tracking-[0.08em] font-medium">
              &bull; SEKATA SLOWBAR &bull; TANJUNGPINANG, KEPRI &bull;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
