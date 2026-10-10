/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alqami: {
          dark: '#0c0e14',
          surface: '#151922',
          glass: 'rgba(255, 255, 255, 0.08)',
          'glass-border': 'rgba(255, 255, 255, 0.18)',
          accent: '#d4af37', // Heritage Gold
          'accent-glow': 'rgba(212, 175, 55, 0.35)',
          teal: '#2dd4bf',
          cyan: '#38bdf8',
          orange: '#f97316'
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
