import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: ".vite",
  optimizeDeps: {
    include: ["@emotion/styled", "@hannagrams/ui", "@hannagrams/theme"],
  },
});
