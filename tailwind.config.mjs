// import animations from "@midudev/tailwind-animations";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        atomic: ["Caveat Brush", "monospace"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        twitch: "var(--color-twitch)",
        ice: "var(--color-twitch-ice)",
      },
    },
  },
  plugins: [
    // animations,
    function ({ addVariant }) {
      addVariant("any-hover", "@media (any-hover: hover) { &:hover }");
      addVariant("mobile", "@media (any-hover: none) { & }");
    },
  ],
};
