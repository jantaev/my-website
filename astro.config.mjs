import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Deployed to GitHub Pages at https://jantaev.github.io/my-website/
export default defineConfig({
  site: "https://jantaev.github.io",
  base: "/my-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
