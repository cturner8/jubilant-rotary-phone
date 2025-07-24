import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// set default site, override in deployment action
const { ASTRO_SITE = "cturner8.github.io" } = process.env;

// https://astro.build/config
export default defineConfig({
  site: `https://${ASTRO_SITE}`,
  trailingSlash: "never",
  server: {
    host: "127.0.0.1",
  },
  integrations: [sitemap(), robotsTxt(), UnoCSS({ injectReset: true }), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
