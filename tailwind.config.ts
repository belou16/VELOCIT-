const config = {
  content: ['./src/views/**/*.ejs', './src/public/js/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        rosso: '#DC143C',
        oro: '#D4AF37',
        nero: '#1A1A1A',
        crema: '#F5F5DC',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        gold: '0 0 22px rgba(212, 175, 55, 0.35)',
      },
      backgroundImage: {
        speedLines:
          'repeating-linear-gradient(120deg, rgba(212,175,55,0.06) 0px, rgba(212,175,55,0.06) 1px, transparent 1px, transparent 22px)',
      },
    },
  },
  plugins: [],
};

export default config;
