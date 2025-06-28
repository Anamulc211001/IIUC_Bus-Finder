/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Original typewriter (keeping as backup)
        typewriter: 'typewriter 3s steps(20) 1s 1 normal both',
        marquee: 'marquee 12s linear infinite',
        
        // New enhanced animations
        'fade-slide-up': 'fadeSlideUp 1.2s ease-out forwards',
        'bounce-in': 'bounceIn 1.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scale-in': 'scaleIn 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1.2s ease-out forwards',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'bus-drive': 'busDrive 4s ease-in-out infinite',
      },
      keyframes: {
        // Original keyframes
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '20ch' },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
        // New enhanced keyframes
        fadeSlideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        bounceIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.3) translateY(-50px)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05) translateY(0)' 
          },
          '70%': { 
            transform: 'scale(0.95)' 
          },
          '100%': { 
            transform: 'scale(1)' 
          },
        },
        glowPulse: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)' 
          },
          '50%': { 
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.8)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(100px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        textShimmer: {
          '0%': { 
            backgroundPosition: '-200% center' 
          },
          '100%': { 
            backgroundPosition: '200% center' 
          },
        },
        busDrive: {
          '0%, 100%': { 
            transform: 'translateX(-10px) rotate(-2deg)' 
          },
          '50%': { 
            transform: 'translateX(10px) rotate(2deg)' 
          },
        },
      },
    },
  },
  plugins: [],
};