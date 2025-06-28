/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Original animations (keeping as backup)
        typewriter: 'typewriter 3s steps(20) 1s 1 normal both',
        marquee: 'marquee 12s linear infinite',
        'fade-slide-up': 'fadeSlideUp 1.2s ease-out forwards',
        'bounce-in': 'bounceIn 1.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scale-in': 'scaleIn 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1.2s ease-out forwards',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'bus-drive': 'busDrive 4s ease-in-out infinite',
        
        // NEW CREATIVE ANIMATIONS
        'wave-text': 'waveText 2s ease-in-out infinite',
        'flip-in': 'flipIn 1.5s ease-out forwards',
        'elastic-bounce': 'elasticBounce 2s ease-out forwards',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'matrix-reveal': 'matrixReveal 2s ease-out forwards',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'zoom-blur': 'zoomBlur 1.5s ease-out forwards',
        'split-reveal': 'splitReveal 2s ease-out forwards',
        'floating': 'floating 3s ease-in-out infinite',
        'pulse-grow': 'pulseGrow 2s ease-in-out infinite',
        'slide-up-stagger': 'slideUpStagger 1.5s ease-out forwards',
        'rotate-in': 'rotateIn 1.5s ease-out forwards',
        'glitch': 'glitch 2s ease-in-out infinite',
        'rainbow-wave': 'rainbowWave 3s ease-in-out infinite',
        'morphing': 'morphing 4s ease-in-out infinite',
        'particle-burst': 'particleBurst 2s ease-out forwards',
        'liquid-morph': 'liquidMorph 3s ease-in-out infinite',
        'hologram': 'hologram 2.5s ease-in-out infinite',
        'cyber-scan': 'cyberScan 3s ease-in-out infinite',
        'magnetic-pull': 'magneticPull 1.8s ease-out forwards',
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
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3) translateY(-50px)' },
          '50%': { opacity: '1', transform: 'scale(1.05) translateY(0)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)' },
          '50%': { textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        busDrive: {
          '0%, 100%': { transform: 'translateX(-10px) rotate(-2deg)' },
          '50%': { transform: 'translateX(10px) rotate(2deg)' },
        },
        
        // NEW CREATIVE KEYFRAMES
        waveText: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(-5px)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'rotateY(-90deg) scale(0.5)' },
          '50%': { opacity: '1', transform: 'rotateY(0deg) scale(1.1)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg) scale(1)' },
        },
        elasticBounce: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(-180deg)' },
          '50%': { opacity: '1', transform: 'scale(1.3) rotate(-90deg)' },
          '75%': { transform: 'scale(0.9) rotate(-45deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        neonFlicker: {
          '0%, 100%': { 
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
            opacity: '1'
          },
          '50%': { 
            textShadow: '0 0 2px #00ffff, 0 0 5px #00ffff, 0 0 8px #00ffff, 0 0 12px #00ffff',
            opacity: '0.8'
          },
        },
        matrixReveal: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px)',
            filter: 'blur(10px)',
            letterSpacing: '10px'
          },
          '50%': { 
            opacity: '0.7',
            filter: 'blur(5px)',
            letterSpacing: '5px'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
            filter: 'blur(0px)',
            letterSpacing: 'normal'
          },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        zoomBlur: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(2) translateZ(0)',
            filter: 'blur(20px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateZ(0)',
            filter: 'blur(0px)'
          },
        },
        splitReveal: {
          '0%': { 
            opacity: '0',
            transform: 'scaleX(0)',
            transformOrigin: 'center'
          },
          '50%': { 
            opacity: '1',
            transform: 'scaleX(1.1)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideUpStagger: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(100px) skewY(10deg)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) skewY(0deg)' 
          },
        },
        rotateIn: {
          '0%': { 
            opacity: '0', 
            transform: 'rotate(-200deg) scale(0)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'rotate(0deg) scale(1)' 
          },
        },
        glitch: {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          },
        },
        rainbowWave: {
          '0%': { 
            backgroundPosition: '0% 50%',
            transform: 'translateY(0px)'
          },
          '25%': { 
            backgroundPosition: '25% 50%',
            transform: 'translateY(-5px)'
          },
          '50%': { 
            backgroundPosition: '50% 50%',
            transform: 'translateY(0px)'
          },
          '75%': { 
            backgroundPosition: '75% 50%',
            transform: 'translateY(-3px)'
          },
          '100%': { 
            backgroundPosition: '100% 50%',
            transform: 'translateY(0px)'
          },
        },
        morphing: {
          '0%, 100%': { 
            borderRadius: '20px',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            borderRadius: '50px',
            transform: 'rotate(5deg) scale(1.02)'
          },
          '50%': { 
            borderRadius: '30px',
            transform: 'rotate(0deg) scale(1.05)'
          },
          '75%': { 
            borderRadius: '40px',
            transform: 'rotate(-5deg) scale(1.02)'
          },
        },
        particleBurst: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.5)',
            filter: 'brightness(2)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
            filter: 'brightness(1.5)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
        },
        liquidMorph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg)'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(180deg)'
          },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'translateZ(0)',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '25%': { 
            opacity: '0.7',
            transform: 'translateZ(10px)',
            filter: 'hue-rotate(90deg) brightness(1.2)'
          },
          '50%': { 
            opacity: '0.9',
            transform: 'translateZ(0)',
            filter: 'hue-rotate(180deg) brightness(0.8)'
          },
          '75%': { 
            opacity: '0.8',
            transform: 'translateZ(-10px)',
            filter: 'hue-rotate(270deg) brightness(1.1)'
          },
        },
        cyberScan: {
          '0%': { 
            backgroundPosition: '0% 0%',
            transform: 'skewX(0deg)'
          },
          '25%': { 
            backgroundPosition: '25% 0%',
            transform: 'skewX(2deg)'
          },
          '50%': { 
            backgroundPosition: '50% 0%',
            transform: 'skewX(0deg)'
          },
          '75%': { 
            backgroundPosition: '75% 0%',
            transform: 'skewX(-2deg)'
          },
          '100%': { 
            backgroundPosition: '100% 0%',
            transform: 'skewX(0deg)'
          },
        },
        magneticPull: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px) scale(0.8) rotateX(90deg)'
          },
          '60%': { 
            opacity: '1',
            transform: 'translateY(-10px) scale(1.05) rotateX(0deg)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1) rotateX(0deg)'
          },
        },
      },
    },
  },
  plugins: [],
};