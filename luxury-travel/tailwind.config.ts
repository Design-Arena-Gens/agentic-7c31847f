import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#061224",
        indigoDusk: "#0d1f3c",
        royal: "#122a53",
        aurum: "#d4af37",
        ivory: "#f6f1e6",
        mist: "#d0d5df",
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, rgba(6,18,36,0.95), rgba(18,42,83,0.85))",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(6,18,36,0.05), rgba(6,18,36,0.9))",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        "glow-gold": "0 20px 45px -25px rgba(212, 175, 55, 0.55)",
        "soft-xl": "0 18px 40px -15px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        "luxury-bounce": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      dropShadow: {
        gold: "0 28px 45px rgba(212, 175, 55, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
