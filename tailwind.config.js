/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 3s steps(20) 1s 1 normal both',
        marquee: 'marquee 12s linear infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '20ch' }, // adjust based on text length
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
