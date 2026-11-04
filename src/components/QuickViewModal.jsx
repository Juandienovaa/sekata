import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Check, Flame } from 'lucide-react';
import { formatRupiah } from '../data/products';

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

  // Calculate dynamic price adjustments
  let currentPrice = product.price;
  if (selectedSize.includes('+Rp 95.000')) currentPrice += 95000;
  if (selectedSize.includes('+Rp 220.000')) currentPrice += 220000;
  if (selectedSize.includes('+Rp 18.000')) currentPrice += 18000;
  if (selectedSize.includes('+Rp 15.000')) currentPrice += 15000;
  if (selectedSize.includes('+Rp 4.000')) currentPrice += 4000;

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
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl bg-cream border-hairline rounded-[8px] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b-hairline bg-linen">
          <div className="flex items-center gap-2">
            <span className="badge-stamp bg-turquoise text-cream">LEMBAR DETAIL MENU</span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              {product.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-espresso hover:text-turquoise border-hairline rounded-[3px] bg-cream"
            aria-label="Tutup jendela"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Product Image & Origin Spec */}
            <div>
              <div className="w-full aspect-[4/5] rounded-[8px] overflow-hidden border-hairline bg-sandstone relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="badge-stamp bg-turquoise text-cream">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Specification Table */}
              <div className="mt-4 p-4 bg-linen rounded-[6px] border-hairline text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-coffee-dust">ASAL / PRODUSEN:</span>
                  <span className="text-espresso font-medium text-right">{product.details.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">PROSES OLAHAN:</span>
                  <span className="text-espresso font-medium text-right">{product.details.process}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">KETINGGIAN:</span>
                  <span className="text-espresso font-medium text-right">{product.details.elevation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-dust">SEDUHAN SARAN:</span>
                  <span className="text-espresso font-medium text-right">{product.details.brewMethod}</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Controls */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-[26px] sm:text-[32px] leading-tight text-espresso">
                    {product.name}
                  </h3>
                  <span className="text-[18px] sm:text-[20px] font-mono font-medium text-amber">
                    {formatRupiah(currentPrice * quantity)}
                  </span>
                </div>

                <p className="text-[13px] font-body text-coffee-dust leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Tasting Notes */}
                <div className="mb-5">
                  <p className="text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                    CATATAN KARAKTER RASA:
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

                {/* Sensory Dots */}
                {product.roastLevel > 0 && (
                  <div className="p-3.5 bg-linen rounded-[6px] border-hairline mb-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-coffee-dust">TINGKAT SANGRAI ({product.roastTitle})</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <span
                            key={lvl}
                            className={`w-2.5 h-2.5 rounded-full border border-espresso ${
                              lvl <= product.roastLevel ? 'bg-turquoise' : 'bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-coffee-dust">TINGKAT KEASAMAN / SEGAR</span>
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
                      <span className="text-coffee-dust">KEKENTALAN / BODI</span>
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
                )}

                {/* Temperature / Sajian Selector */}
                {product.temperatures.length > 1 && (
                  <div className="mb-4">
                    <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1.5">
                      PILIHAN SAJIAN / SUHU:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.temperatures.map((temp) => (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setSelectedTemp(temp)}
                          className={`text-xs font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[3px] border transition-colors ${
                            selectedTemp === temp
                              ? 'bg-turquoise text-cream border-turquoise'
                              : 'bg-linen text-espresso border-hairline hover:border-turquoise'
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
                    PILIHAN UKURAN / PORSI:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs font-mono uppercase tracking-[0.05em] px-3 py-1.5 rounded-[3px] border transition-colors ${
                          selectedSize === size
                            ? 'bg-turquoise text-cream border-turquoise'
                            : 'bg-linen text-espresso border-hairline hover:border-turquoise'
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
                  <div className="flex items-center border-hairline rounded-[3px] bg-linen">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-2 text-espresso hover:text-turquoise focus:outline-none"
                      aria-label="Kurangi jumlah"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-medium text-espresso">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-2 text-espresso hover:text-turquoise focus:outline-none"
                      aria-label="Tambah jumlah"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className="flex-1 btn-filled py-3 flex items-center justify-center gap-2 bg-turquoise border-turquoise hover:bg-turquoise-dark"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-cream" />
                        <span>DITAMBAHKAN KE DAFTAR PESANAN</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>PESAN SEKARANG &bull; {formatRupiah(currentPrice * quantity)}</span>
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
