import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#132136',
          dark: '#050D18'
        },
        cyan: {
          DEFAULT: '#00D4FF',
          glow: 'rgba(0, 212, 255, 0.3)'
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
}
