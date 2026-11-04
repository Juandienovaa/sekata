import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Eye, Plus, Check, X, Sparkles, Coffee } from 'lucide-react';
import { PRODUCTS, formatRupiah } from '../data/products';

export default function OliverParallaxMenu({ onAddToCart, onQuickView }) {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [justAddedId, setJustAddedId] = useState(null);

  // Parallax Scroll Tracking (Skiper30 / Olivier Larose architecture)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 4 columns moving at different speeds for depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -260]);

  // Gallery items selected from real Sekata products
  const col1 = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[8]];
  const col2 = [PRODUCTS[1], PRODUCTS[4], PRODUCTS[10]];
  const col3 = [PRODUCTS[2], PRODUCTS[6], PRODUCTS[12]];
  const col4 = [PRODUCTS[5], PRODUCTS[7], PRODUCTS[15]];

  const handleCardClick = (product) => {
    if (activeItem?.id === product.id) {
      setActiveItem(null);
    } else {
      setActiveItem(product);
    }
  };

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes ? product.sizes[0] : 'Reguler',
      temperature: product.temperatures ? product.temperatures[0] : 'Dingin',
      quantity: 1
    });

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  return (
    <div className="w-full bg-cream py-14 sm:py-20 border-b-hairline relative overflow-hidden">
      
      {/* Intro Header */}
      <div className="container-max mb-10 text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="badge-stamp bg-turquoise text-cream shadow-sm">
            OLIVER PARALLAX SHOWCASE &bull; SKIPER 30
          </span>
          <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em]">
            KLIK GAMBAR KOPI UNTUK DETAIL &amp; HARGA
          </span>
        </div>

        <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[54px] leading-[0.95] text-espresso tracking-[-0.05em] mb-3">
          Jelajah Rasa di Meja Slowbar.
        </h2>

        <p className="font-body text-[14px] sm:text-[16px] text-coffee-dust leading-relaxed">
          Sentuh atau klik pada kartu kopi favoritmu untuk membuka rahasia seduhan, karakter rasa, dan harga aslinya.
        </p>
      </div>

      {/* Parallax Gallery Canvas (Skiper30 Layout) */}
      <div
        ref={containerRef}
        className="w-full relative h-[620px] sm:h-[720px] lg:h-[780px] overflow-hidden bg-linen border-t-hairline border-b-hairline py-4 select-none"
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-full flex gap-3 sm:gap-4 lg:gap-6 relative -top-[5vh]">
          
          {/* Column 1 */}
          <ParallaxColumn
            products={col1}
            y={y1}
            offset="-top-[3%]"
            activeItem={activeItem}
            onSelect={handleCardClick}
            onAdd={handleAdd}
            justAddedId={justAddedId}
          />

          {/* Column 2 */}
          <ParallaxColumn
            products={col2}
            y={y2}
            offset="-top-[12%]"
            activeItem={activeItem}
            onSelect={handleCardClick}
            onAdd={handleAdd}
            justAddedId={justAddedId}
          />

          {/* Column 3 */}
          <ParallaxColumn
            products={col3}
            y={y3}
            offset="-top-[6%]"
            activeItem={activeItem}
            onSelect={handleCardClick}
            onAdd={handleAdd}
            justAddedId={justAddedId}
            className="hidden sm:flex"
          />

          {/* Column 4 */}
          <ParallaxColumn
            products={col4}
            y={y4}
            offset="-top-[16%]"
            activeItem={activeItem}
            onSelect={handleCardClick}
            onAdd={handleAdd}
            justAddedId={justAddedId}
            className="hidden md:flex"
          />

        </div>
      </div>

      {/* Floating Prompt on Desktop */}
      <div className="container-max mt-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-coffee-dust">
          &bull; SCROLL HALAMAN UNTUK MENIKMATI EFEK PARALLAX MULTI-KEDALAMAN &bull;
        </span>
      </div>

    </div>
  );
}

function ParallaxColumn({ products, y, offset, activeItem, onSelect, onAdd, justAddedId, className = "" }) {
  return (
    <motion.div
      style={{ y }}
      className={`w-1/2 sm:w-1/3 md:w-1/4 h-full flex flex-col gap-4 sm:gap-6 relative ${offset} ${className}`}
    >
      {products.map((product) => {
        const isActive = activeItem?.id === product.id;
        const isJustAdded = justAddedId === product.id;

        return (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            className="group relative w-full h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden border-2 border-hairline bg-cream shadow-md cursor-pointer transition-all duration-300 hover:border-turquoise hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-black/20" />

            {/* Top Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="badge-stamp bg-cream/90 backdrop-blur-sm text-espresso border-hairline font-mono text-[9px] shadow-sm">
                {product.categoryLabel}
              </span>
            </div>

            {/* Bottom Floating Bar: Click indicator */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-cream">
              <div className="min-w-0 pr-2">
                <p className="font-display text-[16px] sm:text-[18px] text-cream leading-tight truncate drop-shadow">
                  {product.name}
                </p>
                <p className="font-mono text-[11px] text-marigold font-bold drop-shadow">
                  {formatRupiah(product.price)}
                </p>
              </div>

              <div className="w-7 h-7 rounded-full bg-cream/90 backdrop-blur-sm text-espresso flex items-center justify-center text-xs font-mono font-bold shadow-sm group-hover:bg-turquoise group-hover:text-cream transition-colors flex-shrink-0">
                {isActive ? '✕' : '+'}
              </div>
            </div>

            {/* POPUP OVERLAY KETIKA DIKLIK (Sesuai Permintaan: pas diklik baru muncul deskripsi dan harga) */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 z-30 bg-espresso/95 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between text-cream"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-cream/20 mb-2">
                      <span className="badge-stamp bg-turquoise text-cream font-mono text-[9px]">
                        DETAIL MENU
                      </span>
                      <button
                        onClick={() => onSelect(product)}
                        className="p-1 rounded-full text-cream/70 hover:text-white"
                        aria-label="Tutup"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <h4 className="font-display text-[18px] sm:text-[20px] text-cream leading-snug mb-1">
                      {product.name}
                    </h4>

                    <div className="font-mono text-sm font-bold text-marigold mb-2">
                      {formatRupiah(product.price)}
                    </div>

                    <p className="font-body text-[11px] sm:text-[12px] text-cream/90 leading-relaxed mb-3 line-clamp-3">
                      {product.description || product.subtitle}
                    </p>

                    {/* Tasting notes */}
                    {product.tastingNotes && (
                      <div className="flex flex-wrap gap-1">
                        {product.tastingNotes.slice(0, 3).map((note, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono bg-cream/15 px-2 py-0.5 rounded text-cream/90"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-cream/20">
                    <button
                      onClick={(e) => onAdd(product, e)}
                      className="btn-filled w-full text-xs py-2 bg-turquoise border-turquoise hover:bg-turquoise-dark flex items-center justify-center gap-1.5 shadow-sm font-bold"
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>DITAMBAHKAN</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>PESAN SEKARANG</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        );
      })}
    </motion.div>
  );
}
