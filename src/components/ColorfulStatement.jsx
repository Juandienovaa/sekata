import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ColorfulStatement() {
  const containerRef = useRef(null);

  // Track scroll progress through this pinned container (350vh total travel)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Subtle Parallax depth for the underlying video canvas
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.22]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  // Scroll-driven Opacity States (0-25%, 25-50%, 50-75%, 75-100%)
  const opacityState1 = useTransform(scrollYProgress, [0, 0.20, 0.26], [1, 1, 0]);
  const opacityState2 = useTransform(scrollYProgress, [0.22, 0.28, 0.46, 0.52], [0, 1, 1, 0]);
  const opacityState3 = useTransform(scrollYProgress, [0.48, 0.54, 0.71, 0.77], [0, 1, 1, 0]);
  const opacityState4 = useTransform(scrollYProgress, [0.73, 0.79, 1], [0, 1, 1]);

  // Interactive button opacity & translation in the final state (75-100%)
  const buttonOpacity = useTransform(scrollYProgress, [0.78, 0.86, 1], [0, 1, 1]);
  const buttonY = useTransform(scrollYProgress, [0.78, 0.86, 1], [20, 0, 0]);

  // Active step counter
  const stepNumber = useTransform(scrollYProgress, (v) => {
    if (v < 0.25) return '01';
    if (v < 0.50) return '02';
    if (v < 0.75) return '03';
    return '04';
  });

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[360vh] bg-cream select-none"
    >
      {/* 
        STICKY FULLSCREEN VIEWPORT (Locks to screen as user scrolls)
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 
          CANVAS BEHIND THE MASK (The Visual World)
          Physical window reveals this living video of Sekata coffee brewing & community
        */}
        <motion.div
          style={{ scale: videoScale, y: videoY }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <video
            src="/herosection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter contrast-125 brightness-105"
          />
          {/* Subtle warm amber color wash */}
          <div className="absolute inset-0 bg-[#c03001]/10 mix-blend-color pointer-events-none" />
        </motion.div>

        {/* 
          ======================================================================
          MASKED TYPOGRAPHY OVERLAYS
          Concept: Oversized typography as a MASK.
          The text is transparent cutout; outside is solid cream paper (#fff9f2).
          ======================================================================
        */}

        {/* ---------------- STATE 1: 0% – 25% ("SEKATA") ---------------- */}
        <motion.div
          style={{ opacity: opacityState1 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Desktop SVG Mask */}
          <svg
            className="hidden md:block w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-1-desktop">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="52%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="250"
                  fontWeight="bold"
                  letterSpacing="4"
                >
                  SEKATA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-1-desktop)" />
          </svg>

          {/* Mobile SVG Mask */}
          <svg
            className="md:hidden w-full h-full"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-1-mobile">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="150"
                  fontWeight="bold"
                  letterSpacing="2"
                >
                  SEKATA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-1-mobile)" />
          </svg>
        </motion.div>

        {/* ---------------- STATE 2: 25% – 50% ("SEDUHAN BERMAKNA") ---------------- */}
        <motion.div
          style={{ opacity: opacityState2 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Desktop SVG Mask */}
          <svg
            className="hidden md:block w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-2-desktop">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="41%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="170"
                  fontWeight="bold"
                  letterSpacing="3"
                >
                  SEDUHAN
                </text>
                <text
                  x="50%"
                  y="61%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="170"
                  fontWeight="bold"
                  letterSpacing="3"
                >
                  BERMAKNA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-2-desktop)" />
          </svg>

          {/* Mobile SVG Mask */}
          <svg
            className="md:hidden w-full h-full"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-2-mobile">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="43%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="120"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  SEDUHAN
                </text>
                <text
                  x="50%"
                  y="57%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="120"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  BERMAKNA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-2-mobile)" />
          </svg>
        </motion.div>

        {/* ---------------- STATE 3: 50% – 75% ("BERTEMU") ---------------- */}
        <motion.div
          style={{ opacity: opacityState3 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Desktop SVG Mask */}
          <svg
            className="hidden md:block w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-3-desktop">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="52%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="240"
                  fontWeight="bold"
                  letterSpacing="4"
                >
                  BERTEMU
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-3-desktop)" />
          </svg>

          {/* Mobile SVG Mask */}
          <svg
            className="md:hidden w-full h-full"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-3-mobile">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="140"
                  fontWeight="bold"
                  letterSpacing="2"
                >
                  BERTEMU
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-3-mobile)" />
          </svg>
        </motion.div>

        {/* ---------------- STATE 4: 75% – 100% ("MARI BERCERITA" + CTA) ---------------- */}
        <motion.div
          style={{ opacity: opacityState4 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Desktop SVG Mask */}
          <svg
            className="hidden md:block w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-4-desktop">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="160"
                  fontWeight="bold"
                  letterSpacing="3"
                >
                  MARI BERCERITA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-4-desktop)" />
          </svg>

          {/* Mobile SVG Mask */}
          <svg
            className="md:hidden w-full h-full"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-typo-4-mobile">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="40%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="120"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  MARI
                </text>
                <text
                  x="50%"
                  y="52%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="120"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  BERCERITA
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#fff9f2" mask="url(#mask-typo-4-mobile)" />
          </svg>
        </motion.div>

        {/* 
          ======================================================================
          EDITORIAL METADATA & INTERACTIVE ACTION BUTTON
          ======================================================================
        */}
        <div className="absolute inset-0 pointer-events-none p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-20">
          
          {/* Top Row: Brand Label & Live Scroll State Indicator */}
          <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-espresso/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse" />
              <span>SEKATA COFFEE &bull; TANJUNGPINANG</span>
            </span>

            {/* Scroll State Indicator: 01 / 02 / 03 / 04 */}
            <div className="flex items-center gap-1.5 font-bold text-burnt-orange">
              <motion.span>{stepNumber}</motion.span>
              <span className="text-espresso/30">/ 04</span>
            </div>
          </div>

          {/* Center-Bottom: Interactive Button in State 4 (75–100%) */}
          <motion.div
            style={{ opacity: buttonOpacity, y: buttonY }}
            className="w-full flex flex-col items-center justify-center my-auto pt-24 sm:pt-36 pointer-events-none"
          >
            <button
              onClick={scrollToMenu}
              className="pointer-events-auto inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-espresso text-cream hover:bg-burnt-orange font-mono text-xs sm:text-sm uppercase tracking-[0.16em] font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <Sparkles className="w-4 h-4 text-marigold group-hover:rotate-12 transition-transform" />
              <span>JELAJAHI MENU SEKATA</span>
              <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Bottom Row: Poetic Brand Philosophy */}
          <div className="flex items-end justify-between font-mono text-[10px] sm:text-[11px] text-coffee-dust uppercase tracking-[0.12em]">
            <span>#KECILBERTUMBUH &bull; SLOWBAR EXPERIENCE</span>
            <span className="hidden sm:inline">SCROLL TO UNVEIL THE STORY &darr;</span>
          </div>

        </div>

      </div>
    </section>
  );
}
