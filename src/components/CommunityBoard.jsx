import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Play, Pause, SkipForward, SkipBack, Disc3, Volume2 } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export default function CommunityBoard() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const playlist = [
    { title: 'Suasana Pagi Tanjungpinang', artist: 'Sekata Slowbar Session', duration: '03:40' },
    { title: 'Harum Biji Sangrai Gayo', artist: 'Sekata Slowbar Session', duration: '04:21' },
    { title: 'Obrolan Santai di Meja Seduh', artist: 'Sekata Slowbar Session', duration: '03:15' },
    { title: 'Hujan Sore & Manual Brew', artist: 'Sekata Slowbar Session', duration: '04:32' },
  ];

  const currentTrack = playlist[activeTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setActiveTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setActiveTrackIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  return (
    <section
      id="cerita"
      className="w-full py-16 sm:py-24 bg-[#cde8e5] border-y-2 border-espresso/15 scroll-mt-20 overflow-hidden select-none"
    >
      <div className="container-max px-4 sm:px-8">
        
        {/* 
          EDITORIAL COMMUNITY PANEL — PERSIS PELETAKAN GAMBAR 4 (LITTLE AMPS STYLE):
          - Kiri: Judul "Setiap Pertemuan Punya Cerita." + Ilustrasi Cangkir Kopi + Info Kunjungan (Visit Us)
          - Tengah: Kolom Navigasi Catatan Cerita dengan Font Bersih Alami (Persis Gambar 5, Anti AI-Slop)
          - Kanan: Floating Spotify-Style Mixtape Widget (Persis Player Spotify Gambar 4)
        */}
        <div className="bg-[#fffbf6] rounded-[24px] sm:rounded-[32px] border-2 border-espresso/15 p-6 sm:p-10 lg:p-12 shadow-md mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Kolom Kiri: Judul Besar + Ilustrasi Line-Art + Visit Info */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h2 className="font-display text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.0] text-espresso tracking-[-0.035em]">
                    Setiap Pertemuan<br />Punya Cerita.
                  </h2>
                  {/* Cute Line-Art Coffee Mascot / Illustration persis Gambar 4 */}
                  <img
                    src="/pegangkopi.png"
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    alt="Sekata Coffee &amp; Slowbar"
                    className="h-10 sm:h-12 w-auto object-contain -rotate-6 inline-block filter drop-shadow-sm"
                  />
                </div>

                <p className="font-body text-[14px] sm:text-[15px] text-[#6b584f] leading-relaxed max-w-sm mb-6">
                  Kisah-kisah kecil di balik seduhan kopi, rasa penasaran yang terjawab, dan kehangatan yang tumbuh di meja slowbar Tanjungpinang.
                </p>
              </div>

              {/* Visit Us Info (Persis format "VISIT US" di Gambar 4 dengan Font Gambar 5) */}
              <div className="pt-6 border-t border-espresso/10">
                <span className="text-[11px] font-mono uppercase text-burnt-orange font-bold tracking-wider block mb-2">
                  KUNJUNGI KEDAI
                </span>
                <div className="font-body text-[13px] sm:text-[14px] text-[#5c4d44] space-y-1">
                  <p>Jl. Yos Sudarso, Tanjungpinang Barat</p>
                  <p>Kota Tanjungpinang, Kepulauan Riau &bull; Buka Setiap Hari: 10:00 &ndash; 22:00 WIB</p>
                </div>
                
                {/* Social links (Image 5 style) */}
                <div className="mt-3 flex items-center gap-4 text-[13px] font-body text-[#6b584f]">
                  <a
                    href="https://instagram.com/sekata.tnj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-espresso underline underline-offset-2 transition-colors"
                  >
                    Instagram: @sekata.tnj
                  </a>
                  <span>&bull;</span>
                  <a
                    href="https://tiktok.com/@sekatatnj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-espresso underline underline-offset-2 transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>

            </div>

            {/* Kolom Tengah: 2 Kolom Link Artikel & Cerita (Font Gambar 5, Anti AI-Slop) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-left pt-1">
              
              {/* Grup 1: Catatan Slowbar */}
              <div>
                <span className="text-[11px] font-mono uppercase text-espresso/70 font-semibold tracking-wider block mb-3">
                  CATATAN SLOWBAR
                </span>
                <ul className="space-y-2.5 font-body text-[14px] text-[#5c4d44]">
                  {ARTICLES.slice(0, 2).map((art) => (
                    <li key={art.id}>
                      <button
                        onClick={() => setSelectedArticle(art)}
                        className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                      >
                        {art.title.split(':')[0]}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[0])}
                      className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                    >
                      Ritual Seduhan Pagi
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[1])}
                      className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                    >
                      Kalibrasi Rasa Barista
                    </button>
                  </li>
                </ul>
              </div>

              {/* Grup 2: Komunitas & Ruang */}
              <div>
                <span className="text-[11px] font-mono uppercase text-espresso/70 font-semibold tracking-wider block mb-3">
                  KOMUNITAS
                </span>
                <ul className="space-y-2.5 font-body text-[14px] text-[#5c4d44]">
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[2])}
                      className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                    >
                      #KecilBertumbuh
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[1])}
                      className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                    >
                      Edukasi Biji Single Origin
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[0])}
                      className="text-left hover:text-espresso hover:underline underline-offset-2 transition-colors"
                    >
                      Ruang Temu Tanjungpinang
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedArticle(ARTICLES[0])}
                      className="text-left text-burnt-orange font-medium hover:underline underline-offset-2 transition-colors"
                    >
                      Semua Catatan Cerita &rarr;
                    </button>
                  </li>
                </ul>
              </div>

            </div>

            {/* Kolom Kanan: Floating Spotify-Style Mixtape Player (Persis Player Spotify di Gambar 4) */}
            <div className="lg:col-span-4 w-full">
              <div className="bg-[#382b27] text-cream rounded-[20px] p-5 sm:p-6 shadow-xl border border-white/10 text-left relative overflow-hidden">
                
                {/* Subtle Amber Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-marigold/10 rounded-full blur-2xl pointer-events-none" />

                {/* Player Header with Spotify Branding */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8px] overflow-hidden bg-sandstone border border-white/10 relative">
                      <img
                        src="/konten1.jpg"
                        alt="Slowbar Session"
                        className={`w-full h-full object-cover ${isPlaying ? 'scale-105 rotate-3' : ''} transition-transform duration-700`}
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-[15px] text-cream leading-tight">
                        SLOWBAR SOUNDTRACK
                      </h4>
                      <p className="text-[11px] font-body text-cream/70">
                        Sekata Coffee Tanjungpinang
                      </p>
                    </div>
                  </div>

                  {/* Spotify Green Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#1DB954] flex items-center justify-center text-black flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.353-.674.464-1.026.249-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.807-.161-.899-.564-.092-.402.161-.806.564-.898 4.567-1.042 8.484-.593 11.636 1.341.352.216.463.675.248 1.027zm1.465-3.259c-.27.439-.844.58-1.282.31-3.218-1.978-8.125-2.55-11.93-1.393-.497.15-1.024-.132-1.175-.628-.15-.497.132-1.024.628-1.175 4.356-1.322 9.775-.681 13.45 1.604.438.27.579.844.309 1.282zm.126-3.398C15.228 8.35 8.877 8.14 5.17 9.266c-.604.183-1.246-.164-1.429-.768-.183-.604.164-1.246.768-1.429 4.259-1.293 11.272-1.05 15.69 1.572.544.323.722 1.028.4 1.572-.323.543-1.027.722-1.571.399z"/>
                    </svg>
                  </div>
                </div>

                {/* Currently Playing Track Highlight */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-marigold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Disc3 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
                      NOW PLAYING
                    </span>
                    <span className="text-[11px] text-cream/50">{currentTrack.duration}</span>
                  </div>
                  <p className="font-display text-[15px] text-cream truncate">
                    {currentTrack.title}
                  </p>
                  <p className="text-[11px] font-body text-cream/70">
                    {currentTrack.artist}
                  </p>
                </div>

                {/* Mini Player Controls (Persis Gambar 4) */}
                <div className="flex items-center justify-between pt-2 mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTrack}
                      className="text-cream/75 hover:text-cream transition-colors p-1 active:scale-[0.97]"
                      aria-label="Previous track"
                    >
                      <SkipBack className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-cream text-espresso hover:bg-white flex items-center justify-center transition-all duration-200 ease-out active:scale-[0.97] shadow-md"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current stroke-[1.5]" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5 stroke-[1.5]" />
                      )}
                    </button>
                    
                    <button
                      onClick={nextTrack}
                      className="text-cream/75 hover:text-cream transition-colors p-1 active:scale-[0.97]"
                      aria-label="Next track"
                    >
                      <SkipForward className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>

                  {/* Volume / Ambient badge */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cream/60">
                    <Volume2 className="w-3.5 h-3.5 text-turquoise stroke-[1.5]" />
                    <span>SLOWBAR LO-FI</span>
                  </div>
                </div>

                {/* Tracklist Items (Persis Gambar 4) */}
                <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-body">
                  {playlist.map((track, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTrackIndex(idx);
                        setIsPlaying(true);
                      }}
                      className={`w-full flex items-center justify-between py-1 text-left transition-colors ${
                        activeTrackIndex === idx
                          ? 'text-marigold font-medium'
                          : 'text-cream/65 hover:text-cream'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="font-mono text-[11px] text-cream/40 min-w-[14px]">
                          {idx + 1}
                        </span>
                        <span className="truncate">{track.title}</span>
                      </div>
                      <span className="font-mono text-[11px] text-cream/40 flex-shrink-0">
                        {track.duration}
                      </span>
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 
          3 KARTU CERITA (SKIPER 104 SCROLL REVEAL CARDS)
          Dengan Font Bersih Alami (Persis Gambar 5, Tanpa AI-Slop)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-[1200px]">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 flex flex-col justify-between transition-all duration-300 rounded-[20px] bg-[#fffbf6] border-2 border-espresso/15 shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Image Frame */}
                <div className="w-full aspect-[16/10] rounded-[12px] overflow-hidden border border-espresso/15 bg-sandstone mb-4 relative group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle category tag in Image 5 font */}
                  <div className="absolute top-3 left-3 bg-[#fffbf6]/95 backdrop-blur-sm px-2.5 py-1 rounded-[6px] border border-espresso/10 text-[10px] font-mono uppercase tracking-[0.06em] text-espresso font-semibold shadow-xs">
                    {article.tag}
                  </div>
                </div>

                {/* Metadata in Image 5 font (Anti AI-Slop) */}
                <div className="flex items-center justify-between text-[12px] font-body text-[#6b584f] mb-2.5">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[20px] sm:text-[22px] leading-[1.2] text-espresso tracking-[-0.02em] mb-2.5">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-[14px] text-[#5c4d44] leading-relaxed line-clamp-3 mb-6 font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full font-body text-[13px] py-2.5 px-4 rounded-[6px] font-medium bg-[#1e6b7b] text-white hover:bg-[#15505c] transition-all duration-200 ease-out active:scale-[0.97] shadow-sm"
                >
                  Baca Catatan Lengkap &rarr;
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedArticle(null)}></div>
          
          <div className="relative w-full max-w-2xl bg-[#fffbf6] border-2 border-espresso/20 rounded-[20px] overflow-hidden z-10 max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-espresso/10 bg-[#f8f1e8]">
              <span className="text-[13px] font-body text-espresso font-medium">
                Catatan Sekata &bull; {selectedArticle.date}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-espresso hover:text-turquoise border border-espresso/15 rounded-[6px] bg-white"
                aria-label="Tutup cerita"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="w-full aspect-[16/9] rounded-[12px] overflow-hidden border border-espresso/15">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-[13px] font-body text-[#6b584f] mb-2">
                  <span>Ditulis oleh {selectedArticle.author}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="font-display text-[26px] sm:text-[32px] leading-tight text-espresso mb-4">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="font-body text-[15px] leading-relaxed text-[#2d1813] space-y-4 whitespace-pre-line border-t border-espresso/10 pt-4">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-espresso/10 flex justify-between items-center text-[13px] font-body text-[#6b584f]">
                <span>Sekata Coffee &amp; Slowbar Tanjungpinang</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="font-body text-[13px] text-espresso hover:underline underline-offset-2"
                >
                  Tutup Catatan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
