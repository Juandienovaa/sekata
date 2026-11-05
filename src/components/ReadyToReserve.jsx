import React from 'react';
import { ArrowRight, CheckCircle2, Coffee, Clock, Sparkles } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6283125525115?text=Halo%20Sekata%20Coffee%20%26%20Slowbar!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <section
      id="reserve"
      className="w-full bg-[#120c0a] text-cream border-y-2 border-espresso/50 py-8 sm:py-10 scroll-mt-20 select-none relative overflow-hidden"
    >
      {/* Ambient Depth Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burnt-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      {/* 
        EXPANSIVE FULL-BLEED RESERVATION BANNER ("SAMPE KE UJUNG YAA"):
        Membentang penuh dari ujung ke ujung layar dengan proporsi editorial premium.
        Background Deep Espresso (#120c0a) — Hangat, intim, dan berbobot.
      */}
      <div className="w-full px-5 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 relative z-10">
        
        {/* Sisi Kiri: Maskot + Headline + Deskripsi + Perks Komunal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 text-left w-full lg:w-auto">
          
          {/* Badge Stamp Bulat Maskot Pegang Kopi */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#fbf6f0] border-2 border-cream/40 flex items-center justify-center p-2.5 shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="/pegangkopi.png"
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="Ilustrasi Pegang Kopi Sekata"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Tulisan Utama */}
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-mono text-marigold uppercase tracking-[0.14em] font-medium">
                MEJA SLOWBAR &bull; TANJUNGPINANG &bull; FREE BOOKING
              </span>
            </div>

            <h3 className="font-display text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.0] text-cream tracking-[-0.03em] mb-2 font-normal">
              Ready to Reserve?
            </h3>

            <p className="font-body text-[14px] sm:text-[15px] text-cream/80 leading-relaxed max-w-2xl font-normal mb-3">
              Duduk santai di meja slowbar, nikmati ritual seduhan lambat, dan bertukar cerita bersama barista kami. Tanpa biaya booking!
            </p>

            {/* 3 Value Pillars Ringkas */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs font-mono text-cream/70 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Spot Terbatas (6 Kursi)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-marigold" />
                <span>Konsultasi Biji Kopi Gratis</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-turquoise" />
                <span>Konfirmasi Langsung via WA</span>
              </span>
            </div>
          </div>

        </div>

        {/* Sisi Kanan: Direct WhatsApp CTA Button */}
        <div className="flex-shrink-0 w-full lg:w-auto pt-2 lg:pt-0 flex flex-col items-center sm:items-start lg:items-end">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-body text-[15px] px-8 py-4 rounded-[8px] font-bold bg-[#25D366] text-[#0a3319] hover:bg-[#1faa53] hover:text-white shadow-[0_6px_25px_rgba(37,211,102,0.3)] transition-all duration-200 ease-out active:scale-[0.97] group whitespace-nowrap"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.127-.08-.276-.089-.634-.207-1.085-.401-1.905-.823-3.14-2.756-3.235-2.883-.095-.127-.775-1.03-.775-1.964 0-.934.489-1.393.663-1.583.174-.19.38-.237.506-.237.126 0 .253.001.364.007.118.006.276-.045.431.328.158.38.539 1.314.586 1.41.047.095.079.206.016.332-.063.127-.095.206-.19.317-.095.11-.2.246-.285.332-.095.095-.195.198-.084.388.111.19.493.814 1.057 1.317.728.648 1.341.85 1.531.945.19.095.301.079.412-.047.111-.127.475-.554.602-.744.127-.19.253-.158.427-.095.174.063 1.109.522 1.3.617.19.095.317.142.364.222.047.079.047.46-.097.865z"/>
            </svg>
            <span>Reservasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4 stroke-[2] group-hover:translate-x-1.5 transition-transform duration-200" />
          </a>
          <span className="block text-[11px] font-mono text-cream/50 mt-1.5 text-center sm:text-right">
            *Respon cepat barista dalam 5–15 menit
          </span>
        </div>

      </div>
    </section>
  );
}
