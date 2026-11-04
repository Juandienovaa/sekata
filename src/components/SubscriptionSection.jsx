import React, { useState } from 'react';
import { Sparkles, Calendar, Coffee, Check, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function SubscriptionSection() {
  const [selectedPlan, setSelectedPlan] = useState('weekly');

  return (
    <section className="w-full relative py-20 sm:py-28 overflow-hidden bg-espresso text-cream border-b-hairline">
      
      {/* Background Hero Photo (Barista Scooping Fresh Beans) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/subscription_bg.jpg"
          onError={(e) => {
            // Fallback to roasting photo if subscription_bg is still generating
            e.currentTarget.src = "/partner-roasting.jpg";
          }}
          alt="Proses sangrai dan takaran biji kopi segar Sekata"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/80 to-espresso/60" />
      </div>

      <div className="container-max relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Mascot & Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="badge-stamp bg-turquoise text-cream shadow-sm">
                LANGGANAN BIJI KOPI
              </span>
              <span className="text-[11px] font-mono text-sandstone uppercase tracking-[0.08em]">
                ROASTERY &amp; SLOWBAR SEKATA
              </span>
            </div>

            {/* Headline with Mascot Doodle */}
            <div className="relative">
              <h2 className="font-display text-[42px] sm:text-[54px] lg:text-[60px] leading-[0.92] text-cream tracking-[-0.05em]">
                Seduhan Segar di Meja Rumahmu.
              </h2>

              {/* Hand-Drawn Retro Sun Mascot (Inspired by Little Amps Reference) */}
              <div className="absolute -top-12 right-0 sm:right-6 hidden sm:flex items-center gap-2 select-none pointer-events-none">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="text-marigold animate-spin-slow">
                  <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="3" fill="#febf6f" fillOpacity="0.2" />
                  <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="42" cy="46" r="3" fill="currentColor" />
                  <circle cx="58" cy="46" r="3" fill="currentColor" />
                  <path d="M42 58 Q50 66 58 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
                <div className="bg-cream text-espresso px-2.5 py-1 rounded-full border border-hairline text-[10px] font-mono uppercase tracking-[0.05em] font-bold shadow-sm rotate-6">
                  NGOPI DULU!
                </div>
              </div>
            </div>

            <p className="font-body text-[15px] sm:text-[17px] leading-[1.65] text-cream/90 max-w-xl">
              Langganan biji kopi Sekata adalah cara paling santai dan hemat untuk memastikan dapurmu selalu punya biji kopi sangrai segar pilihan. Tanpa repot, sangrai segar langsung dikirim ke alamatmu di Tanjungpinang maupun seluruh Indonesia!
            </p>

            {/* Key Perks */}
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono text-sandstone">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
                <span>SELALU SANGRAI SEGAR</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
                <span>HEMAT HINGGA 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
                <span>BISA JEDA / GANTI KAPAN SAJA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
                <span>GRATIS KONSULTASI GILING</span>
              </div>
            </div>

          </div>

          {/* Right Column: 2 Subscription Option Cards sitting side-by-side */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: Pilihan Andalan (The Hits / House Blend) */}
            <div className="bg-cream text-espresso rounded-[16px] p-5 sm:p-6 border-hairline shadow-lg flex flex-col justify-between transition-all duration-300 hover:border-turquoise hover:scale-[1.02] group">
              <div>
                {/* Illustration Frame */}
                <div className="w-full aspect-square rounded-[10px] overflow-hidden border-hairline bg-[#f6ede3] mb-4 relative">
                  <img
                    src="/subscription_blend.jpg"
                    onError={(e) => {
                      e.currentTarget.src = "/friend_blend_bag.jpg";
                    }}
                    alt="Ilustrasi Paket Pilihan Andalan Sekata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-stamp bg-turquoise text-cream">
                      HOUSE BLEND
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-[0.08em] text-coffee-dust mb-1">
                  YEAR ROUND OFFERINGS
                </div>

                <h3 className="font-display text-[24px] sm:text-[26px] text-espresso leading-tight mb-2">
                  Pilihan Andalan
                </h3>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[11px] font-mono text-coffee-dust">MULAI</span>
                  <span className="font-mono text-[16px] font-bold text-burnt-orange">
                    Rp 85.000
                  </span>
                  <span className="text-[10px] font-mono text-coffee-dust">/ 250GR</span>
                </div>

                <p className="text-xs font-body text-coffee-dust leading-relaxed mb-4">
                  Karakter rasa cokelat susu, toffee, dan kacang panggang yang seimbang. Paling pas untuk seduhan harian tubruk, v60, maupun mokapot.
                </p>
              </div>

              <div className="pt-4 border-t-hairline">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20tertarik%20langganan%20biji%20kopi%20paket%20Pilihan%20Andalan%20(House%20Blend)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled w-full text-xs py-2.5 bg-espresso border-espresso hover:bg-turquoise hover:border-turquoise flex items-center justify-center gap-2"
                >
                  <span>PILIH PAKET INI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Kurasi Roaster (Roaster's Picks / Single Origin) */}
            <div className="bg-cream text-espresso rounded-[16px] p-5 sm:p-6 border-hairline shadow-lg flex flex-col justify-between transition-all duration-300 hover:border-turquoise hover:scale-[1.02] group">
              <div>
                {/* Illustration Frame */}
                <div className="w-full aspect-square rounded-[10px] overflow-hidden border-hairline bg-[#f6ede3] mb-4 relative">
                  <img
                    src="/subscription_farm.jpg"
                    onError={(e) => {
                      e.currentTarget.src = "/into_the_void_bag.jpg";
                    }}
                    alt="Ilustrasi Paket Kurasi Roaster Sekata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-stamp bg-burnt-orange text-cream">
                      SINGLE ORIGIN
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-[0.08em] text-coffee-dust mb-1">
                  CURRENT SINGLE ORIGIN
                </div>

                <h3 className="font-display text-[24px] sm:text-[26px] text-espresso leading-tight mb-2">
                  Kurasi Roaster
                </h3>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[11px] font-mono text-coffee-dust">MULAI</span>
                  <span className="font-mono text-[16px] font-bold text-burnt-orange">
                    Rp 115.000
                  </span>
                  <span className="text-[10px] font-mono text-coffee-dust">/ 250GR</span>
                </div>

                <p className="text-xs font-body text-coffee-dust leading-relaxed mb-4">
                  Rotasi biji kopi mikro-lot musiman dari pegunungan Aceh Gayo, Flores Bajawa, hingga Bali Kintamani dengan aroma buah &amp; bunga yang semerbak.
                </p>
              </div>

              <div className="pt-4 border-t-hairline">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekata,%20saya%20tertarik%20langganan%20biji%20kopi%20paket%20Kurasi%20Roaster%20(Single%20Origin)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled w-full text-xs py-2.5 bg-turquoise border-turquoise hover:bg-turquoise-dark hover:border-turquoise-dark flex items-center justify-center gap-2"
                >
                  <span>PILIH PAKET INI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

