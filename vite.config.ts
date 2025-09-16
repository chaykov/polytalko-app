/// <reference types="vitest" />

import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      base: "/",
      plugins: [react(), tailwindcss(), tsconfigPaths()],
      server: {
        host: true,
        port: 5173,
        strictPort: true,
      },

      test: {
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        globals: true, }
    };
  } else {
    return {
      base: "/",
      plugins: [react(), tailwindcss(), tsconfigPaths()],
      server: {
        host: true,
        port: 8080,
        strictPort: true,
      },
    };
  }
});