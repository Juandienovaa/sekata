import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ReadyToReserve() {
  const waUrl = 'https://wa.me/6281234567890?text=Halo%20Sekata%20Coffee%20%26%20Slowbar!%20Saya%20mau%20reservasi%20meja%20slowbar.%20Apakah%20spot%20meja%20masih%20tersedia%3F%20Terima%20kasih!';

  return (
    <section
      id="reserve"
      className="w-full py-5 sm:py-7 bg-[#f6eee5] border-y border-espresso/15 scroll-mt-20 select-none"
    >
      <div className="container-max px-4 sm:px-8">
        
        {/* 
          IKLAN PEMBATAS HORIZONTAL (PERSIS SEUKURAN GAMBAR 2):
          - Desain ramping, ringkas, dan proporsional (tidak makan tempat seperti form tebal)
          - Ilustrasi transparan pegangkopi.png di samping judul
          - Tombol direct link langsung ke WhatsApp
        */}
        <div className="rounded-[18px] sm:rounded-[22px] bg-[#fffbf6] border-2 border-espresso/15 px-5 py-4 sm:py-5 sm:px-8 lg:px-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden">
          
          {/* Subtle Accent Edge */}
          <div className="absolute top-0 left-0 w-2 h-full bg-burnt-orange" />

          {/* Sisi Kiri: Ilustrasi pegangkopi.png + Teks Judul & Ajakan Simple */}
          <div className="flex items-center gap-4 sm:gap-6 text-left w-full md:w-auto">
            
            {/* Ilustrasi pegangkopi.png Tanpa Background */}
            <div className="flex-shrink-0">
              <img
                src="/pegangkopi.png"
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="Ilustrasi Pegang Kopi Sekata"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Tulisan Simple & Jelas (Font Gambar 5) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
                <span className="text-[12px] sm:text-[13px] font-body text-amber font-medium">
                  Meja Slowbar &bull; Tanjungpinang &bull; Free Booking
                </span>
              </div>

              <h3 className="font-display text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.05] text-espresso tracking-[-0.03em] mb-1">
                Ready to Reserve?
              </h3>

              <p className="font-body text-[13px] sm:text-[14px] text-[#5c4d44] leading-snug max-w-lg font-normal">
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
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 font-body text-[14px] px-6 py-3.5 rounded-[8px] font-semibold bg-[#25D366] text-black hover:bg-[#1faa53] hover:text-white shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all duration-200 active:scale-95 group whitespace-nowrap"
            >
              {/* WhatsApp SVG Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.127-.08-.276-.089-.634-.207-1.085-.401-1.905-.823-3.14-2.756-3.235-2.883-.095-.127-.775-1.03-.775-1.964 0-.934.489-1.393.663-1.583.174-.19.38-.237.506-.237.126 0 .253.001.364.007.118.006.276-.045.431.328.158.38.539 1.314.586 1.41.047.095.079.206.016.332-.063.127-.095.206-.19.317-.095.11-.2.246-.285.332-.095.095-.195.198-.084.388.111.19.493.814 1.057 1.317.728.648 1.341.85 1.531.945.19.095.301.079.412-.047.111-.127.475-.554.602-.744.127-.19.253-.158.427-.095.174.063 1.109.522 1.3.617.19.095.317.142.364.222.047.079.047.46-.097.865z"/>
              </svg>
              <span>Reservasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
