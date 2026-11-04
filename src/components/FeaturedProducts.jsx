import React, { useState } from 'react';
import { Eye, Plus, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES, formatRupiah } from '../data/products';

export default function FeaturedProducts({ onQuickView, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

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

  // Dynamic vibrant hover & active color schemes based on beverage category
  const getCategoryColorClasses = (category, isSelected) => {
    if (isSelected) {
      return 'bg-[#e8f5f5] border-turquoise shadow-md ring-2 ring-turquoise -translate-y-1';
    }

    switch (category) {
      case 'slowbar':
        return 'hover:bg-[#eaf5f5] hover:border-turquoise hover:shadow-lg hover:-translate-y-1';
      case 'coffee':
        return 'hover:bg-[#fef3e7] hover:border-burnt-orange hover:shadow-lg hover:-translate-y-1';
      case 'non-coffee':
        return 'hover:bg-[#fcf0f4] hover:border-[#d9658b] hover:shadow-lg hover:-translate-y-1';
      case 'tea':
        return 'hover:bg-[#f7f9e8] hover:border-[#8da435] hover:shadow-lg hover:-translate-y-1';
      case 'beans':
        return 'hover:bg-[#fff7e6] hover:border-amber hover:shadow-lg hover:-translate-y-1';
      default:
        return 'hover:bg-[#fff2e2] hover:border-turquoise hover:shadow-lg hover:-translate-y-1';
    }
  };

  return (
    <section id="menu" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-turquoise text-cream">MENU &amp; PILIHAN</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                SEKATA COFFEE &amp; SLOWBAR TANJUNGPINANG
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.05em] mb-2">
              Temukan Rasa yang Kamu Suka.
            </h2>
            <p className="text-[14px] sm:text-[15px] font-body text-coffee-dust max-w-xl">
              Setiap orang punya selera berbeda. Klik pada menu untuk melihat detail seduhan, karakter rasa, dan pesan langsung.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.05em] px-3.5 py-1.5 rounded-[4px] border font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-turquoise text-cream border-turquoise shadow-sm'
                    : 'bg-linen text-espresso border-hairline hover:border-turquoise hover:bg-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = recentlyAddedId === product.id;
            const isSelected = selectedProductId === product.id;
            const colorClass = getCategoryColorClasses(product.category, isSelected);

            return (
              <div
                key={product.id}
                onClick={() => handleCardClick(product)}
                className={`card-product p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 ${colorClass}`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`badge-stamp border-hairline transition-colors ${
                      isSelected ? 'bg-turquoise text-cream border-turquoise' : 'bg-cream text-coffee-dust group-hover:bg-cream/90 group-hover:text-espresso'
                    }`}>
                      {product.categoryLabel}
                    </span>
                    <span className="text-[13px] font-mono font-bold text-amber tracking-[0.05em] group-hover:scale-105 transition-transform">
                      {formatRupiah(product.price)}
                    </span>
                  </div>

                  {/* Product Image Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-[10px] overflow-hidden border-hairline bg-sandstone mb-5 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />

                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="badge-stamp bg-turquoise text-cream shadow-sm">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Active Selected Stamp */}
                    {isSelected && (
                      <div className="absolute bottom-3 right-3 bg-cream/95 text-turquoise px-2 py-0.5 rounded-[3px] border border-turquoise text-[10px] font-mono font-bold uppercase shadow-sm">
                        TERPILIH ✓
                      </div>
                    )}
                  </div>

                  {/* Name & Subtitle */}
                  <h3 className="font-body text-[18px] sm:text-[20px] font-semibold text-espresso leading-snug mb-1 group-hover:text-turquoise transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-[13px] font-body text-coffee-dust leading-relaxed mb-4">
                    {product.subtitle}
                  </p>

                  {/* Tasting Notes */}
                  <div className="mb-4">
                    <p className="text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                      KARAKTER RASA:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.tastingNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-body bg-cream border-hairline px-2 py-0.5 rounded-[3px] text-espresso group-hover:border-espresso/30 transition-colors"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Roast Profile Bar if beans or coffee */}
                  {product.roastLevel > 0 && (
                    <div className="mb-6 pt-3 border-t-hairline">
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                        <span className="text-coffee-dust">PROFIL SANGRAI</span>
                        <span className="text-espresso font-medium">{product.roastTitle}</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5 h-1.5 w-full bg-cream rounded-full p-0.5 border-hairline">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-full rounded-sm transition-colors ${
                              level <= product.roastLevel ? 'bg-turquoise' : 'bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t-hairline" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => handleCardClick(product)}
                    className="btn-quickview flex items-center justify-center gap-1.5 group-hover:bg-turquoise group-hover:border-turquoise transition-all"
                    aria-label={`Lihat detail ${product.name}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>DETAIL</span>
                  </button>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className="btn-filled flex items-center justify-center gap-1.5 bg-turquoise border-turquoise hover:bg-turquoise-dark active:scale-95 transition-all"
                    aria-label={`Tambah ${product.name} ke pesanan`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cream" />
                        <span>DITAMBAH</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>PESAN +</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
