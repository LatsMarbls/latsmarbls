/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '10px',
        '2xs': '11px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ink: '#111110',
        paper: '#F2F0EB',
        line: '#DCD8CF',
        paper2: '#FAF9F6',
        'dgray': '#1E1E1E',
        'highlight': '#3B3B3B',
        gray: {
          DEFAULT: '#6F6F6F',
          50: '#F7F7F8',
          100: '#EFEFF1',
          200: '#E3E3E7',
          300: '#C7C7CD',
          400: '#9B9BA3',
          500: '#6F6F6F',
          600: '#565659',
          700: '#3E3E41',
          800: '#2A2A2C',
          900: '#1B1B1D',
        },
        accent: {
          soft: '#F4F4F5',
          300: '#C7C7CD',
          400: '#9B9BA3',
          500: '#6F6F6F',
          600: '#1E1E1E',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,15,15,0.04), 0 8px 24px -12px rgba(15,15,15,0.12)',
        lift: '0 2px 4px rgba(15,15,15,0.05), 0 24px 48px -20px rgba(15,15,15,0.25)',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        caret: "caret 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
  ],
}
