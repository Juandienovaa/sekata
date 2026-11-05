import React from 'react';

export default function CommunityCrowdIllustration({ className = "" }) {
  return (
    <div className={`w-full relative overflow-hidden select-none border-t-hairline border-b-hairline bg-cream ${className}`}>
      
      {/* Top Centered Caption Badge (Persis seperti Banner Animated Crowd di Gambar 2) */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3.5 py-1 bg-cream/95 backdrop-blur-md rounded-[4px] border-hairline text-[10px] font-mono text-coffee-dust uppercase tracking-[0.08em] shadow-sm whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-turquoise"></span>
        <span>WARGA &amp; SAHABAT DUDUK DI MEJA SLOWBAR &bull; #KECILBERTUMBUH</span>
      </div>

      {/* Panoramic Horizontal Image Strip (Persegi Panjang Memanjang Rata Ukuran Gambar 2) */}
      <div className="w-full h-[180px] sm:h-[220px] lg:h-[240px] relative">
        <img
          src="/ilustrasi1.jpg"
          alt="Ilustrasi Komunitas dan Warga Sekata Coffee &amp; Slowbar"
          className="w-full h-full object-cover object-center"
        />
      </div>

    </div>
  );
}
