import React, { useState } from 'react';
import { Mail, Check, ArrowUp } from 'lucide-react';

export default function Footer() {
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
      {/* Surat Kabar dari Slowbar Strip */}
      <div className="bg-linen border-b-hairline py-12 sm:py-16">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge-stamp bg-turquoise text-cream mb-3">
              SURAT KABAR DARI SLOWBAR
            </span>
            <h2 className="font-display text-[32px] sm:text-[42px] leading-[0.95] text-espresso tracking-[-0.05em] mb-3">
              Dapatkan Kabar Seduhan &amp; Cerita Terbaru.
            </h2>
            <p className="text-[14px] font-body text-coffee-dust leading-relaxed mb-6">
              Informasi ketersediaan biji kopi sangrai segar, jadwal sesi slowbar mingguan, dan catatan cerita dari Tanjungpinang langsung ke emailmu.
            </p>

            {subscribed ? (
              <div className="p-4 bg-cream border-hairline rounded-[4px] inline-flex items-center gap-2 text-xs font-mono text-turquoise">
                <Check className="w-4 h-4" />
                <span>TERIMA KASIH! KAMU SUDAH TERDAFTAR DI SURAT KABAR SEKATA.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Masukkan alamat email kamu..."
                  className="flex-1 px-4 py-2.5 text-xs font-body bg-cream border-hairline rounded-[6px] text-espresso focus:border-turquoise focus:outline-none placeholder:text-coffee-dust/60"
                />
                <button
                  type="submit"
                  className="btn-filled text-xs py-2.5 px-6 whitespace-nowrap tracking-[0.05em] bg-turquoise border-turquoise hover:bg-turquoise-dark rounded-[6px] transition-all duration-200 ease-out active:scale-[0.97]"
                >
                  LANGGANAN
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap Columns */}
      <div className="container-max py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Original Brand Logo & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/logo.png"
                alt="Sekata Coffee &amp; Slowbar"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="font-body text-[13px] leading-relaxed text-coffee-dust max-w-sm">
              Sekata Coffee &amp; Slowbar adalah ruang temu dan kedai seduh lambat independen di Tanjungpinang, Kepulauan Riau. Didedikasikan untuk apresiasi rasa kopi yang ramah bagi semua orang dan kehangatan bertukar cerita kehidupan.
            </p>
            <div className="pt-2 text-[11px] font-mono text-turquoise uppercase tracking-[0.05em] font-medium">
              TANJUNGPINANG &bull; KEPULAUAN RIAU &bull; #KECILBERTUMBUH
            </div>
          </div>

          {/* Col 2: Navigation (Image 5 Human Typography) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-mono font-semibold text-espresso uppercase tracking-[0.08em] pb-1 border-b-hairline">
              NAVIGASI SITUS
            </p>
            <ul className="space-y-2.5 font-body text-[14px] text-[#5c4d44]">
              <li>
                <a href="#menu" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Pilihan Menu &amp; Seduhan
                </a>
              </li>
              <li>
                <a href="#slowbar" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Pengalaman Meja Slowbar
                </a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Filosofi Sekata
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Reservasi Meja Slowbar
                </a>
              </li>
              <li>
                <a href="#slowbar-space" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Ruang &amp; Seduhan Slowbar
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-espresso hover:underline underline-offset-2 transition-colors">
                  Lokasi &amp; Petunjuk Arah
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kedai Sekata Info */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-mono font-semibold text-espresso uppercase tracking-[0.08em] pb-1 border-b-hairline">
              KEDAI &amp; JAM BUKA
            </p>
            <div className="space-y-3 font-body text-[13px] sm:text-[14px] text-[#5c4d44]">
              <div>
                <p className="text-espresso font-medium">Sekata Coffee &amp; Space</p>
                <p className="text-[#6b584f]">Jln Bunguran No.53, Sei Jang, Bukit Bestari</p>
                <p className="text-[#6b584f]">Kota Tanjung Pinang, Kepri 29113</p>
                <p className="text-[#6b584f] mt-1 font-medium">Buka Setiap Hari: 10:00 &ndash; 00:00 WIB</p>
              </div>
              <div className="pt-2 border-t border-espresso/10">
                <p className="text-espresso font-medium">Kontak &amp; Sosial</p>
                <p className="text-[#6b584f]">WhatsApp: <a href="https://wa.me/6281991445331" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">0819-9144-5331</a></p>
                <p className="text-[#6b584f]">Instagram: <a href="https://instagram.com/sekata.tnj" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">@sekata.tnj</a></p>
              </div>
            </div>
          </div>

          {/* Col 4: Tagline & Back to Top */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              SEMANGAT KAMI
            </p>
            <div className="text-xs font-mono text-coffee-dust space-y-2">
              <p className="text-turquoise font-medium">#KecilBertumbuh</p>
              <p className="italic font-display text-[15px] text-espresso leading-snug">
                &ldquo;Mari Bertemu &amp; Bercerita Tentang Kehidupan.&rdquo;
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="btn-ghost w-full flex items-center justify-center gap-1.5 text-xs py-2 rounded-[6px] hover:border-turquoise hover:text-turquoise transition-all duration-200 ease-out active:scale-[0.97]"
                aria-label="Kembali ke atas halaman"
              >
                <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>KEMBALI KE ATAS</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="mt-14 pt-8 border-t-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
          <div>
            &copy; 2026 SEKATA COFFEE &amp; SLOWBAR. HAK CIPTA DILINDUNGI.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-right">
            <span>SETIAP SEDUHAN PUNYA CERITA</span>
            <span>&bull;</span>
            <span className="text-turquoise font-medium">#KECILBERTUMBUH</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
