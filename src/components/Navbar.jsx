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

// Menu items persis request user: Home, Menu, Filosofi Kami, Lokasi Kami
const NAV_EDITORIAL_ITEMS = [
  {
    title: 'HOME',
    href: '#hero',
    image: '/konten1.jpg',
    tag: 'BERANDA',
    subtitle: 'Setiap Seduhan Punya Cerita'
  },
  {
    title: 'MENU',
    href: '#menu',
    image: '/Caramel_macchiato.jpg',
    tag: '30+ VARIAN',
    subtitle: 'Kopi Klasik, Kopi Susu, Mocktail & Cemilan'
  },
  {
    title: 'FILOSOFI KAMI',
    href: '#filosofi',
    image: '/ilustrasi1.jpg',
    tag: '#KECILBERTUMBUH',
    subtitle: 'Bukan Hanya Sekadar Tentang Kopi'
  },
  {
    title: 'LOKASI KAMI',
    href: '#lokasi',
    image: '/subscription_farm.jpg',
    tag: 'TANJUNGPINANG',
    subtitle: 'Kunjungi Slowbar Sekata di Tanjungpinang'
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
        2. FULLSCREEN NAVIGATION MENU — PERSIS SEPERTI GAMBAR 2 (SERU.NI STYLE)
        4 Menu Utama: HOME, MENU, FILOSOFI KAMI, LOKASI KAMI
        Tipografi tebal, percaya diri, rapi, dan bersih
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
        <div className="w-full h-full max-h-[100dvh] bg-[#0c0807] text-cream flex flex-col justify-between overflow-y-auto sm:overflow-hidden p-6 sm:p-8 lg:p-12 select-none relative">
          
          {/* TOP AREA: PERSIS GAMBAR 2 (SERU.NI — MENU) */}
          <div className="relative z-10 w-full flex items-center justify-between border-b border-cream/15 pb-4 sm:pb-5 flex-shrink-0">
            
            {/* Top-left small breadcrumb persis Gambar 2 */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cream/70 uppercase">
                SEKATA &mdash; MENU
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
            MIDDLE AREA: MASSIVE CLEAN TYPOGRAPHY (PERSIS SEPERTI GAMBAR 2)
            4 Menu Saja: HOME, MENU, FILOSOFI KAMI, LOKASI KAMI
          */}
          <div className="relative z-10 w-full my-auto py-6 sm:py-8 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              
              {/* Massive Typographic Links Column */}
              <nav className="lg:col-span-8 flex flex-col space-y-2 sm:space-y-4 text-left">
                {NAV_EDITORIAL_ITEMS.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const hasHover = hoveredIndex !== null;
                  const isDimmed = hasHover && !isHovered;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => handleNavigate(e, item.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group block py-1 sm:py-2 transition-all duration-300 ${
                        isDimmed ? 'opacity-30 blur-[0.4px]' : 'opacity-100'
                      }`}
                    >
                      <span
                        className={`font-sans font-black text-[42px] xs:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[88px] leading-[0.98] uppercase tracking-tight transition-all duration-300 inline-flex items-center gap-3 sm:gap-6 ${
                          isHovered
                            ? 'text-burnt-orange translate-x-3'
                            : index === 1 // MENU default highlight seperti ORDER ONLINE di Gambar 2
                            ? 'text-burnt-orange hover:text-burnt-orange'
                            : 'text-cream hover:text-burnt-orange'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight
                          className={`w-6 h-6 sm:w-10 sm:h-10 transition-all duration-300 ${
                            isHovered
                              ? 'opacity-100 translate-x-1.5 -translate-y-1.5 text-burnt-orange scale-100'
                              : 'opacity-0 scale-75'
                          }`}
                        />
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Minimalist Editorial Hover Preview Frame (Desktop only) */}
              <div className="lg:col-span-4 hidden lg:flex flex-col justify-center">
                <div className="relative w-full max-w-[270px] aspect-[4/4.8] rounded-[20px] overflow-hidden border border-cream/20 bg-cream/5 shadow-2xl p-2.5 backdrop-blur-md mx-auto">
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover transition-all duration-500 filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-burnt-orange text-cream font-mono text-[9px] tracking-wider uppercase font-bold shadow-md">
                        {activeItem.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <h4 className="font-display text-lg text-cream leading-tight">
                        {activeItem.title}
                      </h4>
                      <p className="font-body text-[12px] text-cream/80 mt-0.5">
                        {activeItem.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 
            BOTTOM AREA: Clean, Minimalist Contact & Social Info
          */}
          <div className="relative z-10 w-full border-t border-cream/15 pt-4 sm:pt-5 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left font-body text-[12px] sm:text-[13px] text-cream/70">
              
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-cream font-medium">Sekata Coffee &amp; Slowbar</span>
                <span>&bull;</span>
                <span>Tanjungpinang, Kepri</span>
                <span>&bull;</span>
                <span className="text-burnt-orange font-medium">Buka 10:00 – 22:00 WIB</span>
              </div>

              <div className="flex items-center gap-4 text-cream/80">
                <a
                  href="https://instagram.com/sekata.tnj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream underline underline-offset-2 transition-colors"
                >
                  Instagram: @sekata.tnj
                </a>
                <span>&bull;</span>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream underline underline-offset-2 transition-colors"
                >
                  WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
