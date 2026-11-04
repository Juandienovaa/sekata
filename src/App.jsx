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
import { ShoppingBag, Check } from 'lucide-react';

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

  const scrollToShop = () => {
    const el = document.getElementById('shop');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream paper-texture flex flex-col font-body selection:bg-burnt-orange selection:text-cream">
      {/* Site-wide Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onShopClick={scrollToShop}
          onLearnMoreClick={scrollToAbout}
        />

        {/* Featured Products Bar Pour */}
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
