import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "emit-ui-spa-not-found",
      apply: "build",
      closeBundle: () => copyFileSync("dist/index.html", "dist/404.html"),
    },
  ],
});
