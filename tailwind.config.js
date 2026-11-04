/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        'display': ['"DM Serif Display"', '"Little Amps"', 'Georgia', 'serif'],
        'body': ['"Inclusive Sans"', '"Work Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"Necto Mono"', 'monospace'],
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
