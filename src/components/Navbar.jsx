import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import VinylPlayer from './VinylPlayer';

export default function Navbar({ cartCount, onOpenCart, onOpenWholesale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WHOLESALE', href: '#wholesale', onClick: onOpenWholesale },
    { name: 'COMMUNITY BOARD', href: '#community' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-cream border-b-hairline">
      {/* Top Announcement Tape */}
      <div className="bg-linen border-b-hairline py-1.5 px-4 text-center">
        <div className="container-max flex items-center justify-between text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
          <span className="hidden md:inline">HARRISBURG, PA • ROASTING SINCE 2011</span>
          <span className="mx-auto md:mx-0 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-burnt-orange animate-pulse"></span>
            FRESH COLD & ESPRESSO BATCHES SPUN DAILY • FREE SHIPPING OVER $45
          </span>
          <span className="hidden md:inline">TASTING ROOM THURS–SUN</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-max h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Original Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 py-2 focus:outline-none"
          aria-label="Little Amps Home"
        >
          <img
            src="/logo.jpg"
            alt="Little Amps Coffee Roasters"
            className="h-10 sm:h-12 w-auto object-contain border-hairline rounded-[3px] p-0.5 bg-cream"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {/* Shop with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <a
              href="#shop"
              className="flex items-center gap-1 text-[13px] font-mono text-espresso uppercase tracking-[0.05em] py-2 hover:text-burnt-orange transition-colors"
            >
              SHOP
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-burnt-orange' : ''}`} />
            </a>

            {shopDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-cream border-hairline rounded-[4px] py-2 z-50">
                <a
                  href="#shop"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-4 py-2 text-[12px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange uppercase tracking-[0.05em]"
                >
                  All Current Batches
                </a>
                <a
                  href="#shop"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-4 py-2 text-[12px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange uppercase tracking-[0.05em]"
                >
                  Espresso & Milk Craft
                </a>
                <a
                  href="#shop"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-4 py-2 text-[12px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange uppercase tracking-[0.05em]"
                >
                  Cold Drop & Slow Brew
                </a>
                <a
                  href="#shop"
                  onClick={() => setShopDropdownOpen(false)}
                  className="block px-4 py-2 text-[12px] font-mono text-espresso hover:bg-linen hover:text-burnt-orange uppercase tracking-[0.05em]"
                >
                  Specialty & Artisan Teas
                </a>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="text-[13px] font-mono text-espresso uppercase tracking-[0.05em] hover:text-burnt-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Vinyl Player & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          <VinylPlayer />

          <button
            onClick={onOpenCart}
            className="btn-filled flex items-center gap-2"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-mono text-[12px] tracking-[0.05em]">
              CART {cartCount > 0 && `(${cartCount})`}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-espresso hover:bg-linen rounded-[3px] border-hairline focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-linen border-b-hairline px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono text-espresso uppercase tracking-[0.05em] py-2 border-b-hairline hover:text-burnt-orange"
            >
              SHOP ALL BEVERAGES & BEANS
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="text-sm font-mono text-espresso uppercase tracking-[0.05em] py-2 border-b-hairline hover:text-burnt-orange"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t-hairline text-xs font-mono text-coffee-dust">
            <p className="uppercase">Harrisburg Midtown Tasting Room</p>
            <p className="mt-1">1336 N 3rd St, Harrisburg, PA 17102</p>
            <p className="mt-1">Mon–Sun 7:00 AM – 5:00 PM</p>
          </div>
        </div>
      )}
    </header>
  );
}
