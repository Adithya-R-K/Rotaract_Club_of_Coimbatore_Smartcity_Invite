import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#060B14",
        "midnight-deep": "#040810",
        teal: {
          DEFAULT: "#0B2E2B",
          light: "#123F3A"
        },
        emerald: {
          DEFAULT: "#1F6F5C",
          light: "#2E9179"
        },
        aurora: "#4FD8C4",
        violet: "#7C6FE0",
        parchment: "#F4F1E8",
        gold: {
          DEFAULT: "#D9B26A",
          soft: "#E8CE9C"
        }
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,216,196,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 10%, rgba(124,111,224,0.16), transparent 55%), radial-gradient(ellipse 70% 60% at 10% 100%, rgba(31,111,92,0.22), transparent 60%)"
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" }
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
