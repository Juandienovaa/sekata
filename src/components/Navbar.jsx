import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, X, ArrowUpRight, Phone, Mail, MapPin, Search } from 'lucide-react';

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

          {/* RIGHT: PENCARIAN + PESANAN + MENU BUTTON */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">

            {/* Quick Search Button */}
            <motion.button
              onClick={onOpenSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-mono transition-colors duration-200 focus:outline-none cursor-pointer ${
                scrolled
                  ? 'border border-espresso/20 hover:border-turquoise text-espresso hover:text-turquoise bg-cream hover:bg-turquoise/5'
                  : 'bg-black/35 backdrop-blur-md border border-white/25 text-cream hover:bg-black/50 hover:border-white/50 shadow-md'
              }`}
              aria-label="Cari Menu atau Biji Kopi"
              title="Cari Menu"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
            </motion.button>

            {/* Cart / Orders Pill */}
            <motion.button
              onClick={onOpenCart}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] font-medium transition-colors duration-200 focus:outline-none cursor-pointer ${
                scrolled
                  ? 'border border-espresso/20 hover:border-turquoise text-espresso hover:text-turquoise bg-cream hover:bg-turquoise/5'
                  : 'bg-black/35 backdrop-blur-md border border-white/25 text-cream hover:bg-black/50 hover:border-white/50 shadow-md'
              }`}
              aria-label={`Buka Keranjang Pesanan (${cartCount} item)`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-turquoise stroke-[1.5]" />
              <span className="hidden md:inline">PESANAN</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-turquoise text-cream text-[9px] sm:text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </motion.button>

            {/* MINIMAL MENU TRIGGER BUTTON */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              className={`group relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 focus:outline-none cursor-pointer ${
                scrolled
                  ? 'bg-espresso text-cream hover:bg-turquoise shadow-md'
                  : 'bg-cream text-espresso hover:bg-turquoise hover:text-cream shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
              }`}
              aria-label="Buka Menu Navigasi Fullscreen"
            >
              <span>MENU</span>
              <span className="flex flex-col gap-[3px] w-3.5 sm:w-4 justify-center items-end">
                <span className={`w-3.5 sm:w-4 h-[1.5px] transition-all duration-200 ${
                  scrolled ? 'bg-cream group-hover:w-4' : 'bg-espresso group-hover:bg-cream group-hover:w-4'
                }`} />
                <span className={`w-2 sm:w-2.5 h-[1.5px] transition-all duration-200 ${
                  scrolled ? 'bg-cream group-hover:w-4' : 'bg-espresso group-hover:bg-cream group-hover:w-4'
                }`} />
              </span>
            </motion.button>

          </div>

        </div>
      </header>

      {/* 
        ========================================================================
        2. FULLSCREEN NAVIGATION MENU — CIRCULAR WIPE TRANSITION (OPEN & CLOSE)
        Persis sama animasinya saat buka dan tutup:
        Mengembang melingkar saat dibuka & menyusut halus saat ditutup
        ========================================================================
      */}
      <div
        className="fixed inset-0 z-50 select-none overflow-hidden"
        style={{
          clipPath: isMenuOpen
            ? 'circle(150% at calc(100% - 48px) 40px)'
            : 'circle(0% at calc(100% - 48px) 40px)',
          transition: 'clip-path 600ms cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        aria-hidden={!isMenuOpen}
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
              <nav className="lg:col-span-7 flex flex-col space-y-2 sm:space-y-4 text-left">
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
                      style={{
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-28px)',
                        opacity: isMenuOpen ? (isDimmed ? 0.3 : 1) : 0,
                        transition: `transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 70 + 180}ms, opacity 450ms ease ${index * 70 + 180}ms`
                      }}
                      className="group block py-1 sm:py-2"
                    >
                      <span
                        className={`font-sans font-black text-[42px] xs:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[88px] leading-[0.98] uppercase tracking-tight transition-all duration-300 inline-flex items-center gap-3 sm:gap-6 ${
                          isHovered
                            ? 'text-turquoise translate-x-3'
                            : index === 1
                            ? 'text-turquoise hover:text-turquoise'
                            : 'text-cream hover:text-turquoise'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight
                          className={`w-6 h-6 sm:w-10 sm:h-10 transition-all duration-300 ${
                            isHovered
                              ? 'opacity-100 translate-x-1.5 -translate-y-1.5 text-turquoise scale-100'
                              : 'opacity-0 scale-75'
                          }`}
                        />
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Sisi Kanan: Informasi Kedai Simple & To the Point (Persis Request User Gambar 3) */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left pl-0 lg:pl-12 mt-8 lg:mt-0 border-t lg:border-t-0 lg:border-l border-cream/15 pt-6 lg:pt-0">
                <div className="space-y-5">
                  
                  {/* Brand & Address */}
                  <div>
                    <span className="font-mono text-[11px] text-turquoise tracking-[0.18em] uppercase font-bold block mb-1">
                      KEDAI &bull; OPEN DAILY
                    </span>
                    <h3 className="font-sans font-bold text-[22px] sm:text-[24px] text-cream mb-1 tracking-tight">
                      Sekata Coffee &amp; Space
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] text-cream/75 leading-relaxed">
                      Jln Bunguran No.53, Sei Jang, Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29113
                    </p>
                    <p className="font-mono text-xs text-turquoise-light/80 mt-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Buka Setiap Hari: 10:00 &ndash; 00:00 WIB</span>
                    </p>
                  </div>

                  {/* Clean Direct Actions: WhatsApp & Instagram with Spring Motion */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href="https://wa.me/6281991445331?text=Halo%20Sekata!%20Saya%20ingin%20tanya%20seputar%20kedai%20atau%20reservasi."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider bg-turquoise text-cream hover:bg-turquoise-dark transition-colors duration-200 shadow-md shadow-turquoise/20 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp: 0819-9144-5331</span>
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/sekata.tnj"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sans text-xs font-semibold bg-white/10 hover:bg-white/20 text-cream transition-colors duration-200 cursor-pointer"
                    >
                      <span>@sekata.tnj</span>
                    </motion.a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* 
            BOTTOM AREA: Clean, Minimalist (No duplicate text)
          */}
          <div className="relative z-10 w-full border-t border-cream/15 pt-4 sm:pt-5 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left font-mono text-[11px] sm:text-xs text-cream/60">
              <div>
                <span>Sekata Coffee &amp; Space &bull; Sei Jang, Bukit Bestari</span>
              </div>
              <div>
                <span>Buka Setiap Hari: 10:00 &ndash; 00:00 WIB</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
