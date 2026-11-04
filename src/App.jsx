import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import VideoStorytelling from './components/VideoStorytelling';
import CommunityBoard from './components/CommunityBoard';
import WholesaleSection from './components/WholesaleSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import WholesaleModal from './components/WholesaleModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import { Disc, Sparkles } from 'lucide-react';

export default function App() {
  // Shopping Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('little_amps_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('little_amps_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
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

    // Show toast
    setToastMessage(`ADDED TO DISPATCH: ${item.name.toUpperCase()}`);
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
    <div className="min-h-screen bg-cream paper-texture flex flex-col font-body selection:bg-burnt-orange selection:text-cream">
      
      {/* 1. Giant Hero Video Section at the VERY TOP strictly matching user screenshot & littleampscoffee.com */}
      <HeroSection
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />

      {/* 2. Blue Announcement Bar & Main Navigation pinned right below Hero */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Brand Mission Ribbon (from live littleampscoffee.com) */}
      <section className="w-full bg-linen border-b-hairline py-8 sm:py-12">
        <div className="container-max text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse"></span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em]">
              THE LITTLE AMPS TONE • HARRISBURG, PENNSYLVANIA
            </span>
          </div>
          <p className="font-display text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.15] text-espresso tracking-[-0.04em]">
            &ldquo;At Little Amps Coffee we&rsquo;re on a never ending quest for the perfect tone, constantly sourcing and roasting the best specialty coffees we can find and serving them to our community in Harrisburg, PA and beyond!&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-coffee-dust uppercase">
            <span>&bull; VINTAGE DRUM ROAST</span>
            <span>&bull; DIRECT GROWER TRADE</span>
            <span>&bull; 33⅓ RPM SOUND</span>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Featured Products Bar Pour & Whole Bean Bags */}
        <FeaturedProducts
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Brand Story Editorial Spread */}
        <BrandStory />

        {/* Cinema Video Craft Feature */}
        <VideoStorytelling />

        {/* Community Board Dispatches */}
        <CommunityBoard />

        {/* Wholesale Roasting Program */}
        <WholesaleSection
          onOpenWholesaleModal={() => setIsWholesaleOpen(true)}
        />

        {/* Café Locations, Tasting Rooms & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenWholesale={() => setIsWholesaleOpen(true)} />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Wholesale Inquiry Modal */}
      <WholesaleModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={handleQuickView}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Monospace Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-espresso text-cream border-hairline px-4 py-3 rounded-[4px] shadow-none flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-burnt-orange animate-ping"></span>
            <span className="font-mono text-xs uppercase tracking-[0.05em]">
              {toastMessage}
            </span>
            <button
              onClick={() => {
                setToastMessage(null);
                setIsCartOpen(true);
              }}
              className="ml-2 text-burnt-orange hover:underline font-mono text-xs uppercase tracking-[0.05em]"
            >
              VIEW CART &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
