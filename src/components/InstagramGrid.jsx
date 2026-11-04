import React, { useState } from 'react';
import { Play, Heart, MessageCircle, ExternalLink, Camera, Sparkles, Volume2, ArrowUpRight, Share2 } from 'lucide-react';

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

  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: '✦ SEMUA MOMEN' },
    { id: 'reels', label: '🎥 REELS & ATMOSFER' },
    { id: 'slowbar', label: '☕ SLOWBAR & SEDUHAN' },
    { id: 'menu', label: '🥐 MENU & KREASI' },
  ];

  const posts = [
    {
      id: 'reel-1',
      category: 'reels',
      isReel: true,
      url: featuredReelUrl,
      image: '/konten1.jpg',
      tag: 'REEL VIRAL • 14.8K VIEWS',
      likes: '1.4K',
      comments: '86',
      caption: 'Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. Duduk santai, nikmati aroma seduhan tangan barista.',
      sound: 'Audio Asli • Sekata Slow Session'
    },
    {
      id: 'post-2',
      category: 'menu',
      isReel: false,
      url: profileUrl,
      image: '/Caramel_macchiato.jpg',
      tag: '✦ FAVORIT KAWAN',
      likes: '842',
      comments: '39',
      caption: 'Layer espresso pekat berpadu saus karamel lembut. Teman terbaik buat ngobrol santai dari siang sampai senja.',
    },
    {
      id: 'post-3',
      category: 'slowbar',
      isReel: false,
      url: profileUrl,
      image: '/partner-roasting.jpg',
      tag: '☕ ROASTING LAB',
      likes: '978',
      comments: '41',
      caption: 'Mencari titik sangrai terbaik untuk setiap biji kopi Nusantara. Dipanggang dengan cermat untuk aroma maksimal.',
    },
    {
      id: 'post-4',
      category: 'menu',
      isReel: false,
      url: profileUrl,
      image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
      tag: '🌿 ARTISAN MATCHA',
      likes: '1.3K',
      comments: '72',
      caption: 'Matcha artesanal dingin dengan susu segar pilihan. Segar, lembut, dan menenangkan di tengah kesibukan.',
    },
    {
      id: 'post-5',
      category: 'slowbar',
      isReel: false,
      url: profileUrl,
      image: '/vanillalatte.jpg',
      tag: '☕ LATTE ART HANGAT',
      likes: '1.1K',
      comments: '54',
      caption: 'Latte art hangat di cangkir keramik. Sederhana tapi selalu berhasil bikin hari terasa jauh lebih bersemangat.',
    },
    {
      id: 'post-6',
      category: 'menu',
      isReel: false,
      url: profileUrl,
      image: '/lemon tea.jpg',
      tag: '🍋 KESEGARAN SIANG',
      likes: '723',
      comments: '28',
      caption: 'Kesegaran perasan lemon segar & racikan teh wangi buat siang Tanjungpinang yang terik.',
    },
    {
      id: 'post-7',
      category: 'menu',
      isReel: false,
      url: profileUrl,
      image: '/redvelvet.jpg',
      tag: '✨ SWEET TREAT',
      likes: '889',
      comments: '47',
      caption: 'Pilihan non-kopi yang legit dan lembut. Semua orang punya ruang dan rasa di meja kami.',
    },
    {
      id: 'post-8',
      category: 'slowbar',
      isReel: false,
      url: profileUrl,
      image: '/americano.jpg',
      tag: '☕ AMERICANO BERSIH',
      likes: '694',
      comments: '33',
      caption: 'Americano bersih dengan crema tipis keemasan. Menemani baca buku dan bertukar ide segar.',
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(p => p.category === activeFilter);

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
    <section className="w-full bg-[#18100c] text-cream border-t-2 border-b-2 border-espresso pt-14 sm:pt-20 pb-0 relative overflow-hidden select-none">
      
      {/* Background Ambience: Subtle Warm Vignette & Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#ffbe76 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-burnt-orange/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Content */}
      <div className="container-max relative z-10 px-4 sm:px-8 mb-14 sm:mb-18">
        
        {/* ====================================================================
            1. INSTAGRAM PROFILE SPOTLIGHT HEADER (Modern & Energetic)
            ==================================================================== */}
        <div className="bg-[#211612]/90 border border-cream/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            
            {/* Left: Avatar with Animated IG Story Ring + Profile Details */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              
              {/* Avatar with Gradient Instagram Story Ring */}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 group"
                title="Buka Instagram @sekata.tnj"
              >
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full p-[3px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-[#18100c] p-[2.5px]">
                    <img
                      src="/logo.png"
                      alt="Sekata Coffee &amp; Slowbar"
                      className="w-full h-full object-contain rounded-full bg-cream p-1.5"
                    />
                  </div>
                </div>
                {/* Live Story Pulse Badge */}
                <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-burnt-orange text-cream font-mono text-[9px] font-bold border-2 border-[#18100c] shadow-sm uppercase">
                  LIVE
                </span>
              </a>

              {/* Bio & Handle */}
              <div className="text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-cream tracking-tight">
                    @sekata.tnj
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-turquoise/20 border border-turquoise/40 text-turquoise font-mono text-[10px] font-bold">
                    ✓ RESMI
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-cream/80 mt-1 max-w-lg leading-relaxed">
                  Sekata Coffee &amp; Slowbar &bull; Ruang komunal seduhan lambat, kawan bertumbuh, dan obrolan hangat di Tanjungpinang.
                </p>

                {/* Follower & Story Counters */}
                <div className="flex items-center gap-4 sm:gap-6 mt-3 font-mono text-xs text-cream/70 flex-wrap">
                  <div>
                    <span className="font-bold text-cream">142</span> <span className="text-cream/50 text-[11px]">POSTINGAN</span>
                  </div>
                  <div>
                    <span className="font-bold text-cream">3.8K</span> <span className="text-cream/50 text-[11px]">KAWAN SEKATA</span>
                  </div>
                  <div className="hidden xs:block">
                    <span className="text-burnt-orange font-bold">📍 KOTA LAMA, TANJUNGPINANG</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Follow CTA & Direct Message Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-burnt-orange to-[#e66738] hover:from-[#e66738] hover:to-burnt-orange text-cream font-mono text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-lg hover:shadow-burnt-orange/30 hover:scale-[1.02] active:scale-95"
              >
                <InstagramIcon className="w-4 h-4 text-cream" />
                <span>FOLLOW @SEKATA.TNJ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://ig.me/m/sekata.tnj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 text-cream font-mono text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>KIRIM DM</span>
              </a>
            </div>

          </div>

          {/* Filter Pills Bar */}
          <div className="mt-6 pt-5 border-t border-cream/15 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                    activeFilter === tab.id
                      ? 'bg-cream text-espresso shadow-md'
                      : 'bg-cream/5 text-cream/70 hover:bg-cream/15 hover:text-cream border border-cream/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-cream/50">
              <Sparkles className="w-3.5 h-3.5 text-burnt-orange" />
              <span>KLIK POSTINGAN UNTUK BUKA DI INSTAGRAM</span>
            </div>
          </div>

        </div>

        {/* ====================================================================
            2. DYNAMIC BENTO & EDITORIAL GRID (Bukan 8 Kotak Biasa yang Basic!)
            Perpaduan: Featured Reel Besar + Kartu Cerita + Kartu Komunitas
            ==================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* CARD 1: FEATURED REEL SPOTLIGHT (Spans 5 Columns on Desktop) */}
          <div className="lg:col-span-5 sm:col-span-2 relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-xl group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.8] w-full h-full min-h-[340px]">
              <img
                src={featuredReelUrl ? '/konten1.jpg' : '/konten1.jpg'}
                alt="Reel Sekata Slowbar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Top Reel Badge + Sound wave indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burnt-orange text-cream font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                  <Play className="w-3 h-3 fill-current" />
                  <span>REEL TERPOPULER</span>
                </span>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-mono text-[10px] text-cream/90">
                  <Volume2 className="w-3 h-3 text-marigold" />
                  <span className="hidden xs:inline">14.8K TAYANGAN</span>
                </div>
              </div>

              {/* Big Centered Floating Play Button */}
              <a
                href={featuredReelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center z-10 group/play focus:outline-none"
                aria-label="Tonton video Reel di Instagram"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream/90 text-espresso flex items-center justify-center shadow-2xl group-hover/play:scale-110 group-hover/play:bg-burnt-orange group-hover/play:text-cream transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
                <span className="mt-3 px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-cream font-mono text-[11px] font-bold uppercase tracking-wider opacity-90 group-hover/play:opacity-100 transition-opacity">
                  Tonton Reel di Instagram ↗
                </span>
              </a>

              {/* Bottom Caption & Audio Track */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-left pointer-events-none">
                <p className="font-body text-xs sm:text-sm text-cream/95 leading-relaxed line-clamp-2">
                  Ritme tenang dan cerita di balik meja slowbar Tanjungpinang sore ini. #KecilBertumbuh
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15 text-[11px] font-mono text-cream/70">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-burnt-orange text-burnt-orange" />
                    <span>1.4K Suka</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-cream/80" />
                    <span>86 Komentar</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2: CARAMEL MACCHIATO (3 Columns) */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-4 sm:col-span-1 group relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-md flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden">
              <img
                src="/Caramel_macchiato.jpg"
                alt="Caramel Macchiato Sekata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-marigold text-espresso font-mono text-[9px] font-bold uppercase tracking-wider shadow">
                  ✦ FAVORIT KAWAN
                </span>
              </div>
              <div className="absolute top-3 right-3 text-cream opacity-80 group-hover:opacity-100">
                <InstagramIcon className="w-4 h-4 drop-shadow" />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <p className="font-body text-xs text-cream/90 line-clamp-2 leading-relaxed">
                  Layer espresso pekat berpadu saus karamel lembut. Teman terbaik buat ngobrol santai.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream/20 font-mono text-[10px] text-cream">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 842
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> 39
                  </span>
                  <span className="text-burnt-orange font-bold">Buka ↗</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#1d130f] border-t border-cream/10 text-left flex items-center justify-between">
              <span className="font-sans font-bold text-xs text-cream">Caramel Macchiato</span>
              <span className="font-mono text-[10px] text-marigold">Rp 25.000</span>
            </div>
          </a>

          {/* CARD 3: COMMUNITY CALLOUT STENCIL CARD (3 Columns) — Menggunakan pegangkopi.png */}
          <div className="lg:col-span-3 sm:col-span-1 rounded-2xl border-2 border-dashed border-burnt-orange/50 bg-gradient-to-br from-[#261711] to-[#180f0b] p-5 flex flex-col justify-between text-left shadow-md relative overflow-hidden group">
            
            {/* Background watermark icon */}
            <div className="absolute -right-4 -bottom-4 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
              <img
                src="/pegangkopi.png"
                alt="Watermark Sekata"
                className="w-32 h-32 object-contain"
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-burnt-orange/20 border border-burnt-orange/40 text-burnt-orange font-mono text-[9px] font-bold uppercase tracking-wider">
                  KOMUNITAS SEKATA
                </span>
                <Camera className="w-4 h-4 text-burnt-orange" />
              </div>

              <h4 className="font-sans font-black text-lg text-cream leading-tight mb-2">
                Tag @sekata.tnj di Ceritamu!
              </h4>
              <p className="font-body text-xs text-cream/75 leading-relaxed">
                Setiap seduhan yang kamu abadikan punya cerita. Tag akun kami di Instagram Story untuk kesempatan direpost dan disapa barista kami!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-cream/15">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-burnt-orange hover:bg-burnt-orange/90 text-cream font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shadow"
              >
                <span>Bagikan ke Story</span>
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* CARD 4: ROASTING LAB (3 Columns) */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 sm:col-span-1 group relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-md flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="/partner-roasting.jpg"
                alt="Roasting Lab Sekata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-espresso text-cream font-mono text-[9px] font-bold uppercase tracking-wider border border-cream/20 shadow">
                  ☕ ROASTING LAB
                </span>
              </div>
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <p className="font-body text-xs text-cream/90 line-clamp-2">
                  Mencari titik sangrai terbaik untuk setiap biji kopi Nusantara.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream/20 font-mono text-[10px] text-cream">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 978</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 41</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#1d130f] border-t border-cream/10 text-left">
              <span className="font-sans font-bold text-xs text-cream block truncate">Kurasi Biji Kopi Nusantara</span>
              <span className="font-mono text-[10px] text-cream/60">House Blend &bull; Slowbar</span>
            </div>
          </a>

          {/* CARD 5: ARTISAN MATCHA (3 Columns) */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 sm:col-span-1 group relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-md flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="/Sokata_beverage_product_photography_c823fac9_2K.jpg"
                alt="Matcha Artesanal Sekata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-turquoise text-cream font-mono text-[9px] font-bold uppercase tracking-wider shadow">
                  🌿 ARTISAN MATCHA
                </span>
              </div>
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <p className="font-body text-xs text-cream/90 line-clamp-2">
                  Matcha artesanal dingin dengan susu segar. Hijau menenangkan.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream/20 font-mono text-[10px] text-cream">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 1.3K</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 72</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#1d130f] border-t border-cream/10 text-left flex items-center justify-between">
              <span className="font-sans font-bold text-xs text-cream">Iced Matcha Latte</span>
              <span className="font-mono text-[10px] text-turquoise">Rp 24.000</span>
            </div>
          </a>

          {/* CARD 6: VANILLA LATTE (3 Columns) */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 sm:col-span-1 group relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-md flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="/vanillalatte.jpg"
                alt="Vanilla Latte Sekata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-cream text-espresso font-mono text-[9px] font-bold uppercase tracking-wider shadow">
                  ☕ LATTE HANGAT
                </span>
              </div>
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <p className="font-body text-xs text-cream/90 line-clamp-2">
                  Latte art hangat di cangkir keramik. Sederhana tapi berkesan.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream/20 font-mono text-[10px] text-cream">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 1.1K</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 54</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#1d130f] border-t border-cream/10 text-left flex items-center justify-between">
              <span className="font-sans font-bold text-xs text-cream">Vanilla Latte Art</span>
              <span className="font-mono text-[10px] text-marigold">Rp 23.000</span>
            </div>
          </a>

          {/* CARD 7: LEMON TEA / REFRESHING (3 Columns) */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 sm:col-span-1 group relative rounded-2xl overflow-hidden border-2 border-espresso bg-[#211612] shadow-md flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="/lemon tea.jpg"
                alt="Lemon Tea Sekata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-marigold text-espresso font-mono text-[9px] font-bold uppercase tracking-wider shadow">
                  🍋 FRESH LEMON
                </span>
              </div>
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <p className="font-body text-xs text-cream/90 line-clamp-2">
                  Kesegaran lemon asli &amp; teh wangi buat siang Tanjungpinang.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream/20 font-mono text-[10px] text-cream">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-burnt-orange text-burnt-orange" /> 723</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 28</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#1d130f] border-t border-cream/10 text-left flex items-center justify-between">
              <span className="font-sans font-bold text-xs text-cream">Artisan Lemon Tea</span>
              <span className="font-mono text-[10px] text-turquoise">Rp 18.000</span>
            </div>
          </a>

        </div>

      </div>

      {/* ========================================================================
          3. FULL-BLEED END-TO-END TICKER RIBBON ("SAMPE KE UJUNG YAA" & IMPACTFUL)
          Menjawab permintaan user: "kekecilan dan kerasa ga guna aja buat yg lebih
          baik dan sampe ke ujung yaa"
          Membentang 100% dari ujung kiri ke ujung kanan layar tanpa terpotong!
          ======================================================================== */}
      <div className="w-full bg-[#0e0806] text-cream py-3.5 sm:py-4 border-t-2 border-b-2 border-burnt-orange/50 overflow-hidden relative z-20 shadow-2xl">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((blockIdx) => (
            <div
              key={blockIdx}
              className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 flex-shrink-0"
            >
              {marqueeTapeItems.map((text, idx) => (
                <div key={idx} className="flex items-center gap-8 sm:gap-12 flex-shrink-0">
                  {/* Retro Starburst & Coffee Glyphs */}
                  <span className="text-burnt-orange text-base sm:text-lg font-bold flex-shrink-0">
                    ✦
                  </span>
                  <span className="font-mono font-extrabold text-xs sm:text-sm md:text-[15px] tracking-[0.16em] uppercase text-cream hover:text-burnt-orange transition-colors">
                    {text}
                  </span>
                  <span className="text-marigold text-xs flex-shrink-0">
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
