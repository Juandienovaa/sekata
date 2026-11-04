import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Plus, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function HeroSection({ onAddToCart, onQuickView }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isJustAdded, setIsJustAdded] = useState(false);

  const featuredProduct = PRODUCTS.find((p) => p.id === 'friend-blend') || PRODUCTS[0];

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleQuickAdd = () => {
    onAddToCart({
      id: featuredProduct.id,
      name: featuredProduct.name,
      price: featuredProduct.price,
      image: featuredProduct.image,
      size: featuredProduct.sizes[0],
      temperature: featuredProduct.temperatures[0],
      quantity: 1
    });

    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1500);
  };

  return (
    <div className="w-full bg-[#FEBF6F] p-3 sm:p-4">
      {/* 80vh Giant Hero Frame with 22px border radius matching littleampscoffee.com */}
      <div className="relative w-full h-[62vh] sm:h-[76vh] lg:h-[82vh] min-h-[460px] sm:min-h-[540px] rounded-[22px] overflow-hidden bg-espresso border-2 border-[#FEBF6F]">
        
        {/* Full-bleed Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            src="/herosection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient vignette for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          
          {/* Top-Left: User's Official logo.png */}
          <div className="max-w-[240px] sm:max-w-[340px] lg:max-w-[400px]">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="h-16 sm:h-24 lg:h-32 w-auto object-contain filter drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Bottom Bar: Video Controls on Left, Floating Product Card on Right */}
          <div className="flex items-end justify-between gap-4 mt-auto">
            
            {/* Bottom-Left: Subtle Video Controls */}
            <div className="flex items-center gap-1.5 bg-cream/85 backdrop-blur-md p-1 rounded-[4px] border-hairline">
              <button
                onClick={toggleVideoPlay}
                className="p-1.5 text-espresso hover:text-burnt-orange transition-colors"
                title={isPlaying ? 'Pause video' : 'Play video'}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleVideoMute}
                className="p-1.5 text-espresso hover:text-burnt-orange transition-colors"
                title={isMuted ? 'Unmute video' : 'Mute video'}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="hidden sm:inline-block px-2 text-[10px] font-mono uppercase tracking-[0.05em] text-coffee-dust border-l-hairline">
                LEVER ESPRESSO BAR
              </span>
            </div>

            {/* Bottom-Right: Floating Featured Product Card (as seen on littleampscoffee.com) */}
            <div className="hidden md:flex items-center gap-4 bg-cream/85 backdrop-blur-md p-4 rounded-[8px] border-hairline max-w-[420px] shadow-sm">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-20 h-20 object-cover rounded-[6px] border-hairline bg-linen flex-shrink-0 cursor-pointer"
                onClick={() => onQuickView(featuredProduct)}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="badge-stamp bg-burnt-orange text-cream">
                    {featuredProduct.badge}
                  </span>
                  <span className="text-[12px] font-mono font-medium text-amber">
                    ${featuredProduct.price.toFixed(2)}
                  </span>
                </div>

                <h4
                  onClick={() => onQuickView(featuredProduct)}
                  className="font-display text-[18px] text-espresso leading-snug hover:text-burnt-orange cursor-pointer truncate"
                >
                  {featuredProduct.name}
                </h4>

                <p className="text-[11px] font-body text-coffee-dust truncate mb-2">
                  {featuredProduct.tastingNotes.join(' • ')}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleQuickAdd}
                    className="btn-filled text-[11px] py-1.5 px-3 flex items-center gap-1.5"
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cream" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>QUICK ADD</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onQuickView(featuredProduct)}
                    className="btn-ghost text-[11px] py-1 px-2.5 text-espresso"
                  >
                    SPECS
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
