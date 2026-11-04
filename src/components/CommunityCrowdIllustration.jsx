import React from 'react';

export default function CommunityCrowdIllustration({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden relative select-none ${className}`}>
      
      {/* Hand-drawn banner header note */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-12 bg-taupe-hairline" />
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-coffee-dust font-medium flex items-center gap-2">
          <span>&bull;</span>
          <span>WARGA &amp; SAHABAT DUDUK DI MEJA SLOWBAR</span>
          <span>&bull;</span>
        </span>
        <span className="h-px w-12 bg-taupe-hairline" />
      </div>

      {/* Responsive SVG Illustration of Diverse Community Crowd */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <svg
          viewBox="0 0 1000 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-espresso"
        >
          {/* BASELINE / GROUND */}
          <path
            d="M 10 230 Q 250 228 500 230 T 990 230"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* CHARACTER 1: Person with Bandana & Smile (Left) */}
          <g transform="translate(40, 45)">
            {/* Body / Shoulders */}
            <path d="M 15 150 Q 45 110 80 150 L 90 185 L 5 185 Z" fill="#f6ede3" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Neck */}
            <rect x="42" y="105" width="16" height="15" fill="#f6ede3" stroke="currentColor" strokeWidth="2" />
            {/* Head */}
            <circle cx="50" cy="75" r="32" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Hair Bandana */}
            <path d="M 22 62 Q 50 48 78 62" stroke="#317576" strokeWidth="6" strokeLinecap="round" />
            <path d="M 50 48 L 46 36 M 50 48 L 56 38" stroke="#317576" strokeWidth="4" strokeLinecap="round" />
            {/* Eyes & Smile */}
            <circle cx="42" cy="75" r="3" fill="currentColor" />
            <circle cx="62" cy="75" r="3" fill="currentColor" />
            <path d="M 46 90 Q 52 97 58 90" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 52 79 L 52 83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* CHARACTER 2: Barista with Beard & Mug */}
          <g transform="translate(135, 30)">
            {/* Shoulders */}
            <path d="M 10 165 Q 55 125 105 165 L 115 200 L 0 200 Z" fill="#f6ede3" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Neck */}
            <rect x="50" y="115" width="18" height="18" fill="#f6ede3" stroke="currentColor" strokeWidth="2" />
            {/* Head */}
            <circle cx="59" cy="80" r="34" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Short Hair */}
            <path d="M 28 75 Q 40 42 75 44 Q 92 48 91 75" fill="currentColor" />
            {/* Beard */}
            <path d="M 38 88 Q 59 130 80 88 Q 72 108 59 110 Q 46 108 38 88 Z" fill="currentColor" />
            {/* Eyes & Glasses */}
            <circle cx="48" cy="78" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="70" cy="78" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 56 78 L 62 78" stroke="currentColor" strokeWidth="2" />
            <circle cx="48" cy="78" r="2.5" fill="currentColor" />
            <circle cx="70" cy="78" r="2.5" fill="currentColor" />
            {/* Smile in beard */}
            <path d="M 53 96 Q 59 101 65 96" stroke="#fff9f2" strokeWidth="2.5" strokeLinecap="round" />
            {/* Holding Ceramic Mug */}
            <g transform="translate(75, 140)">
              <rect x="0" y="0" width="22" height="26" rx="4" fill="#fff9f2" stroke="currentColor" strokeWidth="2" />
              <path d="M 22 6 C 29 6 29 20 22 20" stroke="currentColor" strokeWidth="2" fill="none" />
              {/* Steam */}
              <path d="M 7 -6 Q 11 -12 7 -18" stroke="#317576" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 14 -4 Q 18 -10 14 -16" stroke="#317576" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </g>
          </g>

          {/* CHARACTER 3: Woman with Hijab holding Takeaway Cup */}
          <g transform="translate(250, 40)">
            {/* Shoulders */}
            <path d="M 5 155 Q 50 120 95 155 L 105 190 L 0 190 Z" fill="#317576" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Hijab wrap around head */}
            <path d="M 18 85 C 15 45 40 30 55 30 C 75 30 95 45 92 85 C 92 120 75 135 55 135 C 35 135 18 120 18 85 Z" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Face oval inside hijab */}
            <ellipse cx="55" cy="80" rx="22" ry="26" fill="#f6ede3" stroke="currentColor" strokeWidth="2" />
            {/* Eyes with cheerful arch */}
            <path d="M 44 76 Q 49 71 54 76" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 60 76 Q 65 71 70 76" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            {/* Cute smile & blush */}
            <path d="M 51 92 Q 57 97 63 92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="42" cy="86" r="3" fill="#febf6f" opacity="0.8" />
            <circle cx="70" cy="86" r="3" fill="#febf6f" opacity="0.8" />
            {/* Takeaway cup with straw */}
            <g transform="translate(18, 130)">
              <polygon points="0,5 20,5 17,32 3,32" fill="#fff9f2" stroke="currentColor" strokeWidth="2" />
              <rect x="-2" y="2" width="24" height="4" rx="2" fill="#fff9f2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M 10 2 L 14 -10" stroke="#317576" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>

          {/* CHARACTER 4: The Mascot! (Bowler Hat & Laughing Mouth, like Sekata's logo!) */}
          <g transform="translate(365, 15)">
            {/* Yellow / Marigold background glow */}
            <circle cx="65" cy="90" r="50" fill="#febf6f" opacity="0.25" />
            {/* Shoulders */}
            <path d="M 15 180 Q 65 140 115 180 L 125 215 L 5 215 Z" fill="#fff9f2" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
            {/* Bowler Hat */}
            <path d="M 35 60 C 35 25 95 25 95 60 Z" fill="#317576" stroke="currentColor" strokeWidth="2.2" />
            <ellipse cx="65" cy="60" rx="42" ry="7" fill="#317576" stroke="currentColor" strokeWidth="2.2" />
            {/* Head Profile Laughing (Inspired by Sekata Logo) */}
            <circle cx="65" cy="95" r="30" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Open talking mouth / speech */}
            <path d="M 78 98 Q 92 102 85 114 Q 75 110 70 106 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
            {/* Sound waves from mouth */}
            <path d="M 94 98 Q 98 103 94 108" stroke="#c03001" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 100 95 Q 106 103 100 112" stroke="#c03001" strokeWidth="2.5" strokeLinecap="round" />
            {/* Happy Eye */}
            <circle cx="60" cy="88" r="3.5" fill="currentColor" />
            {/* Mascot label badge */}
            <g transform="translate(30, 192)">
              <rect x="0" y="0" width="70" height="18" rx="3" fill="#317576" />
              <text x="35" y="13" textAnchor="middle" fill="#fff9f2" fontSize="9" fontFamily="monospace" fontWeight="bold">
                SEKATA MASCOT
              </text>
            </g>
          </g>

          {/* CHARACTER 5: Young Creative with Cap & Headphones */}
          <g transform="translate(500, 35)">
            {/* Shoulders */}
            <path d="M 10 160 Q 55 120 100 160 L 110 195 L 0 195 Z" fill="#f6ede3" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Head */}
            <circle cx="55" cy="85" r="32" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Backward Cap */}
            <path d="M 25 80 C 25 55 85 55 85 80 Z" fill="#c03001" stroke="currentColor" strokeWidth="2" />
            <path d="M 82 78 L 102 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Headphones around neck */}
            <path d="M 30 115 C 30 135 80 135 80 115" stroke="currentColor" strokeWidth="4" fill="none" />
            <rect x="24" y="105" width="10" height="16" rx="3" fill="#317576" stroke="currentColor" strokeWidth="1.5" />
            <rect x="76" y="105" width="10" height="16" rx="3" fill="#317576" stroke="currentColor" strokeWidth="1.5" />
            {/* Glasses */}
            <rect x="36" y="80" width="15" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="58" y="80" width="15" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="51" y1="85" x2="58" y2="85" stroke="currentColor" strokeWidth="2" />
            <circle cx="43" cy="85" r="2.5" fill="currentColor" />
            <circle cx="65" cy="85" r="2.5" fill="currentColor" />
            {/* Confident Smile */}
            <path d="M 48 102 Q 55 106 62 102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* CHARACTER 6: Barista Pouring V60 Gooseneck Kettle */}
          <g transform="translate(625, 25)">
            {/* Shoulders with Apron */}
            <path d="M 10 170 Q 55 130 100 170 L 110 205 L 0 205 Z" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Apron Straps */}
            <line x1="38" y1="145" x2="38" y2="205" stroke="#317576" strokeWidth="3" />
            <line x1="72" y1="145" x2="72" y2="205" stroke="#317576" strokeWidth="3" />
            {/* Head */}
            <circle cx="55" cy="78" r="32" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Bun Hair */}
            <circle cx="55" cy="36" r="14" fill="currentColor" />
            <path d="M 28 72 C 28 45 82 45 82 72 Z" fill="currentColor" />
            {/* Focused peaceful expression */}
            <path d="M 43 78 Q 48 82 53 78" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 61 78 Q 66 82 71 78" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 52 95 Q 57 99 62 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Gooseneck Kettle in hands */}
            <g transform="translate(85, 125)">
              <path d="M 0 10 L 22 10 L 20 30 L 2 30 Z" fill="#cbbbb4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M 20 24 Q 30 15 28 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              {/* Droplet */}
              <circle cx="28" cy="1" r="2" fill="#317576" />
            </g>
          </g>

          {/* CHARACTER 7: Woman with Curly Hair laughing with friend */}
          <g transform="translate(745, 45)">
            {/* Shoulders */}
            <path d="M 10 150 Q 50 110 90 150 L 100 185 L 0 185 Z" fill="#f6ede3" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Big Curly Hair */}
            <circle cx="32" cy="65" r="16" fill="currentColor" />
            <circle cx="48" cy="48" r="18" fill="currentColor" />
            <circle cx="68" cy="52" r="16" fill="currentColor" />
            <circle cx="78" cy="70" r="15" fill="currentColor" />
            {/* Face */}
            <circle cx="54" cy="78" r="28" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Laughing arched eyes */}
            <path d="M 42 74 Q 48 68 53 74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 59 74 Q 65 68 70 74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Big Open Laugh */}
            <path d="M 46 88 Q 56 102 66 88 Z" fill="currentColor" />
          </g>

          {/* CHARACTER 8: Older Gentleman with Flat Cap reading book */}
          <g transform="translate(855, 40)">
            {/* Shoulders */}
            <path d="M 10 155 Q 55 115 100 155 L 110 190 L 0 190 Z" fill="#317576" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Flat Cap */}
            <ellipse cx="55" cy="58" rx="34" ry="12" fill="#522c25" stroke="currentColor" strokeWidth="2" />
            <path d="M 28 60 Q 55 42 82 60" fill="#522c25" stroke="currentColor" strokeWidth="2" />
            {/* Face */}
            <circle cx="55" cy="85" r="30" fill="#fff9f2" stroke="currentColor" strokeWidth="2.2" />
            {/* Mustache */}
            <path d="M 42 98 Q 55 92 68 98 Q 55 105 42 98 Z" fill="currentColor" />
            {/* Reading Glasses */}
            <circle cx="46" cy="82" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="64" cy="82" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="53" y1="82" x2="57" y2="82" stroke="currentColor" strokeWidth="1.8" />
            {/* Book in hands */}
            <g transform="translate(30, 145)">
              <polygon points="0,5 25,0 50,5 50,25 25,20 0,25" fill="#fff9f2" stroke="currentColor" strokeWidth="1.8" />
              <line x1="25" y1="0" x2="25" y2="20" stroke="currentColor" strokeWidth="1.8" />
            </g>
          </g>

          {/* FLOATING DOODLES / ACCENTS ACROSS THE BANNER */}
          {/* Sparkles */}
          <path d="M 120 30 L 122 36 L 128 38 L 122 40 L 120 46 L 118 40 L 112 38 L 118 36 Z" fill="#febf6f" />
          <path d="M 480 20 L 482 25 L 487 27 L 482 29 L 480 34 L 478 29 L 473 27 L 478 25 Z" fill="#febf6f" />
          <path d="M 840 25 L 842 30 L 847 32 L 842 34 L 840 39 L 838 34 L 833 32 L 838 30 Z" fill="#febf6f" />

          {/* Floating Coffee Beans */}
          <g transform="translate(230, 20) rotate(15)">
            <ellipse cx="6" cy="9" rx="6" ry="8" fill="#522c25" />
            <path d="M 6 2 Q 8 9 6 16" stroke="#fff9f2" strokeWidth="1.2" fill="none" />
          </g>
          <g transform="translate(730, 25) rotate(-25)">
            <ellipse cx="6" cy="9" rx="6" ry="8" fill="#522c25" />
            <path d="M 6 2 Q 4 9 6 16" stroke="#fff9f2" strokeWidth="1.2" fill="none" />
          </g>

          {/* Speech Bubble: "Mari Bertemu & Bercerita" */}
          <g transform="translate(470, 75)">
            <rect x="0" y="0" width="135" height="30" rx="6" fill="#fff9f2" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="12,30 20,30 10,38" fill="#fff9f2" stroke="currentColor" strokeWidth="1.8" />
            <line x1="12" y1="30" x2="20" y2="30" stroke="#fff9f2" strokeWidth="2.2" />
            <text x="67" y="19" textAnchor="middle" fill="#c03001" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
              Bercerita Tentang Hidup!
            </text>
          </g>
        </svg>
      </div>

    </div>
  );
}
