/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#24131F',
          800: '#2E1822',
          700: '#381E2B',
          600: '#422034',
          500: '#4D2640',
        },
        wine: {
          900: '#3B1828',
          800: '#4A1E30',
          700: '#5B2438',
          600: '#6B2D44',
          500: '#7B3650',
        },
        mauve: {
          400: '#8A566C',
          300: '#9C6478',
          200: '#AE7E8E',
          100: '#C09AA8',
        },
        ivory: {
          50: '#FBF5F0',
          100: '#F7EEE8',
          200: '#EDE0D6',
          300: '#DCCDBF',
          400: '#C9B8A8',
        },
        blush: {
          50: '#F4D8DE',
          100: '#E4BBC7',
          200: '#D8A1AE',
          300: '#C78896',
          400: '#B67080',
          500: '#A55872',
        },
        gold: {
          200: '#E0AA98',
          300: '#D4A08E',
          400: '#C98E7B',
          500: '#B87A65',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'wide-2': '0.18em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'drift': 'drift 18s ease-in-out infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-20px) translateX(15px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.08' },
        },
      },
    },
  },
  plugins: [],
};
