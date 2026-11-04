import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Search, User } from 'lucide-react';
import VinylPlayer from './VinylPlayer';

export default function Navbar({ cartCount, onOpenCart, onOpenWholesale, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full shadow-none">
      
      {/* 1. Blue Announcement Bar directly below Hero matching user screenshot */}
      <div className="w-full bg-[#89b4ca] text-espresso py-2 px-4 border-b border-[#77a3b9] text-center">
        <div className="container-max flex items-center justify-center text-[11px] sm:text-[12px] font-mono tracking-[0.08em] uppercase font-medium">
          FREE SHIPPING ON ORDERS OVER $70.00
        </div>
      </div>

      {/* 2. Main Navigation Bar with logo.png and vertical hairline dividers */}
      <header className="w-full bg-cream border-b-hairline">
        <div className="container-max h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: logo.png strictly matching user request */}
          <div className="flex items-center h-full pr-4 sm:pr-6 border-r-hairline">
            <a href="#" className="flex items-center focus:outline-none" aria-label="Little Amps Home">
              <img
                src="/logo.png"
                alt="little amps coffee"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center Links with Hairline Separators */}
          <nav className="hidden lg:flex items-center h-full text-[12px] xl:text-[13px] font-mono uppercase tracking-[0.05em] text-espresso">
            
            {/* SHOP with Dropdown */}
            <div
              className="relative h-full flex items-center px-4 xl:px-5 border-r-hairline"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <a
                href="#shop"
                className="flex items-center gap-1.5 hover:text-burnt-orange transition-colors py-2"
              >
                <span>SHOP</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-burnt-orange' : ''}`} />
              </a>

              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-cream border-hairline rounded-[4px] py-2 z-50">
                  <a
                    href="#shop"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Whole Bean Coffee
                  </a>
                  <a
                    href="#shop"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Cold Drop & Kyoto Brew
                  </a>
                  <a
                    href="#shop"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Handcrafted Bar Drinks
                  </a>
                  <a
                    href="#shop"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Amps Gear & Merch
                  </a>
                </div>
              )}
            </div>

            {/* ABOUT with Dropdown */}
            <div
              className="relative h-full flex items-center px-4 xl:px-5 border-r-hairline"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <a
                href="#about"
                className="flex items-center gap-1.5 hover:text-burnt-orange transition-colors py-2"
              >
                <span>ABOUT</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-burnt-orange' : ''}`} />
              </a>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-cream border-hairline rounded-[4px] py-2 z-50">
                  <a
                    href="#about"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Our Roasting Story
                  </a>
                  <a
                    href="#video-craft"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Behind The Bar Film
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 text-[11px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange"
                  >
                    Harrisburg Cafés & Hours
                  </a>
                </div>
              )}
            </div>

            {/* WHOLESALE */}
            <button
              onClick={onOpenWholesale}
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-burnt-orange transition-colors"
            >
              WHOLESALE
            </button>

            {/* COMMUNITY BOARD */}
            <a
              href="#community"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-burnt-orange transition-colors"
            >
              COMMUNITY BOARD
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="h-full flex items-center px-4 xl:px-5 border-r-hairline hover:text-burnt-orange transition-colors"
            >
              CONTACT
            </a>

            {/* SEARCH */}
            <button
              onClick={onOpenSearch}
              className="h-full flex items-center gap-1.5 px-4 xl:px-5 border-r-hairline hover:text-burnt-orange transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>SEARCH</span>
            </button>
          </nav>

          {/* Right: Vinyl Player, Account & Cart */}
          <div className="flex items-center h-full">
            
            {/* Turntable Crackle Audio Widget */}
            <div className="hidden sm:flex items-center px-3 border-l-hairline h-full">
              <VinylPlayer />
            </div>

            {/* ACCOUNT */}
            <div className="hidden md:flex items-center gap-1 px-4 border-l-hairline h-full text-[12px] font-mono text-espresso hover:text-burnt-orange cursor-pointer">
              <User className="w-3.5 h-3.5" />
              <span>ACCOUNT ⌵</span>
            </div>

            {/* CART | 0 */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-4 sm:px-6 border-l-hairline h-full font-mono text-[13px] font-medium text-espresso hover:text-burnt-orange hover:bg-linen transition-colors focus:outline-none"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-burnt-orange" />
              <span>CART | {cartCount}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 border-l-hairline h-full flex items-center text-espresso hover:bg-linen focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-burnt-orange"
              >
                SHOP COFFEE & GEAR
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-burnt-orange"
              >
                ABOUT OUR ROAST
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWholesale();
                }}
                className="py-2.5 border-b-hairline text-espresso text-left hover:text-burnt-orange"
              >
                WHOLESALE PROGRAM
              </button>
              <a
                href="#community"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-burnt-orange"
              >
                COMMUNITY BOARD
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b-hairline text-espresso hover:text-burnt-orange"
              >
                CONTACT & LOCATIONS
              </a>
            </nav>

            <div className="mt-4 pt-4 border-t-hairline flex items-center justify-between">
              <span className="text-[11px] font-mono text-coffee-dust">VINYL AUDIO NEEDLE:</span>
              <VinylPlayer />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
