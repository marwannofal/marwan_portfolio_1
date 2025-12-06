import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",          // لأن الموقع على marwannofal.info مباشرة
  build: {
    outDir: "docs",   // نخلي البيلد يطلع في docs عشان GitHub Pages
  },
});
