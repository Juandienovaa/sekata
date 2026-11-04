import React from 'react';
import { Armchair, Users, Compass, Music, Sun } from 'lucide-react';

export default function TheSpace() {
  return (
    <section id="ruang" className="w-full py-16 sm:py-24 bg-linen border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-turquoise text-cream">SUASANA KEDAI</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                RUANG FISIK DI TANJUNGPINANG
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.05em] mb-2">
              Ruang untuk Menikmati Waktu.
            </h2>
            <p className="text-[14px] sm:text-[15px] font-body text-coffee-dust max-w-xl">
              Datang untuk menikmati kopi, bertemu teman, atau sekadar mengambil jeda dari kesibukan. Selalu ada ruang untukmu di Sekata.
            </p>
          </div>
          <div className="text-xs font-mono text-turquoise font-medium uppercase tracking-[0.05em]">
            #KECILBERTUMBUH &bull; TANJUNGPINANG
          </div>
        </div>

        {/* Space Layout Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Main Atmosphere Image */}
          <div className="lg:col-span-7 bg-cream p-3 sm:p-4 rounded-[12px] border-hairline">
            <div className="w-full aspect-[16/10] rounded-[8px] overflow-hidden border-hairline bg-sandstone relative">
              <img
                src="/konten1.jpg"
                alt="Suasana hangat kedai Sekata Coffee & Slowbar di Tanjungpinang"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-[3px] border-hairline text-[11px] font-mono text-espresso uppercase">
                SUDUT SLOWBAR &amp; MEJA CERITA SEKATA
              </div>
            </div>
          </div>

          {/* 3 Atmosphere Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-cream p-5 rounded-[8px] border-hairline hover:border-turquoise transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-[4px] bg-linen text-turquoise border-hairline">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-display text-[20px] text-espresso">
                  Meja Bar &amp; Seduh Manual
                </h3>
              </div>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Duduk berhadapan langsung dengan barista. Tonton timbangan digital berputar, hirup aroma seduhan segar, dan tanyakan apa saja seputar kopi tanpa canggung.
              </p>
            </div>

            <div className="bg-cream p-5 rounded-[8px] border-hairline hover:border-turquoise transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-[4px] bg-linen text-turquoise border-hairline">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-display text-[20px] text-espresso">
                  Meja Temu &amp; Berbagi Cerita
                </h3>
              </div>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Ruang terbuka yang nyaman untuk berkumpul bersama sahabat, berdiskusi proyek kreatif, mengerjakan tugas, atau berbagi kabar harian.
              </p>
            </div>

            <div className="bg-cream p-5 rounded-[8px] border-hairline hover:border-turquoise transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-[4px] bg-linen text-turquoise border-hairline">
                  <Music className="w-4 h-4" />
                </div>
                <h3 className="font-display text-[20px] text-espresso">
                  Alunan Musik &amp; Jeda Tenang
                </h3>
              </div>
              <p className="text-xs font-body text-coffee-dust leading-relaxed">
                Ditemani alunan musik akustik dan jazz tenang yang menjaga obrolan tetap hangat, tanpa musik berisik yang mengganggu fokusmu.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Coffee(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6h12v2z" />
      <path d="M6 12v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6" />
      <path d="M16 8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}
