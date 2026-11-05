import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'Tanya Menu / Reservasi',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', topic: 'Tanya Menu / Reservasi', message: '' });
    }, 4000);
  };

  return (
    <section id="lokasi" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-hairline">
          <div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.05em] mb-2">
              Yuk, Bertemu di Sekata.
            </h2>
            <p className="text-[14px] sm:text-[15px] font-body text-coffee-dust max-w-xl">
              Luangkan waktu, nikmati ritual seduh lambat, dan ceritakan harimu bersama kami di Tanjungpinang.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://maps.google.com/?q=Sekata+Coffee+Tanjungpinang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled text-[12px] px-5 py-3 bg-turquoise border-turquoise hover:bg-turquoise-dark flex items-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>TEMUKAN LOKASI KAMI (GOOGLE MAPS)</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location & Hours Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-linen p-6 rounded-[8px] border-hairline">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="badge-stamp bg-turquoise text-cream mb-2">SLOWBAR &amp; COFFEE DESTINATION</span>
                  <h3 className="font-display text-[26px] text-espresso">Sekata Coffee &amp; Slowbar</h3>
                  <p className="text-xs font-mono text-coffee-dust uppercase mt-1">
                    TANJUNGPINANG &bull; KEPULAUAN RIAU
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono pt-4 border-t-hairline">
                <div>
                  <p className="text-coffee-dust uppercase mb-1.5 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-turquoise" /> ALAMAT KEDAI
                  </p>
                  <p className="text-espresso font-medium">Jl. Pos No. 12, Kawasan Kota Lama</p>
                  <p className="text-espresso">Tanjungpinang, Kepulauan Riau</p>
                  <p className="text-coffee-dust mt-2">Area nyaman, parkir mudah, dan suasana tenang.</p>
                </div>

                <div>
                  <p className="text-coffee-dust uppercase mb-1.5 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-turquoise" /> JAM OPERASIONAL
                  </p>
                  <p className="text-espresso">Senin – Jumat: 10.00 – 22.00 WIB</p>
                  <p className="text-espresso">Sabtu – Minggu: 09.00 – 23.00 WIB</p>
                  <p className="text-turquoise font-medium mt-2">&bull; Slowbar buka setiap hari</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-hairline flex flex-wrap gap-4 text-xs font-mono">
                <a
                  href="https://www.instagram.com/sekata.tnj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso hover:text-turquoise flex items-center gap-1 font-medium"
                >
                  <span>Instagram: @sekata.tnj</span>
                  <ExternalLink className="w-3 h-3 text-turquoise" />
                </a>
                <a
                  href="https://www.tiktok.com/@sekatatnj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso hover:text-turquoise flex items-center gap-1 font-medium"
                >
                  <span>TikTok: @sekatatnj</span>
                  <ExternalLink className="w-3 h-3 text-turquoise" />
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Contact Card */}
            <div className="p-6 bg-linen rounded-[8px] border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream border-hairline flex items-center justify-center text-turquoise flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-[18px] text-espresso">Hubungi Barista Sekata</h4>
                  <p className="text-xs font-body text-coffee-dust">
                    Tanya ketersediaan biji kopi, reservasi meja kumpul, atau pesanan bawa pulang.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6283125525115?text=Halo%20Sekata,%20saya%20mau%20tanya%20seputar%20kedai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-filled text-xs py-2.5 px-5 bg-turquoise border-turquoise hover:bg-turquoise-dark whitespace-nowrap"
              >
                CHAT WHATSAPP &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Sapa Barista Form */}
          <div className="lg:col-span-5 bg-linen p-6 sm:p-7 rounded-[8px] border-hairline">
            <h3 className="font-display text-[24px] text-espresso mb-1">
              Kirim Pesan atau Cerita.
            </h3>
            <p className="text-[13px] font-body text-coffee-dust mb-5">
              Punya ide kolaborasi, pertanyaan seputar seduhan, atau sekadar ingin menyapa? Tinggalkan pesanmu di sini.
            </p>

            {submitted ? (
              <div className="p-6 bg-cream rounded-[6px] border-hairline text-center space-y-2">
                <Check className="w-6 h-6 text-turquoise mx-auto" />
                <p className="font-mono text-xs uppercase font-medium text-espresso">
                  PESANMU SUDAH KAMI TERIMA
                </p>
                <p className="text-xs font-body text-coffee-dust">
                  Terima kasih sudah menyapa. Kami akan segera membaca dan menghubungimu kembali!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    NAMA LENGKAP *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama kamu..."
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    NOMOR WHATSAPP / TELEPON
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    TOPIK PESAN
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none"
                  >
                    <option value="Tanya Menu / Reservasi">Tanya Menu / Reservasi Meja</option>
                    <option value="Biji Kopi & Kebutuhan Kantor">Beli Biji Kopi / Kebutuhan Kafe</option>
                    <option value="Kolaborasi Komunitas / Acara">Kolaborasi Acara Komunitas</option>
                    <option value="Sekadar Berbagi Cerita">Sekadar Berbagi Cerita &amp; Saran</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    PESAN *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan atau ceritamu di sini..."
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-turquoise focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-filled w-full py-2.5 text-xs tracking-[0.05em] bg-turquoise border-turquoise hover:bg-turquoise-dark">
                    KIRIM PESAN SEKARANG
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
