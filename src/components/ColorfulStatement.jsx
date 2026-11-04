import React from 'react';

export default function ColorfulStatement() {
  return (
    <section className="w-full bg-cream border-b-hairline py-12 sm:py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Statement with Colorful Inline Styling matching User's Uploaded Screenshot */}
          <div className="lg:col-span-9 text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
              <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.08em]">
                SEKATA COFFEE &amp; SLOWBAR &bull; TANJUNGPINANG, KEPRI
              </span>
            </div>

            <p className="font-display text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.22] text-espresso tracking-[-0.04em]">
              Di <span className="text-burnt-orange font-medium">Sekata Coffee &amp; Slowbar</span> kami ada dalam pencarian tanpa henti untuk <span className="text-turquoise font-medium">seduhan yang bermakna</span>, dengan sabar memilih serta menyangrai <span className="text-amber font-medium">biji kopi pilihan</span> yang kami temukan, lalu menyajikannya hangat bagi <span className="text-burnt-orange font-medium">komunitas dan sahabat</span> di <span className="text-dusty-blue font-medium">Tanjungpinang</span> dan sekitarnya!
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-coffee-dust uppercase tracking-[0.05em]">
              <span className="text-turquoise font-medium">&bull; MEJA SLOWBAR INTERAKTIF</span>
              <span className="text-burnt-orange font-medium">&bull; TEMPAT BERCERITA</span>
              <span className="text-amber font-medium">&bull; #KECILBERTUMBUH</span>
            </div>
          </div>

          {/* Right: Sekata Mascot Icon */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="p-4 bg-linen rounded-[12px] border-hairline inline-flex flex-col items-center text-center">
              <img
                src="/logo.png"
                alt="Maskot Sekata"
                className="h-20 sm:h-24 w-auto object-contain"
              />
              <span className="mt-2 text-[10px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                &ldquo;MARI BERTEMU &amp; BERCERITA&rdquo;
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
