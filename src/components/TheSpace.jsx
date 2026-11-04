import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PRODUCTS, formatRupiah } from '../data/products';

export default function TheSpace({ onQuickView }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: '/Caramel_macchiato.jpg',
      taglineTop: 'Tasty Coffee',
      taglineBottom: 'and Chill Vibes.',
      alt: 'Meja santai dengan kopi susu dan bolu pisang di Sekata'
    },
    {
      image: '/konten1.jpg',
      taglineTop: 'Fresh Brews',
      taglineBottom: '& Slow Stories.',
      alt: 'Barista meracik seduhan di meja slowbar Sekata'
    }
  ];

  const currentSlide = slides[slideIndex];
  const featuredProduct = PRODUCTS[0]; // Sekata House Blend / Friend Blend

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ruang" className="w-full py-12 sm:py-16 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Unified Desktop Layout — Sesuai Persis Gambar 2 User */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column (Approx 65% width): Large Photo with Overlay & Slider Pagination */}
          <div className="lg:col-span-8 relative rounded-[20px] overflow-hidden bg-sandstone min-h-[400px] sm:min-h-[460px] lg:h-[540px] shadow-sm border-hairline group">
            
            {/* Background Image */}
            <img
              src={currentSlide.image}
              alt={currentSlide.alt}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
            
            {/* Subtle Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Top-Left Overlay: "Tasty Coffee and Chill Vibes" with Delivery Bike Doodle (Persis Gambar 2) */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex items-start gap-3 select-none pointer-events-none">
              <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                <div className="font-display text-[30px] sm:text-[38px] lg:text-[42px] text-cream leading-[0.92]">
                  {currentSlide.taglineTop}
                </div>
                <div className="font-display text-[28px] sm:text-[36px] lg:text-[40px] text-cream leading-[0.92]">
                  {currentSlide.taglineBottom}
                </div>
              </div>

              {/* Hand-drawn Bicycle Delivery Doodle matching Gambar 2 */}
              <svg
                width="46"
                height="36"
                viewBox="0 0 48 38"
                fill="none"
                className="text-cream drop-shadow-md mt-1 flex-shrink-0"
              >
                {/* Wheels */}
                <circle cx="11" cy="27" r="7.5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="37" cy="27" r="7.5" stroke="currentColor" strokeWidth="2.2" />
                {/* Frame */}
                <path d="M11 27 L22 27 L30 17 L19 17 Z" stroke="currentColor" strokeWidth="2.2" fill="none" />
                <path d="M22 27 L22 14" stroke="currentColor" strokeWidth="2.2" />
                <path d="M30 17 L37 27" stroke="currentColor" strokeWidth="2.2" />
                <path d="M30 17 L34 10 L38 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                {/* Handlebar */}
                <path d="M19 14 L25 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                {/* Takeaway Coffee Cup on Rear Rack with Steam */}
                <rect x="7" y="10" width="8" height="9" rx="2" fill="currentColor" />
                <path d="M9 7 Q11 3 13 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                {/* Speed Lines */}
                <path d="M0 23 L5 23 M-2 27 L3 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom-Left Button: SHOP ALL / JELAJAHI MENU (Persis Gambar 2) */}
            <button
              onClick={scrollToMenu}
              className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 bg-cream text-espresso px-4 py-2 sm:px-5 sm:py-2.5 rounded-[4px] border border-espresso font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] font-medium shadow-md hover:bg-turquoise hover:text-cream hover:border-turquoise transition-all"
            >
              SHOP ALL &rarr;
            </button>

            {/* Bottom-Right: Carousel Controls (01 — 02 & Arrows) (Persis Gambar 2) */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-[4px] border border-cream/20 text-cream shadow-sm">
              <span className="font-mono text-xs font-medium tracking-[0.05em]">
                0{slideIndex + 1} &mdash; 0{slides.length}
              </span>
              <div className="flex items-center gap-1.5 border-l border-cream/30 pl-2">
                <button
                  onClick={prevSlide}
                  className="p-1 hover:text-turquoise transition-colors"
                  aria-label="Slide sebelumnya"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1 hover:text-turquoise transition-colors"
                  aria-label="Slide berikutnya"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Approx 35% width): Dusty Blue (#89b4ca) Card with Gauges & Quick View (Persis Gambar 2) */}
          <div className="lg:col-span-4 bg-[#89b4ca] p-5 sm:p-6 rounded-[20px] flex flex-col justify-between text-espresso min-h-[400px] sm:min-h-[460px] lg:h-[540px] shadow-sm border-hairline">
            
            {/* Top Coffee Bag Frame in Cream White Card */}
            <div className="w-full h-44 sm:h-48 rounded-[14px] bg-cream border-hairline flex items-center justify-center p-3 relative overflow-hidden shadow-sm">
              <img
                src="/friend_blend_bag.jpg"
                alt={featuredProduct.name}
                className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </div>

            {/* Middle Section: Titles, Origin, 3 Gauge Dials & Roast Bar (Persis Gambar 2) */}
            <div className="my-auto pt-3">
              
              <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <h3 className="font-display text-[22px] sm:text-[24px] text-espresso leading-tight">
                  Friend Blend
                </h3>
                <span className="font-mono text-[11px] sm:text-xs font-semibold text-espresso">
                  {formatRupiah(featuredProduct.price)}
                </span>
              </div>

              <p className="font-mono text-[10px] text-espresso/80 uppercase tracking-[0.08em] mb-2.5">
                COLOMBIA, ETHIOPIA
              </p>

              {/* 3 Circular Gauge Dials (SWEETNESS, ACIDITY, COMPLEXITY) Persis Gambar 2 */}
              <div className="grid grid-cols-3 gap-2 py-2.5 border-t border-b border-espresso/25 text-center my-2">
                <div>
                  <div className="w-5 h-5 mx-auto mb-1">
                    <svg viewBox="0 0 36 36" className="w-full h-full text-espresso">
                      <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
                      <path d="M18 4 A14 14 0 1 1 6 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="3" fill="currentColor" />
                      <line x1="18" y1="18" x2="26" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.05em] text-espresso font-semibold block">
                    SWEETNESS
                  </span>
                </div>

                <div>
                  <div className="w-5 h-5 mx-auto mb-1">
                    <svg viewBox="0 0 36 36" className="w-full h-full text-espresso">
                      <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
                      <path d="M18 4 A14 14 0 0 1 30 22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="3" fill="currentColor" />
                      <line x1="18" y1="18" x2="14" y2="10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.05em] text-espresso font-semibold block">
                    ACIDITY
                  </span>
                </div>

                <div>
                  <div className="w-5 h-5 mx-auto mb-1">
                    <svg viewBox="0 0 36 36" className="w-full h-full text-espresso">
                      <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
                      <path d="M18 4 A14 14 0 1 1 10 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="3" fill="currentColor" />
                      <line x1="18" y1="18" x2="25" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.05em] text-espresso font-semibold block">
                    COMPLEXITY
                  </span>
                </div>
              </div>

              {/* Flavor Notes */}
              <p className="font-body text-[11px] text-espresso leading-snug my-1.5">
                <span className="font-medium">Notes:</span> Caramel, Citrus, Milk Chocolate
              </p>

              {/* Roast Bar with Slider Dot */}
              <div className="pt-1">
                <div className="flex justify-between items-center text-[10px] font-mono text-espresso/90 mb-1">
                  <span>Medium Roast</span>
                </div>
                <div className="relative w-full h-1 bg-espresso/30 rounded-full">
                  <div className="absolute top-1/2 left-[58%] -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-espresso border border-cream shadow-sm" />
                </div>
              </div>

            </div>

            {/* Bottom Button: QUICK VIEW (Persis Gambar 2) */}
            <div className="pt-3">
              <button
                onClick={() => onQuickView && onQuickView(featuredProduct)}
                className="w-full py-2.5 bg-espresso text-cream hover:bg-burnt-orange transition-colors rounded-[3px] font-mono text-xs uppercase tracking-[0.08em] font-medium shadow-sm flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>QUICK VIEW</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
