export const PRODUCTS = [
  {
    id: 'classic-americano',
    name: 'Classic Americano',
    subtitle: 'Double Ristretto & Pure Mountain Spring Water',
    category: 'espresso',
    categoryLabel: 'Espresso & Water',
    price: 4.25,
    image: '/americano.jpg',
    roastLevel: 4,
    roastTitle: 'Medium-Dark Roast',
    acidity: 2,
    complexity: 3,
    tastingNotes: ['Dark Chocolate', 'Roasted Walnut', 'Warm Caramel', 'Toasted Cedar'],
    badge: 'HOUSE STAPLE',
    description: 'Pulled from our vintage two-group lever machine, combining double ristretto with temperature-tuned spring water. Deep roasted cocoa nuances with a clean, sweet finish that lingers like an acoustic coda.',
    details: {
      origin: 'Huila, Colombia & Minas Gerais, Brazil',
      process: 'Washed & Natural Blend',
      elevation: '1,650m - 1,900m',
      brewMethod: 'Espresso + 195°F Water'
    },
    sizes: ['12oz Regular', '16oz Large', '1lb Whole Bean Bag (+$14.00)'],
    temperatures: ['Hot', 'Iced']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    subtitle: 'Steamed Microfoam, Espresso Float & Hand-Cooked Amber Drizzle',
    category: 'espresso',
    categoryLabel: 'Espresso & Milk',
    price: 5.75,
    image: '/Caramel_macchiato.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 1,
    complexity: 4,
    tastingNotes: ['Burnt Brown Sugar', 'Vanilla Custard', 'Toasted Hazelnut', 'Velvet Crema'],
    badge: 'BARISTA FAVORITE',
    description: 'Layered perfection in clear glass: silky steamed whole milk kissed with organic Madagascar vanilla, marked with an espresso drop, and crowned with house-made amber burnt sugar drizzle.',
    details: {
      origin: 'Antigua, Guatemala',
      process: 'Washed / Sun-Dried on Patios',
      elevation: '1,800m',
      brewMethod: 'Steamed Microfoam & Espresso Float'
    },
    sizes: ['12oz Regular', '16oz Large'],
    temperatures: ['Hot', 'Iced']
  },
  {
    id: 'madagascar-vanilla-latte',
    name: 'Madagascar Vanilla Latte',
    subtitle: 'Double Espresso, Velvety Microfoam & Hand-Scraped Vanilla Pods',
    category: 'espresso',
    categoryLabel: 'Espresso & Milk',
    price: 5.50,
    image: '/vanillalatte.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 2,
    complexity: 4,
    tastingNotes: ['Bourbon Vanilla', 'Silky Honeycomb', 'Golden Almond', 'Sweet Cream'],
    badge: 'SEASONAL CLASSIC',
    description: 'Real vanilla bean pods simmered with unrefined cane sugar, paired with our house espresso and textured microfoam. Comforting, sweet, and tactile without masking the coffee’s natural stone fruit notes.',
    details: {
      origin: 'Yirgacheffe, Ethiopia & Jinotega, Nicaragua',
      process: 'Honey Process',
      elevation: '1,750m',
      brewMethod: 'Double Ristretto + Velvet Milk'
    },
    sizes: ['12oz Regular', '16oz Large'],
    temperatures: ['Hot', 'Iced']
  },
  {
    id: 'signature-cold-pour',
    name: 'Signature Slow-Drip Cold Pour',
    subtitle: 'Single-Origin Cold Extraction Chilled on Hand-Carved Ice',
    category: 'cold',
    categoryLabel: 'Cold Extraction',
    price: 5.25,
    image: '/Sokata_beverage_product_photography_c823fac9_2K.jpg',
    roastLevel: 3,
    roastTitle: 'Kyoto Drip Extraction',
    acidity: 3,
    complexity: 5,
    tastingNotes: ['Blackberry Compote', 'Dark Chocolate Nibs', 'Meyer Lemon', 'Sweet Bourbon'],
    badge: 'LIMITED COLD BATCH',
    description: 'Extracted drop-by-drop through our custom Japanese glass tower over 18 hours. Ultra-clean body with sparkling berry brightness and dark chocolate liqueur finish, served over carved clear ice.',
    details: {
      origin: 'Nyeri Hill, Kenya',
      process: 'Double Washed',
      elevation: '1,950m',
      brewMethod: '18-Hour Slow Kyoto Tower'
    },
    sizes: ['16oz Jar', '32oz Growler (+$9.00)'],
    temperatures: ['Chilled / Over Ice']
  },
  {
    id: 'red-velvet-botanical-latte',
    name: 'Red Velvet Botanical Latte',
    subtitle: 'Roasted Cacao, Beetroot Botanicals & Steamed Oat Milk',
    category: 'specialty',
    categoryLabel: 'Botanical & Specialty',
    price: 5.85,
    image: '/redvelvet.jpg',
    roastLevel: 2,
    roastTitle: 'Specialty Craft',
    acidity: 1,
    complexity: 5,
    tastingNotes: ['Dutch Cocoa', 'Raspberry Blossom', 'Sweet Beetroot', 'Malted Vanilla'],
    badge: 'CAFFEINE-FREE OPTION',
    description: 'An all-day crowd favorite: antioxidant-rich organic red beet reduction whipped with raw Ecuadorian heirloom cacao, lightly sweetened with maple and poured with creamy micro-foamed oat milk.',
    details: {
      origin: 'Manabí, Ecuador (Cacao) & Local Beet Harvest',
      process: 'Single-Estate Fermented Cacao & Cold-Pressed Botanical',
      elevation: 'Lowland Shade Canopy',
      brewMethod: 'Steamed Botanical Microfoam'
    },
    sizes: ['12oz Regular', '16oz Large'],
    temperatures: ['Hot', 'Iced']
  },
  {
    id: 'sun-steeped-lemon-tea',
    name: 'Sun-Steeped Artisan Lemon Tea',
    subtitle: 'Cold-Pressed Citrus, Mountain Black Tea & Raw Wildflower Honey',
    category: 'tea',
    categoryLabel: 'Tea & Botanical',
    price: 4.75,
    image: '/lemon tea.jpg',
    roastLevel: 1,
    roastTitle: 'Sun-Cured Black Leaf',
    acidity: 4,
    complexity: 3,
    tastingNotes: ['Sicilian Lemon Zest', 'Crisp Bergamot', 'Wildflower Nectar', 'Sun-Dried Leaf'],
    badge: 'AFTERNOON COOLER',
    description: 'Loose-leaf high mountain black tea steeped slow and chilled over carved ice, stirred with freshly squeezed organic lemon juice and fragrant peel oil. The antidote to a humid afternoon.',
    details: {
      origin: 'Nilgiri Hills, India',
      process: 'Whole Leaf Orthodox Black',
      elevation: '2,000m',
      brewMethod: 'Cold Steep 14 Hours'
    },
    sizes: ['16oz Tall', '24oz Pitcher (+$5.00)'],
    temperatures: ['Iced']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'ALL CURRENT BATCHES' },
  { id: 'espresso', label: 'ESPRESSO & MILK' },
  { id: 'cold', label: 'COLD EXTRACTION' },
  { id: 'specialty', label: 'BOTANICAL & TEA' }
];
