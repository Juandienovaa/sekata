import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X, Calendar, User, Clock, MessageSquareHeart } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export default function CommunityBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ARTICLES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ARTICLES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="cerita" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header with Slider Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-turquoise text-cream">KOMUNITAS &amp; CERITA</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                CATATAN DARI MEJA SLOWBAR TANJUNGPINANG
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.05em] mb-2">
              Setiap Pertemuan Punya Cerita.
            </h2>
            <p className="text-[14px] sm:text-[15px] font-body text-coffee-dust max-w-xl">
              Kisah-kisah kecil di balik seduhan kopi, rasa penasaran yang terjawab, dan kehangatan yang tumbuh di antara kita.
            </p>
          </div>

          {/* Carousel Slider Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-espresso font-medium tracking-[0.05em]">
              0{currentIndex + 1} — 0{ARTICLES.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border-hairline rounded-[3px] bg-linen text-espresso hover:border-turquoise hover:text-turquoise transition-colors"
                aria-label="Cerita sebelumnya"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border-hairline rounded-[3px] bg-linen text-espresso hover:border-turquoise hover:text-turquoise transition-colors"
                aria-label="Cerita selanjutnya"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className={`card-editorial p-6 flex flex-col justify-between transition-all duration-300 hover:border-turquoise ${
                index === currentIndex ? 'ring-1 ring-turquoise' : ''
              }`}
            >
              <div>
                {/* Image Frame */}
                <div className="w-full aspect-[16/10] rounded-[8px] overflow-hidden border-hairline bg-sandstone mb-4 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-stamp bg-cream/95 backdrop-blur-sm text-espresso border-hairline">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Date & Read Time */}
                <div className="flex items-center justify-between text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-2">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[22px] sm:text-[24px] text-espresso leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[13px] font-body text-coffee-dust leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div className="pt-4 border-t-hairline">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="btn-filled w-full text-[12px] py-2.5 tracking-[0.05em] bg-turquoise border-turquoise hover:bg-turquoise-dark"
                >
                  BACA CERITA LENGKAP
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Community Social Callout */}
        <div className="mt-12 p-6 bg-linen rounded-[8px] border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-turquoise"></span>
            <p className="text-xs font-mono uppercase tracking-[0.05em] text-espresso">
              PUNYA CERITA ATAU MOMEN BERKESAN DI SEKATA? BAGIKAN KE INSTAGRAM KAMI
            </p>
          </div>
          <a
            href="https://www.instagram.com/sekata.tnj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-turquoise uppercase tracking-[0.05em] font-medium hover:underline"
          >
            TAG @SEKATA.TNJ DI INSTAGRAM &rarr;
          </a>
        </div>

      </div>

      {/* Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedArticle(null)}></div>
          
          <div className="relative w-full max-w-2xl bg-cream border-hairline rounded-[8px] overflow-hidden z-10 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-3.5 border-b-hairline bg-linen">
              <span className="badge-stamp bg-turquoise text-cream">
                CERITA SEKATA &bull; {selectedArticle.date}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-espresso hover:text-turquoise border-hairline rounded-[3px] bg-cream"
                aria-label="Tutup cerita"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="w-full aspect-[16/9] rounded-[6px] overflow-hidden border-hairline">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-coffee-dust uppercase mb-2">
                  <span>OLEH {selectedArticle.author}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="font-display text-[26px] sm:text-[32px] leading-tight text-espresso mb-4">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="font-body text-[15px] leading-relaxed text-espresso space-y-4 whitespace-pre-line border-t-hairline pt-4">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t-hairline flex justify-between items-center text-xs font-mono text-coffee-dust">
                <span>SEKATA COFFEE TANJUNGPINANG</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-ghost text-xs py-1.5 px-3"
                >
                  TUTUP CERITA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
