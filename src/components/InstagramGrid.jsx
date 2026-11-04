import React from 'react';
import { Play, Heart, MessageCircle, ExternalLink, Film } from 'lucide-react';

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
      likes: '1.4K',
      comments: '86',
      caption: 'Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. #KecilBertumbuh',
    },
    {
      id: 'post-2',
      isReel: false,
      url: profileUrl,
      image: '/Caramel_macchiato.jpg',
      likes: '842',
      comments: '39',
      caption: 'Layer espresso pekat berpadu saus karamel lembut. Teman terbaik buat ngobrol santai.',
    },
    {
      id: 'post-3',
      isReel: false,
      url: profileUrl,
      image: '/vanillalatte.jpg',
      likes: '1.1K',
      comments: '54',
      caption: 'Latte art hangat di cangkir keramik. Sederhana tapi selalu bikin hari terasa lebih baik.',
    },
    {
      id: 'post-4',
      isReel: false,
      url: profileUrl,
      image: '/partner-roasting.jpg',
      likes: '978',
      comments: '41',
      caption: 'Mencari titik sangrai terbaik untuk setiap biji kopi Nusantara.',
    },
    {
      id: 'post-5',
      isReel: false,
      url: profileUrl,
      image: '/lemon tea.jpg',
      likes: '723',
      comments: '28',
      caption: 'Kesegaran lemon segar & teh pilihan buat siang Tanjungpinang yang terik.',
    },
    {
      id: 'post-6',
      isReel: false,
      url: profileUrl,
      image: '/redvelvet.jpg',
      likes: '889',
      comments: '47',
      caption: 'Pilihan non-kopi yang legit dan lembut. Semua orang punya tempat di meja kami.',
    },
    {
      id: 'post-7',
      isReel: false,
      url: profileUrl,
      image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
      likes: '1.3K',
      comments: '72',
      caption: 'Matcha artesanal dingin dengan susu segar. Hijau menenangkan di tengah kesibukan.',
    },
    {
      id: 'post-8',
      isReel: false,
      url: profileUrl,
      image: '/americano.jpg',
      likes: '694',
      comments: '33',
      caption: 'Americano bersih dengan crema tipis. Menemani baca buku dan bertukar ide.',
    }
  ];

  return (
    <section className="w-full bg-burnt-orange text-cream border-t-2 border-b-2 border-espresso py-12 sm:py-16 relative overflow-hidden">
      
      {/* Subtle halftone background dots pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#fff9f2 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-max relative z-10">
        
        {/* Top Header Row matching Little Amps Screenshot 2 */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 sm:mb-10">
          
          {/* Left Mascot Sticker & Speech Bubble */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Hand-drawn Mascot Coffee Cup with Steam */}
            <div className="relative flex-shrink-0 group cursor-pointer" title="Sekata Instagram">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream border-2 border-espresso flex items-center justify-center shadow-md rotate-[-4deg] group-hover:rotate-0 transition-transform">
                <img
                  src="/logo.png"
                  alt="Maskot Sekata"
                  className="w-12 sm:w-14 h-auto object-contain"
                />
              </div>
            </div>

            {/* Hand-drawn Speech Bubble (Matching Screenshot 2: "FOLLOW US ON THE 'GRAM") */}
            <div className="relative bg-cream text-espresso px-4 py-2 sm:px-5 sm:py-2.5 rounded-[18px] border-2 border-espresso shadow-md rotate-[2deg]">
              {/* Bubble pointer triangle */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[10px] border-r-espresso" />
              <div className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-cream" />
              
              <div className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] leading-tight text-burnt-orange">
                FOLLOW US ON THE &lsquo;GRAM
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-espresso uppercase tracking-[0.05em] font-medium">
                @SEKATA.TNJ &bull; SLOWBAR &amp; COFFEE
              </div>
            </div>

          </div>

          {/* Right Action: Direct Link Button to Instagram Profile */}
          <div className="flex items-center gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled text-xs py-2.5 px-5 bg-cream text-espresso border-espresso hover:bg-espresso hover:text-cream tracking-[0.05em] inline-flex items-center gap-2 shadow-sm font-bold"
            >
              <InstagramIcon className="w-4 h-4 text-burnt-orange" />
              <span>IKUTI DI INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

        </div>

        {/* Continuous Horizontal Strip of Instagram Photos (Matching Screenshot 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
          
          {posts.map((post, idx) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[8px] overflow-hidden border-2 border-espresso bg-sandstone block shadow-sm hover:scale-[1.04] hover:z-20 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Reel Play Badge on Post 1 */}
              {post.isReel && (
                <div className="absolute top-2 left-2 z-10 bg-burnt-orange text-cream p-1 rounded-[3px] border border-espresso shadow-sm">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              )}

              {/* Instagram Icon Badge */}
              <div className="absolute top-2 right-2 z-10 text-cream opacity-80 group-hover:opacity-100 drop-shadow">
                <InstagramIcon className="w-3 h-3" />
              </div>

              {/* Hover Dark Overlay with Stats */}
              <div className="absolute inset-0 bg-espresso/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2.5 text-cream text-[11px] font-mono z-20">
                <span className="text-[9px] uppercase text-marigold truncate">
                  {post.isReel ? 'REEL' : 'POST'}
                </span>

                <p className="font-body text-[10px] leading-tight text-cream/90 line-clamp-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] border-t border-cream/20 pt-1 text-cream/90">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-burnt-orange" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}

        </div>

        {/* Bottom Marquee Tape Ribbon */}
        <div className="mt-8 bg-espresso/80 text-cream rounded-[6px] border border-cream/30 py-2.5 px-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] uppercase tracking-[0.08em] font-medium gap-8">
            <span className="text-marigold">&bull; MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN</span>
            <span>&bull; @SEKATA.TNJ</span>
            <span className="text-turquoise-light">&bull; SLOWBAR TANJUNGPINANG</span>
            <span>&bull; SETIAP SEDUHAN PUNYA CERITA</span>
            <span className="text-marigold">&bull; #KECILBERTUMBUH</span>
            <span>&bull; TAG KAMI DI SETIAP CANGKIRMU</span>
            <span className="text-marigold">&bull; MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN</span>
            <span>&bull; @SEKATA.TNJ</span>
          </div>
        </div>

      </div>
    </section>
  );
}
