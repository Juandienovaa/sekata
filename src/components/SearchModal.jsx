import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS, formatRupiah } from '../data/products';

export default function SearchModal({ isOpen, onClose, onQuickView }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tastingNotes.some((n) => n.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-espresso/60 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-cream border-hairline rounded-[8px] overflow-hidden z-10 shadow-none">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b-hairline bg-linen gap-3">
          <Search className="w-5 h-5 text-turquoise" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="CARI NAMA KOPI, SLOWBAR, RASA, ATAU MERCHANDISE..."
            className="flex-1 bg-transparent text-sm font-mono uppercase text-espresso placeholder:text-coffee-dust/60 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-espresso hover:text-turquoise border-hairline rounded-[3px] bg-cream"
            aria-label="Tutup pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex justify-between items-center text-[11px] font-mono text-coffee-dust uppercase mb-2">
            <span>{searchTerm.trim() === '' ? 'MENU REKOMENDASI KEDAI' : `DITEMUKAN ${results.length} HASIL PENCARIAN`}</span>
            <span>TEKAN ESC UNTUK KELUAR</span>
          </div>

          {results.length === 0 ? (
            <p className="text-center py-8 font-mono text-xs text-coffee-dust">
              TIDAK MENEMUKAN MENU UNTUK KATA KUNCI "{searchTerm.toUpperCase()}".
            </p>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onQuickView(item);
                  onClose();
                }}
                className="flex items-center justify-between gap-4 p-3 bg-linen hover:bg-cream border-hairline rounded-[6px] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-[4px] border-hairline bg-sandstone flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-body text-sm font-semibold text-espresso group-hover:text-turquoise truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-mono text-coffee-dust truncate">
                      {item.categoryLabel} &bull; {formatRupiah(item.price)}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-turquoise flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  LIHAT DETAIL <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
