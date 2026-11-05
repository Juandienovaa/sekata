import React, { useState } from 'react';
import { Droplet, Clock, Flame, Sparkles, Coffee, HeartHandshake } from 'lucide-react';

export default function SlowbarExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const methods = [
    {
      name: 'V60 Pour Over',
      subtitle: 'Karakter Bersih, Ringan & Aroma Buah Segar',
      desc: 'Air panas bersuhu 92°C dituang memutar dengan ritme tenang di atas corong keramik V60. Mengeluarkan aroma bunga, manis buah matang, dan rasa yang sangat jernih di tenggorokan.',
      ratio: 'Rasio 1:15',
      time: '3 Menit',
      character: 'Ringan, Manis, Asam Halus'
    },
    {
      name: 'Kyoto Cold Drip',
      subtitle: 'Ekstraksi Tetes Dingin 14 Jam',
      desc: 'Mengalirkan air mineral dingin setetes demi setetes melalui menara kaca selama belasan jam. Hasilnya adalah seduhan dingin kental dengan keasaman minim dan aroma buah beri yang memikat.',
      ratio: 'Rasio 1:10',
      time: '14 Jam Ekstraksi',
      character: 'Bodi Bulat, Liqueur Cokelat'
    },
    {
      name: 'Aeropress Craft',
      subtitle: 'Seduhan Tekanan Manual Bodi Mantap',
      desc: 'Metode seduh dengan ruang hampa udara dan tekanan tangan. Mengekstraksi sari pati kopi secara merata, menghasilkan kekentalan yang pas antara espresso dan pour over.',
      ratio: 'Rasio 1:12',
      time: '2 Menit',
      character: 'Bodi Sedang, Karamel Manis'
    },
    {
      name: 'Lever Espresso',
      subtitle: 'Espresso Tuas Manual Tradisional',
      desc: 'Ditarik dengan tenaga pegas manual mesin tuas Italia. Tekanan alami menghasilkan krema loreng macan (tiger crema) yang harum dan tekstur kental seperti sirup.',
      ratio: 'Rasio 1:2.0',
      time: '28 Detik',
      character: 'Pekat, Cokelat, Manis Alami'
    }
  ];

  return (
    <section id="slowbar" className="w-full py-16 sm:py-24 bg-linen border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="badge-stamp bg-turquoise text-cream">PILAR UTAMA SEKATA</span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              PENGALAMAN SLOWBAR
            </span>
          </div>
          <h2 className="font-display text-[36px] sm:text-[46px] lg:text-[50px] leading-[0.95] text-espresso tracking-[-0.05em] mb-4">
            Menikmati Kopi, Menghargai Prosesnya.
          </h2>
          <p className="font-body text-[15px] sm:text-[16px] leading-[1.65] text-coffee-dust">
            Di balik setiap cangkir, ada proses yang layak dinikmati. Dari persiapan hingga seduhan terakhir, kami mengajakmu mengenal kopi dengan cara yang lebih dekat.
          </p>
        </div>

        {/* Slowbar Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Foto Asli Meja Slowbar (Caramel_macchiato.jpg sesuai Gambar 5) */}
          <div className="lg:col-span-6 bg-cream p-3 sm:p-4 rounded-[16px] border-2 border-hairline shadow-md">
            <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden border-hairline bg-sandstone group">
              <img
                src="/Caramel_macchiato.jpg"
                alt="Dokumentasi Meja Slowbar Sekata Coffee Tanjungpinang"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Top Badge (Sesuai Gambar 5) */}
              <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-[3px] border-hairline text-[10px] font-mono text-turquoise uppercase tracking-[0.05em] flex items-center gap-1.5 font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                <span>DOKUMENTASI MEJA SLOWBAR</span>
              </div>

              {/* Graphic Sticker: "Tasty Coffee and Chill Vibes" (Sesuai Gambar 5) */}
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

            <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-coffee-dust uppercase font-medium">
              <span>INTERAKSI LANGSUNG BERSAMA BARISTA</span>
              <span>BEBAS BERTANYA &amp; SHARING</span>
            </div>
          </div>

          {/* Right: Interactive Slowbar Methods Tabs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {methods.map((method, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-xs font-mono uppercase tracking-[0.05em] px-3.5 py-2 rounded-[3px] border transition-colors ${
                    activeTab === idx
                      ? 'bg-turquoise text-cream border-turquoise'
                      : 'bg-cream text-espresso border-hairline hover:border-turquoise'
                  }`}
                >
                  {method.name}
                </button>
              ))}
            </div>

            <div className="bg-cream p-6 sm:p-8 rounded-[8px] border-hairline space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-hairline">
                <h3 className="font-display text-[26px] text-espresso">
                  {methods[activeTab].name}
                </h3>
                <span className="text-[11px] font-mono text-turquoise font-medium uppercase">
                  METODE PILIHAN
                </span>
              </div>

              <p className="text-xs font-mono font-medium text-amber uppercase tracking-[0.05em]">
                {methods[activeTab].subtitle}
              </p>

              <p className="text-[14px] font-body text-coffee-dust leading-relaxed">
                {methods[activeTab].desc}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t-hairline text-xs font-mono">
                <div>
                  <span className="text-coffee-dust block text-[10px] uppercase">PARAMETER SEDUH</span>
                  <span className="text-espresso font-medium">{methods[activeTab].ratio}</span>
                </div>
                <div>
                  <span className="text-coffee-dust block text-[10px] uppercase">WAKTU EKSTRAKSI</span>
                  <span className="text-espresso font-medium">{methods[activeTab].time}</span>
                </div>
                <div>
                  <span className="text-coffee-dust block text-[10px] uppercase">PROFIL RASA</span>
                  <span className="text-turquoise font-medium">{methods[activeTab].character}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cream rounded-[6px] border-hairline flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-turquoise flex-shrink-0" />
              <p className="text-xs font-body text-espresso">
                <strong>Barista kami siap memandu:</strong> Pemula selalu disambut hangat. Jangan ragu ceritakan rasa favoritmu pada barista kami saat duduk di slowbar.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

