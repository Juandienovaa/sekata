import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function WholesaleSplitSection() {
  return (
    <section className="w-full py-12 sm:py-16 bg-cream border-b-hairline">
      <div className="container-max">
        
        {/* Outer Frame with Dusty Blue / Turquoise Padding matching the User's Screenshot */}
        <div className="bg-[#89b4ca] p-3 sm:p-4 rounded-[26px] shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
            
            {/* Left Column: Roaster Photo Frame */}
            <div className="lg:col-span-6 relative w-full min-h-[360px] sm:min-h-[460px] rounded-[20px] overflow-hidden bg-sandstone">
              <img
                src="/partner-roasting.jpg"
                alt="Proses sangrai biji kopi di workshop Sekata"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-[4px] border-hairline text-[10px] font-mono text-espresso uppercase tracking-[0.05em] font-medium">
                ROASTERY WORKSHOP &bull; SANGRAI SEGAR
              </div>
            </div>

            {/* Right Column: Cream Card with Wholesale Headline, Copy & Doodle */}
            <div className="lg:col-span-6 bg-cream rounded-[20px] p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              
              <div>
                {/* Secondary Subtitle */}
                <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-coffee-dust block mb-3">
                  WHOLESALE &amp; KEMITRAAN KEDAI
                </span>

                {/* Main Headline */}
                <h2 className="font-display text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.0] text-espresso tracking-[-0.04em] mb-4">
                  <span className="text-burnt-orange italic block">Punya Kedai Kopi?</span>
                  <span className="text-espresso block">Butuh Kopi dalam Jumlah Grosir?</span>
                </h2>

                {/* Supporting Copy in Natural Bahasa Indonesia */}
                <p className="font-body text-[14px] sm:text-[15px] leading-[1.65] text-coffee-dust mb-8 max-w-lg">
                  Ingin menyajikan kopi berkualitas Sekata di tempatmu? Hubungi tim roastery kami! Kami siap berbagi pengalaman kurasi biji kopi Nusantara, teknik roasting segar, pelatihan kalibrasi barista, dan harga khusus pasokan untuk membantu kedai, restoran, atau kantormu sukses dan bertumbuh bersama!
                </p>
              </div>

              {/* Bottom Row: CTA Button on Left, Animated Doodles on Right */}
              <div className="flex items-end justify-between gap-4 pt-4 border-t-hairline">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20punya%20usaha/kedai%20dan%20tertarik%20konsultasi%20pasokan%20biji%20kopi%20wholesale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled text-xs py-3 px-6 bg-turquoise border-turquoise hover:bg-turquoise-dark tracking-[0.05em] inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>HUBUNGI TIM ROASTERY</span>
                </a>

                {/* Retro Stacked Amps Illustration with Hover Animation */}
                <div className="relative w-28 sm:w-36 h-auto flex-shrink-0 group cursor-pointer" title="Sekata Sound & Coffee">
                  <img
                    src="/amps-1.png"
                    alt="Ilustrasi Amp Retro"
                    className="w-full h-auto object-contain transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <img
                    src="/amps-2.png"
                    alt="Ilustrasi Amp Retro Hover"
                    className="w-full h-auto object-contain absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
