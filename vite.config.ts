import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { // 别名
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5000, // 启动的端口号
  },
});
