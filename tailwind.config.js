/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'uplyft-purple': '#7b2cbf',
        'uplyft-dark': '#0e0e0e',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #7b2cbf40' },
          '100%': { boxShadow: '0 0 30px #7b2cbf60, 0 0 40px #7b2cbf40' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};