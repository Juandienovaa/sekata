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
                  placeholder="MASUKKAN ALAMAT EMAIL KAMU..."
                  className="flex-1 px-4 py-2.5 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-filled text-xs py-2.5 px-6 whitespace-nowrap tracking-[0.05em] bg-turquoise border-turquoise hover:bg-turquoise-dark"
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

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              NAVIGASI SITUS
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#menu" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; PILIHAN MENU &amp; SEDUHAN
                </a>
              </li>
              <li>
                <a href="#slowbar" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; PENGALAMAN SLOWBAR
                </a>
              </li>
              <li>
                <a href="#filosofi" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; FILOSOFI KAMI
                </a>
              </li>
              <li>
                <a href="#reserve" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; RESERVASI MEJA SLOWBAR
                </a>
              </li>
              <li>
                <a href="#cerita" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; CERITA DI BALIK SEDUHAN
                </a>
              </li>
              <li>
                <a href="#lokasi" className="text-coffee-dust hover:text-turquoise transition-colors">
                  &bull; LOKASI &amp; PETUNJUK ARAH
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kedai Sekata Info */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-medium text-espresso uppercase tracking-[0.05em] pb-1 border-b-hairline">
              KEDAI &amp; JAM BUKA
            </p>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <p className="text-espresso font-medium uppercase">SEKATA SLOWBAR</p>
                <p className="text-coffee-dust">Tanjungpinang, Kepulauan Riau</p>
                <p className="text-coffee-dust mt-1">Senin – Jumat: 10.00 – 22.00 WIB</p>
                <p className="text-coffee-dust">Sabtu – Minggu: 09.00 – 23.00 WIB</p>
              </div>
              <div className="pt-2 border-t-hairline">
                <p className="text-espresso font-medium uppercase">MEDIA SOSIAL</p>
                <p className="text-coffee-dust">Instagram: <a href="https://instagram.com/sekata.tnj" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">@sekata.tnj</a></p>
                <p className="text-coffee-dust">TikTok: <a href="https://tiktok.com/@sekatatnj" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">@sekatatnj</a></p>
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
                className="btn-ghost w-full flex items-center justify-center gap-1.5 text-xs py-2 hover:border-turquoise hover:text-turquoise"
                aria-label="Kembali ke atas halaman"
              >
                <ArrowUp className="w-3.5 h-3.5" />
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
