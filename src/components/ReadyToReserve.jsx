import React, { useState } from 'react';
import { Calendar, Users, Clock, Coffee, MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ReadyToReserve() {
  const [guests, setGuests] = useState('1-2 Orang (Solo / Couple)');
  const [sessionTime, setSessionTime] = useState('Sore (15:00 - 18:00)');
  const [seatingPref, setSeatingPref] = useState('Meja Slowbar (Dekat Barista)');

  const guestOptions = [
    '1-2 Orang (Solo / Couple)',
    '3-4 Orang (Sahabat / Meeting)',
    '5+ Orang (Grup Komunitas)'
  ];

  const timeOptions = [
    'Pagi (10:00 - 14:00)',
    'Sore (15:00 - 18:00)',
    'Malam (19:00 - 22:00)'
  ];

  const seatingOptions = [
    'Meja Slowbar (Dekat Barista)',
    'Meja Santai Komunal'
  ];

  // Generate dynamic WhatsApp URL
  const waMessage = `Halo Sekata Coffee & Slowbar! Saya mau reservasi meja:
• Jumlah Tamu: ${guests}
• Waktu: ${sessionTime}
• Pilihan Spot: ${seatingPref}
Apakah spot meja masih tersedia? Terima kasih!`;

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="reserve" className="w-full py-14 sm:py-20 bg-cream border-b-hairline scroll-mt-20 select-none">
      <div className="container-max px-4 sm:px-8">
        
        {/* Main Rectangular Reserve Card */}
        <div className="relative rounded-[24px] sm:rounded-[32px] bg-[#1a1210] text-cream border-2 border-espresso/20 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          {/* Background Decorative Glow & Pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-burnt-orange/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-turquoise/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Copy (Image 5 Human Typography) */}
            <div className="lg:col-span-6 text-left">
              
              {/* Header Label (Clean human style) */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
                <span className="text-[13px] font-body text-marigold font-medium">
                  Meja Slowbar &bull; Tanjungpinang
                </span>
                <span className="text-cream/30">&bull;</span>
                <span className="text-[13px] font-body text-cream/75">
                  Free Booking
                </span>
              </div>

              {/* Big Editorial Headline */}
              <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[52px] leading-[0.98] text-cream tracking-[-0.04em] mb-4">
                Ready to Reserve?
              </h2>

              <p className="font-body text-[14px] sm:text-[16px] text-cream/85 leading-relaxed mb-6 font-normal">
                Amankan mejamu di slowbar Sekata untuk ritual seduhan tenang, diskusi karya, atau sekadar bertukar cerita kehidupan bersama barista kami. Tanpa biaya reservasi tambahan.
              </p>

              {/* Value Badges (Clean Image 5 Font) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-[13px] font-body text-cream/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-turquoise flex-shrink-0" />
                  <span>100% Gratis Booking Meja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-turquoise flex-shrink-0" />
                  <span>Free Sharing &amp; Kalibrasi Rasa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-turquoise flex-shrink-0" />
                  <span>Pilihan Seduh Manual Lengkap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-turquoise flex-shrink-0" />
                  <span>Konfirmasi Cepat via WhatsApp</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-body text-[14px] px-7 py-3.5 rounded-[8px] font-semibold bg-[#25D366] text-black hover:bg-[#1faa53] hover:text-white shadow-[0_4px_24px_rgba(37,211,102,0.35)] transition-all duration-200 active:scale-95 group"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.127-.08-.276-.089-.634-.207-1.085-.401-1.905-.823-3.14-2.756-3.235-2.883-.095-.127-.775-1.03-.775-1.964 0-.934.489-1.393.663-1.583.174-.19.38-.237.506-.237.126 0 .253.001.364.007.118.006.276-.045.431.328.158.38.539 1.314.586 1.41.047.095.079.206.016.332-.063.127-.095.206-.19.317-.095.11-.2.246-.285.332-.095.095-.195.198-.084.388.111.19.493.814 1.057 1.317.728.648 1.341.85 1.531.945.19.095.301.079.412-.047.111-.127.475-.554.602-.744.127-.19.253-.158.427-.095.174.063 1.109.522 1.3.617.19.095.317.142.364.222.047.079.047.46-.097.865z"/>
                  </svg>
                  <span>Kirim Reservasi ke WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                
                <p className="mt-3 text-[12px] font-body text-cream/65">
                  Klik tombol untuk langsung mengirim pilihan reservasi ke WhatsApp Sekata.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Preferences Selector (Image 5 Font) */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-[20px] p-5 sm:p-7 backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="text-[13px] font-body text-marigold font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pilih Preferensi Kedatangan
                </span>
                <span className="text-[12px] font-body text-cream/50">
                  Langkah 1 dari 1
                </span>
              </div>

              {/* 1. Pilih Jumlah Orang */}
              <div className="mb-5 text-left">
                <label className="text-[13px] font-body text-cream/80 block mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-burnt-orange" />
                  Jumlah Tamu / Teman:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {guestOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setGuests(opt)}
                      type="button"
                      className={`text-left sm:text-center text-[12px] font-body p-2.5 rounded-[8px] border transition-all ${
                        guests === opt
                          ? 'bg-burnt-orange text-cream border-burnt-orange font-medium shadow-sm'
                          : 'bg-white/5 text-cream/75 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {opt.split(' ')[0]} {opt.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Pilih Waktu */}
              <div className="mb-5 text-left">
                <label className="text-[13px] font-body text-cream/80 block mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-turquoise" />
                  Waktu Kedatangan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timeOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSessionTime(opt)}
                      type="button"
                      className={`text-left sm:text-center text-[12px] font-body p-2.5 rounded-[8px] border transition-all ${
                        sessionTime === opt
                          ? 'bg-turquoise text-cream border-turquoise font-medium shadow-sm'
                          : 'bg-white/5 text-cream/75 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {opt.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Pilihan Spot */}
              <div className="mb-6 text-left">
                <label className="text-[13px] font-body text-cream/80 block mb-2 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-marigold" />
                  Suasana Meja:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {seatingOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSeatingPref(opt)}
                      type="button"
                      className={`text-left text-[12px] font-body p-2.5 rounded-[8px] border transition-all ${
                        seatingPref === opt
                          ? 'bg-marigold text-espresso border-marigold font-medium shadow-sm'
                          : 'bg-white/5 text-cream/75 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="p-3.5 bg-black/40 rounded-[12px] border border-white/10 text-left font-body text-[13px] text-cream/85">
                <span className="text-[11px] text-cream/45 block mb-1">
                  Format pesan yang akan dikirim:
                </span>
                <p className="leading-relaxed italic">
                  &ldquo;Halo Sekata... Mau reservasi meja untuk <span className="text-burnt-orange font-medium not-italic">{guests.split(' ')[0]}</span> di jam <span className="text-turquoise font-medium not-italic">{sessionTime.split(' ')[0]}</span>, spot <span className="text-marigold font-medium not-italic">{seatingPref.split(' ')[0]}</span>.&rdquo;
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
