import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle, Tag, Truck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState('');
  const [promoError, setPromoError] = useState('');
  const [grindPreference, setGrindPreference] = useState('Whole Bean (Standard)');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const shippingFee = discountedSubtotal >= 45 || discountedSubtotal === 0 ? 0 : 5.00;
  const estimatedTax = discountedSubtotal * 0.06;
  const finalTotal = discountedSubtotal + shippingFee + estimatedTax;

  const freeShippingThreshold = 45.00;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - discountedSubtotal);
  const progressPercent = Math.min(100, (discountedSubtotal / freeShippingThreshold) * 100);

  const applyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'VINYL10') {
      setDiscountPercent(10);
      setPromoApplied('VINYL10 (10% OFF)');
      setPromoCode('');
    } else if (code === 'AMPS15') {
      setDiscountPercent(15);
      setPromoApplied('AMPS15 (15% OFF)');
      setPromoCode('');
    } else {
      setPromoError('Invalid code. Try VINYL10 or AMPS15');
    }
  };

  const handleCheckout = () => {
    const num = `LA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(num);
    setCheckoutModalOpen(true);
  };

  const finalizeOrder = () => {
    setOrderCompleted(true);
    setTimeout(() => {
      onClearCart();
      setOrderCompleted(false);
      setCheckoutModalOpen(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream border-l-hairline shadow-none flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="px-6 py-4 border-b-hairline bg-linen flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-burnt-orange" />
              <h2 className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em]">
                DISPATCH CART ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-espresso hover:text-burnt-orange border-hairline rounded-[3px] bg-cream"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Gauge */}
          <div className="px-6 py-3 bg-cream border-b-hairline text-xs font-mono">
            <div className="flex items-center justify-between mb-1.5 text-coffee-dust">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-burnt-orange" />
                {amountToFreeShipping === 0
                  ? 'FREE US SHIPPING UNLOCKED'
                  : `$${amountToFreeShipping.toFixed(2)} AWAY FROM FREE SHIPPING`}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-linen rounded-full overflow-hidden border-hairline">
              <div
                className="h-full bg-burnt-orange transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-8 h-8 text-coffee-dust mx-auto opacity-50" />
                <p className="font-mono text-xs uppercase tracking-[0.05em] text-espresso">
                  YOUR CART IS EMPTY
                </p>
                <p className="font-body text-xs text-coffee-dust max-w-xs mx-auto">
                  Select freshly roasted batches from our bar pour to build your dispatch.
                </p>
                <div className="pt-2">
                  <button onClick={onClose} className="btn-filled text-xs py-2 px-4">
                    BROWSE BEVERAGES & BEANS
                  </button>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-linen rounded-[6px] border-hairline items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-[4px] border-hairline bg-sandstone flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-body text-[14px] font-semibold text-espresso truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-mono text-coffee-dust truncate">
                      {item.size} {item.temperature && `• ${item.temperature}`}
                    </p>
                    <p className="text-[12px] font-mono font-medium text-amber mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Stepper & Trash */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border-hairline rounded-[3px] bg-cream">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-espresso hover:text-burnt-orange"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-espresso hover:text-burnt-orange"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-coffee-dust hover:text-burnt-orange transition-colors"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t-hairline bg-linen space-y-4">
              
              {/* Grind Preference */}
              <div>
                <label className="block text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                  GRIND SPECIFICATION:
                </label>
                <select
                  value={grindPreference}
                  onChange={(e) => setGrindPreference(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                >
                  <option value="Whole Bean (Standard)">Whole Bean (Recommended)</option>
                  <option value="Coarse (French Press / Cold Brew)">Coarse (French Press / Cold)</option>
                  <option value="Medium (Flat Drip / Chemex)">Medium (Flat Drip / Chemex)</option>
                  <option value="Fine (Home Espresso / Aeropress)">Fine (Home Espresso / Aeropress)</option>
                </select>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="PROMO CODE (e.g. VINYL10)"
                  className="flex-1 px-2.5 py-1.5 text-xs font-mono uppercase bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                />
                <button type="submit" className="btn-ghost text-xs py-1.5 px-3">
                  APPLY
                </button>
              </form>

              {promoApplied && (
                <p className="text-[11px] font-mono text-burnt-orange flex items-center gap-1">
                  <Tag className="w-3 h-3" /> APPLIED: {promoApplied}
                </p>
              )}
              {promoError && (
                <p className="text-[11px] font-mono text-burnt-orange">
                  {promoError}
                </p>
              )}

              {/* Calculation Summary */}
              <div className="space-y-1 text-xs font-mono pt-2 border-t-hairline">
                <div className="flex justify-between text-coffee-dust">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-burnt-orange">
                    <span>DISCOUNT ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-coffee-dust">
                  <span>ESTIMATED TAX (PA 6%)</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-coffee-dust">
                  <span>ESTIMATED SHIPPING</span>
                  <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-espresso pt-2 border-t-hairline">
                  <span>TOTAL DISPATCH</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={handleCheckout}
                className="btn-filled w-full py-3 text-xs tracking-[0.05em] flex items-center justify-center gap-2"
              >
                <span>PROCEED TO REVIEW & DISPATCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] font-mono text-coffee-dust text-center uppercase tracking-[0.05em]">
                ROASTED IN HARRISBURG • SHIPPED IN PAPER SLEEVES
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Checkout Review Dialog */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-cream border-hairline rounded-[8px] overflow-hidden z-10 p-6 sm:p-8">
            {orderCompleted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-burnt-orange mx-auto" />
                <h3 className="font-display text-[28px] text-espresso">
                  Dispatch Confirmed.
                </h3>
                <p className="text-xs font-mono text-coffee-dust uppercase">
                  ORDER REFERENCE: {orderNumber}
                </p>
                <p className="text-xs font-body text-coffee-dust max-w-sm mx-auto">
                  Your beans will be roasted on the next cast-iron cycle and packaged in recycled paper sleeves. A confirmation receipt has been generated.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 border-b-hairline mb-4">
                  <span className="badge-stamp bg-burnt-orange text-cream">ORDER SUMMARY</span>
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-1 text-espresso hover:text-burnt-orange"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-display text-[26px] text-espresso mb-1">
                  Ready to Dispatch.
                </h3>
                <p className="text-xs font-mono text-coffee-dust mb-4">
                  GRIND: {grindPreference.toUpperCase()}
                </p>

                <div className="max-h-48 overflow-y-auto space-y-2 mb-4 p-3 bg-linen rounded-[4px] border-hairline text-xs font-mono">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-espresso truncate pr-2">
                        {item.quantity}x {item.name} ({item.size})
                      </span>
                      <span className="text-coffee-dust">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-linen rounded-[4px] border-hairline text-xs font-mono space-y-1 mb-6">
                  <div className="flex justify-between">
                    <span className="text-coffee-dust">SUBTOTAL:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-burnt-orange">
                      <span>DISCOUNT:</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-coffee-dust">SHIPPING:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-espresso pt-1 border-t-hairline">
                    <span>FINAL TOTAL:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="btn-ghost flex-1 py-2.5 text-xs"
                  >
                    RETURN TO CART
                  </button>
                  <button
                    onClick={finalizeOrder}
                    className="btn-filled flex-1 py-2.5 text-xs"
                  >
                    CONFIRM DISPATCH
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

