/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#04165D',
          deep: '#04165D',
          mid: '#424F85',
          pale: '#D8D9E5',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        reveal: 'reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1.4s infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
