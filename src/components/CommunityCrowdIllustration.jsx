import React from 'react';

export default function CommunityCrowdIllustration({ className = "" }) {
  return (
    <div className={`w-full relative overflow-hidden select-none border-t-hairline border-b-hairline bg-cream ${className}`}>
      
      {/* Panoramic Horizontal Image Strip */}
      <div className="w-full h-[180px] sm:h-[220px] lg:h-[240px] relative">
        <img
          src="/ilustrasi1.jpg"
          alt="Ilustrasi Komunitas dan Warga Sekata Coffee &amp; Slowbar"
          className="w-full h-full object-cover object-top sm:object-center"
        />
      </div>

    </div>
  );
}
