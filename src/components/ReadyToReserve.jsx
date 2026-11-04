import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281234567890?text=Halo%20Sekata%20Coffee%20%26%20Slowbar!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <section
      id="reserve"
      className="w-full bg-[#18110e] text-cream border-y-2 border-espresso/40 py-5 sm:py-6 scroll-mt-20 select-none relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      {/* 
        IKLAN PEMBATAS MENTOK KE SAMPING (FULL-BLEED EDGE-TO-EDGE):
        Tidak ada box mengambang di tengah. Melebar penuh dari ujung ke ujung layar.
        Background deep espresso (#18110e) — BUKAN PUTIH!
      */}
      <div className="w-full px-5 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 relative z-10">
        
        {/* Sisi Kiri: Ilustrasi pegangkopi.png + Teks Judul & Ajakan */}
        <div className="flex items-center gap-4 sm:gap-6 text-left w-full md:w-auto">
          
          {/* Badge Stamp Bulat untuk Ilustrasi pegangkopi.png (Garis Hitam Terlihat Jelas & Estetik) */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream border-2 border-cream/30 flex items-center justify-center p-2 shadow-md flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="/pegangkopi.png"
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="Ilustrasi Pegang Kopi Sekata"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Tulisan Simple & Jelas (Font Humanis Alami) */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-body text-marigold font-medium">
                Meja Slowbar &bull; Tanjungpinang &bull; Free Booking
              </span>
            </div>

            <h3 className="font-display text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.05] text-cream tracking-[-0.03em] mb-1">
              Ready to Reserve?
            </h3>

            <p className="font-body text-[13px] sm:text-[14px] text-cream/80 leading-snug max-w-xl font-normal">
              Duduk santai di meja slowbar, nikmati ritual seduhan lambat, dan bertukar cerita bersama barista kami. Tanpa biaya booking!
            </p>
          </div>

        </div>

        {/* Sisi Kanan: Tombol Direct WhatsApp Menarik */}
        <div className="flex-shrink-0 w-full md:w-auto pt-1 md:pt-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 font-body text-[14px] px-7 py-3.5 rounded-[8px] font-semibold bg-[#25D366] text-black hover:bg-[#1faa53] hover:text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-200 active:scale-95 group whitespace-nowrap"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.127-.08-.276-.089-.634-.207-1.085-.401-1.905-.823-3.14-2.756-3.235-2.883-.095-.127-.775-1.03-.775-1.964 0-.934.489-1.393.663-1.583.174-.19.38-.237.506-.237.126 0 .253.001.364.007.118.006.276-.045.431.328.158.38.539 1.314.586 1.41.047.095.079.206.016.332-.063.127-.095.206-.19.317-.095.11-.2.246-.285.332-.095.095-.195.198-.084.388.111.19.493.814 1.057 1.317.728.648 1.341.85 1.531.945.19.095.301.079.412-.047.111-.127.475-.554.602-.744.127-.19.253-.158.427-.095.174.063 1.109.522 1.3.617.19.095.317.142.364.222.047.079.047.46-.097.865z"/>
            </svg>
            <span>Reservasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
