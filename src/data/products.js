export const PRODUCTS = [
  // Menu Biji Kopi
  {
    id: 'sekata-house-blend',
    name: 'Sekata House Blend',
    subtitle: 'Biji Kopi Sangrai Segar • Arabika Pilihan untuk Slowbar',
    category: 'beans',
    categoryLabel: 'BIJI KOPI',
    price: 85000,
    image: '/friend_blend_bag.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 2,
    complexity: 4,
    tastingNotes: ['Cokelat Manis', 'Karamel', 'Kacang Panggang', 'Citrus Segar'],
    badge: 'PILIHAN UTAMA',
    description: 'Biji kopi signature Sekata yang diracik khusus untuk menghasilkan seduhan yang seimbang, manis, dan nyaman dinikmati kapan saja. Cocok untuk seduh manual V60, tubruk, maupun espresso rumahan.',
    details: {
      origin: 'Gayo, Aceh & Mandheling, Sumatera Utara',
      process: 'Washed & Natural Arabika',
      elevation: '1.400 - 1.650 mdpl',
      brewMethod: 'V60, French Press, Mokapot, Espresso'
    },
    sizes: ['Bungkus 200g', 'Bungkus 500g (+Rp 95.000)', 'Bungkus 1kg (+Rp 220.000)'],
    temperatures: ['Biji Utuh (Whole Bean)', 'Giling Halus (Espresso)', 'Giling Sedang (V60/Filter)', 'Giling Kasar (Cold Brew)']
  },
  {
    id: 'into-the-void-dark',
    name: 'Sekata Bold Dark Roast',
    subtitle: 'Sangrai Gelap Mantap • Karamelisasi Pekat & Kakao',
    category: 'beans',
    categoryLabel: 'BIJI KOPI',
    price: 85000,
    image: '/into_the_void_bag.jpg',
    roastLevel: 5,
    roastTitle: 'Dark Roast',
    acidity: 1,
    complexity: 4,
    tastingNotes: ['Kakao Hitam', 'Gula Palem', 'Kayu Manis', 'Aroma Bakar'],
    badge: 'RASA TEGAS',
    description: 'Bagi pencinta kopi dengan profil rasa yang kuat, tebal, dan bebas asam. Dipanggang hingga tahap second crack dengan penuh perhatian agar minyak alaminya matang sempurna tanpa gosong.',
    details: {
      origin: 'Temanggung Robusta & Flores Bajawa Arabika',
      process: 'Dry Hulled & Washed',
      elevation: '1.200 - 1.500 mdpl',
      brewMethod: 'Kopi Tubruk, Mokapot, Kopi Susu, Vietnam Drip'
    },
    sizes: ['Bungkus 200g', 'Bungkus 500g (+Rp 95.000)', 'Bungkus 1kg (+Rp 220.000)'],
    temperatures: ['Biji Utuh (Whole Bean)', 'Giling Halus', 'Giling Sedang', 'Giling Kasar']
  },

  // Minuman Bar & Kopi
  {
    id: 'classic-americano',
    name: 'Caffe Americano',
    subtitle: 'Double Ristretto & Air Mineral Terfiltrasi Murni',
    category: 'drinks',
    categoryLabel: 'MINUMAN KOPI',
    price: 18000,
    image: '/americano.jpg',
    roastLevel: 4,
    roastTitle: 'Medium-Dark Roast',
    acidity: 2,
    complexity: 3,
    tastingNotes: ['Cokelat Gelap', 'Kenari Panggang', 'Aftertaste Bersih'],
    badge: 'MENU KLASIK',
    description: 'Ekstraksi ganda ristretto dari biji kopi pilihan Sekata dipadukan dengan air mineral bersuhu ideal. Menghasilkan karakter cokelat pekat dengan sensasi akhir yang manis dan jernih.',
    details: {
      origin: 'Blend Arabika & Robusta Pilihan',
      process: 'Full Washed',
      elevation: '1.400 mdpl',
      brewMethod: 'Espresso Bar 9 Bar'
    },
    sizes: ['Ukuran Reguler', 'Ukuran Besar (+Rp 4.000)'],
    temperatures: ['Dingin (Es)', 'Panas']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    subtitle: 'Susu UHT Segar, Tuangan Espresso & Saus Karamel Buatan Sendiri',
    category: 'drinks',
    categoryLabel: 'MINUMAN KOPI',
    price: 25000,
    image: '/Caramel_macchiato.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 1,
    complexity: 4,
    tastingNotes: ['Gula Karamel Bakar', 'Krim Vanila', 'Crema Lembut'],
    badge: 'FAVORIT KEDAI',
    description: 'Perpaduan bertingkat dalam gelas transparan: susu lembut beraroma vanila dipadukan tetesan espresso harum, lalu diberi lelehan saus karamel legit di bagian atas.',
    details: {
      origin: 'Arabika Single Origin',
      process: 'Washed Process',
      elevation: '1.500 mdpl',
      brewMethod: 'Steamed Microfoam & Float Espresso'
    },
    sizes: ['Ukuran Reguler', 'Ukuran Besar (+Rp 4.000)'],
    temperatures: ['Dingin (Es)', 'Panas']
  },
  {
    id: 'vanilla-latte',
    name: 'Madagascar Vanilla Latte',
    subtitle: 'Espresso Halus, Susu Steam Lembut & Ekstrak Vanila Asli',
    category: 'drinks',
    categoryLabel: 'MINUMAN KOPI',
    price: 23000,
    image: '/vanillalatte.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 2,
    complexity: 4,
    tastingNotes: ['Aroma Vanila', 'Madu Ringan', 'Susu Gurih Manis'],
    badge: 'BEST SELLER',
    description: 'Susu bertekstur lembut dipadukan dengan sirup vanila organik dan espresso ganda. Manisnya pas, lembut di lidah, dan tetap menonjolkan karakter rasa kopi yang harum.',
    details: {
      origin: 'Arabika Aceh Gayo & Toraja',
      process: 'Semi-Washed',
      elevation: '1.600 mdpl',
      brewMethod: 'Double Ristretto + Microfoam Susu'
    },
    sizes: ['Ukuran Reguler', 'Ukuran Besar (+Rp 4.000)'],
    temperatures: ['Dingin (Es)', 'Panas']
  },
  {
    id: 'slow-drip-cold-pour',
    name: 'Signature Slow-Drip Cold Pour',
    subtitle: 'Seduhan Tetes Lambat 14 Jam Disajikan di Atas Es Jernih',
    category: 'drinks',
    categoryLabel: 'SLOWBAR CRAFT',
    price: 24000,
    image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
    roastLevel: 3,
    roastTitle: 'Slow Drip Extraction',
    acidity: 3,
    complexity: 5,
    tastingNotes: ['Buah Beri Manis', 'Kakao Nibs', 'Segar Dingin', 'Aroma Bunga'],
    badge: 'SLOWBAR SPESIAL',
    description: 'Kopi yang diseduh tetes demi tetes menggunakan menara ekstraksi dingin selama belasan jam. Menghasilkan rasa yang luar biasa bersih, rasa manis alami yang keluar maksimal, dan aroma buah yang segar.',
    details: {
      origin: 'Single Origin Arabika Specialty',
      process: 'Natural Anaerob',
      elevation: '1.700 mdpl',
      brewMethod: 'Ekstraksi Dingin Tetes Lambat'
    },
    sizes: ['Gelas Sajian', 'Botol Bawa Pulang 500ml (+Rp 18.000)'],
    temperatures: ['Dingin dengan Es Jernih']
  },
  {
    id: 'red-velvet-latte',
    name: 'Red Velvet Artisan Latte',
    subtitle: 'Bubuk Kakao Pilihan, Ekstrak Bit Alami & Susu Lembut Gurih',
    category: 'specialty',
    categoryLabel: 'NON-KOPI',
    price: 22000,
    image: '/redvelvet.jpg',
    roastLevel: 1,
    roastTitle: 'Non-Coffee',
    acidity: 1,
    complexity: 4,
    tastingNotes: ['Cokelat Velvet', 'Krim Gurih', 'Manis Pas'],
    badge: 'BEBAS KAFEIN',
    description: 'Pilihan pas bagi kamu yang ingin bersantai di Sekata tanpa kafein. Dibuat dari cokelat beludru merah yang lembut dan gurih, disajikan hangat maupun dingin dengan busa susu halus.',
    details: {
      origin: 'Kakao Olahan Alami Nusantara',
      process: 'Artisan Blend',
      elevation: '-',
      brewMethod: 'Steamed Microfoam'
    },
    sizes: ['Ukuran Reguler', 'Ukuran Besar (+Rp 4.000)'],
    temperatures: ['Dingin (Es)', 'Panas']
  },
  {
    id: 'sun-steeped-lemon-tea',
    name: 'Artisan Iced Lemon Tea',
    subtitle: 'Seduhan Daun Teh Hitam Pegunungan & Perasan Lemon Segar',
    category: 'specialty',
    categoryLabel: 'TEH & MOCKTAIL',
    price: 18000,
    image: '/lemon tea.jpg',
    roastLevel: 1,
    roastTitle: 'Artisan Tea',
    acidity: 4,
    complexity: 3,
    tastingNotes: ['Lemon Segar', 'Sepat Teh Alami', 'Madu Bunga Liar'],
    badge: 'SEGAR HARIAN',
    description: 'Daun teh hitam utuh yang diseduh perlahan, dipadukan perasan buah lemon segar dan sentuhan madu. Pilihan pelepas dahaga paling pas di cuaca Tanjungpinang yang cerah.',
    details: {
      origin: 'Kebun Teh Pegunungan Jawa Barat',
      process: 'Orthodox Black Tea',
      elevation: '1.500 mdpl',
      brewMethod: 'Cold Infusion & Perasan Lemon Asli'
    },
    sizes: ['Ukuran Reguler', 'Ukuran Pitcher (+Rp 15.000)'],
    temperatures: ['Dingin dengan Irisan Lemon']
  },

  // Merchandise & Aksesoris
  {
    id: 'kaos-sekata',
    name: 'Kaos Sekata #KecilBertumbuh',
    subtitle: 'Katun Combed 24s Premium • Sablon Sablon Manual Halus',
    category: 'merch',
    categoryLabel: 'MERCHANDISE',
    price: 135000,
    image: '/amps_gear_tshirt.jpg',
    roastLevel: 0,
    roastTitle: 'Apparel',
    acidity: 0,
    complexity: 5,
    tastingNotes: ['Katun Lembut Adem', 'Warna Cream Natural', 'Potongan Santai Unisex'],
    badge: 'EDISI SPESIAL',
    description: 'Kaos resmi Sekata dengan cetakan grafis #KecilBertumbuh dan identitas Tanjungpinang. Bahan katun nyaman dipakai nongkrong berlama-lama di slowbar maupun bepergian santai.',
    details: {
      origin: 'Produksi Lokal Kreatif Tanjungpinang',
      process: 'Sablon Waterbased Discharge',
      elevation: '-',
      brewMethod: 'Cuci Dingin, Jangan Setrika Sablon Langsung'
    },
    sizes: ['Ukuran S', 'Ukuran M', 'Ukuran L', 'Ukuran XL', 'Ukuran XXL'],
    temperatures: ['Unisex']
  },
  {
    id: 'diner-mug-sekata',
    name: 'Cangkir Keramik Sekata Vintage',
    subtitle: 'Cangkir Tebal 280ml • Menjaga Suhu Seduhan Kopi Tetap Hangat',
    category: 'merch',
    categoryLabel: 'MERCHANDISE',
    price: 65000,
    image: '/diner_mug.jpg',
    roastLevel: 0,
    roastTitle: 'Keramik Bar',
    acidity: 0,
    complexity: 4,
    tastingNotes: ['Keramik Tahan Panas', 'Gagang Ergonomis', 'Logo Cetak Bakar Awet'],
    badge: 'KLASIK MEJA',
    description: 'Cangkir keramik tebal bergaya vintage yang sama persis dengan yang kami gunakan saat menyajikan kopi hangat di meja Sekata. Menahan panas kopi lebih lama saat kamu asyik bertukar cerita.',
    details: {
      origin: 'Keramik Bakar Porselen',
      process: 'Cetak Sablon Decal Bakar',
      elevation: '-',
      brewMethod: 'Aman untuk Microwave & Dishwasher'
    },
    sizes: ['Kapasitas 280ml Standar'],
    temperatures: ['Keramik']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'SEMUA MENU' },
  { id: 'drinks', label: 'MINUMAN BAR & KOPI' },
  { id: 'beans', label: 'BIJI KOPI SANGRAI' },
  { id: 'specialty', label: 'NON-KOPI & TEH' },
  { id: 'merch', label: 'MERCHANDISE' }
];

export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
};
