/* eslint-disable no-undef */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/features/**": path.resolve(__dirname, "./src/features/**"),
      "@/components/**": path.resolve(__dirname, "./src/components/**"),
      "@/routes/**": path.resolve(__dirname, "./src/misc/routes/**"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
})
