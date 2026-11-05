import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle, Tag, Truck, MessageCircle } from 'lucide-react';
import { formatRupiah } from '../data/products';

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
  const [grindPreference, setGrindPreference] = useState('Biji Utuh / Standar');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const freeDeliveryThreshold = 50000;
  const deliveryFee = discountedSubtotal >= freeDeliveryThreshold || discountedSubtotal === 0 ? 0 : 8000;
  const finalTotal = discountedSubtotal + deliveryFee;

  const amountToFreeDelivery = Math.max(0, freeDeliveryThreshold - discountedSubtotal);
  const progressPercent = Math.min(100, (discountedSubtotal / freeDeliveryThreshold) * 100);

  const applyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'SEKATA10') {
      setDiscountPercent(10);
      setPromoApplied('SEKATA10 (DISKON 10%)');
      setPromoCode('');
    } else if (code === 'KECILBERTUMBUH') {
      setDiscountPercent(15);
      setPromoApplied('KECILBERTUMBUH (DISKON 15%)');
      setPromoCode('');
    } else {
      setPromoError('Kode tidak valid. Coba SEKATA10 atau KECILBERTUMBUH');
    }
  };

  const handleCheckout = () => {
    const num = `SKT-${Math.floor(100000 + Math.random() * 900000)}`;
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

  // Build WhatsApp message
  const waItemsText = cartItems
    .map((item) => `- ${item.quantity}x ${item.name} (${item.size}${item.temperature ? ', ' + item.temperature : ''}): ${formatRupiah(item.price * item.quantity)}`)
    .join('%0A');
  const waUrl = `https://wa.me/6283125525115?text=Halo%20Sekata%20Coffee,%20saya%20mau%20pesan:%0A${waItemsText}%0A%0ACatatan:%20${encodeURIComponent(grindPreference)}%0ATotal:%20${encodeURIComponent(formatRupiah(finalTotal))}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream border-l-hairline shadow-none flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-4 border-b-hairline bg-linen flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-turquoise" />
              <h2 className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em]">
                DAFTAR PESANAN ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-espresso hover:text-turquoise border-hairline rounded-[3px] bg-cream"
              aria-label="Tutup keranjang"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Pengantaran Gratis Tanjungpinang Bar */}
          <div className="px-6 py-3 bg-cream border-b-hairline text-xs font-mono">
            <div className="flex items-center justify-between mb-1.5 text-coffee-dust">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-turquoise" />
                {amountToFreeDelivery === 0
                  ? 'GRATIS ONGKIR AREA TANJUNGPINANG AKTIF'
                  : `KURANG ${formatRupiah(amountToFreeDelivery)} UNTUK GRATIS ONGKIR`}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-linen rounded-full overflow-hidden border-hairline">
              <div
                className="h-full bg-turquoise transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-8 h-8 text-coffee-dust mx-auto opacity-50" />
                <p className="font-mono text-xs uppercase tracking-[0.05em] text-espresso">
                  PESANAN KAMU MASIH KOSONG
                </p>
                <p className="font-body text-xs text-coffee-dust max-w-xs mx-auto">
                  Pilih seduhan kopi segar, minuman bar, atau biji kopi favoritmu dari menu Sekata.
                </p>
                <div className="pt-2">
                  <button onClick={onClose} className="btn-filled text-xs py-2 px-4 bg-turquoise border-turquoise hover:bg-turquoise-dark">
                    JELAJAHI MENU SEKATA
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
                      {formatRupiah(item.price * item.quantity)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border-hairline rounded-[3px] bg-cream">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-espresso hover:text-turquoise"
                          aria-label="Kurangi jumlah"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-espresso hover:text-turquoise"
                          aria-label="Tambah jumlah"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-coffee-dust hover:text-burnt-orange transition-colors"
                        title="Hapus item"
                        aria-label="Hapus item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t-hairline bg-linen space-y-4">
              
              <div>
                <label className="block text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                  CATATAN SEDUHAN / GILINGAN:
                </label>
                <select
                  value={grindPreference}
                  onChange={(e) => setGrindPreference(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                >
                  <option value="Biji Utuh / Standar">Biji Utuh / Standar Seduhan</option>
                  <option value="Giling Halus (Espresso / Mokapot)">Giling Halus (Espresso / Mokapot)</option>
                  <option value="Giling Sedang (V60 / Tubruk)">Giling Sedang (V60 / Tubruk)</option>
                  <option value="Giling Kasar (Cold Brew / French Press)">Giling Kasar (Cold Brew)</option>
                  <option value="Less Sugar / Sedang">Seduhan Manis Sedang</option>
                </select>
              </div>

              {/* Promo Form */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="KODE VOUCHER (SEKATA10)"
                  className="flex-1 px-2.5 py-1.5 text-xs font-mono uppercase bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                />
                <button type="submit" className="btn-ghost text-xs py-1.5 px-3 hover:border-turquoise hover:text-turquoise">
                  GUNAKAN
                </button>
              </form>

              {promoApplied && (
                <p className="text-[11px] font-mono text-turquoise flex items-center gap-1 font-medium">
                  <Tag className="w-3 h-3" /> VOUCHER AKTIF: {promoApplied}
                </p>
              )}
              {promoError && (
                <p className="text-[11px] font-mono text-burnt-orange">
                  {promoError}
                </p>
              )}

              {/* Summary */}
              <div className="space-y-1 text-xs font-mono pt-2 border-t-hairline">
                <div className="flex justify-between text-coffee-dust">
                  <span>SUBTOTAL</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-turquoise font-medium">
                    <span>POTONGAN ({discountPercent}%)</span>
                    <span>-{formatRupiah(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-coffee-dust">
                  <span>ONGKIR AREA TANJUNGPINANG</span>
                  <span>{deliveryFee === 0 ? 'GRATIS' : formatRupiah(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-espresso pt-2 border-t-hairline">
                  <span>TOTAL PESANAN</span>
                  <span>{formatRupiah(finalTotal)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="btn-filled w-full py-3 text-xs tracking-[0.05em] flex items-center justify-center gap-2 bg-turquoise border-turquoise hover:bg-turquoise-dark rounded-[6px] transition-all duration-200 ease-out active:scale-[0.97]"
                >
                  <span>RINGKASAN &amp; KONFIRMASI PESANAN</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full py-2.5 text-xs tracking-[0.05em] flex items-center justify-center gap-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-cream rounded-[6px] transition-all duration-200 ease-out active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                  <span>KIRIM KE WHATSAPP BARISTA</span>
                </a>
              </div>

              <p className="text-[10px] font-mono text-coffee-dust text-center uppercase tracking-[0.05em]">
                SEKATA COFFEE &amp; SLOWBAR &bull; TANJUNGPINANG
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Review Dialog */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-cream border-hairline rounded-[8px] overflow-hidden z-10 p-6 sm:p-8">
            {orderCompleted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-turquoise mx-auto" />
                <h3 className="font-display text-[28px] text-espresso">
                  Pesanan Berhasil Dicatat.
                </h3>
                <p className="text-xs font-mono text-coffee-dust uppercase">
                  NOMOR STRUK: {orderNumber}
                </p>
                <p className="text-xs font-body text-coffee-dust max-w-sm mx-auto">
                  Terima kasih! Barista Sekata akan segera menyiapkan seduhan pesananmu. Sampai jumpa di kedai atau tunggu pengantaran di lokasimu!
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 border-b-hairline mb-4">
                  <span className="badge-stamp bg-turquoise text-cream">STRUK PESANAN</span>
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-1 text-espresso hover:text-turquoise"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-display text-[24px] text-espresso mb-1">
                  Konfirmasi Pesanan Sekata.
                </h3>
                <p className="text-xs font-mono text-coffee-dust mb-4">
                  CATATAN: {grindPreference.toUpperCase()}
                </p>

                <div className="max-h-48 overflow-y-auto space-y-2 mb-4 p-3 bg-linen rounded-[4px] border-hairline text-xs font-mono">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-espresso truncate pr-2">
                        {item.quantity}x {item.name} ({item.size})
                      </span>
                      <span className="text-coffee-dust">
                        {formatRupiah(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-linen rounded-[4px] border-hairline text-xs font-mono space-y-1 mb-6">
                  <div className="flex justify-between">
                    <span className="text-coffee-dust">SUBTOTAL:</span>
                    <span>{formatRupiah(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-turquoise font-medium">
                      <span>DISKON:</span>
                      <span>-{formatRupiah(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-coffee-dust">ONGKIR TANJUNGPINANG:</span>
                    <span>{deliveryFee === 0 ? 'GRATIS' : formatRupiah(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-espresso pt-1 border-t-hairline">
                    <span>TOTAL AKHIR:</span>
                    <span>{formatRupiah(finalTotal)}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="btn-ghost flex-1 py-2.5 text-xs"
                  >
                    KEMBALI KE KERANJANG
                  </button>
                  <button
                    onClick={finalizeOrder}
                    className="btn-filled flex-1 py-2.5 text-xs bg-turquoise border-turquoise hover:bg-turquoise-dark"
                  >
                    SELESAIKAN PESANAN
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
