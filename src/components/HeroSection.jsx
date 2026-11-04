import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Plus, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, formatRupiah } from '../data/products';

export default function HeroSection({ onAddToCart, onQuickView }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isJustAdded, setIsJustAdded] = useState(false);

  const featuredProduct = PRODUCTS[0]; // Sekata House Blend

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

  const scrollToSlowbar = () => {
    const el = document.getElementById('slowbar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FEBF6F] p-3 sm:p-4">
      {/* 80vh Giant Hero Frame with 22px border radius */}
      <div className="relative w-full h-[65vh] sm:h-[78vh] lg:h-[84vh] min-h-[480px] sm:min-h-[560px] rounded-[22px] overflow-hidden bg-espresso border-2 border-[#FEBF6F]">
        
        {/* Background Video */}
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
          {/* Vignette Overlay for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/35 pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          
          {/* Top-Left: Sekata Logo & Campaign Headline */}
          <div className="max-w-xl text-left">
            <a href="#" className="inline-block mb-4 sm:mb-6">
              <img
                src="/logo.png"
                alt="Sekata Coffee &amp; Slowbar"
                className="h-16 sm:h-24 lg:h-28 w-auto object-contain filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* Campaign Headline */}
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-cream tracking-[-0.05em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mb-3">
              Setiap Seduhan Punya Cerita.
            </h1>

            {/* Supporting Copy in Natural Indonesian */}
            <p className="font-body text-[14px] sm:text-[16px] leading-[1.6] text-cream/95 max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-6">
              Lebih dari sekadar menikmati kopi. Di Sekata, setiap proses, aroma, dan pertemuan punya ceritanya sendiri.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToSlowbar}
                className="btn-filled text-[12px] sm:text-[13px] px-5 py-3 tracking-[0.05em] bg-turquoise border-turquoise hover:bg-turquoise-dark hover:border-turquoise-dark"
              >
                KENALI SEKATA
              </button>
              <button
                onClick={scrollToMenu}
                className="btn-ghost text-[12px] sm:text-[13px] px-5 py-3 tracking-[0.05em] text-cream border-cream hover:bg-cream/20"
              >
                JELAJAHI MENU
              </button>
            </div>
          </div>

          {/* Bottom Bar: Video Controls & Floating Product Card */}
          <div className="flex items-end justify-between gap-4 mt-auto">
            
            {/* Video Controls */}
            <div className="flex items-center gap-1.5 bg-cream/90 backdrop-blur-md p-1.5 rounded-[4px] border-hairline">
              <button
                onClick={toggleVideoPlay}
                className="p-1.5 text-espresso hover:text-turquoise transition-colors"
                title={isPlaying ? 'Jeda video' : 'Putar video'}
                aria-label={isPlaying ? 'Jeda video' : 'Putar video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleVideoMute}
                className="p-1.5 text-espresso hover:text-turquoise transition-colors"
                title={isMuted ? 'Bunyikan video' : 'Bisukan video'}
                aria-label={isMuted ? 'Bunyikan video' : 'Bisukan video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="hidden sm:inline-block px-2 text-[10px] font-mono uppercase tracking-[0.05em] text-coffee-dust border-l-hairline">
                SLOWBAR DI TANJUNGPINANG
              </span>
            </div>

            {/* Floating Product Card */}
            <div className="hidden md:flex items-center gap-4 bg-cream/90 backdrop-blur-md p-4 rounded-[8px] border-hairline max-w-[420px] shadow-sm">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-20 h-20 object-cover rounded-[6px] border-hairline bg-linen flex-shrink-0 cursor-pointer"
                onClick={() => onQuickView(featuredProduct)}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="badge-stamp bg-turquoise text-cream">
                    {featuredProduct.badge}
                  </span>
                  <span className="text-[12px] font-mono font-medium text-amber">
                    {formatRupiah(featuredProduct.price)}
                  </span>
                </div>

                <h4
                  onClick={() => onQuickView(featuredProduct)}
                  className="font-display text-[18px] text-espresso leading-snug hover:text-turquoise cursor-pointer truncate"
                >
                  {featuredProduct.name}
                </h4>

                <p className="text-[11px] font-body text-coffee-dust truncate mb-2">
                  {featuredProduct.tastingNotes.join(' • ')}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleQuickAdd}
                    className="btn-filled text-[11px] py-1.5 px-3 flex items-center gap-1.5 bg-turquoise border-turquoise hover:bg-turquoise-dark"
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cream" />
                        <span>DITAMBAHKAN</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>PESAN CEPAT</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onQuickView(featuredProduct)}
                    className="btn-ghost text-[11px] py-1 px-2.5 text-espresso"
                  >
                    DETAIL
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
