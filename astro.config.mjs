/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";

/* 
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use 
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/

const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://seryibaran.github.io";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: !isBuild,
      },
      manifest: {
        name: "Сайт SeryiBaran",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/favicons/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicons/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: ".",
        display: "standalone",
      },
    }),
  ],
});
