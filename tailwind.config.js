import franken from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [franken()],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    {
      pattern: /^uk-/,
    },
    "mt-6",
    "mt-10",
    "text-base",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
