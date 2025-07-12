import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://gianmarcocavallo.com/",
  server: {
    host: "127.0.0.1",
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://gianmarcocavallo.com/sitemap-index.xml",
        "https://gianmarcocavallo.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  vite: {
    assetsInclude: "**/*.riv",
  },
});
