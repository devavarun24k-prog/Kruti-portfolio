/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          950: '#08080a',
          900: '#111114',
          850: '#17171c',
          800: '#202026',
          700: '#2e2e38',
          600: '#484856',
          400: '#9494a6',
          300: '#c2c2d1',
          200: '#e5e5ed',
          100: '#f5f5f9',
          50: '#fafafd',
        },
        champagne: {
          DEFAULT: '#d4af37',
          light: '#f5e6be',
          muted: '#bfa15f',
          dark: '#9a7b20',
          glow: '#ffdf78'
        },
        roseGold: {
          DEFAULT: '#b76e79',
          light: '#e8c4c8',
          dark: '#8b4b54'
        },
        pearl: {
          DEFAULT: '#f9f6f0',
          dark: '#ece6da'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
