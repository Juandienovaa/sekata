import React, { useState } from 'react';
import { Mail, Check, ArrowUp, Disc } from 'lucide-react';

export default function Footer({ onOpenWholesale }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-cream border-t-hairline">
      {/* Newsletter Zine Subscription Strip */}
      <div className="bg-linen border-b-hairline py-12 sm:py-16">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge-stamp bg-burnt-orange text-cream mb-3">
              THE PRINTED DISPATCH
            </span>
            <h2 className="font-display text-[32px] sm:text-[42px] leading-[0.95] text-espresso tracking-[-0.06em] mb-3">
              Get the bi-weekly coffee & vinyl zine.
            </h2>
            <p className="text-[14px] font-body text-coffee-dust leading-relaxed mb-6">
              New single-origin lot drops, album recommendations from our turntable counter, and brewing water recipes. No digital spam, just analog letters.
            </p>

            {subscribed ? (
              <div className="p-4 bg-cream border-hairline rounded-[4px] inline-flex items-center gap-2 text-xs font-mono text-burnt-orange">
                <Check className="w-4 h-4" />
                <span>SUBSCRIBED TO THE DISPATCH. WELCOME TO THE COFFEE COUNTER.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL FOR ZINE DISPATCHES..."
                  className="flex-1 px-4 py-2.5 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-filled text-xs py-2.5 px-6 whitespace-nowrap tracking-[0.05em]"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap Columns */}
      <div className="container-max py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Original Brand Logo & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/logo.png"
                alt="Little Amps Coffee Roasters"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="font-body text-[13px] leading-relaxed text-coffee-dust max-w-sm">
              Little Amps Coffee Roasters is an independent specialty coffee roasting company based in Harrisburg, Pennsylvania. Dedicated to small-batch cast-iron roasting, direct producer equity, and analog music culture.
            </p>
            <div className="pt-2 text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              ROASTING IN HARRISBURG SINCE 2011 • INDEPENDENT FOREVER
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              SITE DIRECTORY
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#shop" className="text-coffee-dust hover:text-burnt-orange transition-colors">
                  &bull; CURRENT BAR MENU
                </a>
              </li>
              <li>
                <a href="#about" className="text-coffee-dust hover:text-burnt-orange transition-colors">
                  &bull; ROASTING PHILOSOPHY
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenWholesale}
                  className="text-coffee-dust hover:text-burnt-orange transition-colors text-left"
                >
                  &bull; WHOLESALE PARTNERSHIPS
                </button>
              </li>
              <li>
                <a href="#community" className="text-coffee-dust hover:text-burnt-orange transition-colors">
                  &bull; COMMUNITY BOARD & DISPATCHES
                </a>
              </li>
              <li>
                <a href="#contact" className="text-coffee-dust hover:text-burnt-orange transition-colors">
                  &bull; TASTING ROOMS & HOURS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Harrisburg Cafes */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              TASTING ROOMS
            </p>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <p className="text-espresso font-medium uppercase">MIDTOWN ESPRESSO</p>
                <p className="text-coffee-dust">1336 N 3rd St, Harrisburg, PA</p>
                <p className="text-coffee-dust">Daily 7:00 AM – 5:00 PM</p>
              </div>
              <div className="pt-2 border-t-hairline">
                <p className="text-espresso font-medium uppercase">DOWNTOWN LAB & SOUND</p>
                <p className="text-coffee-dust">209 N 2nd St, Harrisburg, PA</p>
                <p className="text-coffee-dust">Thurs – Sun 9:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Audio & Back to Top */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              VINYL SOUND
            </p>
            <div className="text-xs font-mono text-coffee-dust space-y-2">
              <p>Turntable: Technics 1200</p>
              <p>Cartridge: Ortofon 2M Bronze</p>
              <p>Current Spin: Blue Note 1595</p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="btn-ghost w-full flex items-center justify-center gap-1.5 text-xs py-2"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Colophon strictly matching DESIGN.md */}
        <div className="mt-14 pt-8 border-t-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
          <div>
            &copy; 2026 LITTLE AMPS COFFEE ROASTERS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-right">
            <span>SET IN DM SERIF & JETBRAINS MONO</span>
            <span>&bull;</span>
            <span>PRINTED ON CREAM PAPER</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
