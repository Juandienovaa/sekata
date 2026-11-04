import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection({ onShopClick, onLearnMoreClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <section className="relative w-full border-b-hairline bg-cream overflow-hidden">
      {/* Top Editorial Dispatch Bar */}
      <div className="container-max pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 border-b-hairline">
        <div className="flex items-center gap-3">
          <span className="badge-stamp bg-burnt-orange text-cream">ISSUE N° 44</span>
          <span className="text-[12px] font-mono text-coffee-dust tracking-[0.05em] uppercase">
            SPRING ROAST CATALOGUE • 2026
          </span>
        </div>
        <div className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] hidden sm:block">
          RECORDS SPINNING: 33⅓ RPM • VINTAGE LEVER EXTRACTIONS
        </div>
      </div>

      <div className="container-max py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Lockup & Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Stamp Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange"></span>
              <p className="text-[12px] font-mono uppercase tracking-[0.05em] text-coffee-dust">
                Little Amps Coffee Roasters
              </p>
            </div>

            {/* Main Headline strictly matching DESIGN.md display serif */}
            <h1 className="font-display text-[44px] sm:text-[54px] lg:text-[60px] leading-[0.92] text-espresso tracking-[-0.07em] mb-5">
              Vinyl record sleeve in afternoon sun.
            </h1>

            {/* Body Copy in Inclusive Sans */}
            <p className="font-body text-[15px] sm:text-[16px] leading-[1.65] text-coffee-dust mb-8 max-w-xl">
              Tactile coffees roasted in small batches on cast-iron drums. Poured with patience behind our Harrisburg counter, spun beside curated record crates, and packed in paper sleeves for those who value warm analog rituals.
            </p>

            {/* Action Buttons following DESIGN.md 3px radius printed label aesthetic */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={onShopClick}
                className="btn-filled text-[13px] px-5 py-3 tracking-[0.05em]"
              >
                EXPLORE THE BEANS
              </button>
              <button
                onClick={onLearnMoreClick}
                className="btn-ghost text-[13px] px-5 py-3 tracking-[0.05em]"
              >
                OUR ROAST PHILOSOPHY
              </button>
            </div>

            {/* Monospace Metadata Specs */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-hairline text-left">
              <div>
                <p className="text-[10px] font-mono text-coffee-dust uppercase">ORIGIN SOURCING</p>
                <p className="text-[13px] font-mono text-espresso font-medium mt-1">100% DIRECT</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-coffee-dust uppercase">ROAST METHOD</p>
                <p className="text-[13px] font-mono text-espresso font-medium mt-1">CAST IRON DRUM</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-coffee-dust uppercase">TASTING NOTE</p>
                <p className="text-[13px] font-mono text-amber font-medium mt-1">WARM CARAMEL</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Video Frame */}
          <div className="lg:col-span-7">
            <div className="relative bg-linen p-2 sm:p-3 rounded-[8px] border-hairline">
              {/* Video Tag with supplied herosection.mp4 */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-[6px] border-hairline bg-sandstone">
                <video
                  ref={videoRef}
                  src="/herosection.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video HUD Overlays */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-[3px] border-hairline">
                  <span className="w-2 h-2 rounded-full bg-burnt-orange animate-ping"></span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.05em] text-espresso">
                    REEL: CAFE EXTRACTION BAR
                  </span>
                </div>

                {/* Bottom Video Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-cream/90 backdrop-blur-sm p-1 rounded-[3px] border-hairline">
                  <button
                    onClick={toggleVideoPlay}
                    className="p-1.5 text-espresso hover:text-burnt-orange transition-colors"
                    title={isPlaying ? 'Pause video' : 'Play video'}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={toggleVideoMute}
                    className="p-1.5 text-espresso hover:text-burnt-orange transition-colors"
                    title={isMuted ? 'Unmute video' : 'Mute video'}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Sub-label under video */}
              <div className="flex items-center justify-between mt-2.5 px-1 text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                <span>FILMED ON LOCATION • LEVER ESPRESSO CRAFT</span>
                <span>4K MASTER // 24 FPS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
