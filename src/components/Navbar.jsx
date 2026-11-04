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

              {/* Sisi Kanan: Hub Informasi Lebih Lanjut (Lokasi, Kontak HP/WA, Jam Buka, Tautan Sosmed) */}
              <div className="lg:col-span-4 w-full flex flex-col justify-center">
                <div className="relative w-full max-w-[380px] rounded-2xl border border-cream/20 bg-[#16100d]/90 backdrop-blur-xl shadow-2xl p-5 sm:p-6 text-left mx-auto lg:mx-0">
                  
                  {/* Status Operasional Kedai */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-cream/15">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="font-mono text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                        KEDAI BUKA HARI INI
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cream/60">
                      10.00 – 22.00 WIB
                    </span>
                  </div>

                  {/* Brand & Tagline Singkat */}
                  <div className="py-4 border-b border-cream/15">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <img
                        src="/logo.png"
                        alt="Logo Sekata"
                        className="w-7 h-7 object-contain rounded-full bg-cream/10 p-1 border border-cream/20"
                      />
                      <div>
                        <h4 className="font-sans font-bold text-base text-cream leading-tight">
                          SEKATA COMMUNAL SPACE
                        </h4>
                        <p className="font-mono text-[10px] text-burnt-orange tracking-wider uppercase font-semibold">
                          Specialty Slowbar &bull; Tanjungpinang
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-cream/75 leading-relaxed mt-2">
                      Ruang berteduh dan bertukar cerita di kawasan kota lama Tanjungpinang. Tempat kecil untuk seduhan bermakna.
                    </p>
                  </div>

                  {/* Lokasi & Alamat */}
                  <div className="py-3.5 border-b border-cream/15">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-burnt-orange flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-mono text-[10px] text-cream/50 uppercase tracking-wider block mb-0.5">
                          LOKASI KEDAI
                        </span>
                        <p className="font-body text-xs text-cream/90 leading-snug">
                          Jl. Pos No. 12, Kawasan Kota Lama, Tanjungpinang Kota, Kepulauan Riau 29111
                        </p>
                        <a
                          href="https://maps.google.com/?q=Sekata+Coffee+Tanjungpinang"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-burnt-orange hover:text-marigold underline underline-offset-2 mt-1.5 font-semibold transition-colors"
                        >
                          <span>Petunjuk Arah Google Maps</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Kontak WhatsApp & Nomor HP */}
                  <div className="py-3.5 border-b border-cream/15">
                    <div className="flex items-start gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-mono text-[10px] text-cream/50 uppercase tracking-wider block mb-0.5">
                          NOMOR HP &amp; WHATSAPP
                        </span>
                        <p className="font-mono text-xs text-cream font-bold">
                          +62 812-7001-9281
                        </p>
                        <a
                          href="https://wa.me/6281270019281?text=Halo%20Sekata,%20saya%20ingin%20tanya%20tentang%20slowbar%20dan%20menu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-cream font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md"
                        >
                          <span>Chat WhatsApp Barista</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Tautan Media Sosial Resmi */}
                  <div className="pt-3.5">
                    <span className="font-mono text-[10px] text-cream/50 uppercase tracking-wider block mb-2">
                      MEDIA SOSIAL &amp; KANAL RESMI
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="https://instagram.com/sekata.tnj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-cream/5 hover:bg-cream/15 border border-cream/10 transition-colors group"
                      >
                        <InstagramIcon className="w-4 h-4 text-burnt-orange group-hover:scale-110 transition-transform" />
                        <div className="text-left overflow-hidden">
                          <span className="font-mono text-[11px] text-cream block font-semibold truncate">
                            @sekata.tnj
                          </span>
                          <span className="font-mono text-[9px] text-cream/60 block">
                            Instagram
                          </span>
                        </div>
                      </a>

                      <a
                        href="https://tiktok.com/@sekatatnj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-cream/5 hover:bg-cream/15 border border-cream/10 transition-colors group"
                      >
                        <span className="font-mono font-bold text-xs text-turquoise group-hover:scale-110 transition-transform">
                          ♪
                        </span>
                        <div className="text-left overflow-hidden">
                          <span className="font-mono text-[11px] text-cream block font-semibold truncate">
                            @sekatatnj
                          </span>
                          <span className="font-mono text-[9px] text-cream/60 block">
                            TikTok
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Tagline footer card */}
                  <div className="mt-4 pt-3 border-t border-cream/10 text-center">
                    <span className="font-mono text-[10px] text-burnt-orange tracking-widest uppercase font-semibold">
                      #KECILBERTUMBUH &bull; TANJUNGPINANG
                    </span>
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
