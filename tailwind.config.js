/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#317576',
        'turquoise-dark': '#235758',
        'turquoise-light': '#e8f3f3',
        'espresso': '#522c25',
        'burnt-orange': '#c03001',
        'amber': '#c46500',
        'amber-ink': '#c46500',
        'marigold': '#febf6f',
        'marigold-wash': '#febf6f',
        'dusty-blue': '#89b4ca',
        'cream': '#fff9f2',
        'cream-paper': '#fff9f2',
        'linen': '#f6ede3',
        'linen-beige': '#f6ede3',
        'taupe-hairline': '#e6dad4',
        'sandstone': '#cbbbb4',
        'coffee-dust': '#977e77',
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"Plus Jakarta Sans"', 'monospace'],
      },
      borderRadius: {
        'sm': '3px',
        'cards': '8px',
        'badges': '3px',
        'images': '8px',
        'inputs': '3px',
        'buttons': '3px',
      },
      letterSpacing: {
        'tighter': '-0.10em',
        'tight': '-0.06em',
        'mono': '0.05em',
      }
    },
  },
  plugins: [],
};

