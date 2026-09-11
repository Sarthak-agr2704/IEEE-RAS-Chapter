/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ras: {
          bg: "#05070B",
          bgDark: "#030407",
          card: "#0D111A",
          cardHover: "#131826",
          blue: "#8B0000",       // Dark blood red primary
          red: "#8B0000",        // Dark blood red
          cyan: "#FF2A2A",       // Electric blood red accent
          blood: "#FF2A2A",      // Blood red accent
          cyanGlow: "rgba(255, 42, 42, 0.15)",
          text: "#FFFFFF",
          muted: "#A7B0BE",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(255, 42, 42, 0.4)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hud-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'blue-glow': 'radial-gradient(circle at center, rgba(139, 0, 0, 0.25) 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(circle at center, rgba(255, 42, 42, 0.18) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
