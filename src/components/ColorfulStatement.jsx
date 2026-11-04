import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ColorfulStatement() {
  const sectionRef = useRef(null);

  // Track scroll position of this section relative to viewport
  // ['start end'] = when top of section enters bottom of viewport
  // ['end start'] = when bottom of section leaves top of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Smooth Fade In & Fade Out ("Fade Keluar Masuk")
  // 0 -> 0.25: Fade in from bottom
  // 0.25 -> 0.75: Fully visible and crisp in center of viewport
  // 0.75 -> 1.0: Fade out towards top
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [50, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.96, 1, 1, 0.96]);

  // Subtle staggered highlights for the colored phrases as you scroll
  const highlight1 = useTransform(scrollYProgress, [0.15, 0.30], [0.8, 1]);
  const highlight2 = useTransform(scrollYProgress, [0.25, 0.40], [0.8, 1]);
  const highlight3 = useTransform(scrollYProgress, [0.35, 0.50], [0.8, 1]);
  const highlight4 = useTransform(scrollYProgress, [0.45, 0.60], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-cream border-b-hairline py-16 sm:py-24 overflow-hidden select-none"
    >
      <div className="container-max px-4 sm:px-8">
        
        {/* Animated Container with Smooth Fade In & Fade Out ("Fade Keluar Masuk") */}
        <motion.div
          style={{ opacity, y: translateY, scale }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* Main Statement with Colorful Inline Styling matching User's Screenshot */}
          <div className="lg:col-span-9 text-left">
            
            {/* Top Indicator Stamp */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono text-coffee-dust uppercase tracking-[0.1em] font-semibold">
                SEKATA COFFEE &amp; SLOWBAR &bull; TANJUNGPINANG, KEPRI
              </span>
            </div>

            {/* Statement Text with Authentic Colored Keyword Highlighting */}
            <p className="font-display text-[25px] sm:text-[34px] lg:text-[40px] leading-[1.24] text-espresso tracking-[-0.04em]">
              Di{' '}
              <motion.span
                style={{ opacity: highlight1 }}
                className="text-burnt-orange font-medium inline-block hover:scale-[1.02] transition-transform"
              >
                Sekata Coffee &amp; Slowbar
              </motion.span>{' '}
              kami ada dalam pencarian tanpa henti untuk{' '}
              <motion.span
                style={{ opacity: highlight2 }}
                className="text-turquoise font-medium inline-block hover:scale-[1.02] transition-transform"
              >
                seduhan yang bermakna
              </motion.span>
              , dengan sabar memilih serta menyangrai{' '}
              <motion.span
                style={{ opacity: highlight3 }}
                className="text-amber font-medium inline-block hover:scale-[1.02] transition-transform"
              >
                biji kopi pilihan
              </motion.span>{' '}
              yang kami temukan, lalu menyajikannya hangat bagi{' '}
              <motion.span
                style={{ opacity: highlight4 }}
                className="text-burnt-orange font-medium inline-block hover:scale-[1.02] transition-transform"
              >
                komunitas dan sahabat
              </motion.span>{' '}
              di{' '}
              <span className="text-dusty-blue font-medium inline-block hover:scale-[1.02] transition-transform">
                Tanjungpinang
              </span>{' '}
              dan sekitarnya!
            </p>

            {/* Bottom Meta Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-[13px] font-mono text-coffee-dust uppercase tracking-[0.06em]">
              <span className="text-turquoise font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                MEJA SLOWBAR INTERAKTIF
              </span>
              <span className="text-burnt-orange font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" />
                TEMPAT BERCERITA
              </span>
              <span className="text-amber font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                #KECILBERTUMBUH
              </span>
            </div>

          </div>

          {/* Right: Sekata Mascot Card (Persis Gambar Screenshot User) */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="p-5 sm:p-6 bg-linen rounded-[16px] border border-espresso/15 shadow-sm inline-flex flex-col items-center text-center w-full max-w-[240px] hover:shadow-md transition-shadow">
              <img
                src="/logo.png"
                alt="Maskot Sekata"
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="mt-3 text-[10px] sm:text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em] font-semibold">
                &ldquo;MARI BERTEMU &amp; BERCERITA&rdquo;
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
