import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  // @ts-ignore
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#a855f7",
          "primary-focus": "#9333ea", 
          "primary-content": "#ffffff",
          
          "secondary": "#ec4899",
          "secondary-focus": "#db2777",
          "secondary-content": "#ffffff",
          
          "accent": "#06b6d4",
          "accent-focus": "#0891b2", 
          "accent-content": "#ffffff",
          
          "neutral": "#1f2937",
          "neutral-focus": "#111827",
          "neutral-content": "#f3f4f6",
          
          "base-100": "#1f2937",
          "base-200": "#111827", 
          "base-300": "#374151",
          "base-content": "#f9fafb",
          
          "info": "#3abff8",
          "success": "#36d399", 
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};

export default config;