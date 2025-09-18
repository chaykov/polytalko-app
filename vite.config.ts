import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command }) => {
  const common = {
    base: "/",
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
      // Dodaj plugin TYLKO dla build
      command === "build" &&
      visualizer({
        filename: "stats.html",
        template: "treemap", // albo "sunburst" / "network"
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),
  };

  return {
    ...common,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            tanstack: ["@tanstack/react-query", "@tanstack/react-query-devtools"],
            router: ["react-router"],
          },
        },
      },
    },
    server: {
      host: true,
      port: command === "serve" ? 5173 : 8080,
      strictPort: true,
    },
    test:
        command === "serve"
            ? {
              environment: "jsdom",
              setupFiles: "./src/setupTests.ts",
              globals: true,
            }
            : undefined,
  };
});
