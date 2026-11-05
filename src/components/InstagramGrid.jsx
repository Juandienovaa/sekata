import React from 'react';
import { Play, Heart, MessageCircle, ExternalLink } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramGrid() {
  const featuredReelUrl = "https://www.instagram.com/reel/DfRJl9QPe13/?utm_source=ig_web_button_share_sheet&psln=MzRlODBiNWFlZA==";
  const profileUrl = "https://www.instagram.com/sekata.tnj";

  const posts = [
    {
      id: 'reel-1',
      isReel: true,
      url: featuredReelUrl,
      image: '/konten1.jpg',
      tag: 'REEL SLOWBAR',
      likes: '1.4K',
      comments: '86',
      caption: 'Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. #KecilBertumbuh',
    },
    {
      id: 'post-2',
      isReel: false,
      url: profileUrl,
      image: '/Caramel_macchiato.jpg',
      tag: 'FAVORIT KAWAN',
      likes: '842',
      comments: '39',
      caption: 'Layer espresso pekat berpadu saus karamel lembut. Teman terbaik buat ngobrol santai.',
    },
    {
      id: 'post-3',
      isReel: false,
      url: profileUrl,
      image: '/partner-roasting.jpg',
      tag: 'ROASTING LAB',
      likes: '978',
      comments: '41',
      caption: 'Mencari titik sangrai terbaik untuk setiap biji kopi Nusantara.',
    },
    {
      id: 'post-4',
      isReel: false,
      url: profileUrl,
      image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
      tag: 'ARTISAN MATCHA',
      likes: '1.3K',
      comments: '72',
      caption: 'Matcha artesanal dingin dengan susu segar. Hijau menenangkan di tengah kesibukan.',
    },
    {
      id: 'post-5',
      isReel: false,
      url: profileUrl,
      image: '/vanillalatte.jpg',
      tag: 'LATTE ART',
      likes: '1.1K',
      comments: '54',
      caption: 'Latte art hangat di cangkir keramik. Sederhana tapi selalu bikin hari lebih baik.',
    },
    {
      id: 'post-6',
      isReel: false,
      url: profileUrl,
      image: '/lemon%20tea.jpg',
      tag: 'SEGAR SIANG',
      likes: '723',
      comments: '28',
      caption: 'Kesegaran lemon segar & racikan teh wangi buat siang Tanjungpinang yang terik.',
    },
    {
      id: 'post-7',
      isReel: false,
      url: profileUrl,
      image: '/redvelvet.jpg',
      tag: 'SWEET TREAT',
      likes: '889',
      comments: '47',
      caption: 'Pilihan non-kopi yang legit dan lembut. Semua orang punya ruang di meja kami.',
    },
    {
      id: 'post-8',
      isReel: false,
      url: profileUrl,
      image: '/americano.jpg',
      tag: 'AMERICANO',
      likes: '694',
      comments: '33',
      caption: 'Americano bersih dengan crema tipis keemasan. Menemani baca buku dan bertukar ide.',
    }
  ];

  const marqueeTapeItems = [
    'MARI BERTEMU & BERCERITA TENTANG KEHIDUPAN',
    'SLOWBAR TANJUNGPINANG • KEPRI',
    'FOLLOW @SEKATA.TNJ DI INSTAGRAM',
    'SETIAP SEDUHAN PUNYA CERITA',
    '#KECILBERTUMBUH',
    'TAG KAMI DI SETIAP CANGKIRMU',
    'SANGRAI LOKAL & SEDUHAN JUJUR',
    'TEMPAT BERTEMU SAHABAT LAMA & KAWAN BARU'
  ];

  return (
    <section className="w-full bg-burnt-orange text-cream border-t-2 border-b-2 border-espresso pt-12 sm:pt-16 pb-0 relative overflow-hidden select-none">
      
      {/* Background Ambience: Halftone Dots Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#fff9f2 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-max relative z-10 px-4 sm:px-8 mb-10 sm:mb-14">
        
        {/* ====================================================================
            1. TOP HEADER: MASCOT STICKER + SPEECH BUBBLE (LITTLE AMPS STYLE)
            Autentik, ramah, manusiawi, tanpa AI-slop!
            ==================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-10">
          
          {/* Mascot sticker & speech bubble */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream border-2 border-espresso flex items-center justify-center shadow-md rotate-[-4deg] flex-shrink-0 group hover:rotate-0 transition-transform">
              <img
                src="/logo.png"
                alt="Maskot Sekata"
                className="w-12 sm:w-14 h-auto object-contain"
              />
            </div>

            <div className="relative bg-cream text-espresso px-4 py-2 sm:px-5 sm:py-2.5 rounded-[18px] border-2 border-espresso shadow-md rotate-[2deg]">
              {/* Bubble pointer triangle */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[10px] border-r-espresso" />
              <div className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-cream" />
              
              <div className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] leading-tight text-burnt-orange">
                DOKUMENTASI KEDAI &bull; @SEKATA.TNJ
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-espresso uppercase tracking-[0.05em] font-medium">
                TANGKAPAN LENSA KESEHARIAN SLOWBAR
              </div>
            </div>
          </div>

          {/* Right Action: Direct Link Button */}
          <div className="flex items-center gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled text-xs py-2.5 px-5 bg-cream text-espresso border-2 border-espresso hover:bg-espresso hover:text-cream tracking-[0.05em] inline-flex items-center gap-2 shadow-sm font-bold rounded-full transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4 text-burnt-orange" />
              <span>IKUTI DI INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

        </div>

        {/* ====================================================================
            2. EDITORIAL PHOTO GRID (Dinamis, Berkarakter, Ga Monoton/Basic)
            Kombinasi Hero Reel Spotlight + Kartu Foto Bertekstur
            ==================================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: Featured Reel (Spans 2 columns on tablet & desktop) */}
          <a
            href={featuredReelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 group relative rounded-[14px] overflow-hidden border-2 border-espresso bg-[#18100c] shadow-md hover:shadow-xl transition-all duration-300 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between"
          >
            <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px]">
              <img
                src="/konten1.jpg"
                alt="Reel Meja Slowbar Sekata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Reel Tag Top Left */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-burnt-orange text-cream font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-espresso shadow-md">
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>REEL TERPOPULER</span>
              </div>

              {/* Instagram Icon Top Right */}
              <div className="absolute top-3 right-3 z-10 text-cream/90 group-hover:text-cream drop-shadow">
                <InstagramIcon className="w-4 h-4" />
              </div>

              {/* Center Play Button on Hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cream/90 text-espresso flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-burnt-orange group-hover:text-cream transition-all duration-300">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Caption & Stats */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                <p className="font-body text-xs sm:text-sm text-cream/95 leading-snug line-clamp-2">
                  Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. #KecilBertumbuh
                </p>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/20 font-mono text-[10px] text-cream/80">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 1.4K Suka
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> 86 Komentar
                  </span>
                  <span className="text-marigold font-bold">Tonton Reel ↗</span>
                </div>
              </div>

            </div>
          </a>

          {/* Cards 2-8: Variasi Foto Minuman & Suasana Meja */}
          {posts.slice(1).map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[14px] overflow-hidden border-2 border-espresso bg-[#18100c] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Corner Tag */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="px-2 py-0.5 rounded-full bg-cream/90 text-espresso font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider shadow border border-espresso/20">
                  {post.tag}
                </span>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2.5 right-2.5 z-10 text-cream opacity-80 group-hover:opacity-100 drop-shadow">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>

              {/* Hover Dark Overlay with Caption & Stats */}
              <div className="absolute inset-0 bg-espresso/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-left z-20">
                <p className="font-body text-[11px] leading-tight text-cream/95 line-clamp-2">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] font-mono border-t border-cream/20 pt-1.5 mt-2 text-cream/90">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </span>
                  <span className="text-marigold font-bold">Buka ↗</span>
                </div>
              </div>
            </a>
          ))}

        </div>

      </div>

      {/* ========================================================================
          3. FULL-BLEED END-TO-END TICKER RIBBON ("SAMPE KE UJUNG YAA")
          Membentang 100% penuh dari ujung kiri ke ujung kanan layar tanpa jeda!
          ======================================================================== */}
      <div className="w-full bg-[#140c09] text-cream py-3 sm:py-3.5 border-t-2 border-b-2 border-espresso overflow-hidden relative z-20 shadow-xl">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((blockIdx) => (
            <div
              key={blockIdx}
              className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 flex-shrink-0"
            >
              {marqueeTapeItems.map((text, idx) => (
                <div key={idx} className="flex items-center gap-8 sm:gap-12 flex-shrink-0">
                  <span className="text-burnt-orange text-base sm:text-lg font-bold flex-shrink-0 select-none">
                    ✦
                  </span>
                  <span className="font-mono font-extrabold text-xs sm:text-sm tracking-[0.14em] uppercase text-cream hover:text-burnt-orange transition-colors">
                    {text}
                  </span>
                  <span className="text-marigold text-xs flex-shrink-0 select-none">
                    ★
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
