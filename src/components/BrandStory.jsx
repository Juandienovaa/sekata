import React from 'react';
import { Compass, Music, Flame, Award } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-linen border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-stamp bg-burnt-orange text-cream">N° 03 — MANIFESTO</span>
          <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
            THE LITTLE AMPS ETHOS • ROASTED ON VINTAGE CAST IRON
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Magazine Essay */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[52px] leading-[0.93] text-espresso tracking-[-0.06em] mb-6">
              Analog rituals in a hyper-speed world.
            </h2>

            {/* Drop Cap Paragraph */}
            <div className="space-y-4 font-body text-[15px] sm:text-[16px] leading-[1.65] text-coffee-dust">
              <p>
                <span className="float-left text-[48px] font-display text-burnt-orange leading-none pr-3 pt-1">
                  W
                </span>
                e started Little Amps in Harrisburg with an old cast-iron drum roaster, a handful of pristine 33 RPM jazz LPs, and a stubborn belief that good coffee should never be rushed or industrialized. While tech-driven chains race to automate every drip with touchscreens and algorithmic recipes, we remain devoted to human sensory feedback: the crackle of a heated bean, the resistance of a lever arm, and the warm hum of an analog groove.
              </p>
              <p>
                Every bean we bag is sourced through transparent, face-to-face relationships with growers across Colombia, Ethiopia, Guatemala, and Kenya. We roast with patience, listening closely for the distinct snap of cellular walls, caramelizing organic sugars until each lot sings with vibrant fruit and rich cocoa.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="my-8 p-6 bg-cream rounded-[6px] border-hairline border-l-4 border-l-burnt-orange">
              <p className="font-display text-[22px] sm:text-[24px] text-espresso italic leading-snug">
                "A proper cup of coffee should feel like dropping a brand-new vinyl record onto the platter on an unhurried Sunday afternoon."
              </p>
              <p className="mt-3 text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                — AARON & THE FOUNDING TEAM, HARRISBURG PA
              </p>
            </div>

            {/* 3 Core Convictions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t-hairline">
              <div className="p-3 bg-cream rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-burnt-orange block mb-1">01 / TACTILE</span>
                <p className="text-[12px] font-body text-espresso">
                  Roasted by human ears, eyes, and nose. Never handed over to autopilot software.
                </p>
              </div>

              <div className="p-3 bg-cream rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-burnt-orange block mb-1">02 / EQUITABLE</span>
                <p className="text-[12px] font-body text-espresso">
                  Direct trade pricing paying 2.5x to 4x above commodity C-market minimums.
                </p>
              </div>

              <div className="p-3 bg-cream rounded-[4px] border-hairline">
                <span className="text-xs font-mono font-bold text-burnt-orange block mb-1">03 / ANALOG</span>
                <p className="text-[12px] font-body text-espresso">
                  Packaging printed on heavy recycled cream paper, inspired by vintage Japanese vinyl sleeves.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5">
            <div className="p-3 sm:p-4 bg-cream rounded-[8px] border-hairline">
              <div className="w-full aspect-[4/5] rounded-[6px] overflow-hidden border-hairline bg-sandstone relative">
                <img
                  src="/Sokata_beverage_product_photography_c823fac9_2K.jpg"
                  alt="Little Amps signature slow drip beverage in warm afternoon sunlight"
                  className="w-full h-full object-cover"
                />
                
                {/* Photo Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-cream/90 backdrop-blur-sm p-2.5 rounded-[3px] border-hairline">
                  <div className="flex justify-between items-center text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                    <span>ARCHIVE PLATE NO. 07</span>
                    <span>18-HOUR KYOTO SLOW DRIP</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 px-1 text-center">
                <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                  PHOTOGRAPHED IN NATURAL AFTERNOON SUNLIGHT • NO SYNTHETIC COLOR GRADING
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

