export const PRODUCTS = [
  // Signature Whole Bean Bags
  {
    id: 'friend-blend',
    name: 'Friend Blend',
    subtitle: 'Signature House Blend • Washed & Natural Process',
    category: 'beans',
    categoryLabel: 'WHOLE BEAN COFFEE',
    price: 17.00,
    image: '/friend_blend_bag.jpg',
    roastLevel: 3,
    roastTitle: 'Medium Roast',
    acidity: 2,
    complexity: 4,
    tastingNotes: ['Milk Chocolate', 'Toffee', 'Candied Pecan', 'Sweet Citrus'],
    badge: 'FLAGSHIP BLEND',
    description: 'Our pride and joy. Friend Blend is roasted to be forgiving, balanced, and deeply comforting across all brew methods—whether you are pulling lever shots or brewing a Sunday morning Chemex.',
    details: {
      origin: 'Huila, Colombia & Minas Gerais, Brazil',
      process: 'Washed & Natural Arabica',
      elevation: '1,650m - 1,900m',
      brewMethod: 'Drip, French Press, Pour Over, Espresso'
    },
    sizes: ['12oz Bag', '2lb Bag (+$16.00)', '5lb Bulk Bag (+$48.00)'],
    temperatures: ['Whole Bean', 'Ground for Drip', 'Ground for Espresso']
  },
  {
    id: 'into-the-void',
    name: 'Into The Void',
    subtitle: 'Bold Dark Roast • Deep Caramelization & Smoky Cocoa',
    category: 'beans',
    categoryLabel: 'WHOLE BEAN COFFEE',
    price: 17.50,
    image: '/into_the_void_bag.jpg',
    roastLevel: 5,
    roastTitle: 'Dark Roast',
    acidity: 1,
    complexity: 4,
    tastingNotes: ['Dark Cocoa', 'Smoky Cedar', 'Molasses', 'Toasted Marshmallow'],
    badge: 'DARK ROAST HIT',
    description: 'For those who want rich, heavy-bodied coffee with zero astringency. We push this lot into crack two on cast-iron, caramelizing every natural oil without scorching.',
    details: {
      origin: 'Antigua, Guatemala & Sumatra, Indonesia',
      process: 'Wet-Hulled & Washed',
      elevation: '1,500m - 1,800m',
      brewMethod: 'French Press, Cold Brew, Stovetop Moka'
    },
    sizes: ['12oz Bag', '2lb Bag (+$16.00)', '5lb Bulk Bag (+$48.00)'],
    temperatures: ['Whole Bean', 'Ground for Drip', 'Ground for French Press']
  },

  // Handcrafted Bar Beverages
  {
    id: 'classic-americano',
    name: 'Classic Americano',
    subtitle: 'Double Ristretto & Pure Mountain Spring Water',
    category: 'drinks',
    categoryLabel: 'BAR POUR',
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
    sizes: ['12oz Regular', '16oz Large'],
    temperatures: ['Hot', 'Iced']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    subtitle: 'Steamed Microfoam, Espresso Float & Hand-Cooked Amber Drizzle',
    category: 'drinks',
    categoryLabel: 'BAR POUR',
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
    category: 'drinks',
    categoryLabel: 'BAR POUR',
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
    category: 'drinks',
    categoryLabel: 'COLD EXTRACTION',
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
    categoryLabel: 'BOTANICAL & TEA',
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
    category: 'specialty',
    categoryLabel: 'BOTANICAL & TEA',
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
  },

  // Amps Gear & Merch
  {
    id: 'amps-gear-tshirt',
    name: 'Bean Hunters Heavyweight Tee',
    subtitle: '100% Combed Cotton • Screenprinted in Harrisburg, PA',
    category: 'merch',
    categoryLabel: 'AMPS GEAR',
    price: 32.00,
    image: '/amps_gear_tshirt.jpg',
    roastLevel: 0,
    roastTitle: 'Custom Apparel',
    acidity: 0,
    complexity: 5,
    tastingNotes: ['Heavyweight 6.5oz', 'Vintage Washed Cream', 'Relaxed Boxy Fit', 'Soft Hand Feel'],
    badge: 'OFFICIAL MERCH',
    description: 'Printed locally with water-based burnt orange ink on a heavy natural cream cotton shirt. Built to survive hundreds of espresso dial-in sessions and record digging runs.',
    details: {
      origin: 'Cut & Sewn in USA, Printed in PA',
      process: 'Water-based discharge screenprint',
      elevation: 'N/A',
      brewMethod: 'Cold Wash, Hang Dry'
    },
    sizes: ['Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
    temperatures: ['Unisex Fit']
  },
  {
    id: 'diner-mug',
    name: 'Little Amps Vintage Diner Mug',
    subtitle: '10oz Heavy Ceramic • Heat Retentive Vitrified Porcelain',
    category: 'merch',
    categoryLabel: 'AMPS GEAR',
    price: 18.00,
    image: '/diner_mug.jpg',
    roastLevel: 0,
    roastTitle: 'Barware',
    acidity: 0,
    complexity: 4,
    tastingNotes: ['10oz Capacity', 'Ultra-Thick Wall', 'Vitrified Ceramic', 'Comfort Finger Grip'],
    badge: 'COUNTER ICON',
    description: 'The exact ceramic mug clinking across our Harrisburg counter every morning. Super thick walls keep your drip coffee hot while you flip an album over.',
    details: {
      origin: 'Vitrified High-Fire Porcelain',
      process: 'Fired Ceramic Decal Print',
      elevation: 'N/A',
      brewMethod: 'Dishwasher & Microwave Safe'
    },
    sizes: ['10oz Classic Diner Size'],
    temperatures: ['Standard']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'ALL PRODUCTS' },
  { id: 'beans', label: 'ROASTED BEANS' },
  { id: 'drinks', label: 'BAR CRAFT' },
  { id: 'specialty', label: 'BOTANICAL & TEA' },
  { id: 'merch', label: 'AMPS GEAR' }
];
