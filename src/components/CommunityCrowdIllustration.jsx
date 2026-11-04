import React from 'react';

export default function CommunityCrowdIllustration({ className = "" }) {
  return (
    <div className={`w-full max-w-5xl mx-auto px-2 sm:px-4 ${className}`}>
      
      {/* Hand-drawn banner header note */}
      <div className="flex items-center justify-center gap-3 mb-6 select-none">
        <span className="h-px w-12 bg-taupe-hairline" />
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-coffee-dust font-medium flex items-center gap-2">
          <span>&bull;</span>
          <span>WARGA &amp; SAHABAT DUDUK DI MEJA SLOWBAR</span>
          <span>&bull;</span>
        </span>
        <span className="h-px w-12 bg-taupe-hairline" />
      </div>

      {/* Frame Gambar Ilustrasi Asli Sekata Coffee */}
      <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden border-2 border-hairline bg-cream shadow-md group">
        <img
          src="/ilustrasi1.jpg"
          alt="Ilustrasi Komunitas dan Warga Sekata Coffee &amp; Slowbar"
          className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
        />

        {/* Floating Stamp Badge */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-cream/95 backdrop-blur-md px-3 py-1.5 rounded-[4px] border-hairline text-[10px] font-mono text-espresso uppercase tracking-[0.05em] font-medium shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
          <span>#KECILBERTUMBUH &bull; TANJUNGPINANG</span>
        </div>
      </div>

    </div>
  );
}
