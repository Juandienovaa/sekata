import React from 'react';
import { Package, Award, Sparkles, Truck, CheckCircle2 } from 'lucide-react';

export default function WholesaleSection({ onOpenWholesaleModal }) {
  return (
    <section id="wholesale" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        <div className="bg-linen rounded-[8px] border-hairline p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-espresso text-cream">WHOLESALE ROASTING</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                FOR CAFÉS, RESTAURANTS & RECORD SHOPS
              </p>
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] leading-[0.95] text-espresso tracking-[-0.06em] mb-4">
              Equip your bar with honest, small-batch coffee.
            </h2>
            <p className="text-[14px] sm:text-[15px] font-body text-coffee-dust leading-relaxed">
              We roast to order every Monday and Wednesday on vintage cast-iron, guaranteeing your café bar serves coffee at peak degassing and aroma. No automated mega-roasters; just seasoned palates and direct farm partnerships.
            </p>
          </div>

          {/* 3 Pillars of Wholesale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-cream p-5 rounded-[6px] border-hairline">
              <div className="w-8 h-8 rounded-[3px] bg-linen border-hairline flex items-center justify-center text-burnt-orange mb-3">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-semibold uppercase text-espresso mb-1 tracking-[0.05em]">
                ROAST-TO-ORDER FRESHNESS
              </h3>
              <p className="text-[12px] font-body text-coffee-dust leading-relaxed">
                Every batch shipped within 24 hours of roasting. Stamped with roast date and drum number.
              </p>
            </div>

            <div className="bg-cream p-5 rounded-[6px] border-hairline">
              <div className="w-8 h-8 rounded-[3px] bg-linen border-hairline flex items-center justify-center text-burnt-orange mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-semibold uppercase text-espresso mb-1 tracking-[0.05em]">
                BARISTA TRAINING & DIAL-IN
              </h3>
              <p className="text-[12px] font-body text-coffee-dust leading-relaxed">
                Free hands-on training for your bar team: milk texturing, grind calibration, and recipe sheets.
              </p>
            </div>

            <div className="bg-cream p-5 rounded-[6px] border-hairline">
              <div className="w-8 h-8 rounded-[3px] bg-linen border-hairline flex items-center justify-center text-burnt-orange mb-3">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-semibold uppercase text-espresso mb-1 tracking-[0.05em]">
                FLEXIBLE VOLUME TIERS
              </h3>
              <p className="text-[12px] font-body text-coffee-dust leading-relaxed">
                From 15 lbs weekly to multi-location subscriptions. 5lb valve bags and cold brew keg concentrates.
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-hairline">
            <div className="flex items-center gap-2 text-xs font-mono text-coffee-dust">
              <CheckCircle2 className="w-4 h-4 text-burnt-orange" />
              <span>COMPLIMENTARY TASTING SAMPLE KIT AVAILABLE UPON REQUEST</span>
            </div>

            <button
              onClick={onOpenWholesaleModal}
              className="btn-filled text-[13px] px-6 py-3 tracking-[0.05em] w-full sm:w-auto"
            >
              REQUEST WHOLESALE ACCOUNT
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
