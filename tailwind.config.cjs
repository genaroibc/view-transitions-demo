/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-0": "var(--gray-0)",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
      }
    }
  },
  plugins: []
}
