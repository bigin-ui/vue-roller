import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "src/index.ts",
      name: "vue-roller",
      fileName: (format) => `vue-roller.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
  esbuild: {
    jsxInject: `import { h } from 'vue'`,
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// const path = require("path");

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [vue()],
//     resolve: {
//         alias: {
//             "@": path.resolve(__dirname, "./src"),
//         },
//     },
//     base: "/vue-roller/",
//     build: {
//         outDir: "docs",
//     },
//     esbuild: {
//         jsxInject: `import { h } from 'vue'`,
//         jsxFactory: "h",
//         jsxFragment: "Fragment",
//     },
// });
