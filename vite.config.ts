import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

/**
 * Build em duas passadas (ver package.json):
 *   1. cliente  -> dist/ com o bundle hidratado
 *   2. servidor -> dist-ssr/ usado por scripts/prerender.mjs
 * O prerender escreve um HTML pronto por idioma, então o conteúdo chega
 * no navegador e no buscador sem depender de JavaScript.
 */
export default defineConfig({
  plugins: [react(), tailwind()],
  base: "/",
  build: { assetsInlineLimit: 2048, cssCodeSplit: false },
});
