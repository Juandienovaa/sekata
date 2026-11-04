import React, { useState } from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function FeaturedProducts({ onQuickView, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleAdd = (product) => {
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
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="shop" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-espresso text-cream">N° 02 — MENU</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                FRESHLY ROASTED & CRAFTED BEVERAGES
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.06em]">
              The Current Bar Pour.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[12px] font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[3px] border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-espresso text-cream border-espresso'
                    : 'bg-linen text-espresso border-hairline hover:border-espresso'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = recentlyAddedId === product.id;

            return (
              <div
                key={product.id}
                className="card-product p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header inside card: Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="badge-stamp bg-linen text-coffee-dust border-hairline">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-amber tracking-[0.05em]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Product Image Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden border-hairline bg-sandstone mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Top overlay badge if present */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="badge-stamp bg-burnt-orange text-cream">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Name */}
                  <h3 className="font-body text-[18px] sm:text-[20px] font-semibold text-espresso leading-snug mb-1">
                    {product.name}
                  </h3>

                  {/* Subtitle / Composition */}
                  <p className="text-[13px] font-body text-coffee-dust leading-relaxed mb-4">
                    {product.subtitle}
                  </p>

                  {/* Tasting Notes */}
                  <div className="mb-4">
                    <p className="text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                      TASTING NOTES:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.tastingNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-body bg-cream border-hairline px-2 py-0.5 rounded-[3px] text-espresso"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Roast Level Indicator */}
                  <div className="mb-6 pt-3 border-t-hairline">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-coffee-dust">ROAST PROFILE</span>
                      <span className="text-espresso font-medium">{product.roastTitle}</span>
                    </div>
                    {/* Visual Segmented Bar */}
                    <div className="grid grid-cols-5 gap-1.5 h-1.5 w-full bg-cream rounded-full p-0.5 border-hairline">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-full rounded-sm transition-colors ${
                            level <= product.roastLevel ? 'bg-espresso' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions: Quick View & Add to Cart */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="btn-quickview flex items-center justify-center gap-1.5"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>QUICK VIEW</span>
                  </button>

                  <button
                    onClick={() => handleAdd(product)}
                    className="btn-filled flex items-center justify-center gap-1.5"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cream" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD +</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout / Roaster Guarantee */}
        <div className="mt-12 p-6 bg-linen rounded-[8px] border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-burnt-orange flex-shrink-0"></span>
            <p className="text-[13px] font-body text-espresso">
              Looking for 5lb bulk bags for your office or wholesale cafe supply?
            </p>
          </div>
          <a
            href="#wholesale"
            className="btn-ghost text-[12px] whitespace-nowrap"
          >
            EXPLORE WHOLESALE PROGRAM
          </a>
        </div>
      </div>
    </section>
  );
}

