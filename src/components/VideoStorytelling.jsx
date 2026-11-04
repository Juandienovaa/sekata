import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Clock, Gauge, Thermometer, Droplets } from 'lucide-react';

export default function VideoStorytelling() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-cream border-b-hairline">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-dusty-blue text-cream">N° 04 — REEL</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                CINEMATIC CRAFT DOCUMENTARY
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.06em]">
              Behind the Bar: The Art of the Pull.
            </h2>
          </div>
          <p className="text-[13px] font-body text-coffee-dust max-w-md">
            Observe the viscosity, the tiger crema, and the exact resistance of our spring-loaded lever grouphead. No shortcuts, just patience in every drop.
          </p>
        </div>

        {/* Video Canvas & Extraction Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main 16:9 Video Player */}
          <div className="lg:col-span-8 bg-linen p-2 sm:p-4 rounded-[8px] border-hairline">
            <div className="relative w-full aspect-video rounded-[6px] overflow-hidden border-hairline bg-sandstone">
              <video
                ref={videoRef}
                src="/herosection.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Timecode & Format Badge */}
              <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-[3px] border-hairline text-[10px] font-mono uppercase tracking-[0.05em] text-espresso flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse"></span>
                <span>00:10 // 4K 24FPS REEL</span>
              </div>

              {/* Bottom Custom Playbar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-[3px] border-hairline">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1 text-espresso hover:text-burnt-orange transition-colors"
                    title={isPlaying ? 'Pause' : 'Play'}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] font-mono text-espresso uppercase tracking-[0.05em]">
                    {isPlaying ? 'PLAYING • LEVER ESPRESSO' : 'PAUSED'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1 text-espresso hover:text-burnt-orange transition-colors"
                    title={isMuted ? 'Unmute' : 'Mute'}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="p-1 text-espresso hover:text-burnt-orange transition-colors"
                    title="Fullscreen"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] px-1">
              <span>LOCATION: LITTLE AMPS MAIN LAB, HARRISBURG</span>
              <span>DIRECTOR: ANTHONY ROSSI</span>
            </div>
          </div>

          {/* Right Column: Dial-In Extraction Log */}
          <div className="lg:col-span-4 bg-linen p-6 rounded-[8px] border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-hairline mb-4">
                <span className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em]">
                  CALIBRATION LOG
                </span>
                <span className="text-[10px] font-mono text-coffee-dust uppercase">
                  BATCH #04.26
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 p-3 bg-cream rounded-[4px] border-hairline">
                  <Thermometer className="w-4 h-4 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-coffee-dust uppercase text-[10px]">WATER TEMPERATURE</p>
                    <p className="text-espresso font-medium text-[13px] mt-0.5">201.5°F PID STABILIZED</p>
                    <p className="text-coffee-dust text-[11px] mt-0.5">Prevents scorching delicate floral aromatics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-cream rounded-[4px] border-hairline">
                  <Gauge className="w-4 h-4 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-coffee-dust uppercase text-[10px]">PEAK GROUP PRESSURE</p>
                    <p className="text-espresso font-medium text-[13px] mt-0.5">9.2 BAR SPRING PROFILE</p>
                    <p className="text-coffee-dust text-[11px] mt-0.5">Declines naturally to 6.5 bar towards tail end.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-cream rounded-[4px] border-hairline">
                  <Clock className="w-4 h-4 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-coffee-dust uppercase text-[10px]">EXTRACTION DURATION</p>
                    <p className="text-espresso font-medium text-[13px] mt-0.5">28 SECONDS FLAT</p>
                    <p className="text-coffee-dust text-[11px] mt-0.5">Yields 42 grams from a 20.0g dry basket.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-hairline">
              <p className="text-[12px] font-body text-coffee-dust italic">
                "Watch how the stream turns from rich chestnut into tiger striping at second 14. That's when the sweetness unlocks."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
