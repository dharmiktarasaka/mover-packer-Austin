/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F6F3EC',
          dark: '#EAE6DC',
          light: '#FAF8F4',
        },
        charcoal: {
          DEFAULT: '#171717',
          light: '#242424',
          muted: '#3B3B3B',
          soft: '#595959',
        },
        'electric-orange': {
          DEFAULT: '#FF5A1F',
          hover: '#E04A12',
          light: '#FF7B47',
        },
        'soft-orange': {
          DEFAULT: '#FF8A5B',
          light: '#FFA680',
        },
        'editorial-gray': {
          DEFAULT: '#E8E6E0',
          border: '#D8D5CD',
          dark: '#B0ADA5',
        },
        'muted-green': {
          DEFAULT: '#B8C8B0',
          dark: '#9CB094',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Archivo Black"', 'sans-serif'],
        headline: ['"Archivo Black"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.15em',
        superwide: '0.25em',
      },
      boxShadow: {
        'sharp': '4px 4px 0px 0px #171717',
        'sharp-orange': '4px 4px 0px 0px #FF5A1F',
        'sharp-lg': '8px 8px 0px 0px #171717',
        'subtle': '0 2px 20px rgba(0,0,0,0.04)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
