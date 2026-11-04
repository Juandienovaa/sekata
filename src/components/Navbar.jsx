import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, ArrowUpRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';

// Custom inline SVG for Instagram
function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Menu items with massive editorial typography & preview assets
const NAV_EDITORIAL_ITEMS = [
  {
    number: '01',
    title: 'PILIHAN MENU',
    english: 'MENU & BEVERAGES',
    category: 'KATALOG RASA',
    subtitle: 'Kopi Susu Aren, Klasik Manual, Mocktail Soda & Cemilan',
    href: '#menu',
    image: '/Caramel_macchiato.jpg',
    tag: '30+ VARIAN MENU'
  },
  {
    number: '02',
    title: 'GRAND OPENING',
    english: 'COUNTDOWN JUMAT INI',
    category: 'SPECIAL EVENT',
    subtitle: 'Jumat Ini, 6 Nov 2026 • Free 50 Cups Pertama untuk Kawan Sekata',
    href: '#countdown',
    image: '/konten1.jpg',
    tag: 'FREE 50 CUPS'
  },
  {
    number: '03',
    title: 'SLOWBAR & RUANG',
    english: 'THE SLOWBAR SPACE',
    category: 'SUASANA',
    subtitle: 'Meja Seduh Manual, Putaran Piringan Hitam, dan Jeda Tenang',
    href: '#ruang',
    image: '/subscription_bg.jpg',
    tag: 'ANALOG VIBES'
  },
  {
    number: '04',
    title: 'FILOSOFI KAMI',
    english: 'OUR PHILOSOPHY',
    category: 'GERAKAN',
    subtitle: '#KecilBertumbuh — Bukan Hanya Sekadar Tentang Kopi',
    href: '#filosofi',
    image: '/ilustrasi1.jpg',
    tag: '#KECILBERTUMBUH'
  },
  {
    number: '05',
    title: 'CERITA KAWAN',
    english: 'COMMUNITY STORIES',
    category: 'KOMUNITAS',
    subtitle: 'Setiap Pertemuan Punya Cerita Hangat untuk Dibagi',
    href: '#cerita',
    image: '/subscription_farm.jpg',
    tag: 'KOLABORASI LOKAL'
  },
  {
    number: '06',
    title: 'LOKASI KEDAI',
    english: 'VISIT OUR COFFEE BAR',
    category: 'KUNJUNGI',
    subtitle: 'Tanjungpinang, Kepri • Buka Setiap Hari: 09.00 - 23.00 WIB',
    href: '#lokasi',
    image: '/americano.jpg',
    tag: 'TANJUNGPINANG, KEPRI'
  }
];

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle hairline appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Smooth scroll handler
  const handleNavigate = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
    }, 350);
  };

  // Active preview image
  const activeItem = hoveredIndex !== null ? NAV_EDITORIAL_ITEMS[hoveredIndex] : NAV_EDITORIAL_ITEMS[0];

  return (
    <>
      {/* 
        ========================================================================
        1. ALWAYS VISIBLE NAVBAR (Transparent at Hero, Glassmorphism on Scroll)
        Sesuai request: Transparan saat di Hero / bagian atas, tanpa background cream
        ========================================================================
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-espresso/15 shadow-[0_4px_20px_rgba(82,44,37,0.06)] py-0'
            : 'bg-transparent border-b border-transparent py-1 sm:py-2'
        }`}
      >
        <div className="container-max h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8">
          
          {/* LEFT: SEKATA LOGO ONLY */}
          <a
            href="#"
            className="flex items-center group focus:outline-none"
            aria-label="Sekata Coffee &amp; Slowbar — Halaman Utama"
          >
            <img
              src="/logo.png"
              alt="Sekata Coffee &amp; Slowbar"
              className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                !scrolled ? 'filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]' : ''
              }`}
            />
          </a>

          {/* RIGHT: PESANAN + MENU BUTTON */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Cart / Orders Pill */}
            <button
              onClick={onOpenCart}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] font-medium transition-all duration-200 focus:outline-none ${
                scrolled
                  ? 'border border-espresso/25 hover:border-turquoise text-espresso hover:text-turquoise bg-cream hover:bg-turquoise/5'
                  : 'bg-black/35 backdrop-blur-md border border-white/30 text-cream hover:bg-black/50 hover:border-white/50 shadow-md'
              }`}
              aria-label={`Buka Keranjang Pesanan (${cartCount} item)`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-turquoise" />
              <span className="hidden sm:inline">PESANAN</span>
              <span className="w-5 h-5 rounded-full bg-turquoise text-cream text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>

            {/* MINIMAL MENU TRIGGER BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`group relative flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold transition-all duration-300 active:scale-95 focus:outline-none ${
                scrolled
                  ? 'bg-espresso text-cream hover:bg-burnt-orange shadow-md'
                  : 'bg-cream text-espresso hover:bg-burnt-orange hover:text-cream shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
              }`}
              aria-label="Buka Menu Navigasi Fullscreen"
            >
              <span>MENU</span>
              <span className="flex flex-col gap-[3.5px] w-4 justify-center items-end">
                <span className={`w-4 h-[1.5px] transition-all duration-200 ${
                  scrolled ? 'bg-cream group-hover:w-4' : 'bg-espresso group-hover:bg-cream group-hover:w-4'
                }`} />
                <span className={`w-2.5 h-[1.5px] transition-all duration-200 ${
                  scrolled ? 'bg-cream group-hover:w-4' : 'bg-espresso group-hover:bg-cream group-hover:w-4'
                }`} />
              </span>
            </button>

          </div>

        </div>
      </header>

      {/* 
        ========================================================================
        2. FULLSCREEN EDITORIAL NAVIGATION MENU (PROPORTIONED TO FIT 100VH)
        Sesuai request: Ukuran disesuaikan agar pas 1 layar desktop tanpa terpotong
        ========================================================================
      */}
      <div
        className="fixed inset-0 z-50 transition-all duration-600 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          clipPath: isMenuOpen
            ? 'circle(150% at calc(100% - 48px) 40px)'
            : 'circle(0% at calc(100% - 48px) 40px)',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}
      >
        <div className="w-full h-full max-h-[100dvh] bg-[#140e0c] text-cream flex flex-col justify-between overflow-y-auto sm:overflow-hidden p-5 sm:p-7 lg:p-8 select-none relative">
          
          {/* Subtle Atmospheric Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18vw] text-cream/[0.02] select-none pointer-events-none leading-none tracking-tight">
            SEKATA
          </div>

          {/* TOP AREA: Logo, Subtitle & Tutup [X] */}
          <div className="relative z-10 w-full flex items-center justify-between border-b border-cream/15 pb-3 sm:pb-4 flex-shrink-0">
            
            {/* White Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Sekata Coffee & Slowbar"
                className="h-7 sm:h-9 w-auto object-contain filter invert brightness-0"
              />
              <div className="flex flex-col text-left">
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-cream uppercase">
                  SEKATA SLOWBAR
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] text-cream/50 uppercase">
                  EDITORIAL ARCHIVE &bull; TANJUNGPINANG
                </span>
              </div>
            </div>

            {/* Center Editorial Film Pill (Desktop) */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full border border-cream/20 bg-cream/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-cream/70 uppercase">
                INTERACTIVE EDITORIAL FILM
              </span>
            </div>

            {/* TUTUP [X] BUTTON */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-cream/30 hover:border-cream text-cream hover:bg-cream hover:text-espresso transition-all duration-300 font-mono text-xs uppercase tracking-[0.16em] focus:outline-none active:scale-95"
              aria-label="Tutup menu navigasi"
            >
              <span>TUTUP</span>
              <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

          </div>

          {/* 
            MIDDLE AREA: MASSIVE TYPOGRAPHIC NAVIGATION LINKS (COMPACT PROPORTIONS)
          */}
          <div className="relative z-10 w-full my-auto py-3 sm:py-4 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
              
              {/* Massive Typographic Links Column (7-8 cols on desktop) */}
              <nav className="lg:col-span-8 flex flex-col space-y-1 sm:space-y-2 text-left">
                {NAV_EDITORIAL_ITEMS.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const hasHover = hoveredIndex !== null;
                  const isDimmed = hasHover && !isHovered;

                  return (
                    <a
                      key={item.number}
                      href={item.href}
                      onClick={(e) => handleNavigate(e, item.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group block py-1 transition-all duration-300 ${
                        isDimmed ? 'opacity-30 blur-[0.3px]' : 'opacity-100'
                      }`}
                    >
                      <div className="flex items-baseline gap-2.5 sm:gap-4">
                        
                        {/* Number Prefix */}
                        <span className="font-mono text-[11px] sm:text-xs md:text-sm text-burnt-orange tracking-[0.18em] font-medium transition-transform duration-300 group-hover:translate-x-1">
                          {item.number}
                        </span>

                        {/* Typographic Headline with Proportional Sizing & Letter-Spacing */}
                        <div className="flex flex-col">
                          <span
                            className={`font-display text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.05] uppercase transition-all duration-400 ease-out inline-flex items-center gap-2.5 sm:gap-4 ${
                              isHovered
                                ? 'text-marigold tracking-[0.05em] translate-x-2'
                                : 'text-cream tracking-[-0.03em]'
                            }`}
                          >
                            <span>{item.title}</span>
                            <ArrowUpRight
                              className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-300 ${
                                isHovered ? 'opacity-100 translate-x-1 -translate-y-1 text-burnt-orange' : 'opacity-0 scale-75'
                              }`}
                            />
                          </span>

                          {/* Hover Reveal Subtitle (Compact) */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isHovered ? 'max-h-8 mt-0.5 opacity-100 translate-x-2' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="font-mono text-[10px] sm:text-[11px] text-cream/70 tracking-[0.06em]">
                              &mdash; {item.subtitle}
                            </p>
                          </div>
                        </div>

                      </div>
                    </a>
                  );
                })}
              </nav>

              {/* Editorial Hover Reveal Preview Frame (4 cols on desktop, compact height) */}
              <div className="lg:col-span-4 hidden lg:flex flex-col justify-center">
                <div className="relative w-full max-w-[280px] xl:max-w-[300px] aspect-[4/4.8] rounded-[16px] overflow-hidden border border-cream/20 bg-cream/5 shadow-2xl p-2 backdrop-blur-md mx-auto">
                  
                  {/* Active Preview Image */}
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover transition-all duration-500 filter contrast-110"
                    />
                    
                    {/* Dark gradient for caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-burnt-orange text-cream font-mono text-[9px] tracking-[0.16em] uppercase font-bold shadow-md">
                        {activeItem.tag}
                      </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="font-mono text-[9px] text-marigold tracking-[0.18em] uppercase block mb-0.5">
                        {activeItem.category} // {activeItem.english}
                      </span>
                      <h4 className="font-display text-lg text-cream leading-tight">
                        {activeItem.title}
                      </h4>
                      <p className="font-body text-[11px] text-cream/80 mt-0.5 line-clamp-2">
                        {activeItem.subtitle}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Subtle caption below frame */}
                <p className="font-mono text-[9px] text-cream/40 text-center tracking-[0.14em] uppercase mt-2">
                  ARAHKAN KURSOR KE MENU UNTUK REVEAL
                </p>
              </div>

            </div>
          </div>

          {/* 
            BOTTOM AREA: Compact Social Links, Contact Info, & Design Philosophy
          */}
          <div className="relative z-10 w-full border-t border-cream/15 pt-3 sm:pt-4 flex-shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left font-mono text-[11px]">
              
              {/* Column 1: Social Links */}
              <div>
                <span className="text-burnt-orange tracking-[0.18em] uppercase block mb-1 font-medium text-[10px]">
                  // IKUTI JEJAK KAMI
                </span>
                <ul className="space-y-1 text-cream/80">
                  <li>
                    <a
                      href="https://www.instagram.com/reel/DfRJl9QPe13/?utm_source=ig_web_button_share_sheet&psln=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-marigold transition-colors"
                    >
                      <InstagramIcon className="w-3 h-3 text-marigold" />
                      <span>Instagram: @sekata.tnj</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20ingin%20tanya%20seputar%20kedai%20dan%20menu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-marigold transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-marigold" />
                      <span>WhatsApp: +62 812-3456-7890</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Contact Info */}
              <div>
                <span className="text-burnt-orange tracking-[0.18em] uppercase block mb-1 font-medium text-[10px]">
                  // LOKASI & JAM SEDUH
                </span>
                <div className="space-y-0.5 text-cream/80 leading-relaxed text-[10.5px]">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-marigold flex-shrink-0" />
                    <span>Tanjungpinang, Kepulauan Riau</span>
                  </p>
                  <p className="text-cream/60">
                    Buka Setiap Hari: 09.00 &mdash; 23.00 WIB
                  </p>
                </div>
              </div>

              {/* Column 3: Design Philosophy Manifesto */}
              <div>
                <span className="text-burnt-orange tracking-[0.18em] uppercase block mb-1 font-medium text-[10px]">
                  // FILOSOFI PENGALAMAN
                </span>
                <p className="font-body italic text-cream/75 text-[11px] leading-snug line-clamp-2">
                  &ldquo;This experience should feel less like a website and more like an interactive editorial film, where typography is a spatial element.&rdquo;
                </p>
                <span className="font-mono text-[9px] text-marigold uppercase tracking-[0.12em] block mt-0.5">
                  &mdash; Sekata Coffee &bull; #KecilBertumbuh
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
