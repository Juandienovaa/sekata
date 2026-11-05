import React, { useState } from 'react';
import { Eye, Plus, Check, LayoutGrid, List, Sparkles, ChevronDown, ChevronUp, Coffee, Utensils, CupSoda } from 'lucide-react';
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
    <section id="menu" className="w-full py-12 sm:py-20 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header (Image 5 Human Typography) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b-hairline">
          <div>
            <h2 className="font-display text-[32px] sm:text-[44px] leading-[0.95] text-espresso tracking-[-0.05em] mb-2">
              Temukan Rasa yang Kamu Suka.
            </h2>
            <p className="text-[14px] font-body text-[#6b584f] max-w-xl">
              Pilih tampilan kartu foto ringkas atau papan menu kedai lengkap untuk melihat harga dan karakter seduhan.
            </p>
          </div>

          {/* Controls: Category Tabs + View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            
            {/* View Mode Switcher (Kartu Foto vs Papan Menu Kedai) */}
            <div className="flex items-center bg-linen p-1 rounded-[8px] border border-hairline shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-body text-[13px] transition-all duration-150 active:scale-[0.97] ${
                  viewMode === 'grid'
                    ? 'bg-cream text-espresso shadow-xs font-medium border border-espresso/15'
                    : 'text-[#6b584f] hover:text-espresso'
                }`}
                aria-label="Tampilan Kartu Foto"
              >
                <LayoutGrid className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Kartu Foto</span>
              </button>

              <button
                onClick={() => setViewMode('board')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] font-body text-[13px] transition-all duration-150 active:scale-[0.97] ${
                  viewMode === 'board'
                    ? 'bg-espresso text-cream shadow-xs font-medium'
                    : 'text-[#6b584f] hover:text-espresso'
                }`}
                aria-label="Tampilan Papan Menu Kedai"
              >
                <List className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Papan Menu Kedai</span>
              </button>
            </div>

            {/* Category Filter Tabs (Only relevant in grid mode) */}
            {viewMode === 'grid' && (
              <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 max-w-full -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsExpanded(false); // Reset to 6 cards on category switch
                    }}
                    className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[4px] border font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                      activeCategory === cat.id
                        ? 'bg-turquoise text-cream border-turquoise shadow-sm'
                        : 'bg-cream text-espresso border-hairline hover:border-turquoise hover:bg-linen'
                    }`}
                  >
                    {cat.label}
                  </button>
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
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="badge-stamp bg-cream text-coffee-dust border-hairline group-hover:text-espresso text-[9px] sm:text-[10px] self-start">
                          {product.categoryLabel}
                        </span>
                        <span className="text-xs sm:text-[13px] font-mono font-bold text-amber tracking-[0.05em]">
                          {formatRupiah(product.price)}
                        </span>
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

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t-hairline mt-auto" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => handleCardClick(product)}
                        className="btn-quickview py-1 sm:py-1.5 flex items-center justify-center gap-1 text-[10px] sm:text-xs group-hover:bg-turquoise group-hover:border-turquoise transition-all duration-200 active:scale-[0.97]"
                        aria-label={`Lihat detail ${product.name}`}
                      >
                        <Eye className="w-3 h-3 stroke-[1.5]" />
                        <span className="hidden xs:inline">DETAIL</span>
                      </button>

                      <button
                        onClick={(e) => handleAdd(product, e)}
                        className="btn-filled py-1 sm:py-1.5 flex items-center justify-center gap-1 text-[10px] sm:text-xs bg-turquoise border-turquoise hover:bg-turquoise-dark active:scale-[0.97] transition-all duration-200 font-bold"
                        aria-label={`Tambah ${product.name} ke pesanan`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3 h-3 text-cream stroke-[1.5]" />
                            <span>OK!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3 stroke-[1.5]" />
                            <span>PESAN</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expand / Collapse Button if products > 6 */}
            {filteredProducts.length > 6 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-espresso/25 bg-cream text-espresso hover:bg-espresso hover:text-cream font-mono text-xs uppercase tracking-[0.14em] font-medium shadow-sm transition-all duration-200 ease-out active:scale-[0.97]"
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
                </button>
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

                {/* Special Hand-drawn Barista Stamp Badges */}
                <div className="pt-4 border-t border-dashed border-espresso/20 grid grid-cols-2 gap-2">
                  <div className="border border-dashed border-turquoise/50 bg-turquoise/5 rounded-[6px] p-2.5 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-turquoise font-bold block">
                      KOPI FILTER
                    </span>
                    <span className="font-mono text-[9px] text-coffee-dust block">
                      TANYA BARISTA
                    </span>
                  </div>
                  <div className="border border-dashed border-burnt-orange/50 bg-burnt-orange/5 rounded-[6px] p-2.5 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-burnt-orange font-bold block">
                      RACIK SENDIRI
                    </span>
                    <span className="font-mono text-[9px] text-coffee-dust block">
                      TANYA BARISTA
                    </span>
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
