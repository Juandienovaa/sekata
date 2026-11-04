import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Search, MapPin } from 'lucide-react';
import VinylPlayer from './VinylPlayer';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full shadow-none">
      
      {/* 1. Top Announcement Strip */}
      <div className="w-full bg-turquoise text-cream py-2 px-4 border-b border-turquoise-dark text-center">
        <div className="container-max flex items-center justify-between text-[11px] sm:text-[12px] font-mono tracking-[0.06em] uppercase">
          <span className="hidden md:inline">TANJUNGPINANG, KEPULAUAN RIAU</span>
          <span className="mx-auto md:mx-0 font-medium">
            MARI BERTEMU &amp; BERCERITA TENTANG KEHIDUPAN &bull; #KECILBERTUMBUH
          </span>
          <span className="hidden md:inline">BUKA SETIAP HARI</span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="w-full bg-cream border-b-hairline">
        <div className="container-max h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Sekata */}
          <div className="flex items-center h-full pr-4 sm:pr-6 border-r-hairline">
            <a href="#" className="flex items-center focus:outline-none" aria-label="Beranda Sekata Coffee">
              <img
                src="/logo.png"
                alt="Sekata Coffee &amp; Slowbar"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full text-[12px] xl:text-[13px] font-mono uppercase tracking-[0.05em] text-espresso">
            
            {/* MENU dengan Dropdown */}
            <div
              className="relative h-full flex items-center px-4 xl:px-5 border-r-hairline"
              onMouseEnter={() => setMenuDropdownOpen(true)}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <a
                href="#menu"
                className="flex items-center gap-1.5 hover:text-turquoise transition-colors py-2"
              >
                <span>MENU</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${menuDropdownOpen ? 'rotate-180 text-turquoise' : ''}`} />
              </a>

              {menuDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-cream border-hairline rounded-[4px] py-2 z-50">
                  <a
                    href="#menu"
                    onClick={() => setMenuDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-turquoise"
                  >
                    Minuman Kopi &amp; Espresso
                  </a>
                  <a
                    href="#menu"
                    onClick={() => setMenuDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-turquoise"
                  >
                    Seduhan Slowbar Dingin
                  </a>
                  <a
                    href="#menu"
                    onClick={() => setMenuDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-turquoise"
                  >
                    Non-Kopi &amp; Teh Artisan
                  </a>
                  <a
                    href="#menu"
                    onClick={() => setMenuDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-turquoise"
                  >
                    Biji Kopi &amp; Merchandise
                  </a>
                </div>
              )}
            </div>

            {/* SLOWBAR */}
            <a
              href="#slowbar"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
            >
              SLOWBAR
            </a>

            {/* FILOSOFI */}
            <a
              href="#filosofi"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
            >
              FILOSOFI
            </a>

            {/* RUANG */}
            <a
              href="#ruang"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
            >
              RUANG TEMU
            </a>

            {/* CERITA */}
            <a
              href="#cerita"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
            >
              CERITA KAMI
            </a>

            {/* KUNJUNGI KAMI */}
            <a
              href="#lokasi"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
            >
              LOKASI
            </a>

            {/* CARI */}
            <button
              onClick={onOpenSearch}
              className="h-full flex items-center gap-1.5 px-4 xl:px-5 border-r-hairline hover:text-turquoise transition-colors"
              aria-label="Cari menu atau cerita"
            >
              <Search className="w-3.5 h-3.5" />
              <span>CARI</span>
            </button>
          </nav>

          {/* Right: Audio Suasana Slowbar & Keranjang */}
          <div className="flex items-center h-full">
            
            {/* Audio Widget */}
            <div className="hidden sm:flex items-center px-3 border-l-hairline h-full">
              <VinylPlayer />
            </div>

            {/* KERANJANG */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-4 sm:px-6 border-l-hairline h-full font-mono text-[13px] font-medium text-espresso hover:text-turquoise hover:bg-linen transition-colors focus:outline-none"
              aria-label={`Keranjang pesanan berisi ${cartCount} item`}
            >
              <ShoppingBag className="w-4 h-4 text-turquoise" />
              <span>PESANAN | {cartCount}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 border-l-hairline h-full flex items-center text-espresso hover:bg-linen focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-linen border-t-hairline px-6 py-6 animate-fadeIn">
            <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.05em]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                PILIHAN MENU LENGKAP
              </a>
              <a
                href="#slowbar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                PENGALAMAN SLOWBAR
              </a>
              <a
                href="#filosofi"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                FILOSOFI KAMI
              </a>
              <a
                href="#ruang"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                RUANG UNTUK MENIKMATI WAKTU
              </a>
              <a
                href="#cerita"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                CERITA &amp; KOMUNITAS
              </a>
              <a
                href="#lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-turquoise"
              >
                LOKASI &amp; JAM BUKA
              </a>
            </nav>

            <div className="mt-4 pt-4 border-t-hairline flex items-center justify-between">
              <span className="text-[11px] font-mono text-coffee-dust">SUASANA SLOWBAR:</span>
              <VinylPlayer />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
