import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

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
        <div className="flex items-center px-4 py-3 border-b-hairline bg-linen gap-3">
          <Search className="w-5 h-5 text-coffee-dust" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="SEARCH BEANS, BAR DRINKS, FLAVORS, OR GEAR..."
            className="flex-1 bg-transparent text-sm font-mono uppercase text-espresso placeholder:text-coffee-dust/60 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-espresso hover:text-burnt-orange border-hairline rounded-[3px] bg-cream"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex justify-between items-center text-[11px] font-mono text-coffee-dust uppercase mb-2">
            <span>{searchTerm.trim() === '' ? 'POPULAR PICKS' : `FOUND ${results.length} RESULTS`}</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>

          {results.length === 0 ? (
            <p className="text-center py-8 font-mono text-xs text-coffee-dust">
              NO MATCHES FOUND FOR "{searchTerm.toUpperCase()}".
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
                    <h4 className="font-body text-sm font-semibold text-espresso group-hover:text-burnt-orange truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-mono text-coffee-dust truncate">
                      {item.categoryLabel} • ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-burnt-orange flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
