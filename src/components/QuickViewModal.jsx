import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Check, Flame, Coffee, Sparkles } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedTemp, setSelectedTemp] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedTemp(product.temperatures[0] || '');
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  // Calculate price if size has an upcharge
  let currentPrice = product.price;
  if (selectedSize.includes('+$14.00')) currentPrice += 14.00;
  if (selectedSize.includes('+$9.00')) currentPrice += 9.00;
  if (selectedSize.includes('+$5.00')) currentPrice += 5.00;

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${selectedSize}-${selectedTemp}`,
      productId: product.id,
      name: product.name,
      price: currentPrice,
      image: product.image,
      size: selectedSize,
      temperature: selectedTemp,
      quantity: quantity
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-cream border-hairline rounded-[8px] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b-hairline bg-linen">
          <div className="flex items-center gap-2">
            <span className="badge-stamp bg-espresso text-cream">PRODUCT SPEC SHEET</span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              {product.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-espresso hover:text-burnt-orange border-hairline rounded-[3px] bg-cream"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Product Image */}
            <div>
              <div className="w-full aspect-[4/5] rounded-[8px] overflow-hidden border-hairline bg-sandstone relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="badge-stamp bg-burnt-orange text-cream">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Monospace Origin / Lot Spec */}
              <div className="mt-4 p-4 bg-linen rounded-[6px] border-hairline text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-coffee-dust">ORIGIN:</span>
                  <span className="text-espresso font-medium text-right">{product.details.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">PROCESS:</span>
                  <span className="text-espresso font-medium text-right">{product.details.process}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">ELEVATION:</span>
                  <span className="text-espresso font-medium text-right">{product.details.elevation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">BREW METHOD:</span>
                  <span className="text-espresso font-medium text-right">{product.details.brewMethod}</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Controls */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-espresso">
                    {product.name}
                  </h3>
                  <span className="text-[20px] font-mono font-medium text-amber">
                    ${(currentPrice * quantity).toFixed(2)}
                  </span>
                </div>

                <p className="text-[13px] font-body text-coffee-dust leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Tasting Notes */}
                <div className="mb-5">
                  <p className="text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                    KEY FLAVOR ACCENTS:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-body bg-linen border-hairline px-2 py-0.5 rounded-[3px] text-espresso"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sensory Dots: Roastness, Acidity, Complexity */}
                <div className="p-3.5 bg-linen rounded-[6px] border-hairline mb-5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-coffee-dust">ROAST INTENSITY ({product.roastTitle})</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <span
                          key={lvl}
                          className={`w-2.5 h-2.5 rounded-full border border-espresso ${
                            lvl <= product.roastLevel ? 'bg-espresso' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-coffee-dust">BRIGHTNESS / ACIDITY</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <span
                          key={lvl}
                          className={`w-2.5 h-2.5 rounded-full border border-burnt-orange ${
                            lvl <= product.acidity ? 'bg-burnt-orange' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-coffee-dust">COMPLEXITY / BODY</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <span
                          key={lvl}
                          className={`w-2.5 h-2.5 rounded-full border border-amber ${
                            lvl <= product.complexity ? 'bg-amber' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Temperature Selector */}
                {product.temperatures.length > 1 && (
                  <div className="mb-4">
                    <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                      TEMPERATURE PREFERENCE:
                    </label>
                    <div className="flex gap-2">
                      {product.temperatures.map((temp) => (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setSelectedTemp(temp)}
                          className={`text-xs font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[3px] border transition-colors ${
                            selectedTemp === temp
                              ? 'bg-espresso text-cream border-espresso'
                              : 'bg-linen text-espresso border-hairline hover:border-espresso'
                          }`}
                        >
                          {temp}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                <div className="mb-6">
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                    SELECT SIZE / VOLUME:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[3px] border transition-colors ${
                          selectedSize === size
                            ? 'bg-espresso text-cream border-espresso'
                            : 'bg-linen text-espresso border-hairline hover:border-espresso'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity Stepper & Add Button */}
              <div className="pt-4 border-t-hairline">
                <div className="flex items-center gap-3">
                  {/* Stepper */}
                  <div className="flex items-center border-hairline rounded-[3px] bg-linen">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-2 text-espresso hover:text-burnt-orange focus:outline-none"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-medium text-espresso">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-2 text-espresso hover:text-burnt-orange focus:outline-none"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={handleAdd}
                    className="flex-1 btn-filled py-3 flex items-center justify-center gap-2"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-cream" />
                        <span>ADDED TO DISPATCH CART</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>ADD TO CART — ${(currentPrice * quantity).toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
