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
        studio: {
          950: '#0e0e10',
          900: '#141416',
          850: '#1a191c',
          800: '#222126',
          750: '#2c2b32',
          700: '#3a3942',
          600: '#555460',
          500: '#757382',
          400: '#9b99a8',
          300: '#c5c3d2',
          200: '#e5e3ec',
          100: '#f4f3f8',
          50: '#faf9fc',
        },
        warm: {
          bg: '#0f0f10',
          card: '#161618',
          cardBorder: '#27262c',
          surface: '#1b1b1e',
          stone: '#e6e2dc',
          sand: '#d1c7b7',
          parchment: '#f5f2eb',
          accent: '#c5a880',
          accentMuted: '#9e8460',
          accentLight: '#ebdcc7',
          darkAccent: '#2a241c'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
