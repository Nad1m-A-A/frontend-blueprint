import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  assetsInclude: ["**/*.TTF", "**/*.JPG", "**/*.OTF"],
  plugins: [react()],
  resolve: {
    alias: {
      "@utility": path.resolve(__dirname, "src/utility"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@data": path.resolve(__dirname, "src/assets/data"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/components/services"),
      "@home": path.resolve(__dirname, "src/components/home"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
});
