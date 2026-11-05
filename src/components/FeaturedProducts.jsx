import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Plus, Check, LayoutGrid, List, Sparkles, ChevronDown, ChevronUp, Coffee, Utensils, CupSoda, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES, formatRupiah } from '../data/products';

export default function FeaturedProducts({ onQuickView, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'board'
  const [isExpanded, setIsExpanded] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Filter products by category
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  // Limit default cards to 6 in grid mode to avoid scroll fatigue
  const displayedCards = isExpanded ? filteredProducts : filteredProducts.slice(0, 6);

  const handleAdd = (product, e) => {
    if (e) e.stopPropagation();
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      temperature: product.temperatures[0],
      quantity: 1
    });

    setRecentlyAddedId(product.id);
    setSelectedProductId(product.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  const handleCardClick = (product) => {
    setSelectedProductId(product.id);
    onQuickView(product);
  };

  // Group products by subCategory for Café Board view
  const coffeeKlasik = PRODUCTS.filter((p) => p.category === 'kopi' && p.subCategory === 'Klasik');
  const coffeeSusu = PRODUCTS.filter((p) => p.category === 'kopi' && p.subCategory === 'Kopi Susu');
  const coffeeSoda = PRODUCTS.filter((p) => p.category === 'kopi' && p.subCategory === 'Kopi Soda');

  const nonCoffeeMilk = PRODUCTS.filter((p) => p.category === 'bukan-kopi' && p.subCategory === 'Milk Base');
  const nonCoffeeFusion = PRODUCTS.filter((p) => p.category === 'bukan-kopi' && p.subCategory === 'Fusion');
  const nonCoffeeSoda = PRODUCTS.filter((p) => p.category === 'bukan-kopi' && p.subCategory === 'Soda Base');
  const nonCoffeeTea = PRODUCTS.filter((p) => p.category === 'bukan-kopi' && p.subCategory === 'Tea Base');

  const foodNasi = PRODUCTS.filter((p) => p.category === 'makanan' && p.subCategory === 'Nasi');
  const foodMie = PRODUCTS.filter((p) => p.category === 'makanan' && p.subCategory === 'Mie');
  const foodCemilan = PRODUCTS.filter((p) => p.category === 'makanan' && p.subCategory === 'Cemilan');

  return (
    <section id="menu" className="w-full py-8 sm:py-16 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header — Spacious Editorial Layout (Solves Cramped Typography Bug in Gambar 1) */}
        <div className="mb-10 text-left">
          
          {/* Top Promotional Kicker & Voucher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-turquoise" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-turquoise font-bold">
              KURASI RASA &bull; SEDUHAN ASLI KEDAI
            </span>
            <span className="text-espresso/25">&bull;</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11px] text-espresso/80 bg-[#ede4d8] px-2.5 py-0.5 rounded-full border border-espresso/15">
              <Sparkles className="w-3 h-3 text-turquoise" />
              <span>VOUCHER: <strong className="text-turquoise font-bold">SEKATA10</strong> (DISKON 10%)</span>
            </span>
          </div>

          {/* Generous Full-Width Headline (Never wraps single words) */}
          <h2 className="font-sans font-black text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.02] text-espresso tracking-[-0.03em] uppercase mb-3 max-w-4xl">
            Diseduh dengan Niat,{' '}
            <span className="text-turquoise italic font-bold">
              Dinikmati dengan Santai.
            </span>
          </h2>

          {/* Clear Supporting Subtitle */}
          <p className="text-[14px] sm:text-[16px] font-sans text-[#6b584f] max-w-2xl leading-relaxed">
            Dari racikan manual brew Nusantara dan espresso legit, hingga minuman buah dingin serta camilan hangat. Pilih tampilan kartu foto atau papan menu kedai lengkap di bawah.
          </p>

          {/* Dedicated Controls Toolbar (View Switcher + Category Filters) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 pt-6 border-t border-espresso/15">
            
            {/* View Mode Switcher (Kartu Foto vs Papan Menu Kedai) */}
            <div className="inline-flex items-center bg-[#ede4d8] p-1 rounded-full border border-espresso/15 shadow-inner self-start">
              <motion.button
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-[12.5px] font-semibold transition-colors duration-200 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-cream text-espresso shadow-sm'
                    : 'text-[#6b584f] hover:text-espresso'
                }`}
                aria-label="Tampilan Kartu Foto"
              >
                <LayoutGrid className="w-3.5 h-3.5 stroke-[2]" />
                <span>Kartu Foto</span>
              </motion.button>

              <motion.button
                onClick={() => setViewMode('board')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-[12.5px] font-semibold transition-colors duration-200 cursor-pointer ${
                  viewMode === 'board'
                    ? 'bg-espresso text-cream shadow-sm'
                    : 'text-[#6b584f] hover:text-espresso'
                }`}
                aria-label="Tampilan Papan Menu Kedai"
              >
                <List className="w-3.5 h-3.5 stroke-[2]" />
                <span>Papan Menu Kedai</span>
              </motion.button>
            </div>

            {/* Category Filter Tabs (Only relevant in grid mode) */}
            {viewMode === 'grid' && (
              <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 max-w-full -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
                {CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsExpanded(false);
                    }}
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`text-[11px] font-mono uppercase tracking-[0.08em] px-3.5 py-2 rounded-full border font-semibold whitespace-nowrap transition-colors duration-200 flex-shrink-0 cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-turquoise text-cream border-turquoise shadow-sm'
                        : 'bg-cream/80 text-espresso border-espresso/15 hover:border-espresso hover:bg-cream'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* 
          ======================================================================
          VIEW MODE 1: KARTU FOTO (Grid 2 Kolom di Mobile, 3 Kolom di Desktop)
          Solusi anti-scroll kepanjangan: Tampil rapi & proporsional di semua layar
          ======================================================================
        */}
        {viewMode === 'grid' && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {displayedCards.map((product) => {
                const isJustAdded = recentlyAddedId === product.id;
                const isSelected = selectedProductId === product.id;

                return (
                  <div
                    key={product.id}
                    onClick={() => handleCardClick(product)}
                    className={`card-product p-3 sm:p-5 flex flex-col justify-between group cursor-pointer transition-all duration-200 ease-out rounded-[10px] sm:rounded-[12px] border ${
                      isSelected
                        ? 'bg-[#e8f5f5] border-turquoise shadow-md ring-2 ring-turquoise'
                        : 'bg-linen hover:bg-cream hover:border-turquoise/60 hover:shadow-[0_8px_24px_rgba(82,44,37,0.08)]'
                    }`}
                  >
                    <div>
                      {/* Top Header: SubCategory */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="font-mono text-[9px] sm:text-[10px] text-coffee-dust uppercase tracking-[0.08em] font-medium self-start">
                          // {product.subCategory.toUpperCase()}
                        </span>
                        {product.temperatures && product.temperatures.length > 0 && (
                          <span className="text-[9px] font-mono text-espresso/50 uppercase tracking-wider hidden sm:inline">
                            {product.temperatures.join(' / ')}
                          </span>
                        )}
                      </div>

                      {/* Product Image Frame */}
                      <div className="relative w-full aspect-[4/3.5] rounded-[6px] sm:rounded-[8px] overflow-hidden border-hairline bg-sandstone mb-2 sm:mb-4 shadow-xs">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                        />

                        {product.badge && (
                          <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5">
                            <span className="badge-stamp bg-turquoise text-cream shadow-xs text-[8px] sm:text-[9px]">
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Name & Subtitle */}
                      <h3 className="font-body text-xs sm:text-[17px] font-semibold text-espresso leading-snug mb-1 group-hover:text-turquoise transition-colors truncate sm:whitespace-normal">
                        {product.name}
                      </h3>

                      <p className="hidden sm:block text-[12px] font-body text-coffee-dust leading-relaxed mb-3 line-clamp-2">
                        {product.subtitle}
                      </p>

                      {/* Tasting Notes */}
                      <div className="hidden sm:block mb-3">
                        <div className="flex flex-wrap gap-1">
                          {product.tastingNotes.slice(0, 3).map((note, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-body bg-cream border-hairline px-2 py-0.5 rounded-[3px] text-espresso"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Clean Price + Action Cluster (Eye Detail + Shopping Bag) */}
                    <div
                      className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-espresso/10 mt-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-coffee-dust hidden sm:block">
                          HARGA
                        </span>
                        <span className="text-xs sm:text-[14px] font-mono font-bold text-espresso tracking-[0.02em]">
                          {formatRupiah(product.price)}
                        </span>
                      </div>

                      {/* Action Icons: Eye (Detail Modal) + Shopping Bag (Add to Cart) */}
                      <div className="flex items-center gap-1.5">
                        <motion.button
                          onClick={() => handleCardClick(product)}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.88 }}
                          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-cream/90 hover:bg-cream border border-espresso/20 text-espresso hover:text-turquoise hover:border-turquoise transition-all duration-200 shadow-xs cursor-pointer"
                          title={`Lihat detail ${product.name}`}
                          aria-label={`Lihat detail ${product.name}`}
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                        </motion.button>

                        <motion.button
                          onClick={(e) => handleAdd(product, e)}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.88 }}
                          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                            isJustAdded
                              ? 'bg-emerald-600 text-cream shadow-emerald-600/30 ring-2 ring-emerald-500/30'
                              : 'bg-turquoise text-cream hover:bg-turquoise-dark shadow-turquoise/25'
                          }`}
                          title={isJustAdded ? 'Tersimpan di keranjang' : `Tambah ${product.name} ke pesanan`}
                          aria-label={`Tambah ${product.name} ke pesanan`}
                        >
                          {isJustAdded ? (
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cream stroke-[2.5]" />
                          ) : (
                            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cream stroke-[2]" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expand / Collapse Button if products > 6 */}
            {filteredProducts.length > 6 && (
              <div className="mt-8 text-center">
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-espresso/25 bg-cream text-espresso hover:bg-espresso hover:text-cream font-mono text-xs uppercase tracking-[0.14em] font-medium shadow-sm transition-colors duration-200 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <span>TAMPILKAN RINGKAS (6 MENU)</span>
                      <ChevronUp className="w-4 h-4 stroke-[1.5]" />
                    </>
                  ) : (
                    <>
                      <span>LIHAT SEMUA ({filteredProducts.length} PILIHAN MENU)</span>
                      <ChevronDown className="w-4 h-4 stroke-[1.5]" />
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        )}

        {/* 
          ======================================================================
          VIEW MODE 2: PAPAN MENU KEDAI (Café Price Board)
          Persis seperti foto menu cetak asli Sekata yang dikirim user:
          Menampilkan seluruh 25+ menu dalam 1 layar desktop tanpa scrolling!
          ======================================================================
        */}
        {viewMode === 'board' && (
          <div className="bg-[#fcf7ef] border-2 border-espresso/15 rounded-[16px] p-6 sm:p-10 shadow-lg relative overflow-hidden">
            
            {/* Board Header Stamp */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b-2 border-espresso/15 text-left">
              <div>
                <span className="font-mono text-[10px] text-burnt-orange tracking-[0.2em] uppercase font-bold block mb-1">
                  // COMMUNAIL SPACE &amp; SLOWBAR
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-espresso">
                  Daftar Rasa &amp; Seduhan Lengkap
                </h3>
              </div>
              <div className="font-mono text-xs text-coffee-dust mt-2 sm:mt-0">
                HARGA DALAM RIBUAN RUPIAH (K)
              </div>
            </div>

            {/* Three Columns: KOPI | BUKAN KOPI | MAKANAN */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-left">
              
              {/* ================= COLUMN 1: KOPI ================= */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b-2 border-turquoise">
                  <Coffee className="w-4 h-4 text-turquoise" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-turquoise tracking-[0.15em] uppercase">
                    KOPI
                  </h4>
                </div>

                {/* Subcategory: KLASIK */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; KLASIK
                  </h5>
                  <div className="space-y-2">
                    {coffeeKlasik.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subcategory: KOPI SUSU */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; KOPI SUSU
                  </h5>
                  <div className="space-y-1.5">
                    {coffeeSusu.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subcategory: KOPI SODA */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; KOPI SODA
                  </h5>
                  <div className="space-y-1.5">
                    {coffeeSoda.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= COLUMN 2: BUKAN KOPI ================= */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b-2 border-turquoise">
                  <CupSoda className="w-4 h-4 text-turquoise" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-turquoise tracking-[0.15em] uppercase">
                    BUKAN KOPI
                  </h4>
                </div>

                {/* Milk Base */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; MILK BASE
                  </h5>
                  <div className="space-y-1.5">
                    {nonCoffeeMilk.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fusion */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; FUSION
                  </h5>
                  <div className="space-y-1.5">
                    {nonCoffeeFusion.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soda Base & Tea Base */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; SODA &amp; TEA BASE
                  </h5>
                  <div className="space-y-1.5">
                    {[...nonCoffeeSoda, ...nonCoffeeTea].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= COLUMN 3: MAKANAN & CEMILAN ================= */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b-2 border-turquoise">
                  <Utensils className="w-4 h-4 text-turquoise" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-turquoise tracking-[0.15em] uppercase">
                    MAKANAN &amp; CEMILAN
                  </h4>
                </div>

                {/* Nasi */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; NASI
                  </h5>
                  <div className="space-y-1.5">
                    {foodNasi.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mie */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; MIE
                  </h5>
                  <div className="space-y-1.5">
                    {foodMie.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cemilan */}
                <div>
                  <h5 className="font-mono text-[11px] text-coffee-dust uppercase tracking-[0.1em] mb-2 font-semibold">
                    &mdash; CEMILAN
                  </h5>
                  <div className="space-y-1.5">
                    {foodCemilan.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        className="group flex items-center justify-between py-1 px-2 rounded-[4px] hover:bg-cream transition-colors cursor-pointer"
                      >
                        <span className="font-body text-sm font-medium text-espresso group-hover:text-turquoise">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-2 border-b border-dotted border-espresso/25" />
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-espresso">
                            {item.price / 1000}
                          </span>
                          <button
                            onClick={(e) => handleAdd(item, e)}
                            className="w-5 h-5 rounded-full bg-cream group-hover:bg-turquoise group-hover:text-cream text-espresso border border-espresso/20 flex items-center justify-center text-xs font-bold transition-all"
                            title="Tambah ke pesanan"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
