import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://sunnytools.site",
  base: process.env.BASE_PATH ?? "/",
  output: "static"
});
