/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 35px rgba(15, 23, 42, 0.08)"
      },
      colors: {
        ink: "#14213d",
        "brand-teal": "#0f766e",
        "brand-gold": "#b7791f"
      }
    }
  },
  plugins: []
};
