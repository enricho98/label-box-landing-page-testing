import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.html', '.xml'],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "Atom": fileURLToPath(new URL("./src/component/atoms", import.meta.url)),
      "Molecule": fileURLToPath(new URL("./src/component/molecules", import.meta.url)),
      "Organism": fileURLToPath(new URL("./src/component/organisms", import.meta.url)),
      "Page": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
