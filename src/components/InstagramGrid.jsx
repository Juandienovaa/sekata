import React from 'react';
import { Play, Heart, MessageCircle, ExternalLink, Sparkles, Film } from 'lucide-react';

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
      videoUrl: '/herosection.mp4',
      likes: '1.4K',
      comments: '86',
      caption: 'Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. #KecilBertumbuh',
      date: 'Terbaru',
      badge: 'REEL POPULER'
    },
    {
      id: 'post-2',
      isReel: false,
      url: profileUrl,
      image: '/Caramel_macchiato.jpg',
      likes: '842',
      comments: '39',
      caption: 'Layer espresso pekat berpadu saus karamel lembut. Teman terbaik buat ngobrol santai.',
      date: '2 hari lalu'
    },
    {
      id: 'post-3',
      isReel: false,
      url: profileUrl,
      image: '/vanillalatte.jpg',
      likes: '1.1K',
      comments: '54',
      caption: 'Latte art hangat di cangkir keramik. Sederhana, tapi selalu bikin hari terasa lebih baik.',
      date: '4 hari lalu'
    },
    {
      id: 'post-4',
      isReel: false,
      url: profileUrl,
      image: '/partner-roasting.jpg',
      likes: '978',
      comments: '41',
      caption: 'Mencari titik sangrai terbaik. Karena setiap biji kopi Nusantara punya karakter uniknya.',
      date: '6 hari lalu'
    },
    {
      id: 'post-5',
      isReel: false,
      url: profileUrl,
      image: '/lemon tea.jpg',
      likes: '723',
      comments: '28',
      caption: 'Kesegaran perasan lemon segar & teh pilihan buat siang Tanjungpinang yang terik.',
      date: '1 minggu lalu'
    },
    {
      id: 'post-6',
      isReel: false,
      url: profileUrl,
      image: '/redvelvet.jpg',
      likes: '889',
      comments: '47',
      caption: 'Pilihan non-kopi yang legit dan lembut. Semua orang selalu punya tempat di meja kami.',
      date: '1 minggu lalu'
    },
    {
      id: 'post-7',
      isReel: false,
      url: profileUrl,
      image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
      likes: '1.3K',
      comments: '72',
      caption: 'Matcha artesanal dingin dengan susu segar. Hijau menenangkan di tengah kesibukan.',
      date: '2 minggu lalu'
    },
    {
      id: 'post-8',
      isReel: false,
      url: profileUrl,
      image: '/americano.jpg',
      likes: '694',
      comments: '33',
      caption: 'Americano bersih dengan crema tipis. Menemani baca buku dan bertukar ide.',
      date: '2 minggu lalu'
    }
  ];

  return (
    <section className="w-full bg-cream border-t-hairline border-b-hairline py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background Subtle Stamp Accent */}
      <div className="absolute right-4 top-8 pointer-events-none opacity-5 hidden lg:block select-none">
        <span className="font-display text-[160px] text-espresso leading-none">
          @sekata
        </span>
      </div>

      <div className="container-max relative z-10">
        
        {/* Section Header: Instagram Profile Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-[#c13584] text-cream flex items-center gap-1">
                <InstagramIcon className="w-3 h-3" />
                <span>INSTAGRAM FEED</span>
              </span>
              <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                DARI MEJA SLOWBAR TANJUNGPINANG
              </span>
            </div>

            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.05em] mb-3">
              Kabar &amp; Momen di <span className="text-turquoise">@sekata.tnj</span>
            </h2>

            <p className="font-body text-[14px] sm:text-[15px] leading-relaxed text-coffee-dust max-w-xl">
              Intip suasana seduhan harian, rilisan biji kopi musiman, proses di balik meja slowbar, dan obrolan hangat kawan-kawan kami.
            </p>
          </div>

          {/* Follow Instagram Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled text-xs py-3 px-6 bg-espresso border-espresso hover:bg-turquoise hover:border-turquoise tracking-[0.05em] inline-flex items-center gap-2 group transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-cream group-hover:scale-110 transition-transform" />
              <span>IKUTI DI INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-cream/70" />
            </a>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          
          {/* Post 1: FEATURED REEL (Double Size / Highlighted) */}
          <div className="col-span-2 row-span-2 group relative rounded-[12px] overflow-hidden border-2 border-turquoise bg-espresso shadow-md flex flex-col justify-between">
            {/* Background Image / Video Poster */}
            <div className="absolute inset-0 z-0">
              <img
                src={posts[0].image}
                alt="Cuplikan Reel Instagram Sekata Coffee"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-black/30" />
            </div>

            {/* Reel Badge & Audio Tag */}
            <div className="relative z-10 p-4 sm:p-6 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="badge-stamp bg-turquoise text-cream font-mono flex items-center gap-1.5 shadow-sm">
                  <Film className="w-3 h-3" />
                  <span>REEL UNGGULAN</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-[3px] bg-black/40 backdrop-blur-sm text-[10px] font-mono text-cream uppercase tracking-[0.05em]">
                  ♫ Audio Asli &bull; Sekata
                </span>
              </div>

              {/* Big Play Button */}
              <a
                href={posts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream/90 backdrop-blur-md text-espresso flex items-center justify-center hover:scale-110 hover:bg-turquoise hover:text-cream transition-all shadow-lg"
                title="Tonton Reel di Instagram"
              >
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </a>
            </div>

            {/* Reel Caption & Action Footer */}
            <div className="relative z-10 p-5 sm:p-7 mt-auto space-y-3">
              <p className="font-body text-[14px] sm:text-[16px] text-cream leading-snug font-medium line-clamp-3">
                &ldquo;{posts[0].caption}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-cream/20 text-xs font-mono text-cream/90">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-burnt-orange fill-burnt-orange" />
                    <span>{posts[0].likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-cream" />
                    <span>{posts[0].comments}</span>
                  </span>
                </div>

                <a
                  href={posts[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-turquoise-light hover:text-white font-mono text-xs uppercase tracking-[0.05em] font-medium underline underline-offset-4"
                >
                  <span>TONTON REEL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Remaining 7 Grid Tiles */}
          {posts.slice(1).map((post, idx) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[8px] sm:rounded-[10px] overflow-hidden border-hairline bg-sandstone block transition-all duration-300 hover:border-turquoise hover:shadow-sm"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Instagram Icon Badge */}
              <div className="absolute top-2.5 right-2.5 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-6 rounded-full bg-cream/80 backdrop-blur-sm text-espresso flex items-center justify-center">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Tape Effect on Every Alternate Post to break AI sterility */}
              {idx % 2 === 0 && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#e6dad4]/70 rotate-[-2deg] border border-taupe-hairline/50 pointer-events-none z-10" />
              )}

              {/* Hover Dark Overlay with Stats & Caption */}
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 sm:p-4 text-cream z-20">
                <span className="text-[10px] font-mono text-turquoise-light uppercase">
                  {post.date}
                </span>

                <p className="text-[11px] sm:text-xs font-body text-cream/90 line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono border-t border-cream/20 pt-2 text-cream/90">
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

        {/* Tactile Marquee Ribbon right below the grid */}
        <div className="mt-12 bg-linen rounded-[8px] border-hairline py-3 px-4 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee font-mono text-xs text-espresso font-medium tracking-[0.08em] gap-8">
            <span>&bull; MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN</span>
            <span className="text-turquoise">&bull; SLOWBAR TANJUNGPINANG</span>
            <span>&bull; TAG @SEKATA.TNJ DI INSTAGRAM</span>
            <span className="text-burnt-orange">&bull; #KECILBERTUMBUH</span>
            <span>&bull; SETIAP SEDUHAN PUNYA CERITA</span>
            <span className="text-amber">&bull; TANJUNGPINANG &bull; KEPULAUAN RIAU</span>
            <span>&bull; MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN</span>
            <span className="text-turquoise">&bull; SLOWBAR TANJUNGPINANG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
