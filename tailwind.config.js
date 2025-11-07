/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pine-green': '#165C2F',
        'pine-gold': '#E0B24A',
        'pine-navy': '#08293C',
        'pine-white': '#F7F7F5',
        'forest-green': '#1E7A3B',
        'summit-blue': '#0B4D8C',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #1E7A3B 0%, #0B4D8C 100%)',
      },
    },
  },
  plugins: [],
};
