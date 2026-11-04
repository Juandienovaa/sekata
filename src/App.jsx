import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ColorfulStatement from './components/ColorfulStatement';
import GrandOpeningCountdown from './components/GrandOpeningCountdown';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import TheSpace from './components/TheSpace';
import WholesaleSplitSection from './components/WholesaleSplitSection';
import CommunityBoard from './components/CommunityBoard';
import KecilBertumbuh from './components/KecilBertumbuh';
import ContactSection from './components/ContactSection';
import AnimatedCrowdCanvas from './components/AnimatedCrowdCanvas';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';

export default function App() {
  // Shopping cart with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sekata_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sekata_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Gagal menyimpan pesanan ke localStorage', e);
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.id === item.id || (i.productId === item.id && i.size === item.size && i.temperature === item.temperature)
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      } else {
        return [...prevItems, item];
      }
    });

    setToastMessage(`DITAMBAHKAN KE PESANAN: ${item.name.toUpperCase()}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream paper-texture flex flex-col font-body selection:bg-turquoise selection:text-cream">
      
      {/* NAVBAR SELALU TERLIHAT (TRANSPARENT AT TOP, GLASSMORPHISM ON SCROLL) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* SECTION 1 — HERO FULLSCREEN DESKTOP */}
      <HeroSection
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />

      {/* PERNYATAAN WARNA-WARNI KREATIF (SESUAI REQUEST USER) */}
      <ColorfulStatement />

      <main className="flex-1">
        {/* SECTION COUNTDOWN GRAND OPENING JUMAT MINGGU INI */}
        <GrandOpeningCountdown />

        {/* SECTION KOPI & MENU LENGKAP: "Temukan Rasa yang Kamu Suka." */}
        <FeaturedProducts
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* SECTION FILOSOFI SEKATA: "Bukan Hanya Tentang Kopi." */}
        <BrandStory />

        {/* SECTION 5 — RUANG: "Ruang untuk Menikmati Waktu." */}
        <TheSpace onQuickView={handleQuickView} />

        {/* SECTION WHOLESALE SPLIT — PERSIS SEPERTI SCREENSHOT USER */}
        <WholesaleSplitSection />

        {/* SECTION 6 — CERITA & KOMUNITAS: "Setiap Pertemuan Punya Cerita." */}
        <CommunityBoard />

        {/* SECTION 7 — #KECILBERTUMBUH: "Kecil Bertumbuh, Bersama Menjadi Berarti." */}
        <KecilBertumbuh />

        {/* SECTION 8 — KUNJUNGI KAMI: "Yuk, Bertemu di Sekata." */}
        <ContactSection />

        {/* ANIMATED LIVING CROWD — KARIKATUR WARGA BERJALAN INTERAKTIF */}
        <AnimatedCrowdCanvas height="240px" />

        {/* SECTION INSTAGRAM FEED & REEL — TEPAT SEBELUM FOOTER */}
        <InstagramGrid />
      </main>

      {/* SECTION 9 — FOOTER DENGAN TAGLINE LENGKAP */}
      <Footer />

      {/* MODAL DETAIL PRODUK */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* MODAL PENCARIAN MENU */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={handleQuickView}
      />

      {/* DRAWER KERANJANG PESANAN DENGAN INTEGRASI WHATSAPP */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* NOTIFIKASI TOAST DENGAN TULISAN INDONESIA */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-espresso text-cream border-hairline px-4 py-3 rounded-[4px] shadow-none flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-turquoise animate-ping"></span>
            <span className="font-mono text-xs uppercase tracking-[0.05em]">
              {toastMessage}
            </span>
            <button
              onClick={() => {
                setToastMessage(null);
                setIsCartOpen(true);
              }}
              className="ml-2 text-turquoise hover:underline font-mono text-xs uppercase tracking-[0.05em] font-medium"
            >
              LIHAT PESANAN &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
