import { defineConfig } from "vitest/config";

// Served from a subpath (dulapahv.dev/not-found), so every asset URL must be
// prefixed with /not-found/ — otherwise the browser would request assets from
// the domain root, outside this Worker's route.
export default defineConfig({
  base: "/not-found/",
  test: {
    environment: "jsdom",
  },
});
